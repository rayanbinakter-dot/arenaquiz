# QUIZ MASTER — PROJECT HANDOVER (নতুন চ্যাটের জন্য সম্পূর্ণ গাইড)

> এই ফাইলটা যেকোনো নতুন AI চ্যাটে কপি-পেস্ট করলে সে পুরো প্রজেক্ট বুঝে যাবে।
> Owner: rayanbinakter@gmail.com (admin email, hardcoded in src/constants.ts)

---

## 1. প্রজেক্ট কী

**Quiz Master** — বাংলাদেশের HSC/ভর্তি পরীক্ষার্থীদের জন্য Bangla-first MCQ study app।
Stack: React 19 + TypeScript + Vite + Firebase (Auth + Firestore) + Tailwind v4।

## 2. SOURCE OF TRUTH (সবচেয়ে গুরুত্বপূর্ণ)

- **GitHub repo = একমাত্র সত্য:** `https://github.com/rayanbinakter-dot/arenaquiz` (branch: main)
- Local কাজের ফোল্ডার: `C:\Users\USER\antigravity\Quiz-Master-` (owner-এর PC)
- পুরনো repo `raiiyanbinakter/quiz-master` = পরিত্যক্ত পুরনো ব্যাকআপ, ব্যবহার নিষেধ
- **AI Studio-র preview/কোড = পুরনো মিউজিয়াম কপি, কখনো ব্যবহার/সিংক করা নিষেধ**
- Antigravity-র AI quota সীমিত; git কমান্ড owner নিজে cmd টার্মিনালে চালায়

### Owner-এর দৈনিক workflow (cmd, black window):
```
cd C:\Users\USER\antigravity\Quiz-Master-
git pull origin main        (নতুন পরিবর্তন নামাতে)
npm run dev                 (অ্যাপ চালাতে; port 3000 ব্যস্ত হলে 3001)
git add -A && git commit -m "..." && git push origin main   (ব্যাকআপে)
```
- GitHub push-এর credentials: username `rayanbinakter-dot`, password = Personal Access Token (fine-grained, repo=arenaquiz, Contents: Read-write)। টোকেন মেয়াদোত্তীর্ণ হলে GitHub → Settings → Developer settings → Fine-grained tokens-এ নতুন বানাতে হবে।

## 3. অ্যাপের গঠন (রুট/পাথওয়ে)

4 Route: **Academic, Medical, Varsity, Engineering**
প্রতিটি route-এর Dashboard-এ 4 module (যেমন Varsity):
1. বিশ্ববিদ্যালয়/ইউনিটভিত্তিক অনুশীলন
2. বিগত বছরের প্রশ্ন
3. **বিষয়ভিত্তিক প্রস্তুতি (Module 3)** ← প্রশ্ন যোগের মূল জায়গা
4. মডেল টেস্ট

**নিয়ম:** সব জায়গায় একই exam-setup সিস্টেম — topic select → মোড (অনুশীলন/পরীক্ষা) → প্রশ্নসংখ্যা → custom typed time (1–180 min, একটাই global countdown, auto-submit, answer lock)। নতুন flow বানানো নিষেধ।

## 4. Key ফাইল

| কাজ | ফাইল |
|---|---|
| Student quiz স্ক্রিন | `src/components/Quiz.tsx` |
| Varsity প্রশ্ন লোডার | `src/lib/varsitySeedQuestions.ts` (getLocalVarsityQuestions) |
| Route/বিষয়/অধ্যায়/টপিক তালিকা | `src/data/routeTaxonomy.ts` |
| প্রশ্ন data ফাইল | `src/data/questions_*.ts` |
| জৈব রসায়ন (475 Qs, 16 topics) | `src/data/questions_chem2_organic.ts` |
| ICT Ch3 (178 Qs) | `src/data/questions_ict_chap3_part1-4.ts` |
| Bio1 Ch8 (77 Qs) | `src/data/questions_bio1_chap8.ts` |
| ছবি অটো-লিংক সিস্টেম | `src/utils/localQuestionMedia.ts` |
| ছবি resolve (student+admin) | `src/lib/questionMediaOverrides.ts` |
| Admin Image Manager | `src/components/admin/ImageRequiredTab.tsx` |
| Admin email | `src/constants.ts` (rayanbinakter@gmail.com) |

## 5. ছবি (Image) সিস্টেম — Option D (in-repo)

- Firebase Storage ব্যবহার হয় না (paid plan লাগে)। ছবি থাকে repo-তে:
  **`src/assets/question-media/`**
- ফাইলের নাম-ই ঠিকানা: `<questionKey>__<placement>.png`
  - placement: question | stimulus | option_a..option_e | explanation
  - উদাহরণ: `academic_ict_ch3_q019__explanation.png`
- Admin → চিত্র প্রয়োজন ট্যাবে প্রতিটি প্রশ্নে ৩ গ্রুপ slot দেখায় (প্রশ্ন/অপশন/ব্যাখ্যা), ক্লিকে নাম কপি হয়
- ফাইল রাখা + dev server restart = ছবি লাইভ। Double extension (.png.png) সহ্য করে।
- প্রশ্নে `[এখানে চিত্র ছিল]` টেক্সট = placeholder; student দেখে "চিত্র যুক্ত করা হচ্ছে" যতক্ষণ ফাইল না আসে

## 6. প্রশ্ন যোগ করার নিয়ম (AI assistant-এর জন্য)

Owner প্রশ্ন paste করবে এই header-সহ:
```
📍 Pathway: Varsity/Medical/Academic
Module: ৩. বিষয়ভিত্তিক প্রস্তুতি
বিষয়: X, পত্র: Y, অধ্যায়: Z
```
Assistant-এর করণীয় (script দিয়ে, AI-generation দিয়ে নয়):
1. Parse → প্রতি টপিকের প্রশ্ন গুনে report করা (paste-এর সাথে মিলিয়ে)
2. বিদ্যমান chapter হলে **APPEND** (পুরনো প্রশ্ন rewrite/renumber নিষেধ); নতুন হলে নতুন ফাইল + wiring
3. প্রশ্ন data ফাইলে: id (unique), topic, topicId, question_text (বাংলা নম্বরসহ), options[], correct_answer (পূর্ণ টেক্সট), explanation, time_limit
4. উদ্দীপক আলাদা `stimulus` ফিল্ডে, linked সব প্রশ্নে কপি
5. `routeTaxonomy.ts`-এ chapter-এর topics তালিকা আপডেট
6. `varsitySeedQuestions.ts`-এ নতুন chapter হলে লোডার যোগ
7. Verify: vitest simulation দিয়ে count/unique-id/পুরনো-অক্ষত চেক → lint → build → commit → push
8. Owner-কে বলবে: `git pull origin main` + restart

### কনটেন্ট নিয়ম (FINAL, বদলানো নিষেধ):
- `[এখানে চিত্র ছিল]` যেখানে আছে সেখানেই থাকবে; ছবির বর্ণনা লেখা নিষেধ
- LaTeX `$...$` অক্ষত রাখা; PDF-এ যা আছে তাই — কিছু invent করা নিষেধ
- বইয়ের ভুল/দ্বন্দ্ব silently ঠিক করা নিষেধ — "নোট: ... যাচাই প্রয়োজন" রাখতে হবে
- অপশন ক) খ) গ) ঘ) (ঙ); সঠিক উত্তর = অপশনের পূর্ণ টেক্সট

## 7. এখন পর্যন্ত যা আছে (কনটেন্ট)

- **Varsity Module 3:** পদার্থ (DCU sets), রসায়ন ১ম (৩ অধ্যায়) + **২য়: জৈব রসায়ন 475 Qs/16 topics সম্পূর্ণ**, জীববিজ্ঞান ১ম (Ch1, Ch7, Ch8=77), উচ্চতর গণিত, ICT Ch3 (178, ছবিসহ)
- **Medical:** physics/chem question banks, teacher sets (হাজারী/কবীর/গুহ/লিংকন), Bio Ch8 sets, Model Test blueprint (100 marks/50 min)
- ICT Ch3-এর 84টা ছবি `question-media/`-তে যুক্ত ও কাজ করছে

## 8. অসমাপ্ত কাজ (TODO)

1. **76/162 chemistry chapter** (আগের এক paste অসম্পূর্ণ ছিল — কোন chapter তা owner জানে; delete+repaste plan ছিল)
2. জৈব রসায়নের ৯০+ ছবি এখনো যোগ হয়নি (slots ready, owner screenshot দেবে)
3. পরবর্তী chapters: রসায়ন ২য়-এর বাকি, বাংলা ১ম/২য়, ICT-র অন্য অধ্যায়
4. Deploy করা হয়নি (পরে Firebase Hosting/Vercel — free)
5. Firebase Auth password reset link Login পেজে নেই (দরকার হলে যোগ করতে হবে)

## 9. যা করা NISHEDH (আগের বিপর্যয় থেকে শিক্ষা)

- ❌ AI Studio-তে ফেরা / সিংক করা
- ❌ পুরনো প্রশ্ন ফাইল rewrite (এতেই 77→48 আর 162→76 হয়েছিল)
- ❌ এক paste-এ 180+ প্রশ্ন AI দিয়ে ফাইল লেখানো (truncate হয়)
- ❌ Module 1 (teacher sets) আর Module 3 (topic-wise) মেশানো
- ❌ দুইটা npm run dev একসাথে চালানো
- ❌ Firebase Storage upload (paid) — Option D ব্যবহার করো
