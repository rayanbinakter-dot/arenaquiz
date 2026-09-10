// ============================================================
// Topic Galaxy Engine — pure logic (research-backed)
//
// গবেষণা-ভিত্তি (design decisions):
//  • Khan Academy mastery levels → ৪-স্তরের রঙ (green/yellow/red/grey)
//    যাতে অগ্রগতি স্পষ্ট দেখা যায় (skill-tree ~25-35% completion বাড়ায়)
//  • Duolingo নীতি: gamification শেখায় না — শেখার আচরণে ফেরায়।
//    তাই প্রতিটি বিশ্লেষণের সাথে বাধ্যতামূলক অ্যাকশন CTA (মিশন/রুটিন/রিভিউ)
//  • Quizlet নীতি: সবচেয়ে দুর্বল টপিক আগে দেখানো (algorithm-level CD2)
//  • Sailer & Homner 2020 (g=0.49): competence-বাঁধা reward কাজ করে,
//    ফাঁকা পয়েন্ট নয় — তাই কয়েন শুধু exam সম্পন্ন করলেই মেলে
// ============================================================

import { LearningRoute } from '../types/gamification';

// ---------- Coin economy ----------
export const GALAXY_EXTRA_PATHWAY_COST = 300;   // ৩০ দিনের জন্য
export const GALAXY_MULTIVERSE_COST = 1000;     // ৪ pathway একসাথে, ৩০ দিন
export const GALAXY_UNLOCK_DAYS = 30;
export const MISSION_BONUS_COINS = 10;

export type GalaxyUnlocks = Record<string, string>; // route -> expiry ISO ('multiverse' key allowed)

export function isUnlockActive(expiryIso?: string): boolean {
  if (!expiryIso) return false;
  return new Date(expiryIso).getTime() > Date.now();
}

/** নিজের pathway সবসময় ফ্রি; অন্যগুলো unlock বা multiverse লাগে */
export function canAccessGalaxy(
  route: LearningRoute,
  ownRoute: LearningRoute | undefined,
  unlocks: GalaxyUnlocks | undefined
): boolean {
  if (route === ownRoute) return true;
  if (!unlocks) return false;
  if (isUnlockActive(unlocks['multiverse'])) return true;
  return isUnlockActive(unlocks[route]);
}

export function makeUnlockExpiry(days: number = GALAXY_UNLOCK_DAYS): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

export interface UnlockResult {
  ok: boolean;
  error?: string;
  newCoins?: number;
  newUnlocks?: GalaxyUnlocks;
}

export function tryUnlock(
  kind: 'pathway' | 'multiverse',
  route: LearningRoute | null,
  currentCoins: number,
  unlocks: GalaxyUnlocks | undefined
): UnlockResult {
  const cost = kind === 'multiverse' ? GALAXY_MULTIVERSE_COST : GALAXY_EXTRA_PATHWAY_COST;
  if (currentCoins < cost) {
    return { ok: false, error: `যথেষ্ট কয়েন নেই — দরকার ${cost}, আছে ${currentCoins}। পরীক্ষা দিয়ে কয়েন জমান (প্রতি পরীক্ষায় +২০)!` };
  }
  const key = kind === 'multiverse' ? 'multiverse' : (route as string);
  if (!key) return { ok: false, error: 'pathway নির্বাচন করা হয়নি।' };
  const newUnlocks: GalaxyUnlocks = { ...(unlocks || {}), [key]: makeUnlockExpiry() };
  return { ok: true, newCoins: currentCoins - cost, newUnlocks };
}

// ---------- Mastery status (Khan-style levels) ----------
export type GalaxyStatus = 'mastered' | 'weak' | 'danger' | 'untouched';

export const STATUS_META: Record<GalaxyStatus, { labelBn: string; color: string; glow: string }> = {
  mastered:  { labelBn: 'আয়ত্তে',        color: '#34d399', glow: 'rgba(52,211,153,0.5)' },
  weak:      { labelBn: 'আরও অনুশীলন',   color: '#fbbf24', glow: 'rgba(251,191,36,0.5)' },
  danger:    { labelBn: 'ঝুঁকিপূর্ণ',      color: '#fb7185', glow: 'rgba(251,113,133,0.5)' },
  untouched: { labelBn: 'অনাবিষ্কৃত',     color: '#64748b', glow: 'rgba(100,116,139,0.35)' }
};

export function pctToStatus(pct: number | null): GalaxyStatus {
  if (pct === null || isNaN(pct as any)) return 'untouched';
  if (pct >= 80) return 'mastered';
  if (pct >= 40) return 'weak';
  return 'danger';
}

// ---------- Attempt aggregation ----------
export interface AttemptLite {
  chapterName?: string | null;
  subjectName?: string | null;
  title?: string;
  percentage?: number;
  totalQuestions?: number;
  correctCount?: number;
  wrongQuestions?: Array<{ topic?: string }>;
  skippedQuestions?: Array<{ topic?: string }>;
  createdAt?: string;
}

const norm = (s?: string | null) => (s || '').normalize('NFC').trim();

/** অধ্যায়ের (গ্রহের) স্কোর: ম্যাচিং attempt-গুলোর সাম্প্রতিক-ভারিত গড় % */
export function computeChapterStats(
  attempts: AttemptLite[],
  chapterName: string
): { pct: number | null; attempts: number; lastAt?: string } {
  const c = norm(chapterName);
  const matched = attempts.filter(a =>
    norm(a.chapterName) === c || (a.title && norm(a.title).includes(c))
  );
  if (matched.length === 0) return { pct: null, attempts: 0 };
  // সাম্প্রতিক attempt বেশি ওজন পায় (recency-weighted, spaced-repetition ঘরানার)
  const sorted = [...matched].sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
  let wsum = 0, psum = 0;
  sorted.forEach((a, i) => {
    const w = 1 / (i + 1);
    wsum += w;
    psum += (a.percentage ?? 0) * w;
  });
  return {
    pct: Math.round(psum / wsum),
    attempts: matched.length,
    lastAt: sorted[0]?.createdAt
  };
}

/** টপিকের (উপগ্রহের) স্ট্যাটাস: ভুল/স্কিপে টপিকটি কতবার এসেছে */
export function computeTopicStatus(
  attempts: AttemptLite[],
  chapterName: string,
  topicName: string
): { status: GalaxyStatus; wrongCount: number } {
  const c = norm(chapterName);
  const t = norm(topicName);
  const chapterAttempts = attempts.filter(a =>
    norm(a.chapterName) === c || (a.title && norm(a.title).includes(c))
  );
  if (chapterAttempts.length === 0) return { status: 'untouched', wrongCount: 0 };

  let wrong = 0, skipped = 0;
  chapterAttempts.forEach(a => {
    (a.wrongQuestions || []).forEach(w => { if (norm(w.topic) === t) wrong++; });
    (a.skippedQuestions || []).forEach(s => { if (norm(s.topic) === t) skipped++; });
  });
  const bad = wrong + skipped * 0.5;
  if (bad >= 4) return { status: 'danger', wrongCount: wrong };
  if (bad >= 1) return { status: 'weak', wrongCount: wrong };
  return { status: 'mastered', wrongCount: 0 };
}

/** দুর্বলতম টপিক আগে (Quizlet নীতি) — mission suggestion-এর জন্য */
export function rankWeakTopics(
  attempts: AttemptLite[],
  chapterName: string,
  topics: string[]
): Array<{ topic: string; status: GalaxyStatus; wrongCount: number }> {
  const order: Record<GalaxyStatus, number> = { danger: 0, weak: 1, untouched: 2, mastered: 3 };
  return topics
    .map(t => ({ topic: t, ...computeTopicStatus(attempts, chapterName, t) }))
    .sort((a, b) => order[a.status] - order[b.status] || b.wrongCount - a.wrongCount);
}

/** গ্যালাক্সি হেলথ স্কোর (সাপ্তাহিক উন্নতি celebrate করার জন্য) */
export function computeGalaxyHealth(
  chapterPcts: Array<number | null>
): { health: number; explored: number; total: number } {
  const total = chapterPcts.length;
  const touched = chapterPcts.filter(p => p !== null) as number[];
  const health = touched.length
    ? Math.round(touched.reduce((s, p) => s + p, 0) / touched.length)
    : 0;
  return { health, explored: touched.length, total };
}
