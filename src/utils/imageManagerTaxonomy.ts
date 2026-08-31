/**
 * Image Manager Taxonomy Bridge
 *
 * Connects the Image Required Manager to the app's SINGLE SOURCE OF TRUTH:
 * ROUTE_TAXONOMY (src/data/routeTaxonomy.ts) — the same taxonomy that drives
 * the entire student app (pathway → subject → paper → chapter → topic).
 *
 * Responsibilities:
 * 1. Canonicalize every scanned question's metadata against ROUTE_TAXONOMY
 *    (e.g. legacy ICT items with chapterId "ch3" resolve to canonical "ict_ch3").
 * 2. Build merged filter options: full app taxonomy UNION detected items,
 *    so the admin always sees the app's real, live structure — every pathway,
 *    subject, paper, chapter and topic that exists in the app — with live counts.
 */

import { ROUTE_TAXONOMY, AppRoute } from '../data/routeTaxonomy';
import { slugifyText } from './questionParser';

export interface FilterOption {
  id: string;
  label: string;
  count: number;
  /** true when the entry exists in the app taxonomy (even if 0 detected questions) */
  inTaxonomy: boolean;
}

/** Minimal shape the resolver needs from a normalized requirement item */
export interface TaxonomyResolvableItem {
  routeId: string;
  subjectId: string;
  paperId: string;
  chapterId: string;
  chapterName?: string;
  topicId: string;
  topicName?: string;
}

/** Normalize Bangla/English names for tolerant comparison */
export function normalizeName(name?: string): string {
  return String(name || '')
    // strip "অধ্যায় ৩:" / "অধ্যায় ১২ :" style prefixes used by taxonomy display names
    .replace(/^\s*অধ্যায়\s*[০-৯0-9]+\s*[:।]\s*/u, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

const ROUTE_LABELS: Record<string, string> = {
  academic: 'Academic (এইচএসসি একাডেমি)',
  medical: 'Medical (মেডিকেল ভর্তি প্রস্তুতি)',
  varsity: 'Varsity (বিশ্ববিদ্যালয় ‘ক’ ইউনিট)',
  engineering: 'Engineering (ইঞ্জিনিয়ারিং ভর্তি প্রস্তুতি)'
};

export function getTaxonomyRouteLabel(routeId: string): string {
  return ROUTE_LABELS[routeId] || routeId;
}

/**
 * Resolve one item's chapter/topic against the canonical app taxonomy.
 * Returns canonical IDs when a match is found so filter equality "just works".
 */
export function resolveItemToTaxonomy(item: TaxonomyResolvableItem): TaxonomyResolvableItem {
  const routeKey = item.routeId as AppRoute;
  const routeDef = (ROUTE_TAXONOMY as any)[routeKey];
  if (!routeDef) return item;

  const subjectDef = routeDef.subjects.find((s: any) => s.id === item.subjectId);
  if (!subjectDef) return item;

  const paperDef =
    subjectDef.papers.find((p: any) => p.id === item.paperId) ||
    (subjectDef.papers.length === 1 ? subjectDef.papers[0] : undefined);
  if (!paperDef) return item;

  const itemChapterNameNorm = normalizeName(item.chapterName);
  const chapterDef = paperDef.chapters.find(
    (c: any) =>
      c.id === item.chapterId ||
      normalizeName(c.name) === itemChapterNameNorm
  );
  if (!chapterDef) return item;

  const resolved: TaxonomyResolvableItem = {
    ...item,
    paperId: paperDef.id,
    chapterId: chapterDef.id,
    chapterName: item.chapterName || chapterDef.name
  };

  // Topic: if item topic name matches a taxonomy topic, keep item's topicId
  // (option builder unions by normalized name, so equality follows naturally).
  return resolved;
}

interface FilterState {
  routeFilter: string;
  subjectFilter: string;
  paperFilter: string;
  chapterFilter: string;
}

/** All routes defined in the app taxonomy + any extra routes present in items */
export function buildRouteOptions(items: TaxonomyResolvableItem[]): FilterOption[] {
  const opts = new Map<string, FilterOption>();
  (Object.keys(ROUTE_TAXONOMY) as AppRoute[]).forEach(r => {
    opts.set(r, { id: r, label: getTaxonomyRouteLabel(r), count: 0, inTaxonomy: true });
  });
  items.forEach(it => {
    const existing = opts.get(it.routeId);
    if (existing) {
      existing.count++;
    } else {
      opts.set(it.routeId, {
        id: it.routeId,
        label: it.routeId === 'unknown' ? 'মেটাডেটা যাচাই প্রয়োজন' : it.routeId,
        count: 1,
        inTaxonomy: false
      });
    }
  });
  return Array.from(opts.values());
}

export function buildSubjectOptions(items: TaxonomyResolvableItem[], f: Pick<FilterState, 'routeFilter'>): FilterOption[] {
  const opts = new Map<string, FilterOption>();
  const routes: AppRoute[] =
    f.routeFilter === 'all'
      ? (Object.keys(ROUTE_TAXONOMY) as AppRoute[])
      : ((ROUTE_TAXONOMY as any)[f.routeFilter] ? [f.routeFilter as AppRoute] : []);
  routes.forEach(r => {
    (ROUTE_TAXONOMY as any)[r].subjects.forEach((s: any) => {
      const existing = opts.get(s.id);
      if (!existing) opts.set(s.id, { id: s.id, label: s.name, count: 0, inTaxonomy: true });
    });
  });
  items
    .filter(it => f.routeFilter === 'all' || it.routeId === f.routeFilter)
    .forEach(it => {
      const existing = opts.get(it.subjectId);
      if (existing) existing.count++;
      else opts.set(it.subjectId, { id: it.subjectId, label: it.subjectId === 'unknown' ? 'মেটাডেটা যাচাই প্রয়োজন' : it.subjectId, count: 1, inTaxonomy: false });
    });
  return Array.from(opts.values());
}

export function buildPaperOptions(items: TaxonomyResolvableItem[], f: Pick<FilterState, 'routeFilter' | 'subjectFilter'>): FilterOption[] {
  const opts = new Map<string, FilterOption>();
  const paperLabel = (id: string) =>
    id === 'first' ? '১ম পত্র' : id === 'second' ? '২য় পত্র' : id === 'not_applicable' ? 'প্রযোজ্য নয়' : id;

  const routes: AppRoute[] =
    f.routeFilter === 'all'
      ? (Object.keys(ROUTE_TAXONOMY) as AppRoute[])
      : ((ROUTE_TAXONOMY as any)[f.routeFilter] ? [f.routeFilter as AppRoute] : []);
  routes.forEach(r => {
    (ROUTE_TAXONOMY as any)[r].subjects
      .filter((s: any) => f.subjectFilter === 'all' || s.id === f.subjectFilter)
      .forEach((s: any) => {
        s.papers.forEach((p: any) => {
          if (!opts.has(p.id)) opts.set(p.id, { id: p.id, label: paperLabel(p.id), count: 0, inTaxonomy: true });
        });
      });
  });
  items
    .filter(it => (f.routeFilter === 'all' || it.routeId === f.routeFilter) && (f.subjectFilter === 'all' || it.subjectId === f.subjectFilter))
    .forEach(it => {
      const existing = opts.get(it.paperId);
      if (existing) existing.count++;
      else opts.set(it.paperId, { id: it.paperId, label: paperLabel(it.paperId), count: 1, inTaxonomy: false });
    });
  return Array.from(opts.values());
}

export function buildChapterOptions(items: TaxonomyResolvableItem[], f: FilterState): FilterOption[] {
  const opts = new Map<string, FilterOption>();
  const routes: AppRoute[] =
    f.routeFilter === 'all'
      ? (Object.keys(ROUTE_TAXONOMY) as AppRoute[])
      : ((ROUTE_TAXONOMY as any)[f.routeFilter] ? [f.routeFilter as AppRoute] : []);
  routes.forEach(r => {
    (ROUTE_TAXONOMY as any)[r].subjects
      .filter((s: any) => f.subjectFilter === 'all' || s.id === f.subjectFilter)
      .forEach((s: any) => {
        s.papers
          .filter((p: any) => f.paperFilter === 'all' || p.id === f.paperFilter)
          .forEach((p: any) => {
            p.chapters.forEach((c: any) => {
              if (!opts.has(c.id)) opts.set(c.id, { id: c.id, label: c.name, count: 0, inTaxonomy: true });
            });
          });
      });
  });
  items
    .filter(it =>
      (f.routeFilter === 'all' || it.routeId === f.routeFilter) &&
      (f.subjectFilter === 'all' || it.subjectId === f.subjectFilter) &&
      (f.paperFilter === 'all' || it.paperId === f.paperFilter))
    .forEach(it => {
      const existing = opts.get(it.chapterId);
      if (existing) existing.count++;
      else opts.set(it.chapterId, { id: it.chapterId, label: it.chapterName || it.chapterId, count: 1, inTaxonomy: false });
    });
  return Array.from(opts.values());
}

export function buildTopicOptions(items: TaxonomyResolvableItem[], f: FilterState): FilterOption[] {
  // Merge key = normalized topic NAME (taxonomy topics are plain strings;
  // items may carry custom topicIds like chem1_qual_t01)
  const byName = new Map<string, FilterOption>();

  const routes: AppRoute[] =
    f.routeFilter === 'all'
      ? (Object.keys(ROUTE_TAXONOMY) as AppRoute[])
      : ((ROUTE_TAXONOMY as any)[f.routeFilter] ? [f.routeFilter as AppRoute] : []);
  routes.forEach(r => {
    (ROUTE_TAXONOMY as any)[r].subjects
      .filter((s: any) => f.subjectFilter === 'all' || s.id === f.subjectFilter)
      .forEach((s: any) => {
        s.papers
          .filter((p: any) => f.paperFilter === 'all' || p.id === f.paperFilter)
          .forEach((p: any) => {
            p.chapters
              .filter((c: any) => f.chapterFilter === 'all' || c.id === f.chapterFilter)
              .forEach((c: any) => {
                (c.topics || []).forEach((t: string) => {
                  const key = normalizeName(t);
                  if (!byName.has(key)) {
                    byName.set(key, { id: slugifyText(t) || key, label: t, count: 0, inTaxonomy: true });
                  }
                });
              });
          });
      });
  });

  items
    .filter(it =>
      (f.routeFilter === 'all' || it.routeId === f.routeFilter) &&
      (f.subjectFilter === 'all' || it.subjectId === f.subjectFilter) &&
      (f.paperFilter === 'all' || it.paperId === f.paperFilter) &&
      (f.chapterFilter === 'all' || it.chapterId === f.chapterFilter))
    .forEach(it => {
      const key = normalizeName(it.topicName || it.topicId);
      const existing = byName.get(key);
      if (existing) {
        existing.count++;
        // Adopt the item's real topicId as the option value so filtering matches
        existing.id = it.topicId;
      } else {
        byName.set(key, {
          id: it.topicId,
          label: it.topicName || it.topicId,
          count: 1,
          inTaxonomy: false
        });
      }
    });

  return Array.from(byName.values());
}
