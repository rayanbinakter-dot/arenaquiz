import React, { useState, useEffect, useMemo } from 'react';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import {
  Orbit, Lock, Coins, Loader2, Sparkles, Target, CalendarPlus, RotateCcw,
  ChevronRight, X, TrendingUp, HelpCircle, Telescope
} from 'lucide-react';
import { ROUTE_TAXONOMY } from '../../data/routeTaxonomy';
import { LearningRoute, StudentGameProfile } from '../../types/gamification';
import {
  GalaxyUnlocks, canAccessGalaxy, tryUnlock, isUnlockActive,
  GALAXY_EXTRA_PATHWAY_COST, GALAXY_MULTIVERSE_COST,
  STATUS_META, pctToStatus, computeChapterStats, computeTopicStatus,
  rankWeakTopics, computeGalaxyHealth, AttemptLite, GalaxyStatus
} from '../../utils/galaxyEngine';

// =====================================================
// টপিক গ্যালাক্সি — 3D-ভাব CSS orbit ভিউ
// pathway=গ্যালাক্সি → বিষয়=নক্ষত্রমণ্ডল → অধ্যায়=গ্রহ → টপিক=উপগ্রহ
// আসল exam ডেটা (users/{uid}/examAttempts) থেকে realtime রঙ
// =====================================================

const toBn = (n: number | string) => {
  const d = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return String(n).split('').map(c => /\d/.test(c) ? d[parseInt(c,10)] : c).join('');
};

const ROUTE_LABELS: Record<string, string> = {
  academic: 'একাডেমিক', medical: 'মেডিকেল', varsity: 'ভার্সিটি', engineering: 'ইঞ্জিনিয়ারিং'
};

interface TopicGalaxyProps {
  userId: string | null;
  userData?: any;
  gameProfile?: StudentGameProfile | null;
  onCoinsChanged?: (newCoins: number) => void;
  onStartMission?: (chapterName: string, topicName: string) => void;
  onAddToRoutine?: (title: string) => void;
}

export default function TopicGalaxy({
  userId, userData, gameProfile, onCoinsChanged, onStartMission, onAddToRoutine
}: TopicGalaxyProps) {
  const ownRoute = (gameProfile?.selectedRoute || 'academic') as LearningRoute;
  const [activeRoute, setActiveRoute] = useState<LearningRoute>(ownRoute);
  const [attempts, setAttempts] = useState<AttemptLite[]>([]);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState<number>(userData?.coins || 0);
  const [unlocks, setUnlocks] = useState<GalaxyUnlocks>(userData?.galaxyUnlocks || {});
  const [unlockError, setUnlockError] = useState('');
  const [unlockBusy, setUnlockBusy] = useState(false);

  const [selectedSubjectIdx, setSelectedSubjectIdx] = useState(0);
  const [selectedChapter, setSelectedChapter] = useState<{ id: string; name: string; topics: string[] } | null>(null);
  const [showGuide, setShowGuide] = useState(false);

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
        console.warn('Galaxy attempts load failed:', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [userId]);

  // Route taxonomy → subjects with chapters+topics (single source, pathway never mixes)
  const subjects = useMemo(() => {
    const routeDef = (ROUTE_TAXONOMY as any)[activeRoute];
    if (!routeDef) return [] as Array<{ name: string; chapters: Array<{ id: string; name: string; topics: string[] }> }>;
    return routeDef.subjects.map((s: any) => ({
      name: s.name,
      chapters: s.papers.flatMap((p: any) => p.chapters.map((c: any) => ({ id: c.id, name: c.name, topics: c.topics || [] })))
    }));
  }, [activeRoute]);

  const activeSubject = subjects[Math.min(selectedSubjectIdx, Math.max(0, subjects.length - 1))];

  const chapterStats = useMemo(() => {
    if (!activeSubject) return [];
    return activeSubject.chapters.map((c: any) => {
      const stats = computeChapterStats(attempts, c.name);
      return { ...c, pct: stats.pct, attemptsCount: stats.attempts, status: pctToStatus(stats.pct) };
    });
  }, [activeSubject, attempts]);

  const galaxyHealth = useMemo(
    () => computeGalaxyHealth(chapterStats.map((c: any) => c.pct)),
    [chapterStats]
  );

  const hasAccess = canAccessGalaxy(activeRoute, ownRoute, unlocks);

  const persistUnlock = async (newCoins: number, newUnlocks: GalaxyUnlocks) => {
    setCoins(newCoins);
    setUnlocks(newUnlocks);
    onCoinsChanged?.(newCoins);
    if (userId && db) {
      try {
        await setDoc(doc(db, 'users', userId), { coins: newCoins, galaxyUnlocks: newUnlocks }, { merge: true });
      } catch (e) { console.warn('Unlock persist failed:', e); }
    }
  };

  const handleUnlock = async (kind: 'pathway' | 'multiverse', route: LearningRoute | null) => {
    setUnlockError('');
    setUnlockBusy(true);
    const res = tryUnlock(kind, route, coins, unlocks);
    if (!res.ok) {
      setUnlockError(res.error || 'আনলক ব্যর্থ');
      setUnlockBusy(false);
      return;
    }
    await persistUnlock(res.newCoins!, res.newUnlocks!);
    setUnlockBusy(false);
  };

  // ---------- ORBIT LAYOUT: planets positioned on concentric ellipses ----------
  const planetPositions = useMemo(() => {
    const n = chapterStats.length;
    return chapterStats.map((c: any, i: number) => {
      const ring = i % 3; // 3 orbit rings
      const perRing = Math.ceil(n / 3);
      const idxInRing = Math.floor(i / 3);
      const angle = (idxInRing / Math.max(1, perRing)) * 2 * Math.PI + ring * 0.7 + i * 0.35;
      const rx = 30 + ring * 15; // % radius x
      const ry = 18 + ring * 11; // % radius y
      return {
        left: 50 + rx * Math.cos(angle),
        top: 50 + ry * Math.sin(angle),
        size: 44 + Math.min(24, (c.topics?.length || 1) * 3),
        ring
      };
    });
  }, [chapterStats]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-slate-400 gap-3">
        <Loader2 className="w-6 h-6 animate-spin" /> গ্যালাক্সি তৈরি হচ্ছে...
      </div>
    );
  }

  return (
    <div className="space-y-5 animate-in fade-in duration-300">

      {/* ===== HEADER ===== */}
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-white flex items-center gap-2">
            <Orbit className="w-6 h-6 text-cyan-400" />
            তোমার টপিক গ্যালাক্সি
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            প্রতিটি অধ্যায় একটি গ্রহ — রঙ বলে দেয় কোথায় শক্তি, কোথায় ঝুঁকি। বিশ্লেষণ দেখো, মিশন নাও, গ্রহ সবুজ করো। 🌍
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Coins className="w-3.5 h-3.5" /> {toBn(coins)}
          </span>
          <button
            onClick={() => setShowGuide(true)}
            className="text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-1.5 rounded-full cursor-pointer flex items-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5" /> যেভাবে কাজ করে
          </button>
        </div>
      </div>

      {/* ===== PATHWAY TABS + MULTIVERSE ===== */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex bg-slate-900 border border-slate-800 rounded-2xl p-1.5 gap-1 flex-wrap">
          {(['academic', 'medical', 'varsity', 'engineering'] as LearningRoute[]).map(r => {
            const locked = !canAccessGalaxy(r, ownRoute, unlocks);
            const isActive = activeRoute === r;
            return (
              <button
                key={r}
                onClick={() => { setActiveRoute(r); setSelectedSubjectIdx(0); setSelectedChapter(null); setUnlockError(''); }}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  isActive ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {ROUTE_LABELS[r]}
                {locked && <Lock className="w-3 h-3" />}
                {r === ownRoute && <span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded-full">নিজের</span>}
              </button>
            );
          })}
        </div>

        {!isUnlockActive(unlocks['multiverse']) && (
          <button
            onClick={() => handleUnlock('multiverse', null)}
            disabled={unlockBusy}
            className="text-xs font-extrabold text-purple-300 bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 px-4 py-2 rounded-xl cursor-pointer flex items-center gap-1.5 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            মাল্টিভার্স ভিউ — {toBn(GALAXY_MULTIVERSE_COST)} কয়েন
          </button>
        )}
      </div>

      {unlockError && (
        <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3 text-xs font-bold text-rose-300">
          {unlockError}
        </div>
      )}

      {/* ===== LOCKED PATHWAY GATE ===== */}
      {!hasAccess ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center space-y-4">
          <Lock className="w-10 h-10 text-amber-400 mx-auto" />
          <h3 className="text-lg font-extrabold text-white">{ROUTE_LABELS[activeRoute]} গ্যালাক্সি লক করা</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
            নিজের pathway ({ROUTE_LABELS[ownRoute]}) সবসময় ফ্রি। অন্য pathway-র গ্যালাক্সি {toBn(GALAXY_EXTRA_PATHWAY_COST)} কয়েনে
            ৩০ দিনের জন্য খোলা যায়। পরীক্ষা দিলেই কয়েন — প্রতি টেস্টে +২০, ফুল মার্কে +১০০!
          </p>
          <button
            onClick={() => handleUnlock('pathway', activeRoute)}
            disabled={unlockBusy}
            className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 text-sm font-extrabold px-6 py-3 rounded-xl cursor-pointer inline-flex items-center gap-2 transition-colors"
          >
            {unlockBusy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Coins className="w-4 h-4" />}
            {toBn(GALAXY_EXTRA_PATHWAY_COST)} কয়েনে আনলক করুন (৩০ দিন)
          </button>
        </div>
      ) : (
        <>
          {/* ===== HEALTH + SUBJECT PICKER ===== */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2.5">
                <span className="text-[10px] text-slate-500 font-bold block">গ্যালাক্সি হেলথ</span>
                <span className={`text-lg font-extrabold ${galaxyHealth.health >= 70 ? 'text-emerald-400' : galaxyHealth.health >= 40 ? 'text-amber-400' : 'text-rose-400'}`}>
                  {toBn(galaxyHealth.health)}%
                </span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2.5">
                <span className="text-[10px] text-slate-500 font-bold block">আবিষ্কৃত গ্রহ</span>
                <span className="text-lg font-extrabold text-cyan-400">{toBn(galaxyHealth.explored)}/{toBn(galaxyHealth.total)}</span>
              </div>
            </div>

            <select
              value={selectedSubjectIdx}
              onChange={e => { setSelectedSubjectIdx(parseInt(e.target.value, 10)); setSelectedChapter(null); }}
              className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-bold text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
            >
              {subjects.map((s: any, i: number) => (
                <option key={i} value={i}>{s.name}</option>
              ))}
            </select>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 text-[10px] font-bold">
            {(Object.keys(STATUS_META) as GalaxyStatus[]).map(k => (
              <span key={k} className="flex items-center gap-1.5 text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: STATUS_META[k].color }} />
                {STATUS_META[k].labelBn}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* ===== GALAXY CANVAS ===== */}
            <div className="lg:col-span-2 relative bg-[radial-gradient(ellipse_at_center,#0f1b33_0%,#070d1a_70%)] border border-slate-800 rounded-3xl overflow-hidden" style={{ minHeight: 480 }}>
              {/* twinkling stars */}
              {Array.from({ length: 40 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute rounded-full bg-white/50 animate-pulse"
                  style={{
                    width: (i % 3) + 1, height: (i % 3) + 1,
                    left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`,
                    animationDelay: `${(i % 5) * 0.6}s`, opacity: 0.15 + (i % 4) * 0.12
                  }}
                />
              ))}

              {/* orbit rings */}
              {[0, 1, 2].map(r => (
                <div
                  key={r}
                  className="absolute border border-slate-700/30 rounded-[50%] pointer-events-none"
                  style={{
                    width: `${(30 + r * 15) * 2}%`, height: `${(18 + r * 11) * 2}%`,
                    left: '50%', top: '50%', transform: 'translate(-50%, -50%)'
                  }}
                />
              ))}

              {/* central star = subject */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-500/30 border border-cyan-400/40 flex items-center justify-center"
                  style={{ boxShadow: '0 0 40px rgba(34,211,238,0.35)' }}>
                  <Telescope className="w-7 h-7 text-cyan-300" />
                </div>
                <div className="text-[11px] font-extrabold text-cyan-200 mt-1.5 max-w-[110px]">{activeSubject?.name}</div>
                <div className="text-[9px] text-slate-500">{toBn(chapterStats.length)}টি গ্রহ</div>
              </div>

              {/* planets = chapters */}
              {chapterStats.map((c: any, i: number) => {
                const pos = planetPositions[i];
                const meta = STATUS_META[c.status as GalaxyStatus];
                const isSel = selectedChapter?.id === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedChapter(isSel ? null : c)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20 transition-transform hover:scale-110"
                    style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
                    title={c.name}
                  >
                    <div
                      className={`rounded-full transition-all ${isSel ? 'ring-2 ring-white/70' : ''}`}
                      style={{
                        width: pos.size, height: pos.size,
                        background: `radial-gradient(circle at 32% 30%, ${meta.color}, ${meta.color}22 75%)`,
                        boxShadow: `0 0 ${isSel ? 26 : 14}px ${meta.glow}`
                      }}
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 mt-1.5 text-center whitespace-nowrap">
                      <div className="text-[10px] font-extrabold text-slate-200 max-w-[120px] truncate">{c.name}</div>
                      <div className="text-[9px] text-slate-500">
                        {c.pct !== null ? `${toBn(c.pct)}%` : 'পরীক্ষা দাওনি'} · {toBn(c.topics.length)} টপিক
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ===== ANALYSIS + ACTION PANEL ===== */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 self-start">
              {!selectedChapter ? (
                <div className="text-center py-10 space-y-3">
                  <Orbit className="w-8 h-8 text-slate-600 mx-auto" />
                  <p className="text-xs text-slate-400 font-bold">একটি গ্রহে (অধ্যায়ে) ক্লিক করো —<br />বিশ্লেষণ ও মিশন এখানে আসবে</p>
                </div>
              ) : (() => {
                const stats = chapterStats.find((c: any) => c.id === selectedChapter.id);
                const ranked = rankWeakTopics(attempts, selectedChapter.name, selectedChapter.topics);
                const weakest = ranked.find(r => r.status === 'danger' || r.status === 'weak');
                return (
                  <>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-extrabold text-white leading-snug">{selectedChapter.name}</h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 inline-block border"
                          style={{
                            color: STATUS_META[stats?.status as GalaxyStatus]?.color,
                            borderColor: STATUS_META[stats?.status as GalaxyStatus]?.color + '55',
                            background: STATUS_META[stats?.status as GalaxyStatus]?.color + '15'
                          }}>
                          {STATUS_META[stats?.status as GalaxyStatus]?.labelBn}
                        </span>
                      </div>
                      <button onClick={() => setSelectedChapter(null)} className="text-slate-500 hover:text-white cursor-pointer">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3">
                        <div className="text-lg font-extrabold text-white">{stats?.pct !== null ? `${toBn(stats.pct)}%` : '—'}</div>
                        <div className="text-[9px] text-slate-500 font-bold">নির্ভুলতা (সাম্প্রতিক-ভারিত)</div>
                      </div>
                      <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3">
                        <div className="text-lg font-extrabold text-cyan-400">{toBn(stats?.attemptsCount || 0)}</div>
                        <div className="text-[9px] text-slate-500 font-bold">মোট পরীক্ষা</div>
                      </div>
                    </div>

                    {/* Topic moons ranked weakest-first */}
                    <div>
                      <h4 className="text-[10px] font-extrabold text-slate-500 uppercase mb-2 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> টপিক (দুর্বলতম আগে)
                      </h4>
                      <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                        {ranked.map(r => (
                          <div key={r.topic} className="flex items-center justify-between bg-slate-950/60 border border-slate-800 rounded-lg px-3 py-2">
                            <span className="text-[11px] font-bold text-slate-200 truncate flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: STATUS_META[r.status].color }} />
                              {r.topic}
                            </span>
                            {r.wrongCount > 0 && (
                              <span className="text-[9px] font-extrabold text-rose-300 shrink-0">{toBn(r.wrongCount)} ভুল</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ===== MANDATORY ACTION CTAs (research: analysis→action loop) ===== */}
                    <div className="space-y-2 pt-3 border-t border-slate-800">
                      <p className="text-[10px] font-extrabold text-emerald-300">🚀 তোমার পরবর্তী পদক্ষেপ:</p>
                      <button
                        onClick={() => onStartMission?.(selectedChapter.name, weakest?.topic || selectedChapter.topics[0] || '')}
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold px-4 py-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <span className="flex items-center gap-2"><Target className="w-4 h-4" /> দ্রুত ১০ প্রশ্নের মিশন</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onAddToRoutine?.(`রিভিশন: ${selectedChapter.name}${weakest ? ' — ' + weakest.topic : ''}`)}
                        className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-extrabold px-4 py-3 rounded-xl cursor-pointer flex items-center justify-between border border-slate-700 transition-colors"
                      >
                        <span className="flex items-center gap-2"><CalendarPlus className="w-4 h-4" /> রুটিনে যোগ করো</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <p className="text-[9px] text-slate-500 text-center pt-1">
                        মিশন শেষ করলে গ্রহের রঙ বদলাবে + বোনাস কয়েন! 🪙
                      </p>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </>
      )}

      {/* ===== GUIDE MODAL ===== */}
      {showGuide && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowGuide(false)}>
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 max-w-md w-full space-y-4 max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-white">🔭 তোমার গ্যালাক্সির গাইড</h3>
              <button onClick={() => setShowGuide(false)} className="text-slate-500 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button>
            </div>
            {[
              ['🌌 গ্রহ চেনো', 'বিষয় = কেন্দ্রের তারা, অধ্যায় = গ্রহ, টপিক = উপগ্রহ। গ্রহে ক্লিক করলেই বিশ্লেষণ।'],
              ['🎨 রঙের মানে', 'সবুজ ≥৮০% (আয়ত্তে), হলুদ ৪০–৭৯% (আরও অনুশীলন), লাল <৪০% (ঝুঁকি), ধূসর = এখনো পরীক্ষা দাওনি। রঙ তোমার আসল পরীক্ষার ফল থেকে আসে — সাম্প্রতিক পরীক্ষা বেশি গুরুত্ব পায়।'],
              ['🎯 বিশ্লেষণ → মিশন', 'শুধু দেখা নয় — প্রতিটি দুর্বল গ্রহে মিশন নাও, রুটিনে যোগ করো। মিশন শেষ = গ্রহ সবুজ + বোনাস কয়েন।'],
              ['🪙 কয়েন-নিয়ম', 'নিজের pathway ফ্রি। অন্য pathway ৩০০ কয়েনে ৩০ দিন। ৪টা একসাথে (মাল্টিভার্স) ১০০০ কয়েন। কয়েন আসে পরীক্ষা দিলে: প্রতি টেস্টে +২০, ফুল মার্কে +১০০।']
            ].map(([t, d]) => (
              <div key={t} className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5">
                <div className="text-xs font-extrabold text-emerald-300 mb-1">{t}</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
