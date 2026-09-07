import { useState, useEffect, useMemo } from 'react';
import { collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import {
  Users, Search, Loader2, ArrowLeft, School, Phone, GraduationCap,
  Flame, ClipboardList, XCircle, CheckCircle2, MinusCircle, TrendingUp, Crown, Shield
} from 'lucide-react';

// =====================================================
// Admin → Students: list, search, drill-down activities
// =====================================================

const toBn = (n: number | string) => {
  const d = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return String(n).split('').map(c => /\d/.test(c) ? d[parseInt(c,10)] : c).join('');
};

const ROUTE_BN: Record<string, string> = {
  medical: 'মেডিকেল', academic: 'একাডেমিক', varsity: 'ভার্সিটি', engineering: 'ইঞ্জিনিয়ারিং'
};

interface StudentDoc {
  id: string;
  name?: string;
  email?: string;
  college?: string;
  hscBatch?: string;
  mobile?: string;
  selectedRoute?: string;
  targetExam?: string;
  role?: string;
  isPro?: boolean;
  currentStreak?: number;
  lastActiveDate?: string;
  coins?: number;
  createdAt?: any;
}

interface AttemptDoc {
  id: string;
  title: string;
  subjectName?: string | null;
  chapterName?: string | null;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  skippedCount: number;
  percentage: number;
  negativeMarking?: boolean;
  createdAt: string;
}

export default function AdminStudents() {
  const [students, setStudents] = useState<StudentDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [routeFilter, setRouteFilter] = useState<string>('all');

  // Detail view
  const [selected, setSelected] = useState<StudentDoc | null>(null);
  const [attempts, setAttempts] = useState<AttemptDoc[]>([]);
  const [gameProfile, setGameProfile] = useState<any>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [roleSaving, setRoleSaving] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const snap = await getDocs(collection(db, 'users'));
        const data = snap.docs.map(d => ({ id: d.id, ...d.data() })) as StudentDoc[];
        data.sort((a, b) => {
          const ta = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
          const tb = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
          return tb - ta;
        });
        setStudents(data);
      } catch (e) {
        console.warn('Students fetch error:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return students.filter(s => {
      if (routeFilter !== 'all' && s.selectedRoute !== routeFilter) return false;
      if (!q) return true;
      return (
        (s.name || '').toLowerCase().includes(q) ||
        (s.email || '').toLowerCase().includes(q) ||
        (s.college || '').toLowerCase().includes(q) ||
        (s.mobile || '').includes(q)
      );
    });
  }, [students, search, routeFilter]);

  const openDetail = async (s: StudentDoc) => {
    setSelected(s);
    setLoadingDetail(true);
    setAttempts([]);
    setGameProfile(null);
    try {
      const [attSnap, gpSnap] = await Promise.all([
        getDocs(collection(db, 'users', s.id, 'examAttempts')),
        getDoc(doc(db, 'users', s.id, 'gameProfile', 'main'))
      ]);
      const atts = attSnap.docs.map(d => ({ id: d.id, ...d.data() })) as AttemptDoc[];
      atts.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
      setAttempts(atts);
      if (gpSnap.exists()) setGameProfile(gpSnap.data());
    } catch (e) {
      console.warn('Student detail error:', e);
    } finally {
      setLoadingDetail(false);
    }
  };

  const toggleRole = async () => {
    if (!selected) return;
    setRoleSaving(true);
    const newRole = selected.role === 'admin' ? 'user' : 'admin';
    try {
      await setDoc(doc(db, 'users', selected.id), { role: newRole }, { merge: true });
      setSelected({ ...selected, role: newRole });
      setStudents(prev => prev.map(s => s.id === selected.id ? { ...s, role: newRole } : s));
    } catch (e) {
      console.warn('Role toggle failed:', e);
    } finally {
      setRoleSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-slate-400 gap-3">
        <Loader2 className="w-6 h-6 animate-spin" /> শিক্ষার্থী তালিকা লোড হচ্ছে...
      </div>
    );
  }

  // ================= DETAIL VIEW =================
  if (selected) {
    const totalCorrect = attempts.reduce((s, a) => s + (a.correctCount || 0), 0);
    const totalWrong = attempts.reduce((s, a) => s + (a.wrongCount || 0), 0);
    const totalSkipped = attempts.reduce((s, a) => s + (a.skippedCount || 0), 0);
    const avgPct = attempts.length > 0
      ? Math.round(attempts.reduce((s, a) => s + (a.percentage || 0), 0) / attempts.length)
      : 0;

    return (
      <div className="space-y-5">
        <button
          onClick={() => setSelected(null)}
          className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> সব শিক্ষার্থীতে ফিরুন
        </button>

        {/* Student header */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                {selected.name || 'নামহীন'}
                {selected.role === 'admin' && <Crown className="w-4 h-4 text-amber-400" />}
                {selected.isPro && <span className="text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-extrabold">PRO</span>}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">{selected.email}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {selected.college && (
                  <span className="text-[10px] font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <School className="w-3 h-3" /> {selected.college}
                  </span>
                )}
                {selected.hscBatch && (
                  <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <GraduationCap className="w-3 h-3" /> {selected.hscBatch}
                  </span>
                )}
                {selected.mobile && (
                  <span className="text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Phone className="w-3 h-3" /> {selected.mobile}
                  </span>
                )}
                {selected.selectedRoute && (
                  <span className="text-[10px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-2.5 py-1 rounded-full">
                    {ROUTE_BN[selected.selectedRoute] || selected.selectedRoute}
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={toggleRole}
              disabled={roleSaving}
              className={`text-[11px] font-extrabold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer border ${
                selected.role === 'admin'
                  ? 'bg-rose-500/10 text-rose-300 border-rose-500/30 hover:bg-rose-500/20'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              {roleSaving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Shield className="w-3.5 h-3.5" />}
              {selected.role === 'admin' ? 'অ্যাডমিন রোল সরান' : 'অ্যাডমিন বানান'}
            </button>
          </div>

          {/* GPA / medical info from gameProfile */}
          {gameProfile && gameProfile.selectedRoute === 'medical' && (
            <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs">
              <span className="text-slate-400">SSC GPA: <strong className="text-white">{gameProfile.sscGpa ?? '—'}</strong></span>
              <span className="text-slate-400">HSC GPA: <strong className="text-white">{gameProfile.hscGpa ?? '—'}</strong></span>
              <span className="text-slate-400">টাইমার: <strong className="text-white">{gameProfile.timerStatus === 'second' ? '২য়' : '১ম'}</strong></span>
              <span className="text-slate-400">স্ট্রিক: <strong className="text-amber-400">{toBn(selected.currentStreak || 0)} দিন</strong></span>
              <span className="text-slate-400">সর্বশেষ সক্রিয়: <strong className="text-white">{selected.lastActiveDate || '—'}</strong></span>
            </div>
          )}
        </div>

        {/* Activity stats */}
        {loadingDetail ? (
          <div className="flex items-center justify-center py-12 text-slate-400 gap-3">
            <Loader2 className="w-5 h-5 animate-spin" /> কার্যক্রম লোড হচ্ছে...
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
                <ClipboardList className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                <div className="text-xl font-extrabold text-white">{toBn(attempts.length)}</div>
                <div className="text-[10px] text-slate-400 font-bold">পরীক্ষা দিয়েছে</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
                <TrendingUp className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
                <div className="text-xl font-extrabold text-indigo-400">{toBn(avgPct)}%</div>
                <div className="text-[10px] text-slate-400 font-bold">গড় স্কোর</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <div className="text-xl font-extrabold text-emerald-400">{toBn(totalCorrect)}</div>
                <div className="text-[10px] text-slate-400 font-bold">সঠিক</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
                <XCircle className="w-4 h-4 text-rose-400 mx-auto mb-1" />
                <div className="text-xl font-extrabold text-rose-400">{toBn(totalWrong)}</div>
                <div className="text-[10px] text-slate-400 font-bold">ভুল</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center col-span-2 sm:col-span-1">
                <MinusCircle className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                <div className="text-xl font-extrabold text-slate-300">{toBn(totalSkipped)}</div>
                <div className="text-[10px] text-slate-400 font-bold">স্কিপ</div>
              </div>
            </div>

            {/* Exam history */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-sm font-extrabold text-white mb-4">পরীক্ষার ইতিহাস (টেস্ট মোড)</h3>
              {attempts.length === 0 ? (
                <p className="text-xs text-slate-500">এখনো কোনো পরীক্ষা দেয়নি।</p>
              ) : (
                <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                  {attempts.map(a => (
                    <div key={a.id} className="flex items-center justify-between bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 gap-3">
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white truncate">{a.title}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">
                          {new Date(a.createdAt).toLocaleString('bn-BD')} • {toBn(a.totalQuestions)} প্রশ্ন
                          {a.negativeMarking && <span className="text-rose-400"> • নেগেটিভ মার্কিং</span>}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] font-extrabold shrink-0">
                        <span className="text-emerald-400">{toBn(a.correctCount)}✓</span>
                        <span className="text-rose-400">{toBn(a.wrongCount)}✗</span>
                        <span className={`px-2.5 py-1 rounded-lg ${a.percentage >= 70 ? 'bg-emerald-500/15 text-emerald-300' : a.percentage >= 40 ? 'bg-amber-500/15 text-amber-300' : 'bg-rose-500/15 text-rose-300'}`}>
                          {toBn(Math.round(a.percentage))}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    );
  }

  // ================= LIST VIEW =================
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
          <Users className="w-5 h-5 text-cyan-400" />
          শিক্ষার্থী ব্যবস্থাপনা
          <span className="text-xs font-bold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">{toBn(filtered.length)} জন</span>
        </h2>

        <div className="flex items-center gap-2 flex-wrap">
          {['all', 'medical', 'academic', 'varsity', 'engineering'].map(r => (
            <button
              key={r}
              onClick={() => setRouteFilter(r)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-extrabold border transition-colors cursor-pointer ${
                routeFilter === r
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {r === 'all' ? 'সব' : ROUTE_BN[r]}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="নাম, ইমেইল, কলেজ বা মোবাইল দিয়ে খুঁজুন..."
          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
        />
      </div>

      {/* Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] uppercase text-slate-500 font-extrabold">
                <th className="px-4 py-3">শিক্ষার্থী</th>
                <th className="px-4 py-3 hidden md:table-cell">কলেজ</th>
                <th className="px-4 py-3 hidden sm:table-cell">ব্যাচ</th>
                <th className="px-4 py-3 hidden lg:table-cell">Pathway</th>
                <th className="px-4 py-3 hidden lg:table-cell">স্ট্রিক</th>
                <th className="px-4 py-3 text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr key={s.id} className="border-b border-slate-800/60 hover:bg-slate-800/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="text-xs font-extrabold text-white flex items-center gap-1.5">
                      {s.name || 'নামহীন'}
                      {s.role === 'admin' && <Crown className="w-3 h-3 text-amber-400" />}
                    </div>
                    <div className="text-[10px] text-slate-500">{s.email}</div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell text-[11px] text-slate-300">{s.college || '—'}</td>
                  <td className="px-4 py-3 hidden sm:table-cell text-[11px] text-emerald-400 font-bold">{s.hscBatch || '—'}</td>
                  <td className="px-4 py-3 hidden lg:table-cell text-[11px] text-slate-300">{s.selectedRoute ? (ROUTE_BN[s.selectedRoute] || s.selectedRoute) : '—'}</td>
                  <td className="px-4 py-3 hidden lg:table-cell">
                    <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                      <Flame className="w-3 h-3" /> {toBn(s.currentStreak || 0)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => openDetail(s)}
                      className="text-[11px] font-extrabold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      কার্যক্রম দেখুন
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-xs text-slate-500">
                    কোনো শিক্ষার্থী পাওয়া যায়নি
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
