import React, { useState, useEffect, useMemo } from 'react';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import {
  Loader2, Lock, Coins, Target, CalendarPlus, ChevronRight, X, HelpCircle,
  TrendingUp, TrendingDown, AlertTriangle, CheckCircle2, BarChart3, Crosshair, Layers, Sparkles
} from 'lucide-react';
import { ROUTE_TAXONOMY } from '../../data/routeTaxonomy';
import { LearningRoute, StudentGameProfile } from '../../types/gamification';
import {
  GalaxyUnlocks, canAccessGalaxy, tryUnlock, isUnlockActive,
  GALAXY_EXTRA_PATHWAY_COST, GALAXY_MULTIVERSE_COST,
  pctToStatus, computeChapterStats, rankWeakTopics, AttemptLite, GalaxyStatus
} from '../../utils/galaxyEngine';

// ================================================================
// পারফরম্যান্স কমান্ড সেন্টার — ডেটা-প্রথম বিশ্লেষণ (গবেষণা-ভিত্তিক)
//
// Research → design decisions:
//  • ছাত্র-সমীক্ষা: ৯৩% চায় "কোন সাব-টপিক improve করব" স্পষ্ট নির্দেশ
//    (ERIC EJ1333749) → Priority Matrix + "আগে কোনটা পড়ব" র‍্যাংক তালিকা
//  • LearningViz (Springer 2024): heatmap-ই gap চেনার সবচেয়ে কার্যকর ভিউ
//    → chapter×accuracy heatmap grid
//  • Gauge/৫-স্তরের রঙ current-status বোঝায় দ্রুত (ERIC) → রেডিনেস গজ
//  • Duolingo নীতি: analysis → action বাধ্যতামূলক → প্রতি দুর্বল সারিতে CTA
// ================================================================

const toBn = (n: number | string) => {
  const d = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return String(n).split('').map(c => /\d/.test(c) ? d[parseInt(c,10)] : c).join('');
};

const ROUTE_LABELS: Record<string, string> = {
  academic: 'একাডেমিক', medical: 'মেডিকেল', varsity: 'ভার্সিটি', engineering: 'ইঞ্জিনিয়ারিং'
};

// DGHS/ভর্তি পরীক্ষায় বিষয়-ওজন (মেডিকেল অফিসিয়াল; বাকিগুলো প্রচলিত কাঠামো)
const SUBJECT_WEIGHTS: Record<string, Record<string, number>> = {
  medical: { 'জীববিজ্ঞান': 30, 'রসায়ন': 25, 'পদার্থবিজ্ঞান': 20, 'ইংরেজি': 15, 'সাধারণ জ্ঞান': 10 },
};

function subjectWeight(route: string, subjectName: string): number | null {
  const w = SUBJECT_WEIGHTS[route];
  if (!w) return null;
  const key = Object.keys(w).find(k => subjectName.includes(k));
  return key ? w[key] : null;
}

interface ChapterRow {
  id: string;
  name: string;
  subjectName: string;
  topics: string[];
  pct: number | null;
  attemptsCount: number;
  status: GalaxyStatus;
  weight: number | null;      // বিষয়ের পরীক্ষা-ওজন
  priorityScore: number;      // (100-accuracy) × weight-factor → কোনটা আগে পড়া উচিত
  potentialGain: number;      // এই অধ্যায় ৮০%-এ তুললে আনুমানিক কত % উন্নতি
}

interface Props {
  userId: string | null;
  userData?: any;
  gameProfile?: StudentGameProfile | null;
  onCoinsChanged?: (newCoins: number) => void;
  onStartMission?: (chapterName: string, topicName: string) => void;
  onAddToRoutine?: (title: string) => void;
}

export default function PerformanceCommandCenter({
  userId, userData, gameProfile, onCoinsChanged, onStartMission, onAddToRoutine
}: Props) {
  const ownRoute = (gameProfile?.selectedRoute || 'academic') as LearningRoute;
  const [activeRoute, setActiveRoute] = useState<LearningRoute>(ownRoute);
  const [attempts, setAttempts] = useState<AttemptLite[]>([]);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState<number>(userData?.coins || 0);
  const [unlocks, setUnlocks] = useState<GalaxyUnlocks>(userData?.galaxyUnlocks || {});
  const [unlockError, setUnlockError] = useState('');
  const [unlockBusy, setUnlockBusy] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const [showGuide, setShowGuide] = useState(false);
  const [subjectFilter, setSubjectFilter] = useState<string>('all');

  useEffect(() => { setCoins(userData?.coins || 0); }, [userData?.coins]);
  useEffect(() => { setUnlocks(userData?.galaxyUnlocks || {}); }, [userData?.galaxyUnlocks]);
  useEffect(() => { setActiveRoute(ownRoute); }, [ownRoute]);

  useEffect(() => {
    const load = async () => {
      if (!userId || !db) { setLoading(false); return; }
      try {
        const snap = await getDocs(collection(db, 'users', userId, 'examAttempts'));
        setAttempts(snap.docs.map(d => d.data() as AttemptLite));
      } catch (e) {
        console.warn('Command center attempts load failed:', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [userId]);

  // ---------- ডেটা মডেল: সব অধ্যায়ের সারি (taxonomy = একক উৎস) ----------
  const allRows: ChapterRow[] = useMemo(() => {
    const routeDef = (ROUTE_TAXONOMY as any)[activeRoute];
    if (!routeDef) return [];
    const rows: ChapterRow[] = [];
    routeDef.subjects.forEach((s: any) => {
      const weight = subjectWeight(activeRoute, s.name);
      s.papers.forEach((p: any) => {
        p.chapters.forEach((c: any) => {
          const stats = computeChapterStats(attempts, c.name);
          const pct = stats.pct;
          const status = pctToStatus(pct);
          // Priority = দুর্বলতা × পরীক্ষায় গুরুত্ব (LearningViz-ঘরানার gap-প্রাধান্য)
          const weakness = pct === null ? 60 : Math.max(0, 100 - pct); // অনাবিষ্কৃত = মাঝারি-উচ্চ অগ্রাধিকার
          const wFactor = weight ? weight / 10 : 2;
          const priorityScore = Math.round(weakness * wFactor);
          const potentialGain = pct === null ? 0 : Math.max(0, Math.round((80 - pct) * (wFactor / 10) * 10) / 10);
          rows.push({
            id: c.id, name: c.name, subjectName: s.name, topics: c.topics || [],
            pct, attemptsCount: stats.attempts, status, weight, priorityScore, potentialGain
          });
        });
      });
    });
    return rows;
  }, [activeRoute, attempts]);

  const subjects = useMemo(() => Array.from(new Set(allRows.map(r => r.subjectName))), [allRows]);
  const rows = useMemo(
    () => subjectFilter === 'all' ? allRows : allRows.filter(r => r.subjectName === subjectFilter),
    [allRows, subjectFilter]
  );

  // ---------- সারাংশ KPI ----------
  const kpi = useMemo(() => {
    const explored = allRows.filter(r => r.pct !== null);
    const readiness = explored.length
      ? Math.round(explored.reduce((s, r) => s + (r.pct || 0), 0) / explored.length)
      : 0;
    const mastered = allRows.filter(r => r.status === 'mastered').length;
    const danger = allRows.filter(r => r.status === 'danger').length;
    const untouched = allRows.filter(r => r.status === 'untouched').length;
    // Trend: শেষ ৫ exam বনাম আগের ৫
    const sorted = [...attempts].sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
    const recent = sorted.slice(0, 5);
    const prior = sorted.slice(5, 10);
    const avg = (arr: AttemptLite[]) => arr.length ? arr.reduce((s, a) => s + (a.percentage || 0), 0) / arr.length : null;
    const rAvg = avg(recent), pAvg = avg(prior);
    const trend = rAvg !== null && pAvg !== null ? Math.round(rAvg - pAvg) : null;
    return { readiness, mastered, danger, untouched, total: allRows.length, totalExams: attempts.length, trend };
  }, [allRows, attempts]);

  // ---------- Priority list: আগে কোনটা পড়ব (দুর্বলতা × গুরুত্ব) ----------
  const priorityList = useMemo(
    () => [...allRows]
      .filter(r => r.status !== 'mastered')
      .sort((a, b) => b.priorityScore - a.priorityScore)
      .slice(0, 5),
    [allRows]
  );

  const hasAccess = canAccessGalaxy(activeRoute, ownRoute, unlocks);

  const handleUnlock = async (kind: 'pathway' | 'multiverse', route: LearningRoute | null) => {
    setUnlockError('');
    setUnlockBusy(true);
    const res = tryUnlock(kind, route, coins, unlocks);
    if (!res.ok) {
      setUnlockError(res.error || 'আনলক ব্যর্থ');
      setUnlockBusy(false);
      return;
    }
    setCoins(res.newCoins!);
    setUnlocks(res.newUnlocks!);
    onCoinsChanged?.(res.newCoins!);
    if (userId && db) {
      try {
        await setDoc(doc(db, 'users', userId), { coins: res.newCoins, galaxyUnlocks: res.newUnlocks }, { merge: true });
      } catch (e) { console.warn('unlock persist failed', e); }
    }
    setUnlockBusy(false);
  };

  const statusColor = (s: GalaxyStatus) =>
    s === 'mastered' ? '#34d399' : s === 'weak' ? '#fbbf24' : s === 'danger' ? '#fb7185' : '#475569';

  const statusBn = (s: GalaxyStatus) =>
    s === 'mastered' ? 'আয়ত্তে' : s === 'weak' ? 'দুর্বল' : s === 'danger' ? 'ঝুঁকি' : 'পরীক্ষা দাওনি';

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-slate-400 gap-3">
        <Loader2 className="w-6 h-6 animate-spin" /> আপনার পারফরম্যান্স ডেটা লোড হচ্ছে...
      </div>
    );
  }

  return (
    <div className="space-y-5 animate-in fade-in duration-300">

      {/* ===== HEADER ===== */}
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-white flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-cyan-400" />
            পারফরম্যান্স কমান্ড সেন্টার
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            আপনার সব পরীক্ষার ডেটা → কোন অধ্যায় আগে পড়বেন, কোথায় সবচেয়ে বেশি নম্বর বাড়বে — সব এক পর্দায়।
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Coins className="w-3.5 h-3.5" /> {toBn(coins)}
          </span>
          <button onClick={() => setShowGuide(true)}
            className="text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-1.5 rounded-full cursor-pointer flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" /> গাইড
          </button>
        </div>
      </div>

      {/* ===== PATHWAY TABS ===== */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex bg-slate-900 border border-slate-800 rounded-2xl p-1.5 gap-1 flex-wrap">
          {(['academic', 'medical', 'varsity', 'engineering'] as LearningRoute[]).map(r => {
            const locked = !canAccessGalaxy(r, ownRoute, unlocks);
            return (
              <button key={r}
                onClick={() => { setActiveRoute(r); setSubjectFilter('all'); setExpandedChapter(null); setUnlockError(''); }}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeRoute === r ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                }`}>
                {ROUTE_LABELS[r]}
                {locked && <Lock className="w-3 h-3" />}
                {r === ownRoute && <span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded-full">নিজের</span>}
              </button>
            );
          })}
        </div>
        {!isUnlockActive(unlocks['multiverse']) && (
          <button onClick={() => handleUnlock('multiverse', null)} disabled={unlockBusy}
            className="text-xs font-extrabold text-purple-300 bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 px-4 py-2 rounded-xl cursor-pointer flex items-center gap-1.5 transition-colors">
            <Sparkles className="w-3.5 h-3.5" /> সব pathway — {toBn(GALAXY_MULTIVERSE_COST)} কয়েন
          </button>
        )}
      </div>

      {unlockError && (
        <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3 text-xs font-bold text-rose-300">{unlockError}</div>
      )}

      {!hasAccess ? (
        /* ===== LOCKED GATE ===== */
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center space-y-4">
          <Lock className="w-10 h-10 text-amber-400 mx-auto" />
          <h3 className="text-lg font-extrabold text-white">{ROUTE_LABELS[activeRoute]} বিশ্লেষণ লক করা</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
            নিজের pathway ({ROUTE_LABELS[ownRoute]}) সবসময় ফ্রি। অন্য pathway {toBn(GALAXY_EXTRA_PATHWAY_COST)} কয়েনে ৩০ দিন।
            কয়েন আসে পরীক্ষা দিলে — প্রতি টেস্টে +২০, ফুল মার্কে +১০০।
          </p>
          <button onClick={() => handleUnlock('pathway', activeRoute)} disabled={unlockBusy}
            className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 text-sm font-extrabold px-6 py-3 rounded-xl cursor-pointer inline-flex items-center gap-2 transition-colors">
            {unlockBusy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Coins className="w-4 h-4" />}
            {toBn(GALAXY_EXTRA_PATHWAY_COST)} কয়েনে আনলক (৩০ দিন)
          </button>
        </div>
      ) : kpi.totalExams === 0 ? (
        /* ===== EMPTY STATE ===== */
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center space-y-3">
          <Crosshair className="w-10 h-10 text-cyan-400 mx-auto" />
          <h3 className="text-lg font-extrabold text-white">এখনো কোনো পরীক্ষার ডেটা নেই</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            প্রশ্নব্যাংক থেকে <strong className="text-slate-200">পরীক্ষা মোডে</strong> exam দিন —
            প্রতিটি পরীক্ষার পর এখানে অধ্যায়ভিত্তিক শক্তি-দুর্বলতা, অগ্রাধিকার তালিকা ও উন্নতির পথ দেখা যাবে।
          </p>
        </div>
      ) : (
        <>
          {/* ===== KPI STRIP (গজ + trend + স্ট্যাটাস গণনা) ===== */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Readiness gauge */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 col-span-2 lg:col-span-1">
              <div className="text-[10px] text-slate-500 font-bold mb-2">সামগ্রিক প্রস্তুতি</div>
              <div className="relative w-24 h-12 mx-auto overflow-hidden">
                <svg viewBox="0 0 100 50" className="w-full">
                  <path d="M 8 48 A 42 42 0 0 1 92 48" fill="none" stroke="#1e293b" strokeWidth="9" strokeLinecap="round" />
                  <path d="M 8 48 A 42 42 0 0 1 92 48" fill="none"
                    stroke={kpi.readiness >= 70 ? '#34d399' : kpi.readiness >= 40 ? '#fbbf24' : '#fb7185'}
                    strokeWidth="9" strokeLinecap="round"
                    strokeDasharray={`${(kpi.readiness / 100) * 132} 132`} />
                </svg>
                <div className="absolute inset-x-0 bottom-0 text-center text-lg font-extrabold text-white">{toBn(kpi.readiness)}%</div>
              </div>
              {kpi.trend !== null && (
                <div className={`text-[10px] font-extrabold text-center mt-1 flex items-center justify-center gap-1 ${kpi.trend >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {kpi.trend >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  শেষ ৫ পরীক্ষায় {kpi.trend >= 0 ? '+' : ''}{toBn(kpi.trend)}%
                </div>
              )}
            </div>

            {[
              { label: 'আয়ত্তে', value: kpi.mastered, color: 'text-emerald-400', icon: CheckCircle2 },
              { label: 'ঝুঁকিপূর্ণ', value: kpi.danger, color: 'text-rose-400', icon: AlertTriangle },
              { label: 'পরীক্ষা দাওনি', value: kpi.untouched, color: 'text-slate-400', icon: Layers },
              { label: 'মোট পরীক্ষা', value: kpi.totalExams, color: 'text-cyan-400', icon: BarChart3 },
            ].map(k => {
              const Icon = k.icon;
              return (
                <div key={k.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
                  <Icon className={`w-4 h-4 mx-auto mb-1 ${k.color}`} />
                  <div className={`text-xl font-extrabold ${k.color}`}>{toBn(k.value)}</div>
                  <div className="text-[10px] text-slate-500 font-bold">{k.label} {k.label !== 'মোট পরীক্ষা' ? 'অধ্যায়' : ''}</div>
                </div>
              );
            })}
          </div>

          {/* ===== PRIORITY: আগে কোনটা পড়বেন ===== */}
          <div className="bg-gradient-to-br from-rose-500/5 to-amber-500/5 border border-rose-500/20 rounded-3xl p-5">
            <h3 className="text-sm font-extrabold text-rose-300 mb-1 flex items-center gap-2">
              <Crosshair className="w-4 h-4" /> আগে কোনটা পড়বেন — অগ্রাধিকার তালিকা
            </h3>
            <p className="text-[10px] text-slate-500 mb-3">দুর্বলতা × পরীক্ষায় সেই বিষয়ের নম্বর-ওজন হিসাব করে সাজানো — সবচেয়ে বেশি নম্বর বাড়ানোর সুযোগ উপরে</p>
            <div className="space-y-2">
              {priorityList.map((r, i) => (
                <div key={r.id} className="flex items-center gap-3 bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3">
                  <span className="w-6 h-6 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/30 flex items-center justify-center text-[11px] font-extrabold shrink-0">{toBn(i + 1)}</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-extrabold text-white truncate">{r.name}</div>
                    <div className="text-[10px] text-slate-500">
                      {r.subjectName}{r.weight ? ` · পরীক্ষায় ${toBn(r.weight)} নম্বর` : ''} · {r.pct !== null ? `বর্তমান ${toBn(r.pct)}%` : 'এখনো পরীক্ষা দাওনি'}
                      {r.potentialGain > 0 && <span className="text-emerald-400 font-bold"> · ৮০%-এ তুললে ≈ +{toBn(r.potentialGain)} নম্বর-সুবিধা</span>}
                    </div>
                  </div>
                  <button
                    onClick={() => onStartMission?.(r.name, rankWeakTopics(attempts, r.name, r.topics)[0]?.topic || '')}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-extrabold px-3 py-2 rounded-lg cursor-pointer flex items-center gap-1 shrink-0 transition-colors">
                    <Target className="w-3 h-3" /> ১০ প্রশ্ন
                  </button>
                </div>
              ))}
              {priorityList.length === 0 && (
                <p className="text-xs text-emerald-300 font-bold text-center py-3">🎉 সব অধ্যায় আয়ত্তে — চালিয়ে যান!</p>
              )}
            </div>
          </div>

          {/* ===== HEATMAP GRID (LearningViz-ঘরানা) ===== */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" /> অধ্যায় হিটম্যাপ — ক্লিক করলে টপিক-বিশ্লেষণ
              </h3>
              <select value={subjectFilter} onChange={e => { setSubjectFilter(e.target.value); setExpandedChapter(null); }}
                className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:border-cyan-500 cursor-pointer">
                <option value="all">সব বিষয়</option>
                {subjects.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="flex flex-wrap gap-3 text-[10px] font-bold text-slate-400">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-emerald-400" /> ≥৮০% আয়ত্তে</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-amber-400" /> ৪০–৭৯% দুর্বল</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-rose-400" /> &lt;৪০% ঝুঁকি</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-slate-600" /> পরীক্ষা দাওনি</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {rows.map(r => {
                const isOpen = expandedChapter === r.id;
                return (
                  <button key={r.id}
                    onClick={() => setExpandedChapter(isOpen ? null : r.id)}
                    className={`text-left rounded-xl p-3 border transition-all cursor-pointer ${isOpen ? 'ring-2 ring-cyan-400 border-cyan-500/50' : 'border-slate-800 hover:border-slate-600'}`}
                    style={{ background: `linear-gradient(135deg, ${statusColor(r.status)}22, ${statusColor(r.status)}08)` }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-extrabold" style={{ color: statusColor(r.status) }}>
                        {r.pct !== null ? `${toBn(r.pct)}%` : '—'}
                      </span>
                      <span className="text-[8px] font-extrabold px-1.5 py-0.5 rounded border"
                        style={{ color: statusColor(r.status), borderColor: statusColor(r.status) + '55' }}>
                        {statusBn(r.status)}
                      </span>
                    </div>
                    <div className="text-[11px] font-bold text-slate-200 leading-tight line-clamp-2">{r.name}</div>
                    <div className="text-[9px] text-slate-500 mt-1">{r.subjectName} · {toBn(r.attemptsCount)} পরীক্ষা · {toBn(r.topics.length)} টপিক</div>
                  </button>
                );
              })}
            </div>

            {/* ===== EXPANDED CHAPTER: টপিক drill-down + বাধ্যতামূলক অ্যাকশন ===== */}
            {expandedChapter && (() => {
              const r = rows.find(x => x.id === expandedChapter);
              if (!r) return null;
              const ranked = rankWeakTopics(attempts, r.name, r.topics);
              const weakest = ranked.find(t => t.status === 'danger' || t.status === 'weak');
              return (
                <div className="bg-slate-950/70 border border-cyan-500/30 rounded-2xl p-5 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-extrabold text-white">{r.name}</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        {r.subjectName} · নির্ভুলতা {r.pct !== null ? toBn(r.pct) + '%' : '—'} (সাম্প্রতিক পরীক্ষা বেশি গুরুত্ব পায়) · {toBn(r.attemptsCount)}টি পরীক্ষা
                        {r.weight && ` · ভর্তি পরীক্ষায় ${r.subjectName} = ${toBn(r.weight)} নম্বর`}
                      </p>
                    </div>
                    <button onClick={() => setExpandedChapter(null)} className="text-slate-500 hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
                  </div>

                  {/* topic bars */}
                  <div className="space-y-1.5">
                    {ranked.map(t => (
                      <div key={t.topic} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: statusColor(t.status) }} />
                        <span className="text-[11px] font-bold text-slate-200 flex-1 truncate">{t.topic}</span>
                        {t.wrongCount > 0 && <span className="text-[9px] font-extrabold text-rose-300">{toBn(t.wrongCount)} ভুল</span>}
                        <span className="text-[9px] font-bold" style={{ color: statusColor(t.status) }}>{statusBn(t.status)}</span>
                      </div>
                    ))}
                    {ranked.length === 0 && <p className="text-[10px] text-slate-500">এই অধ্যায়ে টপিক-তথ্য নেই</p>}
                  </div>

                  {/* mandatory actions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-slate-800">
                    <button
                      onClick={() => onStartMission?.(r.name, weakest?.topic || r.topics[0] || '')}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold px-4 py-3 rounded-xl cursor-pointer flex items-center justify-center gap-2 transition-colors">
                      <Target className="w-4 h-4" /> দুর্বলতম টপিকে ১০ প্রশ্নের পরীক্ষা
                    </button>
                    <button
                      onClick={() => onAddToRoutine?.(`রিভিশন: ${r.name}${weakest ? ' — ' + weakest.topic : ''}`)}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-extrabold px-4 py-3 rounded-xl cursor-pointer flex items-center justify-center gap-2 border border-slate-700 transition-colors">
                      <CalendarPlus className="w-4 h-4" /> রুটিনে যোগ করুন
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </>
      )}

      {/* ===== GUIDE ===== */}
      {showGuide && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowGuide(false)}>
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 max-w-md w-full space-y-3 max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-white">📊 কমান্ড সেন্টার গাইড</h3>
              <button onClick={() => setShowGuide(false)} className="text-slate-500 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button>
            </div>
            {[
              ['🎯 অগ্রাধিকার তালিকা', 'দুর্বলতা × পরীক্ষায় সেই বিষয়ের নম্বর-ওজন — এই দুটো গুণ করে ঠিক হয় কোন অধ্যায় আগে পড়লে সবচেয়ে বেশি নম্বর বাড়বে। উপরেরটা আগে ধরুন।'],
              ['🗺️ হিটম্যাপ', 'প্রতিটি ঘর = একটি অধ্যায়। রঙ = সর্বশেষ পরীক্ষাগুলোর নির্ভুলতা (সাম্প্রতিকটা বেশি গুরুত্ব পায়)। ক্লিক করলে টপিক-ভাঙা বিশ্লেষণ।'],
              ['⚡ বিশ্লেষণ → কাজ', 'শুধু দেখলে নম্বর বাড়ে না। প্রতিটি দুর্বল অধ্যায়ে "১০ প্রশ্নের পরীক্ষা" দিন — নতুন ফলে রঙ সাথে সাথে বদলাবে।'],
              ['🪙 কয়েন-নিয়ম', 'নিজের pathway ফ্রি। অন্যটা ৩০০ কয়েন/৩০ দিন, ৪টা একসাথে ১০০০। কয়েন আসে পরীক্ষায়: +২০/টেস্ট, ফুল মার্কে +১০০।']
            ].map(([t, d]) => (
              <div key={t} className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5">
                <div className="text-xs font-extrabold text-cyan-300 mb-1">{t}</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
