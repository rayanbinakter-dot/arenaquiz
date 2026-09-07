// ============================================================
// Question Content Overrides
// Admin edits (stem/options/answer/explanation) saved in Firestore
// `question_content_overrides/{stableKey}` are applied here at
// render time — seed data files remain untouched.
// ============================================================

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { QuestionItem } from '../types/questionBank';
import { getStableQuestionKey } from './questionMediaOverrides';

export interface QuestionContentOverride {
  stem?: string;
  options?: string[];
  correctOption?: string;
  explanation?: string;
}

let cachedOverrides: Record<string, QuestionContentOverride> | null = null;
let fetchPromise: Promise<Record<string, QuestionContentOverride>> | null = null;

export async function fetchQuestionContentOverrides(force = false): Promise<Record<string, QuestionContentOverride>> {
  if (cachedOverrides && !force) return cachedOverrides;
  if (fetchPromise && !force) return fetchPromise;

  fetchPromise = (async () => {
    const map: Record<string, QuestionContentOverride> = {};
    try {
      const snap = await getDocs(collection(db, 'question_content_overrides'));
      snap.docs.forEach(d => { map[d.id] = d.data() as QuestionContentOverride; });
    } catch (e) {
      console.warn('Could not fetch question content overrides:', e);
    }
    cachedOverrides = map;
    return map;
  })();
  return fetchPromise;
}

/** Apply admin content edits to medical/varsity QuestionItem list (in place copy). */
export function applyContentOverridesToItems(
  items: QuestionItem[],
  overrides: Record<string, QuestionContentOverride>
): QuestionItem[] {
  if (!overrides || Object.keys(overrides).length === 0) return items;

  return items.map(q => {
    const key = getStableQuestionKey({
      id: q.id,
      route: q.route,
      subject: (q as any).subject,
      paper: q.paper,
      chapterId: q.chapterId,
      chapterName: q.chapterName,
      topicName: q.topicName,
      sourceSet: q.sourceSet,
      sourceQuestionNumber: q.sourceQuestionNumber,
      stem: q.stem
    });
    const ov = overrides[key];
    if (!ov) return q;

    const next: QuestionItem = { ...q };
    if (ov.stem) next.stem = ov.stem;
    if (ov.options && ov.options.length === (q.options || []).length) {
      next.options = (q.options || []).map((o, i) => ({ ...o, text: ov.options![i] }));
      if (ov.correctOption) {
        const idx = ov.options.findIndex(t => t === ov.correctOption);
        if (idx >= 0 && next.options[idx]) next.correctOptionId = next.options[idx].id;
      }
    }
    if (ov.explanation) {
      next.explanation = { ...(q.explanation || {}), shortExplanation: ov.explanation };
    }
    return next;
  });
}
