/**
 * Local (in-repo) Question Media Registry — Option D
 *
 * Question images live inside the repository at:
 *   src/assets/question-media/**
 *
 * Filename convention (auto-linking, no manual mapping needed):
 *   <questionKey>__<placement>.<png|jpg|jpeg|webp>
 *
 * Where:
 *   - <questionKey> is any known alias of the question's stable key, e.g.:
 *       academic_ict_ch3_q019   (canonical short form)
 *       ict_ch3_q19             (short alias: subject_chapter_qNUM)
 *   - <placement> is one of:
 *       question | stimulus | option_a | option_b | option_c | option_d | option_e | explanation
 *
 * Examples:
 *   ict_ch3_q19__question.png
 *   ict_ch3_q28__stimulus.png        (shared উদ্দীপক — name it with the FIRST question number;
 *                                     also add one file per linked question if each needs it)
 *   ict_ch3_q53__option_a.png
 *
 * Vite's import.meta.glob discovers every image at build time.
 * Adding a new image = drop the file in the folder + commit. Nothing else.
 */

import { QuestionMediaItem, QuestionMediaPlacement } from '../types/questionBank';

const VALID_PLACEMENTS: QuestionMediaPlacement[] = [
  'question',
  'stimulus',
  'option_a',
  'option_b',
  'option_c',
  'option_d',
  'option_e',
  'explanation'
] as unknown as QuestionMediaPlacement[];

// Eagerly resolve all repo images to served URLs at build time
const discovered: Record<string, string> = (() => {
  try {
    const modules = import.meta.glob('../assets/question-media/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
      eager: true,
      query: '?url',
      import: 'default'
    }) as Record<string, string>;
    return modules || {};
  } catch {
    return {};
  }
})();

interface LocalMediaEntry {
  key: string;
  placement: QuestionMediaPlacement;
  url: string;
  fileName: string;
}

// key(lowercased) -> placement -> entry
const registry: Record<string, Partial<Record<string, LocalMediaEntry>>> = {};

function registerFile(path: string, url: string) {
  const fileName = path.split('/').pop() || '';
  // Tolerate double extensions from Windows renaming (e.g. name.png.png)
  const base = fileName.replace(/(\.(png|jpg|jpeg|webp))+$/i, '');
  const sepIdx = base.lastIndexOf('__');
  if (sepIdx <= 0) return; // must follow key__placement convention

  const key = base.slice(0, sepIdx).trim().toLowerCase();
  // Tolerate stray extension remnants and spaces in placement (e.g. "explanation.png", "question (1)")
  const placementRaw = base
    .slice(sepIdx + 2)
    .trim()
    .toLowerCase()
    .replace(/\.(png|jpg|jpeg|webp)$/i, '')
    .replace(/\s*\(\d+\)$/, '');

  if (!VALID_PLACEMENTS.includes(placementRaw as QuestionMediaPlacement)) return;

  if (!registry[key]) registry[key] = {};
  registry[key][placementRaw] = {
    key,
    placement: placementRaw as QuestionMediaPlacement,
    url,
    fileName
  };
}

Object.entries(discovered).forEach(([path, url]) => registerFile(path, url));

// Secondary index: question NUMBER -> key, only when unambiguous across all files.
// Lets the student Quiz (which may lack route/chapter metadata) still find images by plain id.
const numIndex: Record<string, string | 'AMBIGUOUS'> = {};
Object.keys(registry).forEach((key) => {
  const m = key.match(/q?0*(\d+)$/);
  if (!m) return;
  const num = String(parseInt(m[1], 10));
  if (numIndex[num] && numIndex[num] !== key) {
    numIndex[num] = 'AMBIGUOUS';
  } else {
    numIndex[num] = key;
  }
});

/**
 * Returns local (in-repo) media items for a question, looked up via all its alias keys.
 * First alias that has files wins per placement.
 */
export function getLocalMediaForAliases(aliases: string[]): QuestionMediaItem[] {
  const found: Partial<Record<string, LocalMediaEntry>> = {};

  const resolveAlias = (alias: string): string | undefined => {
    if (registry[alias]) return alias;
    // numeric fallback: "19" or "q19" or "q019"
    const nm = alias.match(/^q?0*(\d+)$/);
    if (nm) {
      const hit = numIndex[String(parseInt(nm[1], 10))];
      if (hit && hit !== 'AMBIGUOUS') return hit;
    }
    return undefined;
  };

  for (const rawAlias of aliases || []) {
    const alias = String(rawAlias || '').trim().toLowerCase();
    if (!alias) continue;
    const key = resolveAlias(alias);
    if (!key) continue;
    for (const [placement, entry] of Object.entries(registry[key])) {
      if (!entry) continue;
      if (!found[placement]) found[placement] = entry;
    }
  }

  return Object.values(found)
    .filter((e): e is LocalMediaEntry => Boolean(e))
    .map(e => ({
      id: `local_${e.key}_${e.placement}`,
      placement: e.placement,
      type: 'diagram',
      storagePath: `repo:src/assets/question-media/${e.fileName}`,
      url: e.url,
      altText: 'Question diagram',
      fileName: e.fileName,
      uploadedBy: 'repo',
      uploadedAt: ''
    } as QuestionMediaItem));
}

/** Total number of local media files discovered (for admin diagnostics) */
export function getLocalMediaFileCount(): number {
  return Object.values(registry).reduce((n, p) => n + Object.keys(p).length, 0);
}

/**
 * Suggested filename for a missing placement — shown in the Admin Image Manager
 * so the admin knows exactly what to name each screenshot.
 */
export function getSuggestedLocalFilename(stableKey: string, placement: string): string {
  return `${String(stableKey || '').trim().toLowerCase()}__${placement}.png`;
}
