import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import {
  Users, FileQuestion, ClipboardList, Flame, Loader2, TrendingUp, GraduationCap
} from 'lucide-react';

// =====================================================
// Admin Overview — app health at a glance
// (students, exams, questions, recent signups)
// =====================================================

const toBn = (n: number | string) => {
  const d = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return String(n).split('').map(c => /\d/.test(c) ? d[parseInt(c,10)] : c).join('');
};

interface RecentUser {
  id: string;
  name?: string;
  email?: string;
  college?: string;
  hscBatch?: string;
  selectedRoute?: string;
  createdAt?: any;
}

const ROUTE_BN: Record<string, string> = {
  medical: 'মেডিকেল', academic: 'একাডেমিক', varsity: 'ভার্সিটি', engineering: 'ইঞ্জিনিয়ারিং'
};

export default function AdminOverview({ seedQuestionCount }: { seedQuestionCount?: number }) {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalResults: 0,
    activeToday: 0,
    routeCounts: {} as Record<string, number>,
  });
  const [recentUsers, setRecentUsers] = useState<RecentUser[]>([]);
  const [weeklyActivity, setWeeklyActivity] = useState<Array<{ day: string; count: number }>>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];

        const usersSnap = await getDocs(collection(db, 'users'));
        const users = usersSnap.docs.map(d => ({ id: d.id, ...d.data() })) as any[];
        const routeCounts: Record<string, number> = {};
        let activeToday = 0;
        users.forEach(u => {
          if (u.selectedRoute) routeCounts[u.selectedRoute] = (routeCounts[u.selectedRoute] || 0) + 1;
          if (u.lastActiveDate === today) activeToday += 1;
        });

        let totalResults = 0;
        const dayCounts: Record<string, number> = {};
        try {
          const resultsSnap = await getDocs(collection(db, 'results'));
          totalResults = resultsSnap.size;
          // last 7 days activity (results per day)
          resultsSnap.docs.forEach(d => {
            const ts = (d.data() as any).createdAt;
            if (ts?.toDate) {
              const key = ts.toDate().toISOString().split('T')[0];
              dayCounts[key] = (dayCounts[key] || 0) + 1;
            }
          });
        } catch { /* ignore */ }

        const week: Array<{ day: string; count: number }> = [];
        const dayNames = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহ', 'শুক্র', 'শনি'];
        for (let i = 6; i >= 0; i--) {
          const dt = new Date();
          dt.setDate(dt.getDate() - i);
          const key = dt.toISOString().split('T')[0];
          week.push({ day: dayNames[dt.getDay()], count: dayCounts[key] || 0 });
        }
        setWeeklyActivity(week);

        // recent signups (createdAt may be missing on old docs — sort desc, missing last)
        const sorted = [...users].sort((a, b) => {
          const ta = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
          const tb = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
          return tb - ta;
        });

        setStats({ totalStudents: users.length, totalResults, activeToday, routeCounts });
        setRecentUsers(sorted.slice(0, 8));
      } catch (e) {
        console.warn('Overview stats error:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-slate-400 gap-3">
        <Loader2 className="w-6 h-6 animate-spin" /> পরিসংখ্যান লোড হচ্ছে...
      </div>
    );
  }

  const statCards = [
    { label: 'মোট শিক্ষার্থী', value: stats.totalStudents, icon: Users, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
    { label: 'আজ সক্রিয়', value: stats.activeToday, icon: Flame, color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
    { label: 'মোট পরীক্ষা/কুইজ সম্পন্ন', value: stats.totalResults, icon: ClipboardList, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
    { label: 'সিড প্রশ্নভাণ্ডার', value: seedQuestionCount || 0, icon: FileQuestion, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
  ];

  return (
    <div className="space-y-6">
      {/* STAT CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 ${s.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-extrabold text-white">{toBn(s.value)}</div>
              <div className="text-[11px] text-slate-400 font-bold mt-0.5">{s.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ROUTE DISTRIBUTION */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-sm font-extrabold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            Pathway অনুযায়ী শিক্ষার্থী
          </h3>
          {Object.keys(stats.routeCounts).length === 0 ? (
            <p className="text-xs text-slate-500">কোনো ডেটা নেই</p>
          ) : (
            <div className="space-y-3">
              {(Object.entries(stats.routeCounts) as Array<[string, number]>).sort((a, b) => b[1] - a[1]).map(([route, count]) => {
                const pct = stats.totalStudents > 0 ? Math.round((count / stats.totalStudents) * 100) : 0;
                return (
                  <div key={route}>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-slate-300">{ROUTE_BN[route] || route}</span>
                      <span className="text-slate-400">{toBn(count)} জন ({toBn(pct)}%)</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* RECENT SIGNUPS */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-sm font-extrabold text-white mb-4 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            সাম্প্রতিক শিক্ষার্থী
          </h3>
          <div className="space-y-2">
            {recentUsers.map(u => (
              <div key={u.id} className="flex items-center justify-between bg-slate-950/60 border border-slate-800 rounded-xl px-3.5 py-2.5">
                <div className="min-w-0">
                  <div className="text-xs font-extrabold text-white truncate">{u.name || 'নামহীন'}</div>
                  <div className="text-[10px] text-slate-500 truncate">{u.email}</div>
                </div>
                <div className="text-right shrink-0 ml-3">
                  {u.hscBatch && <div className="text-[10px] font-bold text-emerald-400">{u.hscBatch}</div>}
                  {u.selectedRoute && <div className="text-[10px] text-slate-500">{ROUTE_BN[u.selectedRoute] || u.selectedRoute}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WEEKLY ACTIVITY GRAPH */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-sm font-extrabold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-amber-400" />
          সাপ্তাহিক কার্যক্রম (গত ৭ দিনে সম্পন্ন কুইজ/পরীক্ষা)
        </h3>
        <div className="flex items-end gap-3 h-32">
          {weeklyActivity.map((d, i) => {
            const max = Math.max(1, ...weeklyActivity.map(x => x.count));
            const h = Math.max(4, Math.round((d.count / max) * 100));
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <span className="text-[10px] font-extrabold text-slate-300">{toBn(d.count)}</span>
                <div className="w-full bg-slate-800/60 rounded-t-lg flex items-end" style={{ height: '100%' }}>
                  <div className="w-full rounded-t-lg bg-gradient-to-t from-amber-600 to-amber-400" style={{ height: `${h}%` }} />
                </div>
                <span className="text-[9px] text-slate-500 font-bold">{d.day}</span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
