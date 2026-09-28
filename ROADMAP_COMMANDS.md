# ArenaQuiz Build Roadmap: Step-by-Step Commands

> How to use this file: do the phases **in order**. In each step:
> 1. Copy the **COMMAND** block and paste it into your AI coding agent (Arena, Antigravity, etc.).
> 2. When the agent finishes, run the **CHECK** yourself.
> 3. Commit only after the check passes, then move to the next step.
>
> Rule: **one command = one small feature = one commit.** Never paste 3 commands together.
> Before each command, paste PROJECT_HANDOVER.md, then say: "Read ROADMAP_COMMANDS.md, we are on step X".

---

## Where the project stands (audited 2026-09-28)

| Area | Status | Problem |
|---|---|---|
| Stack | React 19 + Vite + Firebase + Tailwind v4 | Fine |
| `npm run lint` | ✅ passes | — |
| `npm run build` | ✅ builds | 🔴 **Main JS bundle = 10.6 MB (1.59 MB gzip).** All ~9 MB of question `.ts` files are bundled into the app. On a Bangladeshi 3G phone the first load can take 30+ seconds. Fix this before anything else. |
| Tests | 34 tests pass, **11 test files crash** | Tests import `firebase.ts`, which fails without `.env` (`auth/invalid-api-key`). Firebase must be mocked in tests. |
| Admin | Hardcoded email in `src/constants.ts` | Client-side email checks can be bypassed. Rules docs expect `token.admin == true` (a custom claim). |
| Firestore rules | Only `.md` docs | No real `firestore.rules` file is deployed from the repo. |
| Battles / clans / leagues | ❌ Not built | `houses.ts` has 4 fixed houses (identity only, not clans). `Leaderboard.tsx` and `DailyMissions.tsx` exist. |
| SSC (Class 9-10) | ❌ Not built | Current content is HSC/admission-focused. |

---

## PHASE 0: Fix the foundation (1-2 weeks)
Skipping this means battles will be slow, cheatable and fragile.

### Step 0.1: Make the tests run without secrets
**COMMAND**
```
In this repo, 11 vitest files fail with "Firebase: Error (auth/invalid-api-key)"
because they import src/firebase.ts without a .env. Create a global Firebase mock
in src/setupTests.ts (mock firebase/app, firebase/auth, firebase/firestore used in
src/firebase.ts) so all test files run without credentials. Do NOT change app
behavior or question data. Run `npx vitest run` and show me all files passing.
```
**CHECK:** `npx vitest run` → 0 failed files.

### Step 0.2: Take question data out of the main bundle (most important)
**COMMAND**
```
The production bundle dist/assets/index-*.js is 10.6 MB because every
src/data/questions_*.ts and med_*.ts file is statically imported. Refactor so
question files are loaded on demand with dynamic import() per chapter/topic
(e.g. a registry map: chapterId -> () => import('./data/questions_x')).
Also lazy-load route dashboards (Medical, Varsity, Admin, Routine, PhysicsVisualLab)
with React.lazy + Suspense. Rules: do NOT edit, renumber or rewrite any question
content; only change how files are imported. Keep all existing tests passing.
Target: main chunk under 500 KB gzip. Show before/after `npm run build` sizes.
```
**CHECK:** `npm run build` → main `index-*.js` gzip < 500 KB. Open 3 chapters in the app and confirm the questions still load.

### Step 0.3: Real security (admin claim plus a deployable rules file)
**COMMAND**
```
1. Create firestore.rules and storage.rules at repo root by merging all the
   FIRESTORE_*_RULES.md specs into one real rules file, plus firebase.json.
2. Replace the client-side ADMIN_EMAIL check with an `admin` custom claim
   (read via getIdTokenResult). Keep ADMIN_EMAIL only as a UI hint.
3. Add scripts/setAdminClaim.cjs (firebase-admin) that I run once locally
   with a service account to give my account admin=true. Document how.
Never commit service-account JSON; add it to .gitignore.
```
**CHECK:** Log in with a non-admin account → admin panel stays blocked, even after editing localStorage.

### Step 0.4: Move the question bank toward data, not code (prepares for SSC scale)
**COMMAND**
```
Write a script scripts/exportQuestions.ts that reads all existing question .ts
files and writes one JSON file per chapter into public/qbank/<track>/<subject>/<chapter>.json
with a manifest.json (ids, counts, version hash). Add a unit test that the total
count and all ids match the .ts sources exactly (no question lost). Do not delete
the .ts files yet. Then make the loader prefer the JSON (fetch + cache) and fall
back to the .ts registry.
```
**CHECK:** The test proves counts match 1:1. This protects against the old "77→48 questions" disaster.

---

## PHASE 1: SSC + HSC academic core (2-3 weeks)

### Step 1.1: Curriculum taxonomy
**COMMAND**
```
Extend src/data/routeTaxonomy.ts / academicSyllabusConfig.ts with this hierarchy:
Track (SSC | HSC) -> Version (bangla | english) -> Group (science | business | humanities)
-> Subject (paper-level, e.g. "Physics 1st Paper") -> Chapter -> Topic.
Every question gets tags: track, subject, chapter, topic, difficulty(1-3),
qtype ('simple' | 'multiple_completion' | 'situation'), source ('board' | 'college' | 'original'),
boardName?, year?. Add a TypeScript type and a validator test that fails if any
question is missing required tags. Add onboarding: student picks class, version, group
once; home screen then only shows their subjects.
```
**CHECK:** A new user picks Class 9 + English + Science and only sees those subjects.

### Step 1.2: Report-a-question and auto-void
**COMMAND**
```
Add a "ভুল রিপোর্ট করো" button on every question in Quiz.tsx and the result review.
Store reports in /questionReports/{questionId}/items. When a question reaches 3
distinct-user reports, mark it "under_review" (hidden from ranked battles, still in
practice with a warning). Admin tab lists reported questions sorted by count, with
Fix / Dismiss actions. Add rules so users can only create their own report.
```

### Step 1.3: Mastery + Revision Deck
**COMMAND**
```
Using src/utils/topicMastery.ts, give each chapter a 0-100 mastery score
(recent accuracy weighted, decays after 14 days idle). Every wrong answer anywhere
(practice, test, battle) is added to a "Revision Deck" with spaced repetition
(show again after 1, 3, 7, 14 days). Add a Revision Deck screen and a home-card
"আজকের রিভিশন: 12টি প্রশ্ন".
```

---

## PHASE 2: Ghost Battle (build this BEFORE live 1v1) (2 weeks)
Why first: it works on bad internet, costs almost nothing on Firebase, and needs no waiting in a queue.

### Step 2.1: Battle engine (shared by all modes)
**COMMAND**
```
Create src/battle/ with a pure, fully unit-tested engine (no Firebase inside):
- buildBattleSet(filter, seed): picks 7 questions deterministically from a seed
  (same seed = same questions, options shuffled per seed). Excludes "under_review".
- scoreAnswer(correct, msUsed, limitMs=20000): correct = 10 + speed bonus up to 5
  (linear), wrong/timeout = 0. Round 7 counts double.
- BattleRun type: {seed, answers:[{qid, choice, msUsed}], total}.
Write tests for determinism, scoring and edge cases.
```

### Step 2.2: Ghost Battle flow
**COMMAND**
```
Build Ghost Battle using src/battle engine:
1. Student picks subject+chapter -> plays 7 Qs -> run saved to /battleRuns/{runId}.
2. "Challenge a friend" creates a share link (?ghost=runId) for WhatsApp/Messenger.
3. Friend opens link -> plays the SAME seed; UI shows a live "ghost bar"
   replaying the original player's per-question timing.
4. Result screen: both scores, per-question comparison, explanations,
   "Add wrong to Revision Deck", "Rematch".
5. If no friend: match against a real past run from a player with similar rating
   (label it clearly as "Ghost of <name>"; never fake bots).
Questions must be fully preloaded before start so the battle works if the
network drops mid-match; save the result when back online.
```
**CHECK:** Turn on airplane mode in the middle of a battle → finish it → turn the network back on → the result saves.

### Step 2.3: Anti-cheat plus server-side scoring
> ⚠️ Needs **Firebase Blaze plan** (pay-as-you-go, but it has a free monthly quota). Without it, anyone can post a fake score from the browser.

**COMMAND**
```
Add a Cloud Function `submitBattleRun` (functions/ folder, TypeScript). The client
sends only {seed, answers}. The server rebuilds the question set from the seed,
recomputes the score, rejects impossible data (msUsed < 800ms for many answers,
total time mismatch), then writes XP/rating. Firestore rules: clients cannot write
xp, rating, or battleRuns.total directly.
```

---

## PHASE 3: Leagues + streaks (1-2 weeks)

### Step 3.1: Weekly leagues (Duolingo model)
**COMMAND**
```
Implement weekly leagues: each week users are grouped into cohorts of 30 within
the same track (SSC/HSC). Tiers: ব্রোঞ্জ, সিলভার, গোল্ড, প্লাটিনাম, ডায়মন্ড.
XP from practice AND battles counts. Scheduled Cloud Function every Sunday
23:59 Asia/Dhaka: top 7 promote, bottom 5 demote, then new cohorts. Replace the
global Leaderboard.tsx default view with "My League" and show promotion/
demotion zones.
```

### Step 3.2: Streak with protection
**COMMAND**
```
Daily streak = at least 10 questions answered (Asia/Dhaka day). Add streak freeze
(earn 1 per 7-day streak, max 2), and an "exam/Eid pause" the student can turn on
for up to 7 days. Push/notification copy in Bangla, max 1 reminder per day.
```

---

## PHASE 4: Live 1v1 Friend Battle (2 weeks)

### Step 4.1: Realtime room
**COMMAND**
```
Add live 1v1 using Firebase Realtime Database (cheaper than Firestore for
fast updates). Flow: create room -> invite code/link -> both "ready" ->
server sets seed + startAt -> both clients preload questions -> play 7 Qs with
20s each; only answer events {qIndex, choice, msUsed} are sent. If a player
disconnects for >15s, convert the rest of their match into a Ghost Battle
instead of forfeit. Final score computed by submitBattleRun (server). Add
rivalry record (A vs B wins) on the result screen.
```
**CHECK:** Test on two real phones: one on Wi-Fi, one on mobile data.

---

## PHASE 5: Clans + Clan War (2-3 weeks)

### Step 5.1: Clans
**COMMAND**
```
Add clans (separate from the 4 fixed houses, which stay as identity):
create/join by code, 10-30 members, locked to one track (e.g. HSC-27 Science).
Roles: leader, co-leader, member. Clan page: members, weekly contribution,
"Clan weak chapters" (aggregate of member mastery). Chat = preset Bangla
phrases + stickers only (safe for minors, no free text).
```

### Step 5.2: Weekly Clan War
**COMMAND**
```
Every Monday a scheduled function pairs clans of similar clan rating within the
same track. War lasts 7 days on 3 admin-chosen chapters. Each member can play
up to 5 war battles vs rival clan members' ghosts; each member's points are
capped so one topper can't carry. Winner gets clan XP and moves up clan league.
Show a live war scoreboard.
```

---

## PHASE 6: Launch readiness (1-2 weeks)

| Step | COMMAND (short) |
|---|---|
| 6.1 PWA/offline | "Make the app an installable PWA (vite-plugin-pwa). Cache the app shell and let students download chapter packs from public/qbank for offline practice. Show storage used." |
| 6.2 Low-end phones | "Add a 'Lite mode' that disables motion animations and heavy gradients, auto-enabled when navigator.deviceMemory <= 2 or saveData is on. Measure with Lighthouse mobile; target Performance > 80." |
| 6.3 Analytics | "Add Firebase Analytics events: signup, first_quiz, battle_start, battle_finish, streak_day, league_promote, clan_join. Build an admin chart for D1/D7/D30 retention." |
| 6.4 Deploy | "Set up Firebase Hosting deploy with a GitHub Action on push to main (rules + functions + hosting). Secrets only in GitHub Secrets." |
| 6.5 Android app | "Wrap the PWA with Capacitor for a Play Store build; keep APK small." |

---

## Your daily workflow (cmd)
```
cd C:\Users\USER\antigravity\Quiz-Master-
git pull origin main
npm install            (only when package.json changed)
npm run dev
:: after the AI finishes a step:
npm run lint
npx vitest run
npm run build
git add -A && git commit -m "step X.Y: <what>" && git push origin main
```

## Golden rules for giving the AI commands
1. **Always** say "do not rewrite or renumber existing questions".
2. One step per chat message, and ask it to "show test results and build size at the end".
3. If the AI touches more than 15 files for a small step, stop and ask why.
4. Battles, XP and rating must **never** be calculated only in the browser (Phase 2.3).
5. Use real student testing after Phases 2, 4 and 5: give 20 SSC/HSC students the app for a week before building the next phase.

**Rough total: 12-16 weeks for one developer plus AI agent.** Phase 0 plus Phase 2 alone (about 4 weeks) already gives you something no Bangladeshi competitor has: offline-safe Ghost Battles on the NCTB syllabus.
