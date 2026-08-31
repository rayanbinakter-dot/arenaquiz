import { Question } from '../types';

// Varsity Module 3 -> রসায়ন ২য় পত্র -> অর্থনৈতিক রসায়ন (topic-wise)
export const chem2EconomicQuestions: Question[] = [
  // --- T-01: প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া ---
  {
    id: 92101,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "১. নাইট্রোজেন থেকে কোন সার প্রস্তুত করা যায়? [CU'21-22]",
    options: ["TSP", "Urea", "Muriate of potash", "Green fertilizer"],
    correct_answer: "Urea",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92102,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "২. 'ওয়াটার গ্যাস' কোনটি? [Agri.'20-21]",
    options: ["$\\mathrm{CO + 3H_2}$", "$\\mathrm{2CO + H_2}$", "$\\mathrm{CO + H_2}$", "$\\mathrm{CH_4 + H_2}$"],
    correct_answer: "$\\mathrm{CO + H_2}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92103,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "৩. নিচের চারট কয়লা খনির মধ্যে কোনটির কয়লা সবচেয়ে বেশি উন্নত মানের? [JU'19-20]",
    options: ["বড় পুকুরিয়া", "দীঘিপাড়া", "খলিসপুর", "জামালগঞ্জ"],
    correct_answer: "জামালগঞ্জ",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92104,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "৪. প্রাকৃতিক আর্দ্র গ্যাসে $\\mathrm{H_2S}$ এর পরিমাণ কত? [JU'19-20]",
    options: ["0.09-0.13%", "0.08-0.13%", "0.09-0.14%", "0.08-0.14%"],
    correct_answer: "0.08-0.13%",
    explanation: "গ্যাসে $5.7\\mathrm{mgm^{-3}}$ এর বেশি $\\mathrm{H_2S}$ থাকলে sour gas এবং কম থাকলে sweet gas বলে। শুষ্ক গ্যাসে কোনো $\\mathrm{H_2S}$ থাকে না। আর্দ্র গ্যাসে (0.08 - 0.13)% $\\mathrm{H_2S}$ থাকে।",
    time_limit: 60
  },
  {
    id: 92105,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "৫. বাংলাদেশে মজুদ মোট কয়লা কত কিউবিক গিগামিটার গ্যাসের সমতুল্য? [JU'19-20]",
    options: ["25.7", "24.7", "26.7", "27.7"],
    correct_answer: "27.7",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92106,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "৬. কোন শিল্পে প্রাকৃতিক গ্যাস কাঁচামাল হিসেবে ব্যবহৃত হয়? [JU'19-20]",
    options: ["ইউরিয়া সার", "সিমেন্ট", "বিদ্যুৎ", "গ্লাস"],
    correct_answer: "ইউরিয়া সার",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92107,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "৭. ইউরিয়া সার উৎপাদনে অন্তর্বর্তী উৎপাদন হল- [RU'19-20]",
    options: ["$\\mathrm{CO_2}$", "$\\mathrm{NH_3}$", "$\\mathrm{H - CO - NH_2}$", "$\\mathrm{H_2NCOONH_4}$"],
    correct_answer: "$\\mathrm{H_2NCOONH_4}$",
    explanation: "ইউরিয়া উৎপাদনে অন্তর্বর্তী উৎপাদন হলো অ্যামোনিয়াম কার্বামেট ($\\mathrm{NH_2-COONH_4}$)\n$\\mathrm{2NH_3 + CO_2 \\xrightarrow{180^{\\circ}C, 130atm} H_2N-COO-NH_4}$\n$\\mathrm{NH_2-COO-NH_4 \\xrightarrow[130atm]{130^{\\circ}C} H_2N-CO-NH_2 + H_2O}$",
    time_limit: 60
  },
  {
    id: 92108,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "৮. কোনটি নবায়নযোগ্য জ্বালানি নয়? [SUST'19-20]",
    options: ["বায়ুশক্তি", "সৌরশক্তি", "জোয়ার-ভাটার শক্তি", "বায়োডিজেল", "প্রাকৃতিক গ্যাস"],
    correct_answer: "প্রাকৃতিক গ্যাস",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92109,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "৯. কোনটি হতে বায়ো-গ্যাস উৎপাদন হয়? [JU'18-19]",
    options: ["পলিথিন", "শাক-সবজি", "পানি", "মাটি"],
    correct_answer: "শাক-সবজি",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92110,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "১০. নিচের কোনটি নবায়নযোগ্য জ্বালানি? [CU'18-19]",
    options: ["মিথানল", "কয়লা (Coal)", "অপরিশোধিত তেল", "প্রাকৃতিক গ্যাস"],
    correct_answer: "মিথানল",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92111,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "১১. রান্নার কাজে সিলিন্ডারে কোনটি ব্যবহৃত হয়? [KU'18-19]",
    options: ["পেট্রোল", "কেরোসিন", "মিথেন", "বিউটেন"],
    correct_answer: "বিউটেন",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92112,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "১২. ইউরিয়া সারে নাইট্রোজেনের পরিমাণ কোনটি? [RU'17-18]",
    options: ["42%", "43%", "46%", "48%"],
    correct_answer: "46%",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92113,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "১৩. বড় পুকুরিয়া খনিতে কী ধরনের কয়লা পাওয়া যায়? [DU'16-17]",
    options: ["Lignite", "Sub-bituminous", "Anthracite", "Bituminous"],
    correct_answer: "Bituminous",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92114,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "১৪. প্রাকৃতিক গ্যাসে ইথেনের পরিমাণ কত %? [JU'15-16]",
    options: ["15.44 - 20.35", "8.54 - 10.94", "5.21 - 7.95", "1.21 - 3.95"],
    correct_answer: "1.21 - 3.95",
    explanation: "প্রাকৃতিক গ্যাসে মিথেন থাকে (93.68 - 98)% এবং ইথেন থাকে (1.21 - 3.95)%",
    time_limit: 60
  },
  {
    id: 92115,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "১৫. কোন অধাতুটি ভূপৃষ্ঠে মুক্ত অবস্থায় পাওয়া যায়? [CU'15-16]",
    options: ["Si", "S", "N", "P"],
    correct_answer: "S",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92116,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "১৬. ইউরিয়া সার তৈরিতে প্রাকৃতিক গ্যাস যে জন্য ব্যবহৃত হয়- [DU'14-15]",
    options: ["As a fuel", "For synthesis of $\\mathrm{NH_3}$", "As a coolant", "None of the above"],
    correct_answer: "For synthesis of $\\mathrm{NH_3}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92117,
    topic: "প্রাকৃতিক গ্যাস, কয়লা, ইউরিয়া",
    topicId: "chem2_econ_t01",
    question_text: "১৭. লিকুইফাইড পেট্রোলিয়াম গ্যাসের কার্বন শিকলের দৈর্ঘ্য- [CU'14-15]",
    options: ["$\\mathrm{C_1 - C_4}$", "$\\mathrm{C_7 - C_{10}}$", "$\\mathrm{C_{12} - C_{18}}$", "$> \\mathrm{C_{30}}$"],
    correct_answer: "$\\mathrm{C_1 - C_4}$",
    explanation: "",
    time_limit: 60
  },
  // --- T-02: রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প ---
  {
    id: 92218,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "১৮. কোন এসিড কাচকে ক্ষয় করে? [JnU'24-25]",
    options: ["$\\mathrm{HCl}$", "$\\mathrm{HF}$", "$\\mathrm{HBr}$", "$\\mathrm{HI}$"],
    correct_answer: "$\\mathrm{HF}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92219,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "১৯. কাগজ উৎপাদনে দ্রাবক হিসেবে ব্যবহৃত হয়- [BUP'23-24]",
    options: ["ফেনল", "$\\mathrm{Na_2S}$", "$\\mathrm{H_2S}$", "$\\mathrm{H_2SO_4}$"],
    correct_answer: "$\\mathrm{Na_2S}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92220,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "২০. কোনটি অপটিক্যাল গ্লাস? [JU'22-23]",
    options: ["$\\mathrm{Na_2O.K_2O.Ce_2O_3.xSiO_2}$", "$\\mathrm{Na_2O.K_2O.PbO_2.xSiO_2}$", "$\\mathrm{K_2O.CaO.xSiO_2}$", "কোনটিই নয়"],
    correct_answer: "কোনটিই নয়",
    explanation: "অপটিক্যাল গ্লাস $\\mathrm{Na_2O.K_2O.PbO.xSiO_2}$",
    time_limit: 60
  },
  {
    id: 92221,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "২১. কোন উপাদানের কারণে সিমেন্ট ধীরে জমাট বাঁধে? [JU'20-21]",
    options: ["$\\mathrm{CaSO_4 \\cdot 2H_2O}$", "$\\mathrm{3CaO \\cdot SiO_2}$", "$\\mathrm{CaO \\cdot Al_2O_3}$", "$\\mathrm{Al_2O_3 \\cdot Fe_2O_3}$"],
    correct_answer: "$\\mathrm{CaSO_4 \\cdot 2H_2O}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92222,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "২২. নিচের কোনটি সিরামিক শিল্পের প্রধান কাঁচামাল?",
    options: ["চুনাপাথর", "চায়না ক্লে", "সোডাঅ্যাশ", "কাওলিনাইট"],
    correct_answer: "কাওলিনাইট",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92223,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "২৩. কোনটি চায়না ক্লে থেকে অ্যালুমিনা ও সিলিকার মিশ্রণ উৎপন্ন করার তাপমাত্রা? [JU'19-20]",
    options: ["$1000^{\\circ}\\mathrm{C}$", "$1500^{\\circ}\\mathrm{C}$", "$650^{\\circ}\\mathrm{C}$", "$900^{\\circ}\\mathrm{C}$"],
    correct_answer: "$650^{\\circ}\\mathrm{C}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92224,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "২৪. সিমেন্ট শিল্পের কোন দূষক জলীয় বাষ্প ও অক্সিজেনের সাথে বিক্রিয়া করে এসিড বৃষ্টি সৃষ্টি করে? [JU'19-20]",
    options: ["$\\mathrm{SO_2}$", "$\\mathrm{CaCO_3}$", "$\\mathrm{Ca(OH)_2}$", "$\\mathrm{CaO}$"],
    correct_answer: "$\\mathrm{SO_2}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92225,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "২৫. সাধারণ কাঁচ তৈরিতে $\\mathrm{Na_2CO_3}$ এর পরিমাণ?",
    options: ["14.3%", "27.1%", "18.6%", "10.4%"],
    correct_answer: "14.3%",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92226,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "২৬. চামড়া কারখানায় কোন বর্জ্য পানির TDS বৃদ্ধি করে? [JU'19-20]",
    options: ["$\\mathrm{H_2S}$", "$\\mathrm{HNO_3}$", "$\\mathrm{NaCl}$", "$\\mathrm{C_6H_6}$"],
    correct_answer: "$\\mathrm{NaCl}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92227,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "২৭. নিচের কোন যৌগটি চামড়া প্রক্রিয়াজাতকরণে ব্যবহৃত হয়? [DU'18-19]",
    options: ["$\\mathrm{Ca(OH)_2}$", "$\\mathrm{Cr_2(SO_4)_3}$", "$\\mathrm{Al_2(SO_4)_3}$", "$\\mathrm{Fe_2(SO_4)_3}$"],
    correct_answer: "$\\mathrm{Cr_2(SO_4)_3}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92228,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "২৮. চামড়া শিল্পের বর্জ্যে কোন বিষাক্ত ধাতু বিদ্যমান থাকে? [BAU'18-19]",
    options: ["As", "Hg", "Cr", "Cd"],
    correct_answer: "Cr",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92229,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "২৯. কোনটি সিমেন্ট ক্লিংকার এর উপাদান নয়? [DU'17-18]",
    options: ["Calcium silicate", "Calcium aluminate", "Magnesium oxide", "Sodium oxide"],
    correct_answer: "Sodium oxide",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92230,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "৩০. নিচের কোন উক্তি বা উক্তিসমূহ সঠিক? [DU'17-18]\n(i) চামড়া শিল্প থেকে $\\mathrm{Cr^{6+}}$ বর্জ্য নির্গত হয়\n(ii) ইউরিয়া সার শিল্প থেকে $\\mathrm{Hg^{2+}}$ নির্গত হয়\n(iii) ব্যাটারি তৈরির কারখানা থেকে $\\mathrm{Pb^{2+}}$ নির্গত হয়\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "ii, iii", "i, iii", "i, ii, iii"],
    correct_answer: "i, iii",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92231,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "৩১. প্রস্তুতকৃত পাল্পকে ব্লিচিং করতে নিচের কোনটি ব্যবহার করা হয়? [RU'17-18]",
    options: ["$\\mathrm{CO_2}$", "$\\mathrm{Cu_2O}$", "$\\mathrm{H_2O_2}$", "$\\mathrm{SiO_2}$"],
    correct_answer: "$\\mathrm{H_2O_2}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92232,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "৩২. ট্যানারি শিল্পকারখানা থেকে নির্গত কোন বর্জ্যটি পানি দূষণের প্রধান উৎস? [JnU'16-17]",
    options: ["ক্রোমিয়াম", "কপার", "জিংক", "লেড"],
    correct_answer: "ক্রোমিয়াম",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92233,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "৩৩. কাচের উপর নকশা করার কাজে কি ব্যবহৃত হয়? [KU'16-17]",
    options: ["$\\mathrm{HI}$", "$\\mathrm{HF}$", "$\\mathrm{HCl}$", "$\\mathrm{HNO_3}$"],
    correct_answer: "$\\mathrm{HF}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92234,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "৩৪. সিরামিক শিল্পের গুরুত্বপূর্ণ কাঁচামাল, কাওলিনাইটের রাসায়নিক সংকেত হলো- [DU'15-16]",
    options: ["$\\mathrm{Al_2O_3 \\cdot 2SiO_2 \\cdot 2H_2O}$", "$\\mathrm{Al_2O_3 \\cdot 3SiO_2 \\cdot H_2O}$", "$\\mathrm{Al_2O_3 \\cdot 2SiO_2 \\cdot 3H_2O}$", "$\\mathrm{K_2O \\cdot Al_2O_3 \\cdot 6SiO_2}$"],
    correct_answer: "$\\mathrm{Al_2O_3 \\cdot 2SiO_2 \\cdot 2H_2O}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92235,
    topic: "রসায়ন শিল্প, কাচ, সিরামিক, পাল্প-পেপার, সিমেন্ট ও চামড়া শিল্প",
    topicId: "chem2_econ_t02",
    question_text: "৩৫. কোনটি সিমেন্ট তৈরির প্রধান উপাদান নয়? [JU'15-16]",
    options: ["$\\mathrm{CaO}$", "$\\mathrm{Cu_2O}$", "$\\mathrm{SiO_2}$", "$\\mathrm{Al_2O_3}$"],
    correct_answer: "$\\mathrm{Cu_2O}$",
    explanation: "",
    time_limit: 60
  },
  // --- T-03: দূষণ ও দূষণ নিয়ন্ত্রণ, ন্যানো কণা এবং বিবিধ ---
  {
    id: 92336,
    topic: "দূষণ ও দূষণ নিয়ন্ত্রণ, ন্যানো কণা এবং বিবিধ",
    topicId: "chem2_econ_t03",
    question_text: "৩৬. ফুলারিন কোন মৌলের রূপভেদ? [JU'19-20]",
    options: ["ফসফরাস", "ক্লোরিন", "সালফার", "কার্বন"],
    correct_answer: "কার্বন",
    explanation: "ফুলারিন হলো কার্বনের একটি বিশেষ শ্রেণির রূপভেদ ($\\mathrm{C_{60}}$) এর আণবিক ভর (720)",
    time_limit: 60
  },
  {
    id: 92337,
    topic: "দূষণ ও দূষণ নিয়ন্ত্রণ, ন্যানো কণা এবং বিবিধ",
    topicId: "chem2_econ_t03",
    question_text: "৩৭. IUPAC এর সংজ্ঞা অনুসারে ন্যানো কণার আকার- [GST'24-25, JU'19-20, BAU'18-19, RU'15-16]",
    options: ["0.1-100 nm", "10-100 nm", "100-1000 nm", "1.0-100 nm"],
    correct_answer: "1.0-100 nm",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92338,
    topic: "দূষণ ও দূষণ নিয়ন্ত্রণ, ন্যানো কণা এবং বিবিধ",
    topicId: "chem2_econ_t03",
    question_text: "৩৮. বিদ্যুৎ পরিবাহিতায় কার্বন ন্যানোটিউব কপার ধাতুর চেয়ে কত গুণ বেশি পরিবাহী? [JU'19-20]",
    options: ["100", "10000 (খ)", "10000 (গ)", "1000"],
    correct_answer: "1000",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92339,
    topic: "দূষণ ও দূষণ নিয়ন্ত্রণ, ন্যানো কণা এবং বিবিধ",
    topicId: "chem2_econ_t03",
    question_text: "৩৯. সানস্ক্রিন লোশন তৈরিতে কোনটি ব্যবহৃত হয়? [KU'18-19]",
    options: ["$\\mathrm{Na_2O}$", "$\\mathrm{ZnO}$", "$\\mathrm{Al_2O_3}$", "$\\mathrm{CuO}$"],
    correct_answer: "$\\mathrm{ZnO}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92340,
    topic: "দূষণ ও দূষণ নিয়ন্ত্রণ, ন্যানো কণা এবং বিবিধ",
    topicId: "chem2_econ_t03",
    question_text: "৪০. সোনার ন্যানো পার্টিকেলের বর্ণ হল- [RU'16-17]",
    options: ["সোনালী", "লাল", "রূপালী", "কোনটিই নয়"],
    correct_answer: "লাল",
    explanation: "",
    time_limit: 60
  },
  {
    id: 92341,
    topic: "দূষণ ও দূষণ নিয়ন্ত্রণ, ন্যানো কণা এবং বিবিধ",
    topicId: "chem2_econ_t03",
    question_text: "৪১. অটোমোবাইল ইঞ্জিনে ক্যাটলাইটিক কনভার্টার ব্যবহারের উদ্দেশ্য কি? [KU'16-17]",
    options: ["$\\mathrm{NO}$ গ্যাসকে $\\mathrm{N_2}$ ও $\\mathrm{O_2}$ তে পরিণত করা", "যদি কার্বন উৎপন্ন হয়, তাকে শোষণ করা", "$\\mathrm{CO}$ সৃষ্টিতে বাধা সৃষ্টি করা", "বাষ্প সরবরাহ করে নির্গত গ্যাসের উত্তাপ প্রশমিত করা"],
    correct_answer: "$\\mathrm{NO}$ গ্যাসকে $\\mathrm{N_2}$ ও $\\mathrm{O_2}$ তে পরিণত করা",
    explanation: "ক্যাটলাইটিক কনভার্টারের বিক্রিয়া\n$\\mathrm{C_xH_y + (x+\\frac{y}{4})O_2 \\xrightarrow{Pt, \\Delta} xCO_2 + \\frac{y}{2}H_2O}$\n$\\mathrm{2NO + 2CO \\longrightarrow 2CO_2 + N_2}$\n$\\mathrm{2CO + O_2 \\longrightarrow 2CO_2}$\nক্যাটলাইটিক কনভার্টারে প্রভাবক হিসেবে Pt, Rh, Pd ব্যবহার করে হাইড্রোকার্বন ($\\mathrm{C_xH_y}$), $\\mathrm{CO}$ এবং $\\mathrm{NO_x}$ গ্যাসকে $\\mathrm{CO_2, H_2O, N_2}$ এবং $\\mathrm{O_2}$ গ্যাসে রূপান্তর করা হয়।",
    time_limit: 60
  },
  {
    id: 92342,
    topic: "দূষণ ও দূষণ নিয়ন্ত্রণ, ন্যানো কণা এবং বিবিধ",
    topicId: "chem2_econ_t03",
    question_text: "৪২. ETP বলতে কি বুঝায়? [RU'15-16]",
    options: ["Efficient Transfer Process", "Efficient Transportation Program", "Effluent Treatment plant", "Effluent Treated Product"],
    correct_answer: "Effluent Treatment plant",
    explanation: "",
    time_limit: 60
  },
];
