// ============================================================
// Medical (MBBS) Admission Merit Calculation — DGHS Rules
// Based on the 2025-26 admission circular (dgme.gov.bd):
//   • Admission Test: 100 MCQ, 1 mark each, 1 hour
//   • Negative marking: −0.25 per wrong answer
//   • Pass mark: 40
//   • GPA Marks (200): SSC GPA × 15 (max 75) + HSC GPA × 25 (max 125)
//   • Total Merit = Test Score + GPA Marks (out of 300)
//   • Second-timer deduction: 3 marks from total
//     (previously-admitted govt medical students: 5 marks — not modeled here)
// ============================================================

import { MedicalBatch, TimerStatus } from '../types/gamification';

export const MEDICAL_NEGATIVE_MARK_PER_WRONG = 0.25;
export const MEDICAL_TEST_TOTAL = 100;
export const MEDICAL_PASS_MARK = 40;
export const SSC_GPA_MULTIPLIER = 15;   // max 75
export const HSC_GPA_MULTIPLIER = 25;   // max 125
export const SECOND_TIMER_DEDUCTION = 3;
export const MEDICAL_MERIT_TOTAL = 300;

// Subject distribution of the official 100-mark test
export const MEDICAL_TEST_DISTRIBUTION = [
  { subject: 'জীববিজ্ঞান', marks: 30 },
  { subject: 'রসায়ন', marks: 25 },
  { subject: 'পদার্থবিজ্ঞান', marks: 20 },
  { subject: 'ইংরেজি', marks: 15 },
  { subject: 'সাধারণ জ্ঞান', marks: 10 },
];

export const MEDICAL_BATCH_OPTIONS: Array<{
  id: MedicalBatch;
  label: string;
  sub: string;
  needsHscGpa: boolean;
  defaultTimer: TimerStatus;
}> = [
  { id: 'hsc2026', label: 'HSC 2026', sub: '১ম টাইমার (মূল প্রার্থী)', needsHscGpa: false, defaultTimer: 'first' },
  { id: 'hsc2025', label: 'HSC 2025', sub: '২য় টাইমার', needsHscGpa: true, defaultTimer: 'second' },
  { id: 'hsc2027', label: 'HSC 2027', sub: 'আগাম প্রস্তুতি', needsHscGpa: false, defaultTimer: 'first' },
  { id: 'hsc2028', label: 'HSC 2028', sub: 'আগাম প্রস্তুতি', needsHscGpa: false, defaultTimer: 'first' },
];

export interface MedicalScoreInput {
  correctCount: number;
  wrongCount: number;
  totalQuestions: number; // exam-এ যত প্রশ্ন ছিল
  negativeMarking?: boolean; // default true for medical model test
}

export interface MedicalMeritProfile {
  sscGpa?: number | null;
  hscGpa?: number | null;
  timerStatus?: TimerStatus;
}

export interface MedicalMeritBreakdown {
  rawTestScore: number;        // correct − 0.25×wrong (floored at 0)
  normalizedTestScore: number; // scaled to /100 basis
  sscGpaMarks: number | null;  // GPA×15
  hscGpaMarks: number | null;  // GPA×25
  gpaTotal: number | null;     // /200
  timerDeduction: number;
  meritScore: number | null;   // /300 (null if GPA missing)
  isPassed: boolean;           // normalized ≥ 40
  percentage: number;          // /100 basis percent
}

/** নেগেটিভ মার্কিং সহ কাঁচা স্কোর (প্রতি ভুলে −০.২৫) */
export function computeTestScore(input: MedicalScoreInput): number {
  const negative = input.negativeMarking !== false;
  const raw = input.correctCount - (negative ? input.wrongCount * MEDICAL_NEGATIVE_MARK_PER_WRONG : 0);
  return Math.max(0, Math.round(raw * 100) / 100);
}

/** যেকোনো সংখ্যক প্রশ্নের exam-কে ১০০-এর ভিত্তিতে normalize করা */
export function normalizeTo100(score: number, totalQuestions: number): number {
  if (totalQuestions <= 0) return 0;
  return Math.round((score / totalQuestions) * 100 * 100) / 100;
}

export function computeMeritBreakdown(
  input: MedicalScoreInput,
  profile?: MedicalMeritProfile
): MedicalMeritBreakdown {
  const rawTestScore = computeTestScore(input);
  const normalizedTestScore = normalizeTo100(rawTestScore, input.totalQuestions);

  const ssc = profile?.sscGpa ?? null;
  const hsc = profile?.hscGpa ?? null;
  const sscGpaMarks = ssc != null ? Math.round(ssc * SSC_GPA_MULTIPLIER * 100) / 100 : null;
  const hscGpaMarks = hsc != null ? Math.round(hsc * HSC_GPA_MULTIPLIER * 100) / 100 : null;
  const gpaTotal = sscGpaMarks != null && hscGpaMarks != null
    ? Math.round((sscGpaMarks + hscGpaMarks) * 100) / 100
    : null;

  const timerDeduction = profile?.timerStatus === 'second' ? SECOND_TIMER_DEDUCTION : 0;

  const meritScore = gpaTotal != null
    ? Math.max(0, Math.round((normalizedTestScore + gpaTotal - timerDeduction) * 100) / 100)
    : null;

  return {
    rawTestScore,
    normalizedTestScore,
    sscGpaMarks,
    hscGpaMarks,
    gpaTotal,
    timerDeduction,
    meritScore,
    isPassed: normalizedTestScore >= MEDICAL_PASS_MARK,
    percentage: normalizedTestScore
  };
}

export function isValidGpa(v: number | null | undefined): v is number {
  return typeof v === 'number' && !isNaN(v) && v >= 1 && v <= 5;
}
