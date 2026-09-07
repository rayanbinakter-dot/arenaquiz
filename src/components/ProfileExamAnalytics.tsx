import React, { useState, useEffect, useMemo } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import {
  BarChart2, ChevronRight, ChevronDown, RotateCcw, Layers,
  TrendingUp, XCircle, MinusCircle, CheckCircle2, Loader2, BookOpen, Eye
} from 'lucide-react';

// ==============================================
// Profile Exam Analytics (TEST-mode attempts only)
//  • Aggregate pie (correct / wrong / skipped)
//  • Progress trend — every exam normalized to 100%
//  • Structured wrong+skipped browser: বিষয় → অধ্যায় → টপিক (counts)
//  • Re-attempt wrong questions as a fresh exam
// ==============================================

interface StoredQuestionEntry {
  questionText: string;
  options: string[];
  selectedOption: string | null;
  correctAnswer: string;
  explanation: string;
  topic: string;
}

interface ExamAttemptDoc {
  id: string;
  title: string;
  route: string;
  subjectId: string | null;
  subjectName: string | null;
  paper: string | null;
  chapterName: string | null;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  skippedCount: number;
  totalScore: number;
  negativeMarking?: boolean;
  percentage: number;
  wrongQuestions: StoredQuestionEntry[];
  skippedQuestions: StoredQuestionEntry[];
  createdAt: string;
}

interface ProfileExamAnalyticsProps {
  user: any;
  onRetryQuestions?: (questions: any[], title: string) => void;
}

const toBn = (num: number | string): string => {
  const d = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return String(num).split('').map(c => /\d/.test(c) ? d[parseInt(c,10)] : c).join('');
};

// ---------- SVG Donut chart ----------
function DonutChart({ correct, wrong, skipped }: { correct: number; wrong: number; skipped: number }) {
  const total = correct + wrong + skipped;
  if (total === 0) return null;
  const R = 54, C = 2 * Math.PI * R;
  const segs = [
    { value: correct, color: '#34d399' },
    { value: wrong, color: '#fb7185' },
    { value: skipped, color: '#94a3b8' },
  ];
  let offset = 0;
  const pct = Math.round((correct / total) * 100);
  return (
    <div className="relative w-40 h-40 shrink-0">
      <svg viewBox="0 0 140 140" className="w-full h-full -rotate-90">
        <circle cx="70" cy="70" r={R} fill="none" stroke="#1e293b" strokeWidth="16" />
        {segs.map((s, i) => {
          const len = (s.value / total) * C;
          const el = (
            <circle
              key={i}
              cx="70" cy="70" r={R} fill="none"
              stroke={s.color} strokeWidth="16"
              strokeDasharray={`${len} ${C - len}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
            />
          );
          offset += len;
          return el;
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-extrabold text-white">{toBn(pct)}%</span>
        <span className="text-[10px] text-slate-400 font-bold">সঠিক উত্তর</span>
      </div>
    </div>
  );
}

// ---------- SVG progress trend (bar) ----------
function TrendBars({ attempts }: { attempts: ExamAttemptDoc[] }) {
  const last = attempts.slice(0, 12).reverse(); // oldest → newest
  if (last.length === 0) return null;
  return (
    <div className="flex items-end gap-1.5 h-28 w-full">
      {last.map((a, i) => {
        const p = Math.max(2, Math.min(100, a.percentage));
        const color = a.percentage >= 70 ? 'bg-emerald-500' : a.percentage >= 40 ? 'bg-amber-500' : 'bg-rose-500';
        return (
          <div key={a.id} className="flex-1 flex flex-col items-center gap-1 group relative">
            <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 border border-slate-700 rounded-lg px-2 py-0.5 text-[9px] text-white whitespace-nowrap z-10">
              {toBn(a.percentage.toFixed(0))}%
            </div>
            <div className="w-full bg-slate-800/60 rounded-t-md flex items-end" style={{ height: '100%' }}>
              <div className={`w-full rounded-t-md ${color} transition-all`} style={{ height: `${p}%` }} />
            </div>
            <span className="text-[8px] text-slate-500 font-bold">{toBn(i + 1)}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function ProfileExamAnalytics({ user, onRetryQuestions }: ProfileExamAnalyticsProps) {
  const [attempts, setAttempts] = useState<ExamAttemptDoc[]>([]);
  const [loading, setLoading] = useState(true);

  // Structured browser state
  const [browseType, setBrowseType] = useState<'wrong' | 'skipped'>('wrong');
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [showAnswers, setShowAnswers] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const fetchAttempts = async () => {
      if (!user?.uid || !db) { setLoading(false); return; }
      try {
        const snap = await getDocs(collection(db, 'users', user.uid, 'examAttempts'));
        const data = snap.docs.map(d => ({ id: d.id, ...d.data() })) as ExamAttemptDoc[];
        data.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
        setAttempts(data);
      } catch (e) {
        console.warn('Error fetching exam attempts:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchAttempts();
  }, [user?.uid]);

  // ---------- Aggregates ----------
  const agg = useMemo(() => {
    let correct = 0, wrong = 0, skipped = 0;
    attempts.forEach(a => {
      correct += a.correctCount || 0;
      wrong += a.wrongCount || 0;
      skipped += a.skippedCount || 0;
    });
    const avgPct = attempts.length > 0
      ? Math.round(attempts.reduce((s, a) => s + (a.percentage || 0), 0) / attempts.length)
      : 0;
    return { correct, wrong, skipped, avgPct, totalExams: attempts.length };
  }, [attempts]);

  // ---------- Structured tree: subject → chapter → topic ----------
  interface TopicBucket { topic: string; entries: Array<StoredQuestionEntry & { attemptTitle: string }>; }
  interface ChapterBucket { chapter: string; topics: Record<string, TopicBucket>; count: number; }
  interface SubjectBucket { subject: string; chapters: Record<string, ChapterBucket>; count: number; }

  const tree = useMemo<Record<string, SubjectBucket>>(() => {
    const subjects: Record<string, SubjectBucket> = {};
    attempts.forEach(a => {
      const list = browseType === 'wrong' ? (a.wrongQuestions || []) : (a.skippedQuestions || []);
      const subjKey = a.subjectName || 'অন্যান্য';
      const chapKey = a.chapterName || a.title || 'অন্যান্য অধ্যায়';
      list.forEach(q => {
        if (!subjects[subjKey]) subjects[subjKey] = { subject: subjKey, chapters: {}, count: 0 };
        const sb = subjects[subjKey];
        if (!sb.chapters[chapKey]) sb.chapters[chapKey] = { chapter: chapKey, topics: {}, count: 0 };
        const cb = sb.chapters[chapKey];
        const topicKey = q.topic || 'সাধারণ';
        if (!cb.topics[topicKey]) cb.topics[topicKey] = { topic: topicKey, entries: [] };
        cb.topics[topicKey].entries.push({ ...q, attemptTitle: a.title });
        cb.count += 1;
        sb.count += 1;
      });
    });
    return subjects;
  }, [attempts, browseType]);

  const selectedEntries = useMemo(() => {
    if (!expandedSubject || !expandedChapter || !selectedTopic) return [];
    return tree[expandedSubject]?.chapters[expandedChapter]?.topics[selectedTopic]?.entries || [];
  }, [tree, expandedSubject, expandedChapter, selectedTopic]);

  const handleRetryTopic = () => {
    if (!onRetryQuestions || selectedEntries.length === 0) return;
    // Deduplicate by question text
    const seen = new Set<string>();
    const uniq = selectedEntries.filter(e => {
      if (seen.has(e.questionText)) return false;
      seen.add(e.questionText);
      return true;
    });
    const quizQuestions = uniq.map((e, idx) => ({
      id: idx + 1,
      topic: e.topic,
      question_text: e.questionText,
      options: e.options,
      correct_answer: e.correctAnswer,
      explanation: e.explanation,
      time_limit: 45
    }));
    onRetryQuestions(quizQuestions, `পুনরায় পরীক্ষা: ${selectedTopic} (${browseType === 'wrong' ? 'ভুল প্রশ্ন' : 'স্কিপ করা প্রশ্ন'})`);
  };

  const handleRetryAllWrong = () => {
    if (!onRetryQuestions) return;
    const all: StoredQuestionEntry[] = [];
    attempts.forEach(a => all.push(...(a.wrongQuestions || [])));
    const seen = new Set<string>();
    const uniq = all.filter(e => {
      if (seen.has(e.questionText)) return false;
      seen.add(e.questionText);
      return true;
    });
    if (uniq.length === 0) return;
    const quizQuestions = uniq.slice(0, 50).map((e, idx) => ({
      id: idx + 1,
      topic: e.topic,
      question_text: e.questionText,
      options: e.options,
      correct_answer: e.correctAnswer,
      explanation: e.explanation,
      time_limit: 45
    }));
    onRetryQuestions(quizQuestions, 'পুনরায় পরীক্ষা: সব ভুল প্রশ্ন');
  };

  if (loading) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex items-center justify-center gap-3 text-slate-400 text-sm">
        <Loader2 className="w-5 h-5 animate-spin" />
        পরীক্ষার বিশ্লেষণ লোড হচ্ছে...
      </div>
    );
  }

  if (attempts.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <h2 className="text-lg font-extrabold text-white flex items-center gap-2 mb-2">
          <BarChart2 className="w-5 h-5 text-cyan-400" />
          পরীক্ষার বিশ্লেষণ
        </h2>
        <p className="text-xs text-slate-400 leading-relaxed">
          এখনো কোনো <strong className="text-slate-200">পরীক্ষা মোডে</strong> exam দেওয়া হয়নি।
          প্রশ্নব্যাংক থেকে "পরীক্ষা মোড" বেছে exam দিলে এখানে আপনার অগ্রগতির গ্রাফ,
          ভুল ও স্কিপ করা প্রশ্নের তালিকা এবং পুনরায় অনুশীলনের সুযোগ পাবেন। 🎯
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* ===== OVERVIEW: DONUT + TREND ===== */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-cyan-400" />
            পরীক্ষার বিশ্লেষণ
          </h2>
          <span className="text-[11px] font-bold text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
            মোট পরীক্ষা: {toBn(agg.totalExams)}টি
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Donut */}
          <DonutChart correct={agg.correct} wrong={agg.wrong} skipped={agg.skipped} />

          {/* Legend + stats */}
          <div className="flex-1 w-full space-y-3">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-3 text-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <div className="text-lg font-extrabold text-emerald-400">{toBn(agg.correct)}</div>
                <div className="text-[10px] text-slate-400 font-bold">সঠিক</div>
              </div>
              <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-3 text-center">
                <XCircle className="w-4 h-4 text-rose-400 mx-auto mb-1" />
                <div className="text-lg font-extrabold text-rose-400">{toBn(agg.wrong)}</div>
                <div className="text-[10px] text-slate-400 font-bold">ভুল</div>
              </div>
              <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-3 text-center">
                <MinusCircle className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                <div className="text-lg font-extrabold text-slate-300">{toBn(agg.skipped)}</div>
                <div className="text-[10px] text-slate-400 font-bold">স্কিপ</div>
              </div>
            </div>
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-3.5 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                গড় স্কোর (১০০% ভিত্তিতে)
              </span>
              <span className={`text-xl font-extrabold ${agg.avgPct >= 70 ? 'text-emerald-400' : agg.avgPct >= 40 ? 'text-amber-400' : 'text-rose-400'}`}>
                {toBn(agg.avgPct)}%
              </span>
            </div>
          </div>
        </div>

        {/* Trend bars */}
        <div className="pt-4 border-t border-slate-800">
          <h3 className="text-xs font-extrabold text-slate-300 mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-400" />
            সাম্প্রতিক পরীক্ষাগুলোর অগ্রগতি (প্রতিটি ১০০% ভিত্তিতে)
          </h3>
          <TrendBars attempts={attempts} />
        </div>
      </div>

      {/* ===== STRUCTURED WRONG/SKIPPED BROWSER ===== */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-rose-400" />
            ভুল ও স্কিপ করা প্রশ্ন
          </h2>
          <button
            onClick={handleRetryAllWrong}
            className="bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-extrabold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            সব ভুল প্রশ্নে পুনরায় পরীক্ষা
          </button>
        </div>

        {/* wrong/skipped toggle */}
        <div className="flex bg-slate-950 border border-slate-800 rounded-xl p-1 w-fit">
          <button
            onClick={() => { setBrowseType('wrong'); setExpandedSubject(null); setExpandedChapter(null); setSelectedTopic(null); }}
            className={`px-4 py-2 rounded-lg text-xs font-extrabold transition-colors cursor-pointer ${browseType === 'wrong' ? 'bg-rose-500 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            ভুল উত্তর ({toBn(agg.wrong)})
          </button>
          <button
            onClick={() => { setBrowseType('skipped'); setExpandedSubject(null); setExpandedChapter(null); setSelectedTopic(null); }}
            className={`px-4 py-2 rounded-lg text-xs font-extrabold transition-colors cursor-pointer ${browseType === 'skipped' ? 'bg-slate-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            স্কিপ করা ({toBn(agg.skipped)})
          </button>
        </div>

        {/* Tree: subject → chapter → topic */}
        {Object.keys(tree).length === 0 ? (
          <p className="text-xs text-slate-500 py-4 text-center">
            {browseType === 'wrong' ? 'কোনো ভুল উত্তর নেই — চমৎকার! 🎉' : 'কোনো স্কিপ করা প্রশ্ন নেই।'}
          </p>
        ) : (
          <div className="space-y-2">
            {(Object.values(tree) as SubjectBucket[]).sort((a, b) => b.count - a.count).map((sb) => (
              <div key={sb.subject} className="bg-slate-950/60 border border-slate-800 rounded-2xl overflow-hidden">
                {/* Subject row */}
                <button
                  onClick={() => {
                    setExpandedSubject(expandedSubject === sb.subject ? null : sb.subject);
                    setExpandedChapter(null); setSelectedTopic(null);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-slate-800/40 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-extrabold text-white flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    {sb.subject}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold bg-rose-500/15 text-rose-300 border border-rose-500/20 px-2.5 py-1 rounded-full">
                      {toBn(sb.count)}টি
                    </span>
                    {expandedSubject === sb.subject ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
                  </span>
                </button>

                {/* Chapters */}
                {expandedSubject === sb.subject && (
                  <div className="border-t border-slate-800 px-3 py-2 space-y-1.5">
                    {(Object.values(sb.chapters) as ChapterBucket[]).sort((a, b) => b.count - a.count).map((cb) => (
                      <div key={cb.chapter} className="bg-slate-900/60 border border-slate-800/70 rounded-xl overflow-hidden">
                        <button
                          onClick={() => {
                            setExpandedChapter(expandedChapter === cb.chapter ? null : cb.chapter);
                            setSelectedTopic(null);
                          }}
                          className="w-full flex items-center justify-between px-3.5 py-2.5 hover:bg-slate-800/40 transition-colors cursor-pointer"
                        >
                          <span className="text-xs font-bold text-slate-200 text-left">{cb.chapter}</span>
                          <span className="flex items-center gap-2 shrink-0">
                            <span className="text-[10px] font-extrabold text-amber-300">{toBn(cb.count)}টি</span>
                            {expandedChapter === cb.chapter ? <ChevronDown className="w-3.5 h-3.5 text-slate-500" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
                          </span>
                        </button>

                        {/* Topics */}
                        {expandedChapter === cb.chapter && (
                          <div className="border-t border-slate-800/70 p-2 flex flex-wrap gap-1.5">
                            {(Object.values(cb.topics) as TopicBucket[]).map((tb) => (
                              <button
                                key={tb.topic}
                                onClick={() => { setSelectedTopic(selectedTopic === tb.topic ? null : tb.topic); setShowAnswers({}); }}
                                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold border transition-colors cursor-pointer ${
                                  selectedTopic === tb.topic
                                    ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-600'
                                }`}
                              >
                                {tb.topic} <span className="opacity-70">({toBn(tb.entries.length)})</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Selected topic question list */}
        {selectedTopic && selectedEntries.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-sm font-extrabold text-cyan-300">
                {selectedTopic} — {toBn(selectedEntries.length)}টি প্রশ্ন
              </h3>
              <button
                onClick={handleRetryTopic}
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-extrabold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                এই টপিকে পুনরায় পরীক্ষা দিন
              </button>
            </div>

            {selectedEntries.map((e, idx) => (
              <div key={idx} className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 space-y-2">
                <p className="text-xs font-bold text-slate-200 leading-relaxed">{toBn(idx + 1)}. {e.questionText}</p>
                <button
                  onClick={() => setShowAnswers(prev => ({ ...prev, [idx]: !prev[idx] }))}
                  className="text-[10px] font-extrabold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3 h-3" />
                  {showAnswers[idx] ? 'উত্তর লুকান' : 'উত্তর ও ব্যাখ্যা দেখুন'}
                </button>
                {showAnswers[idx] && (
                  <div className="space-y-1.5 pt-1">
                    {e.options.map((opt, oi) => {
                      const isCorrect = opt === e.correctAnswer;
                      const isSelected = opt === e.selectedOption;
                      return (
                        <div key={oi} className={`text-[11px] px-3 py-2 rounded-lg border ${
                          isCorrect ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                          : isSelected ? 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}>
                          {opt} {isCorrect && '✓'} {isSelected && !isCorrect && '✗ (আপনার উত্তর)'}
                        </div>
                      );
                    })}
                    {e.explanation && (
                      <p className="text-[10px] text-slate-400 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 leading-relaxed">
                        💡 {e.explanation}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
