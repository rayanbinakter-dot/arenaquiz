import { Question } from '../types';

// Varsity Module 3 -> রসায়ন ২য় পত্র -> পরিমাণগত রসায়ন (topic-wise)
export const chem2QuantitativeQuestions: Question[] = [
  // --- T-01: রাসায়নিক গণনা সংক্রান্ত সমস্যা ---
  {
    id: 90101,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "১. $\\mathrm{STP}$-তে $\\mathrm{CO_{2}}$ -এর $11.2$ লিটারে মোল সংখ্যা কত? [JnU'25-26]",
    options: ["$0.25$ মোল", "$0.50$ মোল", "$1.25$ মোল", "$2.00$ মোল"],
    correct_answer: "$0.50$ মোল",
    explanation: "$\\mathrm{STP}$, $22.4\\,\\mathrm{L}$ আয়তনের $\\mathrm{CO_{2}}$ গ্যাসের মোল সংখ্যা $= 1$\n$\\therefore 11.2\\,\\mathrm{L}$ আয়তনের $\\mathrm{CO_{2}}$ গ্যাসের মোল সংখ্যা $= \\frac{11.2}{22.4} = 0.5$ মোল।",
    time_limit: 60
  },
  {
    id: 90102,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "২. পদার্থের পরিমাণ নির্ণয়ের $\\mathrm{SI}$ একক কোনটি? [JU'25-26]",
    options: ["গ্রাম", "রেডিয়ান", "মোল", "ক্যান্ডেলা"],
    correct_answer: "মোল",
    explanation: "",
    time_limit: 60
  },
  {
    id: 90103,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "৩. $100\\,\\mathrm{mg}$ $\\mathrm{H_{2}^{+}}$ আয়নে প্রোটনের সংখ্যা কয়টি? [RU'25-26]",
    options: ["$6.022 \\times 10^{23}$", "$6.022 \\times 10^{22}$", "$3.0115 \\times 10^{23}$", "$3.0115 \\times 10^{22}$"],
    correct_answer: "$6.022 \\times 10^{22}$",
    explanation: "প্রোটন সংখ্যা $= \\frac{100 \\times 10^{-3}}{2} \\times 6.023 \\times 10^{23} \\times 2$\n$= 6.023 \\times 10^{22}$ টি $\\approx 6.022 \\times 10^{22}$",
    time_limit: 60
  },
  {
    id: 90104,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "৪. $11\\,\\mathrm{g}$ $\\mathrm{CO_{2}}$ গ্যাসে মোট কত $\\mathrm{mol}$ ইলেকট্রন বিদ্যমান? [RU'25-26]",
    options: ["$0.25$", "$2.5$", "$5.5$", "$11$"],
    correct_answer: "$5.5$",
    explanation: "$n = \\frac{W}{M} \\times 22 = \\frac{11}{44} \\times 22 = 5.5\\,\\mathrm{mole}$",
    time_limit: 60
  },
  {
    id: 90105,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "৫. $1\\,\\mu\\mathrm{M}$ $\\mathrm{NaCl}$ দ্রবণের $1\\,\\mathrm{L}$ এ কয়টি আয়ন থাকবে? [RU'25-26]",
    options: ["$6.022 \\times 10^{17}$", "$6.022 \\times 10^{14}$", "$1.204 \\times 10^{18}$", "$1.204 \\times 10^{24}$"],
    correct_answer: "$1.204 \\times 10^{18}$",
    explanation: "$\\mathrm{NaCl \\rightleftharpoons Na^{+} + Cl^{-}}$\nআয়ন সংখ্যা $= 2 \\times 10^{-6} \\times 6.023 \\times 10^{23}$\n$= 1.204 \\times 10^{18}$",
    time_limit: 60
  },
  {
    id: 90106,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "৬. $1.8\\,\\mathrm{kg}$ পানিতে কতটি অণু আছে? [SUST'25-26]",
    options: ["$6.023 \\times 10^{23}$", "$10.84 \\times 10^{23}$", "$6.023 \\times 10^{25}$", "$3.023 \\times 10^{25}$"],
    correct_answer: "$6.023 \\times 10^{25}$",
    explanation: "অণুর সংখ্যা $= \\frac{1.8 \\times 10^{3} \\times 6.023 \\times 10^{23}}{18}$\n$= 6.023 \\times 10^{25}$ টি",
    time_limit: 60
  },
  {
    id: 90107,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "৭. $\\mathrm{STP}$ তে $3.2\\,\\mathrm{g}$ একটি গ্যাস $2.24\\,\\mathrm{L}$ আয়তন দখল করে। গ্যাসটি কী হতে পারে? [JU'24-25]",
    options: ["$\\mathrm{CO}$", "$\\mathrm{CO_{2}}$", "$\\mathrm{N_{2}}$", "$\\mathrm{O_{2}}$"],
    correct_answer: "$\\mathrm{O_{2}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 90108,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "৮. ইউরিয়ায় কত শতাংশ $\\mathrm{N_{2}}$ থাকে? [JnU'24-25]",
    options: ["$42\\%$", "$43\\%$", "$46\\%$", "$48\\%$"],
    correct_answer: "$46\\%$",
    explanation: "$\\mathrm{NH_{2}-CO-NH_{2}}$ তে $\\mathrm{N_{2}}$ এর শতকরা সংযুক্তি\n$= \\frac{28}{60} \\times 100 = 46.66\\% \\approx 46\\%$",
    time_limit: 60
  },
  {
    id: 90109,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "৯. $6.023 \\times 10^{20}$ টি অণু $1\\,\\mathrm{g}$ $\\mathrm{CaCO_{3}}$ থেকে সরিয়ে ফেলা হলে কত গ্রাম $\\mathrm{CaCO_{3}}$ অবশিষ্ট থাকবে? [CU'24-25]",
    options: ["$0.99\\,\\mathrm{g}$", "$0.90\\,\\mathrm{g}$", "$0.09\\,\\mathrm{g}$", "কোনোটিই নয়"],
    correct_answer: "$0.90\\,\\mathrm{g}$",
    explanation: "$n = \\frac{W}{M} = \\frac{N}{N_{A}}$\n$W = \\frac{N}{N_{A}} \\times M = \\frac{6.023 \\times 10^{20}}{6.023 \\times 10^{23}} \\times 100 = \\frac{1}{10} = 0.1\\,\\mathrm{g}$\nঅবশিষ্ট থাকবে $= (1 - 0.1)\\,\\mathrm{g} = 0.90\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90110,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "১০. একই তাপমাত্রা ও চাপে কত গ্রাম $\\mathrm{H_{2}S}$ এর আয়তন $56.0\\,\\mathrm{g}$ $\\mathrm{N_{2}}$ এর আয়তনের সমান হবে? [GST'24-25]",
    options: ["$56.0\\,\\mathrm{L}$", "$68.0\\,\\mathrm{L}$", "$28.0\\,\\mathrm{L}$", "$34.0\\,\\mathrm{L}$"],
    correct_answer: "$68.0\\,\\mathrm{L}$",
    explanation: "একই তাপমাত্রা ও চাপে সমান আয়তনের সকল গ্যাসে সমান সংখ্যক অণু থাকে। $\\mathrm{N_{2}}$ ও $\\mathrm{H_{2}S}$ এর আয়তন সমান। তাই এদের মোল সংখ্যাও সমান হবে।\n$56\\,\\mathrm{g}$ $\\mathrm{N_{2}} = \\frac{56}{28} = 2\\,\\mathrm{mole}$ $\\mathrm{N_{2}}$\n$\\therefore 2\\,\\mathrm{mole}$ $\\mathrm{H_{2}S} = (2 \\times 34)\\,\\mathrm{g} = 68\\,\\mathrm{g}$\n[নোট: অপশনে ভুল রয়েছে লিটার (L) এর পরিবর্তে গ্রাম (g) হলে উত্তর B হবে।]",
    time_limit: 60
  },
  {
    id: 90111,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "১১. ব্লু-ভিট্রিয়লে কেলাস পানির শতকরা পরিমাণ কত? [CU'24-25]",
    options: ["$58.59\\%$", "$5.68\\%$", "$36.08\\%$", "কোনোটিই নয়"],
    correct_answer: "$36.08\\%$",
    explanation: "ব্লু-ভিট্রিয়ল $\\mathrm{CuSO_{4}\\cdot 5H_{2}O}$\nকেলাস পানির শতকরা পরিমাণ,\n$= \\frac{5 \\times 18}{159.5 + 5 \\times 18} \\times 100\\% = 36.08\\%$",
    time_limit: 60
  },
  {
    id: 90112,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "১২. $1 \\times 10^{22}$ টি অণুর $\\mathrm{CuSO_{4}\\cdot 5H_{2}O}$ এর ভর কত? [CU'24-25]",
    options: ["$3.42\\,\\mathrm{g}$", "$4.42\\,\\mathrm{g}$", "$4.14\\,\\mathrm{g}$", "$5.14\\,\\mathrm{g}$"],
    correct_answer: "$4.14\\,\\mathrm{g}$",
    explanation: "$n = \\frac{W}{M} = \\frac{N}{N_{A}}$\n$\\Rightarrow W = \\frac{N}{N_{A}} \\times M = \\frac{1 \\times 10^{22}}{6.023 \\times 10^{23}} \\times 249.5 = 4.14\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90113,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "১৩. কোনটিতে সর্বোচ্চ সংখ্যক পরমাণু আছে? [CU'24-25]",
    options: ["$56\\,\\mathrm{g}$ $\\mathrm{Fe}$", "$24\\,\\mathrm{g}$ $\\mathrm{C}$", "$27\\,\\mathrm{g}$ $\\mathrm{Al}$", "$108\\,\\mathrm{g}$ $\\mathrm{Ag}$"],
    correct_answer: "$24\\,\\mathrm{g}$ $\\mathrm{C}$",
    explanation: "(a) $56\\,\\mathrm{g}$ $\\mathrm{Fe} = 1\\,\\mathrm{mole}$;\n(b) $24\\,\\mathrm{g}$ $\\mathrm{C} = 2\\,\\mathrm{mole}$;\n(c) $27\\,\\mathrm{g}$ $\\mathrm{Al} = 1\\,\\mathrm{mole}$\n(d) $108\\,\\mathrm{g}$ $\\mathrm{Ag} = 1\\,\\mathrm{mole}$",
    time_limit: 60
  },
  {
    id: 90114,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "১৪. $10.0\\,\\mathrm{g}$ অক্সিজেনে অণুর সংখ্যা কত? [HSTU'24-25; JU'19-20; Agri.'20-21, 19-20]",
    options: ["$3.76 \\times 10^{23}$", "$6.02 \\times 10^{23}$", "$9.63 \\times 10^{23}$", "$1.88 \\times 10^{23}$"],
    correct_answer: "$1.88 \\times 10^{23}$",
    explanation: "অণুর সংখ্যা $= \\frac{10}{32} \\times 6.02 \\times 10^{23}$\n$= 1.88 \\times 10^{23}$",
    time_limit: 60
  },
  {
    id: 90115,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "১৫. নিচের কোনটিতে বেশি পরমাণু আছে? [HSTU'24-25; DU'18-19]",
    options: ["$1.10\\,\\mathrm{g}$ of hydrogen atoms", "$14.7\\,\\mathrm{g}$ of chromium atoms", "$2.0\\,\\mathrm{g}$ of helium atoms", "$7.0\\,\\mathrm{g}$ of nitrogen atoms"],
    correct_answer: "$1.10\\,\\mathrm{g}$ of hydrogen atoms",
    explanation: "$\\mathrm{H}$ পরমাণুর সংখ্যা $= \\frac{1.1}{2} \\times 6.023 \\times 10^{23} = 3.3 \\times 10^{23}$\n$\\mathrm{Cr}$ পরমাণুর সংখ্যা $= \\frac{14.7}{52} \\times 6.023 \\times 10^{23}$\n$= 1.7 \\times 10^{23}$\n$\\mathrm{He}$ পরমাণুর সংখ্যা $= \\frac{2}{4} \\times 6.023 \\times 10^{23}$\n$= 3.01 \\times 10^{23}$\n$\\mathrm{N}$ পরমাণুর সংখ্যা $= \\frac{7}{28} \\times 6.023 \\times 10^{23} \\times 2$\n$= 3.01 \\times 10^{23}$",
    time_limit: 60
  },
  {
    id: 90116,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "১৬. $\\mathrm{STP}$-তে কোনো গ্যাসের $1\\,\\mathrm{L}$ এ বিদ্যমান অণুর সংখ্যা কত? (গ্যাসের আণবিক ভর $32$) [CU'23-24]",
    options: ["$0.2689 \\times 10^{22}$", "$2.689 \\times 10^{22}$ (খ)", "$6.023 \\times 10^{23}$", "$2.689 \\times 10^{22}$ (ঘ)"],
    correct_answer: "$2.689 \\times 10^{22}$ (খ)",
    explanation: "$N = \\frac{V}{22.4} \\times N_{A} = \\frac{1}{22.4} \\times 6.023 \\times 10^{23}$\n$= 2.689 \\times 10^{22}$",
    time_limit: 60
  },
  {
    id: 90117,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "১৭. $\\mathrm{STP}$-তে $1\\,\\mathrm{mL}$ গ্যাসে সম্ভাব্য অণুর সংখ্যা কত? [RU'22-23]",
    options: ["$3.7 \\times 10^{19}$", "$2.7 \\times 10^{18}$", "$2.7 \\times 10^{19}$", "$3.7 \\times 10^{18}$"],
    correct_answer: "$2.7 \\times 10^{19}$",
    explanation: "$N = \\frac{V}{22400} \\times N_{A} = \\frac{1}{22400} \\times 6.023 \\times 10^{23} = 2.7 \\times 10^{19}$",
    time_limit: 60
  },
  {
    id: 90118,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "১৮. $\\mathrm{STP}$ তে কোনো গ্যাসের $1\\,\\mathrm{L}$ এ কত মোল গ্যাস থাকে? [CU'22-23, 13-14]",
    options: ["$0.045$", "$0.224$", "$0.45$", "$2.24$"],
    correct_answer: "$0.045$",
    explanation: "$n = \\frac{1}{22.4} = 0.045$",
    time_limit: 60
  },
  {
    id: 90119,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "১৯. $8.5\\,\\mathrm{g}$ $\\mathrm{NH_{3}}$ তে পরমাণুর মোট সংখ্যা- [CU'21-22]",
    options: ["$9.03 \\times 10^{23}$", "$3.01 \\times 10^{23}$", "$1.204 \\times 10^{24}$", "$6.02 \\times 10^{23}$"],
    correct_answer: "$1.204 \\times 10^{24}$",
    explanation: "$8.5\\,\\mathrm{g}$ $\\mathrm{NH_{3}} = \\frac{8.5}{17}$ mole $\\mathrm{NH_{3}}$\n$1$ অণু $\\mathrm{NH_{3}}$ তে মোট $4$ টি পরমাণু রয়েছে ($3$ টি $\\mathrm{H}$ এবং $1$ টি $\\mathrm{N}$)\n$\\therefore 0.5\\,\\mathrm{mole}$ $\\mathrm{NH_{3}}$ তে মোট পরমাণুর সংখ্যা\n$= (0.5 \\times 4 \\times 6.02 \\times 10^{23}) = 1.204 \\times 10^{24}$",
    time_limit: 60
  },
  {
    id: 90120,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "২০. $1.008\\,\\mathrm{g}$ $\\mathrm{H_{2}}$ এ অণুর সংখ্যা কত? [GST'21-22]",
    options: ["$3.0115 \\times 10^{23}$", "$6.023 \\times 10^{23}$", "$12.046 \\times 10^{23}$", "$24.092 \\times 10^{23}$"],
    correct_answer: "$3.0115 \\times 10^{23}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 90121,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "২১. $16\\,\\mathrm{g}$ $\\mathrm{O_{2}}$ এ কতটি অণু আছে? [JU'19-20]",
    options: ["$3.011 \\times 10^{22}$", "$3.011 \\times 10^{23}$", "$2.011 \\times 10^{23}$", "$2.011 \\times 10^{22}$"],
    correct_answer: "$3.011 \\times 10^{23}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 90122,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "২২. $16\\,\\mathrm{g}$ অক্সিজেনে কতটি পরমাণু রয়েছে? [Agri.'19-20]",
    options: ["$6.023 \\times 10^{23}$", "$3.0115 \\times 10^{23}$", "$12.046 \\times 10^{23}$", "$1.2046 \\times 10^{23}$"],
    correct_answer: "$6.023 \\times 10^{23}$",
    explanation: "$\\frac{W}{M} = \\frac{X}{N_{A}} \\Rightarrow X = \\frac{16}{32} \\times 2 \\times 6.023 \\times 10^{23}$\n$[\\because$ একটি অক্সিজেন অণু দুইটি অক্সিজেন পরমাণু নিয়ে গঠিত]\n$\\therefore X = 6.023 \\times 10^{23}$",
    time_limit: 60
  },
  {
    id: 90123,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "২৩. প্রমাণ তাপমাত্রা ও চাপে ($\\mathrm{STP}$) কোন গ্যাসের $1.0$ গ্রাম সবচেয়ে বেশি আয়তন দখল করে? [DU'18-19]",
    options: ["$\\mathrm{N_{2}}$", "$\\mathrm{H_{2}}$", "$\\mathrm{O_{2}}$", "$\\mathrm{Ar}$"],
    correct_answer: "$\\mathrm{H_{2}}$",
    explanation: "$\\frac{W}{M} = \\frac{V_{L}}{22.4}$ এখানে, $V_{L} \\propto \\frac{1}{M}$, $\\mathrm{H_{2}}$ এর জন্য $M = 2\\,\\mathrm{g/mol}$ সবচেয়ে কম, তাই $V_{L}$ সবচেয়ে বেশি।",
    time_limit: 60
  },
  {
    id: 90124,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "২৪. প্রমাণ অবস্থায় $2.2\\,\\mathrm{g}$ $\\mathrm{CO_{2}}$ গ্যাসের আয়তন কত? [RU'18-19]",
    options: ["$1.12\\,\\mathrm{L}$", "$2.24\\,\\mathrm{L}$", "$1.02\\,\\mathrm{L}$", "$11.2\\,\\mathrm{L}$"],
    correct_answer: "$1.12\\,\\mathrm{L}$",
    explanation: "$V = \\frac{2.2}{44} \\times 22.4 = 1.12\\,\\mathrm{L}$",
    time_limit: 60
  },
  {
    id: 90125,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "২৫. একজন লোক একবার নিঃশ্বাসে $200\\,\\mathrm{mg}$ বাতাস গ্রহণ করে। যদি বাতাসে $20\\%$ (ভর) অক্সিজেন ধারণ করে তাহলে লোকটি একবার নিঃশ্বাসে কতগুলো অক্সিজেন অণু গ্রহণ করে? [KU'18-19]",
    options: ["$7.528 \\times 10^{12}$", "$7.528 \\times 10^{20}$", "$18.234 \\times 10^{12}$", "$18.234 \\times 10^{20}$"],
    correct_answer: "$7.528 \\times 10^{20}$",
    explanation: "$\\frac{W}{M} = \\frac{N}{N_{A}} \\Rightarrow \\frac{0.2 \\times 200 \\times 10^{-3}}{32} = \\frac{N}{N_{A}}$\n$N = 1.25 \\times 10^{-3} \\times 6.022 \\times 10^{23} = 7.528 \\times 10^{20}$",
    time_limit: 60
  },
  {
    id: 90126,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "২৬. এক ফোঁটা পানিতে বিদ্যমান মোট পরমাণুর সংখ্যা কত? (এক ফোঁটা পানির আয়তন $0.05\\,\\mathrm{cm^{3}}$, ঘনত্ব $1\\,\\mathrm{g/cm^{3}}$, আণবিক ভর $18$ এবং অ্যাভোগ্যাড্রো সংখ্যা $6 \\times 10^{23}$) [CU'17-18]",
    options: ["$\\frac{3 \\times 0.05}{18}$", "$\\frac{3 \\times 6 \\times 10^{23}}{18 \\times 0.05}$", "$\\frac{0.05 \\times 6 \\times 10^{23}}{18 \\times 3}$", "$\\frac{0.05 \\times 3 \\times 6 \\times 10^{23}}{18}$"],
    correct_answer: "$\\frac{0.05 \\times 3 \\times 6 \\times 10^{23}}{18}$",
    explanation: "$W = \\rho V$; $N = \\frac{W \\times N_{A} \\times 3}{M}$\n$= \\frac{\\rho \\times V \\times N_{A} \\times 3}{M} = \\frac{0.05 \\times 1 \\times 3 \\times 6 \\times 10^{23}}{18}$",
    time_limit: 60
  },
  {
    id: 90127,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "২৭. $2.00$ গ্রাম $\\mathrm{H_{2}O}$ তে কতটি হাইড্রোজেন পরমাণু আছে? [JU'16-17]",
    options: ["$1.3384 \\times 10^{23}$ টি", "$6.669 \\times 10^{22}$ টি", "$1.3384 \\times 10^{22}$ টি", "$6.023 \\times 10^{23}$ টি"],
    correct_answer: "$1.3384 \\times 10^{23}$ টি",
    explanation: "$N = \\frac{2}{18} \\times 6.023 \\times 10^{23} \\times 2$\n$= 1.338 \\times 10^{23}$ টি",
    time_limit: 60
  },
  {
    id: 90128,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "২৮. $2.2$ গ্রাম $\\mathrm{CO_{2}}$ গ্যাসের অণু সংখ্যা কত? [CU'16-17]",
    options: ["$2.5 \\times 10^{18}$", "$3.01 \\times 10^{22}$", "$3.5 \\times 10^{20}$", "$2.5 \\times 10^{22}$"],
    correct_answer: "$3.01 \\times 10^{22}$",
    explanation: "$\\frac{W}{M} = \\frac{N}{N_{A}} \\Rightarrow N = \\frac{W}{M} \\times N_{A}$\n$= \\frac{2.2}{44} \\times 6.023 \\times 10^{23} = 3.01 \\times 10^{22}$",
    time_limit: 60
  },
  {
    id: 90129,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "২৯. প্রমাণ তাপমাত্রা ও চাপে $1\\,\\mathrm{mL}$ নাইট্রোজেন গ্যাসে কয়টি অণু বিদ্যমান? [RU'15-16]",
    options: ["$6.022 \\times 10^{23}$ টি", "$3.011 \\times 10^{23}$ টি", "$15.022 \\times 10^{27}$ টি", "$2.6875 \\times 10^{19}$ টি"],
    correct_answer: "$2.6875 \\times 10^{19}$ টি",
    explanation: "প্রমাণ তাপমাত্রা ও চাপে, $22400\\,\\mathrm{mL}$ $\\mathrm{N_{2}}$ গ্যাসে থাকে $6.02 \\times 10^{23}$ টি অণু\n$\\therefore 1\\,\\mathrm{mL}$ $\\mathrm{N_{2}}$ গ্যাসে থাকে $\\frac{6.023 \\times 10^{23}}{22400}$\n$= 2.68 \\times 10^{19}$ টি অণু।",
    time_limit: 60
  },
  {
    id: 90130,
    topic: "রাসায়নিক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t01",
    question_text: "৩০. $\\mathrm{H_{2}SO_{4}}$ এর $2.0\\,\\mathrm{M}$ বৈশিষ্ট্যের $5.0$ লিটার দ্রবণ তৈরি করতে কী পরিমাণ $\\mathrm{H_{2}SO_{4}}$ এর প্রয়োজন হবে? [KU'13-14]",
    options: ["$5.0$ মোল", "$10$ মোল", "$2.5$ মোল", "$20$ মোল"],
    correct_answer: "$10$ মোল",
    explanation: "$n = SV = (2 \\times 5)$ মোল $= 10$ মোল",
    time_limit: 60
  },
  // --- T-02: সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা ---
  {
    id: 90231,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৩১. $a\\mathrm{KClO_{3}} \\rightarrow b\\mathrm{KClO_{4}} + c\\mathrm{KCl}$ এই সমতাকৃত বিক্রিয়ায় $b:c$ এর মান কত? [DU'25-26]",
    options: ["2: 3", "1: 2", "3: 2", "3: 1"],
    correct_answer: "3: 1",
    explanation: "$4\\mathrm{KClO_{3}} \\rightarrow 3\\mathrm{KClO_{4}} + \\mathrm{KCl}$",
    time_limit: 60
  },
  {
    id: 90232,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৩২. একই অবস্থায় কোন ধাতুর $1.0\\,\\mathrm{g}$ জলীয় $\\mathrm{HCl}$ এর সাথে বিক্রিয়া করে সবচেয়ে বেশি আয়তনের $\\mathrm{H_{2}}$ গ্যাস তৈরি করে? [DU'25-26]",
    options: ["$\\mathrm{Na}$", "$\\mathrm{Ca}$", "$\\mathrm{K}$", "$\\mathrm{Mg}$"],
    correct_answer: "$\\mathrm{Mg}$",
    explanation: "(i): $\\mathrm{2Na + 2HCl \\rightarrow 2NaCl + H_{2}}$\n$V_{H_{2}} \\propto \\frac{n_{Na}}{2} = \\frac{1}{2 \\times 23} = \\frac{1}{46}$\n(ii) $\\mathrm{Ca + 2HCl \\rightarrow CaCl_{2} + H_{2}}$\n$V_{H_{2}} \\propto n_{Ca} = \\frac{1}{40}$\n(iii) $\\mathrm{2K + 2HCl \\rightarrow 2KCl + H_{2}}$\n$V_{H_{2}} \\propto \\frac{n_{K}}{2} = \\frac{1}{39 \\times 2} = \\frac{1}{78}$\n(iv) $\\mathrm{Mg + 2HCl \\rightarrow MgCl_{2} + H_{2}}$\n$V_{H_{2}} \\propto n_{Mg} = \\frac{1}{24}$\n$\\because \\frac{1}{24} > \\frac{1}{40} > \\frac{1}{46} > \\frac{1}{78}$\n$\\therefore 1\\,\\mathrm{g}$ $\\mathrm{Mg}$ থেকে সবচেয়ে বেশি আয়তনের $\\mathrm{H_{2}}$ গ্যাস উৎপন্ন হবে। অথবা,\n[এখানে চিত্র ছিল]\nসমভরের ধাতুর জন্য যার তুল্যভর সর্বনিম্ন, তা হতে সর্বাধিক আয়তনের $\\mathrm{H_{2}}$ গ্যাস উৎপন্ন হবে।",
    time_limit: 60
  },
  {
    id: 90233,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৩৩. $12\\,\\mathrm{g}$ কয়লা পোড়ালে কত গ্রাম $\\mathrm{CO_{2}}$ পাওয়া যায়? [CU'25-26]",
    options: ["$44\\,\\mathrm{g}$", "$32\\,\\mathrm{g}$", "$24\\,\\mathrm{g}$", "$28\\,\\mathrm{g}$"],
    correct_answer: "$44\\,\\mathrm{g}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 90234,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৩৪. $১$ মোল $\\mathrm{C_{2}H_{5}OH}$ এর দহনে কত মোল $\\mathrm{CO_{2}}$ উৎপন্ন হয়? [HSTU'25-26]",
    options: ["$২$ মোল", "$১$ মোল", "$৩$ মোল", "$১৬$ মোল"],
    correct_answer: "$২$ মোল",
    explanation: "$\\mathrm{C_{2}H_{5}OH + 3O_{2} \\rightarrow 2CO_{2} + 3H_{2}O}$",
    time_limit: 60
  },
  {
    id: 90235,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৩৫. $2.5$ গ্রাম $\\mathrm{CaCO_{3}}$ থেকে $\\mathrm{NTP}$-তে কী পরিমাণ $\\mathrm{CO_{2}}$ উৎপন্ন হবে? [DU'23-24; Agri'21-22]",
    options: ["$22.4\\,\\mathrm{L}$", "$0.56\\,\\mathrm{L}$", "$5.6\\,\\mathrm{L}$", "$11.2\\,\\mathrm{L}$"],
    correct_answer: "$0.56\\,\\mathrm{L}$",
    explanation: "(সঠিক উত্তর নেই); $\\mathrm{CaCO_{3} \\rightarrow CaO + CO_{2}}$\n$\\frac{W}{M} = \\frac{V_{NTP}}{24.04} \\Rightarrow \\frac{2.5}{100} = \\frac{V_{NTP}}{24.04} \\Rightarrow V = 0.601\\,\\mathrm{L}$\nSTP বিবেচনায়, $V_{STP} = \\frac{2.5}{100} \\times 22.4 = 0.56\\,\\mathrm{L}$\nসঠিক উত্তর $0.601\\,\\mathrm{L}$ হবে যা অপশনে নেই।",
    time_limit: 60
  },
  {
    id: 90236,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৩৬. $\\mathrm{Fe(s) + H_{2}SO_{4}(l) = FeSO_{4}(l) + H_{2}(g)}$ সমীকরণ অনুযায়ী $27^{\\circ}\\mathrm{C}$ তাপমাত্রায় $1.0\\,\\mathrm{atm}$ চাপে $200\\,\\mathrm{L}$ হাইড্রোজেন গ্যাস প্রস্তুত করতে কী পরিমাণ লোহার প্রয়োজন হবে? $[\\mathrm{Fe=56, S=32}]$ [GST'23-24]",
    options: ["$4.52\\,\\mathrm{g}$", "$4.55\\,\\mathrm{kg}$", "$452\\,\\mathrm{g}$", "$455\\,\\mathrm{g}$"],
    correct_answer: "$455\\,\\mathrm{g}$",
    explanation: "$\\mathrm{Fe + H_{2}SO_{4} \\rightarrow FeSO_{4} + H_{2}}$\n$1$ মোল $\\mathrm{Fe} \\equiv 1$ মোল $\\mathrm{H_{2}}$\n$\\mathrm{H_{2}}$ এর মোলসংখ্যা $= \\frac{PV}{RT} = \\frac{1 \\times 200}{0.0821(273+27)}$\n$= 8.12$ মোল $\\therefore \\mathrm{Fe}$ এর পরিমাণ $= (56 \\times 8.12)\\,\\mathrm{g}$\n$= 454.75\\,\\mathrm{g} \\approx 455\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90237,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৩৭. $100\\,\\mathrm{g}$ চুনাপাথরকে তাপে সম্পূর্ণরূপে বিযোজিত করলে কী পরিমাণ চুন পাওয়া যাবে? [RU'23-24]",
    options: ["$28\\,\\mathrm{g}$", "$56\\,\\mathrm{g}$", "$44\\,\\mathrm{g}$", "$100\\,\\mathrm{g}$"],
    correct_answer: "$56\\,\\mathrm{g}$",
    explanation: "$\\mathrm{CaCO_{3} \\rightleftharpoons CaO + CO_{2}}$\n$100\\,\\mathrm{g} \\equiv 56\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90238,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৩৮. $1\\,\\mathrm{mol}$ গ্লুকোজ জারিত করতে $\\mathrm{STP}$-তে কত লিটার $\\mathrm{O_{2}}$ প্রয়োজন? [RU'23-24]",
    options: ["$130.0$", "$134.4$", "$140.4$", "$22.4$"],
    correct_answer: "$134.4$",
    explanation: "$\\mathrm{C_{6}H_{12}O_{6}(s) + 6O_{2}(g) \\rightarrow 6CO_{2}(g) + 6H_{2}O(l)}$\n$1\\,\\mathrm{mol}$ গ্লুকোজ জারিত করতে $6\\,\\mathrm{mol}$\n$= 6 \\times 22.4\\,\\mathrm{L}\\ (\\mathrm{STP}) = 134.4\\,\\mathrm{L}$ অক্সিজেন প্রয়োজন।",
    time_limit: 60
  },
  {
    id: 90239,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৩৯. নরমাল চাপে $84\\,\\mathrm{g}$ $\\mathrm{KNO_{3}}$ কে উত্তপ্ত করলে কত $\\mathrm{L}$ $\\mathrm{O_{2}}$ উৎপন্ন হবে? [RU'22-23]",
    options: ["$9.314$", "$3.914$", "$1.934$", "$2.93$"],
    correct_answer: "$9.314$",
    explanation: "$\\mathrm{2KNO_{3} \\rightarrow 2KNO_{2} + O_{2}}$\n$202\\,\\mathrm{g} \\equiv 22.4\\,\\mathrm{L}$\n$202\\,\\mathrm{g}$ $\\mathrm{KNO_{3}}$ থেকে $\\mathrm{O_{2}}$ উৎপন্ন হয় $22.4\\,\\mathrm{L}$\n$\\therefore 84\\,\\mathrm{g}$ $\\mathrm{KNO_{3}}$ থেকে $\\mathrm{O_{2}}$ উৎপন্ন হয় $\\left(\\frac{22.4}{202} \\times 84\\right)\\,\\mathrm{L}$\n$= 9.314\\,\\mathrm{L}$",
    time_limit: 60
  },
  {
    id: 90240,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৪০. প্রমাণ অবস্থায় $1\\,\\mathrm{kg}$ $\\mathrm{CaCO_{3}}$ লঘু $\\mathrm{HCl}$ এ দ্রবীভূত করলে কত $\\mathrm{L}$ $\\mathrm{CO_{2}}$ গ্যাস পাওয়া যায়? [RU'21-22]",
    options: ["$22.4$", "$224$", "$10$", "$2240$"],
    correct_answer: "$224$",
    explanation: "$\\mathrm{CaCO_{3} + 2HCl \\rightarrow CaCl_{2} + H_{2}O + CO_{2}}$\n$100\\,\\mathrm{g} \\equiv 22.4\\,\\mathrm{L}$\n$100\\,\\mathrm{g}$ $\\mathrm{CaCO_{3}} \\rightarrow 22.4\\,\\mathrm{L}$ $\\mathrm{CO_{2}}$\n$\\therefore 1000\\,\\mathrm{g}$ $\\mathrm{CaCO_{3}} \\rightarrow \\frac{22.4 \\times 1000}{100} = 224\\,\\mathrm{L}$",
    time_limit: 60
  },
  {
    id: 90241,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৪১. $\\mathrm{MnO_{2}}$ এর উপস্থিতিতে $\\mathrm{KClO_{3}}$ কে উত্তপ্ত করলে অক্সিজেন উৎপন্ন হয়। উৎপাদিত অক্সিজেনের পরিমাণ $96\\,\\mathrm{g}$ হলে এ বিক্রিয়ায় উৎপাদিত $\\mathrm{KCl(M = 74.6)}$ এর পরিমাণ কত $\\mathrm{g}$? [GST'20-21]",
    options: ["$74.6$", "$223.8$", "$37.3$", "$149.2$"],
    correct_answer: "$149.2$",
    explanation: "$\\mathrm{2KClO_{3} \\xrightarrow[\\mathrm{MnO_{2}}]{\\Delta} 2KCl + 3O_{2}}$\n$2 \\times 74.6 = 149.2\\,\\mathrm{g} \\equiv 3 \\times 32 = 96\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90242,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৪২. লিথিয়াম হাইড্রোজেন কার্বনেট $\\mathrm{LiHCO_{3}}$ কে তাপ দিলে তা ভেঙ্গে $\\mathrm{Li_{2}O, CO_{2}}$ এবং $\\mathrm{H_{2}O}$ গঠন করে। $0.5\\,\\mathrm{mol}$ $\\mathrm{LiHCO_{3}}$ কে তাপ দিলে কত $\\mathrm{mol}$ $\\mathrm{H_{2}O}$ গঠিত হয়? [RU'20-21]",
    options: ["$0.25\\,\\mathrm{mol}$", "$0.5\\,\\mathrm{mol}$", "$0.75\\,\\mathrm{mol}$", "$1.0\\,\\mathrm{mol}$"],
    correct_answer: "$0.25\\,\\mathrm{mol}$",
    explanation: "$\\mathrm{2LiHCO_{3} \\xrightarrow{\\Delta} Li_{2}O + H_{2}O + 2CO_{2}}$\n$\\therefore 2\\,\\mathrm{mol}$ $\\mathrm{LiHCO_{3} \\rightarrow 1\\,\\mathrm{mol}}$ $\\mathrm{H_{2}O}$\n$\\therefore 0.5\\,\\mathrm{mol}$ $\\mathrm{LiHCO_{3}} = \\frac{1}{2} \\times 0.5\\,\\mathrm{mol}$ $\\mathrm{H_{2}O}$\n$= 0.25\\,\\mathrm{mol}$ $\\mathrm{H_{2}O}$",
    time_limit: 60
  },
  {
    id: 90243,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৪৩. $50\\,\\mathrm{g}$ $\\mathrm{CaCO_{3}}$ এর তাপীয় বিয়োজনে উৎপন্ন $\\mathrm{CO_{2}}$ এর ভর কত? [RU'19-20; JU'19-20]",
    options: ["$11\\,\\mathrm{g}$", "$22\\,\\mathrm{g}$", "$44\\,\\mathrm{g}$", "$88\\,\\mathrm{g}$"],
    correct_answer: "$22\\,\\mathrm{g}$",
    explanation: "$\\mathrm{CaCO_{3} \\rightarrow CaO + CO_{2}}$\n$100\\,\\mathrm{g} \\equiv 44\\,\\mathrm{g}$\n$\\therefore 100\\,\\mathrm{g}$ $\\mathrm{CaCO_{3}}$ এর বিয়োজনে উৎপন্ন $\\mathrm{CO_{2}} = 44\\,\\mathrm{g}$\n$\\therefore 50\\,\\mathrm{g}$ $\\mathrm{CaCO_{3}}$ এর বিয়োজনে উৎপন্ন $\\mathrm{CO_{2}} = 22\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90244,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৪৪. $5$ গ্রাম $\\mathrm{KClO_{3}}$ সম্পূর্ণ বিয়োজিত হলে প্রমাণ তাপমাত্রা ও চাপে কত $\\mathrm{mL}$ অক্সিজেন পাওয়া যায়? [KU'19-20; RU'15-16]",
    options: ["$274.3$", "$457.16$", "$1275.5$", "$1371.5$"],
    correct_answer: "$1371.5$",
    explanation: "$\\mathrm{2KClO_{3} \\rightarrow 2KCl + 3O_{2}}$\n$245.2\\,\\mathrm{g} \\equiv (22.4 \\times 3)\\,\\mathrm{L}$\n$245.2\\,\\mathrm{g}$ $\\mathrm{KClO_{3}} \\equiv 3 \\times 22.4\\,\\mathrm{L}$ $\\mathrm{O_{2}}$\n$1\\,\\mathrm{g}$ $\\mathrm{KClO_{3}} \\equiv \\frac{3 \\times 22.4}{245.2}\\,\\mathrm{L}$ $\\mathrm{O_{2}}$\n$5\\,\\mathrm{g}$ $\\mathrm{KClO_{3}} \\equiv \\left(\\frac{3 \\times 22.4}{245.2} \\times 5\\right)\\,\\mathrm{L}$ $\\mathrm{O_{2}}$\n$= 1.37\\,\\mathrm{L}$ $\\mathrm{O_{2}} = 1370\\,\\mathrm{mL}$ $\\mathrm{O_{2}} \\approx 1371.5$",
    time_limit: 60
  },
  {
    id: 90245,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৪৫. $6$ গ্রাম কার্বনকে বাতাসে সম্পূর্ণরূপে দহন করতে কতগুলো অক্সিজেন অণু প্রয়োজন হবে? [SUST'19-20]",
    options: ["$3.01 \\times 10^{23}$", "$1.0 \\times 10^{23}$", "$5.02 \\times 10^{22}$", "$1.88 \\times 10^{22}$"],
    correct_answer: "$3.01 \\times 10^{23}$",
    explanation: "$\\mathrm{C + O_{2} \\rightarrow CO_{2}}$\n$1\\,\\mathrm{mole}$ $\\mathrm{C \\equiv 1\\,\\mathrm{mol}}$ $\\mathrm{O_{2}}$\n$6\\,\\mathrm{g}$ $\\mathrm{C = \\frac{6}{12}\\,\\mathrm{mol}}$ $\\mathrm{C = 0.5\\,\\mathrm{mol}}$ $\\mathrm{C}$\n$= \\mathrm{O_{2}}$ অণু প্রয়োজন $= 6.02 \\times 10^{23} \\times 0.5$\n$= 3.01 \\times 10^{23}$ টি",
    time_limit: 60
  },
  {
    id: 90246,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৪৬. $2.2\\,\\mathrm{g}$ $\\mathrm{C_{3}H_{8}}$ পূর্ণ দহন করে $\\mathrm{CO_{2}}$ ও $\\mathrm{H_{2}O}$ তৈরি করতে কত মোল $\\mathrm{O_{2}}$ প্রয়োজন? [DU'18-19]",
    options: ["$0.05$", "$0.15$", "$0.25$", "$0.50$"],
    correct_answer: "$0.25$",
    explanation: "$\\mathrm{C_{3}H_{8} + 5O_{2} \\rightarrow 3CO_{2} + 4H_{2}O}$\n$44\\,\\mathrm{g}$ $\\mathrm{C_{3}H_{8} \\equiv 5\\,\\mathrm{mole}}$ $\\mathrm{O_{2}}$; $2.2\\,\\mathrm{g}$ $\\mathrm{C_{3}H_{8} \\equiv \\frac{5 \\times 2.2}{44}}$\n$= 0.25\\,\\mathrm{mole}$ $\\mathrm{O_{2}}$",
    time_limit: 60
  },
  {
    id: 90247,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৪৭. $\\mathrm{STP}$ তে $159\\,\\mathrm{g}$ $\\mathrm{Cu_{2}S}$ বাতাসে পোড়ালে কতটি $\\mathrm{SO_{2}}$ অণু তৈরি হবে? [RU'18-19]",
    options: ["$6.022 \\times 10^{23}$", "$6.022 \\times 10^{-23}$", "$6.203 \\times 10^{23}$", "$6.203 \\times 10^{-23}$"],
    correct_answer: "$6.022 \\times 10^{23}$",
    explanation: "$\\mathrm{Cu_{2}S + O_{2} \\rightarrow 2Cu + SO_{2}}$\n$1\\,\\mathrm{mol} \\equiv 1\\,\\mathrm{mol}$\n$159\\,\\mathrm{g} \\equiv 6.022 \\times 10^{23}$ টি",
    time_limit: 60
  },
  {
    id: 90248,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৪৮. $2\\,\\mathrm{g}$ কার্বনকে বাতাসে দহন করলে উৎপন্ন $\\mathrm{CO_{2}}$ এর আয়তন প্রমাণ অবস্থায় কত? [JU'18-19]",
    options: ["$3.73\\,\\mathrm{L}$", "$1.04\\,\\mathrm{L}$", "$2.80\\,\\mathrm{L}$", "$7.63\\,\\mathrm{L}$"],
    correct_answer: "$3.73\\,\\mathrm{L}$",
    explanation: "$\\frac{V}{22.4} = \\frac{W}{M} \\Rightarrow \\frac{V}{22.4} = \\frac{2}{12} \\Rightarrow V = 3.73\\,\\mathrm{L}$",
    time_limit: 60
  },
  {
    id: 90249,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৪৯. চুনাপাথরের একটি নমুনায় $96\\%$ $\\mathrm{CaCO_{3}}$ আছে। লঘু $\\mathrm{HCl}$-এ $150\\,\\mathrm{g}$ চুনাপাথর দ্রবীভূত করে $\\mathrm{STP}$-তে কত লিটার $\\mathrm{CO_{2}}$ পাওয়া যাবে? [KU'18-19]",
    options: ["$25.26$", "$30.26$", "$32.26$", "$35.26$"],
    correct_answer: "$32.26$",
    explanation: "$\\mathrm{CaCO_{3} + 2HCl \\rightarrow CaCl_{2} + CO_{2} + H_{2}O}$\n$\\therefore 0.96 \\times \\frac{150}{100} = \\frac{V_{L}}{22.4} \\therefore V_{L} = 32.26\\,\\mathrm{L}$",
    time_limit: 60
  },
  {
    id: 90250,
    topic: "সমীকরণ বিষয়ক গণনা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t02",
    question_text: "৫০. $75\\%$ বিশুদ্ধ $2$ কেজি চুনাপাথরকে সম্পূর্ণরূপে বিযোজিত করলে প্রমাণ উষ্ণতা ও চাপে কত লিটার $\\mathrm{CO_{2}}$ উৎপন্ন হবে? [JU'15-16]",
    options: ["$68$", "$268$", "$22.4$", "কোনটিই নয়"],
    correct_answer: "কোনটিই নয়",
    explanation: "$\\mathrm{CaCO_{3} \\xrightarrow{\\Delta} CaO + CO_{2}}$ এবং চুনাপাথরে $\\mathrm{CaCO_{3}}$\n$100\\,\\mathrm{g} \\equiv 22.4\\,\\mathrm{L}$\nআছে $= (0.75 \\times 2)\\,\\mathrm{kg} = 1.5\\,\\mathrm{kg}$\nসুতরাং, $0.1\\,\\mathrm{kg}$ $\\mathrm{CaCO_{3}}$ থেকে প্রমাণ উষ্ণতা ও চাপে $\\mathrm{CO_{2}}$ পাওয়া যায় $= 22.4\\,\\mathrm{L}$\n$\\therefore 1.5\\,\\mathrm{kg}$ $\\mathrm{CaCO_{3}}$ থেকে প্রমাণ উষ্ণতা ও চাপে $\\mathrm{CO_{2}}$ পাওয়া যায় $= \\frac{22.4 \\times 1.5}{0.1}\\,\\mathrm{L} = 336\\,\\mathrm{L}$",
    time_limit: 60
  },
  // --- T-03: ঘনমাত্রা সংক্রান্ত সমস্যা ---
  {
    id: 90351,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৫১. $10\\%$ $\\mathrm{Na_{2}CO_{3}}$ দ্রবণের মোলার ঘনমাত্রা কত হবে? [JnU'25-26; HSTU'24-25; JnU'14-15; RU'12-13; JU'11-12]",
    options: ["$0.9434\\,\\mathrm{mol\\,kg^{-1}}$", "$0.9434\\,\\mathrm{mol\\,L^{-1}}$ (খ)", "$0.9434\\,\\mathrm{mol\\,L^{-1}}$ (গ)", "$9.4340\\,\\mathrm{mol\\,L^{-1}}$"],
    correct_answer: "$0.9434\\,\\mathrm{mol\\,L^{-1}}$ (খ)",
    explanation: "$S = \\frac{10X}{M} = \\frac{10 \\times 10}{106} = 0.94\\,\\mathrm{mol\\,L^{-1}}$",
    time_limit: 60
  },
  {
    id: 90352,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৫২. $1.25\\,\\mathrm{M}$ এর $\\mathrm{NaOH}$ এর $500\\,\\mathrm{mL}$ দ্রবণে কত গ্রাম $\\mathrm{NaOH}$ আছে? [JU'25-26]",
    options: ["$2.50$", "$25.0$", "$5.20$", "$52.0$"],
    correct_answer: "$25.0$",
    explanation: "$W = \\frac{SMV}{1000} = \\frac{1.25 \\times 40 \\times 500}{1000} = 25\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90353,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৫৩. $0.01\\,\\mathrm{ppm}$ $\\mathrm{Pb^{2+}}$ আয়নের দ্রবণে প্রতি লিটারে কত গ্রাম আয়ন আছে? [JU'25-26]",
    options: ["$10 \\times 10^{5}$", "$10 \\times 10^{-5}$", "$1.0 \\times 10^{5}$", "$1.0 \\times 10^{-5}$"],
    correct_answer: "$1.0 \\times 10^{-5}$",
    explanation: "$0.01\\,\\mathrm{ppm} \\Rightarrow 0.01\\,\\mathrm{mg/L}$\n$\\Rightarrow 0.01 \\times 10^{-3}\\,\\mathrm{g/L}$ অর্থাৎ, $1 \\times 10^{-5}\\,\\mathrm{g/L}$",
    time_limit: 60
  },
  {
    id: 90354,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৫৪. $500\\,\\mathrm{mL}$ $0.1\\,\\mathrm{M}$ $\\mathrm{C_{6}H_{12}O_{6}}$ প্রস্তুত করতে কত গ্রাম $\\mathrm{C_{6}H_{12}O_{6}}$ ($180.20\\,\\mathrm{g\\,mol^{-1}}$) লাগবে? [JU'25-26]",
    options: ["$180.20\\,\\mathrm{g}$", "$90.10\\,\\mathrm{g}$", "$18.02\\,\\mathrm{g}$", "$9.01\\,\\mathrm{g}$"],
    correct_answer: "$9.01\\,\\mathrm{g}$",
    explanation: "$S = \\frac{n}{V} \\Rightarrow 0.1 = \\frac{\\frac{W}{180.20}}{0.5} \\Rightarrow W = 9.01\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90355,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৫৫. মোলার ঘনমাত্রা নির্ণয় কর: $250\\,\\mathrm{ml}$ দ্রবণে $5\\,\\mathrm{g}$ $\\mathrm{NaOH}$। [JU'25-26; RU'24-25]",
    options: ["$0.05\\,\\mathrm{mM}$", "$0.5\\,\\mathrm{mM}$", "$0.05\\,\\mathrm{M}$", "$0.5\\,\\mathrm{M}$"],
    correct_answer: "$0.5\\,\\mathrm{M}$",
    explanation: "$S = \\frac{W \\times 1000}{MV_{(mL)}} = \\frac{5 \\times 1000}{40 \\times 250} = 0.5\\,\\mathrm{M}$",
    time_limit: 60
  },
  {
    id: 90356,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৫৬. পানিতে $585\\,\\mathrm{ppm}$ $\\mathrm{NaCl}$ থাকলে, মোলারিটি কত? [JU'25-26; RU'24-25]",
    options: ["$0.01\\,\\mathrm{mM}$", "$0.01\\,\\mathrm{M}$", "$0.1\\,\\mathrm{M}$", "$0.1\\,\\mathrm{mM}$"],
    correct_answer: "$0.01\\,\\mathrm{M}$",
    explanation: "$\\mathrm{NaCl} = 585\\,\\mathrm{ppm} = 585\\,\\mathrm{mg/L}$\n$= 585 \\times 10^{-3}\\,\\mathrm{g/L}$\n$= \\frac{585 \\times 10^{-3}}{58.5}\\,\\mathrm{mol/L} = 0.01\\,\\mathrm{M}$",
    time_limit: 60
  },
  {
    id: 90357,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৫৭. $\\mathrm{H_{2}SO_{4}}$ দ্রবণের মোলালিটি এবং মোলারিটি যথাক্রমে $94.13$ এবং $11.12$। ঐ দ্রবণের ঘনত্ব কত $\\mathrm{gL^{-1}}$? [RU'25-26]",
    options: ["$1.10$", "$1.20$", "$1.30$", "$1.40$"],
    correct_answer: "$1.20$",
    explanation: "$1\\,\\mathrm{kg}$ $\\mathrm{H_{2}O}$ তে থাকে $= 94.13\\,\\mathrm{mole}$ $\\mathrm{H_{2}SO_{4}}$\n$= (94.13 \\times 98) = 9224.74\\,\\mathrm{g}$ $\\mathrm{H_{2}SO_{4}}$\n$\\therefore$ মোট ভর $= (9224.74 + 1000) = 10224.74\\,\\mathrm{g}$\n$1\\,\\mathrm{L}$ দ্রবণে $\\mathrm{H_{2}SO_{4}}$ থাকে $= 11.12\\,\\mathrm{mol}$\n$\\therefore 11.12\\,\\mathrm{mol}$ $\\mathrm{H_{2}SO_{4}}$ থাকে $1\\,\\mathrm{L}$ দ্রবণে\n$\\therefore 94.13\\,\\mathrm{mol}$ $\\mathrm{H_{2}SO_{4}}$ থাকে $\\frac{94.13}{11.12} = 8.46\\,\\mathrm{L}$ দ্রবণে\n$\\therefore \\rho = \\frac{10224.74}{8.46} = 1208.598\\,\\mathrm{g\\,L^{-1}}$\n$= 1.208598\\,\\mathrm{g\\,mL^{-1}}$\n[বি. দ্র.: প্রশ্নটি ত্রুটিপূর্ণ। প্রশ্নে উল্লিখিত $\\mathrm{gL^{-1}}$ এর পরিবর্তে $\\mathrm{g\\,mL^{-1}}$ হবে।]",
    time_limit: 60
  },
  {
    id: 90358,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৫৮. $\\mathrm{C_{6}H_{12}O_{6}}$ এর ঘনমাত্রা $500\\,\\mathrm{\\mu M}$ হলে, $\\mathrm{ppm}$ এ ঘনমাত্রা হবে— [RU'25-26]",
    options: ["$60$", "$90$", "$120$", "$180$"],
    correct_answer: "$90$",
    explanation: "$\\mathrm{ppm} = SM \\times 10^{3}$\n$= 500 \\times 10^{-6} \\times 180 \\times 10^{3} = 90\\,\\mathrm{ppm}$",
    time_limit: 60
  },
  {
    id: 90359,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৫৯. $50\\,\\mathrm{mL}$, $0.5\\,\\mathrm{M}$ $\\mathrm{HCl}$ কে $250\\,\\mathrm{mL}$ $0.1\\,\\mathrm{M}$ দ্রবণে পরিণত করলে কোনটি ধ্রুবক থাকে? [RU'25-26]",
    options: ["$\\mathrm{pH}$", "তাপ", "মোল সংখ্যা", "$\\mathrm{HCl}$ ও $\\mathrm{H_{2}O}$ অণুর অনুপাত"],
    correct_answer: "মোল সংখ্যা",
    explanation: "$n_{1} = V_{(L)}S = 0.05 \\times 0.5 = 0.025\\,\\mathrm{mol}$\n$n_{2} = 0.25 \\times 0.1 = 0.025\\,\\mathrm{mol}$\n$\\therefore n_{1} = n_{2}$",
    time_limit: 60
  },
  {
    id: 90360,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৬০. একটি পানির নমুনায় দ্রবণীয় $\\mathrm{O_{2}}$ এর ঘনমাত্রা $8\\,\\mathrm{ppm}$ হলে $\\mathrm{mM}$ এ $\\mathrm{O_{2}}$ এর ঘনমাত্রা কত? [RU'25-26]",
    options: ["$0.10$", "$0.15$", "$0.20$", "$0.25$"],
    correct_answer: "$0.25$",
    explanation: "$S = \\frac{\\mathrm{ppm}}{M \\times 10^{3}} = \\frac{8}{32 \\times 10^{3}}$\n$= 0.25 \\times 10^{-3} = 0.25\\,\\mathrm{mM}$",
    time_limit: 60
  },
  {
    id: 90361,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৬১. $250\\,\\mathrm{mL}$ $10\\,\\mathrm{mM}$ $\\mathrm{KMnO_{4}}$ দ্রবণ প্রস্তুত করার জন্য কত $\\mathrm{g}$ $\\mathrm{KMnO_{4}}$ প্রয়োজন? $[\\mathrm{KMnO_{4}} \\text{ এর } MW = 158]$ [RU'25-26]",
    options: ["$4.0$", "$40.0$", "$0.4$", "$0.44$"],
    correct_answer: "$0.4$",
    explanation: "$W = \\frac{SMV}{1000} = \\frac{10 \\times 10^{-3} \\times 158 \\times 250}{1000} = 0.4\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90362,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৬২. $\\mathrm{K_{2}Cr_{2}O_{7}}$ এর $250\\,\\mathrm{mL}$ $0.1\\mathrm{N}$ দ্রবণ তৈরি করতে কত গ্রাম $\\mathrm{K_{2}Cr_{2}O_{7}}$ ($\\mathrm{M_{w} = 294}$) প্রয়োজন? [CU'25-26]",
    options: ["$2.3241\\,\\mathrm{g}$", "$3.1620\\,\\mathrm{g}$", "$5.1370\\,\\mathrm{g}$", "$1.2250\\,\\mathrm{g}$"],
    correct_answer: "$1.2250\\,\\mathrm{g}$",
    explanation: "$N = S \\times e$\n$\\Rightarrow 0.1 = \\frac{\\frac{W}{M}}{V} \\times e \\Rightarrow 0.1 = \\frac{\\frac{W}{294}}{\\frac{250}{1000}} \\times 6$\n$\\Rightarrow W = 1.2250\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90363,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৬৩. $10\\%$ ($\\mathrm{w/w}$) $\\mathrm{NaOH}$ দ্রবণে পানির মোল ভগ্নাংশ কত? [SUST'25-26]",
    options: ["$0.952$", "$0.922$", "$0.942$", "$0.932$"],
    correct_answer: "$0.952$",
    explanation: "পানির মোল ভগ্নাংশ $= \\frac{\\frac{90}{18}}{\\frac{10}{40} + \\frac{90}{18}} = 0.952$",
    time_limit: 60
  },
  {
    id: 90364,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৬৪. $10\\,\\mathrm{ml}$ $0.1\\,\\mathrm{M}$ $\\mathrm{NaOH}$ দ্রবণে কত গ্রাম $\\mathrm{NaOH}$ থাকে? [HSTU'25-26]",
    options: ["$0.004\\,\\mathrm{g}$", "$0.04\\,\\mathrm{g}$", "$0.4\\,\\mathrm{g}$", "$4.0\\,\\mathrm{g}$"],
    correct_answer: "$0.04\\,\\mathrm{g}$",
    explanation: "$W = \\frac{SMV}{1000} = \\frac{0.1 \\times 40 \\times 10}{1000} = 0.04\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90365,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৬৫. কোনটি তাপমাত্রার উপর নির্ভরশীল? [HSTU'25-26; KU'14-15]",
    options: ["মোলালিটি", "মোল ভগ্নাংশ", "শতকরা ভর ($\\mathrm{W/W}$)", "মোলারিটি"],
    correct_answer: "মোলারিটি",
    explanation: "",
    time_limit: 60
  },
  {
    id: 90366,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৬৬. $10\\%$ $\\mathrm{Na_{2}CO_{3}}$ দ্রবণের ঘনমাত্রা নরমালিটিতে কত? [CU'25-26]",
    options: ["$1.89\\,\\mathrm{N}$", "$1.79\\,\\mathrm{N}$", "$1.49\\,\\mathrm{N}$", "$1.29\\,\\mathrm{N}$"],
    correct_answer: "$1.89\\,\\mathrm{N}$",
    explanation: "$S = \\frac{10 \\times x}{M} = \\frac{10 \\times 10}{106} = 0.943$\n$\\therefore N = S \\times e = 0.943 \\times 2 = 1.89\\,\\mathrm{N}$",
    time_limit: 60
  },
  {
    id: 90367,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৬৭. $6.02 \\times 10^{20}$ অণু ইউরিয়া $100\\,\\mathrm{mL}$ দ্রবণে বিদ্যমান। উক্ত ইউরিয়া দ্রবণের ঘনমাত্রা কত মোলার? [RU'24-25]",
    options: ["$0.001$", "$0.1$", "$0.02$", "$0.01$"],
    correct_answer: "$0.01$",
    explanation: "$n = \\frac{SV}{1000} = \\frac{N}{N_{A}}$\n$\\Rightarrow S = \\frac{N \\times 1000}{N_{A} \\times V} = \\frac{6.02 \\times 10^{20} \\times 1000}{6.02 \\times 10^{23} \\times 100}$\n$\\therefore S = \\frac{1}{100} = 0.01\\,\\mathrm{mol\\,L^{-1}}$",
    time_limit: 60
  },
  {
    id: 90368,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৬৮. $0.1\\,\\mathrm{M}$ $\\mathrm{Na_{2}CO_{3}}$ দ্রবণের ঘনমাত্রা ($\\%,\\mathrm{w/v}$) এককে কত? [JU'24-25]",
    options: ["$1.60$", "$1.06$", "$1.006$", "$1.0006$"],
    correct_answer: "$1.06$",
    explanation: "$S = \\frac{10 \\times x}{M} \\Rightarrow x = \\frac{SM}{10} = \\frac{0.1 \\times 106}{10} = 1.06$",
    time_limit: 60
  },
  {
    id: 90369,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৬৯. $3.5\\,\\mathrm{g}$ ভরের ট্যাবলেটে $40.5\\,\\mathrm{mg}$ $\\mathrm{Ca}$ থাকলে ঐ ট্যাবলেটে $\\mathrm{Ca}$ এর ঘনমাত্রা কত $\\mathrm{ppm}$? [JU'24-25]",
    options: ["$1.106 \\times 10^{3}$", "$1.610 \\times 10^{5}$", "$1.160 \\times 10^{4}$", "$1.016 \\times 10^{4}$"],
    correct_answer: "$1.160 \\times 10^{4}$",
    explanation: "$\\mathrm{ppm} = \\frac{\\text{দ্রবের ভর (mg)}}{\\text{দ্রবণের ভর (kg)}} = \\frac{40.5}{3.5 \\times 10^{-3}} = 1.16 \\times 10^{4}$",
    time_limit: 60
  },
  {
    id: 90370,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৭০. $0.2$ molar ($\\mathrm{M}$) $\\mathrm{NaOH}$ দ্রবণের ঘনমাত্রা $\\%(\\mathrm{w/v})$ এককে কত হবে? [KU'24-25]",
    options: ["$0.60$", "$0.80$", "$0.20$", "$0.40$"],
    correct_answer: "$0.80$",
    explanation: "$S = \\frac{10x}{M} \\Rightarrow 0.2 = \\frac{10x}{40} \\therefore x = 0.8$",
    time_limit: 60
  },
  {
    id: 90371,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৭১. $250\\,\\mathrm{mL}$ $\\mathrm{Na_{2}CO_{3}}$ দ্রবণের ঘনত্ব $0.5\\,\\mathrm{M}$ থেকে কমিয়ে $0.1\\,\\mathrm{M}$ করতে কতটুকু পানি যোগ করতে হবে? [CU'24-25]",
    options: ["$500\\,\\mathrm{mL}$", "$1000\\,\\mathrm{mL}$", "$250\\,\\mathrm{mL}$", "$1250\\,\\mathrm{mL}$"],
    correct_answer: "$1000\\,\\mathrm{mL}$",
    explanation: "এখানে, $S_{1} = 0.5\\,\\mathrm{M}; V_{1} = 250\\,\\mathrm{mL};$\n$S_{2} = 0.1\\,\\mathrm{M}; V_{2} = ?$\n$S_{1}V_{1} = S_{2}V_{2} \\therefore V_{2} = \\frac{S_{1}V_{1}}{S_{2}} = \\frac{0.5 \\times 250}{0.1}$\n$V_{2} = 1250\\,\\mathrm{mL}$\nপানি যোগ করতে হবে $= (1250 - 250)\\,\\mathrm{mL}$\n$= 1000\\,\\mathrm{mL}$",
    time_limit: 60
  },
  {
    id: 90372,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৭২. একটি দ্রবের আণবিক ভর $106$ হলে সেটার ডেসিমোলার $250\\,\\mathrm{mL}$ দ্রবণ তৈরিতে কত গ্রাম দ্রব লাগবে? [CU'24-25; CoU'24-25; CU'23-24]",
    options: ["$2.65\\,\\mathrm{g}$", "$10.6\\,\\mathrm{g}$", "$26.5\\,\\mathrm{g}$", "$1.06\\,\\mathrm{g}$"],
    correct_answer: "$2.65\\,\\mathrm{g}$",
    explanation: "$W = \\frac{SMV}{1000} = \\frac{0.1 \\times 106 \\times 250}{1000} = 2.65\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90373,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৭৩. কোনো দ্রবণের আণবিক ভর $m$ হলে, সেটির $0.1\\,\\mathrm{M}$ দ্রবণের ঘনমাত্রা $\\mathrm{ppm}$ এ কত? [CU'24-25]",
    options: ["$m \\times 10^{3}\\,\\mathrm{ppm}$", "$0.1 \\times m\\,\\mathrm{ppm}$", "$m \\times 10^{2}\\,\\mathrm{ppm}$", "$10 \\times m\\,\\mathrm{ppm}$"],
    correct_answer: "$m \\times 10^{2}\\,\\mathrm{ppm}$",
    explanation: "$\\mathrm{ppm} = MS \\times 10^{3}$\n$= m \\times 0.1 \\times 10^{3} = m \\times 10^{2}$",
    time_limit: 60
  },
  {
    id: 90374,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৭৪. একটি $1\\,\\mathrm{L}$ দ্রবণে $1 \\times 10^{-2}\\,\\mathrm{mol}$ ক্লোরাইড আয়ন আছে। ক্লোরাইড আয়নের ঘনমাত্রা কত? [SUST'24-25]",
    options: ["$35.5\\,\\mathrm{ppm}$", "$3.55\\,\\mathrm{ppm}$", "$355\\,\\mathrm{ppm}$", "$0.35\\,\\mathrm{ppm}$"],
    correct_answer: "$355\\,\\mathrm{ppm}$",
    explanation: "$1 \\times 10^{-2}\\,\\mathrm{mol\\,L^{-1}}$ $\\mathrm{Cl^{-}} = 35.5 \\times 10^{-2}\\,\\mathrm{g\\,L^{-1}}$\n$= 35.5 \\times 10^{-2} \\times 10^{3}\\,\\mathrm{ppm} = 355\\,\\mathrm{ppm}$",
    time_limit: 60
  },
  {
    id: 90375,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৭৫. নিম্নের কোন রাসায়নিক পদার্থের নরমালিটি ও মোলারিটি সমান? [Agri'24-25]",
    options: ["সালফিউরিক এসিড", "সোডিয়াম কার্বোনেট", "সোডিয়াম হাইড্রোক্সাইড", "সোডিয়াম সালফেট"],
    correct_answer: "সোডিয়াম হাইড্রোক্সাইড",
    explanation: "$\\mathrm{NaOH}$ এর তুল্য সংখ্যা $1$;\n$\\therefore N = Se = S \\times 1 \\Rightarrow N = S$",
    time_limit: 60
  },
  {
    id: 90376,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৭৬. $5\\%$ $\\mathrm{Na_{2}CO_{3}}$ দ্রবণের মোলারিটি কত? [HSTU'24-25; JU'22-23]",
    options: ["$0.74\\,\\mathrm{M}$", "$0.47\\,\\mathrm{M}$", "$0.89\\,\\mathrm{M}$", "$0.98\\,\\mathrm{M}$"],
    correct_answer: "$0.47\\,\\mathrm{M}$",
    explanation: "$S = \\frac{10x}{M} = \\frac{10 \\times 5}{106} = 0.47\\,\\mathrm{M}$ [এখানে, $x = 5\\%$;\n$M = 106$; $S =$ ঘনমাত্রা]",
    time_limit: 60
  },
  {
    id: 90377,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৭৭. $10\\%\\,(\\mathrm{\\frac{W}{V}})$ $\\mathrm{H_{2}SO_{4}}$ দ্রবণের ঘনমাত্রা $\\mathrm{ppm}$ এককে কত? [HSTU'24-25]",
    options: ["$10^{4}\\,\\mathrm{ppm}$", "$10^{3}\\,\\mathrm{ppm}$", "$10^{5}\\,\\mathrm{ppm}$", "$10^{2}\\,\\mathrm{ppm}$"],
    correct_answer: "$10^{5}\\,\\mathrm{ppm}$",
    explanation: "$10\\%\\,(\\mathrm{\\frac{W}{V}})$ $\\mathrm{H_{2}SO_{4}} = \\frac{10}{100}\\,\\mathrm{g/mL}$\n$= \\frac{10 \\times 10^{3}}{100 \\times 10^{-3}}\\,\\mathrm{mg/L} = 10^{5}\\,\\mathrm{ppm}$",
    time_limit: 60
  },
  {
    id: 90378,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৭৮. $100\\,\\mathrm{mL}$ $\\mathrm{NaOH}$ এর দ্রবণে $0.5\\,\\mathrm{g}$ $\\mathrm{NaOH}$ আছে। এই দ্রবণের ঘনমাত্রা $\\mathrm{ppm}$ এককে কত হবে? [DU'23-24]",
    options: ["$50000$", "$50$", "$500$", "$5000$"],
    correct_answer: "$5000$",
    explanation: "$\\mathrm{ppm} = \\frac{W\\mathrm{(g)}}{V\\mathrm{(mL)}} \\times 10^{6} = \\frac{0.5}{100} \\times 10^{6} = 5000$",
    time_limit: 60
  },
  {
    id: 90379,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৭৯. $5\\%$ $\\mathrm{NaOH}$ দ্রবণের মোলার ঘনমাত্রা কত? [RU'23-24; JU'23-24]",
    options: ["$1.25$", "$12.50$", "$5.00$", "$0.125$"],
    correct_answer: "$1.25$",
    explanation: "$S = \\frac{10x}{M} = \\frac{10 \\times 5}{40} = \\frac{5}{4} = 1.25$",
    time_limit: 60
  },
  {
    id: 90380,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৮০. $50\\,\\mathrm{mL}$ পানির নমুনা বিশ্লেষণ করে $5\\,\\mathrm{mg}$ $\\mathrm{Fe}$ পাওয়া গেল। $\\mathrm{ppm}$ এ $\\mathrm{Fe}$ এর ঘনমাত্রা কত? [RU'23-24]",
    options: ["$200$", "$300$", "$150$", "$100$"],
    correct_answer: "$100$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 90381,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৮১. এক মোলাল দ্রবণে $0.3$ মোল দ্রব দ্রবীভূত থাকলে দ্রাবকের পরিমাণ- [RU'23-24]",
    options: ["$1000\\,\\mathrm{g}$", "$300\\,\\mathrm{mL}$", "$300\\,\\mathrm{g}$", "$100\\,\\mathrm{mL}$"],
    correct_answer: "$300\\,\\mathrm{g}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 90382,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৮২. $5.0\\,\\mathrm{g}$ $\\mathrm{H_{2}SO_{4}}$ পানিতে দ্রবীভূত করে দ্রবণের আয়তন $250\\,\\mathrm{mL}$ করা হয়েছে। উক্ত দ্রবণে $\\mathrm{H_{2}SO_{4}}$ -এর মোলারিটি কত? [JU'23-24]",
    options: ["$0.204\\,\\mathrm{M}$", "$0.102\\,\\mathrm{M}$", "$0.408\\,\\mathrm{M}$", "$0.051\\,\\mathrm{M}$"],
    correct_answer: "$0.204\\,\\mathrm{M}$",
    explanation: "$S = \\frac{5 \\times 1000}{250 \\times 98}\\,\\mathrm{M} = 0.204\\,\\mathrm{M}$",
    time_limit: 60
  },
  {
    id: 90383,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৮৩. $5.6\\,\\mathrm{g}$ $\\mathrm{KOH}$ পানিতে দ্রবীভূত করে দ্রবণের আয়তন $250\\,\\mathrm{mL}$ করা হয়েছে। উক্ত দ্রবণে $\\mathrm{KOH}$-এর মোলারিটি কত? [JU'23-24]",
    options: ["$0.4\\,\\mathrm{M}$", "$0.2\\,\\mathrm{M}$", "$0.8\\,\\mathrm{M}$", "$0.1\\,\\mathrm{M}$"],
    correct_answer: "$0.4\\,\\mathrm{M}$",
    explanation: "$S = \\frac{5.6 \\times 1000}{250 \\times 56}\\,\\mathrm{M} = 0.4\\,\\mathrm{M}$",
    time_limit: 60
  },
  {
    id: 90384,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৮৪. প্রতি $1000\\,\\mathrm{mL}$ দ্রবণে দ্রবীভূত দ্রবের মোল সংখ্যাকে কী বলে? [JU'22-23]",
    options: ["মোলালিটি", "শতকরা ($\\%$)", "মোলারিটি", "পিপিএম ($\\mathrm{ppm}$)"],
    correct_answer: "মোলারিটি",
    explanation: "",
    time_limit: 60
  },
  {
    id: 90385,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৮৫. $0.4\\,\\mathrm{M}$ $\\mathrm{HCl}$ দ্রবণের ঘনমাত্রাকে শতকরা ভর এককে $\\mathrm{X\\%}$ ($\\mathrm{w/V}$) কত হবে? [JU'22-23]",
    options: ["$1.46\\%$", "$0.40\\%$", "$1.48\\%$", "$0.80\\%$"],
    correct_answer: "$1.46\\%$",
    explanation: "$S = \\frac{10x}{M} \\therefore x = \\frac{SM}{10} = \\frac{0.4 \\times 36.5}{10} = 1.46\\%$",
    time_limit: 60
  },
  {
    id: 90386,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৮৬. $2.0\\,\\mathrm{mL}$ $1.5\\,\\mathrm{M}$ $\\mathrm{NaOH}$ দ্রবণ এবং $1.5\\,\\mathrm{mL}$ $2.0\\,\\mathrm{M}$ $\\mathrm{NaOH}$ দ্রবণ পরস্পর মিশ্রিত করলে মিশ্রিত দ্রবণের ঘনমাত্রা কত হবে? [JU'22-23]",
    options: ["$1.75\\,\\mathrm{M}$", "$0.17\\,\\mathrm{M}$", "$7.1\\,\\mathrm{M}$", "$1.71\\,\\mathrm{M}$"],
    correct_answer: "$1.71\\,\\mathrm{M}$",
    explanation: "$S = \\frac{V_{1}S_{1} + V_{2}S_{2}}{V_{1} + V_{2}} = \\frac{(2 \\times 1.5) + (1.5 \\times 2)}{2 + 1.5}$\n$= \\frac{6}{3.5} = 1.71\\,\\mathrm{M}$",
    time_limit: 60
  },
  {
    id: 90387,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৮৭. $10\\%$ $\\mathrm{NaHCO_{3}}$ দ্রবণের ঘনমাত্রা কত মোলার? [JU'22-23]",
    options: ["$0.30\\,\\mathrm{M}$", "$0.119\\,\\mathrm{M}$", "$1.19\\,\\mathrm{M}$", "$2.38\\,\\mathrm{M}$"],
    correct_answer: "$1.19\\,\\mathrm{M}$",
    explanation: "$S = \\frac{10x}{M} = \\frac{10 \\times 10}{23 + 1 + 12 + (16 \\times 3)} = \\frac{100}{84} = 1.19\\,\\mathrm{M}$",
    time_limit: 60
  },
  {
    id: 90388,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৮৮. রক্তে গ্লুকোজের ঘনমাত্রা $5\\,\\mathrm{mM}$ হলে, $\\mathrm{ppm}$ এককে কত হবে? [RU'22-23]",
    options: ["$9$", "$90$", "$900$", "$9000$"],
    correct_answer: "$900$",
    explanation: "$5\\,\\mathrm{mM} = 5 \\times 10^{-3}\\,\\mathrm{M}$\n$= 5 \\times 10^{-3}\\,\\mathrm{mol\\,L^{-1}} = 5 \\times 10^{-3} \\times 180\\,\\mathrm{gL^{-1}}$\n$= 5 \\times 10^{-3} \\times 180 \\times 10^{3}\\,\\mathrm{mgL^{-1}}$\n$= 900\\,\\mathrm{mgL^{-1}} = 900\\,\\mathrm{ppm}$",
    time_limit: 60
  },
  {
    id: 90389,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৮৯. $100\\,\\mathrm{mL}$ $\\mathrm{Na_{2}CO_{3}}$ দ্রবণে $15\\,\\mathrm{g}$ $\\mathrm{Na_{2}CO_{3}}$ আছে। ঐ দ্রবণের ঘনমাত্রা $\\mathrm{ppm}$ এককে কত? [RU'22-23]",
    options: ["$15 \\times 10^{4}$", "$15 \\times 10^{5}$", "$1.5 \\times 10^{4}$", "$1.5 \\times 10^{6}$"],
    correct_answer: "$15 \\times 10^{4}$",
    explanation: "ঘনমাত্রা $= \\left(\\frac{15}{100} \\times 1000\\right)\\,\\mathrm{g/L}$\n$= 150\\,\\mathrm{g/L} = 15 \\times 10^{4}\\,\\mathrm{mg/L} = 15 \\times 10^{4}\\,\\mathrm{ppm}$",
    time_limit: 60
  },
  {
    id: 90390,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৯০. $250\\,\\mathrm{mL}$ $40\\,\\mathrm{mM}$ $\\mathrm{Na_{2}CO_{3}}$ দ্রবণে কত $\\mathrm{g}$ $\\mathrm{Na_{2}CO_{3}}$ আছে? [RU'22-23]",
    options: ["$26.5$", "$10.6$", "$8.6$", "$1.06$"],
    correct_answer: "$1.06$",
    explanation: "$W = \\frac{SMV}{1000} = \\frac{40 \\times 10^{-3} \\times 106 \\times 250}{1000} = 1.06$",
    time_limit: 60
  },
  {
    id: 90391,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৯১. $1\\,\\mathrm{L}$ ডেসিমোলার $\\mathrm{Na_{2}CO_{3}}$ দ্রবণে কত $\\mathrm{g}$ $\\mathrm{Na_{2}CO_{3}}$ থাকবে? [RU'21-22]",
    options: ["$5.3$", "$10.6$", "$16.6$", "$53.6$"],
    correct_answer: "$10.6$",
    explanation: "$W = \\frac{SVM}{1000} = \\frac{0.1 \\times 1000 \\times 106}{1000} = 10.6\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90392,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৯২. $12\\,\\mathrm{M}$ $\\mathrm{HCl}$ এসিডের $300\\,\\mathrm{mL}$ জলীয় দ্রবণে কত মোল $\\mathrm{HCl}$ থাকে? [RU'21-22]",
    options: ["$36$", "$360$", "$3.6$", "$36.5$"],
    correct_answer: "$3.6$",
    explanation: "$n = SV = 12 \\times 0.3 = 3.6\\,\\mathrm{mole}$\n$[300\\,\\mathrm{mL} = 0.3\\,\\mathrm{L}]$",
    time_limit: 60
  },
  {
    id: 90393,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৯৩. $1\\,\\mathrm{mg\\,mL^{-1}}$ = কত $\\mathrm{ppm}$? [RU'21-22]",
    options: ["$1$", "$10$", "$10^{3}$", "$10^{4}$"],
    correct_answer: "$10^{3}$",
    explanation: "$1\\,\\mathrm{mg\\,mL^{-1}} = \\frac{1\\,\\mathrm{mg}}{1\\,\\mathrm{mL}} = \\frac{1\\,\\mathrm{mg}}{1 \\times 10^{-3}\\,\\mathrm{L}}$\n$= 1000\\,\\mathrm{mg\\,L^{-1}} = 10^{3}\\,\\mathrm{ppm}$",
    time_limit: 60
  },
  {
    id: 90394,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৯৪. $0.1\\,\\mathrm{N}$ $\\mathrm{HCl}$ এবং $0.1\\,\\mathrm{N}$ $\\mathrm{H_{2}SO_{4}}$ দ্রবণের মোলারিটি যথাক্রমে- [RU'21-22]",
    options: ["$0.1$ ও $0.1$", "$0.1$ ও $0.05$", "$0.5$ ও $0.1$", "$0.1$ ও $0.2$"],
    correct_answer: "$0.1$ ও $0.05$",
    explanation: "$\\mathrm{HCl}$-এর জন্য, $N = S \\times e$ $[\\mathrm{HCl}$ এর $e = 1]$\n$\\therefore S = N = 0.1\\,\\mathrm{M}$\n$\\mathrm{H_{2}SO_{4}}$ এর জন্য, $N = S \\times e$ $[\\mathrm{H_{2}SO_{4}}$ এর $e = 2]$\n$\\Rightarrow S = \\frac{0.1}{2} = 0.05\\,\\mathrm{M}$",
    time_limit: 60
  },
  {
    id: 90395,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৯৫. $100\\,\\mathrm{mL}$ $0.1\\,\\mathrm{M}$ $\\mathrm{Na_{2}CO_{3}}$ দ্রবণে কত গ্রাম $\\mathrm{Na_{2}CO_{3}}$ আছে? [RU'21-22]",
    options: ["$1.06\\,\\mathrm{g}$", "$10.6\\,\\mathrm{g}$", "$2.12\\,\\mathrm{g}$", "$2.65\\,\\mathrm{g}$"],
    correct_answer: "$1.06\\,\\mathrm{g}$",
    explanation: "$W = \\frac{100 \\times 0.1 \\times 106}{1000} = 1.06\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90396,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৯৬. $250\\,\\mathrm{mL}$ $0.1\\,\\mathrm{M}$ $\\mathrm{H_{2}SO_{4}}$ দ্রবণে কত গ্রাম $\\mathrm{H_{2}SO_{4}}$ আছে? [JU'23-24, 21-22]",
    options: ["$2.45\\,\\mathrm{g}$", "$4.90\\,\\mathrm{g}$", "$2.98\\,\\mathrm{g}$", "$9.80\\,\\mathrm{g}$"],
    correct_answer: "$2.45\\,\\mathrm{g}$",
    explanation: "$W = \\frac{SMV}{1000} = \\frac{0.1 \\times 98 \\times 250}{1000} = 2.45\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90397,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৯৭. $1000\\,\\mathrm{mL}$ পানিতে $400\\,\\mathrm{g}$ $\\mathrm{NaOH}$ যোগ করলে ঘনমাত্রা হয়- [JU'21-22]",
    options: ["$100\\,\\mathrm{M}$", "$10\\,\\mathrm{M}$", "$0.1\\,\\mathrm{M}$", "$1.0\\,\\mathrm{M}$"],
    correct_answer: "$10\\,\\mathrm{M}$",
    explanation: "$S = \\frac{n}{V} = \\frac{\\frac{400}{40}}{1\\,\\mathrm{L}} = 10\\,\\mathrm{M}$",
    time_limit: 60
  },
  {
    id: 90398,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৯৮. $200\\,\\mathrm{mL}$ $0.1\\,\\mathrm{M}$ $\\mathrm{Na_{2}CO_{3}}$ দ্রবণ প্রস্তুতিতে কত গ্রাম $\\mathrm{Na_{2}CO_{3}}$ প্রয়োজন? [CU'20-21; RU'19-20; JU'19-20]",
    options: ["$1.60\\,\\mathrm{g}$", "$10.6\\,\\mathrm{g}$", "$26.5\\,\\mathrm{g}$", "$2.65\\,\\mathrm{g}$"],
    correct_answer: "$2.65\\,\\mathrm{g}$",
    explanation: "(সঠিক উত্তর নেই); $W = \\frac{SVM}{1000}$\n$= \\frac{200 \\times 0.1 \\times 106}{1000} = \\frac{212}{100} = 2.12\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90399,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "৯৯. একটি সেমিমোলার দ্রবণ থেকে ডেসিমোলার দ্রবণ তৈরিতে দ্রবণের আয়তন কী পরিমাণ বৃদ্ধি করতে হবে? [RU'20-21]",
    options: ["$5$ গুণ", "$4$ গুণ", "$9$ গুণ", "$10$ গুণ"],
    correct_answer: "$4$ গুণ",
    explanation: "$V_{1}S_{1} = V_{2}S_{2}$\n$\\Rightarrow V_{2} = V_{1} \\times \\frac{S_{1}}{S_{2}} = V_{1} \\times \\frac{0.5}{0.1} = 5V_{1}$\n$\\therefore \\Delta V = 5V_{1} - V_{1} = 4V_{1}$",
    time_limit: 60
  },
  {
    id: 90300,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১০০. $5\\%$ $\\mathrm{NaOH}$-এর $\\mathrm{mL}$ দ্রবণে কত গ্রাম $\\mathrm{NaOH}$ থাকে? [Agri.'21-22]",
    options: ["$5$", "$25$", "$40$", "$50$"],
    correct_answer: "$5$",
    explanation: "(সঠিক উত্তর নেই); অপূর্ণাঙ্গ ডাটা। যদি $100\\,\\mathrm{mL}$ দ্রবণের কথা প্রশ্নে বলা থাকতো তাহলে উত্তর হতো অপশন-(a)।\n$5\\%$ $\\mathrm{NaOH}$ এর $100\\,\\mathrm{mL}$ দ্রবণে $5\\,\\mathrm{g}$ $\\mathrm{NaOH}$ থাকে।",
    time_limit: 60
  },
  {
    id: 90301,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১০১. রক্তের গ্লুকোজের ঘনমাত্রা $2 \\times 10^{-3}\\,\\mathrm{M}$ হলে $\\mathrm{ppm}$ এককে এর মান কত হবে? [Agri.'21-22; JU'19-20]",
    options: ["$180$", "$360$", "$120$", "$340$"],
    correct_answer: "$360$",
    explanation: "$S = 2 \\times 10^{-3}\\,\\mathrm{mol\\,L^{-1}}$\n$= 2 \\times 10^{-3} \\times 180 \\times 10^{3}\\,\\mathrm{mg\\,L^{-1}} = 360\\,\\mathrm{ppm}$",
    time_limit: 60
  },
  {
    id: 90302,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১০২. কস্টিক সোডা দ্রবণের প্রতি লিটারে $5$ গ্রাম $\\mathrm{NaOH}$ থাকলে দ্রবণটির মোলারিটি কত? [Agri.'19-20; JU'14-15; DU'10-11, 06-07]",
    options: ["$1.25\\,\\mathrm{M}$", "$12.5\\,\\mathrm{M}$", "$0.125\\,\\mathrm{M}$", "$1.52\\,\\mathrm{M}$"],
    correct_answer: "$0.125\\,\\mathrm{M}$",
    explanation: "$S = \\frac{W}{MV_{(L)}} = \\frac{5}{40 \\times 1} = 0.125\\,\\mathrm{M}$",
    time_limit: 60
  },
  {
    id: 90303,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১০৩. $10\\,\\mathrm{mL}$ $0.5\\,\\mathrm{M}$ $\\mathrm{Na_{2}CO_{3}}$ দ্রবণকে $0.05\\,\\mathrm{M}$ দ্রবণে পরিণত করতে কী পরিমাণ পানি মেশাতে হবে? [RU'19-20, 15-16]",
    options: ["$80\\,\\mathrm{mL}$", "$90\\,\\mathrm{mL}$", "$100\\,\\mathrm{mL}$", "$110\\,\\mathrm{mL}$"],
    correct_answer: "$90\\,\\mathrm{mL}$",
    explanation: "$S_{1}V_{1} = S_{2}V_{2} \\Rightarrow 0.5 \\times 10 = 0.05 \\times V_{2}$\n$\\therefore V_{2} = 100\\,\\mathrm{mL}$\n$\\therefore$ পানি মেশাতে হবে $= (100 - 10)\\,\\mathrm{mL} = 90\\,\\mathrm{mL}$",
    time_limit: 60
  },
  {
    id: 90304,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১০৪. $3.65\\,\\mathrm{g}$ $\\mathrm{HCl}$ $1000\\,\\mathrm{mL}$ দ্রবণে দ্রবীভূত থাকলে ঐ এসিড দ্রবণের ঘনমাত্রা কত? [JU'19-20]",
    options: ["$0.1\\,\\mathrm{M}$", "$0.01\\,\\mathrm{M}$", "$1.0\\,\\mathrm{M}$", "$0.001\\,\\mathrm{M}$"],
    correct_answer: "$0.1\\,\\mathrm{M}$",
    explanation: "$S = \\frac{1000 \\times W}{MV} = \\frac{1000 \\times 3.65}{36.5 \\times 1000} = 0.1\\,\\mathrm{M}$",
    time_limit: 60
  },
  {
    id: 90305,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১০৫. $10\\%$ $\\mathrm{H_{2}SO_{4}}$ দ্রবণের মোলারিটি কত? [JU'19-20]",
    options: ["$1.02$", "$2.02$", "$3.02$", "$4.02$"],
    correct_answer: "$1.02$",
    explanation: "$S = \\frac{10x}{M} = \\frac{10 \\times 10}{98} = 1.02\\,\\mathrm{M}$",
    time_limit: 60
  },
  {
    id: 90306,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১০৬. $0.125\\,\\mathrm{M}$ $\\mathrm{HCl}$ এসিডের $500\\,\\mathrm{mL}$ দ্রবণকে $0.100\\,\\mathrm{M}$ লঘু দ্রবণে পরিণত করতে কতটুকু পানি যোগ করতে হবে? [DU'18-19]",
    options: ["$100\\,\\mathrm{mL}$", "$150\\,\\mathrm{mL}$", "$125\\,\\mathrm{mL}$", "$75\\,\\mathrm{mL}$"],
    correct_answer: "$125\\,\\mathrm{mL}$",
    explanation: "$S_{1}V_{1} = S_{2}V_{2} \\Rightarrow V_{2} = \\frac{0.125 \\times 500}{0.100} = 625\\,\\mathrm{mL}$\n$\\therefore$ পানি যোগ করতে হবে $= (625 - 500)\\,\\mathrm{mL}$\n$= 125\\,\\mathrm{mL}$",
    time_limit: 60
  },
  {
    id: 90307,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১০৭. $1$ কিলোগ্রাম দ্রাবকে $1\\,\\mathrm{mol}$ দ্রব থাকলে দ্রবণটিকে কী বলে? [JU'18-19]",
    options: ["মোলার দ্রবণ", "মোলাল দ্রবণ", "নরমাল দ্রবণ", "সম্পৃক্ত দ্রবণ"],
    correct_answer: "মোলাল দ্রবণ",
    explanation: "",
    time_limit: 60
  },
  {
    id: 90308,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১০৮. রক্তে গ্লুকোজের ঘনমাত্রা $0.005\\,\\mathrm{M}$ হলে, $\\mathrm{ppm}$-এ কত হবে? [KU'18-19]",
    options: ["$106$", "$600$", "$900$", "$1060$"],
    correct_answer: "$900$",
    explanation: "$\\mathrm{ppm} = 0.005 \\times 1000 \\times 180\\,\\mathrm{ppm}$\n$= 900\\,\\mathrm{ppm}$",
    time_limit: 60
  },
  {
    id: 90309,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১০৯. $6.3\\%$ Oxalic Acid ($\\mathrm{COOH)_{2}}$ দ্রবণের ঘনমাত্রা মোলারিটিতে কত? [JnU'17-18]",
    options: ["$0.20\\,\\mathrm{M}$", "$0.025\\,\\mathrm{M}$", "$0.50\\,\\mathrm{M}$", "$0.25\\,\\mathrm{M}$"],
    correct_answer: "$0.20\\,\\mathrm{M}$",
    explanation: "(সঠিক উত্তর নেই); $S = \\frac{10x}{M} = \\frac{10 \\times 6.3}{90}$\n$= 0.7\\,\\mathrm{M}$",
    time_limit: 60
  },
  {
    id: 90310,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১১০. $98\\%$ বিশুদ্ধ $\\mathrm{H_{2}SO_{4}}$ (আপেক্ষিক ঘনত্ব $= 1.80$; আণবিক ভর $= 98$) এর মোলারিটি কত? [CU'17-18]",
    options: ["$9.8\\,\\mathrm{M}$", "$0.98\\,\\mathrm{M}$", "$1.0\\,\\mathrm{M}$", "$18\\,\\mathrm{M}$"],
    correct_answer: "$18\\,\\mathrm{M}$",
    explanation: "যেহেতু আপেক্ষিক ঘনত্ব দেয়া আছে তাই শতকরা পরিমাণ বলতে $\\%(\\frac{w}{w})$ বোঝানো হয়েছে।\nতাই, $S = \\frac{10 \\times \\rho \\times x}{M} = \\frac{10 \\times 1.80 \\times 98}{98} = 18\\,\\mathrm{M}$",
    time_limit: 60
  },
  {
    id: 90311,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১১১. বাজারে হাইড্রোক্লোরিক এসিড হলো $12.0\\,\\mathrm{M}$ জলীয় দ্রবণ। উক্ত বাণিজ্যিক এসিডের $300\\,\\mathrm{mL}$ এ কত মোল হাইড্রোক্লোরিক এসিড রয়েছে? [KU'17-18]",
    options: ["$2.60$", "$3.60$", "$4.60$", "$5.60$"],
    correct_answer: "$3.60$",
    explanation: "$1000\\,\\mathrm{mL}$ এ আছে $12\\,\\mathrm{mol}$\n$\\therefore 300\\,\\mathrm{mL}$ এ আছে $\\frac{12 \\times 300}{1000} = 3.6\\,\\mathrm{mol}$\n$n = SV = 12 \\times 0.3 = 3.6$",
    time_limit: 60
  },
  {
    id: 90312,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১১২. $5\\,\\mathrm{L}$ $0.1\\,\\mathrm{M}$ দ্রবণ তৈরি করতে কী পরিমাণ $\\mathrm{Na_{2}CO_{3}}$ প্রয়োজন? [DU'16-17]",
    options: ["$106\\,\\mathrm{g}$", "$53\\,\\mathrm{g}$", "$10.6\\,\\mathrm{g}$", "$5.3\\,\\mathrm{g}$"],
    correct_answer: "$53\\,\\mathrm{g}$",
    explanation: "$W = M \\times S \\times V_{(L)} = 106 \\times 0.1 \\times 5 = 53\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90313,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১১৩. $1.17$ আপেক্ষিক ঘনত্ব বিশিষ্ট $100\\,\\mathrm{g}$ হাইড্রোজেন এসিডের দ্রবণে $33.4\\,\\mathrm{g}$ হাইড্রোজেন ক্লোরাইড আছে। দ্রবণটির নরমালিটি কত? [RU'16-17]",
    options: ["$10.60\\,\\mathrm{N}$", "$10.67\\,\\mathrm{N}$", "$10.70\\,\\mathrm{N}$", "$10.80\\,\\mathrm{N}$"],
    correct_answer: "$10.70\\,\\mathrm{N}$",
    explanation: "$V = \\frac{m}{\\rho} = \\frac{100}{1.17} = 85.47\\,\\mathrm{mL}$\n$S = \\frac{1000 \\times W}{VM} = \\frac{1000 \\times 33.4}{85.47 \\times 36.5} = 10.70\\,\\mathrm{M}$\n$\\therefore N = Se = 10.70 \\times 1 = 10.70\\,\\mathrm{N}$",
    time_limit: 60
  },
  {
    id: 90314,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১১৪. গাঢ় $\\mathrm{H_{2}SO_{4}}$ এর ঘনমাত্রা $18\\,\\mathrm{M}$ হলে, $500\\,\\mathrm{mL}$ $0.2\\,\\mathrm{M}$ $\\mathrm{H_{2}SO_{4}}$ দ্রবণ তৈরি করতে কত মিলি লিটার এসিড লাগবে? [KU'16-17]",
    options: ["$1.40$", "$2.80$", "$5.56$", "$11.12$"],
    correct_answer: "$5.56$",
    explanation: "$0.2 \\times 500 = 18 \\times V \\Rightarrow V = 5.56\\,\\mathrm{mL}$",
    time_limit: 60
  },
  {
    id: 90315,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১১৫. $1\\,\\mathrm{ppm} =$ ? [RU'15-16]",
    options: ["$1\\,\\mathrm{mg/L}$", "$0.1\\,\\mathrm{mg/L}$", "$10\\,\\mathrm{mg/L}$", "$10^{6}\\,\\mathrm{mg/L}$"],
    correct_answer: "$1\\,\\mathrm{mg/L}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 90316,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১১৬. $1.325$ গ্রাম সোডিয়াম কার্বনেট পানিতে দ্রবীভূত করে আয়তন $250$ মি.লি. করা হল। দ্রবণটির মোলারিটি কত হবে? [RU'14-15]",
    options: ["$0.50$", "$0.05$", "$0.25$", "$0.025$"],
    correct_answer: "$0.05$",
    explanation: "$S = \\frac{n}{V} = \\frac{1.325 \\div 106}{0.250} = 0.05\\,\\mathrm{M}$",
    time_limit: 60
  },
  {
    id: 90317,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১১৭. $100\\,\\mathrm{mL}$ $0.2\\,\\mathrm{M}$ $\\mathrm{NaOH}$ প্রস্তুতের জন্য কত $\\mathrm{g}$ $\\mathrm{NaOH}$ লাগবে? [JU'14-15]",
    options: ["$0.2\\,\\mathrm{g}$", "$0.8\\,\\mathrm{g}$", "$20\\,\\mathrm{g}$", "$800\\,\\mathrm{g}$"],
    correct_answer: "$0.8\\,\\mathrm{g}$",
    explanation: "$W = \\frac{SVM}{1000} = \\frac{0.2 \\times 100 \\times 40}{1000} = 0.8\\,\\mathrm{g}$",
    time_limit: 60
  },
  {
    id: 90318,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১১৮. একটি নলকূপের পানি বিশ্লেষণ করে $1\\,\\mathrm{L}$ পানিতে $0.030\\,\\mathrm{g}$ আর্সেনিক পাওয়া গেল। ঐ পানিতে আর্সেনিকের ঘনমাত্রা- [JU'14-15; DU'01-02]",
    options: ["$30\\,\\mathrm{ppb}$", "$300\\,\\mathrm{ppb}$", "$30\\,\\mathrm{ppm}$", "$300\\,\\mathrm{ppm}$"],
    correct_answer: "$30\\,\\mathrm{ppm}$",
    explanation: "ঘনমাত্রা $= 1\\,\\mathrm{L}$ দ্রবণে $\\mathrm{As}$ আছে $0.03\\,\\mathrm{g}$\n$= 0.03 \\times 10^{3}\\,\\mathrm{mg/L} = 30\\,\\mathrm{mg/L} = 30\\,\\mathrm{ppm}$",
    time_limit: 60
  },
  {
    id: 90319,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১১৯. $5\\,\\mathrm{mL}$ $2\\,\\mathrm{N}$ $\\mathrm{NaOH}$ এবং $2\\,\\mathrm{mL}$ $5\\,\\mathrm{N}$ $\\mathrm{NaOH}$ কে একত্রে মিশালে দ্রবণের ঘনমাত্রা হবে- [CU'13-14]",
    options: ["$3.5\\,\\mathrm{N}$", "$3.7\\,\\mathrm{N}$", "$2.5\\,\\mathrm{N}$", "$2.86\\,\\mathrm{N}$"],
    correct_answer: "$2.86\\,\\mathrm{N}$",
    explanation: "$S(V_{1} + V_{2}) = S_{1}V_{1} + S_{2}V_{2}$\n$S = \\frac{5 \\times 2 + 2 \\times 5}{7} \\mathrm{N} = 2.86\\,\\mathrm{N}$",
    time_limit: 60
  },
  {
    id: 90320,
    topic: "ঘনমাত্রা সংক্রান্ত সমস্যা",
    topicId: "chem2_quant_t03",
    question_text: "১২০. একটি রোগীর রক্তে গ্লুকোজের পরিমাণ $10\\,\\mathrm{mmol\\,L^{-1}}$ মিলিগ্রাম/ডেসিলিটার এককে এর মান কত? [JnU'12-13; RU'13-14, 12-13; DU'13-14, 10-11]",
    options: ["$180$", "$18.0$", "$1.80$", "None"],
    correct_answer: "$180$",
    explanation: "গ্লুকোজের পরিমাণ $= 10\\,\\mathrm{mmol/L}$\n$= \\frac{10 \\times 10^{-3}\\,\\mathrm{mol}}{1\\,\\mathrm{L}} = \\frac{10^{-2} \\times 180\\,\\mathrm{g}}{1\\,\\mathrm{L}}$\n$= \\frac{1.8 \\times 1000\\,\\mathrm{mg}}{10\\,\\mathrm{dL}} = 180\\,\\mathrm{mg/dL}$",
    time_limit: 60
  },
];
