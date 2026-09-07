import { useState, useEffect } from 'react';
import { collection, getDocs, doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { Megaphone, Plus, Trash2, Loader2, Check, Power } from 'lucide-react';

// =====================================================
// Admin Notices — অ্যাডমিন → সব শিক্ষার্থী ঘোষণা
// Collection: notices/{id}
// =====================================================

interface NoticeDoc {
  id: string;
  title: string;
  message: string;
  audience: 'all' | 'medical' | 'academic' | 'varsity' | 'engineering';
  active: boolean;
  createdAt?: any;
}

const AUDIENCE_BN: Record<string, string> = {
  all: 'সবাই', medical: 'মেডিকেল', academic: 'একাডেমিক', varsity: 'ভার্সিটি', engineering: 'ইঞ্জিনিয়ারিং'
};

export default function AdminNotices({ userEmail }: { userEmail?: string }) {
  const [notices, setNotices] = useState<NoticeDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [audience, setAudience] = useState<NoticeDoc['audience']>('all');
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, 'notices'));
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() })) as NoticeDoc[];
      data.sort((a, b) => {
        const ta = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
        const tb = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
        return tb - ta;
      });
      setNotices(data);
    } catch (e) {
      console.warn('Notices load error:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleCreate = async () => {
    if (!title.trim() || !message.trim()) {
      setError('শিরোনাম ও বার্তা দুটোই লিখুন।');
      return;
    }
    setSaving(true);
    setError('');
    try {
      const id = `notice_${Date.now()}`;
      await setDoc(doc(db, 'notices', id), {
        title: title.trim(),
        message: message.trim(),
        audience,
        active: true,
        createdBy: userEmail || 'admin',
        createdAt: serverTimestamp()
      });
      setTitle(''); setMessage(''); setAudience('all'); setShowForm(false);
      await load();
    } catch (e) {
      console.error('Notice create error:', e);
      setError('নোটিশ তৈরি ব্যর্থ। আবার চেষ্টা করুন।');
    } finally {
      setSaving(false);
    }
  };

  const toggleActive = async (n: NoticeDoc) => {
    try {
      await setDoc(doc(db, 'notices', n.id), { active: !n.active }, { merge: true });
      setNotices(prev => prev.map(x => x.id === n.id ? { ...x, active: !x.active } : x));
    } catch (e) { console.warn(e); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('নোটিশটি মুছে ফেলবেন?')) return;
    try {
      await deleteDoc(doc(db, 'notices', id));
      setNotices(prev => prev.filter(x => x.id !== id));
    } catch (e) { console.warn(e); }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
          <Megaphone className="w-5 h-5 text-amber-400" />
          নোটিশ / ঘোষণা
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Plus className="w-4 h-4" /> নতুন নোটিশ
        </button>
      </div>

      {showForm && (
        <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-2">শিরোনাম</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="যেমন: নতুন জৈব রসায়ন প্রশ্নব্যাংক যোগ হয়েছে!"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-2">বার্তা</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={3}
              placeholder="শিক্ষার্থীরা হোম পেজে এই বার্তা দেখবে..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-2">কাদের জন্য</label>
            <div className="flex flex-wrap gap-2">
              {(['all', 'medical', 'academic', 'varsity', 'engineering'] as const).map(a => (
                <button
                  key={a}
                  onClick={() => setAudience(a)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-colors cursor-pointer ${
                    audience === a ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {AUDIENCE_BN[a]}
                </button>
              ))}
            </div>
          </div>
          {error && <p className="text-xs font-bold text-rose-400">{error}</p>}
          <button
            onClick={handleCreate}
            disabled={saving}
            className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-xs font-extrabold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
            প্রকাশ করুন
          </button>
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-12 text-slate-400 gap-3">
          <Loader2 className="w-5 h-5 animate-spin" /> লোড হচ্ছে...
        </div>
      ) : notices.length === 0 ? (
        <p className="text-xs text-slate-500 text-center py-8">এখনো কোনো নোটিশ নেই। "নতুন নোটিশ" চেপে প্রথমটি তৈরি করুন।</p>
      ) : (
        <div className="space-y-3">
          {notices.map(n => (
            <div key={n.id} className={`bg-slate-900 border rounded-2xl p-5 ${n.active ? 'border-amber-500/30' : 'border-slate-800 opacity-60'}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm font-extrabold text-white">{n.title}</h3>
                    <span className="text-[9px] font-extrabold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                      {AUDIENCE_BN[n.audience] || n.audience}
                    </span>
                    <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border ${n.active ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' : 'bg-slate-800 text-slate-500 border-slate-700'}`}>
                      {n.active ? 'সক্রিয়' : 'বন্ধ'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{n.message}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => toggleActive(n)}
                    title={n.active ? 'বন্ধ করুন' : 'চালু করুন'}
                    className={`p-2 rounded-lg border transition-colors cursor-pointer ${n.active ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-slate-800 text-slate-500 border-slate-700'}`}
                  >
                    <Power className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(n.id)}
                    className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500/20 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
