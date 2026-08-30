import { Question } from '../types';

// Varsity Module 3 -> রসায়ন ১ম পত্র -> ল্যাবরেটরির নিরাপদ ব্যবহার (topic-wise)
export const chem1LabSafetyQuestions: Question[] = [
  // --- T-01: ল্যাবরেটরির ব্যবহারবিধি, পোশাক, গ্লাস সামগ্রী পরিষ্কারের কৌশল, আয়তনিক বিশ্লেষণের যন্ত্রপাতি এবং ঘনমাত্রা ---
  {
    id: 88101,
    topic: "ল্যাবরেটরির ব্যবহারবিধি, পোশাক, গ্লাস সামগ্রী পরিষ্কারের কৌশল, আয়তনিক বিশ্লেষণের যন্ত্রপাতি এবং ঘনমাত্রা",
    topicId: "chem1_lab_t01",
    question_text: "১. নিচের কোনটি সার্জিক্যাল গ্লাভস তৈরিতে ব্যবহৃত করা হয়? [KU'15-16]",
    options: ["পলিবিউটাডাইন", "পলিক্লোরোপ্রিন", "পলিইউরিথিন", "পলিনাইসোপ্রিন"],
    correct_answer: "পলিনাইসোপ্রিন",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88102,
    topic: "ল্যাবরেটরির ব্যবহারবিধি, পোশাক, গ্লাস সামগ্রী পরিষ্কারের কৌশল, আয়তনিক বিশ্লেষণের যন্ত্রপাতি এবং ঘনমাত্রা",
    topicId: "chem1_lab_t01",
    question_text: "২. ক্রোমিক এসিড দ্বারা কাচপাত্র পরিষ্কার করার সময় কোন ধরনের বিক্রিয়া ঘটে? [DU'20-21]",
    options: ["জারণ", "প্রতিস্থাপন", "প্রশমন", "বিজারণ"],
    correct_answer: "জারণ",
    explanation: "ক্রোমিক এসিড দ্বারা পরিষ্কারের বিক্রিয়া:\n$\\mathrm{K_2Cr_2O_7 + 4H_2SO_4 \\rightarrow K_2SO_4 + Cr_2(SO_4)_3 + 4H_2O + 3[O]}$\nএই জায়মান অক্সিজেন দিয়ে ময়লা দূর হয়।",
    time_limit: 60
  },
  {
    id: 88103,
    topic: "ল্যাবরেটরির ব্যবহারবিধি, পোশাক, গ্লাস সামগ্রী পরিষ্কারের কৌশল, আয়তনিক বিশ্লেষণের যন্ত্রপাতি এবং ঘনমাত্রা",
    topicId: "chem1_lab_t01",
    question_text: "৩. সর্বোত্তম পরিষ্কারক হিসাবে ল্যাবরেটরিতে কোনটি ব্যবহৃত হয়? [JU'20-21]",
    options: ["ডিটারজেন্ট", "সোডা", "ক্রোমিক এসিড", "লিকুইড সোপ"],
    correct_answer: "ক্রোমিক এসিড",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88104,
    topic: "ল্যাবরেটরির ব্যবহারবিধি, পোশাক, গ্লাস সামগ্রী পরিষ্কারের কৌশল, আয়তনিক বিশ্লেষণের যন্ত্রপাতি এবং ঘনমাত্রা",
    topicId: "chem1_lab_t01",
    question_text: "৪. হ্যান্ড সেনিটাইজারের প্রধান উপাদান নিচের কোনটি? [CU'20-21]",
    options: ["$\\mathrm{CH_3OH}$", "$\\mathrm{C_2H_5OH}$", "$\\mathrm{C_4H_9OH}$", "$\\mathrm{NaOH}$"],
    correct_answer: "$\\mathrm{C_2H_5OH}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88105,
    topic: "ল্যাবরেটরির ব্যবহারবিধি, পোশাক, গ্লাস সামগ্রী পরিষ্কারের কৌশল, আয়তনিক বিশ্লেষণের যন্ত্রপাতি এবং ঘনমাত্রা",
    topicId: "chem1_lab_t01",
    question_text: "৫. $50\\mathrm{mL}$ তরল পরিমাপ করতে নিচের কোনটির ব্যবহার যথার্থ? [DU'19-20]",
    options: ["পিপেট", "মাপন সিলিন্ডার", "বুরেট", "আয়তনিক ফ্লাস্ক"],
    correct_answer: "মাপন সিলিন্ডার",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88106,
    topic: "ল্যাবরেটরির ব্যবহারবিধি, পোশাক, গ্লাস সামগ্রী পরিষ্কারের কৌশল, আয়তনিক বিশ্লেষণের যন্ত্রপাতি এবং ঘনমাত্রা",
    topicId: "chem1_lab_t01",
    question_text: "৬. $0.98\\mathrm{g}$ $\\mathrm{H_2SO_4}$ ব্যবহার করে $1.0\\mathrm{L}$ জলীয় দ্রবণ তৈরি করা হল। দ্রবণটির ঘনমাত্রা কত? [DU'19-20]",
    options: ["$0.1\\mathrm{M}$", "$0.1\\mathrm{m}$", "$0.01\\mathrm{M}$", "$0.01\\mathrm{m}$"],
    correct_answer: "$0.01\\mathrm{M}$",
    explanation: "$\\mathrm{C = \\frac{W \\times 1000}{M \\times V} = \\frac{0.98 \\times 1000}{98 \\times 1000} = \\frac{1}{100} = 0.01\\mathrm{M}}$",
    time_limit: 60
  },
  {
    id: 88107,
    topic: "ল্যাবরেটরির ব্যবহারবিধি, পোশাক, গ্লাস সামগ্রী পরিষ্কারের কৌশল, আয়তনিক বিশ্লেষণের যন্ত্রপাতি এবং ঘনমাত্রা",
    topicId: "chem1_lab_t01",
    question_text: "৭. কোনটি প্রাইমারী স্ট্যান্ডার্ড পদার্থ? [JU'19-20, Agri. Guccho'19-20]",
    options: ["$\\mathrm{HCl}$", "$\\mathrm{NaOH}$", "$\\mathrm{KMnO_4}$", "$\\mathrm{Na_2CO_3}$"],
    correct_answer: "$\\mathrm{Na_2CO_3}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88108,
    topic: "ল্যাবরেটরির ব্যবহারবিধি, পোশাক, গ্লাস সামগ্রী পরিষ্কারের কৌশল, আয়তনিক বিশ্লেষণের যন্ত্রপাতি এবং ঘনমাত্রা",
    topicId: "chem1_lab_t01",
    question_text: "৮. কোনটি সেকেন্ডারি স্ট্যান্ডার্ড পদার্থ? [JU'19-20]",
    options: ["$\\mathrm{H_2C_2O_4 \\cdot 2H_2O}$", "$\\mathrm{KMnO_4}$", "$\\mathrm{K_2Cr_2O_7}$", "$\\mathrm{Na_2CO_3}$"],
    correct_answer: "$\\mathrm{KMnO_4}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88109,
    topic: "ল্যাবরেটরির ব্যবহারবিধি, পোশাক, গ্লাস সামগ্রী পরিষ্কারের কৌশল, আয়তনিক বিশ্লেষণের যন্ত্রপাতি এবং ঘনমাত্রা",
    topicId: "chem1_lab_t01",
    question_text: "৯. তরল সেকেন্ডারী পদার্থ গাঢ় $\\mathrm{HCl}$ ও গাঢ় $\\mathrm{H_2SO_4}$ ওজন করা যায় কোনটিতে? [JU'19-20]",
    options: ["ডিজিটাল ব্যালেন্স", "মেজারিং সিলিন্ডার", "দুটোই", "কোনটিই নয়"],
    correct_answer: "মেজারিং সিলিন্ডার",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88110,
    topic: "ল্যাবরেটরির ব্যবহারবিধি, পোশাক, গ্লাস সামগ্রী পরিষ্কারের কৌশল, আয়তনিক বিশ্লেষণের যন্ত্রপাতি এবং ঘনমাত্রা",
    topicId: "chem1_lab_t01",
    question_text: "১০. তৈলাক্ত পদার্থযুক্ত গ্লাসসামগ্রী পরিষ্কারের ক্ষেত্রে কোনটি ব্যবহার করা হয়? [BAU'18-19]",
    options: ["ক্রোমিক এসিড মিশ্রণ", "এসিটোন", "পানি", "নাইট্রিক এসিড"],
    correct_answer: "ক্রোমিক এসিড মিশ্রণ",
    explanation: "নোট: বইয়ের উত্তর একাধিক অপশন (ক, খ): ক্রোমিক এসিড মিশ্রণ, এসিটোন — অ্যাপে প্রথম অপশনটি সঠিক ধরা হয়েছে।",
    time_limit: 60
  },
  {
    id: 88111,
    topic: "ল্যাবরেটরির ব্যবহারবিধি, পোশাক, গ্লাস সামগ্রী পরিষ্কারের কৌশল, আয়তনিক বিশ্লেষণের যন্ত্রপাতি এবং ঘনমাত্রা",
    topicId: "chem1_lab_t01",
    question_text: "১১. $6.5\\mathrm{mL}$ দ্রবণ মাপার জন্য কোনটি সঠিক যন্ত্র? [RU'17-18]",
    options: ["বুরেট", "পিপেট", "মেজারিং সিলিন্ডার", "কনিকেল ফ্লাস্ক"],
    correct_answer: "মেজারিং সিলিন্ডার",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88112,
    topic: "ল্যাবরেটরির ব্যবহারবিধি, পোশাক, গ্লাস সামগ্রী পরিষ্কারের কৌশল, আয়তনিক বিশ্লেষণের যন্ত্রপাতি এবং ঘনমাত্রা",
    topicId: "chem1_lab_t01",
    question_text: "১২. ভলিউমেট্রিক ফ্লাস্ক এর সঠিক ব্যবহার করা হয়---। [CU'16-17]",
    options: ["তরলের আয়তন পরিমাপে", "তরল পদার্থের পাতন কাজে", "অম্ল ও ক্ষারের টাইট্রেশন কাজে", "একটি নির্দিষ্ট আয়তনের দ্রবণ তৈরিতে"],
    correct_answer: "একটি নির্দিষ্ট আয়তনের দ্রবণ তৈরিতে",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88113,
    topic: "ল্যাবরেটরির ব্যবহারবিধি, পোশাক, গ্লাস সামগ্রী পরিষ্কারের কৌশল, আয়তনিক বিশ্লেষণের যন্ত্রপাতি এবং ঘনমাত্রা",
    topicId: "chem1_lab_t01",
    question_text: "১৩. কাচ পাত্রের কোন সেটটি সঠিকভাবে আয়তন মাপার জন্য উপযুক্ত? [DU'15-16]",
    options: ["Pipette and beaker", "Burette and reagent bottle", "Pipette and burette", "Graduated pipette and conical flask"],
    correct_answer: "Pipette and burette",
    explanation: "",
    time_limit: 60
  },
  // --- T-02: দ্রব পরিমাপক যন্ত্র (পল বুঙ্গি ব্যালেন্স, সার্টোরিয়াস ব্যালেন্স) ---
  {
    id: 88214,
    topic: "দ্রব পরিমাপক যন্ত্র (পল বুঙ্গি ব্যালেন্স, সার্টোরিয়াস ব্যালেন্স)",
    topicId: "chem1_lab_t02",
    question_text: "১৪. একটি 4 ডিজিট ব্যালেন্স দিয়ে...পর্যন্ত ভর সূক্ষ্মভাবে পরিমাপ করা যায়। [CU'17-18]",
    options: ["$0.1\\mathrm{mg}$", "$0.01\\mathrm{mg}$", "$0.001\\mathrm{mg}$", "$0.0001\\mathrm{mg}$"],
    correct_answer: "$0.0001\\mathrm{mg}$",
    explanation: "",
    time_limit: 60
  },
  // --- T-03: বিশ্লেষণ পদ্ধতি, বুনসেন বার্নার, তাপ দেয়া কৌশল ---
  {
    id: 88315,
    topic: "বিশ্লেষণ পদ্ধতি, বুনসেন বার্নার, তাপ দেয়া কৌশল",
    topicId: "chem1_lab_t03",
    question_text: "১৫. কোন যোগটি পানিশূন্য করার কাজে ব্যবহৃত হয়? [JSTU'15-16]",
    options: ["$\\mathrm{KCl}$", "$\\mathrm{MgSO_4}$", "$\\mathrm{MgSO_4 \\cdot 7H_2O}$", "$\\mathrm{Al_2O_3}$"],
    correct_answer: "$\\mathrm{Al_2O_3}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88316,
    topic: "বিশ্লেষণ পদ্ধতি, বুনসেন বার্নার, তাপ দেয়া কৌশল",
    topicId: "chem1_lab_t03",
    question_text: "১৬. রাসায়নিক পদার্থকে শুকনা রাখতে ব্যবহৃত হয়- [HSTU'15-16]",
    options: ["ফিউম হুড", "ডেসিককেটর", "বুনসেন বার্নার", "ক্যালরিমিটার"],
    correct_answer: "ডেসিককেটর",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88317,
    topic: "বিশ্লেষণ পদ্ধতি, বুনসেন বার্নার, তাপ দেয়া কৌশল",
    topicId: "chem1_lab_t03",
    question_text: "১৭. বুনসেন বার্নারের শিখায় সবচেয়ে উপরের অংশের নাম- [HSTU'15-16]",
    options: ["বিজারণ মণ্ডল", "উত্তপ্ত মণ্ডল", "জারণ মণ্ডল", "শীতল মণ্ডল"],
    correct_answer: "জারণ মণ্ডল",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88318,
    topic: "বিশ্লেষণ পদ্ধতি, বুনসেন বার্নার, তাপ দেয়া কৌশল",
    topicId: "chem1_lab_t03",
    question_text: "১৮. কোনটি পানি পাতনের সময় ব্যবহৃত হয়? [JU'15-16]",
    options: ["বুনসেন বার্নার", "স্পিরিটল্যাম্প", "হিটিংম্যান্টেল", "সবগুলো"],
    correct_answer: "স্পিরিটল্যাম্প",
    explanation: "",
    time_limit: 60
  },
  // --- T-04: রাসায়নিক দ্রব্য সংরক্ষণ ও ব্যবহারের সতর্কতা ---
  {
    id: 88419,
    topic: "রাসায়নিক দ্রব্য সংরক্ষণ ও ব্যবহারের সতর্কতা",
    topicId: "chem1_lab_t04",
    question_text: "১৯. পরিবেশের জন্য ক্ষতিকারক বিষাক্ত বিকারক $\\mathrm{CCl_4}$ এর পরিবর্তে বিকল্প বিকারক হিসেবে ব্যবহৃত হয়- [BUP'23-24]",
    options: ["অ্যাসিটোন", "হেক্সেন", "বেনজিন", "ক্লোরোফর্ম"],
    correct_answer: "হেক্সেন",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88420,
    topic: "রাসায়নিক দ্রব্য সংরক্ষণ ও ব্যবহারের সতর্কতা",
    topicId: "chem1_lab_t04",
    question_text: "২০. কোনটি বিষাক্ত (toxic) রিয়েজেন্ট? [BUP'23-24]",
    options: ["টলুইন", "বিউটানল", "বেনজিন", "হেক্সেন"],
    correct_answer: "বেনজিন",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88421,
    topic: "রাসায়নিক দ্রব্য সংরক্ষণ ও ব্যবহারের সতর্কতা",
    topicId: "chem1_lab_t04",
    question_text: "২১. কোনটির প্রভাবে কিডনি সম্পূর্ণভাবে বিনষ্ট হয়? [JU'22-23]",
    options: ["$\\mathrm{KMnO_4}$", "$\\mathrm{K_2Cr_2O_7}$", "$\\mathrm{K_4[Fe(CN)_6]}$", "$\\mathrm{H_2O_2}$"],
    correct_answer: "$\\mathrm{H_2O_2}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88422,
    topic: "রাসায়নিক দ্রব্য সংরক্ষণ ও ব্যবহারের সতর্কতা",
    topicId: "chem1_lab_t04",
    question_text: "২২. ল্যাবরেটরিতে অব্যবহৃত $\\mathrm{LiAlH_4}$ কে নিচের কোনটির দ্রবণ দ্বারা পরিশোধন করা হয়? [JU'22-23]",
    options: ["$\\mathrm{NaHCO_3}$", "$\\mathrm{MgSO_4}$", "$\\mathrm{Na_2CO_3}$", "$\\mathrm{Ca(OH)_2}$"],
    correct_answer: "$\\mathrm{MgSO_4}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88423,
    topic: "রাসায়নিক দ্রব্য সংরক্ষণ ও ব্যবহারের সতর্কতা",
    topicId: "chem1_lab_t04",
    question_text: "২৩. ল্যাবরেটরির নিরাপত্তায় ব্যবহৃত হয় না কোনটি? [JU'20-21]",
    options: ["ফিউমহুড", "ফার্স্টএইড বক্স", "অগ্নিনির্বাপক", "সেন্ট্রিফিউজ"],
    correct_answer: "সেন্ট্রিফিউজ",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88424,
    topic: "রাসায়নিক দ্রব্য সংরক্ষণ ও ব্যবহারের সতর্কতা",
    topicId: "chem1_lab_t04",
    question_text: "২৪. চোখে এসিড লাগলে কোন দ্রবণটি ব্যবহার করা শ্রেয়? [KU'18-19]",
    options: ["$\\mathrm{NaHCO_3}$", "$\\mathrm{NH_4HCO_3}$", "$\\mathrm{H_3BO_3}$", "$\\mathrm{MnO_4}$"],
    correct_answer: "$\\mathrm{NaHCO_3}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88425,
    topic: "রাসায়নিক দ্রব্য সংরক্ষণ ও ব্যবহারের সতর্কতা",
    topicId: "chem1_lab_t04",
    question_text: "২৫. নিচের কোনটি CFC এর বিকল্প? [KU'18-19]",
    options: ["Pentane", "Ammonium", "Methylene Chloride", "Hydrochlorofluoro Carbon"],
    correct_answer: "Hydrochlorofluoro Carbon",
    explanation: "",
    time_limit: 60
  },
  {
    id: 88426,
    topic: "রাসায়নিক দ্রব্য সংরক্ষণ ও ব্যবহারের সতর্কতা",
    topicId: "chem1_lab_t04",
    question_text: "২৬. কেরোসিনের নিচে রাখা হয়- [JU'17-18]\n(i) সোডিয়াম\n(ii) পটাশিয়াম\n(iii) হাইড্রোকার্বন\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "i, iii", "ii, iii", "i, ii, iii"],
    correct_answer: "i, ii",
    explanation: "",
    time_limit: 60
  },
];
