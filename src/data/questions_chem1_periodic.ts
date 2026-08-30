import { Question } from '../types';

// Varsity Module 3 -> রসায়ন ১ম পত্র -> মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন (topic-wise)
export const chem1PeriodicQuestions: Question[] = [
  // --- T-01: পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত ---
  {
    id: 83101,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "১. মেন্ডেলিফ পর্যায় সারণিতে মৌলসমূহকে কয়টি পর্যায়ে সজ্জিত করেন? [JU'25-26]",
    options: ["$69$", "$63$", "$12$", "$8$"],
    correct_answer: "$12$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83102,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "২. একটি মৌলের পরমাণুর ইলেকট্রন বিন্যাস $1s^2 2s^2 2p^6 3s^2 3p^2$ দেওয়া আছে। আধুনিক পর্যায় সারণিতে মৌলটির অবস্থান নির্ধারণ কর। [JU'25-26]",
    options: ["পর্যায় $3$, গ্রুপ $14$", "পর্যায় $3$, গ্রুপ $4$", "পর্যায় $4$, গ্রুপ $14$", "পর্যায় $4$, গ্রুপ $4$"],
    correct_answer: "পর্যায় $3$, গ্রুপ $14$",
    explanation: "পর্যায় সংখ্যা = $3$,\nগ্রুপ সংখ্যা = $2 + 2 + 10 = 14$",
    time_limit: 60
  },
  {
    id: 83103,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "৩. আধুনিক পর্যায় সারণিতে কয়টি কলাম রয়েছে? [JU'25-26]",
    options: ["$8$", "$12$", "$9$", "$18$"],
    correct_answer: "$18$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83104,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "৪. $4s^2 3d^7$ ইলেকট্রন বিন্যাসের জন্য নিচের কোনটি ভুল? [CoU'25-26]",
    options: ["অবস্থান্তর মৌল", "যোজনী $2$ বা $3$", "ধাতু", "গ্রুপ $\\mathrm{VIIA}$ এর অন্তর্ভুক্ত"],
    correct_answer: "গ্রুপ $\\mathrm{VIIA}$ এর অন্তর্ভুক্ত",
    explanation: "$4s^2 3d^7$ ইলেকট্রন বিন্যাস বিশিষ্ট মৌলটি হলো $\\mathrm{Co}$। এটি গ্রুপ $\\mathrm{VIII}$ এর অন্তর্ভুক্ত।",
    time_limit: 60
  },
  {
    id: 83105,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "৫. কোনো মৌলের পরমাণুর যোজ্যতাস্তরে $ns^2 np^5$ ইলেকট্রন বিন্যাস থাকলে ঐ মৌলের অবস্থান পর্যায় সারণিতে কোন গ্রুপে হবে? [JU'24-25]",
    options: ["$15$", "$5$", "$17$", "$2$"],
    correct_answer: "$17$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83106,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "৬. $_{39}\\mathrm{Y}$ মৌলটির পর্যায় সারণিতে অবস্থান কোনটি? [JU'23-24]",
    options: ["পর্যায়-$5$, গ্রুপ-$1$", "পর্যায়-$5$, গ্রুপ-$2$", "পর্যায়-$5$, গ্রুপ-$3$", "পর্যায়-$5$, গ্রুপ-$13$"],
    correct_answer: "পর্যায়-$5$, গ্রুপ-$3$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83107,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "৭. পর্যায় সারণির ২য় পর্যায়ে উপস্থিত মৌলগুলোকে বলে- [CU'23-24]",
    options: ["Normal elements", "Noble gases", "Transition elements", "Rare earth elements"],
    correct_answer: "Normal elements",
    explanation: "২য় এবং ৩য় পর্যায়ের মৌলসমূহকে আদর্শ মৌল বলা হয়।",
    time_limit: 60
  },
  {
    id: 83108,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "৮. একটি মৌলের ইলেকট্রন বিন্যাস........ $4s^2 4p^6 4d^{10} 4f^{3} 5s^2 5p^6 6s^2$ হলে পর্যায় সারণীতে তার অবস্থান হবে- [GST'23-24]",
    options: ["৬ষ্ঠ পর্যায়, ২য় গ্রুপ", "৫ম পর্যায়, ৬ষ্ঠ গ্রুপ", "৪র্থ পর্যায়, ৩য় গ্রুপ", "৬ষ্ঠ পর্যায়, ৩য় গ্রুপ"],
    correct_answer: "৬ষ্ঠ পর্যায়, ৩য় গ্রুপ",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83109,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "৯. আধুনিক পর্যায় সারণিতে মৌলসমূহের ভৌত ও রাসায়নিক ধর্ম পর্যায়ক্রমে নিম্নের কোনটির সংখ্যার ভিত্তিতে আবর্তিত হয়? [GST'22-23]",
    options: ["নিউট্রন", "প্রোটন", "প্রোটন ও নিউট্রন", "ইলেকট্রন ও নিউট্রন"],
    correct_answer: "প্রোটন",
    explanation: "আধুনিক পর্যায়সূত্র অনুসারে মৌলসমূহের ভৌত ও রাসায়নিক ধর্ম তাদের পারমাণবিক সংখ্যার ভিত্তিতে পর্যায়ক্রমে আবর্তিত হয়।",
    time_limit: 60
  },
  {
    id: 83110,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "১০. আধুনিক পর্যায় সারণির মূল ভিত্তি কী? [CU'22-23]",
    options: ["পারমাণবিক সংখ্যা", "পারমাণবিক ভর", "আপেক্ষিক ভর", "ইলেকট্রন বিন্যাস"],
    correct_answer: "ইলেকট্রন বিন্যাস",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83111,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "১১. পর্যায় সারণির $\\mathrm{IIB}$-গ্রুপের মৌলগুলো কোনটি? [CU'21-22]",
    options: ["$\\mathrm{Zn, Cd, Hg}$", "$\\mathrm{Ca, Ag, Au}$", "$\\mathrm{Ni, Co, Fe}$", "$\\mathrm{Na, K, Li}$"],
    correct_answer: "$\\mathrm{Zn, Cd, Hg}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83112,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "১২. নিম্নের কোন মৌলটি ভূ-স্তরে সবচেয়ে বেশি বিদ্যমান? [CU'18-19]",
    options: ["অক্সিজেন", "আয়রন", "সিলিকন", "অ্যালুমিনিয়াম"],
    correct_answer: "অক্সিজেন",
    explanation: "$\\mathrm{O(46\\%), Si(27\\%), Al(8\\%), Fe(5\\%)}$।",
    time_limit: 60
  },
  {
    id: 83113,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "১৩. পর্যায় সারণির কোন গ্রুপগুলোতে ধাতু ও অধাতু উভয়ই থাকে? [RU'16-17]",
    options: ["$\\mathrm{IA, IIA, IIIA, IVA}$", "$\\mathrm{IIA, IIIA, IVA, VA}$", "$\\mathrm{IIIA, IVA, VA, VIA}$", "$\\mathrm{IIA, IVA, VA, VIIA}$"],
    correct_answer: "$\\mathrm{IIIA, IVA, VA, VIA}$",
    explanation: "$\\mathrm{IA}$ এবং $\\mathrm{IIA}$ গ্রুপগুলোর সব মৌলই ধাতু।",
    time_limit: 60
  },
  {
    id: 83114,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "১৪. পর্যায় সারণিতে সম্প্রতি সংযুক্ত নতুন মৌলগুলির পারমাণবিক সংখ্যা হলো- [CU'16-17]",
    options: ["$112, 113, 114, 116$", "$112, 114, 115, 117$", "$114, 115, 117, 118$", "$113, 115, 117, 118$"],
    correct_answer: "$113, 115, 117, 118$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83115,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "১৫. সবচেয়ে ভারী কোনটি? [JU'14-15]",
    options: ["Osmium", "Mercury", "Iron", "Nickel"],
    correct_answer: "Osmium",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83116,
    topic: "পর্যায় সারণি ও অবস্থান নির্ণয় সংক্রান্ত",
    topicId: "chem1_per_t01",
    question_text: "১৬. আধুনিক দীর্ঘ পর্যায় সারণিতে যথাক্রমে কতটি পর্যায় ও শ্রেণি আছে? [RU'14-15]",
    options: ["$8$ ও $8$", "$7$ ও $8$", "$7$ ও $16$", "$16$ ও $7$"],
    correct_answer: "$7$ ও $16$",
    explanation: "নোট: বইয়ে \"(সঠিক উত্তর নেই); $7$ টি পর্যায় $18$ টি শ্রেণি\" উল্লেখ আছে; যাচাই প্রয়োজন।",
    time_limit: 60
  },
  // --- T-02: ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত ---
  {
    id: 83217,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "১৭. গ্রাফাইটের ক্ষেত্রে কোন তথ্যটি সত্য নয়? [JU'25-26]",
    options: ["গ্রাফাইটে প্রতিটি কার্বন পরমাণু $sp^2$ সংকরিত", "সঞ্চারণশীল ইলেকট্রন থাকায় গ্রাফাইট তড়িৎ পরিবাহী", "প্রতিটি কার্বন পরমাণু সমযোজী বন্ধন দ্বারা চারটি কার্বন পরমাণুর সাথে যুক্ত", "গ্রাফাইট কার্বনের একটি অ্যালোট্রপ"],
    correct_answer: "প্রতিটি কার্বন পরমাণু সমযোজী বন্ধন দ্বারা চারটি কার্বন পরমাণুর সাথে যুক্ত",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83218,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "১৮. s-ব্লক মৌলসমূহ সাধারণত কী প্রকৃতির হয়? [JU'25-26]",
    options: ["মৃদু বিজারক", "তীব্র বিজারক", "মৃদু জারক", "তীব্র জারক"],
    correct_answer: "তীব্র বিজারক",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83219,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "১৯. p-ব্লক মৌল কতটি? [JU'25-26; HSTU'25-26]",
    options: ["$12$", "$18$", "$36$", "$6$"],
    correct_answer: "$36$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83220,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "২০. কোন যৌগটির অস্তিত্ব নেই? [SUST'25-26]",
    options: ["$\\mathrm{SF_2}$", "$\\mathrm{SF_6}$", "$\\mathrm{OF_2}$", "$\\mathrm{OF_6}$"],
    correct_answer: "$\\mathrm{OF_6}$",
    explanation: "$\\mathrm{O}$ এ d অরবিটাল না থাকায় $\\mathrm{OF_6}$ অসম্ভব।",
    time_limit: 60
  },
  {
    id: 83221,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "২১. কোনটি p-ব্লক মৌল নয়? [HSTU'25-26]",
    options: ["$\\mathrm{Al}$", "$\\mathrm{C}$", "$\\mathrm{N}$", "$\\mathrm{He}$"],
    correct_answer: "$\\mathrm{He}$",
    explanation: "$\\mathrm{He}$ 's' ব্লক মৌল।",
    time_limit: 60
  },
  {
    id: 83222,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "২২. পরমাণু ক্রমাঙ্ক বৃদ্ধির সাথে সাথে মৃৎক্ষার ধাতুর যে ধর্ম বৃদ্ধি পায়- [HSTU'25-26]",
    options: ["সালফেট যৌগলগুলোর দ্রাব্যতা", "তড়িৎ ঋণাত্মকতা", "হাইড্রোক্সাইড যৌগলগুলোর দ্রাব্যতা", "আয়নীকরণ বিভব"],
    correct_answer: "হাইড্রোক্সাইড যৌগলগুলোর দ্রাব্যতা",
    explanation: "হাইড্রোক্সাইড যৌগলগুলোর দ্রাব্যতা বৃদ্ধির ক্রম:\n$\\mathrm{Be(OH)_2} < \\mathrm{Mg(OH)_2} < \\mathrm{Ca(OH)_2} < \\mathrm{Sr(OH)_2} < \\mathrm{Ba(OH)_2}$\nসালফেট যৌগলগুলোর দ্রাব্যতার ক্রম:\n$\\mathrm{BeSO_4} > \\mathrm{MgSO_4} > \\mathrm{CaSO_4} > \\mathrm{SrSO_4} > \\mathrm{BaSO_4}$",
    time_limit: 60
  },
  {
    id: 83223,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "২৩. কোন দুটি মৌলের মধ্যে কর্ণ সম্পর্ক (Diagonal relationship) বিদ্যমান? [HSTU'25-26]",
    options: ["$\\mathrm{B, Na}$", "$\\mathrm{O, Cl}$", "$\\mathrm{Mg, Al}$", "$\\mathrm{Li, Mg}$"],
    correct_answer: "$\\mathrm{Li, Mg}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83224,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "২৪. প্রকৃতিতে খনিজরূপে প্রাপ্ত স্থায়ী বিরল মৃত্তিকা মৌল কয়টি? [Agri.'25-26]",
    options: ["$17$", "$16$", "$15$", "$18$"],
    correct_answer: "$16$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83225,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "২৫. কোন নিষ্ক্রিয় গ্যাসটি p ব্লকের মৌল নয়? [JU'24-25, 20-21]",
    options: ["$\\mathrm{He}$", "$\\mathrm{Ne}$", "$\\mathrm{Ar}$", "$\\mathrm{Kr}$"],
    correct_answer: "$\\mathrm{He}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83226,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "২৬. f-ব্লক মৌলের সংখ্যা কতটি? [JU'24-25, 15-16]",
    options: ["$14$", "$36$", "$41$", "$27$"],
    correct_answer: "$27$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83227,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "২৭. ফটোগ্র্যাফিক ফ্লাশ বাল্ব তৈরিতে কোন মিশ্রণটি ব্যবহৃত হয়? [JU'24-25]",
    options: ["$\\mathrm{Kr-Xe}$", "$\\mathrm{Kr-Rn}$", "$\\mathrm{Xe-Rn}$", "$\\mathrm{Ar-Xe}$"],
    correct_answer: "$\\mathrm{Kr-Xe}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83228,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "২৮. $\\mathrm{(SiO_2)_n}$ এর স্ফুটনাঙ্ক কত? [JU'24-25]",
    options: ["$2230^{\\circ}\\mathrm{C}$", "$2130^{\\circ}\\mathrm{C}$", "$2330^{\\circ}\\mathrm{C}$", "$2320^{\\circ}\\mathrm{C}$"],
    correct_answer: "$2230^{\\circ}\\mathrm{C}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83229,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "২৯. Representative elements বলা হয় কোনটিকে? [JU'14-15]",
    options: ["p-ব্লক", "d-ব্লক", "f-ব্লক", "কোনোটিই নয়"],
    correct_answer: "p-ব্লক",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83230,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৩০. অ্যাকটিনাইডস এর সংখ্যা কতটি? [JU'24-25]",
    options: ["$14$", "$15$", "$16$", "$17$"],
    correct_answer: "$15$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83231,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৩১. কোনটি সবচেয়ে শক্তিশালী ক্ষার? [KU'24-25]",
    options: ["$\\mathrm{NaOH}$", "$\\mathrm{KOH}$", "$\\mathrm{LiOH}$", "$\\mathrm{RbOH}$"],
    correct_answer: "$\\mathrm{RbOH}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83232,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৩২. কোন যৌগটি জলীয় দ্রবণে সবচেয়ে সহজে দ্রবীভূত হয়? [HSTU'24-25]",
    options: ["$\\mathrm{CCl_4}$", "$\\mathrm{CaCl_2}$", "$\\mathrm{SiCl_4}$", "$\\mathrm{NH_4Cl}$"],
    correct_answer: "$\\mathrm{CaCl_2}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83233,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৩৩. নিচের কোন নিষ্ক্রিয় গ্যাসের ইলেকট্রন বিন্যাস এরূপ- $1s^2 2s^2 2p^6 3s^2 3p^6$ [Agri'24-25]",
    options: ["$\\mathrm{Ne}$", "$\\mathrm{Ar}$", "$\\mathrm{Kr}$", "$\\mathrm{Xe}$"],
    correct_answer: "$\\mathrm{Ar}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83234,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৩৪. নিচের কোন যৌগটি সম্ভব নয়? [RU'23-24]",
    options: ["$\\mathrm{Cl_2O}$", "$\\mathrm{OF_2}$", "$\\mathrm{NCl_5}$", "$\\mathrm{SO_2}$"],
    correct_answer: "$\\mathrm{NCl_5}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83235,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৩৫. ক্ষার ধাতুসমূহের মধ্যে সবচেয়ে কম তড়িৎ ধনাত্মক ও কম সক্রিয় ধাতু নিচের কোনটি? [RU'23-24]",
    options: ["$\\mathrm{Li}$", "$\\mathrm{Na}$", "$\\mathrm{K}$", "$\\mathrm{Cs}$"],
    correct_answer: "$\\mathrm{Li}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83236,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৩৬. '$\\mathrm{O}$' কোন গ্রুপের মৌল? [JU'23-24]",
    options: ["s-ব্লক", "p-ব্লক", "d-ব্লক", "f-ব্লক"],
    correct_answer: "p-ব্লক",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83237,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৩৭. '$\\mathrm{S}$' কোন গ্রুপের অন্তর্ভুক্ত মৌল? [JU'23-24]",
    options: ["s-ব্লক", "p-ব্লক", "d-ব্লক", "f-ব্লক"],
    correct_answer: "p-ব্লক",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83238,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৩৮. কোনটি নিষ্ক্রিয় গ্যাস? [CU'22-23]",
    options: ["$\\mathrm{N_2}$", "$\\mathrm{Ar}$", "$\\mathrm{I_2}$", "$\\mathrm{O_2}$"],
    correct_answer: "$\\mathrm{Ar}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83239,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৩৯. কোনগুলো অপধাতু? [GST'21-22]",
    options: ["$\\mathrm{Si, Ge, As}$", "$\\mathrm{Na, K, Rb}$", "$\\mathrm{Mg, Al, Sb}$", "$\\mathrm{B, Fe, Ni}$"],
    correct_answer: "$\\mathrm{Si, Ge, As}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83240,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৪০. সবচেয়ে হালকা ধাতু কোনটি? [JU'20-21]",
    options: ["লিথিয়াম", "পটাশিয়াম", "পারদ", "প্লাটিনাম"],
    correct_answer: "লিথিয়াম",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83241,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৪১. কোন যৌগটি আর্দ্রবিশ্লেষিত হয় না? [RU'20-21]",
    options: ["$\\mathrm{CCl_4}$", "$\\mathrm{PCl_3}$", "$\\mathrm{PCl_5}$", "$\\mathrm{SiCl_4}$"],
    correct_answer: "$\\mathrm{CCl_4}$",
    explanation: "$\\mathrm{CCl_4}$ এর কেন্দ্রীয় পরমাণু $\\mathrm{C}$ এর ইলেকট্রন বিন্যাসে কোনো ফাঁকা d-অরবিটাল নেই। তাই $\\mathrm{CCl_4}$ আর্দ্রবিশ্লেষিত হতে পারে না।",
    time_limit: 60
  },
  {
    id: 83242,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৪২. নিচের কোন গ্যাসটি অপেক্ষাকৃত নিষ্ক্রিয়? [RU'20-21]",
    options: ["$\\mathrm{O_2}$", "$\\mathrm{N_2}$", "$\\mathrm{Cl_2}$", "$\\mathrm{F_2}$"],
    correct_answer: "$\\mathrm{N_2}$",
    explanation: "$\\mathrm{N_2}$ এর $\\mathrm{N \\equiv N}$ বন্ধন শক্তির মান বেশি হওয়ায় $\\mathrm{N_2}$ সহজে বিক্রিয়া করে না।",
    time_limit: 60
  },
  {
    id: 83243,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৪৩. কোন যৌগটি জলীয় দ্রবণে সবচেয়ে সহজে আর্দ্রবিশ্লেষিত হয়? [Agri.'20-21]",
    options: ["$\\mathrm{CCl_4}$", "$\\mathrm{SnCl_2}$", "$\\mathrm{SiCl_4}$", "$\\mathrm{PbCl_4}$"],
    correct_answer: "$\\mathrm{SiCl_4}$",
    explanation: "$\\mathrm{Si \\rightarrow 1s^2 2s^2 2p^6 3s^2 3p_x^1 3p_y^1 3p_z^0 3d^0}$\n$\\mathrm{Si}$ এর ফাঁকা d-অরবিটাল $\\mathrm{H_2O}$ এর সাথে বন্ধন গঠন করতে পারে। তাই $\\mathrm{SiCl_4}$ সহজে আর্দ্রবিশ্লেষিত হয়।",
    time_limit: 60
  },
  {
    id: 83244,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৪৪. হীরক ও গ্রাফাইট হলো কার্বন মৌলের ভিন্নরূপ। এদের ক্ষেত্রে কোন উক্তিটি সত্য নয়? [DU'19-20]",
    options: ["উভয়েই কার্বন মৌল দ্বারা গঠিত", "হীরক ও গ্রাফাইটে কার্বন পরমাণুর সংকরায়ন হলো যথাক্রমে $sp^3$ ও $sp^2$", "উভয়ের বিদ্যুৎ পরিবাহিতা ভিন্ন", "উভয়ের দহন তাপ একই"],
    correct_answer: "উভয়ের দহন তাপ একই",
    explanation: "হীরক ও গ্রাফাইট কার্বন মৌলের রূপ ভিন্ন। হীরকে $sp^3$ এবং গ্রাফাইটে $sp^2$ সংকরন বিদ্যমান। তাই গ্রাফাইট বিদ্যুৎ পরিবাহিত হলেও হীরকে বিদ্যুৎ প্রবাহিত হতে পারে না। তাই উভয়ের দহন তাপ ভিন্ন।",
    time_limit: 60
  },
  {
    id: 83245,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৪৫. s-ব্লকের মৌল সংখ্যা কয়টি? [JU'19-20]",
    options: ["$14$", "$36$", "$41$", "$27$"],
    correct_answer: "$14$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83246,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৪৬. কোন লবণ গাঢ় সালফিউরিক এসিডের সাথে বিক্রিয়া করে সালফার তৈরি করে? [DU'18-19]",
    options: ["$\\mathrm{NaF}$", "$\\mathrm{NaCl}$", "$\\mathrm{NaBr}$", "$\\mathrm{NaI}$"],
    correct_answer: "$\\mathrm{NaI}$",
    explanation: "গাঢ় $\\mathrm{H_2SO_4}$ হলো শক্তিশালী জারক। তাই গাঢ় $\\mathrm{H_2SO_4}$ থেকে $\\mathrm{S}$ পরিণত করতে শক্তিশালী বিজারক প্রয়োজন। বিজারণ ক্ষমতার ক্রম অনুসারে,\n$\\mathrm{NaI > NaBr > NaCl > NaF}$।",
    time_limit: 60
  },
  {
    id: 83247,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৪৭. নিম্নের কোন মৌলটি সবচেয়ে বেশি সমযোজী বন্ধন সৃষ্টির প্রবণতা দেখায়? [CU'18-19]",
    options: ["$\\mathrm{Si}$", "$\\mathrm{Al}$", "$\\mathrm{Cl}$", "$\\mathrm{N}$"],
    correct_answer: "$\\mathrm{Si}$",
    explanation: "$\\mathrm{Si}$ এর সর্বশেষ কক্ষপথে 4 টি ইলেকট্রন থাকায় সহজে ইলেকট্রন গ্রহণ বা ত্যাগ করে অষ্টক পূর্ণ করতে পারে না। তাই $\\mathrm{Si}$ সমযোজী বন্ধন সৃষ্টির প্রবণতা বেশি দেখায়।",
    time_limit: 60
  },
  {
    id: 83248,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৪৮. কোনটি অ্যাক্টিনাইড সিরিজের মৌল নয়? [JU'14-15]",
    options: ["$\\mathrm{Cf}$", "$\\mathrm{No}$", "$\\mathrm{Lr}$", "$\\mathrm{Er}$"],
    correct_answer: "$\\mathrm{Er}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83249,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৪৯. কোনটি অ্যাক্টিনাইড সিরিজের সদস্য? [JU'14-15; RU'07-08]",
    options: ["$\\mathrm{Zr}$", "$\\mathrm{Tl}$", "$\\mathrm{Nd}$", "$\\mathrm{Lr}$"],
    correct_answer: "$\\mathrm{Lr}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83250,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৫০. কক্ষ তাপমাত্রায় কোনটি তরল অবস্থায় থাকে? [JU'14-15]",
    options: ["$\\mathrm{I_2}$", "$\\mathrm{Hg}$", "$\\mathrm{H_2}$", "$\\mathrm{N_2}$"],
    correct_answer: "$\\mathrm{Hg}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83251,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৫১. মুদ্রা ধাতু বলা হয় কোন গ্রুপের মৌলসমূহকে? [JU'14-15; RU'08-09, 07-08, 06-07]",
    options: ["$\\mathrm{IB}$", "$\\mathrm{IA}$", "$\\mathrm{VIIA}$", "$\\mathrm{IIA}$"],
    correct_answer: "$\\mathrm{IB}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83252,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৫২. কোন হ্যালাইডটি পানিতে আর্দ্র বিশ্লেষিত হয় না? [CU'14-15]",
    options: ["$\\mathrm{NCl_3}$", "$\\mathrm{PCl_3}$", "$\\mathrm{PCl_5}$", "$\\mathrm{NF_3}$"],
    correct_answer: "$\\mathrm{NF_3}$",
    explanation: "$\\mathrm{NF_3}$ ও $\\mathrm{NCl_3}$ তে কেন্দ্রীয় পরমাণু $\\mathrm{N}$ এর ফাঁকা d অরবিটাল না থাকায় এরা আর্দ্রবিশ্লেষিত হয় না। $\\mathrm{NCl_3}$ তে তড়িৎঋণাত্মকতার পার্থক্য ও অন্যান্য কারণে $\\mathrm{H_2O}$ এর সাথে $\\mathrm{H}$ বন্ধন গঠনের মাধ্যমে আর্দ্র বিশ্লেষিত হয় যা $\\mathrm{NF_3}$ দ্বারা হয় না।",
    time_limit: 60
  },
  {
    id: 83253,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৫৩. 'মুদ্রাধাতু' নামে পরিচিত- [KU'14-15]",
    options: ["$\\mathrm{Cu, Ag, Ni}$", "$\\mathrm{Cu, Au, Cr}$", "$\\mathrm{Ag, Cu, Au}$", "$\\mathrm{Au, Al, Ag}$"],
    correct_answer: "$\\mathrm{Ag, Cu, Au}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83254,
    topic: "ব্লক মৌলের সাধারণ ধর্ম ও কর্ণ-সম্পর্ক সংক্রান্ত",
    topicId: "chem1_per_t02",
    question_text: "৫৪. নিচের কোন অধাতুটি (Non-metal) সাধারণ তাপমাত্রায় কঠিন অবস্থায় থাকে? [JnU'13-14]",
    options: ["আয়োডিন", "ক্লোরিন", "ফ্লোরিন", "ব্রোমিন"],
    correct_answer: "আয়োডিন",
    explanation: "",
    time_limit: 60
  },
  // --- T-03: d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত ---
  {
    id: 83355,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৫৫. কোনটি প্যারাম্যাগনেটিক? [JnU'25-26]",
    options: ["$\\mathrm{CH_4}$", "$\\mathrm{CO}$", "$\\mathrm{O_2}$", "$\\mathrm{N_2}$"],
    correct_answer: "$\\mathrm{O_2}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83356,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৫৬. $[\\mathrm{Cu(NH_3)_4}]^{2+}$ এর রং- [JnU'25-26]",
    options: ["সবুজ", "নীল", "গোলাপি", "হলুদ"],
    correct_answer: "নীল",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83357,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৫৭. $[\\mathrm{Fe(CN)_6}]^{4-}$ আয়নে কেন্দ্রীয় পরমাণুর জারণ সংখ্যা ও সন্নিবেশ সংখ্যা হলো- [JnU'25-26]",
    options: ["$+4, 6$", "$+2, -6$", "$+2, 6$", "$-2, -6$"],
    correct_answer: "$+2, 6$",
    explanation: "$x + (-6) = -4; x = +2$\n$\\therefore$ জারণ সংখ্যা $= +2$\n$[\\mathrm{Fe(CN)_6}]^{4-}$ এ $6$টি $(\\mathrm{CN^-})$ লিগ্যান্ড হিসেবে যুক্ত আছে। তাই সন্নিবেশ সংখ্যা $6$।",
    time_limit: 60
  },
  {
    id: 83358,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৫৮. একটি $\\mathrm{Mg^{2+}}$ আয়নের সাথে অষ্টতলকীয় জটিল যৌগ গঠনে কতটি $\\mathrm{EDTA}$ অণু প্রয়োজন? [RU'25-26]",
    options: ["$4$", "$6$", "$2$", "$1$"],
    correct_answer: "$1$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83359,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৫৯. নিম্নের কোনটির জলীয় দ্রবণ রঙিন? [CU'25-26]",
    options: ["$\\mathrm{CuSO_4}$", "$\\mathrm{MgSO_4}$", "$\\mathrm{ZnSO_4}$", "$\\mathrm{Na_2SO_4}$"],
    correct_answer: "$\\mathrm{CuSO_4}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83360,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৬০. কোনটি অবস্থান্তর মৌলের বৈশিষ্ট্য নয়? [CU'25-26; JU'24-25]",
    options: ["রঙিন যৌগ উৎপন্ন করে", "পরিবর্তনশীল যোজ্যতা বিদ্যমান", "d-ব্লক মৌল", "সন্নিবেশ বন্ধন তৈরি করে না"],
    correct_answer: "সন্নিবেশ বন্ধন তৈরি করে না",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83361,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৬১. $[\\mathrm{Fe(CN)_6}]^{4-} \\rightarrow [\\mathrm{Fe(CN)_6}]^{3-} + 1e^-$ বিক্রিয়াটি সংঘটিত হলে, কোন ধর্মটির পরিবর্তন হয়? [SUST'25-26]",
    options: ["$\\mathrm{Fe}$ এর d অরবিটালের সংকরন", "জ্যামিতিক গঠন", "চৌম্বক ধর্ম", "ঘনত্ব"],
    correct_answer: "চৌম্বক ধর্ম",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83362,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৬২. দুইটি মৌলের ইলেকট্রন বিন্যাস যথাক্রমে $\\mathrm{[Ar]}3d^64s^2$ এবং $\\mathrm{[Ar]}3d^14s^2$। উভয় মৌলের ক্যাটায়ন $\\mathrm{KCN}$ এর সাথে বিক্রিয়া করে যথাক্রমে $\\mathrm{P}$ এবং $\\mathrm{Q}$ জটিল যৌগ গঠন করে। এখানে কোন তথ্যটি সঠিক? [SUST'25-26]",
    options: ["$\\mathrm{P}$ এবং $\\mathrm{Q}$ উভয়ই রঙিন", "$\\mathrm{P}$ এবং $\\mathrm{Q}$ উভয়ই বর্ণহীন", "$\\mathrm{P}$ বর্ণহীন কিন্তু $\\mathrm{Q}$ রঙিন", "$\\mathrm{P}$ রঙিন কিন্তু $\\mathrm{Q}$ বর্ণহীন"],
    correct_answer: "$\\mathrm{P}$ রঙিন কিন্তু $\\mathrm{Q}$ বর্ণহীন",
    explanation: "১ম মৌলটি হলো- $\\mathrm{Fe = [Ar]3d^6 4s^2}$\n২য় মৌলটি হলো- $\\mathrm{Sc = [Ar]3d^1 4s^2}$\nআয়রন অবস্থান্তর মৌল হওয়ায় এর দ্বারা গঠিত যৌগ রঙিন হয়। অন্যদিকে $\\mathrm{Sc}$ অবস্থান্তর মৌল না হওয়ায় বর্ণহীন যৌগ গঠন করে। সুতরাং, $\\mathrm{P}$ যৌগ রঙিন এবং $\\mathrm{Q}$ যৌগ বর্ণহীন।",
    time_limit: 60
  },
  {
    id: 83363,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৬৩. কোনটি রঙিন যৌগ? [HSTU'25-26]",
    options: ["$\\mathrm{NiSO_4}$", "$\\mathrm{Al_2(SO_4)_3}$", "$\\mathrm{ZnSO_4}$", "$\\mathrm{Sc_2(SO_4)_3}$"],
    correct_answer: "$\\mathrm{NiSO_4}$",
    explanation: "$\\mathrm{Ni}$ অবস্থান্তর মৌল।",
    time_limit: 60
  },
  {
    id: 83364,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৬৪. $[\\mathrm{Fe(CN)_6}]^{4-}$ আয়নের কেন্দ্রীয় পরমাণুতে কি ধরনের সংকরায়ন ঘটে? [CoU'25-26; JnU'24-25; JU'21-22; RU'16-17]",
    options: ["$d^2sp^3$", "$d^2sp^2$", "$d^3sp^3$", "$sp^3d^2$"],
    correct_answer: "$d^2sp^3$",
    explanation: "$\\mathrm{Fe}(26)$: $1s^2 2s^2 2p^6 3s^2 3p^6 3d^6 4s^2$\n$\\mathrm{Fe^{2+}}$: $1s^2 2s^2 2p^6 3s^2 3p^6 3d^6$\n[এখানে চিত্র ছিল]\n$\\mathrm{CN^-}$ একটি সবল লিগ্যান্ড, তাই $\\mathrm{Fe^{2+}}$ এর বিজোড় ইলেকট্রনগুলো জোড়া তৈরি করবে।\n$[\\mathrm{Fe(CN)_6}]^{4-} \\rightarrow 1s^2 2s^2 2p^6 3s^2 3p^6 3d^6$\n[এখানে চিত্র ছিল]\n$\\therefore [\\mathrm{Fe(CN)_6}]^{4-}$ এ $\\mathrm{Fe}$ এর সংকরন $d^2sp^3$",
    time_limit: 60
  },
  {
    id: 83365,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৬৫. $\\mathrm{Sc}$ অবস্থান্তর মৌল নয়, কারণ এর সুস্থিত আয়নের d অরবিটালগুলো [GST'22-23]",
    options: ["পরিপূর্ণ", "অর্ধ পরিপূর্ণ", "আংশিক পরিপূর্ণ", "খালি"],
    correct_answer: "খালি",
    explanation: "$\\mathrm{Sc}(21) \\rightarrow 1s^2 2s^2 2p^6 3s^2 3p^6 3d^1 4s^2$\n$\\mathrm{Sc^{3+}} \\rightarrow 1s^2 2s^2 2p^6 3s^2 3p^6 3d^0 4s^0$\nতাই সুস্থিত আয়ন $\\mathrm{Sc^{3+}}$ এর 3d অরবিটাল খালি।",
    time_limit: 60
  },
  {
    id: 83366,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৬৬. কোনটি ফেরোম্যাগনেটিক ধাতু? [GST'22-23]",
    options: ["$\\mathrm{Ni}$", "$\\mathrm{Ag}$", "$\\mathrm{Au}$", "$\\mathrm{Cu}$"],
    correct_answer: "$\\mathrm{Ni}$",
    explanation: "ফেরোম্যাগনেটিক মৌল = ($\\mathrm{Fe, Co, Ni}$)।",
    time_limit: 60
  },
  {
    id: 83367,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৬৭. $[\\mathrm{Fe(CN)_6}]^{3-}$ এর ম্যাগনেটিক মোমেন্ট কোনটি? [JU'22-23; SUST'19-20]",
    options: ["$1.732\\mathrm{~B.M.}$", "$2.828\\mathrm{~B.M.}$", "$3.873\\mathrm{~B.M.}$", "$4.700\\mathrm{~B.M.}$"],
    correct_answer: "$1.732\\mathrm{~B.M.}$",
    explanation: "$\\mathrm{Fe^{3+} = [Ar]}$\n[এখানে চিত্র ছিল]\nযেহেতু $\\mathrm{CN^-}$ শক্তিশালী লিগ্যান্ড\n$\\mathrm{Fe^{3+} = [Ar]}$\n[এখানে চিত্র ছিল]\nঅযুগ্ম ইলেকট্রন সংখ্যা $n$ হলে,\nম্যাগনেটিক মোমেন্ট, $\\mu = \\sqrt{n(n+2)}$ [এখানে, $n = 1$]\n$= \\sqrt{1(1+2)} = 1.732\\mathrm{~B.M.}$",
    time_limit: 60
  },
  {
    id: 83368,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৬৮. $\\mathrm{CuSO_4~(s) + 5H_2O \\rightarrow A}$; উৎপন্ন $\\mathrm{A}$ যৌগটি: [JU'22-23]",
    options: ["সাদা ভিট্রিয়ল", "নীল ভিট্রিয়ল", "সবুজ ভিট্রিয়ল", "খাদ্য লবণ"],
    correct_answer: "নীল ভিট্রিয়ল",
    explanation: "$\\mathrm{CuSO_4 \\cdot 5H_2O \\rightarrow}$ নীল ভিট্রিয়ল\n$\\mathrm{ZnSO_4 \\cdot 7H_2O \\rightarrow}$ সাদা ভিট্রিয়ল\n$\\mathrm{FeSO_4 \\cdot 7H_2O \\rightarrow}$ সবুজ ভিট্রিয়ল",
    time_limit: 60
  },
  {
    id: 83369,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৬৯. $(d^1-d^9)$ মৌলসমূহ- [JU'22-23]\n(i) রঙিন যৌগ গঠন করে\n(ii) জটিল যৌগ গঠন করে\n(iii) প্রভাবক রূপে ক্রিয়া করে\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "ii, iii", "i, iii", "i, ii, iii"],
    correct_answer: "i, ii, iii",
    explanation: "স্থিতিশীল আয়নে $d^1-d^9$ ইলেকট্রন বিন্যাস বিশিষ্ট মৌলগুলো অবস্থান্তর মৌল।",
    time_limit: 60
  },
  {
    id: 83370,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৭০. অবস্থান্তর মৌলের বৈশিষ্ট্য হলো: [JU'22-23]\n(i) সরল যৌগ গঠন করে\n(ii) রঙিন যৌগ গঠন করে\n(iii) পরিবর্তনশীল যোজ্যতা থাকে\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "i, iii", "ii, iii", "i, ii, iii"],
    correct_answer: "ii, iii",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83371,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৭১. $(n-1)d^{10}ns^2$ ইলেকট্রন বিন্যাস হলো: [JU'22-23]\n(i) অবস্থান্তর\n(ii) d ব্লক\n(iii) মেইন গ্রুপ মৌলের\nনিচের কোনটি সঠিক?",
    options: ["i", "ii", "ii, iii", "i, ii"],
    correct_answer: "ii",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83372,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৭২. কোনটি প্যারাম্যাগনেটিক নয়? [RU'22-23]",
    options: ["$\\mathrm{As^+}$", "$\\mathrm{Be^-}$", "$\\mathrm{Ne^{2+}}$", "$\\mathrm{Cl^-}$"],
    correct_answer: "$\\mathrm{Cl^-}$",
    explanation: "$\\mathrm{Cl^- \\Rightarrow 1s^2 2s^2 2p^6 3s^2 3p^6}$\n[এখানে চিত্র ছিল]\nঅযুগ্ম ইলেকট্রন নেই তাই $\\mathrm{Cl^-}$ ডায়াম্যাগনেটিক।",
    time_limit: 60
  },
  {
    id: 83373,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৭৩. নিম্নের কোনটি রঙিন যৌগ? [CU'22-23]",
    options: ["$\\mathrm{CuCl_2}$", "$\\mathrm{CoCl_2}$", "$\\mathrm{ScCl_3}$", "$\\mathrm{MgCl_2}$"],
    correct_answer: "$\\mathrm{CuCl_2}$",
    explanation: "$\\mathrm{Sc}$ ও $\\mathrm{Mg}$ অবস্থান্তর মৌল না তাই $\\mathrm{ScCl_3}$ ও $\\mathrm{MgCl_2}$ রঙিন নয়।\nতবে, $\\mathrm{Co}$ এবং $\\mathrm{Cu}$ উভয়েই অবস্থান্তর মৌল হওয়ায় $\\mathrm{CoCl_2}$ এবং $\\mathrm{CuCl_2}$ উভয়েই রঙিন যৌগ। নোট: বইয়ে উত্তর (ক) দেওয়া; (খ)-ও রঙিন, যাচাই প্রয়োজন।",
    time_limit: 60
  },
  {
    id: 83374,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৭৪. নিচের কোন আয়নটি রঙিন যৌগ গঠন করে? [CU'22-23]",
    options: ["$\\mathrm{Sc^{3+}}$", "$\\mathrm{Mg^{2+}}$", "$\\mathrm{Zn^{2+}}$", "$\\mathrm{Ni^{2+}}$"],
    correct_answer: "$\\mathrm{Ni^{2+}}$",
    explanation: "অবস্থান্তর মৌল রঙিন যৌগ গঠন করে, $\\mathrm{Ni^{2+}}$ একটি অবস্থান্তর মৌল।",
    time_limit: 60
  },
  {
    id: 83375,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৭৫. কোনটি প্যারাম্যাগনেটিক মৌল? [CU'22-23]",
    options: ["$\\mathrm{Zn}$", "$\\mathrm{Cu}$", "$\\mathrm{Ca}$", "$\\mathrm{Mg}$"],
    correct_answer: "$\\mathrm{Cu}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83376,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৭৬. কোনটি অবস্থান্তর ধাতু? [CU'22-23]",
    options: ["$\\mathrm{Ba}$", "$\\mathrm{Tl}$", "$\\mathrm{Rn}$", "$\\mathrm{Pb}$"],
    correct_answer: "$\\mathrm{Tl}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83377,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৭৭. নিচের কোনগুলো অবস্থান্তর মৌল নয়? [RU'21-22]",
    options: ["$\\mathrm{Cr, Ni, V}$", "$\\mathrm{Ru, W, Ti, Fe}$", "$\\mathrm{Bi, Cd, Sn, Ga}$", "$\\mathrm{Mn, Mo, Co, Rh}$"],
    correct_answer: "$\\mathrm{Bi, Cd, Sn, Ga}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83378,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৭৮. $\\mathrm{[Ar]}3d^{10}4s^0$ ইলেকট্রন বিন্যাস হলো- [JU'21-22]\n(i) $\\mathrm{Cu^+}$ আয়ন\n(ii) $\\mathrm{Zn^{2+}}$ আয়ন\n(iii) $\\mathrm{Fe^{2+}}$ আয়ন\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "i, iii", "ii, iii", "i, ii, iii"],
    correct_answer: "i, ii",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83379,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৭৯. নিচের কোন আয়ন বর্ণহীন দ্রবণ দেয়? [CU'21-22]",
    options: ["$\\mathrm{Ni^{2+}}$", "$\\mathrm{Fe^{3+}}$", "$\\mathrm{Cu^{2+}}$", "$\\mathrm{Cu^+}$"],
    correct_answer: "$\\mathrm{Cu^+}$",
    explanation: "$\\mathrm{Cu^+} = \\mathrm{[Ar]}3d^{10}$; পূর্ণ d অরবিটাল থাকায় $\\mathrm{Cu^+}$ বর্ণহীন।",
    time_limit: 60
  },
  {
    id: 83380,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৮০. কোন অবস্থান্তর মৌল পরিবর্তনশীল জারণ অবস্থা প্রদর্শন করে না? [RU'20-21]",
    options: ["$\\mathrm{Cu}$", "$\\mathrm{Hg}$", "$\\mathrm{Ni}$", "$\\mathrm{Zn}$"],
    correct_answer: "$\\mathrm{Zn}$",
    explanation: "$\\mathrm{Zn}$ অবস্থান্তর মৌল নয়। কারণ, $\\mathrm{Zn^{2+}}$ এর ইলেকট্রন বিন্যাসে $3d^{10}$ (পূর্ণ) অবস্থায় আছে। তাই তা পরিবর্তনশীল জারণ অবস্থা প্রদর্শন করে না।\n[বি: দ্র: $\\mathrm{Zn}$ অবস্থান্তর মৌল নয়। তাই প্রশ্নে ভাষাগত ত্রুটি রয়েছে।]",
    time_limit: 60
  },
  {
    id: 83381,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৮১. অবস্থান্তর মৌলসমূহ ........ ব্লকের মৌল। [JU'19-20]",
    options: ["s", "p", "d", "f"],
    correct_answer: "d",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83382,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৮২. প্রথম ট্রানজিশন ধাতু সিরিজের একটি ধাতু হতে প্রাপ্ত একটি $\\mathrm{M^{3+}}$ আয়নে পাঁচটি ইলেকট্রন 3d সাবশেলে অবস্থিত। $\\mathrm{M^{3+}}$ আয়নটি কী হতে পারে? [DU'18-19]",
    options: ["$\\mathrm{Cr^{3+}}$", "$\\mathrm{Mn^{3+}}$", "$\\mathrm{Fe^{3+}}$", "$\\mathrm{Sc^{3+}}$"],
    correct_answer: "$\\mathrm{Fe^{3+}}$",
    explanation: "$\\mathrm{Fe^{3+} = [Ar]3d^5 4s^0}$",
    time_limit: 60
  },
  {
    id: 83383,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৮৩. কোনটি অবস্থান্তর মৌল নয়? [JU'18-19]",
    options: ["$\\mathrm{Sb}$", "$\\mathrm{Cr}$", "$\\mathrm{Mn}$", "$\\mathrm{Ni}$"],
    correct_answer: "$\\mathrm{Sb}$",
    explanation: "$\\mathrm{Sb \\rightarrow [Kr] 4d^{10} 5s^2 5p^3}$, এটি p ব্লকের মৌল তাই অবস্থান্তর নয়।",
    time_limit: 60
  },
  {
    id: 83384,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৮৪. $[\\mathrm{Co(NH_3)_4(H_2O)_2}]\\mathrm{Cl_3}$ জটিল যৌগটিতে অবস্থান্তর ধাতুটির সন্নিবেশ সংখ্যাটি কত? [DU'17-18]",
    options: ["$3$", "$4$", "$6$", "$2$"],
    correct_answer: "$6$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83385,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৮৫. নিচের কোন আয়নটি রঙিন যৌগ গঠন করে? [JU'17-18]",
    options: ["$\\mathrm{Sc^{3+}}$", "$\\mathrm{Hg^{2+}}$", "$\\mathrm{Zn^{2+}}$", "$\\mathrm{Ni^{2+}}$"],
    correct_answer: "$\\mathrm{Ni^{2+}}$",
    explanation: "$\\mathrm{Sc^{3+} (3d^0)}$, $\\mathrm{Hg^{2+} (5d^{10})}$ এবং $\\mathrm{Zn^{2+} (3d^{10})}$ বিশিষ্ট হওয়ায় এরা অবস্থান্তর নয়। কিন্তু $\\mathrm{Ni^{2+}}$ এ শেষে $3d^8$ থাকে তাই এটি অবস্থান্তর।",
    time_limit: 60
  },
  {
    id: 83386,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৮৬. $\\mathrm{Cr}$ পরমাণুতে কয়টি অযুগ্ম ইলেকট্রন থাকে? [JU'17-18; RU'09-10]",
    options: ["$5$", "$4$", "$6$", "$3$"],
    correct_answer: "$6$",
    explanation: "$\\mathrm{Cr(24) \\rightarrow [Ar]3d^5 4s^1}$\n[এখানে চিত্র ছিল]\nঅযুগ্ম ইলেকট্রন $\\rightarrow 6$ টি",
    time_limit: 60
  },
  {
    id: 83387,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৮৭. 4 সন্নিবেশ সংখ্যাবিশিষ্ট জটিল যৌগটি হলো- [DU'16-17]",
    options: ["$\\mathrm{K_4[Fe(CN)_6]}$", "$[\\mathrm{Co(NH_3)_6}]\\mathrm{Cl_3}$", "$[\\mathrm{Fe(H_2O)_6}]\\mathrm{Cl_3}$", "$[\\mathrm{Cu(NH_3)_4}]\\mathrm{Cl_2}$"],
    correct_answer: "$[\\mathrm{Cu(NH_3)_4}]\\mathrm{Cl_2}$",
    explanation: "অন্যগুলোর সন্নিবেশ সংখ্যা 6।",
    time_limit: 60
  },
  {
    id: 83388,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৮৮. $_{79}\\mathrm{Au}$ একটি- [CU'15-16]",
    options: ["s-block মৌল", "p-block মৌল", "f-block মৌল", "d-block মৌল"],
    correct_answer: "d-block মৌল",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83389,
    topic: "d-ব্লক মৌল, অবস্থান্তর মৌল, জটিল যৌগের সংকরায়ন ও নামকরণ সংক্রান্ত",
    topicId: "chem1_per_t03",
    question_text: "৮৯. নিচের কোনটি ডায়াম্যাগনেটিক? [KU'14-15]",
    options: ["$\\mathrm{Ti(-3d^2)}$", "$\\mathrm{Fe(-3d^6)}$", "$\\mathrm{Zn(-3d^{10})}$", "$\\mathrm{Ni(-3d^8)}$"],
    correct_answer: "$\\mathrm{Zn(-3d^{10})}$",
    explanation: "$\\mathrm{Zn~(3d^{10})}$ বাদে অপশন এর বাকি সবগুলো মৌলতে অযুগ্ম ইলেকট্রন রয়েছে।",
    time_limit: 60
  },
  // --- T-04: পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক ---
  {
    id: 83490,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "৯০. নিচের আয়নগুলোর কোনটি ক্ষুদ্রতম? [DU'25-26]",
    options: ["$\\mathrm{Al^{3+}}$", "$\\mathrm{Mg^{2+}}$", "$\\mathrm{Na^+}$", "$\\mathrm{K^+}$"],
    correct_answer: "$\\mathrm{Al^{3+}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83491,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "৯১. কোনটি সর্বাধিক তড়িৎ ঋণাত্মকতা নির্দেশ করে? [JnU'25-26]",
    options: ["$1s^2 2s^2 3s^1$", "$1s^2 2s^2 2p^5$", "$1s^2 2s^2 2p^6$", "$1s^2 2s^2 2p^6 3s^2 3p^5$"],
    correct_answer: "$1s^2 2s^2 2p^5$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83492,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "৯২. কোন উপাদানের আকার সবচেয়ে ছোট? [JnU'25-26]",
    options: ["$\\mathrm{Na^+}$", "$\\mathrm{F^-}$", "$\\mathrm{Ne}$", "$\\mathrm{O^{2-}}$"],
    correct_answer: "$\\mathrm{Na^+}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83493,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "৯৩. কোন সক্রিয়তার ক্রমটি সঠিক? [JU'25-26]",
    options: ["$\\mathrm{Na > Li > Cs}$", "$\\mathrm{Na > K > Cs}$", "$\\mathrm{Cs > K > Na}$", "$\\mathrm{Rb > Cs > Na}$"],
    correct_answer: "$\\mathrm{Cs > K > Na}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83494,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "৯৪. কোন মৌলটির পারমাণবিক ব্যাসার্ধ সবচেয়ে বেশি? [JU'25-26]",
    options: ["$\\mathrm{Cs}$", "$\\mathrm{Rb}$", "$\\mathrm{Na}$", "$\\mathrm{K}$"],
    correct_answer: "$\\mathrm{Cs}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83495,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "৯৫. পরমাণুর আকার বৃদ্ধির সঠিক ক্রম কোনটি? [JU'25-26]",
    options: ["$\\mathrm{Na < Mg < Al}$", "$\\mathrm{Na > Mg > Al}$", "$\\mathrm{Na > Mg < Al}$", "$\\mathrm{Na > K > Cs}$"],
    correct_answer: "$\\mathrm{Na > Mg > Al}$",
    explanation: "একই পর্যায়ের বাম থেকে ডানে আকার হ্রাস পায়।",
    time_limit: 60
  },
  {
    id: 83496,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "৯৬. পর্যায় সারণির গ্রুপ II A এর উপর থেকে নিচের দিকে গেলে মৌলসমূহের আয়নিকরণ শক্তি ক্রম কি হয়? [CU'25-26]",
    options: ["বৃদ্ধি পায়", "হ্রাস পায়", "অপরিবর্তিত থাকে", "নির্ণয় করা যায় না"],
    correct_answer: "হ্রাস পায়",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83497,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "৯৭. হ্যালোজেন গ্রুপের উপর থেকে নিচের দিকে কোন ধর্মটির ক্রমশ হ্রাস ঘটে? [HSTU'25-26]",
    options: ["পারমাণবিক ব্যাসার্ধ", "স্ফুটনাঙ্ক", "অধাতব বিভব", "আয়নিক ব্যাসার্ধ"],
    correct_answer: "অধাতব বিভব",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83498,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "৯৮. আয়নীকরণ শক্তির সঠিক ক্রম কোনটি? [RU'24-25]",
    options: ["$\\mathrm{Be < B < N < O}$", "$\\mathrm{B < Be < N < O}$", "$\\mathrm{Be < B < O < N}$", "$\\mathrm{B < Be < O < N}$"],
    correct_answer: "$\\mathrm{B < Be < O < N}$",
    explanation: "$\\mathrm{Be > B}$; $\\mathrm{Be = 1s^2 2s^2}$ ($2s$ পূর্ণ হওয়ায়)\n$\\mathrm{B = 1s^2 2s^2 2p^1}$\n$\\mathrm{N > O}$; $\\mathrm{N = 1s^2 2s^2 2p^3}$ ($2p$ অর্ধপূর্ণ হওয়ায়)\n$\\mathrm{O = 1s^2 2s^2 2p^4}$\nপূর্ণ বা অর্ধপূর্ণ অরবিটাল অধিক স্থিতিশীল তাই ইলেকট্রন অপসারণে অধিক শক্তির প্রয়োজন হয়। অর্থাৎ আয়নীকরণ শক্তি বেশি হয়।",
    time_limit: 60
  },
  {
    id: 83499,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "৯৯. নিচের কোন আয়নের আকার সবচেয়ে ছোট হবে? [JU'24-25, CST'23-24]",
    options: ["$\\mathrm{F^-}$", "$\\mathrm{O^{2-}}$", "$\\mathrm{N^{3-}}$", "$\\mathrm{Na^+}$"],
    correct_answer: "$\\mathrm{Na^+}$",
    explanation: "সম ইলেকট্রন বিশিষ্ট আয়নের ক্ষেত্রে যার প্রোটন সংখ্যা বেশি তার আকার সবচেয়ে ছোট।",
    time_limit: 60
  },
  {
    id: 83400,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১০০. পর্যায় সারণিতে একই পর্যায়ে বাম হতে ডান দিকের মৌলগুলোর ক্ষেত্রে কোন তথ্যটি সঠিক? [JU'24-25]",
    options: ["আয়নিকরণ শক্তি বৃদ্ধি পায়", "ইলেকট্রন আসক্তি হ্রাস পায়", "তড়িৎ ঋণাত্মকতা অপরিবর্তিত থাকে", "পরমাণুর আকার বাড়তে থাকে"],
    correct_answer: "আয়নিকরণ শক্তি বৃদ্ধি পায়",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83401,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১০১. $\\mathrm{M + \\Delta H \\rightarrow M^+ + e^-}$ এখানে $\\mathrm{\\Delta H}$ কী? [JU'24-25]",
    options: ["ইলেকট্রন আসক্তি", "আয়নিকরণ শক্তি", "তড়িৎ ঋণাত্মকতা", "তড়িৎ ধনাত্মকতা"],
    correct_answer: "আয়নিকরণ শক্তি",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83402,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১০২. আকারের ক্ষেত্রে কোন ক্রমটি সঠিক? [JU'24-25]",
    options: ["$\\mathrm{Al > Mg > Na}$", "$\\mathrm{Na^+ > Mg^{2+} > Al^{3+}}$", "$\\mathrm{Al^{3+} > Mg^{2+} > Na^+}$", "$\\mathrm{Na > Ne > F}$"],
    correct_answer: "$\\mathrm{Na^+ > Mg^{2+} > Al^{3+}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83403,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১০৩. নিচের কোন মৌলের গলনাঙ্ক কম? [JU'24-25]",
    options: ["$\\mathrm{Na}$", "$\\mathrm{S}$", "$\\mathrm{P}$", "$\\mathrm{Mg}$"],
    correct_answer: "$\\mathrm{Na}$",
    explanation: "তৃতীয় পর্যায়ে গলনাঙ্ক ক্রম: $\\mathrm{Si > Al > Mg > S > Na > P > Cl > Ar}$\nনোট: বইয়ে উত্তর (ক) $\\mathrm{Na}$ দেওয়া; প্রদত্ত ক্রম অনুযায়ী অপশনগুলোর মধ্যে $\\mathrm{P}$-এর গলনাঙ্ক সর্বনিম্ন হওয়ার কথা; যাচাই প্রয়োজন।",
    time_limit: 60
  },
  {
    id: 83404,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১০৪. $_{7}\\mathrm{N}$ এর চেয়ে $_{8}\\mathrm{O}$ এর- [CU'24-25]\n(i) আকার ক্ষুদ্র\n(ii) আয়নিকরণ শক্তি কম\n(iii) পারমাণবিক ব্যাসার্ধ বেশি\nনিচের কোনটি সঠিক?",
    options: ["i, ii, iii", "ii, iii", "i, ii", "i, iii"],
    correct_answer: "i, ii",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83405,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১০৫. উল্লেখিত ইলেকট্রন বিন্যাস সম্পন্ন কোন মৌলটির ব্যাসার্ধ সবচেয়ে বেশি? [GST'24-25; JnU'15-16]",
    options: ["$1s^2 2s^1$", "$1s^2 2s^2$", "$1s^2 2s^2 2p^1$", "$1s^2 2s^2 2p^3$"],
    correct_answer: "$1s^2 2s^1$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83406,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১০৬. পর্যায় সারণির যেকোনো গ্রুপের ওপর থেকে নিচের দিকে মৌলের- [JU'23-24]\n(i) অধাতব বৈশিষ্ট্য হ্রাস পায়\n(ii) ধাতুর সক্রিয়তা বৃদ্ধি পায়\n(iii) আয়নীকরণ শক্তি হ্রাস পায়\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "ii, iii", "i, iii", "i, ii, iii"],
    correct_answer: "i, ii, iii",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83407,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১০৭. কোনটির ইলেকট্রন আসক্তি সবচেয়ে বেশি? [GST'22-23; Agri'21-22, 19-20; KU'19-20; BAU'18-19; RU'17-18]",
    options: ["$\\mathrm{F}$", "$\\mathrm{Cl}$", "$\\mathrm{Br}$", "$\\mathrm{I}$"],
    correct_answer: "$\\mathrm{Cl}$",
    explanation: "গ্রুপ-17 এর মৌলের ইলেকট্রন আসক্তির ক্রম: $\\mathrm{Cl > F > Br > I}$",
    time_limit: 60
  },
  {
    id: 83408,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১০৮. আয়নিক ব্যাসার্ধের আকারের কোন ক্রমটি সঠিক নয়? [RU'22-23]",
    options: ["$\\mathrm{Mg^+ < Ca^{2+} < Sr^{2+}}$", "$\\mathrm{Mg^{2+} > Ca^{2+} > Sr^{2+}}$", "$\\mathrm{S^{2-} > Cl^- > K^+}$", "$\\mathrm{Au^+ > Au^{3+} > Cu^+}$"],
    correct_answer: "$\\mathrm{Mg^{2+} > Ca^{2+} > Sr^{2+}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83409,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১০৯. $\\mathrm{C, O, N}$ এবং $\\mathrm{F}$-এর তড়িৎ ঋণাত্মকতার সঠিক ক্রম কোনটি? [DU'21-22]",
    options: ["$\\mathrm{F > O > N > C}$", "$\\mathrm{N > F > O > C}$", "$\\mathrm{O > F > C > N}$", "$\\mathrm{F > N > O > C}$"],
    correct_answer: "$\\mathrm{F > O > N > C}$",
    explanation: "একই পর্যায়ে বাম থেকে ডানে তড়িৎঋণাত্মকতা বাড়ে।",
    time_limit: 60
  },
  {
    id: 83410,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১১০. পর্যায় সারণির গ্রুপ $\\mathrm{IA}$ এর মৌল সমূহের বেলায় যতই নিচের দিকে যাওয়া যায় ততই- [JU'21-22]\n(i) ইলেকট্রনের একটি নতুন স্তর যুক্ত হয়\n(ii) পারমাণবিক ব্যাসার্ধ হ্রাস পায়\n(iii) ধাতুর সক্রিয়তা বৃদ্ধি পায়।\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "ii, iii", "i, iii", "i, ii, iii"],
    correct_answer: "i, iii",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83411,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১১১. মৌলগুলোর আয়তনের কোন ক্রমটি সঠিক? [JU'21-22]",
    options: ["$\\mathrm{Li < Na < K < Rb < Cs}$", "$\\mathrm{Na < K < Li < Cs < Rb}$", "$\\mathrm{Cs < Li < Na < K < Rb}$", "$\\mathrm{K < Na < Rb < Cs < Li}$"],
    correct_answer: "$\\mathrm{Li < Na < K < Rb < Cs}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83412,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১১২. মৌলসমূহের তড়িৎ-ঋণাত্মকতার কোন ক্রমটি সঠিক? [JU'21-22]",
    options: ["$\\mathrm{Cs < K < Sr < Na}$", "$\\mathrm{Cs < Ba < Be < K}$", "$\\mathrm{Cs < K < Be < Ca}$", "$\\mathrm{Cs < K < Ba < Sr}$"],
    correct_answer: "$\\mathrm{Cs < K < Ba < Sr}$",
    explanation: "$\\mathrm{Cs (0.7), K(0.8), Sr (1), Na (0.9), Be (1.5), Ca (1), Ba (0.9) \\therefore Cs < K < Ba < Sr}$",
    time_limit: 60
  },
  {
    id: 83413,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১১৩. মৌলগুলোর তড়িৎ-ঋণাত্মকতার কোন ক্রমটি সঠিক? [JU'21-22]",
    options: ["$\\mathrm{Na > K > Li > Rb > Cs}$", "$\\mathrm{Li > Na > K > Rb > Cs}$", "$\\mathrm{Rb > Na > K > Li > Cs}$", "$\\mathrm{Cs > Li > Rb > K > Na}$"],
    correct_answer: "$\\mathrm{Li > Na > K > Rb > Cs}$",
    explanation: "একই গ্রুপের উপর থেকে নিচে তড়িৎ ঋণাত্মকতা কমে।",
    time_limit: 60
  },
  {
    id: 83414,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১১৪. কোন মৌলটির ইলেকট্রন আসক্তি সবচেয়ে বেশি? [CU'21-22]",
    options: ["$\\mathrm{O}$", "$\\mathrm{F}$", "$\\mathrm{Cl}$", "$\\mathrm{Br}$"],
    correct_answer: "$\\mathrm{Cl}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83415,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১১৫. নিচের কোন আয়নের আয়নিক ব্যাসার্ধ সবচেয়ে ছোট? [CU'21-22]",
    options: ["$\\mathrm{Na^+}$", "$\\mathrm{Mg^{2+}}$", "$\\mathrm{Al^{3+}}$", "$\\mathrm{Si^{4+}}$"],
    correct_answer: "$\\mathrm{Si^{4+}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83416,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১১৬. কোনটি সর্বাধিক তড়িৎ ঋণাত্মকতা নির্দেশ করে? [GST'20-21]",
    options: ["$1s^2 2s^2 2p^5$", "$1s^2 2s^2 2p^6 3s^1$", "$1s^2 2s^2 2p^4$", "$1s^2 2s^2 2p^6 3s^2 3p^5$"],
    correct_answer: "$1s^2 2s^2 2p^5$",
    explanation: "$1s^2 2s^2 2p^5$ ফ্লোরিন নির্দেশ করে। এটি সর্বাধিক তড়িৎ ঋণাত্মক মৌল।",
    time_limit: 60
  },
  {
    id: 83417,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১১৭. আয়নিক ব্যাসার্ধের ক্ষেত্রে কোন ক্রমটি সঠিক? [SUST'19-20]",
    options: ["$\\mathrm{N^{3-} > Na^+ > O^{2-} > F^-}$", "$\\mathrm{N^{3-} > O^{2-} > F^- > Na^+}$", "$\\mathrm{Na^+ > O^{2-} > N^{3-} > F^-}$", "$\\mathrm{O^{2-} > F^- > Na^+ > N^{3-}}$", "$\\mathrm{F^- > N^{3-} > O^{2-} > Na^+}$"],
    correct_answer: "$\\mathrm{N^{3-} > O^{2-} > F^- > Na^+}$",
    explanation: "ক্যাটায়নের চার্জ বাড়লে আকার কমে আর অ্যানায়নের চার্জ বাড়লে আকার বাড়ে।\nতাই, $\\mathrm{N^{3-} > O^{2-} > F^- > Na^+}$\n(সবগুলোতে ইলেকট্রন সংখ্যা = $10$)",
    time_limit: 60
  },
  {
    id: 83418,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১১৮. $\\mathrm{C, O, Ne}$ ও $\\mathrm{F}$ এর তড়িৎ ঋণাত্মকতার সঠিক ক্রম কোনটি? [RU'19-20]",
    options: ["$\\mathrm{F > O > C > Ne}$", "$\\mathrm{Ne > F > O > C}$", "$\\mathrm{O > F > C > Ne}$", "$\\mathrm{F > C > O > Ne}$"],
    correct_answer: "$\\mathrm{F > O > C > Ne}$",
    explanation: "$\\mathrm{Ne}$ নিষ্ক্রিয় গ্যাস। তাই তড়িৎ ঋণাত্মকতার মান '0'।\nঅন্যগুলো একই পর্যায়ের, তাই ক্রম হবে $\\mathrm{F > O > C > Ne}$।",
    time_limit: 60
  },
  {
    id: 83419,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১১৯. কোন গ্রুপের মৌলসমূহের ইলেকট্রন আসক্তি ও আয়নীকরণ শক্তি সবচেয়ে বেশি? [JU'19-20]",
    options: ["গ্রুপ $12, 13$", "গ্রুপ $13, 14$", "গ্রুপ $15, 16$", "গ্রুপ $16, 17$"],
    correct_answer: "গ্রুপ $16, 17$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83420,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১২০. কোনটি হ্যালোজেনসমূহের তড়িৎ ঋণাত্মকতার ক্রম? [JU'19-20]",
    options: ["$\\mathrm{F > Cl > Br > I}$", "$\\mathrm{I > Br > Cl > F}$", "$\\mathrm{Br > Cl > F > I}$", "কোনটিই নয়"],
    correct_answer: "$\\mathrm{F > Cl > Br > I}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83421,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১২১. $\\mathrm{Li}$ এবং $\\mathrm{Ne}$ এর মধ্যবর্তী একটি মৌলের ১ম সাতটি আয়নিকরণ শক্তিসমূহ হলো: $1310, 3390, 5320, 7450, 11000, 13300, 71000\\mathrm{~kJ~mol^{-1}}$। মৌলটির পরমাণুর যোজ্যতা শেলের ইলেকট্রন বিন্যাস কী? [DU'18-19]",
    options: ["$2s^2$", "$2s^2 2p^1$", "$2s^2 2p^4$", "$2s^2 2p^6$"],
    correct_answer: "$2s^2 2p^4$",
    explanation: "option (a) ও (b) হবে না কারণ তাতে 7 টি ইলেকট্রন নেই, আর option (d) তো নিজেই $\\mathrm{Ne}$। তাই উত্তর (c)।",
    time_limit: 60
  },
  {
    id: 83422,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১২২. ব্যাসার্ধের সঠিক ক্রম কোনটি? [DU'18-19]",
    options: ["$\\mathrm{Mg^{2+} < Na^+ < Ne}$", "$\\mathrm{Mg^{2+} < Ne < Na^+}$", "$\\mathrm{Na^+ < Mg^{2+} < Ne}$", "$\\mathrm{Mg^{2+} > Na^+ > Ne}$"],
    correct_answer: "$\\mathrm{Mg^{2+} < Na^+ < Ne}$",
    explanation: "তিনটির ইলেকট্রন সংখ্যা সমান হলে যার ধনাত্মক চার্জ বেশি, আকার তার ছোট।",
    time_limit: 60
  },
  {
    id: 83423,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১২৩. কোনটি তড়িৎ ঋণাত্মক মৌল নয়? [JU'18-19]",
    options: ["$\\mathrm{N}$", "$\\mathrm{S}$", "$\\mathrm{P}$", "$\\mathrm{Mo}$"],
    correct_answer: "$\\mathrm{Mo}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83424,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১২৪. $\\mathrm{Rb}$ ও $\\mathrm{Cs}$ পরমাণুদ্বয়ের আয়নীকরণ শক্তি যথাক্রমে $403\\mathrm{~kJmol^{-1}}$ এবং $376\\mathrm{~kJmol^{-1}}$। $\\mathrm{Rb}$ এর তুলনায় $\\mathrm{Cs}$ এর পারমাণবিক ব্যাস- [KU'18-19]",
    options: ["ছোট", "বড়", "সমান", "অতুলনীয়"],
    correct_answer: "বড়",
    explanation: "ধাতুর পারমাণবিক আকার কমলে আয়নীকরণ শক্তি বেশি হবে।",
    time_limit: 60
  },
  {
    id: 83425,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১২৫. সালফার মৌলের পারমাণবিক ব্যাসার্ধ কত? [BAU'18-19]",
    options: ["$104\\mathrm{~pm}$", "$110\\mathrm{~pm}$", "$117\\mathrm{~pm}$", "$125\\mathrm{~pm}$"],
    correct_answer: "$104\\mathrm{~pm}$",
    explanation: "$\\mathrm{S}~(104\\mathrm{~pm}), \\mathrm{P}~(110\\mathrm{~pm}), \\mathrm{Si}~(117\\mathrm{~pm})$",
    time_limit: 60
  },
  {
    id: 83426,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১২৬. নিম্নের কোনটি $\\mathrm{NaCl}$ এর গলনাঙ্ক? [BAU'18-19]",
    options: ["$776^{\\circ}\\mathrm{C}$", "$801^{\\circ}\\mathrm{C}$", "$826^{\\circ}\\mathrm{C}$", "$862^{\\circ}\\mathrm{C}$"],
    correct_answer: "$801^{\\circ}\\mathrm{C}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83427,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১২৭. গ্যাসীয় অবস্থায় এক মোল পরমাণুতে এক মোল ইলেকট্রন যোগ করলে যে শক্তির পরিবর্তন হয় তা হলো- [DU'17-18]",
    options: ["ইলেকট্রোনেগেটিভিটি", "২য় ইলেকট্রন আসক্তি", "১ম ইলেকট্রন আসক্তি", "১ম আয়নীকরণ শক্তি"],
    correct_answer: "১ম ইলেকট্রন আসক্তি",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83428,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১২৮. আয়নীকরণ শক্তির সঠিক ক্রম- [RU'17-18]",
    options: ["$\\mathrm{N > O > P > Ne}$", "$\\mathrm{Ne > F > N > O}$", "$\\mathrm{O > F > N > Ne}$", "$\\mathrm{Ne > P > O > N}$"],
    correct_answer: "$\\mathrm{Ne > F > N > O}$",
    explanation: "নিষ্ক্রিয় গ্যাসের আয়নীকরণ শক্তি সর্বোচ্চ হয়।\nআবার, $\\mathrm{N}$ ও $\\mathrm{O}$ এর মধ্যে $\\mathrm{N}$ ($2p^3$) অর্ধপূর্ণ ইলেকট্রন বিন্যাসের অধিকারী। যার কারণে $\\mathrm{N}$ এর আয়নীকরণ শক্তি বেশি। ক্রম: $\\mathrm{Ne > F > N > O}$",
    time_limit: 60
  },
  {
    id: 83429,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১২৯. পর্যায় সারণির কোন গ্রুপের মৌলসমূহের ইলেকট্রন আসক্তি সর্বাপেক্ষা বেশি? [RU'17-18]",
    options: ["ক্ষারধাতু", "ক্ষারক", "হ্যালোজেন", "নিষ্ক্রিয় মৌল"],
    correct_answer: "হ্যালোজেন",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83430,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১৩০. নিম্নের কোন আয়নের ক্ষেত্রে দ্বিতীয় আয়নীকরণ শক্তি সর্বোচ্চ? [JnU'17-18]",
    options: ["$\\mathrm{Na^+}$", "$\\mathrm{Li^+}$", "$\\mathrm{K^+}$", "$\\mathrm{Rb^+}$"],
    correct_answer: "$\\mathrm{Li^+}$",
    explanation: "আকারের ক্রম: $\\mathrm{Li^+ < Na^+ < K^+ < Rb^+}$ যার আকার সবচেয়ে ছোট ($\\mathrm{Li^+}$) তার আয়নীকরণ শক্তি সর্বোচ্চ।",
    time_limit: 60
  },
  {
    id: 83431,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১৩১. সবচেয়ে বেশি তড়িৎ ধনাত্মক মৌল কোনটি? [CU'17-18]",
    options: ["$\\mathrm{Al}$", "$\\mathrm{K}$", "$\\mathrm{Mg}$", "$\\mathrm{Ca}$"],
    correct_answer: "$\\mathrm{K}$",
    explanation: "$\\mathrm{K}$ এর সর্বশেষ কক্ষপথে একটি ইলেকট্রন থাকায় $\\mathrm{K}$ সহজে একটি ইলেকট্রন ত্যাগ করে নিষ্ক্রিয় গ্যাসের ইলেকট্রন বিন্যাস অর্জন করে আবার $\\mathrm{K}$ এর আকার বড়।",
    time_limit: 60
  },
  {
    id: 83432,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১৩২. কোনটি পর্যাবৃত্ত ধর্ম নয়? [DU'16-17; CU'15-16]",
    options: ["পারমাণবিক ব্যাসার্ধ", "তড়িৎ ঋণাত্মকতা", "ইলেকট্রন আসক্তি", "গলনাঙ্ক"],
    correct_answer: "গলনাঙ্ক",
    explanation: "গলনাঙ্ক অনিয়মিতভাবে পরিবর্তন হয়।",
    time_limit: 60
  },
  {
    id: 83433,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১৩৩. আয়নীকরণ বিভবের মান কোন মৌলের ক্ষেত্রে সর্বনিম্ন? [RU'16-17]",
    options: ["$\\mathrm{K}$", "$\\mathrm{Na}$", "$\\mathrm{Cl}$", "$\\mathrm{Ne}$"],
    correct_answer: "$\\mathrm{K}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83434,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১৩৪. নিম্নের কোন মৌলটির আয়নীকরণ শক্তি সবচেয়ে বেশি? [DU'15-16]",
    options: ["$\\mathrm{Na}$", "$\\mathrm{K}$", "$\\mathrm{Rb}$", "$\\mathrm{Cs}$"],
    correct_answer: "$\\mathrm{Na}$",
    explanation: "একই গ্রুপের মৌলগুলোর মধ্যে যার অবস্থান পর্যায় সারণিতে সবচেয়ে উপরে তার আয়নীকরণ শক্তি সবচেয়ে বেশি।",
    time_limit: 60
  },
  {
    id: 83435,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১৩৫. কোন মৌলের পরমাণুর আয়নীকরণ শক্তি সবচেয়ে বেশি? [RU'14-15; CU'14-15]",
    options: ["$\\mathrm{C}$", "$\\mathrm{B}$", "$\\mathrm{N}$", "$\\mathrm{O}$"],
    correct_answer: "$\\mathrm{N}$",
    explanation: "$\\mathrm{N}$ এর p অরবিটাল অর্ধপূর্ণ ($2p^3$) রয়েছে। যা $\\mathrm{O}$ এর তুলনায় অধিক স্থিতিশীল।",
    time_limit: 60
  },
  {
    id: 83436,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১৩৬. হ্যালোজেন সমূহের ইলেকট্রন আসক্তির মান নিচের টেবিলে দেখানো হলো। কোনটি সর্বাপেক্ষা তড়িৎ ঋণাত্মক মৌল? [KU'14-15]\n[এখানে চিত্র ছিল]",
    options: ["$\\mathrm{Br}$", "$\\mathrm{F}$", "$\\mathrm{I}$", "$\\mathrm{Cl}$"],
    correct_answer: "$\\mathrm{F}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83437,
    topic: "পর্যাবৃত্ত ধর্ম, পারমাণবিক আকার-ব্যাসার্ধ, আয়নীকরণ শক্তি, ইলেকট্রন আসক্তি, তড়িৎ ঋণাত্মকতা, ধাতব ও অধাতব ধর্ম, গলনাঙ্ক ও স্ফুটনাঙ্ক",
    topicId: "chem1_per_t04",
    question_text: "১৩৭. নিচে চারটি পরমাণুর ইলেকট্রন বিন্যাস দেওয়া আছে। কোন পরমাণুর প্রথম আয়নীকরণ শক্তি সবচেয়ে কম? [KU'14-15]",
    options: ["$1s^2 2s^1$", "$1s^2 2s^2 2p^2$", "$1s^2 2s^2 2p^5$", "$1s^2 2s^2 2p^6 3s^1$"],
    correct_answer: "$1s^2 2s^2 2p^6 3s^1$",
    explanation: "",
    time_limit: 60
  },
  // --- T-05: মৌলের অক্সাইড ধর্ম ---
  {
    id: 83538,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৩৮. নিচের কোনটি সুপার অক্সাইড? [JU'24-25]",
    options: ["$\\mathrm{KO_2}$", "$\\mathrm{Pb_3O_4}$", "$\\mathrm{MnO_2}$", "$\\mathrm{Na_2O_2}$"],
    correct_answer: "$\\mathrm{KO_2}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83539,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৩৯. নিচের কোনটি উভধর্মী (amphoteric) ধাতব হাইড্রোক্সাইড? [JnU'24-25]",
    options: ["$\\mathrm{KOH}$", "$\\mathrm{Ba(OH)_2}$", "$\\mathrm{Pb(OH)_2}$", "$\\mathrm{LiOH}$"],
    correct_answer: "$\\mathrm{Pb(OH)_2}$",
    explanation: "(i) $\\mathrm{Pb(OH)_2}$ ক্ষার হিসেবে,\n$\\mathrm{Pb(OH)_2 + 2HCl \\rightarrow PbCl_2 + 2H_2O}$\n(ii) $\\mathrm{Pb(OH)_2}$ এসিড হিসেবে,\n$\\mathrm{Pb(OH)_2 + 2NaOH \\rightarrow Na_2PbO_2 + 2H_2O}$",
    time_limit: 60
  },
  {
    id: 83540,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৪০. $\\mathrm{B_2O_3}$ অধিক পরিমাণ পানির সাথে বিক্রিয়া করলে চূড়ান্ত উৎপাদটি হবে- [SUST'24-25]",
    options: ["$\\mathrm{HBO_3}$", "$\\mathrm{H_2BO_3}$", "$\\mathrm{H_3BO_3}$", "$\\mathrm{HBO_2}$"],
    correct_answer: "$\\mathrm{H_3BO_3}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83541,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৪১. কোন অক্সাইডগুলো উভধর্মী? [SUST'24-25]",
    options: ["$\\mathrm{PbO, SnO_2, SiO_2}$", "$\\mathrm{SiO_2, SnO_2, Al_2O_3}$", "$\\mathrm{Al_2O_3, PbO, SnO_2}$", "$\\mathrm{Al_2O_3, PbO, SiO_2}$"],
    correct_answer: "$\\mathrm{Al_2O_3, PbO, SnO_2}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83542,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৪২. ঘন $\\mathrm{HCl}$ এর সাথে কোন যৌগটি ক্লোরিন তৈরি করে? [CoU'24-25]",
    options: ["$\\mathrm{Al_2O_3}$", "$\\mathrm{PbO_2}$", "$\\mathrm{CuO}$", "$\\mathrm{Fe_2O_3}$"],
    correct_answer: "$\\mathrm{PbO_2}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83543,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৪৩. নিচের কোনটি উভধর্মী অক্সাইড? [CU'23-24; GST'20-21]",
    options: ["$\\mathrm{H_2O}$", "$\\mathrm{CaO}$", "$\\mathrm{Al_2O_3}$", "$\\mathrm{Cl_2O_7}$"],
    correct_answer: "$\\mathrm{Al_2O_3}$",
    explanation: "$\\mathrm{Al_2O_3}$ এসিড ও ক্ষার উভয়ের সাথে বিক্রিয়া করায় এটিকে উভধর্মী অক্সাইড বলা হয়। যেমন:\n$\\mathrm{Al_2O_3 + 6HCl \\rightarrow 2AlCl_3 + 3H_2O}$\n$\\mathrm{Al_2O_3 + 2NaOH \\rightarrow 2NaAlO_2 + H_2O}$",
    time_limit: 60
  },
  {
    id: 83544,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৪৪. কোনটি অম্লধর্মী অক্সাইড নয়? [GST'22-23]",
    options: ["$\\mathrm{SO_2}$", "$\\mathrm{NO_2}$", "$\\mathrm{N_2O_5}$", "$\\mathrm{N_2O}$"],
    correct_answer: "$\\mathrm{N_2O}$",
    explanation: "নাইট্রোজেনের 5 টি অক্সাইডের মধ্যে $\\mathrm{N_2O}$ ও $\\mathrm{NO}$ নিরপেক্ষ অক্সাইড এবং $\\mathrm{N_2O_3, NO_2}$ ও $\\mathrm{N_2O_5}$ অম্লীয় অক্সাইড।",
    time_limit: 60
  },
  {
    id: 83545,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৪৫. লাফিং গ্যাসের সংকেত হল- [CU'22-23]",
    options: ["$\\mathrm{NO}$", "$\\mathrm{NO_2}$", "$\\mathrm{N_2O_2}$", "$\\mathrm{N_2O}$"],
    correct_answer: "$\\mathrm{N_2O}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83546,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৪৬. ক্ষারধর্মী অক্সাইড কোনটি? [CU'21-22]",
    options: ["$\\mathrm{MgO}$", "$\\mathrm{Al_2O_3}$", "$\\mathrm{ZnO}$", "$\\mathrm{CaO}$"],
    correct_answer: "$\\mathrm{MgO}$",
    explanation: "নোট: বইয়ে উত্তর (ক) দেওয়া; $\\mathrm{CaO}$-ও ক্ষারধর্মী অক্সাইড, যাচাই প্রয়োজন।",
    time_limit: 60
  },
  {
    id: 83547,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৪৭. কোনটি অম্লীয় জলীয় দ্রবণ তৈরি করে? [DU'19-20]",
    options: ["$\\mathrm{Na_2O}$", "$\\mathrm{ZnO}$", "$\\mathrm{Al_2O_3}$", "$\\mathrm{CO_2}$"],
    correct_answer: "$\\mathrm{CO_2}$",
    explanation: "$\\mathrm{CO_2 + H_2O \\rightarrow H_2CO_3}$ (কার্বনিক এসিড)",
    time_limit: 60
  },
  {
    id: 83548,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৪৮. নিচের অক্সাইডগুলোর মধ্যে কোন জোড়াটি সবচেয়ে বেশি অম্লধর্মী? [RU'19-20]",
    options: ["$\\mathrm{N_2O}$ ও $\\mathrm{Mn_2O_3}$", "$\\mathrm{N_2O_3}$ ও $\\mathrm{MnO_2}$", "$\\mathrm{N_2O_4}$ ও $\\mathrm{Mn_2O_7}$", "$\\mathrm{NO}$ ও $\\mathrm{Mn_2O_3}$"],
    correct_answer: "$\\mathrm{N_2O_4}$ ও $\\mathrm{Mn_2O_7}$",
    explanation: "$\\mathrm{N_2O}$ এবং $\\mathrm{NO}$ নিরপেক্ষ অক্সাইড। $\\mathrm{N_2O_3}$ অপেক্ষা $\\mathrm{N_2O_4}$ এ $\\mathrm{N}$ এর জারণ মান বেশি। আবার $\\mathrm{Mn_2O_7}$ এ $\\mathrm{Mn}$ এর জারণ মান $+7$, যা সর্বোচ্চ। তাই $\\mathrm{N_2O_4}$ ও $\\mathrm{Mn_2O_7}$ হবে অম্লধর্মীতার বিচারে সর্বোৎকৃষ্ট।",
    time_limit: 60
  },
  {
    id: 83549,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৪৯. কোনটি ক্ষারকীয় অক্সাইড? [JU'18-19]",
    options: ["$\\mathrm{N_2O_5}$", "$\\mathrm{Na_2O}$", "$\\mathrm{H_2O}$", "$\\mathrm{PbO_2}$"],
    correct_answer: "$\\mathrm{Na_2O}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83550,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৫০. কোনটি অম্লীয় অক্সাইড নয়? [JU'18-19]",
    options: ["$\\mathrm{CO}$", "$\\mathrm{CO_2}$", "$\\mathrm{NO_2}$", "$\\mathrm{SO_2}$"],
    correct_answer: "$\\mathrm{CO}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83551,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৫১. কোন গ্রুপের মৌল প্রশম অক্সাইড উৎপন্ন করতে পারে? [KU'18-19]",
    options: ["$2$ ও $13$", "$13$ ও $14$", "$14$ ও $15$", "$15$ ও $17$"],
    correct_answer: "$14$ ও $15$",
    explanation: "$\\mathrm{CO, N_2O, NO, H_2O}$ ইত্যাদি প্রশম বা নিরপেক্ষ অক্সাইড।",
    time_limit: 60
  },
  {
    id: 83552,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৫২. কোনটি ক্ষারধর্মী অক্সাইড? [BAU'18-19]",
    options: ["$\\mathrm{N_2O_5}$", "$\\mathrm{Na_2O}$", "$\\mathrm{MgO}$", "$\\mathrm{SiO_2}$"],
    correct_answer: "$\\mathrm{Na_2O}$",
    explanation: "$\\mathrm{Na_2O + H_2O \\rightarrow 2NaOH}$\n$\\mathrm{MgO + H_2O \\rightarrow Mg(OH)_2}$ (ক্ষার)\nনোট: বইয়ে উত্তর (খ) দেওয়া; $\\mathrm{MgO}$-ও ক্ষারধর্মী, যাচাই প্রয়োজন।",
    time_limit: 60
  },
  {
    id: 83553,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৫৩. তীব্র ক্ষার ধাতুর অক্সাইড ও হাইড্রোক্সাইডসমূহ- [JU'17-18]",
    options: ["তীব্র ক্ষারক", "তীব্র অম্ল", "মৃদু ক্ষার", "মৃদু অম্ল"],
    correct_answer: "তীব্র ক্ষারক",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83554,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৫৪. $\\mathrm{LiO_2}$ এর জলীয় দ্রবণ- [JU'14-15]",
    options: ["অম্লীয়", "ক্ষারীয়", "উভধর্মী", "নিরপেক্ষ"],
    correct_answer: "ক্ষারীয়",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83555,
    topic: "মৌলের অক্সাইড ধর্ম",
    topicId: "chem1_per_t05",
    question_text: "১৫৫. $\\mathrm{Na_2O}$ এর জলীয় দ্রবণ- [JU'14-15]",
    options: ["অম্লীয়", "ক্ষারীয়", "উভধর্মী", "নিরপেক্ষ"],
    correct_answer: "ক্ষারীয়",
    explanation: "",
    time_limit: 60
  },
  // --- T-06: আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন ---
  {
    id: 83656,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৫৬. কোন যৌগটি সন্নিবেশ বন্ধন গঠন করে না? [DU'25-26]",
    options: ["$\\mathrm{H_2O}$", "$\\mathrm{CCl_4}$", "$\\mathrm{NH_3}$", "$\\mathrm{BCl_3}$"],
    correct_answer: "$\\mathrm{CCl_4}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83657,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৫৭. কোনটিতে আয়নিক ও সমযোজী উভয় ধরনের বন্ধনই বিদ্যমান? [JU'25-26]",
    options: ["$\\mathrm{BaCO_3}$", "$\\mathrm{MgCl_2}$", "$\\mathrm{CH_4}$", "$\\mathrm{NH_4^+}$"],
    correct_answer: "$\\mathrm{BaCO_3}$",
    explanation: "[এখানে চিত্র ছিল]",
    time_limit: 60
  },
  {
    id: 83658,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৫৮. কোন অণুতে সন্নিবেশ সমযোজী বন্ধন গঠনের শর্ত- [JU'25-26]",
    options: ["দুটি পরমাণুর মধ্যে ইলেকট্রনের সম্পূর্ণ স্থানান্তর ঘটবে", "ইলেকট্রন গ্রহীতা পরমাণু বা আয়নের ফাঁকা অরবিটাল প্রয়োজন", "ইলেকট্রন গ্রহীতাকে অবশ্যই ধনাত্মক আয়ন হতে হবে", "সন্নিবেশ সমযোজী বন্ধন গঠনে সর্বদা ধনাত্মক আয়ন সৃষ্টি হয়"],
    correct_answer: "ইলেকট্রন গ্রহীতা পরমাণু বা আয়নের ফাঁকা অরবিটাল প্রয়োজন",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83659,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৫৯. আণবিক অরবিটাল তত্ত্বানুসারে $\\mathrm{O_2^+}$ আয়নটির বন্ধন ক্রম- [RU'25-26]",
    options: ["$1.5$", "$2.0$", "$2.5$", "$3.0$"],
    correct_answer: "$2.5$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83660,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৬০. কোন যৌগটি আয়নিক হাইড্রাইড? [HSTU'25-26]",
    options: ["$\\mathrm{H_2O}$", "$\\mathrm{H_2S}$", "$\\mathrm{NaH}$", "$\\mathrm{HI}$"],
    correct_answer: "$\\mathrm{NaH}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83661,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৬১. সবচেয়ে শক্তিশালী ধাতব বন্ধন কোনটিতে পাওয়া যায়? [HSTU'25-26]",
    options: ["$\\mathrm{Na}$", "$\\mathrm{Mg}$", "$\\mathrm{Al}$", "$\\mathrm{K}$"],
    correct_answer: "$\\mathrm{Al}$",
    explanation: "$\\mathrm{Al}$ এর ৩ টি Valence electron বিদ্যমান।",
    time_limit: 60
  },
  {
    id: 83662,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৬২. $\\mathrm{Al_2Cl_6}$ অণুতে সমযোজী ও সন্নিবেশ সমযোজী বন্ধনের সংখ্যা যথাক্রমে কয়টি? [CoU'25-26; DU'23-24, 18-19]",
    options: ["$6, 2$", "$6, 1$", "$8, 0$", "$7, 0$"],
    correct_answer: "$6, 2$",
    explanation: "[এখানে চিত্র ছিল]\nসুতরাং সমযোজী বন্ধন ৬টি এবং সন্নিবেশ বন্ধন ২টি।",
    time_limit: 60
  },
  {
    id: 83663,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৬৩. নিচের কোনটির বন্ধনক্রম শূন্য? [JnU'24-25]",
    options: ["$\\mathrm{He_2}$", "$\\mathrm{F_2}$", "$\\mathrm{N_2}$", "$\\mathrm{HF}$"],
    correct_answer: "$\\mathrm{He_2}$",
    explanation: "নিষ্ক্রিয় মৌল বলে বন্ধনক্রম শূন্য।",
    time_limit: 60
  },
  {
    id: 83664,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৬৪. কোন যৌগে আয়নিক, সমযোজী এবং সন্নিবেশ বন্ধন বিদ্যমান? [RU'24-25]",
    options: ["$\\mathrm{KBF_4}$", "$\\mathrm{NH_4Cl}$", "$\\mathrm{CuSO_4 \\cdot 5H_2O}$", "সবগুলোতেই"],
    correct_answer: "সবগুলোতেই",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83665,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৬৫. অষ্টক অপূর্ণ যৌগ- [JU'24-25]",
    options: ["$\\mathrm{NH_3}$", "$\\mathrm{BF_3}$", "$\\mathrm{H_2O}$", "$\\mathrm{NaCl}$"],
    correct_answer: "$\\mathrm{BF_3}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83666,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৬৬. $\\mathrm{NH_4Cl}$ যৌগের মধ্যে কত ধরনের বন্ধনের (Bonds) উপস্থিতি আছে? [JnU'24-25]",
    options: ["$2$", "$3$", "$4$", "$5$"],
    correct_answer: "$3$",
    explanation: "$\\mathrm{NH_4Cl}$ অণুতে বিদ্যমান বন্ধন তিনটি। যথাক্রমে সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন ও আয়নিক বন্ধন।\n[এখানে চিত্র ছিল]",
    time_limit: 60
  },
  {
    id: 83667,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৬৭. $[\\mathrm{Ag(NH_3)_2}]\\mathrm{Cl}$ যৌগটিতে কী ধরনের বন্ধন আছে? [KU'24-25]",
    options: ["আয়নিক", "সমযোজী", "সন্নিবেশ ও আয়নিক", "আয়নিক, সমযোজী ও সন্নিবেশ"],
    correct_answer: "আয়নিক, সমযোজী ও সন্নিবেশ",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83668,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৬৮. হাইড্রোনিয়াম আয়নে কোন কোন বন্ধন বিদ্যমান? [CoU'24-25; DU'20-21]",
    options: ["আয়নিক ও সমযোজী বন্ধন", "সমযোজী ও সন্নিবেশ বন্ধন", "আয়নিক ও সন্নিবেশ বন্ধন", "আয়নিক ও H-বন্ধন"],
    correct_answer: "সমযোজী ও সন্নিবেশ বন্ধন",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83669,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৬৯. $\\mathrm{NH_4Cl}$ অণুতে কী কী প্রকারের বন্ধন আছে? [JU'23-24]\n(i) আয়নিক বন্ধন\n(ii) সমযোজী বন্ধন\n(iii) সন্নিবেশ বন্ধন\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "ii, iii", "i, iii", "i, ii, iii"],
    correct_answer: "i, ii, iii",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83670,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৭০. আয়নিক বন্ধন গঠিত হয়: [JU'22-23]\n(i) ধাতু ও অধাতুর মধ্যে\n(ii) ইলেকট্রন আসক্তির পার্থক্য বেশি হলে\n(iii) ইলেকট্রন আদান প্রদানের মাধ্যমে।\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "i, iii", "ii, iii", "i, ii, iii"],
    correct_answer: "i, ii, iii",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83671,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৭১. $\\mathrm{KCl}$ যৌগটিতে $\\mathrm{K}$ ও $\\mathrm{Cl}$ এর মধ্যে বিদ্যমান বন্ধনটির নাম কী? [CU'22-23]",
    options: ["সমযোজী বন্ধন", "সন্নিবেশ বন্ধন", "আয়নিক বন্ধন", "ধাতব বন্ধন"],
    correct_answer: "আয়নিক বন্ধন",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83672,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৭২. নিম্নের কোন যৌগে আয়নিক বন্ধন আছে? [CU'22-23]",
    options: ["$\\mathrm{CH_4}$", "$\\mathrm{CaCl_2}$", "$\\mathrm{HI}$", "$\\mathrm{H_2}$"],
    correct_answer: "$\\mathrm{CaCl_2}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83673,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৭৩. অষ্টক সম্প্রসারণ এর উদাহরণ কোনটি? [DU'20-21]",
    options: ["$\\mathrm{BeCl_2}$", "$\\mathrm{PCl_5}$", "$\\mathrm{BCl_3}$", "$\\mathrm{Cl_2}$"],
    correct_answer: "$\\mathrm{PCl_5}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83674,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৭৪. কোন ধরনের বন্ধন এর শক্তি মাত্রা বেশি? [JU'19-20]",
    options: ["আয়নিক", "সমযোজী", "ধাতব", "হাইড্রোজেন"],
    correct_answer: "আয়নিক",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83675,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৭৫. $\\mathrm{CCl_4}$ সমযোজী যৌগ কারণ- [JU'18-19]\n(i) উপাদান মৌলগুলো ইলেকট্রন শেয়ার দ্বারা বন্ধন গঠন করে\n(ii) পোলারায়নের কারণে সমযোজী বৈশিষ্ট্যের উদ্ভব হয়\n(iii) যৌগটি দু'টি অধাতুর সমন্বয়ে গঠিত\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "ii, iii", "i, iii", "i, ii, iii"],
    correct_answer: "i, iii",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83676,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৭৬. $[\\mathrm{Cu(NH_3)_4(H_2O)_2}]^{2+}$ যৌগটিতে $\\mathrm{Cu}$ এবং $\\mathrm{H_2O}$ এর মধ্যে বিদ্যমান বন্ধন হচ্ছে- [CU'15-16]",
    options: ["সন্নিবেশ", "সমযোজী", "আয়নিক", "ধাতব"],
    correct_answer: "সন্নিবেশ",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83677,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৭৭. নিচের কোন যৌগটিতে আয়নিক, সমযোজী ও সন্নিবেশ-এই তিন প্রকারের বন্ধনই বিদ্যমান? [RU'14-15]",
    options: ["$\\mathrm{PH_4Cl}$", "$\\mathrm{NH_3}$", "$\\mathrm{K_3[FeCl_6]}$", "$\\mathrm{CaCl_2}$"],
    correct_answer: "$\\mathrm{PH_4Cl}$",
    explanation: "$\\mathrm{PH_3}$ এর $\\mathrm{P}$ ও $\\mathrm{H}$ এর মধ্যে সমযোজী বন্ধন\n$\\mathrm{PH_4^+}$ এর $\\mathrm{PH_3}$ ও $\\mathrm{H^+}$ এর মধ্যে সন্নিবেশ বন্ধন\n$\\mathrm{PH_4Cl}$ এর $\\mathrm{PH_4^+}$ ও $\\mathrm{Cl^-}$ এর মধ্যে আয়নিক বন্ধন",
    time_limit: 60
  },
  {
    id: 83678,
    topic: "আয়নিক বন্ধন, সমযোজী বন্ধন, সন্নিবেশ সমযোজী বন্ধন, ধাতব বন্ধন",
    topicId: "chem1_per_t06",
    question_text: "১৭৮. $[\\mathrm{Cu(NH_3)_4}]\\mathrm{Cl_2}$ যৌগে সন্নিবেশ-সমযোজী বন্ধনীর সংখ্যা- [RU'14-15]",
    options: ["$6$", "$2$", "$4$", "$5$"],
    correct_answer: "$4$",
    explanation: "",
    time_limit: 60
  },
  // --- T-07: অরবিটাল অধিক্রমণ ---
  {
    id: 83779,
    topic: "অরবিটাল অধিক্রমণ",
    topicId: "chem1_per_t07",
    question_text: "১৭৯. কোন ধরনের অরবিটাল অধিক্রমণের ফলে সিগমা ($\\sigma$) ও পাই ($\\pi$) – দুই ধরনের বন্ধন গঠন হতে পারে? [JU'25-26]",
    options: ["$s-s$", "$sp-s$", "$p-p$", "$sp^2 - s$"],
    correct_answer: "$p-p$",
    explanation: "সাধারণত $\\pi$ বন্ধন $\\sigma$ বন্ধন গঠনের পর হয় এবং পাশাপাশি দুটি p-অরবিটালের অধিক্রমণের পর $\\pi$ বন্ধন হয়।",
    time_limit: 60
  },
  {
    id: 83780,
    topic: "অরবিটাল অধিক্রমণ",
    topicId: "chem1_per_t07",
    question_text: "১৮০. $\\mathrm{CH_3CN}$ অণুতে যথাক্রমে সিগমা ($\\sigma$) ও পাই ($\\pi$) বন্ধন সংখ্যা কত? [JU'23-24]",
    options: ["$5$ ও $2$", "$4$ ও $3$", "$5$ ও $3$", "$4$ ও $2$"],
    correct_answer: "$5$ ও $2$",
    explanation: "$\\mathrm{H-C-C\\equiv N}$ ; $\\sigma$ বন্ধন $5$টি ও $\\pi$ বন্ধন $2$টি\n[এখানে চিত্র ছিল]",
    time_limit: 60
  },
  {
    id: 83781,
    topic: "অরবিটাল অধিক্রমণ",
    topicId: "chem1_per_t07",
    question_text: "১৮১. $\\pi$ বন্ধন গঠিত হয়: [JU'22-23]\n(i) p-p অরবিটালের অধিক্রমণে\n(ii) সংকরিত অরবিটালের অধিক্রমণে\n(iii) অসংকরিত অরবিটালের অধিক্রমণে\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "ii, iii", "i, iii", "i, ii, iii"],
    correct_answer: "i, iii",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83782,
    topic: "অরবিটাল অধিক্রমণ",
    topicId: "chem1_per_t07",
    question_text: "১৮২. $1$-বিউটিন-$3$-আইন এ $\\sigma$ এবং $\\pi$ বন্ধনের সংখ্যা যথাক্রমে- [GST'21-22; RU'21-22]",
    options: ["$5$ ও $5$", "$7$ ও $3$", "$8$ ও $2$", "$6$ ও $4$"],
    correct_answer: "$7$ ও $3$",
    explanation: "$\\mathrm{H_2C=CH-C\\equiv CH} ; \\sigma = 7, \\pi = 3$\n[এখানে চিত্র ছিল]",
    time_limit: 60
  },
  {
    id: 83783,
    topic: "অরবিটাল অধিক্রমণ",
    topicId: "chem1_per_t07",
    question_text: "১৮৩. সিগমা ও পাই বন্ধন মূলত কি ধরনের বন্ধন? [JU'17-18]",
    options: ["সমযোজী বন্ধন", "আয়নিক বন্ধন", "অধাতব বন্ধন", "হাইড্রোজেন বন্ধন"],
    correct_answer: "সমযোজী বন্ধন",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83784,
    topic: "অরবিটাল অধিক্রমণ",
    topicId: "chem1_per_t07",
    question_text: "১৮৪. $\\mathrm{CH_2=CH-CH_2CHO}$ যৌগটিতে যথাক্রমে $\\sigma$ এবং $\\pi$ বন্ধনের সংখ্যা হলো- [DU'15-16]",
    options: ["$9, 2$", "$8, 4$", "$10, 1$", "$10, 2$"],
    correct_answer: "$10, 2$",
    explanation: "[এখানে চিত্র ছিল]\n$\\sigma \\rightarrow 10, \\pi \\rightarrow 2$",
    time_limit: 60
  },
  // --- T-08: হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব ---
  {
    id: 83885,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "১৮৫. $\\mathrm{BCl_3}$ অণুতে $\\mathrm{B}$ পরমাণুর সংকরায়ন অবস্থা কী? [JU'25-26]",
    options: ["$sp^2$", "$sp^3d$", "$sp^3d^2$", "$sp^3$"],
    correct_answer: "$sp^2$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83886,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "১৮৬. কোন যৌগটি সরলরৈখিক নয়? [JU'25-26]",
    options: ["$\\mathrm{CO_2}$", "$\\mathrm{BeCl_2}$", "$\\mathrm{O_2}$", "$\\mathrm{H_2S}$"],
    correct_answer: "$\\mathrm{H_2S}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83887,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "১৮৭. কোন অণুটির জ্যামিতিক আকৃতি সমতলীয় ত্রিকোণাকার? [JU'25-26]",
    options: ["$\\mathrm{CCl_4}$", "$\\mathrm{PH_3}$", "$\\mathrm{PCl_3}$", "$\\mathrm{BF_3}$"],
    correct_answer: "$\\mathrm{BF_3}$",
    explanation: "$\\mathrm{BF_3} = \\frac{1}{2}(3+3-0+0) = 3$\nঅর্থাৎ, $sp^2$ সংকরায়ন সুতরাং $\\mathrm{BF_3}$ অণুর আকৃতি সমতলীয় ত্রিকোণাকার।",
    time_limit: 60
  },
  {
    id: 83888,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "১৮৮. নিচের কোনটিতে বন্ধন দৈর্ঘ্য কম? [JU'25-26]",
    options: ["$\\mathrm{H-H}$", "$\\mathrm{H_3C-H}$", "$\\mathrm{F-F}$", "$\\mathrm{H-F}$"],
    correct_answer: "$\\mathrm{H-H}$",
    explanation: "যে পরমাণুর আকার যত বড়, বন্ধনে তার দূরত্ব তত বেশি।",
    time_limit: 60
  },
  {
    id: 83889,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "১৮৯. $sp^3$ সংকর অরবিটালের আকৃতি কোনটি? [CU'25-26]",
    options: ["লিনিয়ার", "ট্রাইঅ্যাঙ্গুলার", "স্কয়ার প্লেনার", "টেট্রাহেড্রাল"],
    correct_answer: "টেট্রাহেড্রাল",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83890,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "১৯০. পানিতে $\\mathrm{H-O-H}$ বন্ধন কোণের মান যদি $180^{\\circ}$ হতো, তাহলে কোনটি সত্য? [SUST'25-26]",
    options: ["পানির পোলারিটি বেড়ে যেত", "পানি গ্যাসীয় হতো ফলে জীবনধারণ অসম্ভব হতো", "হাইড্রোজেন বন্ধন শক্তি বেড়ে যেত", "পানিতে লবণের দ্রাব্যতা বেড়ে যেত"],
    correct_answer: "পানি গ্যাসীয় হতো ফলে জীবনধারণ অসম্ভব হতো",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83891,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "১৯১. $\\mathrm{NH_3}$ অণুর আকৃতি কী? [Agri.'25-26]",
    options: ["টেট্রাহেড্রাল", "ট্রাইগোনাল প্ল্যানার", "ট্রাইগোনাল পিরামিডাল", "বাইপিরামিডাল"],
    correct_answer: "ট্রাইগোনাল পিরামিডাল",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83892,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "১৯২. নিচের কোন আয়নটিতে শুধুমাত্র একটি নিঃসঙ্গ ইলেকট্রন জোড় আছে? [DU'24-25]",
    options: ["$\\mathrm{CH_3^+}$", "$\\mathrm{CH_3^-}$", "$\\mathrm{NH_2^-}$", "$\\mathrm{NH_4^+}$"],
    correct_answer: "$\\mathrm{CH_3^-}$",
    explanation: "[এখানে চিত্র ছিল]",
    time_limit: 60
  },
  {
    id: 83893,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "১৯৩. হাইড্রাজিন $\\mathrm{(N_2H_4)}$ অণুতে $\\angle\\mathrm{HNH}$ বন্ধন কোণ কত? [DU'24-25]",
    options: ["$105^{\\circ}$", "$107^{\\circ}$", "$109.5^{\\circ}$", "$120^{\\circ}$"],
    correct_answer: "$107^{\\circ}$",
    explanation: "হাইড্রাজিন এর ক্ষেত্রে নাইট্রোজেনের $\\mathrm{(N)}$ সংকরায়ন হচ্ছে $sp^3$। এক্ষেত্রে বন্ধন কোণ হওয়ার কথা $109.5^{\\circ}$। কিন্তু হাইড্রাজিনে একটি মুক্তজোড় ইলেকট্রন থাকায় মুক্তজোড় ও বন্ধনজোড় বিকর্ষণ এর কারণে বন্ধন কোণ কমে $107^{\\circ}$ হয়।\n[এখানে চিত্র ছিল]",
    time_limit: 60
  },
  {
    id: 83894,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "১৯৪. কোন অণুর বন্ধন কোণের মান সবচেয়ে কম? [RU'24-25]",
    options: ["$\\mathrm{CH_4}$", "$\\mathrm{H_2O}$", "$\\mathrm{NH_3}$", "$\\mathrm{BCl_3}$"],
    correct_answer: "$\\mathrm{H_2O}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83895,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "১৯৫. কোন যৌগের গঠন চতুস্তলকীয় নয়? [RU'24-25; JU'23-24]",
    options: ["$\\mathrm{CCl_4}$", "$\\mathrm{NH_4^+}$", "$\\mathrm{BH_4^-}$", "$\\mathrm{SF_4}$"],
    correct_answer: "$\\mathrm{SF_4}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83896,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "১৯৬. কোন অণুর কেন্দ্রীয় পরমাণুতে $sp^3d$ সংকরন ঘটে? [RU'24-25]",
    options: ["$\\mathrm{SiCl_4}$", "$\\mathrm{PCl_3}$", "$\\mathrm{PCl_5}$", "$\\mathrm{SF_6}$"],
    correct_answer: "$\\mathrm{PCl_5}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83897,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "১৯৭. $sp^3$ সংকরিত যৌগ নয় কোনটি? [JU'24-25; CU'20-21]",
    options: ["$\\mathrm{BF_3}$", "$\\mathrm{NH_3}$", "$\\mathrm{H_2O}$", "$\\mathrm{NH_4^+}$"],
    correct_answer: "$\\mathrm{BF_3}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83898,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "১৯৮. $\\mathrm{XeF_4}$ যৌগে কতটি মুক্তজোড় ইলেকট্রন রয়েছে? [KU'24-25]",
    options: ["$2$", "$3$", "$1$", "$0$"],
    correct_answer: "$2$",
    explanation: "এখানে, $\\mathrm{Xe}$ পরমাণুর মুক্তজোড় ইলেকট্রন সংখ্যা বিবেচনা করা হয়েছে। $\\mathrm{Xe}$ এর বহিঃস্থ শেলে $8$ টি $e^-$ থাকে। এর মধ্যে $4$ টি $e^-$ $\\mathrm{F}$ এর সাথে বন্ধন গঠন করে।",
    time_limit: 60
  },
  {
    id: 83899,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "১৯৯. $sp^2$, $sp^3$ ও $sp^3d$ সংকরনের সাথে যথাক্রমে কোন জ্যামিতিক গঠনের অণু পাওয়া যায়? [SUST'24-25]",
    options: ["সমতলীয় ত্রিভুজাকার, চতুস্তলকীয় ও ত্রিকোণাকার দ্বিপিরামিড", "চতুস্তলকীয়, ত্রিভুজাকার ও পঞ্চভুজীয়", "ত্রিকোণাকার, চতুস্তলকীয় ও অষ্টতলকীয়", "ত্রিকোণাকার, ত্রিভুজাকার ও পঞ্চভুজীয়"],
    correct_answer: "সমতলীয় ত্রিভুজাকার, চতুস্তলকীয় ও ত্রিকোণাকার দ্বিপিরামিড",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83800,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২০০. $\\mathrm{NH_3}$ ও $\\mathrm{PCl_3}$ এর বন্ধন কোণ যথাক্রমে কত? [SUST'24-25]",
    options: ["$109.5^{\\circ}$ ও $120^{\\circ}$", "$107^{\\circ}$ ও $100^{\\circ}$", "$109.5^{\\circ}$ ও $100^{\\circ}$", "$107^{\\circ}$ ও $120^{\\circ}$"],
    correct_answer: "$107^{\\circ}$ ও $100^{\\circ}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83801,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২০১. $\\mathrm{NH_4^+}$ এর আকৃতি কোনটি? [GST'24-25]",
    options: ["পিরামিড", "টেট্রাহেড্রাল", "ট্রাইগোনাল বাইপিরামিড", "স্কয়ার প্ল্যানার"],
    correct_answer: "টেট্রাহেড্রাল",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83802,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২০২. কোন যৌগের কার্বনে একাধিক ধরনের সংকরন আছে? [DU'23-24]",
    options: ["1, 3-butadiene (1, 3-বিউটাডাইন)", "Cyclohexane (সাইক্লোহেক্সেন)", "Vinylbenzene (ভিনাইলবেনজিন)", "1, 2-butadiene (1, 2-বিউটাডাইন)"],
    correct_answer: "1, 2-butadiene (1, 2-বিউটাডাইন)",
    explanation: "$\\mathrm{H_2C=C=CH_2}$\n$sp^2 \\quad sp \\quad sp^2$",
    time_limit: 60
  },
  {
    id: 83803,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২০৩. $\\mathrm{ACl_5}$ এর জ্যামিতিক আকৃতি কোনটি? ('A' এর পারমাণবিক সংখ্যা 15) [GST'23-24]",
    options: ["অষ্টতলকীয়", "চতুস্তলকীয়", "ত্রিকোণীয় দ্বি পিরামিড", "বর্গাকার পিরামিড"],
    correct_answer: "ত্রিকোণীয় দ্বি পিরামিড",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83804,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২০৪. কোন যৌগটির বন্ধন কোণ সবচেয়ে কম? [GST'23-24]",
    options: ["$\\mathrm{H_2O}$", "$\\mathrm{NCl_3}$", "$\\mathrm{H_2S}$", "$\\mathrm{PH_3}$"],
    correct_answer: "$\\mathrm{H_2S}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83805,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২০৫. $sp^3d$ সংকরিত যৌগ নিচের কোনটি? [RU'23-24]",
    options: ["$\\mathrm{SF_6}$", "$\\mathrm{PCl_5}$", "$\\mathrm{ClF_3}$", "সবগুলো"],
    correct_answer: "$\\mathrm{PCl_5}$",
    explanation: "নোট: $\\mathrm{ClF_3}$-ও $sp^3d$ সংকরিত; $\\mathrm{SF_6}$ হলো $sp^3d^2$; যাচাই প্রয়োজন।",
    time_limit: 60
  },
  {
    id: 83806,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২০৬. নিচের যৌগগুলোর মধ্যে কোনটিতে সর্বোচ্চ সংখ্যক নিঃসঙ্গ জোড় ইলেকট্রন বিদ্যমান? [RU'23-24]",
    options: ["$\\mathrm{SF_4}$", "$\\mathrm{H_2O}$", "$\\mathrm{NH_3}$", "$\\mathrm{XeF_2}$"],
    correct_answer: "$\\mathrm{XeF_2}$",
    explanation: "কেন্দ্রীয় পরমাণু বিবেচনায় সবচেয়ে বেশি মুক্ত জোড় ইলেকট্রন $\\mathrm{XeF_2}$ এ এবং পুরো যৌগ বিবেচনায় সবচেয়ে বেশি মুক্তজোড় ইলেকট্রন $\\mathrm{SF_4}$।",
    time_limit: 60
  },
  {
    id: 83807,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২০৭. $\\mathrm{PCl_5}$ এ $\\mathrm{P}$ এর সংকরায়ন কীরূপ? [JU'23-24]",
    options: ["$sp^3$", "$sp^3d$", "$sp^3d^2$", "$sp^3d^3$"],
    correct_answer: "$sp^3d$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83808,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২০৮. $\\mathrm{H_2O}$ অণুতে $\\mathrm{O}$-পরমাণুটি কোন ধরনের সংকরায়িত? [JU'23-24]",
    options: ["$sp$", "$sp^2$", "$sp^3$", "$sp^4$"],
    correct_answer: "$sp^3$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83809,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২০৯. $\\mathrm{COCl_2}$ অণুতে $\\mathrm{C}$-পরমাণুটি কোন ধরনের সংকরায়িত? [JU'23-24]",
    options: ["$sp$", "$sp^2$", "$sp^3$", "$sp^4$"],
    correct_answer: "$sp^2$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83810,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২১০. $\\mathrm{AlCl_4^-}$ এর আকার কেমন হবে? [GST'22-23]",
    options: ["সমতলীয় বর্গাকার", "ত্রিভুজীয় পিরামিড", "চতুস্তলকীয়", "বর্গাকার পিরামিড"],
    correct_answer: "চতুস্তলকীয়",
    explanation: "$H = \\frac{1}{2}(V + M - C + A)$\n$= \\frac{1}{2}(3 + 4 - 0 + 1) = 4$ ; $\\mathrm{AlCl_4^-}$ যৌগটি $sp^3$ সংকরিত হওয়ায় এর আকার চতুস্তলকীয়।",
    time_limit: 60
  },
  {
    id: 83811,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২১১. $\\mathrm{PF_5}$ এর জ্যামিতিক গঠন কোনটি? [JU'22-23]",
    options: ["ত্রিকোণাকার দ্বিপিরামিডীয়", "পঞ্চকোণীয় দ্বিপিরামিডীয়", "অষ্টতলকীয়", "ত্রিকোণাকার সমতলীয়"],
    correct_answer: "ত্রিকোণাকার দ্বিপিরামিডীয়",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83812,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২১২. $\\mathrm{IO_3^-}$ আয়নে কয়টি নিঃসঙ্গ ইলেকট্রন জোড় আছে? [JU'22-23]",
    options: ["$1$ টি", "$2$ টি", "$3$ টি", "$4$ টি"],
    correct_answer: "$1$ টি",
    explanation: "নোট: বইয়ে \"(সঠিক উত্তর নেই)\" উল্লেখ; কেন্দ্রীয় মৌল আয়োডিনের মুক্তজোড় $1$ টি; পুরো আয়নে মোট $= 1 + (2 \\times 2) + 3 = 8$ টি। যাচাই প্রয়োজন।\n[এখানে চিত্র ছিল]",
    time_limit: 60
  },
  {
    id: 83813,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২১৩. কার্বন-কার্বন বন্ধন দূরত্ব সবচেয়ে কম কোন সংকরণের ক্ষেত্রে? [RU'22-23]",
    options: ["সংকরনের প্রভাব নেই", "$sp$", "$sp^2$", "$sp^3$"],
    correct_answer: "$sp$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83814,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২১৪. $sp^2$ সংকরন দ্বারা একটি কার্বন যে বন্ধন গঠন করে- [RU'22-23]",
    options: ["$4$ টি $\\pi$", "$2$ টি $\\pi$ ও $2$ টি $\\sigma$", "$1$ টি $\\pi$ ও $3$ টি $\\sigma$", "$4$ টি $\\sigma$"],
    correct_answer: "$1$ টি $\\pi$ ও $3$ টি $\\sigma$",
    explanation: "$3$টি $sp^2$ অরবিটাল $\\sigma$ বন্ধন গঠন করে এবং অবশিষ্ট p অরবিটাল $\\pi$ বন্ধন গঠন করে।\n[এখানে চিত্র ছিল]",
    time_limit: 60
  },
  {
    id: 83815,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২১৫. গ্রাফাইটে কোন ধরনের সংকরন বিদ্যমান? [DU'21-22]",
    options: ["$sp^3$", "$sp^2$", "$sp$", "$sp^2d$"],
    correct_answer: "$sp^2$",
    explanation: "হীরকে $sp^3$ সংকরন এবং গ্রাফাইটে $sp^2$ সংকরন থাকে।",
    time_limit: 60
  },
  {
    id: 83816,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২১৬. $\\mathrm{NH_4^+}$ ও $\\mathrm{PH_4^+}$ আয়নের সংকরায়ন কোনটি? [JU'21-22]",
    options: ["$sp$", "$sp^2$", "$sp^3$", "$sp^3d$"],
    correct_answer: "$sp^3$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83817,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২১৭. $\\mathrm{CH_3OH}$ অণুতে কার্বনের কোন ধরনের হাইব্রিডাইজেশন বিদ্যমান? [GST'21-22]",
    options: ["$sp$", "$sp^2$", "$sp^3d^2$", "$sp^3$"],
    correct_answer: "$sp^3$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83818,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২১৮. $\\mathrm{BCl_3}$ এর বন্ধন কোণ কত? [GST'21-22]",
    options: ["$104.5^{\\circ}$", "$107^{\\circ}$", "$120^{\\circ}$", "$180^{\\circ}$"],
    correct_answer: "$120^{\\circ}$",
    explanation: "[এখানে চিত্র ছিল]\nযৌগটিতে $sp^2$ সংকরায়ন ঘটে। তাই বন্ধন কোণ $120^{\\circ}$।",
    time_limit: 60
  },
  {
    id: 83819,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২১৯. কোনটির $sp^3$ হাইব্রিডাইজেশন বিদ্যমান? [Agri.'21-22]",
    options: ["$\\mathrm{HCN}$", "$\\mathrm{C_2H_2}$", "$\\mathrm{BF_3}$", "$\\mathrm{NH_4^+}$"],
    correct_answer: "$\\mathrm{NH_4^+}$",
    explanation: "$\\mathrm{HCN}$ বা $\\mathrm{H-C\\equiv N}$ সংকরায়ন $sp$\n$\\mathrm{C_2H_2}$ বা $\\mathrm{H-C\\equiv C-H}$ সংকরায়ন $sp$\n$\\mathrm{BF_3}$ বা [এখানে চিত্র ছিল] সংকরায়ন $sp^2$\n$\\mathrm{NH_4^+}$ বা [এখানে চিত্র ছিল] সংকরায়ন $sp^3$",
    time_limit: 60
  },
  {
    id: 83820,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২২০. $sp^3d^2$ সংকরন বিশিষ্ট যৌগ কোনটি? [RU'21-22]",
    options: ["$\\mathrm{XeF_4}$", "$\\mathrm{SF_6}$", "$\\mathrm{IF_7}$", "সবগুলো"],
    correct_answer: "$\\mathrm{XeF_4}$",
    explanation: "নোট: বইয়ে (ক) $\\mathrm{XeF_4}$ ও (খ) $\\mathrm{SF_6}$ দুটোই সঠিক উল্লেখ; যাচাই প্রয়োজন।\n$H = \\frac{1}{2}[V + M - C + A]$\n$\\mathrm{SF_6} = \\frac{1}{2}[6 + 6 - 0 + 0] = 6~(sp^3d^2)$\n$\\mathrm{XeF_4} = \\frac{1}{2}[8 + 4 - 0 + 0] = 6~(sp^3d^2)$\n$\\mathrm{IF_7} = \\frac{1}{2}[7 + 7 - 0 + 0] = 7~(sp^3d^3)$",
    time_limit: 60
  },
  {
    id: 83821,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২২১. $\\mathrm{CH_2=CH_2}$ এ কার্বন পরমাণুর $sp^2$ সংকরিত এবং অসংকরিত অরবিটালদ্বয়ের মধ্যবর্তী কোণের মান কত ডিগ্রি? [GST'20-21]",
    options: ["$90$", "$120$", "$109.5$", "$180$"],
    correct_answer: "$90$",
    explanation: "সংকরিত $sp^2$ ও অসংকরিত $p_z$ একে অপরের সাপেক্ষে লম্বভাবে অবস্থান করে।\n[এখানে চিত্র ছিল]",
    time_limit: 60
  },
  {
    id: 83822,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২২২. $\\mathrm{H_2S}$ এর $\\mathrm{H-S-H}$ বন্ধনের কোণ কত? [GST'20-21]",
    options: ["$180^{\\circ}$", "$104.5^{\\circ}$", "$92.1^{\\circ}$", "$109.5^{\\circ}$"],
    correct_answer: "$92.1^{\\circ}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83823,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২২৩. কোন যৌগটি $sp^3d$ সংকরনবিশিষ্ট? [Agri.'20-21]",
    options: ["$\\mathrm{PCl_3}$", "$\\mathrm{PCl_5}$", "$\\mathrm{CCl_4}$", "$\\mathrm{XeF_6}$"],
    correct_answer: "$\\mathrm{PCl_5}$",
    explanation: "$\\mathrm{PCl_3 \\rightarrow sp^3}$, $\\mathrm{PCl_5 \\rightarrow sp^3d}$, $\\mathrm{CCl_4 \\rightarrow sp^3}$, $\\mathrm{XeF_6 \\rightarrow sp^3d^3}$",
    time_limit: 60
  },
  {
    id: 83824,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২২৪. ক্লোরেট $\\mathrm{(ClO_3^-)}$ আয়নের লুইস কাঠামোর ক্লোরিন পরমাণুতে কত জোড়া নিঃসঙ্গ ইলেকট্রন যুগল রয়েছে? [RU'20-21]",
    options: ["$0$", "$1$", "$2$", "$3$"],
    correct_answer: "$1$",
    explanation: "[এখানে চিত্র ছিল]",
    time_limit: 60
  },
  {
    id: 83825,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২২৫. মিথেন $\\mathrm{(CH_4)}$ এর পূর্ণ দহনের সময় কার্বন পরমাণুর সংকরায়নের কী পরিবর্তন ঘটে? [RU'19-20]",
    options: ["$sp^3$ থেকে $sp$", "$sp^3$ থেকে $sp^2$", "$sp^2$ থেকে $sp$", "$sp^2$ থেকে $sp^3$"],
    correct_answer: "$sp^3$ থেকে $sp$",
    explanation: "$\\mathrm{CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O}$ [$\\mathrm{CH_4}$ এ $\\mathrm{C}$ পরমাণু $sp^3$ সংকরিত এবং $\\mathrm{CO_2}$ এ $\\mathrm{C}$ পরমাণু $sp$ সংকরিত]",
    time_limit: 60
  },
  {
    id: 83826,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২২৬. $sp^3$ হাইব্রিডাইজেশনে কয়টি $sp^3$ হাইব্রিড অরবিটাল তৈরি হয়? [DU'18-19; JU'15-16]",
    options: ["$2$", "$3$", "$4$", "$5$"],
    correct_answer: "$4$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83827,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২২৭. কোনটিতে $sp^2$ হাইব্রিডাইজেশন বিদ্যমান? [RU'18-19; CU'18-19]",
    options: ["ডায়মন্ড", "গ্রাফাইট", "অ্যামোনিয়া", "পানি"],
    correct_answer: "গ্রাফাইট",
    explanation: "ডায়মন্ড $\\rightarrow sp^3$, গ্রাফাইট $\\rightarrow sp^2$, অ্যামোনিয়া $\\rightarrow sp^3$, পানি $\\rightarrow sp^3$",
    time_limit: 60
  },
  {
    id: 83828,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২২৮. $\\mathrm{CH_3-CH=CH_2}$ যৌগে কার্বনগুলোর সংকরন কীরূপ? [DU'17-18]",
    options: ["$sp, sp^2$", "$sp, sp^3$", "$sp^2, sp^3$", "$sp, sp^2, sp^3$"],
    correct_answer: "$sp^2, sp^3$",
    explanation: "দ্বিবন্ধন যুক্ত কার্বনে $\\rightarrow sp^2$ ; একক বন্ধন যুক্ত কার্বনে $\\rightarrow sp^3$ ; ত্রিবন্ধন যুক্ত কার্বনে $\\rightarrow sp$ সংকরায়ন।",
    time_limit: 60
  },
  {
    id: 83829,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২২৯. $\\mathrm{PCl_3}$ অণুর ফসফরাসে কোন সংকর অরবিটাল বিদ্যমান? [RU'17-18]",
    options: ["$dsp^3$", "$sp^3$", "$dsp^2$", "$d^2sp$"],
    correct_answer: "$sp^3$",
    explanation: "$\\mathrm{PCl_3}$ এর সংকরায়ন $= \\frac{1}{2}(5 + 3 + 0 - 0) = 4 = sp^3$",
    time_limit: 60
  },
  {
    id: 83830,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২৩০. $\\mathrm{H_2SO_4}$ এর কেন্দ্রীয় পরমাণুর কোন প্রকার সংকরন ঘটে? [JnU'17-18]",
    options: ["$sp^2$", "$sp^3$", "$sp^3d$", "$sp^3d^2$"],
    correct_answer: "$sp^3$",
    explanation: "$x = \\frac{1}{2}(6 + 0 + 2) = 4$\n$\\therefore sp^3$ সংকরায়ন।",
    time_limit: 60
  },
  {
    id: 83831,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২৩১. $sp^2$ হাইব্রিডাইজেশনে বন্ধন কোণ হয়- [JU'16-17]",
    options: ["$180^{\\circ}$", "$120^{\\circ}$", "$107^{\\circ}$", "$109.5^{\\circ}$"],
    correct_answer: "$120^{\\circ}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83832,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২৩২. $sp^2$ হাইব্রিডাইজেশনের মাধ্যমে গঠিত যৌগ- [JU'16-17]",
    options: ["সরলরৈখিক", "ত্রিকোণাকার", "চতুস্তলকীয়", "ত্রিকোণাকার দ্বি-পিরামিডীয়"],
    correct_answer: "ত্রিকোণাকার",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83833,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২৩৩. নিম্নের কোন অণুটি সরলরৈখিক? [DU'15-16]",
    options: ["$\\mathrm{CO_2}$", "$\\mathrm{SO_2}$", "$\\mathrm{H_2O}$", "$\\mathrm{CH_2O}$"],
    correct_answer: "$\\mathrm{CO_2}$",
    explanation: "$sp$ সংকরন বিশিষ্ট যৌগে বন্ধন কোণ $180^{\\circ}$ হয় এবং সরলরৈখিক হয়। $\\mathrm{CO_2}$ সরলরৈখিক অণু।\n[এখানে চিত্র ছিল]",
    time_limit: 60
  },
  {
    id: 83834,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২৩৪. $\\mathrm{CH_3CN}$ যৌগের কার্বনসমূহে কী ধরনের সংকরন (Hybridization) বিদ্যমান? [JnU'15-16]",
    options: ["$sp^2, sp^2$", "$sp^3, sp$", "$sp^2, sp$", "$sp^3, sp^3$"],
    correct_answer: "$sp^3, sp$",
    explanation: "[এখানে চিত্র ছিল]",
    time_limit: 60
  },
  {
    id: 83835,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২৩৫. একটি s অরবিটাল এবং একটি p অরবিটালের হাইব্রিডাইজেশন হলে আমরা পাই- [DU'14-15]",
    options: ["Two mutually perpendicular orbitals", "Two orbitals at $180^{\\circ}$", "Four orbitals directed tetrahedrally", "Three orbitals in a plane"],
    correct_answer: "Two orbitals at $180^{\\circ}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83836,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২৩৬. $\\mathrm{CH_3OH}$ যৌগ $\\mathrm{C}$ এর হাইব্রিডাইজেশন (hybridization) সাধারণত- [JnU'14-15]",
    options: ["$sp$", "$sp^2$", "$sp^3$", "$sp^3d$"],
    correct_answer: "$sp^3$",
    explanation: "[এখানে চিত্র ছিল]\nবন্ধন ও $2$ মুক্তজোড় ইলেকট্রন রয়েছে তাই এর সংকরায়ন $sp^3$",
    time_limit: 60
  },
  {
    id: 83837,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২৩৭. $\\mathrm{HCHO}$ অণুতে কার্বনের হাইব্রিডাইজেশন হল- [DU'13-14]",
    options: ["$sp$", "$sp^2$", "$sp^3$", "None"],
    correct_answer: "$sp^2$",
    explanation: "[এখানে চিত্র ছিল]\nপরমাণুতে দ্বিবন্ধন রয়েছে। তাই $sp^2$ সংকরায়ন।",
    time_limit: 60
  },
  {
    id: 83838,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২৩৮. $\\mathrm{XeF_4}$ এর সংকরায়ন হল- [RU'13-14]",
    options: ["$sp^3$", "$sp^3d^1$", "$sp^3d^2$", "$dsp^2$"],
    correct_answer: "$sp^3d^2$",
    explanation: "$X = \\frac{1}{2}[8 + 4 - 0 + 0] = 6~(sp^3d^2)$",
    time_limit: 60
  },
  {
    id: 83839,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২৩৯. নিচের কোনটিতে সবচেয়ে বড় বন্ধন কোণ (Bond angle) আছে? [JnU'13-14]",
    options: ["$\\mathrm{CH_4}$", "$\\mathrm{BCl_3}$", "$\\mathrm{NH_3}$", "$\\mathrm{H_2O}$"],
    correct_answer: "$\\mathrm{BCl_3}$",
    explanation: "$\\mathrm{BCl_3}$ তে $sp^2$ হাইব্রিডাইজেশন বাকিগুলো $sp^3$ হাইব্রিডাইজেশন।\n$\\mathrm{BCl_3} - 120^{\\circ}, \\mathrm{CH_4} - 109.5^{\\circ},$\n$\\mathrm{NH_3} - 107^{\\circ}, \\mathrm{H_2O} - 104.5^{\\circ}$",
    time_limit: 60
  },
  {
    id: 83840,
    topic: "হাইব্রিডাইজেশন, যৌগের আকৃতি, বন্ধন কোণ, মুক্তজোড় ইলেকট্রন, বন্ধনজোড় ইলেকট্রন, VSEPR তত্ত্ব",
    topicId: "chem1_per_t08",
    question_text: "২৪০. নিচের কোনটি $sp^3$ সংকরন (hybridization) প্রক্রিয়ায় গঠিত নয়? [JnU'13-14]",
    options: ["$\\mathrm{NH_3}$", "$\\mathrm{NH_4^+}$", "$\\mathrm{BCl_3}$", "$\\mathrm{BH_4^-}$"],
    correct_answer: "$\\mathrm{BCl_3}$",
    explanation: "",
    time_limit: 60
  },
  // --- T-09: পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য ---
  {
    id: 83941,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৪১. নিচের কোন অণুতে স্থায়ী ডাইপোল আছে? [DU'25-26]",
    options: ["$\\mathrm{SF_4}$", "$\\mathrm{BF_3}$", "$\\mathrm{SiF_4}$", "$\\mathrm{XeF_4}$"],
    correct_answer: "$\\mathrm{SF_4}$",
    explanation: "[এখানে চিত্র ছিল]\nচতুস্তলকীয় সমতলীয় বর্গাকার\nশুধু $\\mathrm{SF_4}$ অণুতেই স্থায়ী ডাইপোল মোমেন্ট আছে।",
    time_limit: 60
  },
  {
    id: 83942,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৪২. কোন যৌগটি সবচেয়ে কম পোলার? [JnU'25-26]",
    options: ["$\\mathrm{H_2O}$", "$\\mathrm{NH_3}$", "$\\mathrm{CO_2}$", "$\\mathrm{HF}$"],
    correct_answer: "$\\mathrm{CO_2}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83943,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৪৩. কোন যৌগটি অধিক সমযোজী বৈশিষ্ট্য সম্পন্ন? [JU'25-26]",
    options: ["$\\mathrm{MgCl_2}$", "$\\mathrm{FeCl_2}$", "$\\mathrm{FeCl_3}$", "$\\mathrm{CaCl_2}$"],
    correct_answer: "$\\mathrm{FeCl_3}$",
    explanation: "ফাজানের নীতি অনুসারে, ক্যাটায়নের চার্জ যত বেশি হবে যৌগটি তত বেশি সমযোজী হবে। এইখানে $\\mathrm{FeCl_3}$ যৌগে ক্যাটায়নের চার্জ $+3$ কিন্তু বাকী যৌগগুলোতে $+2$। তাই $\\mathrm{FeCl_3}$ অধিক সমযোজী।",
    time_limit: 60
  },
  {
    id: 83944,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৪৪. একটি দ্বি-পরমাণুক যৌগের অণুতে দুটি পরমাণুর মধ্যবর্তী আধান দূরত্ব $1.27\\mathrm{\\AA}$ এবং উভয়ের আধান $1.602 \\times 10^{-19}\\mathrm{C}$ হলে, যৌগটির ডাইপোল মোমেন্ট $\\mathrm{Cm}$ এককে কত? [RU'25-26]",
    options: ["$2.0345 \\times 10^{-19}$", "$2.0345 \\times 10^{-29}$", "$3.0345 \\times 10^{-19}$", "$3.0345 \\times 10^{-29}$"],
    correct_answer: "$2.0345 \\times 10^{-29}$",
    explanation: "ডাইপোল মোমেন্ট\n$= 1.27 \\times 10^{-10} \\times 1.602 \\times 10^{-19}$\n$= 2.0345 \\times 10^{-29}\\mathrm{Cm}$",
    time_limit: 60
  },
  {
    id: 83945,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৪৫. অণুর পোলারাইজেশন বলতে বোঝায়- [RU'25-26]",
    options: ["অণুর আকার পরিবর্তন", "অণুর ইলেকট্রনের অসম বণ্টন", "পরমাণুর নিউট্রন সংখ্যা বৃদ্ধি", "অণুর বন্ধনের শক্তি বৃদ্ধি"],
    correct_answer: "অণুর ইলেকট্রনের অসম বণ্টন",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83946,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৪৬. আয়নিক পটেনশিয়ালের মান অনুসারে কোন সিরিজটি সঠিক? [SUST'25-26]",
    options: ["$\\mathrm{Cu^{2+} > Mn^{2+} > Sc^{2+}}$", "$\\mathrm{Cu^{2+} < Mn^{2+} < Sc^{2+}}$", "$\\mathrm{Cu^{2+} = Mn^{2+} = Sc^{2+}}$", "$\\mathrm{Cu^{2+} = Mn^{2+} > Sc^{2+}}$"],
    correct_answer: "$\\mathrm{Cu^{2+} > Mn^{2+} > Sc^{2+}}$",
    explanation: "আয়নিক পটেনশিয়াল $= \\frac{\\text{ক্যাটায়নের চার্জ}}{\\text{আকার}}$\n$\\mathrm{Cu^{2+}}$ এর পারমাণবিক ব্যাসার্ধ $= 0.53\\mathrm{\\AA}$\n$\\mathrm{Mn^{2+}}$ এর পারমাণবিক ব্যাসার্ধ $= 0.83\\mathrm{\\AA}$\n$\\mathrm{Sc^{2+}}$ এর পারমাণবিক ব্যাসার্ধ $= 0.87\\mathrm{\\AA}$\nসুতরাং, $\\mathrm{Cu^{2+} > Mn^{2+} > Sc^{2+}}$",
    time_limit: 60
  },
  {
    id: 83947,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৪৭. পোলারাইজিং ক্ষমতা কোনটির বেশি? [HSTU'25-26]",
    options: ["$\\mathrm{Li^+}$", "$\\mathrm{Mg^{2+}}$", "$\\mathrm{Al^{3+}}$", "$\\mathrm{Be^{2+}}$"],
    correct_answer: "$\\mathrm{Al^{3+}}$",
    explanation: "ফাজানের নীতি অনুসারে, অধিক চার্জযুক্ত আয়ন সর্বোচ্চ পোলারাইজিং ক্ষমতা প্রদর্শন করে।",
    time_limit: 60
  },
  {
    id: 83948,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৪৮. নিচের কোন অণুটির সামগ্রিক ডাইপোল সর্বাধিক? [DU'24-25]",
    options: ["$\\mathrm{Br_2C=CBr_2}$", "$\\mathrm{COCl_2}$", "$\\mathrm{HCHO}$", "$\\mathrm{BF_3}$"],
    correct_answer: "$\\mathrm{HCHO}$",
    explanation: "a ও d এর ডাইপোল $0$। $\\mathrm{HCHO}$ অণুতে সর্বাধিক ডাইপোল প্রদর্শিত হয়।\n[এখানে চিত্র ছিল]\n$\\mathrm{Br_2C=CBr_2, BF_3}$ এর ক্ষেত্রে ডাইপোল এর লব্ধি শূন্য হয় এবং $\\mathrm{COCl_2}$ এর ক্ষেত্রে ডাইপোল এর লব্ধি অনেক কম থাকে (বিপরীত মুখী মোমেন্ট এর কারণে)। $\\mathrm{HCHO}$ এর ক্ষেত্রে ডাইপোল সর্বাধিক হয়।",
    time_limit: 60
  },
  {
    id: 83949,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৪৯. কোন যৌগের গলনাঙ্ক সবচেয়ে বেশি? [RU'24-25]",
    options: ["$\\mathrm{CaCl_2}$", "$\\mathrm{SrCl_2}$", "$\\mathrm{BaCl_2}$", "$\\mathrm{MgCl_2}$"],
    correct_answer: "$\\mathrm{BaCl_2}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83950,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৫০. আয়নিক বন্ধনে ক্যাটায়নের পোলারায়ন ক্ষমতার ক্রম নিচের কোনটি সঠিক? [JU'24-25]",
    options: ["$\\mathrm{H^+ > Na^+ > K^+}$", "$\\mathrm{H^+ > K^+ > Na^+}$", "$\\mathrm{K^+ > Na^+ > H^+}$", "$\\mathrm{Na^+ > K^+ > H^+}$"],
    correct_answer: "$\\mathrm{H^+ > Na^+ > K^+}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83951,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৫১. নিচের কোন আয়নে পোলারায়ন কম ঘটে? [JU'24-25]",
    options: ["$\\mathrm{Cl^-}$", "$\\mathrm{F^-}$", "$\\mathrm{Br^-}$", "$\\mathrm{I^-}$"],
    correct_answer: "$\\mathrm{F^-}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83952,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৫২. কোনটি পোলার অণু? [GST'24-25]",
    options: ["$\\mathrm{CO_2}$", "$\\mathrm{BF_3}$", "$\\mathrm{NH_3}$", "$\\mathrm{CCl_4}$"],
    correct_answer: "$\\mathrm{NH_3}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83953,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৫৩. নিচের কোনটির ডাইপোল মোমেন্ট শূন্য? [CU'23-24]",
    options: ["$\\mathrm{ClF}$", "$\\mathrm{PCl_3}$", "$\\mathrm{SiF_4}$", "$\\mathrm{CFCl_3}$"],
    correct_answer: "$\\mathrm{SiF_4}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83954,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৫৪. কোন যৌগটি সবচেয়ে বেশি পোলার? [GST'22-23]",
    options: ["$\\mathrm{CH_4}$", "$\\mathrm{CCl_4}$", "$\\mathrm{CH_2Cl_2}$", "$\\mathrm{CHCl_3}$"],
    correct_answer: "$\\mathrm{CH_2Cl_2}$",
    explanation: "প্রদত্ত option গুলোতে $\\mathrm{CH_2Cl_2}$ এর নিট ডাইপোল মোমেন্ট সর্বোচ্চ।\n[এখানে চিত্র ছিল]",
    time_limit: 60
  },
  {
    id: 83955,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৫৫. কোন যৌগটি অধিক সমযোজী? [JU'22-23]",
    options: ["$\\mathrm{AlCl_3}$", "$\\mathrm{NaCl}$", "$\\mathrm{CCl_4}$", "$\\mathrm{MgCl_2}$"],
    correct_answer: "$\\mathrm{CCl_4}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83956,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৫৬. ডাইপোল মোমেন্ট আছে যে যৌগে? [RU'22-23]",
    options: ["$\\mathrm{CCl_4}$", "$\\mathrm{CH_2Cl_2}$", "$\\mathrm{C_2Cl_2}$", "$\\mathrm{C_2Cl_4}$"],
    correct_answer: "$\\mathrm{CH_2Cl_2}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83957,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৫৭. কোন যৌগটি সবচেয়ে কম তাপমাত্রায় বিযোজিত হবে? [Agri.'20-21]",
    options: ["$\\mathrm{Na_2CO_3}$", "$\\mathrm{K_2CO_3}$", "$\\mathrm{MgCO_3}$", "$\\mathrm{BaCO_3}$"],
    correct_answer: "$\\mathrm{MgCO_3}$",
    explanation: "$\\mathrm{Mg^{2+}}$ আয়নের আকার সবচেয়ে ছোট এবং চার্জ বেশি। তাই পোলারায়ন ক্ষমতা বেশি এবং যৌগটি অধিক সমযোজী।\n$\\therefore \\mathrm{MgCO_3}$ কম তাপমাত্রায় বিযোজিত হবে।",
    time_limit: 60
  },
  {
    id: 83958,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৫৮. কোনটি পানিতে অদ্রবণীয়? [Agri.'19-20]",
    options: ["$\\mathrm{CaCl_2}$", "$\\mathrm{CaBr_2}$", "$\\mathrm{CaI_2}$", "$\\mathrm{CaF_2}$"],
    correct_answer: "$\\mathrm{CaF_2}$",
    explanation: "নোট: বইয়ে ব্যাখ্যায় \"$\\mathrm{CaI_2}$ পানিতে অদ্রবণীয়\" লেখা থাকলেও উত্তর (ঘ) $\\mathrm{CaF_2}$ দেওয়া; যাচাই প্রয়োজন।",
    time_limit: 60
  },
  {
    id: 83959,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৫৯. নিচের কোনটি পানিতে দ্রবণীয়? [JU'19-20]",
    options: ["$\\mathrm{AgF}$", "$\\mathrm{AgCl}$", "$\\mathrm{AgBr}$", "$\\mathrm{AgI}$"],
    correct_answer: "$\\mathrm{AgF}$",
    explanation: "আয়নিক বৈশিষ্ট্যের ক্রম:\n$\\mathrm{AgF > AgCl > AgBr > AgI}$\nএখানে, $\\mathrm{AgF}$ শুধু পানিতে দ্রবীভূত হয়।",
    time_limit: 60
  },
  {
    id: 83960,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৬০. পানিতে দ্রাব্যতা বৃদ্ধির সঠিক ক্রম কোনটি? [JU'19-20]",
    options: ["$\\mathrm{CsCl < KCl < RbCl}$", "$\\mathrm{NaCl < KCl < CsCl}$", "$\\mathrm{NaCl < LiCl < RbCl}$", "$\\mathrm{KCl < NaCl < LiCl}$"],
    correct_answer: "$\\mathrm{NaCl < KCl < CsCl}$",
    explanation: "পোলারায়ন যত বেশি হবে দ্রাব্যতা তত হ্রাস পাবে।",
    time_limit: 60
  },
  {
    id: 83961,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৬১. নিম্নের কোন যৌগটি পানিতে দ্রবণীয়? [CU'18-19]",
    options: ["$\\mathrm{BaSO_4}$", "$\\mathrm{PbSO_4}$", "$\\mathrm{PbSO_3}$", "$\\mathrm{Na_2SO_4}$"],
    correct_answer: "$\\mathrm{Na_2SO_4}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83962,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৬২. সর্বাধিক আয়নিক প্রকৃতির যৌগ- [RU'17-18]",
    options: ["$\\mathrm{AlCl_3}$", "$\\mathrm{FeCl_3}$", "$\\mathrm{CaCl_2}$", "$\\mathrm{MgI_2}$"],
    correct_answer: "$\\mathrm{CaCl_2}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83963,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৬৩. ধনাত্মক আয়নের পোলারায়ন ক্ষমতার ক্ষেত্রে নিচের কোনটি সঠিক নয়? [RU'16-17]",
    options: ["$\\mathrm{Be^{2+} > Mg^{2+}}$", "$\\mathrm{Al^{3+} > Mg^{2+}}$", "$\\mathrm{Fe^{3+} > Fe^{2+}}$", "$\\mathrm{Ba^{2+} > Be^{2+}}$"],
    correct_answer: "$\\mathrm{Ba^{2+} > Be^{2+}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 83964,
    topic: "পোলারায়ন, আয়নিক যৌগে সমযোজী বৈশিষ্ট্য, ফাজানের নীতি, পোলারিটি ও সমযোজী যৌগে আয়নিক বৈশিষ্ট্য",
    topicId: "chem1_per_t09",
    question_text: "২৬৪. নিম্নের 2% (W/V) জলীয় দ্রবণগুলোর কোনটির স্ফুটনাঙ্ক সবচেয়ে বেশি? [DU'14-15]",
    options: ["$\\mathrm{NaCl}$", "$\\mathrm{KCl}$", "$\\mathrm{RbCl}$", "$\\mathrm{NaBr}$"],
    correct_answer: "$\\mathrm{RbCl}$",
    explanation: "$\\mathrm{Rb}$ এর পোলারায়ন ক্ষমতা কম বিধায় $\\mathrm{RbCl}$ এর আয়নিক ধর্ম বেশি ও স্ফুটনাঙ্ক বেশি।",
    time_limit: 60
  },
  // --- T-10: হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন ---
  {
    id: 84065,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৬৫. কোন যৌগটির H-বন্ধন বেশি শক্তিশালী? [RU'25-26]",
    options: ["$\\mathrm{CH_3CH_2OH}$", "$\\mathrm{CH_3COOH}$", "$\\mathrm{H_2O}$", "$\\mathrm{NH_3}$"],
    correct_answer: "$\\mathrm{CH_3COOH}$",
    explanation: "$\\mathrm{CH_3COOH}$ শক্তিশালী ডাইমার গঠন ফলে এই যৌগটির H-বন্ধন সবচেয়ে বেশি শক্তিশালী।",
    time_limit: 60
  },
  {
    id: 84066,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৬৬. নিচের কোন হাইড্ৰাইডগুলোর গলনাঙ্ক ও স্ফুটনাঙ্ক একই গ্রুপের অন্য সব হাইড্রাইডদের তুলনায় বেশি থাকে? [KU'25-26]",
    options: ["$\\mathrm{LiH, BeH_2}$", "$\\mathrm{LiH, HF}$", "$\\mathrm{NH_3, HF}$", "$\\mathrm{BeH_2, NH_3}$"],
    correct_answer: "$\\mathrm{NH_3, HF}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 84067,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৬৭. কোন যৌগের স্ফুটনাঙ্ক (boiling point) সবচেয়ে বেশি? [SUST'25-26]",
    options: ["$\\mathrm{CH_3CH_2OH}$", "$\\mathrm{CH_3COOH}$", "$\\mathrm{CH_3CH_2SH}$", "$\\mathrm{CH_3OCH_3}$"],
    correct_answer: "$\\mathrm{CH_3COOH}$",
    explanation: "$\\mathrm{CH_3COOH}$ যৌগ H-বন্ধন এর মাধ্যমে ডাইমার গঠন করায় এর স্ফুটনাঙ্ক সবচেয়ে বেশি।",
    time_limit: 60
  },
  {
    id: 84068,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৬৮. নিম্নের কোন যৌগটি হাইড্রোজেন বন্ধন গঠন করতে পারে? [Agri.'25-26]",
    options: ["$\\mathrm{HCl}$", "$\\mathrm{CH_4}$", "$\\mathrm{CCl_4}$", "$\\mathrm{NH_3}$"],
    correct_answer: "$\\mathrm{NH_3}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 84069,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৬৯. কোন যৌগে সবচেয়ে শক্তিশালী H-বন্ধন ঘটে? [RU'24-25; DU'22-23]",
    options: ["$\\mathrm{H_2O}$", "$\\mathrm{H_2S}$", "$\\mathrm{HF}$", "$\\mathrm{NH_3}$"],
    correct_answer: "$\\mathrm{HF}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 84070,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৭০. বরফে যে বন্ধন আছে তা হলো- [JU'23-24; GST'21-22]\n(i) হাইড্রোজেন বন্ধন\n(ii) সন্নিবেশ বন্ধন\n(iii) সমযোজী বন্ধন\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "ii, iii", "i, iii", "i, ii, iii"],
    correct_answer: "i, iii",
    explanation: "",
    time_limit: 60
  },
  {
    id: 84071,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৭১. নিচের কোনটিতে হাইড্রোজেন বন্ধন আছে? [Agri.'21-22; JU'17-18, 16-17]",
    options: ["$\\mathrm{NH_3}$", "$\\mathrm{CH_4}$", "$\\mathrm{H_2S}$", "$\\mathrm{HI}$"],
    correct_answer: "$\\mathrm{NH_3}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 84072,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৭২. কোনটিতে অন্তঃআণবিক হাইড্রোজেন বন্ধন তৈরি হয় না? [GST'20-21]",
    options: ["স্যালিসাইলিক এসিড", "2-নাইট্রোফেনল", "4-নাইট্রোফেনল", "2-ক্লোরোফেনল"],
    correct_answer: "4-নাইট্রোফেনল",
    explanation: "[এখানে চিত্র ছিল]\nদূরত্ব বেশি, তাই অন্তঃআণবিক H-বন্ধন হয় না।",
    time_limit: 60
  },
  {
    id: 84073,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৭৩. পানির উচ্চ স্ফুটনাঙ্কের কারণ- [CU'20-21]",
    options: ["পোলারিটি", "উচ্চ ডাইইলেকট্রিক ধ্রুবক", "দুর্বল বিভাজন", "হাইড্রোজেন বন্ধন"],
    correct_answer: "হাইড্রোজেন বন্ধন",
    explanation: "",
    time_limit: 60
  },
  {
    id: 84074,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৭৪. ইথানোয়িক এসিডের ডাইমারে কতটি হাইড্রোজেন বন্ধন বিদ্যমান? [RU'19-20]",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correct_answer: "$2$",
    explanation: "[এখানে চিত্র ছিল]",
    time_limit: 60
  },
  {
    id: 84075,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৭৫. নিম্নের কোন যৌগের স্ফুটনাঙ্ক সবচেয়ে বেশি? [DU'18-19]",
    options: ["$\\mathrm{CH_4}$", "$\\mathrm{NH_3}$", "$\\mathrm{PH_3}$", "$\\mathrm{H_2S}$"],
    correct_answer: "$\\mathrm{NH_3}$",
    explanation: "কারণ $\\mathrm{NH_3}$ তে H-বন্ধন উপস্থিত।",
    time_limit: 60
  },
  {
    id: 84076,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৭৬. হাইড্রোজেন বন্ধনের সঠিক শক্তিক্রম কোনটি? [RU'18-19]",
    options: ["$\\mathrm{CH_4 < NH_3 < H_2O < HF}$", "$\\mathrm{CH_4 < H_2O < NH_3 < HF}$", "$\\mathrm{NH_3 < CH_4 < H_2O < HF}$", "$\\mathrm{CH_4 < NH_3 < HF < H_2O}$"],
    correct_answer: "$\\mathrm{CH_4 < NH_3 < H_2O < HF}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 84077,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৭৭. কোন যৌগটিতে হাইড্রোজেন বন্ধন নেই? [CU'17-18]",
    options: ["$\\mathrm{CH_3-CH_2-OH}$", "$\\mathrm{CH_3-CHO}$", "$\\mathrm{H-COOH}$", "$\\mathrm{CH_3-NH_2}$"],
    correct_answer: "$\\mathrm{CH_3-CHO}$",
    explanation: "[এখানে চিত্র ছিল]\n$\\mathrm{C-H}$ এর মধ্যে তড়িৎ ঋণাত্মকতার পার্থক্য কম হওয়ায় পোলারিটি ও H বন্ধন গঠিত হয় না।",
    time_limit: 60
  },
  {
    id: 84078,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৭৮. DNA শিকলে বিদ্যমান ক্ষারকগুলো পরস্পর কী বন্ধনে আবদ্ধ থাকে? [KU'16-17]",
    options: ["আয়নিক", "সমযোজী", "হাইড্রোজেন", "ভ্যানডার ওয়ালস"],
    correct_answer: "হাইড্রোজেন",
    explanation: "",
    time_limit: 60
  },
  {
    id: 84079,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৭৯. নিম্নের কোন যৌগটি সবচেয়ে শক্তিশালী হাইড্রোজেন বন্ধন গঠন করে? [DU'15-16]",
    options: ["ইথানল", "ইথানোয়িক এসিড", "পানি", "অ্যামোনিয়া"],
    correct_answer: "ইথানোয়িক এসিড",
    explanation: "[এখানে চিত্র ছিল]\nঅংশের পোলারিটি ইথানল কিংবা পানির $-O^{\\delta-} - H^{\\delta+}$ অংশের তুলনায় অনেক বেশি বলে $\\mathrm{CH_3COOH}$ শক্তিশালী H-bond গঠন করে।",
    time_limit: 60
  },
  {
    id: 84080,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৮০. নিম্নের কোনটির স্ফুটনাঙ্ক সবচেয়ে বেশি? [CU'15-16]",
    options: ["$\\mathrm{HF}$", "$\\mathrm{HCl}$", "$\\mathrm{HBr}$", "$\\mathrm{HI}$", "$\\mathrm{H_2}$"],
    correct_answer: "$\\mathrm{HF}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 84081,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৮১. এক অণু পানিতে সর্বোচ্চ কয়টি H-bond থাকতে পারে? [JU'14-15]",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correct_answer: "$4$",
    explanation: "[এখানে চিত্র ছিল]\nসর্বোচ্চ 4 টি H-bond থাকতে পারে।",
    time_limit: 60
  },
  {
    id: 84082,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৮২. পর্যায় সারণির গ্রুপ VIIA মৌলসমূহের ভ্যানডার ওয়ালস আকর্ষণ বলের বৃদ্ধির ক্রম কোনটি? [RU'13-14]",
    options: ["$\\mathrm{F_2 > Cl_2 > Br_2 > I_2}$", "$\\mathrm{Cl_2 > F_2 > Br_2 > I_2}$", "$\\mathrm{Br_2 > F_2 > Cl_2 > I_2}$", "$\\mathrm{I_2 > Br_2 > Cl_2 > F_2}$"],
    correct_answer: "$\\mathrm{I_2 > Br_2 > Cl_2 > F_2}$",
    explanation: "আকার বৃদ্ধির সাথে ভ্যানডার ওয়ালস আকর্ষণ বল বৃদ্ধি পায়।",
    time_limit: 60
  },
  {
    id: 84083,
    topic: "হাইড্রোজেন বন্ধন, ভ্যানডার ওয়ালস্ বন্ধন",
    topicId: "chem1_per_t10",
    question_text: "২৮৩. কোনটি বরফের সঠিক সংকেত? [RU'08-09]",
    options: ["$\\mathrm{H_2O}$", "$\\mathrm{(H_2O_2)}$", "$\\mathrm{(H_2O_2)_4}$", "$\\mathrm{(H_2O)_n}$"],
    correct_answer: "$\\mathrm{(H_2O)_n}$",
    explanation: "[এখানে চিত্র ছিল]",
    time_limit: 60
  },
  // --- T-11: আকরিক, গুরুত্বপূর্ণ যৌগ, গুরুত্বপূর্ণ যৌগের গাঠনিক ও রাসায়নিক সংকেত, রাসায়নিক বিক্রিয়া, বিবিধ ---
  {
    id: 84184,
    topic: "আকরিক, গুরুত্বপূর্ণ যৌগ, গুরুত্বপূর্ণ যৌগের গাঠনিক ও রাসায়নিক সংকেত, রাসায়নিক বিক্রিয়া, বিবিধ",
    topicId: "chem1_per_t11",
    question_text: "২৮৪. $\\mathrm{CuSO_4}$ এর জলীয় দ্রবণে অতিরিক্ত $\\mathrm{NH_4OH}$ যোগ করলে কোনটি উৎপন্ন হয়? [CU'25-26]",
    options: ["$\\mathrm{Cu(NH_3)_4SO_4}$", "$\\mathrm{CuO}$", "$\\mathrm{Cu(NH_3)_2SO_4}$", "$\\mathrm{Cu_2(SO_4)_2}$"],
    correct_answer: "$\\mathrm{Cu(NH_3)_4SO_4}$",
    explanation: "$2\\mathrm{CuSO_4(aq)} + 2\\mathrm{NH_4OH(aq)} \\rightarrow \\mathrm{CuSO_4 \\cdot Cu(OH)_2(s)} + \\mathrm{(NH_4)_2SO_4(aq)}$\n$\\mathrm{CuSO_4 \\cdot Cu(OH)_2(s)} + \\mathrm{(NH_4)_2SO_4(aq)} + 6\\mathrm{NH_4OH(aq)}$ (অতিরিক্ত) $\\rightarrow 2[\\mathrm{Cu(NH_3)_4}]\\mathrm{SO_4(aq)} + 8\\mathrm{H_2O(l)}$",
    time_limit: 60
  },
  {
    id: 84185,
    topic: "আকরিক, গুরুত্বপূর্ণ যৌগ, গুরুত্বপূর্ণ যৌগের গাঠনিক ও রাসায়নিক সংকেত, রাসায়নিক বিক্রিয়া, বিবিধ",
    topicId: "chem1_per_t11",
    question_text: "২৮৫. গাঢ় সালফিউরিক এসিডের সাথে সোডিয়াম আয়োডাইডকে উত্তপ্ত করলে কোনটি তৈরি হয় না? [Agri.'25-26]",
    options: ["$\\mathrm{S}$", "$\\mathrm{SO_2}$", "$\\mathrm{SO_3}$", "$\\mathrm{H_2S}$"],
    correct_answer: "$\\mathrm{SO_3}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 84186,
    topic: "আকরিক, গুরুত্বপূর্ণ যৌগ, গুরুত্বপূর্ণ যৌগের গাঠনিক ও রাসায়নিক সংকেত, রাসায়নিক বিক্রিয়া, বিবিধ",
    topicId: "chem1_per_t11",
    question_text: "২৮৬. ব্লিস্টার কপারে অপদ্রব্য হিসেবে কোন ধাতুটি থাকে? [JU'24-25]",
    options: ["$\\mathrm{Ni}$", "$\\mathrm{Pt}$", "$\\mathrm{Mg}$", "$\\mathrm{Cr}$"],
    correct_answer: "$\\mathrm{Ni}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 84187,
    topic: "আকরিক, গুরুত্বপূর্ণ যৌগ, গুরুত্বপূর্ণ যৌগের গাঠনিক ও রাসায়নিক সংকেত, রাসায়নিক বিক্রিয়া, বিবিধ",
    topicId: "chem1_per_t11",
    question_text: "২৮৭. জার্মান সিলভার কোন কোন ধাতুর সংকর? [Agri'24-25]",
    options: ["$\\mathrm{Cu}$ ও $\\mathrm{Zn}$", "$\\mathrm{Cu, Zn}$ ও $\\mathrm{Ni}$", "$\\mathrm{Cu, Zn}$ ও $\\mathrm{Ag}$", "$\\mathrm{Cu}$ ও $\\mathrm{Sn}$"],
    correct_answer: "$\\mathrm{Cu, Zn}$ ও $\\mathrm{Ni}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 84188,
    topic: "আকরিক, গুরুত্বপূর্ণ যৌগ, গুরুত্বপূর্ণ যৌগের গাঠনিক ও রাসায়নিক সংকেত, রাসায়নিক বিক্রিয়া, বিবিধ",
    topicId: "chem1_per_t11",
    question_text: "২৮৮. ব্লিচিং পাউডারের রাসায়নিক নাম কী? [JU'22-23]",
    options: ["ক্যালসিয়াম হাইপোক্লোরাইট", "ক্যালসিয়াম ক্লোরাইট", "ক্যালসিয়াম ক্লোরোহাইপোক্লোরাইট", "ক্যালসিয়াম ক্লোরোহাইপোব্রোমাইট"],
    correct_answer: "ক্যালসিয়াম ক্লোরোহাইপোক্লোরাইট",
    explanation: "$\\mathrm{Ca(OCl)Cl}$ (ক্যালসিয়াম ক্লোরোহাইপোক্লোরাইট)",
    time_limit: 60
  },
  {
    id: 84189,
    topic: "আকরিক, গুরুত্বপূর্ণ যৌগ, গুরুত্বপূর্ণ যৌগের গাঠনিক ও রাসায়নিক সংকেত, রাসায়নিক বিক্রিয়া, বিবিধ",
    topicId: "chem1_per_t11",
    question_text: "২৮৯. কোনটি স্ট্যানিক ক্লোরাইড এর সংকেত? [JU'21-22]",
    options: ["$\\mathrm{CCl_4}$", "$\\mathrm{SnCl_2}$", "$\\mathrm{SnCl_4}$", "$\\mathrm{FeCl_2}$"],
    correct_answer: "$\\mathrm{SnCl_4}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 84190,
    topic: "আকরিক, গুরুত্বপূর্ণ যৌগ, গুরুত্বপূর্ণ যৌগের গাঠনিক ও রাসায়নিক সংকেত, রাসায়নিক বিক্রিয়া, বিবিধ",
    topicId: "chem1_per_t11",
    question_text: "২৯০. কোন আকরিকটি অ্যালুমিনিয়াম এর আকরিক নয়? [RU'14-15]",
    options: ["কোরাল্ডাম", "ইলমেনাইট", "ক্রায়োলাইট", "ডায়াস্পোর"],
    correct_answer: "ইলমেনাইট",
    explanation: "ইলমেনাইট এর সংকেত $\\mathrm{FeTiO_3}$।",
    time_limit: 60
  },
  {
    id: 84191,
    topic: "আকরিক, গুরুত্বপূর্ণ যৌগ, গুরুত্বপূর্ণ যৌগের গাঠনিক ও রাসায়নিক সংকেত, রাসায়নিক বিক্রিয়া, বিবিধ",
    topicId: "chem1_per_t11",
    question_text: "২৯১. 'গ্যালেনা' (Galena) কোন ধাতুর আকরিক (Ore)? [JnU'14-15]",
    options: ["$\\mathrm{Pb}$", "$\\mathrm{Fe}$", "$\\mathrm{Mg}$", "$\\mathrm{Mn}$"],
    correct_answer: "$\\mathrm{Pb}$",
    explanation: "",
    time_limit: 60
  },
];
