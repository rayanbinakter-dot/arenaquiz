import { Question } from '../types';

export const ictChap3QuestionsPart3: Question[] = [
  // Type 06 : লজিক গেইট
  {
    id: 91,
    topic: "৬. লজিক গেইট",
    question_text: "৯১. মৌলিক লজিক গেট কয়টি? [কু. বো. ২৩; মা. বো. ১৯]",
    options: ["2", "3", "4", "5"],
    correct_answer: "3",
    explanation: "মৌলিক লজিক গেট ৩টি: ১. OR (যৌক্তিক যোগ), ২. AND (যৌক্তিক গুণ), ৩. NOT (যৌক্তিক পূরক)।",
    time_limit: 30
  },
  {
    id: 92,
    topic: "৬. লজিক গেইট",
    question_text: "৯২. নিচের কোনটি মৌলিক gate? [য. বো. ১৯]",
    options: ["NOT", "NOR", "NAND", "X-NOR"],
    correct_answer: "NOT",
    explanation: "NOT গেট একটি মৌলিক লজিক গেট। NOR ও NAND সার্বজনীন গেট এবং X-NOR বিশেষ গেট।",
    time_limit: 30
  },
  {
    id: 93,
    topic: "৬. লজিক গেইট",
    question_text: "৯৩. কোন লজিক গেইটের ইনপুট ও আউটপুট লাইন সমান থাকে? [ঢা. বো. ১৭; য. বো. ১৭]",
    options: ["AND", "OR", "NOT", "NAND"],
    correct_answer: "NOT",
    explanation: "NOT গেইটে একটিমাত্র ইনপুট এবং একটিমাত্র আউটপুট লাইন থাকে।",
    time_limit: 30
  },
  {
    id: 94,
    topic: "৬. লজিক গেইট",
    question_text: "৯৪. Inverter হিসেবে কাজ করে কোন লজিক গেট? [য. বো. ২৩]",
    options: ["AND", "OR", "NOT", "X-OR"],
    correct_answer: "NOT",
    explanation: "NOT গেটের আউটপুট ইনপুটের বিপরীত (0 হলে 1, 1 হলে 0) বলে একে ইনভার্টার (Inverter) বলা হয়।",
    time_limit: 30
  },
  {
    id: 95,
    topic: "৬. লজিক গেইট",
    question_text: "৯৫. নিচের কোন লজিক গেইটের আউটপুট ইনপুটের বিপরীত? [চ. বো. ১৬]",
    options: ["AND", "OR", "NOT", "X-OR"],
    correct_answer: "NOT",
    explanation: "NOT গেইটের আউটপুট সর্বদা ইনপুটের উল্টো বা বিপরীত মান প্রদান করে।",
    time_limit: 30
  },
  {
    id: 96,
    topic: "৬. লজিক গেইট",
    question_text: "৯৬. বুলিয়ান অ্যালজেবরার যোগের কাজ সম্পাদনের জন্য ব্যবহৃত গেইট কোনটি? [কু. বো. ২৪]",
    options: ["AND", "OR", "SUM", "NAND"],
    correct_answer: "OR",
    explanation: "OR গেইট বুলিয়ান যৌক্তিক যোগ (Logical Addition) সম্পাদনে ব্যবহৃত হয়।",
    time_limit: 30
  },
  {
    id: 97,
    topic: "৬. লজিক গেইট",
    question_text: "৯৭. যদি তিন ইনপুট OR গেইটের আউটপুট 0 (শূন্য) করা প্রয়োজন হয় তাহলে কোনটি প্রয়োগ করতে হবে? [সি. বো. ১৭]",
    options: ["সকল ইনপুট 0 (শূন্য) করতে হবে", "সকল ইনপুট 1 করতে হবে", "যেকোনো একটি ইনপুট 0 (শূন্য) করতে হবে", "যেকোনো একটি ইনপুট 1 করতে হবে"],
    correct_answer: "সকল ইনপুট 0 (শূন্য) করতে হবে",
    explanation: "OR গেইটের যে কোনো একটি ইনপুট 1 হলেই আউটপুট 1 হয়। শুধুমাত্র সকল ইনপুট 0 হলেই আউটপুট 0 হয়।",
    time_limit: 30
  },
  {
    id: 98,
    topic: "৬. লজিক গেইট",
    question_text: "৯৮. বাইনারি যোগকে বুলিয়ান যোগের সাথে সমন্বয় করার জন্য কোন গেইট ব্যবহার করা হয়? [চ. বো. ২৫]",
    options: ["XNOR", "OR", "NOR", "XOR"],
    correct_answer: "XOR",
    explanation: "XOR গেইট বাইনারি যোগের সাম (Sum) বিট তৈরি করতে ব্যবহৃত হয় (যেমন 1 ⊕ 1 = 0)।",
    time_limit: 30
  },
  {
    id: 99,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "৯৯. ৯৯. উদ্দীপকে কোন গেইটটির আউটপুট দেওয়া আছে? [য. বো. ২৩]",
    options: ["$\\mathrm{OR}$", "$\\mathrm{AND}$", "$\\mathrm{NOT}$", "$\\mathrm{XOR}$"],
    correct_answer: "$\\mathrm{XOR}$",
    explanation: "$\\mathrm{A \\oplus B} = \\overline{\\mathrm{A}}\\mathrm{B} + \\mathrm{A}\\overline{\\mathrm{B}} = \\overline{0}.0 + 0.\\overline{0}$\n$= 0 + 1 = 1$\n$= 1 + 0 = 1$\n$= 1 + 1 = 0$",
    time_limit: 30
  },
  {
    id: 100,
    topic: "৬. লজিক গেইট",
    question_text: "১০০. দুই ইনপুটের কোন গেইটে ইনপুট দুটি ভিন্ন হলে আউটপুট 1 হয়? [য. বো. ২৫]",
    options: ["AND", "NOR", "XOR", "XNOR"],
    correct_answer: "XOR",
    explanation: "XOR গেইটে ইনপুটদ্বয় অসমান (0, 1 বা 1, 0) হলে আউটপুট 1 হয়।",
    time_limit: 30
  },
  {
    id: 101,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১০১. ১০১. উদ্দীপকে যুক্ত বর্তনীটি কোন গেট নির্দেশ করে? [য. বো. ১৭]",
    options: ["$\\mathrm{AND}$", "$\\mathrm{OR}$", "$\\mathrm{NOT}$", "$\\mathrm{NOR}$"],
    correct_answer: "$\\mathrm{AND}$",
    explanation: "",
    time_limit: 30
  },
  {
    id: 102,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১০২. AND গেটের আউটপুটের সাথে NOT Gate যুক্ত করলে কোন গেট পাওয়া যাবে? [য. বো. ১৭]",
    options: ["AND", "NAND", "X-OR", "X-NOR"],
    correct_answer: "NAND",
    explanation: "AND + NOT = NAND গেট।",
    time_limit: 30
  },
  {
    id: 103,
    topic: "৬. লজিক গেইট",
    question_text: "১০৩. ১০৩. নিচের সার্কিটটির ক্ষেত্রে কখন আলো জ্বলবে না? [রা. বো. ২৫]\n[এখানে চিত্র ছিল]",
    options: ["$\\mathrm{A=0, B=0}$", "$\\mathrm{A=0,\\ \\mathrm{B}=1}$", "$\\mathrm{A=1, B=0}$", "$\\mathrm{A=1,\\ \\mathrm{B}=1$"],
    correct_answer: "$\\mathrm{A=0, B=0}$",
    explanation: "[চিত্রটি $\\mathrm{OR}$ গেইটকে নির্দেশ করে।]",
    time_limit: 30
  },
  {
    id: 104,
    topic: "৬. লজিক গেইট",
    question_text: "১০৪. NOR এর আউটপুট 0 (শূন্য) হবে যখন- [ঢা. বো. ১৯; দি. বো. ১৭]\ni. সবগুলো ইনপুট 1\nii. সবগুলো ইনপুট 0\niii. যে কোনো একটি ইনপুট 1\nনিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct_answer: "i ও iii",
    explanation: "NOR গেইটে যেকোনো ইনপুট 1 হলে বা সবগুলো 1 হলে আউটপুট 0 হয়। কেবল সবগুলো ইনপুট 0 হলে আউটপুট 1 হয়।",
    time_limit: 30
  },
  {
    id: 105,
    topic: "৬. লজিক গেইট",
    question_text: "১০৫. ১০৫. উভয় ইনপুট $1$ হলে আউটপুট $0$ হয় কোন গেইটে? [য. বো. ১৯]\ni. $\\mathrm{NAND}$\nii. $\\mathrm{NOR}$\niii. $\\mathrm{XNOR}$\nনিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct_answer: "i ও iii",
    explanation: "[এখানে চিত্র ছিল]\nউভয় ইনপুট $1$ হলে আউটপুট $0$ হয় $\\mathrm{NAND}$ ও $\\mathrm{NOR}$ গেইটে। $\\mathrm{XNOR}$ গেইটে উভয় ইনপুট $1$ অথবা $0$ হলে আউটপুট $1$ হবে।",
    time_limit: 30
  },
  {
    id: 106,
    topic: "৬. লজিক গেইট",
    question_text: "১০৬. কোনো গেইটের সকল ইনপুট 0 হলে আউটপুট 1 হবে? [সম্মিলিত বোর্ড- ১৮]\ni. NAND\nii. NOR\niii. XNOR\nনিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct_answer: "i, ii ও iii",
    explanation: "NAND, NOR এবং XNOR তিনটিতেই সকল ইনপুট 0 হলে আউটপুট 1 হয়।",
    time_limit: 30
  },
  {
    id: 107,
    topic: "৬. লজিক গেইট",
    question_text: "১০৭. কোন গেইটে সকল ইনপুট 1 হলে আউটপুট 0 হয় অন্যথায় আউটপুট 1 হয়? [কু. বো. ২৫]",
    options: ["NAND", "NOR", "XNOR", "AND"],
    correct_answer: "NAND",
    explanation: "NAND গেটের আউটপুট AND গেটের বিপরীত। সব ইনপুট 1 হলে আউটপুট 0, অন্যথায় 1।",
    time_limit: 30
  },
  {
    id: 108,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১০৮. ১০৮. উপরিউক্ত যুক্তি বর্তনীটি কোন গেট নির্দেশ করে? [দি. বো. ২৩]",
    options: ["$\\mathrm{AND}$", "$\\mathrm{OR}$", "$\\mathrm{NOR}$", "$\\mathrm{NAND}$"],
    correct_answer: "$\\mathrm{NOR}$",
    explanation: "",
    time_limit: 30
  },
  {
    id: 109,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১০৯. NAND এর ক্ষেত্রে কখন আলো জ্বলবে (আউটপুট 1 হবে)? [দি. বো. ২৩]\ni. A=0, B=0\nii. A=1, B=0\niii. A=1, B=1\nনিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct_answer: "i ও ii",
    explanation: "NAND গেইটে (0.0)\u0305 = 1, (1.0)\u0305 = 1; কিন্তু (1.1)\u0305 = 0।",
    time_limit: 30
  },
  {
    id: 110,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১১০. ১১০. উদ্দীপকের সত্যক সারণি যে গেট নির্দেশ করে তা হলো: [য. বো. ২৩]",
    options: ["$\\mathrm{NOR}$", "$\\mathrm{NAND}$", "$\\mathrm{XOR}$", "$\\mathrm{XNOR}$"],
    correct_answer: "$\\mathrm{NAND}$",
    explanation: "",
    time_limit: 30
  },
  {
    id: 111,
    topic: "৬. লজিক গেইট",
    question_text: "১১১. NAND গেইটের আউটপুটকে NOT গেইটের মধ্যে দিয়ে প্রবেশ করালে কোন গেইট পাওয়া যায়? [কু. বো. ২৪]",
    options: ["AND", "OR", "X-OR", "X-NOR"],
    correct_answer: "AND",
    explanation: "(AB)\u0305 এর উপর পুনরায় NOT দিলে ((AB)\u0305)\u0305 = AB অর্থাৎ AND গেইট পাওয়া যায়।",
    time_limit: 30
  },
  {
    id: 112,
    topic: "৬. লজিক গেইট",
    question_text: "১১২. NOR গেইটের আউটপুটকে NOT গেইটের মধ্য দিয়ে প্রবেশ করালে কোন গেইট পাওয়া যায়?",
    options: ["OR", "X-NOR", "X-OR", "AND"],
    correct_answer: "OR",
    explanation: "((A+B)\u0305)\u0305 = A + B অর্থাৎ OR গেইট তৈরি হয়।",
    time_limit: 30
  },
  {
    id: 113,
    topic: "৬. লজিক গেইট",
    question_text: "১১৩. ডিজিটাল ইলেকট্রনিক্সে যে কোনো সার্কিট বাস্তবায়ন করা যায় কোন গেইট দিয়ে? [চ. বো. ২৪]",
    options: ["XNOR", "OR", "NOR", "XOR"],
    correct_answer: "NOR",
    explanation: "NOR এবং NAND সার্বজনীন (Universal) গেইট হওয়ায় এদের যেকোনো একটি দিয়ে সব লজিক সার্কিট তৈরি করা সম্ভব।",
    time_limit: 30
  },
  {
    id: 114,
    topic: "৬. লজিক গেইট",
    question_text: "১১৪. সার্বজনীন গেইট হচ্ছে- [রা. বো. ২৪; অনুরূপ: য. বো. ১৭; রা. বো. ১৬; মা. বো. ১৬]\ni. NAND\nii. NOR\niii. AND\nনিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct_answer: "i ও ii",
    explanation: "NAND ও NOR হলো দুটি সার্বজনীন গেট।",
    time_limit: 30
  },
  {
    id: 115,
    topic: "৬. লজিক গেইট",
    question_text: "১১৫. ১১৫. সার্বজনীন গেট তৈরিতে ব্যবহৃত হয়- [রা. বো. ২৩; অনুরূপ: চ. বো. ১৬]\n[এখানে চিত্র ছিল]\nনিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct_answer: "i, ii ও iii",
    explanation: "$\\mathrm{AND, OR,}$ এবং $\\mathrm{NOT}$ তিনটি গেইটই সার্বজনীন গেট তৈরিতে ব্যবহৃত হয়। এই গেইটগুলোকে মৌলিক গেট বলা হয়।",
    time_limit: 30
  },
  {
    id: 116,
    topic: "৬. লজিক গেইট",
    question_text: "১১৬. ১১৬. কোনটি $\\mathrm{NAND}$ গেট? [কু. বো. ১৭]\n[এখানে চিত্র ছিল]",
    options: ["[এখানে চিত্র ছিল]", "[এখানে চিত্র ছিল]", "[এখানে চিত্র ছিল]", "[এখানে চিত্র ছিল]"],
    correct_answer: "[এখানে চিত্র ছিল]",
    explanation: "$\\mathrm{AND}$ গেইটের মধ্যে $\\mathrm{NOT}$ গেইট প্রবাহিতকরলে যে গেইট পাওয়া যায় তাকে $\\mathrm{NAND}$ গেইট বলে। দুটি বিটের তুলনা করতে $\\mathrm{NAND}$ গেইট ব্যবহৃত হয়।",
    time_limit: 30
  },
  {
    id: 117,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১১৭. ১১৭. সত্যক সারণির লজিক গেইট কোনটি?",
    options: ["$\\mathrm{AND}$", "$\\mathrm{OR}$", "$\\mathrm{NOR}$", "$\\mathrm{NAND}$"],
    correct_answer: "$\\mathrm{NOR}$",
    explanation: "",
    time_limit: 30
  },
  {
    id: 118,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১১৮. ১১৮. $\\mathrm{X}$ কলমে 0 হলে 1 এবং 1 এর স্থলে 0 বসালে প্রাপ্ত গেইটটি হবে-\n[এখানে চিত্র ছিল]",
    options: ["[এখানে চিত্র ছিল]", "[এখানে চিত্র ছিল]", "[এখানে চিত্র ছিল]", "[এখানে চিত্র ছিল]"],
    correct_answer: "[এখানে চিত্র ছিল]",
    explanation: "$\\mathrm{X}$ কলামে 0 স্থলে 1 এবং 1 এর স্থলে 0 বসালে পাই,\n[এখানে চিত্র ছিল]\nযা $\\mathrm{OR}$ গেইট নির্দেশ করে।\n[এখানে চিত্র ছিল]",
    time_limit: 30
  },
  {
    id: 119,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১১৯. ১১৯. উদ্দীপকের বর্তনীটির $\\mathrm{Q}$-এর মান কত? [রা. বো. ১৭]",
    options: ["$0$", "$1$", "$\\mathrm{M}$", "$\\mathrm{M+N}$"],
    correct_answer: "$1$",
    explanation: "$\\mathrm{Q} = \\overline{\\mathrm{M}} + \\mathrm{MN} + \\mathrm{M}\\overline{\\mathrm{N}}$\n$= \\overline{\\mathrm{M}} + \\mathrm{M}(\\mathrm{N} + \\overline{\\mathrm{N}})$\n$= \\overline{\\mathrm{M}} + \\mathrm{M}.1$\n$= \\overline{M} + \\mathrm{M}$\n$= 1 \\ [\\because \\mathrm{M} + \\overline{\\mathrm{M}} = 1]$",
    time_limit: 45
  },
  {
    id: 120,
    topic: "৬. লজিক গেইট",
    question_text: "১২০. ১২০. [এখানে চিত্র ছিল] -চিত্রের আউটপুট হবে- [কু. বো. ২৩, ১৬; অনুরূপ: ঢা. বো. ২৩; দি. বো. ১৫]",
    options: ["$\\mathrm{AB}$", "$\\overline{\\mathrm{A}}\\mathrm{B}$", "$\\mathrm{A}\\overline{\\mathrm{B}}$", "$\\overline{\\mathrm{AB}}$"],
    correct_answer: "$\\overline{\\mathrm{AB}}$",
    explanation: "চিত্র হতে, $\\mathrm{X = AND(NOT(A), B) = AND(\\bar{A}, B) = \\bar{A}B}$",
    time_limit: 30
  },
  {
    id: 121,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১২১. ১২১. উদ্দীপকের আউটপুট $\\mathrm{F}$ এর মান সরলীকৃত মান কোনটি? [চ. বো. ১৬; অনুরূপ: ঢা. বো. ২৩; য. বো. ১৬]",
    options: ["$\\mathrm{A+B+C}$", "$\\overline{\\mathrm{A}} + \\overline{\\mathrm{B}} + \\overline{\\mathrm{C}}$", "$\\mathrm{ABC}$", "$\\overline{\\mathrm{A+B+C}}$"],
    correct_answer: "$\\mathrm{ABC}$",
    explanation: "$\\mathrm{F = \\overline{A} + \\overline{B} + \\overline{C} = \\overline{A.B.C} = ABC}$\n$\\mathrm{F}$ এর সরলীকৃত মান $\\mathrm{F = ABC}$",
    time_limit: 45
  },
  {
    id: 122,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১২২. ১২২. উদ্দীপকে [এখানে চিত্র ছিল] এর স্থলে [এখানে চিত্র ছিল] বসালে $\\mathrm{F}$ এর সরলীকৃত মান নিচের কোন গেইটকে সমর্থন করে? [চ. বো. ১৬]",
    options: ["$\\mathrm{OR}$", "$\\mathrm{AND}$", "$\\mathrm{NOT}$", "$\\mathrm{NOR}$"],
    correct_answer: "$\\mathrm{OR}$",
    explanation: "",
    time_limit: 30
  },
  {
    id: 123,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১২৩. ১২৩. $\\mathrm{F}$-এর সরলীকৃত মান কোনটি? [য. বো. ২৫; অনুরূপ: মা. বো. ১৬]",
    options: ["$\\mathrm{X+Y}$", "$\\mathrm{XY}$", "$\\overline{\\mathrm{X}} + \\overline{\\mathrm{Y}}$", "$\\mathrm{X.Y}$"],
    correct_answer: "$\\mathrm{XY}$",
    explanation: "$\\mathrm{F = \\overline{\\overline{X}+\\overline{Y}} = \\overline{\\overline{X}}.\\overline{\\overline{Y}} = XY}$",
    time_limit: 30
  },
  {
    id: 124,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১২৪. F = XY এর সরলীকৃত মানকে প্রতিস্থাপন করা যাবে- [দি. বো. ২৫]\ni. NAND Gate দিয়ে\nii. NOR Gate দিয়ে\niii. AND Gate দিয়ে\nনিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct_answer: "i, ii ও iii",
    explanation: "যে কোনো লজিক সমীকরণ NAND, NOR এবং মৌলিক গেট দিয়ে বাস্তবায়ন করা যায়।",
    time_limit: 30
  },
  {
    id: 125,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১২৫. ১২৫. এখানে, $\\mathrm{P = ?}$ [দি. বো. ২৫; অনুরূপ: দি. বো. ২৫; ঢা. বো. ২৪, ২৩, ১৯; য. বো. ২৩; চ. বো. ২৩; সু. বো. ১৬]",
    options: ["$\\mathrm{ABC}$", "$\\mathrm{A+B+C}$", "$\\overline{\\mathrm{A}}\\overline{\\mathrm{B}}\\overline{\\mathrm{C}}$", "$\\overline{\\mathrm{A+B+C}}$"],
    correct_answer: "$\\mathrm{ABC}$",
    explanation: "$= \\overline{(\\overline{\\mathrm{A}}.\\overline{B}) + (\\mathrm{A+C})}$\n$= \\overline{\\overline{\\mathrm{A}}.\\overline{\\mathrm{B}}} . \\overline{\\mathrm{A+C}}$\n$= \\mathrm{A}.\\mathrm{B} . \\overline{\\mathrm{A}}\\overline{\\mathrm{C}}$\n$= \\mathrm{A}.\\mathrm{B}.\\mathrm{C}$",
    time_limit: 45
  },
  {
    id: 126,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১২৬. P = ABC হলে P=1 হবে, যখন- [সি. বো. ২৫; অনুরূপ: দি. বো. ২৭; ঢা. বো. ২৪, ২৩, ১৯; য. বো. ২৩]",
    options: ["A=0, B=1, C=0", "A=1, B=0, C=1", "A=1, B=1, C=1", "A=0, B=1, C=0"],
    correct_answer: "A=0, B=1, C=0",
    explanation: "বুলিয়ান গুণের ক্ষেত্রে সব ইনপুট 1 হলে গুণফল 1 হয়।",
    time_limit: 30
  },
  {
    id: 127,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১২৭. ১২৭. উদ্দীপকের $\\mathrm{Y}$ এর সমীকরণ কোনটি? [ঢা. বো. ২৫]",
    options: ["$\\overline{\\mathrm{A}}\\overline{B} + \\mathrm{AB}$", "$\\overline{\\mathrm{A}}\\mathrm{B} + \\mathrm{A}\\overline{\\mathrm{B}}$", "$\\mathrm{A.B}$", "$\\mathrm{A+B}$"],
    correct_answer: "$\\overline{\\mathrm{A}}\\mathrm{B} + \\mathrm{A}\\overline{\\mathrm{B}}$",
    explanation: "",
    time_limit: 30
  },
  {
    id: 128,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১২৮. ১২৮. উদ্দীপকে $\\mathrm{Y}$ এর মান 0, যখন- [ঢা. বো. ২৫; অনুরূপ: ব. বো. ২৩]\ni. $\\mathrm{A=1, B=0}$\nii. $\\mathrm{A=0, B=1}$\niii. $\\mathrm{A=1, B=1}$\nনিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct_answer: "i ও ii",
    explanation: "[এখানে চিত্র ছিল]\n$\\mathrm{XOR}$ গেইটে যখন উভয় ইনপুট ভিন্ন হয় তখন আউটপুট 1 হয়। যখন উভয় ইনপুট একই হয় তখন আউটপুট শূন্য হয়।",
    time_limit: 30
  },
  {
    id: 129,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১২৯. ১২৯. $\\mathrm{P}$ এর সরলীকরণ মানের সমতুল্য গেইট কোনটি? [ব. বো. ২৪]",
    options: ["$\\mathrm{NAND}$", "$\\mathrm{NOR}$", "$\\mathrm{XOR}$", "$\\mathrm{XNOR}$"],
    correct_answer: "$\\mathrm{XNOR}$",
    explanation: "",
    time_limit: 30
  },
  {
    id: 130,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৩০. ১৩০. উদ্দীপকের $\\mathrm{Y}$ এর মান হতে পারে- [রা. বো. ২৩]\ni. $\\mathrm{P \\oplus Q}$\nii. $\\mathrm{PQ + \\overline{P}\\overline{Q}}$\niii. $\\overline{\\mathrm{P \\oplus Q}}$\nনিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct_answer: "ii ও iii",
    explanation: "$\\mathrm{Y = \\overline{P+Q} + \\overline{P+Q} = (\\overline{P+Q}).(\\overline{P+Q})}$\n$= (\\overline{P}+\\overline{Q}).(P+Q) = \\overline{P}Q + P\\overline{Q} = P\\oplus Q$",
    time_limit: 30
  },
  {
    id: 131,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৩১. বর্তনীর আউটপুট Y = 0 হবে, যখন- [রা. বো. ২৩]",
    options: ["1 ও 2 নং gate এর পরিবর্তে NOR Gate", "3 নং gate এর পরিবর্তে NAND Gate", "4 নং gate এর পরিবর্তে AND Gate", "5 নং gate এর পরিবর্তে NAND Gate ব্যবহার করা হবে"],
    correct_answer: "3 নং gate এর পরিবর্তে NAND Gate",
    explanation: "গেট পরিবর্তনের মাধ্যমে লজিক আউটপুট 0 নির্ধারিত হয়।",
    time_limit: 45
  },
  {
    id: 132,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৩২. ১৩২. $\\mathrm{F}$ এর মান কোনটি? [রা. বো. ২৫]",
    options: ["$\\mathrm{XY}$", "$\\mathrm{X.Y}$", "$\\overline{\\mathrm{X}}\\overline{\\mathrm{Y}}$", "$\\mathrm{X\\overline{Y}}$"],
    correct_answer: "$\\mathrm{XY}$",
    explanation: "$\\mathrm{F = \\overline{\\overline{X}\\overline{Y}+\\overline{X}\\overline{Y}}}$\n$= \\overline{\\overline{X}}.\\overline{\\overline{Y}} + \\overline{\\overline{X}}.\\overline{\\overline{Y}}$\n$= \\overline{\\overline{X}(Y+Y)} + \\overline{X}.\\overline{Y}$\n$= XY$\n$[\\because \\mathrm{A.\\overline{A} = 0}]$",
    time_limit: 45
  },
  {
    id: 133,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৩৩. ১৩৩. চিত্রে '2' নং গেইটের পরিবর্তে কোন গেইট স্থাপন করলে $\\mathrm{F = 0}$ হয়? [রা. বো. ২৫; অনুরূপ: ঢা. বো. ১৬]",
    options: ["$\\mathrm{OR}$", "$\\mathrm{AND}$", "$\\mathrm{NOR}$", "$\\mathrm{NAND}$"],
    correct_answer: "$\\mathrm{AND}$",
    explanation: "[এখানে চিত্র ছিল]\n$\\mathrm{OR}$ গেইট দিলে, $\\mathrm{F = X + \\overline{X+Y}}$\n$\\mathrm{NOR}$ গেইট দিলে, $\\mathrm{F = \\overline{X+X+Y}}$\n$\\mathrm{AND}$ গেইট দিলে, $\\mathrm{F = X.\\overline{X+Y}}$\n$\\mathrm{NAND}$ গেইট দিলে, $\\mathrm{F = \\overline{X.\\overline{X+Y}}}$",
    time_limit: 45
  },
  {
    id: 134,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৩৪. ১৩৪. উদ্দীপকের আউটপুট $\\mathrm{F}$ এর সরলীকৃত মান হবে- [য. বো. ২৩]",
    options: ["$\\mathrm{A+B}$", "$\\overline{\\mathrm{A}}+\\mathrm{B}$", "$\\mathrm{A+\\overline{B}}$", "$\\overline{\\mathrm{A+B}}$"],
    correct_answer: "$\\mathrm{A+B}$",
    explanation: "$\\mathrm{F = \\overline{A\\oplus A} + B = \\overline{A.A+B} + A+B}$\n$= \\overline{A.A}B + A(A+B)$\n$= \\overline{A}.B + A$\n$= (A+\\overline{A})(A+B)$\n$= A+B$",
    time_limit: 45
  },
  {
    id: 135,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৩৫. ১৩৫. $\\mathrm{XOR}$ গেইটের স্থলে কোন গেইট বসালে আউটপুট 1 হবে? [ম. বো. ২৫]",
    options: ["$\\mathrm{AND}$", "$\\mathrm{OR}$", "$\\mathrm{NAND}$", "$\\mathrm{NOR}$"],
    correct_answer: "$\\mathrm{NAND}$",
    explanation: "[এখানে চিত্র ছিল]",
    time_limit: 30
  },
  {
    id: 136,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৩৬. ১৩৬. উদ্দীপকের $\\mathrm{F}$ এর সরলীকৃত মান হচ্ছে- [ব. বো. ২৪]",
    options: ["$\\mathrm{AB}$", "$\\overline{\\mathrm{A}}\\mathrm{B}$", "$\\mathrm{A}\\overline{B}$", "$\\overline{\\mathrm{AB}}$"],
    correct_answer: "$\\overline{\\mathrm{AB}}$",
    explanation: "$\\mathrm{F = \\overline{\\overline{A}\\overline{B} + \\overline{AB}}}$\n$= \\overline{\\overline{A}\\overline{B}}.\\overline{\\overline{AB}}$\n$= \\overline{\\overline{A}}.\\overline{B} + \\mathrm{A}(\\overline{A}+\\overline{B})$\n$= 0 + A\\overline{A} + A\\overline{B} \\ [\\because \\mathrm{A.\\overline{A}=0}]$\n$= A\\overline{B}$",
    time_limit: 45
  },
  {
    id: 137,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৩৭. 'F' এর মান '0' পেতে হলে 'P' এর স্থলে কোন গেইট হবে? [ব. বো. ২৪]",
    options: ["AND", "OR", "NAND", "NOR"],
    correct_answer: "NOR",
    explanation: "NOR গেইট বসালে কমপ্লিমেন্ট আউটপুট 0 নিশ্চিত হয়।",
    time_limit: 30
  },
  {
    id: 138,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৩৮. ১৩৮. উদ্দীপকে \"Y\" এর সরলীকৃত মান কোনটি? [য. বো. ২৫]",
    options: ["$\\mathrm{A\\oplus B}$", "$\\mathrm{A\\odot B}$", "$\\mathrm{A+B}$", "$\\mathrm{AB}$"],
    correct_answer: "$\\mathrm{A\\oplus B}$",
    explanation: "$\\mathrm{Y = \\overline{A+B} + AB = \\overline{A}\\overline{B} + AB = A\\odot B}$",
    time_limit: 45
  },
  {
    id: 139,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৩৯. 'Y' এর মান '1' পেতে K এর স্থলে কোন গেইট হবে? [য. বো. ২৫]",
    options: ["NOR", "NAND", "X-OR", "X-NOR"],
    correct_answer: "X-NOR",
    explanation: "K এর স্থলে NAND বা X-NOR সংযুক্ত করলে আউটপুট 1 পাওয়া যায়।",
    time_limit: 30
  },
  {
    id: 140,
    topic: "৬. লজিক গেইট",
    question_text: "১৪০. ১৪০.\n[এখানে চিত্র ছিল]\nএর মান নিচের কোনটি? [রা. বো. ১৮; কু. বো. ১৯]",
    options: ["$\\overline{\\mathrm{A}}\\mathrm{B} + \\mathrm{A}\\overline{\\mathrm{B}}$", "$\\mathrm{A\\odot B}$", "$\\mathrm{A\\oplus B}$", "$\\overline{\\mathrm{A}}\\overline{\\mathrm{B}} + \\overline{\\mathrm{AB}}$"],
    correct_answer: "$\\overline{\\mathrm{A}}\\mathrm{B} + \\mathrm{A}\\overline{\\mathrm{B}}$",
    explanation: "$\\overline{\\mathrm{A}}\\mathrm{B} + \\mathrm{A}\\overline{B} = \\mathrm{A\\oplus B}$ [$\\mathrm{XOR}$ গেইটকে মোট ৫টি মৌলিক গেইট দ্বারা বাস্তবায়ন সম্ভব]",
    time_limit: 30
  },
  {
    id: 141,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৪১. ১৪১. উদ্দীপক বর্তনীর আউটপুটের সরলীকরণ মান কোন গেইটের সাথে সাদৃশ্যপূর্ণ? [য. বো. ১৯]",
    options: ["$\\mathrm{NAND}$", "$\\mathrm{NOR}$", "$\\mathrm{XOR}$", "$\\mathrm{XNOR}$"],
    correct_answer: "$\\mathrm{XOR}$",
    explanation: "$\\mathrm{F = \\overline{A+\\overline{B}} + \\overline{A+B}}$\n$= \\overline{A+\\overline{B.A+B}}$\n$= (\\overline{A}+\\overline{B})(A+B)$\n$= \\overline{A}A + \\overline{A}B + A\\overline{B}$\n$= 0 + \\overline{A}B + A\\overline{B} + 0 = \\overline{A}B + A\\overline{B} = A\\oplus B$\nযা $\\mathrm{XOR}$ গেইটের সাথে সাদৃশ্যপূর্ণ।",
    time_limit: 45
  },
  {
    id: 142,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৪২. ১৪২. $\\mathrm{X}$ এর মান $1$ হবে যখন- [কু. বো. ১৯]\ni. $\\mathrm{P=1, Q=1, R=0}$\nii. $\\mathrm{P=0, Q=1, R=1}$\niii. $\\mathrm{P=1, Q=1, R=1}$\nনিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct_answer: "i ও iii",
    explanation: "",
    time_limit: 45
  },
  {
    id: 143,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৪৩. ৩ ইনপুট বিজোড় 1 সম্বলিত ট্রুথ টেবিলের সমীকরণ কোনটি? [অনুরূপ: চ. বো. ২৪]",
    options: ["PQ̄R + PQ̄R + PQ̄R", "PQ̄R + P̄QR + PQ̄R + PQR", "P ⊕ Q ⊕ R", "P ⊙ Q ⊙ R"],
    correct_answer: "P ⊕ Q ⊕ R",
    explanation: "৩ ইনপুট XOR গেইটের সমীকরণ P ⊕ Q ⊕ R।",
    time_limit: 30
  },
  {
    id: 144,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৪৪. ১৪৪. সত্যক সারণিটি কোন গেইটকে নির্দেশ করে? [সি. বো. ২৩]",
    options: ["$\\mathrm{OR}$", "$\\mathrm{NOR}$", "$\\mathrm{X-OR}$", "$\\mathrm{X-NOR}$"],
    correct_answer: "$\\mathrm{X-OR}$",
    explanation: "",
    time_limit: 30
  },
  {
    id: 145,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৪৫. XNOR সত্যক সারণি থেকে প্রাপ্ত সমীকরণ হল- [সি. বো. ২৫]\ni. X = AB̄ + ĀB\nii. X = AB + Ā.B̄\niii. X = (AB)\u0305 + (AB)\u0305\nনিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct_answer: "ii ও iii",
    explanation: "XNOR এর সঠিক সমীকরণ X = AB + ĀB̄।",
    time_limit: 30
  },
  {
    id: 146,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৪৬. ১৪৬. উদ্দীপকের F এর সমতুল্য লজিক গেইট কোনটি? [রা. বো. ১৯]",
    options: ["$\\mathrm{OR}$", "$\\mathrm{XOR}$", "$\\mathrm{NAND}$", "$\\mathrm{XNOR}$"],
    correct_answer: "$\\mathrm{XNOR}$",
    explanation: "$\\mathrm{F = \\overline{A}\\overline{B} + AB = A\\odot B}$ যা $\\mathrm{XNOR}$ এর সমতুল্য লজিক গেইট।",
    time_limit: 30
  },
  {
    id: 147,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৪৭. XOR লজিক গেইট ব্যবহৃত হতে পারে- [রা. বো. ১৯]\ni. দুটি বিটের অবস্থা তুলনা করার জন্য\nii. হাফ অ্যাডার তৈরির ক্ষেত্রে\niii. কাউন্টার তৈরির ক্ষেত্রে\nনিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct_answer: "i ও ii",
    explanation: "XOR গেইট দুটি বিটের সমতা তুলনা (Comparator) এবং হাফ অ্যাডারের Sum তৈরিতে ব্যবহৃত হয়।",
    time_limit: 30
  },
  {
    id: 148,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৪৮. ১৪৮. A, B, C এর মান কোনটি? [ঢা. বো. ২৫]",
    options: ["$1, 1, 0$", "$0, 0, 1$", "$0, 1, 0$", "$1, 0, 1$"],
    correct_answer: "$0, 0, 1$",
    explanation: "",
    time_limit: 30
  },
  {
    id: 149,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৪৯. সার্বজনীনভাবে লজিক সার্কিট বাস্তবায়নের জন্য গেট হলো- [চ. বো. ২৫]\ni. NOR\nii. NAND\niii. AND\nনিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct_answer: "i ও ii",
    explanation: "NOR এবং NAND সার্বজনীন গেট হওয়ায় এদের মাধ্যমে যে কোনো সার্কিট তৈরি করা সম্ভব।",
    time_limit: 30
  },
  {
    id: 150,
    topic: "৬. লজিক গেইট",
    question_text: "১৫০. ১৫০.\n[এখানে চিত্র ছিল]\nচিত্রের লজিক সার্কিটটির আউটপুট $\\mathrm{X}$ এর মান হবে- [বি. বো. ১৭; অনুরূপ: চ. বো. ১৯]",
    options: ["$\\mathrm{A\\oplus B}$", "$\\mathrm{A\\odot B}$", "$\\overline{\\mathrm{A\\oplus B}}$", "$\\mathrm{A\\overline{\\oplus B}}$"],
    correct_answer: "$\\mathrm{A\\oplus B}$",
    explanation: "",
    time_limit: 30
  },
  {
    id: 151,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৫১. ১৫১. উদ্দীপকের লজিক সার্কিটের আউটপুট সমীকরণ কোন গেইটের সমতুল্য? [য. বো. ২৩]",
    options: ["$\\mathrm{NAND}$", "$\\mathrm{NOR}$", "$\\mathrm{X-OR}$", "$\\mathrm{X-NOR}$"],
    correct_answer: "$\\mathrm{X-OR}$",
    explanation: "$\\mathrm{X = \\overline{A}\\overline{B} . \\overline{AB} = \\overline{AB} + \\overline{AB} = A\\overline{B} + \\overline{A}B = A\\oplus B}$",
    time_limit: 45
  },
  {
    id: 152,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৫২. সার্কিটের ইনপুট A, B ও C হলে কখন X = 1 হবে? [য. বো. ২৩]",
    options: ["A=0, B=0, C=0", "A=0, B=0, C=1", "A=0, B=1, C=0", "A=1, B=0, C=0"],
    correct_answer: "A=0, B=0, C=0",
    explanation: "A=0, B=0, C=0 ইনপুটে সার্কিটের সক্রিয় আউটপুট 1 উৎপন্ন হয়।",
    time_limit: 30
  },
  {
    id: 153,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৫৩. ১৫৩. $\\mathrm{F}$ এর সরলীকৃত মান কোনটি? [দি. বো. ২৩]",
    options: ["$\\mathrm{P\\oplus Q}$", "$\\mathrm{P\\overline{\\oplus}Q}$", "$\\mathrm{P+Q}$", "$\\overline{P} + \\overline{Q}$"],
    correct_answer: "$\\mathrm{P\\oplus Q}$",
    explanation: "$\\mathrm{P\\overline{(P+Q)}(\\overline{P+Q})}$\n$= P\\overline{Q+P+Q}$\n$= PQ+PQ$\n$= P\\oplus Q$",
    time_limit: 45
  },
  {
    id: 154,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৫৪. ১৫৪. $\\mathrm{F}$ এর সরলীকৃত মানকে মোট কয়টি মৌলিক গেট দ্বারা বাস্তবায়ন সম্ভব? [দি. বো. ২৩]",
    options: ["$2$", "$3$", "$4$", "$5$"],
    correct_answer: "$3$",
    explanation: "$\\mathrm{F = P\\oplus Q = \\overline{P}Q + P\\overline{Q}}$\n[এখানে চিত্র ছিল]\nসুতরাং ৫টি গেটের প্রয়োজন।",
    time_limit: 30
  },
  {
    id: 155,
    topic: "৬. লজিক গেইট",
    question_text: "১৫৫. ১৫৫. $\\mathrm{Y = \\overline{A}.B+C}$ বুলিয়ান সমীকরণ বাস্তবায়ণ করতে মোট কয়টি মৌলিক গেইট প্রয়োজন?",
    options: ["$2$", "$3$", "$4$", "$5$"],
    correct_answer: "$3$",
    explanation: "$\\mathrm{Y = \\overline{A}B+C}$\n[এখানে চিত্র ছিল]\nঅর্থাৎ $\\mathrm{Y = \\overline{A}B+C}$ বুলিয়ান সমীকরণ বাস্তবায়ন করতে 3টি মৌলিক গেইট প্রয়োজন।",
    time_limit: 30
  },
  {
    id: 156,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৫৬. ১৫৬. $\\mathrm{Y}$ এর সরলীকৃত মান হলো- [কু. বো. ২৪]",
    options: ["$\\mathrm{A}$", "$\\overline{\\mathrm{A}}$", "$\\mathrm{B}$", "$\\overline{\\mathrm{B}}$"],
    correct_answer: "$\\overline{\\mathrm{A}}$",
    explanation: "$\\mathrm{Y = (\\overline{A+B}) . (\\overline{A}+\\overline{B})}$\n$= \\overline{A}\\overline{A} + \\overline{A}\\overline{B} + \\overline{A}B + \\overline{B}\\overline{B}$\n$= \\overline{A}(1+B) + \\overline{A}B$\n$= \\overline{A} + \\overline{A}B \\ [\\because x+1=x+1=1]$\n$= \\overline{A}(1+B) = \\overline{A}$",
    time_limit: 45
  },
  {
    id: 157,
    topic: "৬. লজিক গেইট",
    stimulus: "[এখানে চিত্র ছিল]",
    question_text: "১৫৭. বর্তনীতে অ্যান্ড গেইটের পরিবর্তে অর গেইট বসালে Y এর মান কত হবে? [কু. বো. ২৪]",
    options: ["A", "B", "0", "1"],
    correct_answer: "1",
    explanation: "Y = (A+B)\u0305 + (Ā + B̄) = ĀB̄ + Ā + B̄ = (Ā + ĀB̄) + B̄ = Ā + B̄ + ... = 1।",
    time_limit: 45
  }
];
