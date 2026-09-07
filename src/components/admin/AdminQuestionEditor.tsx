import { useState, useEffect, useMemo } from 'react';
import { doc, setDoc, deleteDoc, getDocs, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import {
  PencilRuler, Loader2, Check, X, Search, ChevronRight, RotateCcw, BadgeCheck, Layers
} from 'lucide-react';
import { QuestionItem } from '../../types/questionBank';
import {
  getAllNormalizedQuestions,
  NormalizedQuestion
} from '../../utils/getAllNormalizedQuestions';
import {
  buildRouteOptions,
  buildSubjectOptions,
  buildPaperOptions,
  buildChapterOptions,
  buildTopicOptions,
  resolveItemToTaxonomy
} from '../../utils/imageManagerTaxonomy';
import { MathText } from '../MathText';

// ================================================================
// Admin Question Editor (প্রশ্ন সম্পাদনা)
//  • Realtime cascading selectors: রুট → বিষয় → পত্র → অধ্যায় → টপিক
//    (একটাই taxonomy উৎস — pathway কখনো mix হবে না)
//  • Select topic → questions listed → click → inline edit
//    stem / options / correct answer / explanation
//  • Saves to Firestore `question_content_overrides/{stableKey}`
//    Seed files stay untouched — overrides applied at render time.
// ================================================================

const toBn = (n: number | string) => {
  const d = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return String(n).split('').map(c => /\d/.test(c) ? d[parseInt(c,10)] : c).join('');
};

interface ContentOverride {
  stem?: string;
  options?: string[];
  correctOption?: string;
  explanation?: string;
  updatedAt?: any;
  updatedBy?: string;
}

interface EditorItem extends NormalizedQuestion {
  routeId: string;
  subjectId: string;
  paperId: string;
  chapterId: string;
  topicId: string;
}

export default function AdminQuestionEditor({ firestoreQuestions = [], userEmail }: { firestoreQuestions?: QuestionItem[]; userEmail?: string }) {
  const [allItems, setAllItems] = useState<EditorItem[]>([]);
  const [overrides, setOverrides] = useState<Record<string, ContentOverride>>({});
  const [loading, setLoading] = useState(true);

  // Cascading filters
  const [routeFilter, setRouteFilter] = useState('all');
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [paperFilter, setPaperFilter] = useState('all');
  const [chapterFilter, setChapterFilter] = useState('all');
  const [topicFilter, setTopicFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Editing state
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editStem, setEditStem] = useState('');
  const [editOptions, setEditOptions] = useState<string[]>([]);
  const [editCorrect, setEditCorrect] = useState('');
  const [editExplanation, setEditExplanation] = useState('');
  const [saving, setSaving] = useState(false);
  const [savedKey, setSavedKey] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const [normalized, ovSnap] = await Promise.all([
          getAllNormalizedQuestions(firestoreQuestions),
          getDocs(collection(db, 'question_content_overrides')).catch(() => null)
        ]);

        const items: EditorItem[] = normalized.map(n => {
          const anyN = n as any;
          const resolved = resolveItemToTaxonomy({
            routeId: (n.route || 'unknown').toLowerCase(),
            subjectId: (n.subject || 'unknown').toLowerCase(),
            paperId: (anyN.paperId || n.paper || 'not_applicable'),
            chapterId: n.chapterId || n.chapterName || 'unknown',
            chapterName: n.chapterName,
            topicId: n.topicId || n.topicName || 'general',
            topicName: n.topicName
          });
          return {
            ...n,
            routeId: resolved.routeId,
            subjectId: resolved.subjectId,
            paperId: resolved.paperId,
            chapterId: resolved.chapterId,
            topicId: resolved.topicId
          };
        });
        setAllItems(items);

        if (ovSnap) {
          const ov: Record<string, ContentOverride> = {};
          ovSnap.docs.forEach(d => { ov[d.id] = d.data() as ContentOverride; });
          setOverrides(ov);
        }
      } catch (e) {
        console.error('Question editor load error:', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [firestoreQuestions]);

  // Cascading options — SAME taxonomy source as Image Manager (no pathway mixing)
  const routeOptions = useMemo(() => buildRouteOptions(allItems), [allItems]);
  const subjectOptions = useMemo(() => buildSubjectOptions(allItems, { routeFilter }), [allItems, routeFilter]);
  const paperOptions = useMemo(() => buildPaperOptions(allItems, { routeFilter, subjectFilter }), [allItems, routeFilter, subjectFilter]);
  const chapterOptions = useMemo(() => buildChapterOptions(allItems, { routeFilter, subjectFilter, paperFilter, chapterFilter: 'all' } as any), [allItems, routeFilter, subjectFilter, paperFilter]);
  const topicOptions = useMemo(() => buildTopicOptions(allItems, { routeFilter, subjectFilter, paperFilter, chapterFilter } as any), [allItems, routeFilter, subjectFilter, paperFilter, chapterFilter]);

  const filtered = useMemo(() => {
    return allItems.filter(it => {
      if (routeFilter !== 'all' && it.routeId !== routeFilter) return false;
      if (subjectFilter !== 'all' && it.subjectId !== subjectFilter) return false;
      if (paperFilter !== 'all' && it.paperId !== paperFilter) return false;
      if (chapterFilter !== 'all' && it.chapterId !== chapterFilter) return false;
      if (topicFilter !== 'all' && it.topicId !== topicFilter && (it.topicName || '').normalize('NFC') !== topicFilter.normalize('NFC')) return false;
      const q = searchQuery.trim().toLowerCase();
      if (q) {
        return it.stem.toLowerCase().includes(q)
          || String(it.sourceQuestionNumber || '').includes(q)
          || (it.topicName || '').toLowerCase().includes(q);
      }
      return true;
    });
  }, [allItems, routeFilter, subjectFilter, paperFilter, chapterFilter, topicFilter, searchQuery]);

  // Only show list after a chapter is chosen (avoids rendering 5000+ questions)
  const listVisible = chapterFilter !== 'all' || searchQuery.trim().length >= 3;
  const displayItems = listVisible ? filtered.slice(0, 100) : [];

  const startEdit = (it: EditorItem) => {
    const ov = overrides[it.stableKey];
    setEditingKey(it.stableKey);
    setEditStem(ov?.stem ?? it.stem);
    setEditOptions(ov?.options ?? [...it.options]);
    setEditCorrect(ov?.correctOption ?? (it.correctOption || ''));
    setEditExplanation(ov?.explanation ?? (it.explanation || it.shortExplanation || ''));
  };

  const cancelEdit = () => {
    setEditingKey(null);
  };

  const saveEdit = async (it: EditorItem) => {
    setSaving(true);
    try {
      const payload: ContentOverride = {
        stem: editStem,
        options: editOptions,
        correctOption: editCorrect,
        explanation: editExplanation,
        updatedAt: serverTimestamp(),
        updatedBy: userEmail || 'admin'
      };
      await setDoc(doc(db, 'question_content_overrides', it.stableKey), payload, { merge: true });
      setOverrides(prev => ({ ...prev, [it.stableKey]: payload }));
      setEditingKey(null);
      setSavedKey(it.stableKey);
      setTimeout(() => setSavedKey(null), 2500);
    } catch (e) {
      console.error('Save override failed:', e);
      alert('সংরক্ষণ ব্যর্থ হয়েছে। আবার চেষ্টা করুন।');
    } finally {
      setSaving(false);
    }
  };

  const resetOverride = async (it: EditorItem) => {
    if (!confirm('এই প্রশ্নের সম্পাদনা মুছে মূল সংস্করণে ফিরে যাবেন?')) return;
    try {
      await deleteDoc(doc(db, 'question_content_overrides', it.stableKey));
      setOverrides(prev => {
        const next = { ...prev };
        delete next[it.stableKey];
        return next;
      });
      setEditingKey(null);
    } catch (e) { console.warn(e); }
  };

  const selectClass = "w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500 cursor-pointer";

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-slate-400 gap-3">
        <Loader2 className="w-6 h-6 animate-spin" /> সব প্রশ্ন লোড হচ্ছে (সিড + Firestore)...
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <PencilRuler className="w-5 h-5 text-cyan-400" />
            প্রশ্ন সম্পাদনা (Question Editor)
          </h2>
          <p className="text-[11px] text-slate-400 mt-0.5">
            রুট → বিষয় → পত্র → অধ্যায় → টপিক বেছে প্রশ্ন খুঁজুন, তারপর টেক্সট/অপশন/ব্যাখ্যা সরাসরি এডিট করুন।
            সম্পাদনা override হিসেবে সেভ হয় — মূল ডেটা অক্ষত থাকে।
          </p>
        </div>
        <span className="text-[11px] font-bold text-slate-400 bg-slate-800 px-3 py-1.5 rounded-full">
          মোট প্রশ্ন: {toBn(allItems.length)} | সম্পাদিত: {toBn(Object.keys(overrides).length)}
        </span>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="প্রশ্ন টেক্সট, টপিক বা প্রশ্ন নং দিয়ে খুঁজুন (৩+ অক্ষর)..."
          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
        />
      </div>

      {/* Cascading filters — single taxonomy, no mixing */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div>
          <label className="text-[10px] font-extrabold text-slate-500 uppercase block mb-1.5">রুট</label>
          <select value={routeFilter} className={selectClass}
            onChange={e => { setRouteFilter(e.target.value); setSubjectFilter('all'); setPaperFilter('all'); setChapterFilter('all'); setTopicFilter('all'); }}>
            <option value="all">সকল রুট</option>
            {routeOptions.map(o => <option key={o.id} value={o.id}>{o.label} ({toBn(o.count)})</option>)}
          </select>
        </div>
        <div>
          <label className="text-[10px] font-extrabold text-slate-500 uppercase block mb-1.5">বিষয়</label>
          <select value={subjectFilter} className={selectClass}
            onChange={e => { setSubjectFilter(e.target.value); setPaperFilter('all'); setChapterFilter('all'); setTopicFilter('all'); }}>
            <option value="all">সকল বিষয়</option>
            {subjectOptions.map(o => <option key={o.id} value={o.id}>{o.label} ({toBn(o.count)})</option>)}
          </select>
        </div>
        <div>
          <label className="text-[10px] font-extrabold text-slate-500 uppercase block mb-1.5">পত্র</label>
          <select value={paperFilter} className={selectClass}
            onChange={e => { setPaperFilter(e.target.value); setChapterFilter('all'); setTopicFilter('all'); }}>
            <option value="all">সকল পত্র</option>
            {paperOptions.map(o => <option key={o.id} value={o.id}>{o.label} ({toBn(o.count)})</option>)}
          </select>
        </div>
        <div>
          <label className="text-[10px] font-extrabold text-slate-500 uppercase block mb-1.5">অধ্যায়</label>
          <select value={chapterFilter} className={selectClass}
            onChange={e => { setChapterFilter(e.target.value); setTopicFilter('all'); }}>
            <option value="all">সকল অধ্যায়</option>
            {chapterOptions.map(o => <option key={o.id} value={o.id}>{o.label} ({toBn(o.count)})</option>)}
          </select>
        </div>
        <div>
          <label className="text-[10px] font-extrabold text-slate-500 uppercase block mb-1.5">টপিক</label>
          <select value={topicFilter} className={selectClass}
            onChange={e => setTopicFilter(e.target.value)}>
            <option value="all">সকল টপিক</option>
            {topicOptions.map(o => <option key={o.id} value={o.id}>{o.label} ({toBn(o.count)})</option>)}
          </select>
        </div>
      </div>

      {/* Question list */}
      {!listVisible ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">
          <Layers className="w-8 h-8 text-slate-600 mx-auto mb-3" />
          <p className="text-xs text-slate-400 font-bold">
            একটি <span className="text-cyan-300">অধ্যায়</span> নির্বাচন করুন অথবা সার্চে ৩+ অক্ষর লিখুন —
            তারপর প্রশ্নগুলো এখানে সম্পাদনাযোগ্য অবস্থায় আসবে।
          </p>
          <p className="text-[10px] text-slate-500 mt-2">বর্তমান ফিল্টারে মিলছে: {toBn(filtered.length)}টি প্রশ্ন</p>
        </div>
      ) : (
        <>
          <p className="text-[11px] text-slate-400 font-bold">
            দেখানো হচ্ছে: {toBn(displayItems.length)} / {toBn(filtered.length)}টি প্রশ্ন
            {filtered.length > 100 && <span className="text-amber-400"> (প্রথম ১০০টি — টপিক বেছে আরো নির্দিষ্ট করুন)</span>}
          </p>

          <div className="space-y-3">
            {displayItems.map(it => {
              const ov = overrides[it.stableKey];
              const isEditing = editingKey === it.stableKey;
              const displayStem = ov?.stem ?? it.stem;
              const displayOptions = ov?.options ?? it.options;
              const displayCorrect = ov?.correctOption ?? it.correctOption;
              const displayExplanation = ov?.explanation ?? (it.explanation || it.shortExplanation || '');

              return (
                <div key={it.stableKey} className={`bg-slate-900 border rounded-2xl p-5 ${isEditing ? 'border-cyan-500/50 ring-1 ring-cyan-500/30' : ov ? 'border-amber-500/30' : 'border-slate-800'}`}>
                  {/* Meta chips */}
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <div className="flex flex-wrap gap-1.5 text-[10px] font-bold">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300">{it.routeLabel}</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-purple-300">{it.subjectLabel} {it.paperLabel && `(${it.paperLabel})`}</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">{it.chapterName}</span>
                      {it.topicName && <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">{it.topicName}</span>}
                      {it.sourceQuestionNumber && <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">#{it.sourceQuestionNumber}</span>}
                      {ov && <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">✏️ সম্পাদিত</span>}
                      {savedKey === it.stableKey && (
                        <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                          <BadgeCheck className="w-3 h-3" /> সংরক্ষিত!
                        </span>
                      )}
                    </div>

                    {!isEditing && (
                      <div className="flex gap-2">
                        {ov && (
                          <button onClick={() => resetOverride(it)}
                            className="text-[10px] font-extrabold text-slate-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer">
                            <RotateCcw className="w-3 h-3" /> মূলে ফিরুন
                          </button>
                        )}
                        <button onClick={() => startEdit(it)}
                          className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 text-[11px] font-extrabold px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer">
                          সম্পাদনা করুন
                        </button>
                      </div>
                    )}
                  </div>

                  {!isEditing ? (
                    /* ---------- VIEW ---------- */
                    <div className="space-y-2.5">
                      <div className="text-sm font-bold text-slate-100 leading-relaxed">
                        <MathText text={displayStem} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {displayOptions.map((opt, oi) => {
                          const letter = ['ক','খ','গ','ঘ','ঙ'][oi] || String(oi+1);
                          const isCorrect = displayCorrect === opt || displayCorrect === ['A','B','C','D','E'][oi];
                          return (
                            <div key={oi} className={`p-2.5 rounded-xl text-xs border flex items-center gap-2 ${isCorrect ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200 font-semibold' : 'bg-slate-950/60 border-slate-800 text-slate-300'}`}>
                              <span className="w-5 h-5 rounded-md bg-slate-800 flex items-center justify-center text-[10px] font-bold shrink-0">{letter}</span>
                              <MathText text={opt} />
                            </div>
                          );
                        })}
                      </div>
                      {displayExplanation && (
                        <div className="text-[11px] text-slate-400 bg-slate-950/60 border border-slate-800 rounded-xl px-3.5 py-2.5 leading-relaxed">
                          💡 <MathText text={displayExplanation} />
                        </div>
                      )}
                    </div>
                  ) : (
                    /* ---------- EDIT ---------- */
                    <div className="space-y-4">
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-500 uppercase block mb-1.5">প্রশ্ন (Stem)</label>
                        <textarea value={editStem} onChange={e => setEditStem(e.target.value)} rows={3}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 resize-y font-mono" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {editOptions.map((opt, oi) => {
                          const letter = ['ক','খ','গ','ঘ','ঙ'][oi] || String(oi+1);
                          const isCorrect = editCorrect === opt || editCorrect === ['A','B','C','D','E'][oi];
                          return (
                            <div key={oi}>
                              <div className="flex items-center justify-between mb-1">
                                <label className="text-[10px] font-extrabold text-slate-500">অপশন {letter}</label>
                                <button
                                  onClick={() => setEditCorrect(editOptions[oi])}
                                  className={`text-[9px] font-extrabold px-2 py-0.5 rounded cursor-pointer transition-colors ${isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:text-white'}`}>
                                  {isCorrect ? '✓ সঠিক উত্তর' : 'সঠিক হিসেবে সেট'}
                                </button>
                              </div>
                              <textarea value={opt} rows={2}
                                onChange={e => {
                                  const next = [...editOptions];
                                  const wasCorrect = editCorrect === next[oi];
                                  next[oi] = e.target.value;
                                  setEditOptions(next);
                                  if (wasCorrect) setEditCorrect(e.target.value);
                                }}
                                className={`w-full bg-slate-950 border rounded-xl px-3 py-2 text-xs text-white focus:outline-none resize-y font-mono ${isCorrect ? 'border-emerald-500/50' : 'border-slate-800 focus:border-cyan-500'}`} />
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-500 uppercase block mb-1.5">ব্যাখ্যা (Explanation)</label>
                        <textarea value={editExplanation} onChange={e => setEditExplanation(e.target.value)} rows={3}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500 resize-y font-mono" />
                      </div>

                      {/* Live preview */}
                      <details className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5">
                        <summary className="text-[11px] font-extrabold text-cyan-300 cursor-pointer">👁️ লাইভ প্রিভিউ (LaTeX render)</summary>
                        <div className="pt-3 space-y-2">
                          <div className="text-sm font-bold text-slate-100"><MathText text={editStem} /></div>
                          {editOptions.map((o, oi) => (
                            <div key={oi} className="text-xs text-slate-300 flex gap-2">
                              <span className="font-bold">{['ক','খ','গ','ঘ'][oi]})</span> <MathText text={o} />
                            </div>
                          ))}
                          {editExplanation && <div className="text-[11px] text-slate-400">💡 <MathText text={editExplanation} /></div>}
                        </div>
                      </details>

                      <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-800">
                        <button onClick={cancelEdit} disabled={saving}
                          className="text-xs font-bold text-slate-400 hover:text-white px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer">
                          <X className="w-3.5 h-3.5" /> বাতিল
                        </button>
                        <button onClick={() => saveEdit(it)} disabled={saving}
                          className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-xs font-extrabold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer">
                          {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                          সংরক্ষণ করুন
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
