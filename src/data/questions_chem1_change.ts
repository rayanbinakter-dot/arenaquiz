import { Question } from '../types';

// Varsity Module 3 -> রসায়ন ১ম পত্র -> রাসায়নিক পরিবর্তন (topic-wise)
export const chem1ChemicalChangeQuestions: Question[] = [
  // --- T-01: রাসায়নিক বিক্রিয়া ও গ্রিন কেমিস্ট্রি ---
  {
    id: 86101,
    topic: "রাসায়নিক বিক্রিয়া ও গ্রিন কেমিস্ট্রি",
    topicId: "chem1_change_t01",
    question_text: "১. আন্তর্জাতিকভাবে রসায়নবিদগণ দ্বারা স্বীকৃত সবুজ রসায়নের মূলনীতি কয়টি? [JU'24-25; CU'23-24]",
    options: ["10", "12", "14", "15"],
    correct_answer: "12",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86102,
    topic: "রাসায়নিক বিক্রিয়া ও গ্রিন কেমিস্ট্রি",
    topicId: "chem1_change_t01",
    question_text: "২. গ্রিন কেমিস্ট্রির বারোটি নীতির মধ্যে নিচের কোনটি সঠিক নয়? [JU'19-20]",
    options: ["নিরাপদ দ্রাবক ব্যবহার", "বর্জ্য পদার্থ রোধকরণ", "ন্যূনতম উপজাতক", "প্রাকৃতিক কেমিক্যাল পরিকল্পনা"],
    correct_answer: "প্রাকৃতিক কেমিক্যাল পরিকল্পনা",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86103,
    topic: "রাসায়নিক বিক্রিয়া ও গ্রিন কেমিস্ট্রি",
    topicId: "chem1_change_t01",
    question_text: "৩. গ্রিন হাউজ গ্যাস নয়- [RU'17-18]",
    options: ["$\\mathrm{N_{2}O}$", "$\\mathrm{CH_{4}}$", "$\\mathrm{CFC}$", "$\\mathrm{N_{2}}$"],
    correct_answer: "$\\mathrm{N_{2}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86104,
    topic: "রাসায়নিক বিক্রিয়া ও গ্রিন কেমিস্ট্রি",
    topicId: "chem1_change_t01",
    question_text: "৪. ওজোনস্তর ক্ষয়কারী নয়- [RU'17-18]",
    options: ["$\\mathrm{CFCl_{3}}$", "$\\mathrm{CH_{4}}$", "$\\mathrm{SO_{4}}$", "$\\mathrm{N_{2}O}$"],
    correct_answer: "$\\mathrm{SO_{4}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86105,
    topic: "রাসায়নিক বিক্রিয়া ও গ্রিন কেমিস্ট্রি",
    topicId: "chem1_change_t01",
    question_text: "৫. ফ্রিয়ন-12 গ্যাসের সংকেত কী? [JnU'17-18]",
    options: ["$\\mathrm{CF_{3}Cl}$", "$\\mathrm{CCl_{3}F}$", "$\\mathrm{CCl_{2}F_{2}}$", "$\\mathrm{F_{2}ClC-CClF_{2}}$"],
    correct_answer: "$\\mathrm{CCl_{2}F_{2}}$",
    explanation: "$\\mathrm{Sol^{n}}$: ফ্রিয়ন-12 $\\rightarrow 12+90 = \\underset{\\mathrm{CHF}}{102}$\nঅর্থাৎ, $\\mathrm{C = 1}$; $\\mathrm{H = 0}$; $\\mathrm{F = 2}$ এবং $\\mathrm{Cl = 2}$\nসুতরাং, সংকেতটি হবে $\\mathrm{CCl_{2}F_{2}}$।",
    time_limit: 60
  },
  {
    id: 86106,
    topic: "রাসায়নিক বিক্রিয়া ও গ্রিন কেমিস্ট্রি",
    topicId: "chem1_change_t01",
    question_text: "৬. CFC-13 এর সংকেত কোনটি? [JU'16-17]",
    options: ["$\\mathrm{CHClF_{2}}$", "$\\mathrm{CF_{2}Cl_{2}}$", "$\\mathrm{CF_{3}Cl}$", "$\\mathrm{CFCl_{3}}$"],
    correct_answer: "$\\mathrm{CF_{3}Cl}$",
    explanation: "$\\mathrm{Sol^{n}}$: CFC-13 $\\rightarrow 13+90 = \\underset{\\mathrm{CHF}}{103}$\nঅর্থাৎ, $\\mathrm{C = 1}$; $\\mathrm{H = 0}$; $\\mathrm{F = 3}$ এবং $\\mathrm{Cl = 1}$ সুতরাং, সংকেতটি হবে $\\mathrm{CF_{3}Cl}$।",
    time_limit: 60
  },
  // --- T-02: বিক্রিয়ার হার ও হার ধ্রুবক সংক্রান্ত সমস্যা ---
  {
    id: 86207,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবক সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t02",
    question_text: "৭. একটি প্রথম ক্রম রাসায়নিক বিক্রিয়ায় বিক্রিয়কের প্রারম্ভিক ঘনমাত্রা $0.1\\mathrm{molL^{-1}}$। বিক্রিয়াটি $0.25 \\times 10^{-3}\\mathrm{molL^{-1}s^{-1}}$ গতিতে সম্পন্ন হয়। বিক্রিয়াটির গতি ধ্রুবক কত? [JU'25-26]",
    options: ["$0.25 \\times 10^{-4}\\mathrm{s^{-1}}$", "$0.40 \\times 10^{-3}\\mathrm{s^{-1}}$", "$0.25 \\times 10^{-2}\\mathrm{s^{-1}}$", "$0.25 \\times 10^{-3}\\mathrm{s^{-1}}$"],
    correct_answer: "$0.25 \\times 10^{-2}\\mathrm{s^{-1}}$",
    explanation: "$\\mathrm{Sol^{n}}$: গতি ধ্রুবক $= \\frac{0.25 \\times 10^{-3}}{0.1} = 0.25 \\times 10^{-2}\\mathrm{s^{-1}}$",
    time_limit: 60
  },
  {
    id: 86208,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবক সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t02",
    question_text: "৮. বিক্রিয়ার হারের একক কী? [JU'24-25, 22-23, 19-20; Cu'20-21]",
    options: ["$\\mathrm{mol L s^{-1}}$", "$\\mathrm{mol L^{-1} s}$", "$\\mathrm{mol L^{-1} s^{-1}}$", "$\\mathrm{mol^{-1} L^{-1} s^{-1}}$"],
    correct_answer: "$\\mathrm{mol L^{-1} s^{-1}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86209,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবক সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t02",
    question_text: "৯. হাইড্রোজেন আয়োডাইডের বিয়োজনে এর প্রারম্ভিক ঘনমাত্রা $\\mathrm{0.5 M}$ হতে $\\mathrm{0.2 M}$ এ হ্রাস পেতে $\\mathrm{50}$ মিনিট সময় লাগে। বিক্রিয়ার হার $\\mathrm{mol L^{-1} s^{-1}}$ এককে কত? [RU'24-25]",
    options: ["$1.5 \\times 10^{-4}$", "$1.0 \\times 10^{-4}$", "$2.0 \\times 10^{-4}$", "$2.5 \\times 10^{-4}$"],
    correct_answer: "$1.0 \\times 10^{-4}$",
    explanation: "$\\mathrm{Sol^{n}}$: বিক্রিয়ার হার $= -\\frac{\\Delta C}{\\Delta t} = -\\frac{C_{2} - C_{1}}{t_{2} - t_{1}}$\n$= -\\frac{(0.2 - 0.5)}{50 \\times 60} = \\frac{0.3}{3000} = 1 \\times 10^{-4}\\mathrm{mol L^{-1} s^{-1}}$",
    time_limit: 60
  },
  {
    id: 86210,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবক সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t02",
    question_text: "১০. $\\mathrm{A \\rightarrow B}$ বিক্রিয়াটিতে $\\mathrm{A}$ এর প্রারম্ভিক ঘনমাত্রা $0.475\\mathrm{molL^{-1}}$ এবং বিক্রিয়া শুরু হওয়ার 5 মিনিট পরে $\\mathrm{A}$ এর ঘনমাত্রা হ্রাস পেয়ে $0.175\\mathrm{molL^{-1}}$ হলে, গড় বিক্রিয়ার হার- [RU'22-23]",
    options: ["$0.1\\mathrm{molL^{-1}s^{-1}}$", "$0.01\\mathrm{molL^{-1}s^{-1}}$", "$0.005\\mathrm{molL^{-1}s^{-1}}$", "$0.001\\mathrm{molL^{-1}s^{-1}}$"],
    correct_answer: "$0.001\\mathrm{molL^{-1}s^{-1}}$",
    explanation: "$\\mathrm{Sol^{n}}$: বিক্রিয়ার হার $= -\\frac{\\Delta[A]}{\\Delta t} = -\\frac{0.175-0.475}{5 \\times 60}\\mathrm{molL^{-1}s^{-1}}$\n$= \\frac{0.3}{5 \\times 60}\\mathrm{molL^{-1}s^{-1}} = \\frac{0.3}{300}\\mathrm{molL^{-1}s^{-1}}$\n$= \\frac{300 \\times 10^{-3}}{300} = 10^{-3}\\mathrm{molL^{-1}s^{-1}}$\n$= 0.001\\mathrm{molL^{-1}s^{-1}}$",
    time_limit: 60
  },
  {
    id: 86211,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবক সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t02",
    question_text: "১১. $\\mathrm{aA \\rightarrow bB}$ বিক্রিয়াটির ক্ষেত্রে কোনটি বিক্রিয়ার হার নির্দেশ করে? [DU'20-21]",
    options: ["$-\\frac{d[A]}{dt}$", "$-\\frac{1}{a}\\frac{d[A]}{dt}$", "$-\\frac{d[B]}{dt}$", "$-\\frac{1}{b}\\frac{d[A]}{dt}$"],
    correct_answer: "$-\\frac{1}{a}\\frac{d[A]}{dt}$",
    explanation: "$\\mathrm{Sol^{n}}$: বিক্রিয়ার হার $= -\\frac{1}{a}\\frac{dA}{dt} = \\frac{1}{b}\\frac{dB}{dt}$",
    time_limit: 60
  },
  {
    id: 86212,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবক সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t02",
    question_text: "১২. $2\\mathrm{N_{2}O_{5}(g)} \\rightleftharpoons 4\\mathrm{NO_{2}(g)} + \\mathrm{O_{2}(g)}$ এই বিক্রিয়ায় যদি 6 সেকেন্ডে $\\mathrm{NO_{2}}$ এর ঘনমাত্রা $3.0 \\times 10^{-3}\\mathrm{mol L^{-1}}$ বৃদ্ধি পায়, তবে গড় বিক্রিয়ার হার ($\\mathrm{mol L^{-1} s^{-1}}$) কত? [JU'19-20; KU'16-17]",
    options: ["$1.55 \\times 10^{-4}$", "$1.35 \\times 10^{-4}$", "$1.15 \\times 10^{-4}$", "$1.25 \\times 10^{-4}$"],
    correct_answer: "$1.25 \\times 10^{-4}$",
    explanation: "$\\mathrm{Sol^{n}}$: বিক্রিয়ার হার $= \\frac{1}{4}\\frac{d[\\mathrm{NO_{2}}]}{dt} = \\frac{1}{4}\\left(\\frac{3 \\times 10^{-3}}{6}\\right)$\n$= 0.25 \\times \\frac{1}{2} \\times 10^{-3} = 0.125 \\times 10^{-3}$\n$= 1.25 \\times 10^{-4}\\mathrm{mol L^{-1} s^{-1}}$",
    time_limit: 60
  },
  {
    id: 86213,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবক সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t02",
    question_text: "১৩. একটি বিক্রিয়কের আদি ঘনমাত্রা $0.1\\mathrm{mol/L}$। $20$ সেকেন্ড পরে ঘনমাত্রা $0.05\\mathrm{mol/L}$ হলে ঐ বিক্রিয়ার হার কত $\\mathrm{mol/Lsec}$? [RU'18-19]",
    options: ["$1.5$", "$2.5 \\times 10^{-3}$", "$2.05$", "$2.05 \\times 10^{-2}$"],
    correct_answer: "$2.5 \\times 10^{-3}$",
    explanation: "$\\mathrm{Sol^{n}}$: বিক্রিয়ার হার: $= \\frac{0.1 - 0.05}{20} = \\frac{0.05}{20} = \\frac{5 \\times 10^{-2}}{20}$\n$= \\frac{1}{4} \\times 10^{-2} = 2.5 \\times 10^{-3}\\mathrm{mol L^{-1} sec^{-1}}$",
    time_limit: 60
  },
  {
    id: 86214,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবক সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t02",
    question_text: "১৪. $2\\mathrm{N_{2}O_{5}(g)} \\rightleftharpoons 4\\mathrm{NO_{2}(g)} + \\mathrm{O_{2}(g)}$ বিক্রিয়ার শুরুতে $\\mathrm{NO_{2}}$-এর ঘনমাত্রা বৃদ্ধির হার $3.0 \\times 10^{-3}\\mathrm{mol L^{-1} s^{-1}}$ হলে $\\mathrm{N_{2}O_{5}}$ এর ঘনমাত্রা হ্রাসের হার হবে- [RU'17-18]",
    options: ["$3.0 \\times 10^{-3} \\mathrm{molL^{-1}s^{-1}}$", "$6.0 \\times 10^{-3} \\mathrm{molL^{-1}s^{-1}}$", "$1.5 \\times 10^{-3} \\mathrm{molL^{-1}s^{-1}}$", "$12 \\times 10^{-3} \\mathrm{molL^{-1}s^{-1}}$"],
    correct_answer: "$1.5 \\times 10^{-3} \\mathrm{molL^{-1}s^{-1}}$",
    explanation: "$\\mathrm{Sol^{n}}$: প্রশ্নমতে, $\\frac{3 \\times 10^{-3}}{4} = \\frac{x}{2}$\n$\\Rightarrow x = \\frac{3}{2} \\times 10^{-3} = 1.5 \\times 10^{-3} \\mathrm{mol L^{-1} s^{-1}}$",
    time_limit: 60
  },
  // --- T-03: বিক্রিয়ার হার ও হার ধ্রুবকের উপর প্রভাব বিস্তারকারী নিয়ামক ---
  {
    id: 86315,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবকের উপর প্রভাব বিস্তারকারী নিয়ামক",
    topicId: "chem1_change_t03",
    question_text: "১৫. একটি রাসায়নিক বিক্রিয়ায় $\\mathrm{A\\ (s)}$ ও $\\mathrm{B\\ (s)}$ মিলে $\\mathrm{C\\ (s)}$ উৎপন্ন করে। বিক্রিয়াটির গতি কোনটির উপর নির্ভর করে না? [JU'25-26]",
    options: ["বিক্রিয়কের ঘনমাত্রা", "তাপমাত্রা", "অনুঘটক", "চাপ"],
    correct_answer: "চাপ",
    explanation: "$\\mathrm{Sol^{n}}$: বিক্রিয়াটিতে উৎপাদ এবং বিক্রিয়ক উভয় কঠিন হওয়ায় $\\Delta n = 0$। এই কারণে বিক্রিয়াটিতে চাপের প্রভাব নেই।",
    time_limit: 60
  },
  {
    id: 86316,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবকের উপর প্রভাব বিস্তারকারী নিয়ামক",
    topicId: "chem1_change_t03",
    question_text: "১৬. একটি বিক্রিয়ার সক্রিয়ন শক্তি নির্ণয় করতে গিয়ে একজন শিক্ষার্থী $\\log \\mathrm{k}$ vs. $\\frac{1}{\\mathrm{T}}$ লেখচিত্রের ঢাল এর মান $-220\\mathrm{K}$ পেল। বিক্রিয়াটির সক্রিয়ন শক্তির মান কত? [SUST'25-26]",
    options: ["$8.314\\mathrm{Jmol^{-1}}$", "$1.83\\mathrm{kJmol^{-1}}$", "$26.46\\mathrm{Jmol^{-1}}$", "$4.21\\mathrm{kJmol^{-1}}$"],
    correct_answer: "$4.21\\mathrm{kJmol^{-1}}$",
    explanation: "$\\mathrm{Sol^{n}}$: আমরা জানি, ঢাল $= -\\frac{\\mathrm{E_{a}}}{2.303\\mathrm{R}}$\n$\\Rightarrow -220 = -\\frac{\\mathrm{E_{a}}}{2.303\\mathrm{R}}$\n$\\Rightarrow \\mathrm{E_{a}} = 2.303 \\times 220 \\times 8.314$\n$= 4.21\\mathrm{KJmol^{-1}}$",
    time_limit: 60
  },
  {
    id: 86317,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবকের উপর প্রভাব বিস্তারকারী নিয়ামক",
    topicId: "chem1_change_t03",
    question_text: "১৭. তাপমাত্রা বৃদ্ধি করলে বিক্রিয়ার হার বৃদ্ধি পায়; কারণ- [JU'24-25; KU'24-25]\n(i) সংঘর্ষ সংখ্যা বাড়ে\n(ii) সক্রিয়ন শক্তি কমে\n(iii) বিক্রিয়কের গতিশক্তি বাড়ে\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "ii, iii", "i, iii", "i, ii, iii"],
    correct_answer: "i, iii",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86318,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবকের উপর প্রভাব বিস্তারকারী নিয়ামক",
    topicId: "chem1_change_t03",
    question_text: "১৮. তাপমাত্রা বৃদ্ধি বিক্রিয়ার হার (rate of reaction) বৃদ্ধির কারণ- [JnU'15-16]",
    options: ["সংঘর্ষ সংখ্যা বৃদ্ধি", "সক্রিয় অণুর সংখ্যা বৃদ্ধি", "সক্রিয়ণ শক্তি হ্রাস", "সক্রিয়ণ শক্তি বৃদ্ধি"],
    correct_answer: "সংঘর্ষ সংখ্যা বৃদ্ধি",
    explanation: "নোট: বইয়ের উত্তর একাধিক অপশন (ক, খ): সংঘর্ষ সংখ্যা বৃদ্ধি, সক্রিয় অণুর সংখ্যা বৃদ্ধি — অ্যাপে প্রথম অপশনটি সঠিক ধরা হয়েছে।",
    time_limit: 60
  },
  {
    id: 86319,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবকের উপর প্রভাব বিস্তারকারী নিয়ামক",
    topicId: "chem1_change_t03",
    question_text: "১৯. $37^{\\circ}\\mathrm{C}$ তাপমাত্রায় একটি বিক্রিয়ার বেগ ধ্রুবকের মান $27^{\\circ}\\mathrm{C}$ তাপমাত্রায় বেগ ধ্রুবকের মানের দ্বিগুণ হলে বিক্রিয়াটির সক্রিত শক্তির মান কত $\\mathrm{kJmol^{-1}}$? [SUST'19-20]",
    options: ["108", "0.58", "12.6", "0.136", "53.95"],
    correct_answer: "53.95",
    explanation: "$\\mathrm{Sol^{n}}$: $\\ln\\frac{\\mathrm{k_{2}}}{\\mathrm{k_{1}}} = \\frac{\\mathrm{E_{a}}}{\\mathrm{R}}\\left(\\frac{\\mathrm{T_{2}-T_{1}}}{\\mathrm{T_{1}T_{2}}}\\right)$\n$\\therefore \\mathrm{E_{a}} = \\frac{\\ln 2 \\times 8.314 \\times 300 \\times 310}{10} = 53594\\mathrm{Jmol^{-1}}$\n$= 53.594\\mathrm{kJmol^{-1}}$",
    time_limit: 60
  },
  {
    id: 86320,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবকের উপর প্রভাব বিস্তারকারী নিয়ামক",
    topicId: "chem1_change_t03",
    question_text: "২০. কোনটি খাদ্যদ্রব্য ও বীজ সংরক্ষণের সময় ঋণাত্মক প্রভাবক হিসেবে ব্যবহৃত হয়? [JU'19-20]",
    options: ["সোডিয়াম বেনজয়েট", "অ্যানিসোল", "ফসফরিক এসিড", "কোনটিই নয়"],
    correct_answer: "সোডিয়াম বেনজয়েট",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86321,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবকের উপর প্রভাব বিস্তারকারী নিয়ামক",
    topicId: "chem1_change_t03",
    question_text: "২১. কোনটি শিল্পক্ষেত্রে মিথানল উৎপাদনে প্রভাবক হিসেবে কাজ করে? [JU'19-20]",
    options: ["$\\mathrm{Pt}$ অথবা $\\mathrm{V_{2}O_{5}}$", "$\\mathrm{Pt}$ এবং $\\mathrm{Rh}$", "$\\mathrm{CO}$ অথবা $\\mathrm{Al_{2}O_{3}}$", "$\\mathrm{ZnO}$ অথবা $\\mathrm{Cr_{2}O_{3}}$"],
    correct_answer: "$\\mathrm{ZnO}$ অথবা $\\mathrm{Cr_{2}O_{3}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86322,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবকের উপর প্রভাব বিস্তারকারী নিয়ামক",
    topicId: "chem1_change_t03",
    question_text: "২২. বিক্রিয়ায় প্রভাবকের কাজ হল- [DU'13-14]",
    options: ["সাম্যাবস্থা ডান দিকে নেয়া", "বিক্রিয়ার সক্রিয়ন শক্তি, $\\mathrm{E_{a}}$ কমানো", "বিক্রিয়ার এনথালপি বৃদ্ধি করা", "সাম্য মিশ্রণে উৎপাদের % পরিমাণ বৃদ্ধি করা"],
    correct_answer: "বিক্রিয়ার সক্রিয়ন শক্তি, $\\mathrm{E_{a}}$ কমানো",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86323,
    topic: "বিক্রিয়ার হার ও হার ধ্রুবকের উপর প্রভাব বিস্তারকারী নিয়ামক",
    topicId: "chem1_change_t03",
    question_text: "২৩. পাশের চিত্র হতে বিক্রিয়ার সক্রিয়ন শক্তি এবং $\\Delta\\mathrm{H}$ কত? [KU'14-15]\n[এখানে চিত্র ছিল]",
    options: ["$112\\mathrm{kJmol^{-1}}, -35\\mathrm{kJmol^{-1}}$", "$112\\mathrm{kJmol^{-1}}, 35\\mathrm{kJmol^{-1}}$", "$211\\mathrm{kJmol^{-1}}, 35\\mathrm{kJmol^{-1}}$", "$-112\\mathrm{kJmol^{-1}}, -35\\mathrm{kJmol^{-1}}$"],
    correct_answer: "$112\\mathrm{kJmol^{-1}}, 35\\mathrm{kJmol^{-1}}$",
    explanation: "$\\mathrm{Sol^{n}}$: সক্রিয়ন শক্তি $= \\mathrm{E_{A}} - \\mathrm{E_{R}}$\n$= 112\\mathrm{kJmol^{-1}}$; $\\Delta\\mathrm{H} = \\mathrm{E_{r}} - \\mathrm{E_{p}} = 35\\mathrm{Kjmol^{-1}}$",
    time_limit: 60
  },
  // --- T-04: বিক্রিয়ার ক্রম ---
  {
    id: 86424,
    topic: "বিক্রিয়ার ক্রম",
    topicId: "chem1_change_t04",
    question_text: "২৪. $\\mathrm{C^{14}}$ এর অর্ধায়ুষ্কাল হলো $5760$ বছর। $200\\mathrm{mg}$ $\\mathrm{C^{14}}$ এর পরিমাণ $25\\mathrm{mg}$ এ পরিণত হতে কত বছর? [RU'25-26]",
    options: ["11520", "14040", "23040", "17280"],
    correct_answer: "17280",
    explanation: "$\\mathrm{Sol^{n}}$: $t_{\\frac{1}{2}} = \\frac{\\ln 2}{k} \\Rightarrow k = \\frac{\\ln 2}{5760}\\mathrm{y^{-1}} \\Rightarrow \\ln\\frac{W_{0}}{W} = kt$\n$\\Rightarrow \\ln\\frac{200}{25} = \\frac{\\ln 2}{5760} \\times t$\n$\\Rightarrow \\ln 2^{3} = \\frac{\\ln 2}{5760} \\times t \\Rightarrow 3 \\times 5760 = t$\n$\\therefore t = 17280\\mathrm{y}$",
    time_limit: 60
  },
  {
    id: 86425,
    topic: "বিক্রিয়ার ক্রম",
    topicId: "chem1_change_t04",
    question_text: "২৫. $\\mathrm{A \\rightarrow P}$ বিক্রিয়ার হার বিক্রিয়কের ঘনমাত্রার সমানুপাতিক। বিক্রিয়াটির $75\\%$ সম্পন্ন হতে $\\mathrm{t}$ সময় লাগে। এখানে $\\mathrm{t}$ হলো- [SUST'25-26]",
    options: ["$t = \\frac{2\\ln 2}{k}$", "$t = \\frac{\\ln 2}{k}$", "$t = \\frac{3\\ln 2}{4k}$", "$t = \\frac{\\ln 4}{4k}$"],
    correct_answer: "$t = \\frac{2\\ln 2}{k}$",
    explanation: "$\\mathrm{Sol^{n}}$: বিক্রিয়াটি প্রথম ক্রমের। সুতরাং,\nপ্রারম্ভিক অবস্থায় $a = 100$\n$t$ সময় পর $(a - x) = 100 - 75 = 25$\n$k = \\frac{1}{t}\\ln\\frac{a}{a-x} \\Rightarrow t = \\frac{1}{k}\\ln\\left(\\frac{100}{25}\\right) = \\frac{\\ln 4}{k} = \\frac{\\ln 2^{2}}{k}$\n$\\therefore t = \\frac{2\\ln 2}{k}$",
    time_limit: 60
  },
  {
    id: 86426,
    topic: "বিক্রিয়ার ক্রম",
    topicId: "chem1_change_t04",
    question_text: "২৬. কোনো ১ ম ক্রম বিক্রিয়াটির অর্ধেক ৫ মিনিটে সম্পন্ন হলে বিক্রিয়াটির হার ধ্রুবক কত? [RU'24-25]",
    options: ["$2.3 \\times 10^{-4}$", "$2.3 \\times 10^{-3}$", "$2.6 \\times 10^{-3}$", "$2.4 \\times 10^{-4}$"],
    correct_answer: "$2.3 \\times 10^{-3}$",
    explanation: "$\\mathrm{Sol^{n}}$: প্রথম ক্রম বিক্রিয়ার জন্য, $k = \\frac{\\ln 2}{t_{\\frac{1}{2}}}$\n$= \\frac{0.693}{5 \\times 60} = \\frac{0.7}{300} = \\frac{7}{3} \\times 10^{-3} = 2.3 \\times 10^{-3}\\mathrm{s^{-1}}$",
    time_limit: 60
  },
  {
    id: 86427,
    topic: "বিক্রিয়ার ক্রম",
    topicId: "chem1_change_t04",
    question_text: "২৭. একটি প্রথম ক্রম বিক্রিয়ার অর্ধাযু $28$ সেকেন্ড। কত সময়ে বিক্রিয়কের এক-অষ্টমাংশ অবশিষ্ট থাকবে? [Agri'24-25]",
    options: ["$24\\mathrm{s}$", "$56\\mathrm{s}$", "$84\\mathrm{s}$", "$112\\mathrm{s}$"],
    correct_answer: "$84\\mathrm{s}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\frac{1}{2}$ অংশ হতে সময় লাগে $28\\mathrm{s}$\n$\\frac{1}{4}$ অংশ হতে সময় লাগে $56\\mathrm{s}$\n$\\frac{1}{8}$ অংশ হতে সময় লাগে $84\\mathrm{s}$",
    time_limit: 60
  },
  {
    id: 86428,
    topic: "বিক্রিয়ার ক্রম",
    topicId: "chem1_change_t04",
    question_text: "২৮. একটি ১ম ক্রম বিক্রিয়ার অর্ধেক বিক্রিয়ক বিয়োজিত হতে $300\\mathrm{s}$ সময় লাগে। কতক্ষণ পর এক-অষ্টমাংশ অবশিষ্ট থাকবে? [CoU'24-25]",
    options: ["$900\\mathrm{s}$", "$9.004\\mathrm{s}$", "$90.04\\mathrm{s}$", "$9004\\mathrm{s}$"],
    correct_answer: "$900\\mathrm{s}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\frac{1}{2} A_{0}$ হওয়ার জন্য সময় লাগে $300\\mathrm{s}$\n$\\frac{1}{4} A_{0}$ হওয়ার জন্য সময় লাগে $600\\mathrm{s}$\n$\\frac{1}{8} A_{0}$ হওয়ার জন্য সময় লাগে $900\\mathrm{s}$",
    time_limit: 60
  },
  {
    id: 86429,
    topic: "বিক্রিয়ার ক্রম",
    topicId: "chem1_change_t04",
    question_text: "২৯. নিচের কোনটি শূন্য ক্রমের বিক্রিয়া? [RU'23-24]",
    options: ["$\\mathrm{H_{2}(g) + Cl_{2}(g) \\xrightarrow{h\\nu} 2HCl(g)}$", "$\\mathrm{H_{2}(g) + I_{2}(g) \\rightleftharpoons 2HI(g)}$", "$\\mathrm{2N_{2}O_{5}(g) \\rightarrow 4NO_{2}(g) + O_{2}(g)}$", "$\\mathrm{PCl_{5}(g) \\rightleftharpoons PCl_{3}(g) + Cl_{2}(g)}$"],
    correct_answer: "$\\mathrm{H_{2}(g) + Cl_{2}(g) \\xrightarrow{h\\nu} 2HCl(g)}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86430,
    topic: "বিক্রিয়ার ক্রম",
    topicId: "chem1_change_t04",
    question_text: "৩০. একটি প্রথম ক্রম বিক্রিয়ার $50\\%$ সমাপ্ত হতে $10$ মিনিট সময় লাগে। বিক্রিয়াটির $75\\%$ সমাপ্ত হতে কত $s$ সময় লাগে? [RU'22-23]",
    options: ["1000", "1200", "1400", "1600"],
    correct_answer: "1200",
    explanation: "$\\mathrm{Sol^{n}}$: $T_{\\frac{1}{2}} = 10\\mathrm{min} \\therefore \\lambda = \\frac{\\ln 2}{T_{\\frac{1}{2}}} = \\frac{\\ln 2}{10}\\mathrm{min^{-1}}$\n$C = \\frac{1}{4} C_{0} \\Rightarrow C = C_{0}e^{-\\lambda t}$\n$\\Rightarrow \\frac{1}{4} C_{0} = C_{0}e^{-\\lambda t} \\Rightarrow \\frac{1}{4} = e^{-\\lambda t}$\n$\\Rightarrow 4 = e^{\\lambda t} \\Rightarrow \\ln 4 = \\lambda t \\Rightarrow \\ln 4 = \\frac{\\ln 2}{10} t$\n$\\Rightarrow 2\\ln 2 = \\frac{\\ln 2}{10} t \\Rightarrow t = 20\\mathrm{min} = 1200\\mathrm{s}$",
    time_limit: 60
  },
  {
    id: 86431,
    topic: "বিক্রিয়ার ক্রম",
    topicId: "chem1_change_t04",
    question_text: "৩১. একটি বিক্রিয়া $10$ ও $30$ ঘণ্টায় যথাক্রমে $50\\%$ ও $87.5\\%$ সম্পন্ন হলে এটি কোন ক্রম বিক্রিয়া অনুসরণ করে? [GST'21-22]",
    options: ["শূন্য", "১ম", "২য়", "৩য়"],
    correct_answer: "১ম",
    explanation: "$\\mathrm{Sol^{n}}$: $50\\%$ $10$ ঘণ্টায় শেষ হলে অর্থাৎ $10$ ঘণ্টা\n$N = N_{0}e^{-\\lambda t}$\n$12.5 = 100e^{-\\frac{\\ln 2 \\times t}{t_{1/2}}}$\n$\\left[\\lambda = \\frac{\\ln 2}{t_{1/2}}\\right]$\n$\\ln\\left(\\frac{12.5}{100}\\right) = -\\frac{\\ln 2 \\times t}{10}$\n$t = \\frac{-\\ln\\left(\\frac{12.5}{100}\\right)}{\\ln 2} \\times 10 = 30$ ঘণ্টা\nযেহেতু $30$ ঘণ্টা পর $87.5\\%$ বিক্রিয়া সম্পন্ন হয় এবং বিক্রিয়াটি $(N = N_{0}e^{-\\lambda t})$ সূত্র অনুসরণ করে, তাই এটি ১ম ক্রম বিক্রিয়া।",
    time_limit: 60
  },
  {
    id: 86432,
    topic: "বিক্রিয়ার ক্রম",
    topicId: "chem1_change_t04",
    question_text: "৩২. নিচের কোন নিয়ামক দ্বারা বিক্রিয়ার ক্রম নির্ধারিত হয়? [RU'21-22]",
    options: ["বিক্রিয়ার কৌশল ও বিক্রিয়কের ঘনমাত্রা", "চাপ", "বিক্রিয়ার আণবিকত্ব", "তাপমাত্রা"],
    correct_answer: "বিক্রিয়ার কৌশল ও বিক্রিয়কের ঘনমাত্রা",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86433,
    topic: "বিক্রিয়ার ক্রম",
    topicId: "chem1_change_t04",
    question_text: "৩৩. একটি প্রথম ক্রম বিক্রিয়ার বিক্রিয়কের ঘনমাত্রা $60\\mathrm{s}$ এ $2.0\\mathrm{mol/L}$ থেকে $1.0\\mathrm{mol/L}$ এ নেমে আসে। বিক্রিয়কের ঘনমাত্রা $0.5\\mathrm{mol/L}$ থেকে $0.125\\mathrm{mol/L}$ এ নেমে আসতে কত $s$ সময় লাগবে? [GST'20-21]",
    options: ["15", "30", "60", "120"],
    correct_answer: "120",
    explanation: "$\\mathrm{Sol^{n}}$: $t = \\frac{1}{k}\\ln\\frac{A_{0}}{A_{t}} \\Rightarrow k = \\frac{1}{60}\\ln\\frac{2}{1} = 0.01155$;\n$t = \\frac{1}{0.01155}\\ln\\frac{0.5}{0.125} = 120$\n$2 \\xrightarrow{60\\mathrm{sec}\\ \\text{অর্থাৎ}} 1 \\xrightarrow{60\\mathrm{sec}} 0.5 \\xrightarrow{60\\mathrm{sec}} 0.25 \\xrightarrow{60\\mathrm{sec}} 0.125$\n$\\therefore \\text{Total} = 120\\mathrm{sec}$.",
    time_limit: 60
  },
  // --- T-05: রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ ---
  {
    id: 86534,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৩৪. যে সাম্যাবস্থায় কোন উভমুখী বিক্রিয়ায় সব কয়টি বিক্রিয়ক ও উৎপাদ একই ভৌত অবস্থায় থাকে তাকে কী বলা হয়? [JU'25-26]",
    options: ["অসমসত্ত্ব সাম্যাবস্থা", "সমসত্ত্ব সাম্যাবস্থা", "আয়নিক সাম্যাবস্থা", "সমযোজী সাম্যাবস্থা"],
    correct_answer: "সমসত্ত্ব সাম্যাবস্থা",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86535,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৩৫. $\\mathrm{N_{2}O_{4} \\rightleftharpoons 2NO_{2}}$ + তাপ; এই বিক্রিয়ায় তাপ প্রয়োগ করা হলে উৎপন্ন $\\mathrm{NO_{2}}$ এর পরিমাণ কি হবে? [JU'25-26]",
    options: ["হ্রাস পাবে", "বৃদ্ধি পাবে", "অপরিবর্তনীয়", "অনিশ্চিত"],
    correct_answer: "হ্রাস পাবে",
    explanation: "$\\mathrm{Sol^{n}}$: বিক্রিয়াটি তাপোৎপাদী।\n[বি:দ্র: প্রকৃতপক্ষে বিক্রিয়াটি কিন্তু তাপহারী।]",
    time_limit: 60
  },
  {
    id: 86536,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৩৬. একটি তাপোৎপাদী উভমুখী বিক্রিয়ার তাপমাত্রা বাড়ালে- [RU'25-26; DU'17-18]",
    options: ["পশ্চাৎ বিক্রিয়ার গতি কমবে", "সম্মুখ বিক্রিয়ার গতি বাড়বে", "সাম্য ধ্রুবকের মান কমবে", "সাম্যাবস্থা অপরিবর্তিত থাকবে"],
    correct_answer: "সাম্য ধ্রুবকের মান কমবে",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86537,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৩৭. একটি উভমুখী বিক্রিয়ার সাম্যাবস্থা নির্ভর করে- [CU'25-26]",
    options: ["বিক্রিয়ক ও উৎপাদের ঘনমাত্রার উপর", "বিক্রিয়ার চাপের উপর", "বিক্রিয়ার তাপমাত্রার উপর", "উল্লেখিত সকল বিষয়ের উপর"],
    correct_answer: "উল্লেখিত সকল বিষয়ের উপর",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86538,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৩৮. হেবার প্রণালীতে, $\\mathrm{N_{2} + 3H_{2} \\rightleftharpoons 2NH_{3}}$ বিক্রিয়ায় সর্বোচ্চ উৎপাদ পেতে কোন শর্তটি সঠিক নয়? [CoU'25-26]",
    options: ["$450^{\\circ}\\mathrm{C}$ হতে $550^{\\circ}\\mathrm{C}$ পর্যন্ত তাপমাত্রা প্রয়োগ করতে হয়", "$50 - 60\\mathrm{atm}$ চাপ প্রয়োগ করতে হয়", "$\\Delta\\mathrm{H} = -92.2\\mathrm{kJ/mol}$", "$\\mathrm{Fe}$-চূর্ণ প্রভাবক হিসেবে ব্যবহৃত হয়"],
    correct_answer: "$50 - 60\\mathrm{atm}$ চাপ প্রয়োগ করতে হয়",
    explanation: "$\\mathrm{Sol^{n}}$: হেবার প্রণালীতে $200\\mathrm{atm}$ চাপ প্রয়োগ করা হয়।",
    time_limit: 60
  },
  {
    id: 86539,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৩৯. একটি তাপোৎপাদী উভমুখী বিক্রিয়ার সাম্যাঙ্ক $\\mathrm{K_{p}}$, $\\log \\mathrm{K_{p}}$ এবং $\\frac{1}{\\mathrm{T}}$ লেখচিত্রের ঢালের মান হবে- [SUST'25-26]",
    options: ["$-\\frac{\\Delta\\mathrm{H}}{2.3\\mathrm{R}}$", "$\\frac{\\Delta\\mathrm{H}}{2.3\\mathrm{R}}$", "$-\\frac{\\Delta\\mathrm{H}}{\\mathrm{R}}$", "$\\frac{\\Delta\\mathrm{H}}{\\mathrm{R}}$"],
    correct_answer: "$\\frac{\\Delta\\mathrm{H}}{2.3\\mathrm{R}}$",
    explanation: "$\\mathrm{Sol^{n}}$: তাপ উৎপাদী বিক্রিয়ার ক্ষেত্রে $\\log \\mathrm{K_{p}}$ এবং $\\frac{1}{\\mathrm{T}}$ লেখচিত্রের ঢাল $= -\\frac{\\Delta\\mathrm{H}}{2.303\\mathrm{R}}$ $[\\because \\Delta\\mathrm{H} = -\\mathrm{ve}]$",
    time_limit: 60
  },
  {
    id: 86540,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৪০. লা-শাতেলিয়ারের নীতি প্রয়োগ করে উৎপাদন বৃদ্ধিতে কিসের পরিবর্তন করা হয়? [KU'24-25]",
    options: ["তাপমাত্রা", "চাপ", "ঘনমাত্রা", "কোনোটিই নয়"],
    correct_answer: "তাপমাত্রা",
    explanation: "$\\mathrm{Sol^{n}}$: তাপমাত্রা, চাপ ও ঘনমাত্রা হলো উভমুখী বিক্রিয়ায় সাম্যাবস্থার তিনটি নিয়ামক।\nনোট: বইয়ের উত্তর একাধিক অপশন (ক, খ, গ): তাপমাত্রা, চাপ, ঘনমাত্রা — অ্যাপে প্রথম অপশনটি সঠিক ধরা হয়েছে।",
    time_limit: 60
  },
  {
    id: 86541,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৪১. বিক্রিয়ার সাম্যের উপর কোনটির প্রভাব নেই? [RU'23-24]",
    options: ["চাপ", "প্রভাবক", "ঘনমাত্রা", "তাপমাত্রা"],
    correct_answer: "প্রভাবক",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86542,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৪২. $\\mathrm{2SO_{2}(g) + O_{2}(g) \\rightleftharpoons 2SO_{3}(g)}$ + তাপ; তাপমাত্রা হ্রাস করলে এ বিক্রিয়ায় কী ঘটে? [JU'23-24]",
    options: ["$\\mathrm{K_{c}}$ এর মান বৃদ্ধি পায়", "$\\mathrm{K_{p}}$ এর মান বৃদ্ধি পায়", "বিক্রিয়ার হার বৃদ্ধি পায়", "সাম্যাবস্থা বাম দিকে যায়"],
    correct_answer: "$\\mathrm{K_{c}}$ এর মান বৃদ্ধি পায়",
    explanation: "$\\mathrm{Sol^{n}}$: তাপোৎপাদী বিক্রিয়ায় তাপমাত্রা হ্রাস করলে $\\mathrm{K_{p}}, \\mathrm{K_{c}}$ এর মান বৃদ্ধি পায়।\nনোট: বইয়ের উত্তর একাধিক অপশন (ক, খ): $\\mathrm{K_{c}}$ এর মান বৃদ্ধি পায়, $\\mathrm{K_{p}}$ এর মান বৃদ্ধি পায় — অ্যাপে প্রথম অপশনটি সঠিক ধরা হয়েছে।",
    time_limit: 60
  },
  {
    id: 86543,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৪৩. তাপমাত্রা বাড়ালে উভমুখী তাপহারী সাম্যবিক্রিয়ার ক্ষেত্রে বিক্রিয়ার নতুন সাম্যাবস্থায় কী ঘটে? [JU'23-24]",
    options: ["উৎপাদের পরিমাণ কমে যায়", "বিক্রিয়কের পরিমাণ বেড়ে যায়", "বিক্রিয়কের পরিমাণ কমে যায়", "সাম্যাঙ্ককের মান কমে যায়"],
    correct_answer: "বিক্রিয়কের পরিমাণ কমে যায়",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86544,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৪৪. সকল তাপোৎপাদী বিক্রিয়ায় তাপমাত্রা বৃদ্ধি করলে কী ঘটে? [JU'23-24]",
    options: ["সাম্যাঙ্কের মান বৃদ্ধি পায়", "সাম্যাঙ্কের মান অপরিবর্তিত থাকে", "সাম্যাঙ্কের মান হ্রাস পায়", "উৎপাদন বেড়ে যায়"],
    correct_answer: "সাম্যাঙ্কের মান হ্রাস পায়",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86545,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৪৫. $\\mathrm{N_{2}(g) + 3H_{2}(g) \\rightleftharpoons 2NH_{3}(g)}$, $\\Delta\\mathrm{H} = -92.4\\mathrm{kJ/mol}$ বিক্রিয়ায় $\\mathrm{NH_{3}}$ এর উৎপাদন কমাবে কোনটি? [GST'21-22]",
    options: ["চাপের বৃদ্ধি", "তাপমাত্রার বৃদ্ধি", "$\\mathrm{N_{2}}$ যোগ করলে", "$\\mathrm{H_{2}}$ যোগ করলে"],
    correct_answer: "তাপমাত্রার বৃদ্ধি",
    explanation: "$\\mathrm{Sol^{n}}$: লা-শাতেলিয়ারের নীতি অনুযায়ী, তাপোৎপাদী বিক্রিয়ায় সাম্যাবস্থায় তাপমাত্রা বৃদ্ধি করলে সাম্যাবস্থা বামে সরে যাবে। অর্থাৎ, উৎপাদন কমে যাবে। প্রদত্ত বিক্রিয়ার $\\Delta\\mathrm{H} (-)\\mathrm{ve}$, তাই তাপোৎপাদী বিক্রিয়া। সুতরাং, তাপমাত্রা বৃদ্ধি করলে $\\mathrm{NH_{3}}$ এর উৎপাদন কম হবে।",
    time_limit: 60
  },
  {
    id: 86546,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৪৬. যদি $\\mathrm{A(g) + B(g) \\rightleftharpoons 2C(g)}$ বিক্রিয়াটি তাপোৎপাদী হয়, তবে নিম্নের কোনটিতে উৎপাদ বৃদ্ধি পাবে? [RU'21-22]",
    options: ["প্রভাবক যোগ করলে", "চাপ বাড়ালে", "তাপ বৃদ্ধি করলে", "তাপমাত্রা কমালে"],
    correct_answer: "তাপমাত্রা কমালে",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86547,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৪৭. নির্দিষ্ট তাপমাত্রায় নিচের কোন সাম্য বিক্রিয়ায় চাপের প্রভাব নেই? [RU'21-22]",
    options: ["$\\mathrm{2PbS(s) + 3O_{2}(g) \\rightleftharpoons 2PbO(s) + 2SO_{2}(g)}$", "$\\mathrm{PCl_{5}(g) \\rightleftharpoons PCl_{3}(g) + Cl_{2}(g)}$", "$\\mathrm{H_{2}(g) + CO_{2}(g) \\rightleftharpoons H_{2}O(g) + CO(g)}$", "$\\mathrm{N_{2}(g) + 3H_{2}(g) \\rightleftharpoons 2NH_{3}(g)}$"],
    correct_answer: "$\\mathrm{H_{2}(g) + CO_{2}(g) \\rightleftharpoons H_{2}O(g) + CO(g)}$",
    explanation: "$\\mathrm{Sol^{n}}$: Option (c) এর বিক্রিয়ায় বিক্রিয়ক এবং উৎপাদের মোট গ্যাসীয় অণুর সংখ্যা সমান হওয়ায়, বিক্রিয়াটিতে চাপের প্রভাব নেই।",
    time_limit: 60
  },
  {
    id: 86548,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৪৮. কোন উক্তিগুলো সঠিক? [JU'21-22]\n(i) কোনো বিক্রিয়া সাম্যাবস্থায় পৌঁছায় যখন বিক্রিয়াটি আবদ্ধ পাত্রে সম্পন্ন হয়\n(ii) সাম্যাবস্থায় সম্মুখ বিক্রিয়া স্থির হয়ে যায়\n(iii) সাম্যাবস্থায় পশ্চাৎমুখী বিক্রিয়া স্থির হয়ে যায়\n(iv) সাম্যাবস্থা আসলে গতিশীল সাম্য\nনিচের কোনটি সঠিক?",
    options: ["i, ii, iv", "i, iii", "i, iv", "ii, iii, iv"],
    correct_answer: "i, iv",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86549,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৪৯. রাসায়নিক সাম্যাবস্থার ক্ষেত্রে প্রযোজ্য নয় কোনটি? [JU'21-22]\n(i) বিক্রিয়ার উভয় দিক থেকেই সাম্যাবস্থায় পৌঁছানো যায়\n(ii) বিক্রিয়ার অসম্পূর্ণতা থাকে না\n(iii) সম্মুখ ও পশ্চাৎমুখী বিক্রিয়ার গতিবেগ ভিন্ন হয়\n(iv) বিক্রিয়ক ও বিক্রিয়াজাত পদার্থসমূহ সব সময় একই ভৌত অবস্থায় থাকে\nনিচের কোনটি সঠিক?",
    options: ["ii,iii,iv", "i, ii, iii", "i, ii, iv", "i, iii"],
    correct_answer: "ii,iii,iv",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86550,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৫০. সাম্যাঙ্কের উপর তাপমাত্রার প্রভাব ব্যাখ্যার জন্য ভ্যান্ট হফের সমীকরণ কোনটি? [JU'21-22]",
    options: ["$\\log \\mathrm{K_{p}} = -\\left(\\frac{\\Delta\\mathrm{H}}{2.303\\mathrm{R}}\\right)\\left(\\frac{1}{\\mathrm{T}}\\right) + \\text{ধ্রুবক}$", "$\\log \\mathrm{K_{p}} = -\\left(\\frac{\\Delta\\mathrm{H\\ S}}{2.303\\mathrm{R}}\\right)\\left(\\frac{1}{\\mathrm{T}}\\right) + \\text{ধ্রুবক}$", "$-\\log \\mathrm{K_{p}} = \\left(\\frac{\\Delta\\mathrm{H}}{2.303\\mathrm{R}}\\right)\\left(\\frac{1}{\\mathrm{T}}\\right) + \\text{ধ্রুবক}$", "$\\log \\mathrm{K_{p}} = -\\left(\\frac{\\Delta\\mathrm{H\\ R}}{2.303}\\right)\\left(\\frac{1}{\\mathrm{T}}\\right) + \\text{ধ্রুবক}$"],
    correct_answer: "$\\log \\mathrm{K_{p}} = -\\left(\\frac{\\Delta\\mathrm{H}}{2.303\\mathrm{R}}\\right)\\left(\\frac{1}{\\mathrm{T}}\\right) + \\text{ধ্রুবক}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86551,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৫১. $\\mathrm{A_{2}(g) + B_{2}(g) \\rightleftharpoons 2AB(g)}; \\Delta\\mathrm{H} = +\\mathrm{ve}$ [JU'20-21]\n(i) বিক্রিয়াটি তাপহারী\n(ii) সাম্য ধ্রুবক $\\mathrm{K_{p}}$ ও $\\mathrm{K_{c}}$ এর মান সমান\n(iii) সাম্যাবস্থার উপর চাপের কোন প্রভাব নেই\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "i, iii", "ii, iii", "i, ii, iii"],
    correct_answer: "i, ii, iii",
    explanation: "$\\mathrm{Sol^{n}}$: $\\Delta\\mathrm{H}$ ধনাত্মক $\\therefore$ বিক্রিয়াটি তাপহারী।\n$\\Delta\\mathrm{n} = 2 - (1 + 1) = 0 \\therefore$ সাম্যাবস্থায় চাপের প্রভাব নেই; $\\mathrm{K_{p}} = \\mathrm{K_{c}(RT)^{\\Delta n}} = \\mathrm{K_{c}(RT)^{0}} = \\mathrm{K_{c}}$",
    time_limit: 60
  },
  {
    id: 86552,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৫২. $\\mathrm{PCl_{5}(g) \\rightleftharpoons PCl_{3}(g) + Cl_{2}(g)}; \\Delta\\mathrm{H} = +90\\mathrm{kJmol^{-1}}$, এই বিক্রিয়াটির তাপ কমালে এবং চাপ বাড়ালে সাম্যাবস্থার কী পরিবর্তন হবে? [SUST'19-20]",
    options: ["পশ্চাৎমুখী অগ্রসর হবে", "সম্মুখে অগ্রসর হবে", "অপরিবর্তিত থাকবে", "$\\mathrm{Cl_{2}}$ এর উৎপাদন বৃদ্ধি পাবে", "অনুঘটক নির্ধারণ করবে"],
    correct_answer: "পশ্চাৎমুখী অগ্রসর হবে",
    explanation: "$\\mathrm{Sol^{n}}$: তাপহারী বিক্রিয়ায় তাপ কমালে বিক্রিয়া পশ্চাৎমুখী হয়। আবার বিক্রিয়কের মোল সংখ্যা উৎপাদের মোল সংখ্যা অপেক্ষা কম বলে চাপ বাড়ালে বিক্রিয়া পশ্চাৎমুখী হবে।",
    time_limit: 60
  },
  {
    id: 86553,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৫৩. $\\mathrm{N_{2}O_{4}(g)}$ বিযোজিত হয়ে $\\mathrm{NO_{2}(g)}$ তৈরি হয়। এই সিস্টেমে চাপ বৃদ্ধি করলে কোনটি ঘটবে? [BU'17-18]",
    options: ["বিয়োজন হার হ্রাস পাবে", "বিয়োজন হার বৃদ্ধি পাবে", "তাপোৎপাদী হবে", "তাপ শোষণ করবে"],
    correct_answer: "বিয়োজন হার হ্রাস পাবে",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{N_{2}O_{4} \\rightleftharpoons 2NO_{2}}$; লা শাতেলিয়ার নীতি অনুযায়ী, চাপ বৃদ্ধিতে বিক্রিয়া পশ্চাৎমুখী হয়। অর্থাৎ বিয়োজন হার হ্রাস পাবে।",
    time_limit: 60
  },
  {
    id: 86554,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৫৪. $\\mathrm{3Fe(s) + 4H_{2}O(g) \\rightleftharpoons 4H_{2}(g) + Fe_{3}O_{4}(s)}$;\n$\\Delta\\mathrm{H} = 35\\mathrm{kJ/mol}$ বিক্রিয়াটি সাম্যাবস্থায় আছে। চাপ বাড়ালে কী ঘটবে? [DU'16-17]",
    options: ["সাম্যাঙ্কবক বৃদ্ধি", "সাম্যাবস্থা কমে যাবে", "সাম্যাবস্থার কোনো পরিবর্তন হবে না", "সাম্যাবস্থার কমে যাবে"],
    correct_answer: "সাম্যাবস্থার কোনো পরিবর্তন হবে না",
    explanation: "$\\mathrm{Sol^{n}}$: $\\Delta\\mathrm{n} = 4 - 4 = 0$\n[$\\mathrm{Fe}$ ও $\\mathrm{Fe_{3}O_{4}}$ কঠিন হওয়ায় গণনায় আসবে না]",
    time_limit: 60
  },
  {
    id: 86555,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৫৫. নিচের কোন বিক্রিয়ায় নিম্নচাপে বেশি উৎপাদ পাওয়া যাবে? [RU'16-17]",
    options: ["$\\mathrm{H_{2}(g) + I(g) \\rightleftharpoons 2HI(g)}$", "$\\mathrm{PCl_{5}(g) \\rightleftharpoons PCl_{3}(g) + Cl_{2}(g)}$", "$\\mathrm{N_{2}(g) + 3H_{2}(g) \\rightleftharpoons 2NH_{3}(g)}$", "$\\mathrm{N_{2}(g) + O_{2}(g) \\rightleftharpoons 2NO(g)}$"],
    correct_answer: "$\\mathrm{PCl_{5}(g) \\rightleftharpoons PCl_{3}(g) + Cl_{2}(g)}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86556,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৫৬. তাপহারী বিক্রিয়ায় তাপ প্রয়োগ করলে সাম্যের অবস্থান- [JU'16-17, 14-15, 10-11; CU'03-04]",
    options: ["পিছনের দিকে সরে যাবে", "সামনের দিকে সরে যাবে", "অপরিবর্তিত থাকবে", "বিনষ্ট হবে"],
    correct_answer: "সামনের দিকে সরে যাবে",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86557,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৫৭. কোনো বিক্রিয়ার সাম্যাধ্রুবক এবং হার ধ্রুবক উভয়েই যে নিয়ামক দ্বারা প্রভাবিত হয় তা হলো- [DU'15-16]",
    options: ["শুধু প্রভাবক", "শুধু তাপমাত্রা", "শুধু চাপ", "তাপমাত্রা, চাপ এবং ঘনমাত্রা"],
    correct_answer: "শুধু তাপমাত্রা",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86558,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৫৮. $\\mathrm{2A + B \\rightleftharpoons C + D}$ বিক্রিয়াটি তাপোৎপাদী; সর্বোচ্চ উৎপাদ পেতে নিচের কোন শর্ত যুগল কার্যকর হবে? [RU'15-16]",
    options: ["বেশি চাপ – বেশি তাপমাত্রা", "কম চাপ – বেশি তাপমাত্রা", "বেশি চাপ – কম তাপমাত্রা", "কম চাপ – কম তাপমাত্রা"],
    correct_answer: "বেশি চাপ – কম তাপমাত্রা",
    explanation: "$\\mathrm{Sol^{n}}$: কিছু বলা না থাকলে, বিক্রিয়ক ও উৎপাদ সবগুলোকে গ্যাস ধরে নিতে হবে। যেহেতু তাপোৎপাদী বিক্রিয়া, তাই কম তাপমাত্রা দিলে এবং যেহেতু উৎপাদসে অণুর সংখ্যা কম, তাই বেশি চাপ দিলে সর্বোচ্চ উৎপাদ পাওয়া যাবে।",
    time_limit: 60
  },
  {
    id: 86559,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৫৯. $\\mathrm{2SO_{2}(g) + O_{2}(g) \\rightleftharpoons 2SO_{3}(g)}, [\\Delta\\mathrm{H} = -197\\mathrm{kJ}]$ বিক্রিয়াটির ক্ষেত্রে উৎপাদন বাড়বে- [RU'14-15]",
    options: ["চাপ বাড়ালে", "চাপ কমালে", "তাপ বাড়ালে", "চাপ ও তাপ সমানভাবে বাড়ালে"],
    correct_answer: "চাপ বাড়ালে",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86560,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৬০. স্পর্শ পদ্ধতিতে $\\mathrm{H_{2}SO_{4}}$ উৎপাদনে $\\mathrm{SO_{2}}$ এর জারণ দ্বারা $\\mathrm{SO_{3}}$ উৎপাদনে প্রভাবক- [JU'14-15]",
    options: ["$\\mathrm{Pt}$ চূর্ণ", "$\\mathrm{Ni}$ চূর্ণ", "$\\mathrm{Fe}$ চূর্ণ", "$\\mathrm{Al_{2}O_{3}}$"],
    correct_answer: "$\\mathrm{Pt}$ চূর্ণ",
    explanation: "$\\mathrm{Sol^{n}}$: স্পর্শ পদ্ধতিতে $\\mathrm{Pt}$ চূর্ণ অথবা $\\mathrm{V_{2}O_{5}}$ প্রভাবক হিসেবে ব্যবহার করা হয়।",
    time_limit: 60
  },
  {
    id: 86561,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৬১. অনুঘটক সংযোগের ফলে সাম্যের অবস্থান পরিবর্তিত হবে- [JU'14-15]",
    options: ["ডানদিকে", "বামদিকে", "কোনদিকে নয়", "তিনটির কোনটিই নয়"],
    correct_answer: "কোনদিকে নয়",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86562,
    topic: "রাসায়নিক সাম্যাবস্থা, লা-শাতেলিয়ারের নীতি ও ভ্যান্ট হফ এর সমীকরণ",
    topicId: "chem1_change_t05",
    question_text: "৬২. বিক্রিয়ায় প্রভাবকের কাজ হল- [DU'13-14]",
    options: ["সাম্যাবস্থা ডান দিকে নেয়া", "বিক্রিয়ার সক্রিয়ন শক্তি, $\\mathrm{E_{a}}$ কমানো", "বিক্রিয়ার এনথালপি বৃদ্ধি করা", "সাম্য মিশ্রণে উৎপাদের % পরিমাণ বৃদ্ধি করা"],
    correct_answer: "বিক্রিয়ার সক্রিয়ন শক্তি, $\\mathrm{E_{a}}$ কমানো",
    explanation: "$\\mathrm{Sol^{n}}$: প্রভাবক সাম্যাবস্থার উপর কোনো প্রভাব ফেলে না। কিন্তু বিক্রিয়ার সক্রিয়ণ শক্তি কমিয়ে দ্রুত সাম্যাবস্থা অর্জনে সহায়তা করে।",
    time_limit: 60
  },
  // --- T-06: সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা ---
  {
    id: 86663,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৬৩. $\\mathrm{Ag^{+}(aq) + Fe^{2+}(aq) \\rightleftharpoons Fe^{3+}(aq) + Ag(s)}$ বিক্রিয়াটির জন্য সাম্যাঙ্ক, $\\mathrm{K_{c}}$, এর একক কোনটি? [DU'25-26]",
    options: ["একক নাই", "$\\mathrm{molL^{-1}}$", "$\\mathrm{Lmol^{-1}}$", "$\\mathrm{mol^{2}L^{-2}}$"],
    correct_answer: "$\\mathrm{Lmol^{-1}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86664,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৬৪. $\\mathrm{NH_{4}SH(s) \\rightleftharpoons NH_{3}(g) + H_{2}S(g)}$ ক্রিয়ার $\\mathrm{K_{p}}$ ও $\\mathrm{K_{c}}$ এর মধ্যে সম্পর্ক কোনটি? [JnU'25-26]",
    options: ["$\\mathrm{K_{p} = K_{c}(RT)^{-2}}$", "$\\mathrm{K_{p} = K_{c}(RT)^{2}}$", "$\\mathrm{K_{p} = K_{c}RT}$", "$\\mathrm{K_{p} = K_{c}(RT)^{-1}}$"],
    correct_answer: "$\\mathrm{K_{p} = K_{c}(RT)^{2}}$",
    explanation: "$\\mathrm{Sol^{n}}$: উক্ত বিক্রিয়ায়, $\\Delta\\mathrm{n} = (1 + 1) - 0 = 2$\n$\\mathrm{K_{p} = K_{c}(RT)^{\\Delta n}} \\therefore \\mathrm{K_{p} = K_{c}(RT)^{2}}$",
    time_limit: 60
  },
  {
    id: 86665,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৬৫. $\\mathrm{NH_{2}COONH_{4}(s) \\rightleftharpoons 2NH_{3}(g) + CO_{2}(g)}$ [RU'25-26]\nএই উভমুখী বিক্রিয়াটির সাম্যাবস্থায় মোট চাপ $0.225\\mathrm{atm}$ হলে, $\\mathrm{K_{p}}$ এর মান কত?",
    options: ["$1.69 \\times 10^{-3}$", "$1.31 \\times 10^{-2}$", "$2.57 \\times 10^{-3}$", "$2.76 \\times 10^{-2}$"],
    correct_answer: "$1.69 \\times 10^{-3}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{NH_{2}COONH_{4}(s) \\rightleftharpoons 2NH_{3} + CO_{2}}$\nএখানে $\\mathrm{NH_{3}}$ ও $\\mathrm{CO_{2}}$ এর মোলসংখ্যা যথাক্রমে $2$ ও $1$\n$\\therefore \\mathrm{P_{NH_{3}}} = \\frac{2}{1+2} \\times 0.225 = 0.15\\mathrm{atm}$\n$\\mathrm{P_{CO_{2}}} = \\frac{1}{1+2} \\times 0.225 = 0.075$\n$\\therefore \\mathrm{K_{p}} = (\\mathrm{P_{NH_{3}}})^{2} \\times \\mathrm{P_{CO_{2}}}$\n$= (0.15)^{2} \\times 0.075 = 1.69 \\times 10^{-3}$",
    time_limit: 60
  },
  {
    id: 86666,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৬৬. নিম্নের কোন বিক্রিয়াটির জন্য $\\mathrm{K_{p} = K_{c}}$? [CU'25-26; DU'22-23, GST'21-22, CU'20-21]",
    options: ["$\\mathrm{2SO_{2}(g) + O_{2}(g) \\rightleftharpoons 2SO_{3}(g)}$", "$\\mathrm{N_{2}(g) + O_{2}(g) \\rightleftharpoons 2NO(g)}$", "$\\mathrm{N_{2}(g) + 3H_{2}(g) \\rightleftharpoons 2NH_{3}}$", "$\\mathrm{PCl_{3}(g) + Cl_{2}(g) \\rightleftharpoons PCl_{5}(g)}$"],
    correct_answer: "$\\mathrm{N_{2}(g) + O_{2}(g) \\rightleftharpoons 2NO(g)}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86667,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৬৭. $\\mathrm{N_{2}(g) + 3H_{2}(g) \\rightleftharpoons 2NH_{3}(g)}$ বিক্রিয়ায় $\\mathrm{K_{c}} = 1.7 \\times 10^{2}$। এখন $\\mathrm{\\frac{1}{2}N_{2}(g) + \\frac{3}{2}H_{2}(g) \\rightleftharpoons NH_{3}(g)}$ বিক্রিয়াটি পর্যবেক্ষণ করতে গিয়ে একটি $1\\mathrm{L}$ আবদ্ধ পাত্রে $1.0\\mathrm{molH_{2}}, 1.0\\mathrm{molN_{2}}$ এবং $17.0\\mathrm{molNH_{3}}$ এর উপস্থিতি পাওয়া গেল। এই অবস্থায় নিচের কোন সম্পর্কটি সঠিক? [SUST'25-26]",
    options: ["$\\mathrm{Q_{c} < K_{c}}$", "$\\mathrm{Q_{c} > K_{c}}$", "$\\mathrm{Q_{c} = K_{c}}$", "$\\mathrm{K_{p} = K_{c}}$"],
    correct_answer: "$\\mathrm{Q_{c} > K_{c}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{\\frac{1}{2}N_{2}(g) + \\frac{3}{2}H_{2}(g) \\rightleftharpoons NH_{3}(g)}$ বিক্রিয়ার জন্য\n$\\mathrm{K'_{c} = \\sqrt{K_{c}} = \\sqrt{1.7 \\times 10^{2}} = 13.04}$\n$\\therefore \\mathrm{Q_{c} = \\frac{17}{1 \\times 1} = 17}$\nসুতরাং, $\\mathrm{Q_{c} > K'_{c}}$ [বি:দ্র: Option এ $\\mathrm{K'_{c}}$ হবে।]",
    time_limit: 60
  },
  {
    id: 86668,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৬৮. $25^{\\circ}\\mathrm{C}$ তাপমাত্রায় ও $2\\mathrm{atm}$ চাপে $\\mathrm{PCl_{5}}$ $80\\%$ বিযোজিত হয়ে $\\mathrm{PCl_{3}}$ ও $\\mathrm{Cl_{2}}$ উৎপন্ন হয়। $\\mathrm{K_{p}}$ এর মান কত? [CoU'25-26]",
    options: ["2.555", "3.555", "4.555", "5.555"],
    correct_answer: "3.555",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{K_{p} = \\frac{\\alpha^{2}P}{1-\\alpha^{2}} = \\frac{(0.8)^{2} \\times 2}{1-(0.8)^{2}} = 3.555}$",
    time_limit: 60
  },
  {
    id: 86669,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৬৯. যদি বিক্রিয়ক ও উৎপাদের মোল সংখ্যা সমান হয়, তবে $\\mathrm{K_{p}}$ ও $\\mathrm{K_{c}}$ এর সম্পর্ক কী? [Agri.'25-26]",
    options: ["$\\mathrm{K_{p} = 0.5K_{c}}$", "$\\mathrm{K_{p} = K_{c}}$", "$\\mathrm{K_{p} = \\sqrt{K_{c}}}$", "কোনটিই নয়"],
    correct_answer: "$\\mathrm{K_{p} = K_{c}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\Delta\\mathrm{n} = 0, \\mathrm{K_{p} = K_{c}(RT)^{\\Delta n} \\Rightarrow K_{p} = K_{c}(RT)^{\\circ}}$\n$\\Rightarrow \\mathrm{K_{p} = K_{c}}$",
    time_limit: 60
  },
  {
    id: 86670,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৭০. গ্যাসীয় অবস্থায় কোন বিক্রিয়ার সাম্যাবস্থায় $\\mathrm{K_{p}}$ ও $\\mathrm{K_{c}}$ এর মান সমান? [RU'24-25]",
    options: ["$\\mathrm{PCl_{5} \\rightleftharpoons PCl_{3} + Cl_{2}}$", "$\\mathrm{2SO_{2} + O_{2} \\rightleftharpoons 2SO_{3}}$", "$\\mathrm{N_{2} + 3H_{2} \\rightleftharpoons 2NH_{3}}$", "$\\mathrm{H_{2} + I_{2} \\rightleftharpoons 2HI}$"],
    correct_answer: "$\\mathrm{H_{2} + I_{2} \\rightleftharpoons 2HI}$",
    explanation: "$\\mathrm{Sol^{n}}$: ভৌত অবস্থা না দেয়া থাকলেও গ্যাসীয় ধরতে হয়।",
    time_limit: 60
  },
  {
    id: 86671,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৭১. $\\mathrm{2SO_{2}(g) + O_{2}(g) \\rightleftharpoons 2SO_{3}(g)}$ বিক্রিয়ার সাম্যাধ্রুবক, $\\mathrm{K_{c}}$ এর মানকে প্রভাবিত করে কোনটি? [RU'24-25]",
    options: ["তাপমাত্রার প্রভাব", "চাপ বৃদ্ধি", "প্রভাবকের ব্যবহার", "সাম্যাবস্থায় বিক্রিয়ার মিশ্রণ হতে $\\mathrm{SO_{3}}$ অপসারণ"],
    correct_answer: "তাপমাত্রার প্রভাব",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86672,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৭২. সক্রিয় ভর বলতে বোঝায়- [JU'24-25]\n(i) আংশিক চাপ\n(ii) আণবিক ভর\n(iii) মোলার ঘনমাত্রা\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "iii", "i, iii", "ii, iii"],
    correct_answer: "i, iii",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86673,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৭৩. $\\mathrm{N_{2}O_{4}(g) \\rightleftharpoons 2NO_{2}(g)}; 25^{\\circ}\\mathrm{C}$ এ বিক্রিয়ায় $\\mathrm{N_{2}O_{4}(g)}$ ও $\\mathrm{NO_{2}(g)}$ এর আংশিক চাপ যথাক্রমে $0.69\\mathrm{atm}$ ও $0.31\\mathrm{atm}$ হলে $\\mathrm{K_{p}}$ এর মান কত? [KU'24-25]",
    options: ["0.156", "0.139", "0.145", "0.126"],
    correct_answer: "0.139",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{K_{p} = \\frac{P_{NO_{2}}^{2}}{P_{N_{2}O_{4}}} = \\frac{0.31^{2}}{0.69} = 0.139}$",
    time_limit: 60
  },
  {
    id: 86674,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৭৪. $\\mathrm{AB_{3}(g) \\rightleftharpoons AB(g) + B_{2}(g); \\Delta H = +ve}$ বিক্রিয়াটি $\\mathrm{2L}$ ফ্লাস্কে সংঘটিত হয় এবং সাম্যাবস্থায় $40\\%$ $\\mathrm{AB_{3}}$ বিযোজিত হয়। বিক্রিয়াটি $\\mathrm{K_{c}}$ এর মান কত? [CU'24-25]",
    options: ["$0.008\\mathrm{molL^{-1}}$", "$0.133\\mathrm{molL^{-1}}$", "$3.133\\mathrm{molL^{-1}}$", "$0.08\\mathrm{molL^{-1}}$"],
    correct_answer: "$0.133\\mathrm{molL^{-1}}$",
    explanation: "$\\mathrm{Sol^{n}}$: এখানে, $\\alpha = 40\\% = 0.4$\n$\\mathrm{K_{c} = \\frac{\\alpha^{2}}{V(1-\\alpha)} = \\frac{(0.4)^{2}}{2(1-0.4)} = \\frac{0.16}{2 \\times 0.6}}$\n$\\mathrm{K_{c} = 0.133\\mathrm{molL^{-1}}}$",
    time_limit: 60
  },
  {
    id: 86675,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৭৫. $25^{\\circ}\\mathrm{C}$ তাপমাত্রায় $\\mathrm{N_{2}O_{4}(g) \\rightleftharpoons 2NO_{2}(g)}$ বিক্রিয়াটির সাম্যধ্রুবক, $\\mathrm{K_{p} = 0.008\\mathrm{atm}}$ এবং $\\mathrm{N_{2}O_{4}}$ এর আংশিক চাপ $0.8\\mathrm{atm}$ হলে বিক্রিয়াটিতে $\\mathrm{NO_{2}}$ এর আংশিক চাপ কত? [GST'23-24]",
    options: ["$6.4 \\times 10^{-3}\\mathrm{atm}$", "$8.0 \\times 10^{-2}\\mathrm{atm}$", "$6.4 \\times 10^{-4}\\mathrm{atm}$", "$4.0 \\times 10^{-2}\\mathrm{atm}$"],
    correct_answer: "$8.0 \\times 10^{-2}\\mathrm{atm}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{N_{2}O_{4}(g) \\rightleftharpoons 2NO_{2}(g)}$\n$\\mathrm{K_{p} = \\frac{(P_{NO_{2}})^{2}}{P_{N_{2}O_{4}}} \\Rightarrow 0.008 = \\frac{(P_{NO_{2}})^{2}}{0.8}}$\n$\\Rightarrow \\mathrm{(P_{NO_{2}})^{2} = 0.008 \\times 0.8 = 0.0064 = 64 \\times 10^{-4}}$\n$\\therefore \\mathrm{P_{NO_{2}} = 8 \\times 10^{-2}\\mathrm{atm}}$",
    time_limit: 60
  },
  {
    id: 86676,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৭৬. নিচের কোন বিক্রিয়া অনুপাতের ($\\mathrm{Q_{c}}$) উপর চাপের প্রভাব নেই? [RU'23-24]",
    options: ["$\\mathrm{Q_{c} = \\frac{[NH_{3}]^{2}}{[N_{2}][H_{2}]^{3}}}$", "$\\mathrm{Q_{c} = \\frac{[PCl_{3}][Cl_{2}]}{[PCl_{5}]}}$", "$\\mathrm{Q_{c} = \\frac{[H_{2}][I_{2}]}{[HI]^{2}}}$", "$\\mathrm{Q_{c} = \\frac{[NO_{2}]^{2}}{[NO]^{2}[O_{2}]}}$"],
    correct_answer: "$\\mathrm{Q_{c} = \\frac{[H_{2}][I_{2}]}{[HI]^{2}}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{2HI \\rightleftharpoons H_{2}(g) + I_{2}(g)}$\n$\\because$ বিক্রিয়ক ও উৎপাদের মোল সংখ্যা সমান বলে।",
    time_limit: 60
  },
  {
    id: 86677,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৭৭. $\\mathrm{N_{2}(g) + 3H_{2}(g) = 2NH_{3}(g)}$; বিক্রিয়াটিতে $\\mathrm{K_{p}}$ ও $\\mathrm{K_{c}}$ এর মধ্যে সম্পর্ক কোনটি? [JU'23-24]",
    options: ["$\\mathrm{K_{p} = K_{c}(RT)^{2}}$", "$\\mathrm{K_{p} = K_{c}(RT)}$", "$\\mathrm{K_{p} = K_{c}(RT)^{-2}}$", "$\\mathrm{K_{c} = K_{p}(RT)}$"],
    correct_answer: "$\\mathrm{K_{p} = K_{c}(RT)^{-2}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\Delta\\mathrm{n} = 2 - 4 = -2$\n$\\mathrm{K_{p} = K_{c}(RT)^{\\Delta n} = K_{c}(RT)^{-2}}$",
    time_limit: 60
  },
  {
    id: 86678,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৭৮. বিক্রিয়ার সাম্যধ্রুবক $\\mathrm{K_{p}}$ ও $\\mathrm{K_{c}}$ এর মধ্যে সম্পর্কের ক্ষেত্রে কোন তথ্যটি সঠিক? [RU'22-23]",
    options: ["$\\mathrm{K_{p} > K_{c}}$, যখন $\\Delta\\mathrm{n} > 0$", "$\\mathrm{K_{p} < K_{c}}$, যখন $\\Delta\\mathrm{n} < 0$", "$\\mathrm{K_{p} = K_{c}}$, যখন $\\Delta\\mathrm{n} = 0$", "সবগুলি"],
    correct_answer: "সবগুলি",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86679,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৭৯. $27^{\\circ}\\mathrm{C}$ তাপমাত্রায় $\\mathrm{A(g) \\rightleftharpoons 2B(g)}$ বিক্রিয়াটির $\\mathrm{K_{p}}$ এর মান $8.314 \\times 10^{2}\\mathrm{Pa}$ হলে $\\mathrm{K_{c}}$ এর মান কত $\\mathrm{mol/m^{3}}$? [GST'22-23]",
    options: ["8.314", "3.70", "1/30", "1/3"],
    correct_answer: "1/3",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{K_{p} = K_{c}(RT)^{\\Delta n}}$\n$8.314 \\times 10^{2} = \\mathrm{K_{c}}(8.314 \\times 300)^{1}$\n$\\Rightarrow \\mathrm{K_{c} = \\frac{8.314 \\times 10^{2}}{8.314 \\times 300} = \\frac{8.314 \\times 100}{8.314 \\times 300} = \\frac{1}{3}}$\nএখানে, $\\Delta\\mathrm{n} = 1$\n$\\mathrm{T} = 300$\n$\\mathrm{R} = 8.314\\mathrm{Jmol^{-1}K^{-1}}$",
    time_limit: 60
  },
  {
    id: 86680,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৮০. $\\mathrm{AB_{2}(g) + \\frac{1}{2}B_{2}(g) \\rightleftharpoons AB_{3}(g)}$, যদি $\\Delta\\mathrm{H}$ ঋণাত্মক হয়, তাহলে বিক্রিয়াটিতে $\\mathrm{K_{p}}$ এর একক কী? [JU'22-23]",
    options: ["$\\mathrm{atm^{\\frac{1}{2}}}$", "$\\mathrm{atm^{-\\frac{1}{2}}}$", "$\\mathrm{atm^{2}}$", "$\\mathrm{atm^{-2}}$"],
    correct_answer: "$\\mathrm{atm^{-\\frac{1}{2}}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\Delta\\mathrm{n} = 1 - 1 - \\frac{1}{2} = -\\frac{1}{2}$\n$\\therefore \\mathrm{K_{p}}$ এর একক $(\\mathrm{atm})^{-\\frac{1}{2}}$",
    time_limit: 60
  },
  {
    id: 86681,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৮১. যদি $\\mathrm{NH_{4}OH \\rightleftharpoons NH_{4}^{+} + OH^{-}}$ বিক্রিয়াটির শুরুতে $25\\mathrm{molNH_{4}OH}$ থাকে এবং এখান থেকে কেবল $5\\mathrm{mol}$ আয়নিত হয়, তাহলে $\\mathrm{NH_{4}OH}$ এর বিয়োজন মাত্রা (%)- [RU'22-23]",
    options: ["5", "10", "20", "30"],
    correct_answer: "20",
    explanation: "$\\mathrm{Sol^{n}}$: $\\alpha = \\frac{\\text{বিয়োজিত মোল} \\times 100}{\\text{মোট মোল}}$\n$= \\frac{5 \\times 100}{25} = \\frac{1}{5} \\times 100 = 20$",
    time_limit: 60
  },
  {
    id: 86682,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৮২. বিক্রিয়াগুলোর কোনটিতে সাম্যধ্রুবক একটি মাত্র পদার্থের ঘনমাত্রার উপর নির্ভর করে? [RU'22-23]",
    options: ["$\\mathrm{C(s) + CO_{2}(g) \\rightleftharpoons 2CO(g)}$", "$\\mathrm{H_{2}(g) + Cl_{2}(g) \\rightleftharpoons 2HCl(g)}$", "$\\mathrm{CaCO_{3}(s) \\rightleftharpoons CaO(s) + CO_{2}(g)}$", "$\\mathrm{N_{2}O_{4}(g) \\rightleftharpoons 2NO_{2}(g)}$"],
    correct_answer: "$\\mathrm{CaCO_{3}(s) \\rightleftharpoons CaO(s) + CO_{2}(g)}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{K_{c} = [CO_{2}]}$; Option (c) তে $\\mathrm{CaCO_{3}}$ ও $\\mathrm{CaO}$ কঠিন হওয়ায়, সাম্যধ্রুবক $\\mathrm{K_{c}}$ গণনায় এদের মান $1$ ধরা হয়।",
    time_limit: 60
  },
  {
    id: 86683,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৮৩. $\\mathrm{2N_{2}O_{5} \\rightleftharpoons 4NO_{2} + O_{2}}$ বিক্রিয়ায় $\\mathrm{K_{p}}$ ও $\\mathrm{K_{c}}$ এর সম্পর্ক হল- [RU'21-22]",
    options: ["$\\mathrm{K_{p} = K_{c}(RT)^{-2}}$", "$\\mathrm{K_{p}(RT)^{-3} = K_{c}}$", "$\\mathrm{K_{p} = K_{c}}$", "$\\mathrm{K_{p} = K_{c}(RT)^{2}}$"],
    correct_answer: "$\\mathrm{K_{p}(RT)^{-3} = K_{c}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\Delta\\mathrm{n} = (4 + 1) - (2) = 3$\n$\\therefore \\mathrm{K_{p} = K_{c}(RT)^{\\Delta n} \\Rightarrow K_{p} = K_{c}(RT)^{3}}$\n$\\Rightarrow \\mathrm{K_{c} = K_{p}(RT)^{-3}}$",
    time_limit: 60
  },
  {
    id: 86684,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৮৪. কোন উক্তিটি সঠিক? [JU'21-22]",
    options: ["নির্দিষ্ট তাপমাত্রায় সাম্যধ্রুবকের মান বিক্রিয়কসমূহের প্রাথমিক ঘনমাত্রার উপর নির্ভর করে", "প্রভাবকের উপস্থিতিতে সম্মুখ ও পশ্চাৎমুখী বিক্রিয়ার গতিবেগ সমভাবে বৃদ্ধি না পেলেও সাম্যধ্রুবকের মানের পরিবর্তন ঘটে না", "প্রভাবকের উপস্থিতিতে সম্মুখ ও পশ্চাৎমুখী বিক্রিয়ার গতিবেগ সমভাবে বৃদ্ধি পায় বলে সাম্যধ্রুবকের মানের পরিবর্তন ঘটে না", "নির্দিষ্ট তাপমাত্রায় সাম্যধ্রুবকের মান বিক্রিয়কসমূহের সর্বশেষ ঘনমাত্রার উপর নির্ভর করে"],
    correct_answer: "প্রভাবকের উপস্থিতিতে সম্মুখ ও পশ্চাৎমুখী বিক্রিয়ার গতিবেগ সমভাবে বৃদ্ধি পায় বলে সাম্যধ্রুবকের মানের পরিবর্তন ঘটে না",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86685,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৮৫. $\\mathrm{PCl_{5}(g) \\rightleftharpoons PCl_{3}(g) + Cl_{2}(g)}$ বিক্রিয়াটির ক্ষেত্রে কোনটি সঠিক? [JU'21-22]",
    options: ["$\\mathrm{K_{p} = \\frac{P_{PCl_{5}}}{P_{PCl_{3}} \\cdot P_{Cl_{2}}}}$", "$\\mathrm{K_{p} = \\frac{P_{PCl_{3}} \\cdot P_{Cl_{2}}}{P_{PCl_{5}}}}$", "$\\mathrm{K_{p} = \\frac{P_{PCl_{3}} \\cdot P_{PCl_{2}}}{P_{PCl_{5}}}}$", "$\\mathrm{K_{p} = \\frac{P_{PCl_{5}}}{P_{PCl_{3}} \\cdot P_{PCl_{2}}}}$"],
    correct_answer: "$\\mathrm{K_{p} = \\frac{P_{PCl_{3}} \\cdot P_{Cl_{2}}}{P_{PCl_{5}}}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{PCl_{5}(g) \\rightleftharpoons PCl_{3}(g) + Cl_{2}(g)}$;\n$\\mathrm{K_{p} = \\frac{P_{PCl_{3}} \\cdot P_{Cl_{2}}}{P_{PCl_{5}}}}$",
    time_limit: 60
  },
  {
    id: 86686,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৮৬. সাম্যধ্রুবকের ক্ষেত্রে প্রযোজ্য নয় কোনটি? [JU'21-22]",
    options: ["স্থির তাপমাত্রায় চাপ হ্রাস পেলে $\\mathrm{K_{p}}$ এর মান হ্রাস পায়", "স্থির তাপমাত্রায় চাপ হ্রাস পেলে $\\mathrm{K_{p}}$ এর মান অপরিবর্তিত থাকে", "স্থির তাপমাত্রায় চাপ বৃদ্ধি পেলে $\\mathrm{K_{c}}$ এর মান অপরিবর্তিত থাকে", "স্থির তাপমাত্রায় চাপ হ্রাস পেলে $\\mathrm{K_{c}}$ এর মান অপরিবর্তিত থাকে"],
    correct_answer: "স্থির তাপমাত্রায় চাপ হ্রাস পেলে $\\mathrm{K_{p}}$ এর মান হ্রাস পায়",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{K_{p}}$ শুধুমাত্র তাপমাত্রার উপরে নির্ভরশীল। চাপ, ঘনমাত্রা আয়তনের উপর নির্ভরশীল নয়।",
    time_limit: 60
  },
  {
    id: 86687,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৮৭. $30^{\\circ}\\mathrm{C}$ তাপমাত্রায় $\\mathrm{A(g) \\rightleftharpoons B(g) + C(g)}$ বিক্রিয়াটিতে $\\mathrm{A(g)}$ এর $20\\%$ বিযোজিত হয়ে সাম্যাবস্থায় $1.5\\mathrm{atm}$ চাপের সৃষ্টি করে। $\\mathrm{K_{p}}$ এর মান কত $\\mathrm{atm}$? [SUST'19-20]",
    options: ["160", "$6.25 \\times 10^{-2}$", "8.0", "$2.78 \\times 10^{-2}$", "7.0"],
    correct_answer: "$6.25 \\times 10^{-2}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{K_{p} = \\frac{\\alpha^{2} \\times P}{1-\\alpha^{2}} = \\frac{0.2^{2} \\times 1.5}{1-0.2^{2}} = 0.0625\\mathrm{atm}}$",
    time_limit: 60
  },
  {
    id: 86688,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৮৮. $\\mathrm{A + B \\rightleftharpoons 3D}$ সমীকরণ মতে বিক্রিয়াটির $\\mathrm{K_{p}}$ ও $\\mathrm{K_{c}}$ এর সম্পর্ক কোনটি? [RU'18-19]",
    options: ["$\\mathrm{K_{p} = K_{c}(RT)}$ (ক)", "$\\mathrm{K_{p} = K_{c} \\times (RT)^{-1}}$", "$\\mathrm{K_{p} = K_{c}(RT)}$ (গ)", "$\\mathrm{K_{p} = K_{c} \\times (RT)^{-2}}$"],
    correct_answer: "$\\mathrm{K_{p} = K_{c}(RT)}$ (ক)",
    explanation: "$\\mathrm{Sol^{n}}$: $\\Delta\\mathrm{n} = 3 - 1 - 1 = 1$;\n$\\therefore \\mathrm{K_{p} = K_{c}(RT)^{1} = K_{c}(RT)}$ [সাধারণত ভৌত অবস্থা বলা না থাকলে সবগুলোকে গ্যাসীয় ধরতে হয়]\nনোট: বইয়ের উত্তর একাধিক অপশন (ক, গ): $\\mathrm{K_{p} = K_{c}(RT)}$ — অ্যাপে প্রথম অপশনটি সঠিক ধরা হয়েছে।",
    time_limit: 60
  },
  {
    id: 86689,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৮৯. $\\mathrm{2NO(g) + Cl_{2}(g) \\rightleftharpoons 2NOCl(g)}$ বিক্রিয়ার জন্য $25^{\\circ}\\mathrm{C}$ তাপমাত্রায় $\\mathrm{K_{p}}$ এর মান $1.9 \\times 10^{3}\\mathrm{atm^{-1}}$; একই তাপমাত্রায় $\\mathrm{K_{c}}$ এর সংখ্যা মান কত? [DU'17-18]",
    options: ["$4.6 \\times 10^{4}$", "$5.9 \\times 10^{3}$", "$10.2 \\times 10^{3}$", "$3.2 \\times 10^{-1}$"],
    correct_answer: "$4.6 \\times 10^{4}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\Delta\\mathrm{n} = 2 - (2 + 1) = -1$\n$\\mathrm{K_{p} = K_{c}(RT)^{\\Delta n} \\Rightarrow K_{p} = K_{c}(RT)^{-1}}$\n$\\Rightarrow \\mathrm{K_{c} = K_{p}RT}$\n$= 1.9 \\times 10^{3} \\times 0.0821 \\times 298 = 4.6 \\times 10^{4}$",
    time_limit: 60
  },
  {
    id: 86690,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৯০. $\\mathrm{3Fe(s) + 4H_{2}O(steam) \\rightleftharpoons Fe_{3}O_{4}(s) + 4H_{2}(g)}$ বিক্রিয়ার ক্ষেত্রে $\\mathrm{K_{p}}$ ও $\\mathrm{K_{c}}$ এর সম্পর্ক কী? [RU'17-18]",
    options: ["$\\mathrm{K_{p} = K_{c}(RT)^{-2}}$", "$\\mathrm{K_{p} = K_{c}(RT)^{-1}}$", "$\\mathrm{K_{p} = K_{c}}$", "কোনটিই নয়"],
    correct_answer: "$\\mathrm{K_{p} = K_{c}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{K_{p} = K_{c}} \\because \\Delta\\mathrm{n} = 0$",
    time_limit: 60
  },
  {
    id: 86691,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৯১. $\\mathrm{A + 3B \\rightleftharpoons C + 2D}$ বিক্রিয়াটির $\\mathrm{K_{c}}$ এর মান হবে- [JU'16-17; DU'07-08, 0-01]",
    options: ["$\\mathrm{[A][B]^{3}/[C][D]^{2}}$", "$\\mathrm{[C][D]^{2}/[A][B]^{3}}$", "$\\mathrm{[A][3B]/[C][2D]}$", "None"],
    correct_answer: "$\\mathrm{[C][D]^{2}/[A][B]^{3}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{A + 3B \\rightleftharpoons C + 2D}$ বিক্রিয়ার $\\mathrm{K_{c} = \\frac{[C][D]^{2}}{[A][B]^{3}}}$",
    time_limit: 60
  },
  {
    id: 86692,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৯২. $\\mathrm{A_{2}(g) + 3B_{2}(g) \\rightleftharpoons 2AB_{3}(g)}\\ \\Delta\\mathrm{H} = +\\mathrm{ve}$; বিক্রিয়াটিতে প্রভাবক যোগ করলে- [JU'16-17]",
    options: ["$\\mathrm{K_{c}}$ বৃদ্ধি পাবে", "$\\mathrm{K_{p}}$ বৃদ্ধি পাবে", "বিক্রিয়ার হার বৃদ্ধি পাবে", "সাম্যাবস্থা ডানদিকে সরে যাবে"],
    correct_answer: "বিক্রিয়ার হার বৃদ্ধি পাবে",
    explanation: "$\\mathrm{Sol^{n}}$: প্রভাবকের ফলে $\\mathrm{K_{p}}$, $\\mathrm{K_{c}}$ কিংবা সাম্যাবস্থার কোনো পরিবর্তন হবে না।",
    time_limit: 60
  },
  {
    id: 86693,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৯৩. তাপহারী বিক্রিয়ায় তাপমাত্রা বৃদ্ধিতে $\\mathrm{K_{p}}$ এর মানের কীরূপ পরিবর্তন হবে? [KU'16-17]",
    options: ["অর্ধেক হবে", "বৃদ্ধি পাবে", "অপরিবর্তনীয় থাকবে", "এক তৃতীয়াংশে হবে"],
    correct_answer: "বৃদ্ধি পাবে",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86694,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৯৪. $\\mathrm{N_{2}(g) + 3H_{2}(g) \\rightleftharpoons 2NH_{3}(g)}$ বিক্রিয়াটিতে $\\mathrm{K_{p}}$ এবং $\\mathrm{K_{c}}$ এর মধ্যে সম্পর্কটি হচ্ছে- [CU'16-17; KU'14-15]",
    options: ["$\\mathrm{K_{p} = K_{c}(RT)^{2}}$", "$\\mathrm{K_{p} = K_{c}(RT)^{-2}}$", "$\\mathrm{K_{p} = K_{c}(RT)^{-1}}$", "$\\mathrm{K_{p} = K_{c}(RT)^{0}}$"],
    correct_answer: "$\\mathrm{K_{p} = K_{c}(RT)^{-2}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86695,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৯৫. একটি বিক্রিয়ার $\\mathrm{K_{c} = 4.0 \\times 10^{-4}, R = 0.09\\mathrm{L.atm/(Kmole)}}$ এবং $\\Delta\\mathrm{n} = 2$ হলে $\\mathrm{1000K}$-তে $\\mathrm{K_{p}}$ এর মান কত? [RU'15-16]",
    options: ["324", "32.4", "3.24", "3.54"],
    correct_answer: "3.24",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{K_{p} = K_{c}(RT)^{\\Delta n}}$\n$= 4 \\times 10^{-4} \\times (0.09 \\times 1000)^{2} = 3.24$",
    time_limit: 60
  },
  {
    id: 86696,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৯৬. $45^{\\circ}\\mathrm{C}$ তাপমাত্রায় $\\mathrm{N_{2}O_{4}}$ বিয়োজনে $\\mathrm{K_{p}}$ এর মান $3.0\\mathrm{atm}$। সাম্যমিশ্রণে $\\mathrm{NO_{2}}$ এর আংশিক চাপ $0.41\\mathrm{atm}$ হলে $\\mathrm{N_{2}O_{4}}$ এর আংশিক চাপ কত $\\mathrm{atm}$? [JU'15-16]",
    options: ["0.65", "0.56", "0.065", "কোনটিই নয়"],
    correct_answer: "কোনটিই নয়",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{N_{2}O_{4} \\rightleftharpoons 2NO_{2}}$ এর ক্ষেত্রে\n$\\mathrm{K_{p} = \\frac{(P_{NO_{2}})^{2}}{P_{N_{2}O_{4}}} \\therefore P_{N_{2}O_{4}} = \\frac{(0.41)^{2}}{3} = 0.05603\\mathrm{atm}}$",
    time_limit: 60
  },
  {
    id: 86697,
    topic: "সাম্যাধ্রুবক Kp ও Kc সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t06",
    question_text: "৯৭. মারকারী (II) অক্সাইড তাপে নিম্নের বিক্রিয়া অনুসারে ভাঙলে এ প্রক্রিয়াটির সাম্যাঙ্ককে কীভাবে প্রকাশ করা যায়? $\\mathrm{2HgO(s) \\rightleftharpoons 2Hg(l) + O_{2}(g)}$ [DU'13-14]",
    options: ["$\\mathrm{K = \\frac{[Hg]^{2}[O_{2}]}{[HgO]^{2}}}$", "$\\mathrm{K = \\frac{[Hg][O_{2}]}{[HgO]}}$", "$\\mathrm{K = [Hg][O_{2}]}$", "$\\mathrm{K = [O_{2}]}$"],
    correct_answer: "$\\mathrm{K = [O_{2}]}$",
    explanation: "$\\mathrm{Sol^{n}}$: সাম্যাঙ্ক প্রকাশে $\\mathrm{K_{p}}$ এর ক্ষেত্রে শুধুমাত্র গ্যাসীয় বিক্রিয়ক ও উৎপাদ এবং $\\mathrm{K_{c}}$ এর ক্ষেত্রে গ্যাসীয় এবং জলীয় দ্রবণ ($\\mathrm{aq}$) এ থাকা বিক্রিয়ক ও উৎপাদ গণনা করতে হবে।",
    time_limit: 60
  },
  // --- T-07: এসিড ও ক্ষারক ---
  {
    id: 86798,
    topic: "এসিড ও ক্ষারক",
    topicId: "chem1_change_t07",
    question_text: "৯৮. অক্সোএসিডের তীব্রতার ক্ষেত্রে কোনটি সঠিক? [JU'25-26, 24-25; KU'18-19]",
    options: ["$\\mathrm{HNO_{3} > HClO_{4} > H_{2}SO_{4}}$", "$\\mathrm{HNO_{3} > H_{2}SO_{4} > HClO_{4}}$", "$\\mathrm{HClO_{4} > H_{2}SO_{4} > HNO_{3}}$", "$\\mathrm{HClO_{4} > HNO_{3} > H_{2}SO_{4}}$"],
    correct_answer: "$\\mathrm{HClO_{4} > H_{2}SO_{4} > HNO_{3}}$",
    explanation: "$\\mathrm{Sol^{n}}$: অক্সি-এসিডের তীব্রতা নির্ভর করে কেন্দ্রীয় মৌলের জারণ সংখ্যার উপর। যার জারণ সংখ্যা বেশি তার তীব্রতা বেশি।\n$\\mathrm{\\overset{+7}{HClO_{4}} > \\overset{+6}{H_{2}SO_{4}} > \\overset{+5}{HNO_{3}}}$",
    time_limit: 60
  },
  {
    id: 86799,
    topic: "এসিড ও ক্ষারক",
    topicId: "chem1_change_t07",
    question_text: "৯৯. নিচের কোনটি অধিক শক্তিশালী ক্ষার? [JU'24-25, 23-24]",
    options: ["$\\mathrm{NaOH}$", "$\\mathrm{KOH}$", "$\\mathrm{Ca(OH)_{2}}$", "$\\mathrm{NH_{4}OH}$"],
    correct_answer: "$\\mathrm{KOH}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86700,
    topic: "এসিড ও ক্ষারক",
    topicId: "chem1_change_t07",
    question_text: "১০০. এসিডের তীব্রতা কিসের উপর নির্ভর করে না? [JU'24-25]",
    options: ["বিয়োজন মাত্রা", "আণবিক ভর", "দ্রবণের প্রকৃতি", "অনুবন্ধী ক্ষারকের শক্তি"],
    correct_answer: "আণবিক ভর",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86701,
    topic: "এসিড ও ক্ষারক",
    topicId: "chem1_change_t07",
    question_text: "১০১. নিচের কোন এসিডটি তীব্রতম? [RU'23-24]",
    options: ["$\\mathrm{HNO_{3}}$", "$\\mathrm{H_{2}SO_{4}}$", "$\\mathrm{HClO_{4}}$", "$\\mathrm{HBrO_{4}}$"],
    correct_answer: "$\\mathrm{HClO_{4}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86702,
    topic: "এসিড ও ক্ষারক",
    topicId: "chem1_change_t07",
    question_text: "১০২. নিচের এসিডগুলোর মধ্যে কোনটি হাইপো এসিড? [RU'23-24]",
    options: ["$\\mathrm{H_{3}PO_{3}}$", "$\\mathrm{H_{3}PO_{2}}$", "$\\mathrm{H_{3}PO_{4}}$", "$\\mathrm{HPO_{3}}$"],
    correct_answer: "$\\mathrm{H_{3}PO_{2}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86703,
    topic: "এসিড ও ক্ষারক",
    topicId: "chem1_change_t07",
    question_text: "১০৩. কোন এসিডের তীব্রতা বেশি? [JU'22-23, 17-18]",
    options: ["$\\mathrm{H_{2}SO_{3}}$", "$\\mathrm{HNO_{2}}$", "$\\mathrm{HNO_{3}}$", "$\\mathrm{H_{3}PO_{4}}$"],
    correct_answer: "$\\mathrm{HNO_{3}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{\\overset{+5}{HNO_{3}} > \\overset{+5}{H_{3}PO_{4}} > \\overset{+4}{H_{2}SO_{3}} > \\overset{+3}{HNO_{2}}}$\n$\\mathrm{P}$ অপেক্ষা $\\mathrm{N}$ এর আকার ছোট, তাই $\\mathrm{HNO_{3}}$ বেশি এসিডিক।",
    time_limit: 60
  },
  {
    id: 86704,
    topic: "এসিড ও ক্ষারক",
    topicId: "chem1_change_t07",
    question_text: "১০৪. সবচেয়ে শক্তিশালী অজৈব এসিড হলো- [CU'22-23, 21-22, 15-16]",
    options: ["$\\mathrm{HCl}$", "$\\mathrm{HNO_{3}}$", "$\\mathrm{H_{2}SO_{4}}$", "$\\mathrm{HClO_{4}}$"],
    correct_answer: "$\\mathrm{HClO_{4}}$",
    explanation: "$\\mathrm{Sol^{n}}$: কেন্দ্রীয় পরমাণুর জারণ মাত্রা যত বেশি সে এসিড তত বেশি শক্তিশালী।\nকেন্দ্রীয় পরমাণুর জারণ মান $\\mathrm{N \\rightarrow +5, S \\rightarrow +6, Cl \\rightarrow +7}$",
    time_limit: 60
  },
  {
    id: 86705,
    topic: "এসিড ও ক্ষারক",
    topicId: "chem1_change_t07",
    question_text: "১০৫. কোনটি পারক্লোরিক এসিডের সংকেত? [JU'21-22]",
    options: ["$\\mathrm{HClO_{2}}$", "$\\mathrm{HClO_{3}}$", "$\\mathrm{HClO_{4}}$", "$\\mathrm{HClO}$"],
    correct_answer: "$\\mathrm{HClO_{4}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86706,
    topic: "এসিড ও ক্ষারক",
    topicId: "chem1_change_t07",
    question_text: "১০৬. অক্সিএসিডসমূহের তীব্রতার সঠিক ক্রম- [RU'17-18; DU'16-17; KU'16-17]",
    options: ["$\\mathrm{HClO_{4} > HNO_{3} > H_{2}SO_{4} > H_{2}SO_{3}}$", "$\\mathrm{H_{2}SO_{4} > HNO_{3} > H_{2}SO_{3} > HClO_{4}}$", "$\\mathrm{HClO_{4} > H_{2}SO_{4} > HNO_{3} > H_{2}SO_{3}}$", "$\\mathrm{HNO_{3} > H_{2}SO_{4} > HClO_{4} > H_{2}SO_{3}}$"],
    correct_answer: "$\\mathrm{HClO_{4} > H_{2}SO_{4} > HNO_{3} > H_{2}SO_{3}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{\\overset{+7}{HClO_{4}} > \\overset{+6}{H_{2}SO_{4}} > \\overset{+5}{HNO_{3}} > \\overset{+4}{H_{2}SO_{3}}}$",
    time_limit: 60
  },
  {
    id: 86707,
    topic: "এসিড ও ক্ষারক",
    topicId: "chem1_change_t07",
    question_text: "১০৭. হাইড্রোহ্যালিক এসিডের তীব্রতার সঠিক ক্রম কোনটি? [KU'17-18]",
    options: ["$\\mathrm{HI(aq) > HCl(aq) > HBr(aq) > HF(aq)}$", "$\\mathrm{HI(aq) > HBr(aq) > HCl(aq) > HF(aq)}$", "$\\mathrm{HCl(aq) > HI(aq) > HBr(aq) > HF(aq)}$", "$\\mathrm{HCl(aq) > HF(aq) > HI(aq) > HBr(aq)}$"],
    correct_answer: "$\\mathrm{HI(aq) > HBr(aq) > HCl(aq) > HF(aq)}$",
    explanation: "$\\mathrm{Sol^{n}}$: হাইড্রাসিডসমূহের তীব্রতা হ্যালাইডের আকারের সমানুপাতিক।",
    time_limit: 60
  },
  {
    id: 86708,
    topic: "এসিড ও ক্ষারক",
    topicId: "chem1_change_t07",
    question_text: "১০৮. $\\mathrm{Na_{2}CO_{3}}$ এর জলীয় দ্রবণ কোন প্রকৃতির? [JU'14-15; CU'08-09]",
    options: ["নিরপেক্ষ", "এসিডিয়", "উভয়ধর্মী", "ক্ষারীয়"],
    correct_answer: "ক্ষারীয়",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{Na_{2}CO_{3} + H_{2}O \\rightarrow \\underset{\\text{তীব্র ক্ষার}}{NaOH} + CO_{2} + H_{2}O}$",
    time_limit: 60
  },
  // --- T-08: পানির আয়নিক গুণফল সংক্রান্ত ---
  {
    id: 86809,
    topic: "পানির আয়নিক গুণফল সংক্রান্ত",
    topicId: "chem1_change_t08",
    question_text: "১০৯. $25^{\\circ}\\mathrm{C}$ তাপমাত্রায় পানির আয়নিক গুণফল কত? [Agri.'25-26]",
    options: ["$1 \\times 10^{-14}$", "$1 \\times 10^{-12}$", "$1 \\times 10^{14}$", "$1 \\times 10^{-15}$"],
    correct_answer: "$1 \\times 10^{-14}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86810,
    topic: "পানির আয়নিক গুণফল সংক্রান্ত",
    topicId: "chem1_change_t08",
    question_text: "১১০. পানির আয়নিক গুণফল $\\mathrm{K_{w}}$ সম্পর্কিত কোনটি সঠিক? [RU'24-25]",
    options: ["$\\mathrm{K_{w} = [H_{3}O^{+}] \\times [OH^{-}]}$", "$\\mathrm{K_{w} = \\frac{[H_{3}O^{+}][OH^{-}]}{[H_{2}O]^{2}}}$", "$\\mathrm{K_{w} = \\frac{[H_{2}O]^{2}}{[H_{3}O^{+}][OH^{-}]}}$", "$\\mathrm{K_{w} = [H_{2}O]^{2} \\times [OH^{-}]}$"],
    correct_answer: "$\\mathrm{K_{w} = [H_{3}O^{+}] \\times [OH^{-}]}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86811,
    topic: "পানির আয়নিক গুণফল সংক্রান্ত",
    topicId: "chem1_change_t08",
    question_text: "১১১. পানির আয়নিক গুণফল কোনটি? [JU'24-25]",
    options: ["$\\mathrm{K_{p}}$", "$\\mathrm{K_{c}}$", "$\\mathrm{K_{w}}$", "$\\mathrm{K_{a}}$"],
    correct_answer: "$\\mathrm{K_{w}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86812,
    topic: "পানির আয়নিক গুণফল সংক্রান্ত",
    topicId: "chem1_change_t08",
    question_text: "১১২. নিচের কোন তাপমাত্রায় $\\mathrm{K_{w}}$ এর মান $\\mathrm{10^{-14}mol^{2} L^{-2}}$? [JU'24-25]",
    options: ["$25\\mathrm{K}$", "$273\\mathrm{K}$ (খ)", "$298\\mathrm{K}$", "$273\\mathrm{K}$ (ঘ)"],
    correct_answer: "$298\\mathrm{K}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86813,
    topic: "পানির আয়নিক গুণফল সংক্রান্ত",
    topicId: "chem1_change_t08",
    question_text: "১১৩. বিশুদ্ধ পানির ঘনমাত্রা হলো ($\\mathrm{mole/litre}$)- [Agri.'21-22; DU'15-16]",
    options: ["35.3", "1.0", "55.5", "18.0"],
    correct_answer: "55.5",
    explanation: "$\\mathrm{Sol^{n}}$: বিশুদ্ধ পানির ঘনত্ব $1\\mathrm{g/mL}$\n$\\therefore \\text{ঘনমাত্রা } \\mathrm{C} = \\frac{n}{v} = \\frac{\\frac{1000}{18}\\mathrm{mol}}{1\\mathrm{L}} = 55.56\\mathrm{mol L^{-1}}$",
    time_limit: 60
  },
  {
    id: 86814,
    topic: "পানির আয়নিক গুণফল সংক্রান্ত",
    topicId: "chem1_change_t08",
    question_text: "১১৪. পানির আয়নিক গুণফল $\\mathrm{K_{w}}$ এর একক কোনটি? [JU'21-22]",
    options: ["$\\mathrm{mol L^{-1}}$", "$\\mathrm{g\\text{-}ion^{2}L^{2}}$", "$\\mathrm{g\\text{-}mol^{2}L^{-2}}$", "$\\mathrm{g\\text{-}ion^{2}L^{-2}}$"],
    correct_answer: "$\\mathrm{g\\text{-}ion^{2}L^{-2}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86815,
    topic: "পানির আয়নিক গুণফল সংক্রান্ত",
    topicId: "chem1_change_t08",
    question_text: "১১৫. বিশুদ্ধ পানিতে $\\mathrm{H^{+}}$ অথবা $\\mathrm{OH^{-}}$ আয়নের ঘনমাত্রা কত? [CU'21-22]",
    options: ["$10^{-7}\\mathrm{mole/litre}$", "$10^{-14}\\mathrm{mole/litre}$", "$1.0\\mathrm{mole/litre}$", "$0.1\\mathrm{mole/litre}$"],
    correct_answer: "$10^{-7}\\mathrm{mole/litre}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86816,
    topic: "পানির আয়নিক গুণফল সংক্রান্ত",
    topicId: "chem1_change_t08",
    question_text: "১১৬. নিচের কোনটি সত্য নয়? [DU'20-21]",
    options: ["$\\mathrm{K_{w} = 1 \\times 10^{-14}}$", "$\\mathrm{pK_{w} = 14}$", "$\\mathrm{[H_{3}O^{+}][OH^{-}] = K_{w}}$", "$\\mathrm{K_{w} = 1 \\times 10^{-14} M}$"],
    correct_answer: "$\\mathrm{K_{w} = 1 \\times 10^{-14} M}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{K_{w} = [H^{+}][OH^{-}] = 1 \\times 10^{-14}M^{2}}$\nকিন্তু Option (d) তে $\\mathrm{M^{2}}$ এর পরিবর্তে $\\mathrm{M}$ আছে।",
    time_limit: 60
  },
  {
    id: 86817,
    topic: "পানির আয়নিক গুণফল সংক্রান্ত",
    topicId: "chem1_change_t08",
    question_text: "১১৭. বিশুদ্ধ পানিতে $\\mathrm{OH^{-}}$ এবং $\\mathrm{H^{+}}$ এর মোলার ঘনমাত্রা এর অনুপাত কত? [DU'20-21]",
    options: ["7", "$10^{-7}$", "0", "1"],
    correct_answer: "1",
    explanation: "$\\mathrm{Sol^{n}}$: বিশুদ্ধ পানিতে $\\mathrm{[OH^{-}] = 10^{-7} M}$\n$\\mathrm{[H^{+}] = 10^{-7} M} \\therefore \\text{অনুপাত} = \\frac{10^{-7}}{10^{-7}} = 1$",
    time_limit: 60
  },
  {
    id: 86818,
    topic: "পানির আয়নিক গুণফল সংক্রান্ত",
    topicId: "chem1_change_t08",
    question_text: "১১৮. পানির $\\mathrm{pK_{w}}$ এর মান কোনটি? [Agri.'19-20]",
    options: ["6", "7", "8", "14"],
    correct_answer: "14",
    explanation: "$\\mathrm{Sol^{n}}$: $25^{\\circ}\\mathrm{C}$ তাপমাত্রায়, $\\mathrm{K_{w} = 1 \\times 10^{-14}mol^{2} L^{-2}}$\n$\\Rightarrow \\mathrm{pK_{w} = -\\log 10^{-14} = 14\\log 10 = 14 \\times 1 = 14}$",
    time_limit: 60
  },
  // --- T-09: এসিড ও ক্ষারকের বিয়োজন ধ্রুবক সংক্রান্ত সমস্যা ---
  {
    id: 86919,
    topic: "এসিড ও ক্ষারকের বিয়োজন ধ্রুবক সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t09",
    question_text: "১১৯. কোন এসিডটির বিয়োজন ধ্রুবকের মান সবচেয়ে বেশি? [EU'25-26]",
    options: ["$\\mathrm{HNO_{3}}$", "$\\mathrm{H_{3}PO_{4}}$", "$\\mathrm{H_{2}SO_{4}}$", "$\\mathrm{HClO_{4}}$"],
    correct_answer: "$\\mathrm{HClO_{4}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 86920,
    topic: "এসিড ও ক্ষারকের বিয়োজন ধ্রুবক সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t09",
    question_text: "১২০. $25^{\\circ}\\mathrm{C}$ তাপমাত্রায় $0.01\\mathrm{M}$ ঘনমাত্রার জলীয় দ্রবণে অ্যাসিটিক এসিড $4.2\\%$ বিয়োজিত হলে দ্রবণটির হাইড্রোজেন আয়নের ঘনমাত্রা কত? [GST'23-24, JU'21-22]",
    options: ["$4.2 \\times 10^{-4}\\mathrm{M}$", "$4.2 \\times 10^{-1}\\mathrm{M}$", "$2.0\\mathrm{M}$", "$2.0 \\times 10^{-4}\\mathrm{M}$"],
    correct_answer: "$4.2 \\times 10^{-4}\\mathrm{M}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\underset{\\mathrm{C-Ca}}{CH_{3}COOH} + H_{2}O \\rightleftharpoons \\underset{\\mathrm{Ca}}{CH_{3}COO^{-}} + \\underset{\\mathrm{Ca}}{H_{3}O^{+}}$\nএখানে, $\\alpha = 4.2\\%$, $\\mathrm{C} = 0.01\\mathrm{M}$\n$\\therefore \\mathrm{[H^{+}] = Ca = 0.01 \\times \\frac{4.2}{100} = 4.2 \\times 10^{-4}\\mathrm{M}}$",
    time_limit: 60
  },
  {
    id: 86921,
    topic: "এসিড ও ক্ষারকের বিয়োজন ধ্রুবক সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t09",
    question_text: "১২১. $\\mathrm{K_{a}}$ এর মান নিচের উপর ভিত্তি করে এসিডগুলোকে সবল থেকে দুর্বলের ক্রম অনুসারে সাজাও: [GST'19-20]\n(i) $\\mathrm{HCN (K_{a} = 6.2 \\times 10^{-10})}$\n(ii) $\\mathrm{HC_{2}H_{3}O_{2} (K_{a} = 1.8 \\times 10^{-5})}$\n(iii) $\\mathrm{HCOOH (K_{a} = 1.78 \\times 10^{-4})}$\n(iv) $\\mathrm{HNO_{2} (K_{a} = 4.6 \\times 10^{-4})}$",
    options: ["$\\mathrm{HCN < HC_{2}H_{3}O_{2} < HCOOH < HNO_{2}}$", "$\\mathrm{HCN < HNO_{2} < HC_{2}H_{3}O_{2} < HCOOH}$", "$\\mathrm{HNO_{2} < HCOOH < HC_{2}H_{3}O_{2} < HCN}$", "$\\mathrm{HCOOH < HNO_{2} < HCN < HC_{2}H_{3}O_{2}}$"],
    correct_answer: "$\\mathrm{HCN < HC_{2}H_{3}O_{2} < HCOOH < HNO_{2}}$",
    explanation: "$\\mathrm{Sol^{n}}$: এসিডের তীব্রতা বেশি হলে বিয়োজন ধ্রুবক $\\mathrm{K_{a}}$ এর মান বেশি হয়।",
    time_limit: 60
  },
  {
    id: 86922,
    topic: "এসিড ও ক্ষারকের বিয়োজন ধ্রুবক সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t09",
    question_text: "১২২. নিম্নের কোন ঘনমাত্রায় সর্বাধিক বিয়োজন হয়? [BAU'18-19]",
    options: ["$0.01\\mathrm{MHCOOH}$", "$0.001\\mathrm{MHCOOH}$", "$0.0001\\mathrm{MHCOOH}$", "$1 \\times 10^{-5}\\mathrm{MHCOOH}$"],
    correct_answer: "$1 \\times 10^{-5}\\mathrm{MHCOOH}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\alpha \\propto \\frac{1}{\\sqrt{C}}$ অর্থাৎ ঘনমাত্রা যত কম হবে বিয়োজন তত বেশি হবে।",
    time_limit: 60
  },
  {
    id: 86923,
    topic: "এসিড ও ক্ষারকের বিয়োজন ধ্রুবক সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t09",
    question_text: "১২৩. $\\mathrm{pK_{a}}$ এর মান বৃদ্ধির সাথে সাথে অম্লধর্মের কীরূপ পরিবর্তন হবে? [JnU'17-18]",
    options: ["অম্লত্ব কমবে", "ক্ষারত্ব কমবে", "অম্লত্ব বাড়বে", "কোনো পরিবর্তন হবে না"],
    correct_answer: "অম্লত্ব কমবে",
    explanation: "$\\mathrm{Sol^{n}}$: কোনো এসিডের $\\mathrm{pK_{a}}$ যত বেশি তার $\\mathrm{K_{a}}$ তত কম, অর্থাৎ অম্লত্ব কম।",
    time_limit: 60
  },
  {
    id: 86924,
    topic: "এসিড ও ক্ষারকের বিয়োজন ধ্রুবক সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t09",
    question_text: "১২৪. নিচের কোন এসিডের $\\mathrm{K_{a}}$ এর মান সবচেয়ে বেশি? [DU'16-17]",
    options: ["$\\mathrm{H_{2}SO_{4}}$", "$\\mathrm{HBrO_{4}}$", "$\\mathrm{HNO_{3}}$", "$\\mathrm{HClO_{4}}$"],
    correct_answer: "$\\mathrm{HClO_{4}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{HClO_{4}}$, সবচেয়ে শক্তিশালী এসিড।",
    time_limit: 60
  },
  {
    id: 86925,
    topic: "এসিড ও ক্ষারকের বিয়োজন ধ্রুবক সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t09",
    question_text: "১২৫. অম্ল বিয়োজন মাত্রা $\\mathrm{K_{a}}$ এর মান দ্রবণের ঘনমাত্রার- [JU'16-17]",
    options: ["সমানুপাতিক", "ব্যস্তানুপাতিক", "বর্গমূলের সমানুপাতিক", "বর্গমূলের ব্যস্তানুপাতিক"],
    correct_answer: "বর্গমূলের ব্যস্তানুপাতিক",
    explanation: "$\\mathrm{Sol^{n}}$: দুর্বল এসিডের বিয়োজন মাত্রা প্রকাশে সাধারণত $\\alpha$ ব্যবহৃত হয়। সে হিসাবে (d) উত্তর হতে পারে।\nবি.দ্র. প্রশ্নে অম্ল বিয়োজন মাত্রা বলা আছে, কিন্তু $\\mathrm{K_{a}}$ কে অম্লের বিয়োজন ধ্রুবক হিসাবে ব্যবহার করা হয়।",
    time_limit: 60
  },
  // --- T-10: pH, pOH সংক্রান্ত সমস্যা ---
  {
    id: 87026,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১২৬. $100^{\\circ}\\mathrm{C}$ তাপমাত্রায় পানির $\\mathrm{pH}$ কত? [JU'15-16; CU'12-13]",
    options: ["7 অপেক্ষা কম", "7 অপেক্ষা বেশি", "7", "নির্দিষ্ট নয়"],
    correct_answer: "7 অপেক্ষা কম",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87027,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১২৭. $\\mathrm{CuSO_{4}}$ এর জলীয় দ্রবণের $\\mathrm{pH}$ কত? [JU'15-16]",
    options: ["7 এর উপরে", "7 এর নিচে", "7", "অনিশ্চিত"],
    correct_answer: "7 এর নিচে",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{CuSO_{4} + 2H_{2}O \\rightarrow \\underset{\\text{দুর্বল ক্ষার}}{Cu(OH)_{2}} + \\underset{\\text{তীব্র এসিড}}{H_{2}SO_{4}}}$\nসুতরাং $\\mathrm{pH}$ হবে 7 এর নিচে।",
    time_limit: 60
  },
  {
    id: 87028,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১২৮. $\\mathrm{H_{2}SO_{4}}$ এর একটি দ্রবণে $\\mathrm{H^{+}}$ আয়নের ঘনমাত্রা $1 \\times 10^{-5}\\mathrm{molL^{-1}}$ হলে দ্রবণের $\\mathrm{pH}$ কত? [JU'25-26]",
    options: ["7", "10", "5", "1"],
    correct_answer: "5",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{pH = -\\log[H^{+}]}$\n$= -\\log(1 \\times 10^{-5}) = 5$",
    time_limit: 60
  },
  {
    id: 87029,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১২৯. কোন দ্রবণের $\\mathrm{OH^{-}}$ আয়নের ঘনমাত্রা $1 \\times 10^{-2}\\mathrm{mM}$ হলে দ্রবণটির $\\mathrm{pH}$ কত? [RU'25-26]",
    options: ["7", "9", "11", "5"],
    correct_answer: "9",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{[OH^{-}] = 1 \\times 10^{-2} \\times 10^{-3} = 10^{-5}\\mathrm{M}}$\n$\\therefore \\mathrm{pH = 14 + \\log[OH^{-}] = 14 + \\log[10^{-5}]}$\n$= 14 - 5 = 9$",
    time_limit: 60
  },
  {
    id: 87030,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৩০. $\\mathrm{HCl}$ এর $5\\mathrm{mM}$ দ্রবণের $\\mathrm{pH}$ কত? [RU'25-26]",
    options: ["1.60", "2.60", "1.30", "2.30"],
    correct_answer: "2.30",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{[H^{+}] = 5 \\times 10^{-3}\\mathrm{M}}$\n$\\therefore \\mathrm{pH = -\\log[5 \\times 10^{-3}] = 2.3}$",
    time_limit: 60
  },
  {
    id: 87031,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৩১. $5\\mathrm{M}\\,\\mathrm{H_{2}SO_{4}}$ জলীয় দ্রবণের ক্ষেত্রে কোন বিবৃতিটি সঠিক? [RU'25-26]",
    options: ["$\\mathrm{pH = -1}$, কারণ $\\mathrm{[H^{+}] = 10\\mathrm{M}}$", "$\\mathrm{pH > -1}$, কারণ $\\mathrm{a_{H^{+}} < [H^{+}]}$", "$\\mathrm{pH = 0}$, কারণ $\\mathrm{pH}$ স্কেল 0 - 14 পর্যন্ত", "$\\mathrm{pH}$ ঋণাত্মক হতে পারে না"],
    correct_answer: "$\\mathrm{pH = -1}$, কারণ $\\mathrm{[H^{+}] = 10\\mathrm{M}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{[H^{+}] = (2 \\times 5) = 10\\mathrm{M}}$\n$\\therefore \\mathrm{pH = -\\log[H^{+}] = -\\log[10] = -1}$",
    time_limit: 60
  },
  {
    id: 87032,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৩২. $50\\mathrm{mM}\\,\\mathrm{H_{2}SO_{4}}$ দ্রবণের $\\mathrm{pH}$ কত? [RU'25-26]",
    options: ["2.5", "2.0", "1.5", "1.0"],
    correct_answer: "1.0",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{pH = -\\log[2 \\times 50 \\times 10^{-3}] = 1}$",
    time_limit: 60
  },
  {
    id: 87033,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৩৩. একটি দ্রবণের হাইড্রোজেন আয়নের ঘনমাত্রা $1.82 \\times 10^{-5}\\mathrm{molL^{-1}}$। উক্ত দ্রবণের $\\mathrm{pH}$ কত? [CU'25-26]",
    options: ["4.74", "3.64", "2.52", "5.42"],
    correct_answer: "4.74",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{[H^{+}] = 1.82 \\times 10^{-5}\\mathrm{mol L^{-1}}}$\n$\\therefore \\mathrm{pH = -\\log[H^{+}] = -\\log(1.82 \\times 10^{-5})}$\n$= 4.7399 \\approx 4.74$",
    time_limit: 60
  },
  {
    id: 87034,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৩৪. ডেসিমোলার মিথানয়িক এসিডের বিয়োজন মাত্রা $10\\%$ হলে এর $\\mathrm{pH}$ মান কত? [KU'25-26]",
    options: ["1.0", "1.5", "2.0", "2.5"],
    correct_answer: "2.0",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{[H^{+}] = \\alpha C = 10\\% \\times 0.1 = 0.01M}$\n$\\mathrm{pH = -\\log[H^{+}] = -\\log(0.01) = 2}$",
    time_limit: 60
  },
  {
    id: 87035,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৩৫. $\\mathrm{pH = 3.0}$ (দ্রবণ-১) ও $\\mathrm{pH = 6.0}$ (দ্রবণ-২) মাত্রার দুটি দ্রবণ দেওয়া আছে। কোন দ্রবণটি বেশি অম্লীয় এবং কত গুণ? [KU'25-26; RU'23-24]",
    options: ["দ্রবণ-১; 100 গুণ বেশি", "দ্রবণ-২; 1000 গুণ বেশি", "দ্রবণ-১; 1000 গুণ বেশি", "দ্রবণ-২; 100 গুণ বেশি"],
    correct_answer: "দ্রবণ-১; 1000 গুণ বেশি",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{pH}$ কম হলে বেশি অম্লীয় হয় এবং মাত্রা $10^{(\\mathrm{pH_{2}} - \\mathrm{pH_{1}})} = 10^{6 - 3} = 10^{3} = 1000$ গুণ বেশি।",
    time_limit: 60
  },
  {
    id: 87036,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৩৬. $\\mathrm{MgO}$ এবং $\\mathrm{CO_{2}}$ দিয়ে দুইটি সম্পৃক্ত দ্রবণ তৈরি করা হয়েছে যাদের $\\mathrm{pH}$ মেপে যথাক্রমে $\\mathrm{x}$ এবং $\\mathrm{y}$ পাওয়া গেল। এক্ষেত্রে $\\mathrm{x}$ এবং $\\mathrm{y}$ এর তুলনামূলক মান কেমন হবে? [SUST'25-26]",
    options: ["$\\mathrm{x > 7.0, y < 7.0}$", "$\\mathrm{x > 7.0, y > 7.0}$", "$\\mathrm{x < 7.0, y < 7.0}$", "$\\mathrm{x = 7.0, y = 7.0}$"],
    correct_answer: "$\\mathrm{x > 7.0, y < 7.0}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{MgO}$ ক্ষারীয় সুতরাং $\\mathrm{pH > 7}$ হবে।\n$\\mathrm{CO_{2}}$ অম্লীয় সুতরাং $\\mathrm{pH < 7}$ হবে।",
    time_limit: 60
  },
  {
    id: 87037,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৩৭. মানুষের রক্তের $\\mathrm{pH}$ 7.45 এর বেশি হলে রোগটির নাম কী? [HSTU'25-26; JU'18-19]",
    options: ["অ্যাসিডোসিস", "অ্যালকালোসিস", "মেটাবলিক", "হাইপোক্যালেমিয়া"],
    correct_answer: "অ্যালকালোসিস",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87038,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৩৮. মাটির $\\mathrm{pH}$ বৃদ্ধির জন্য ব্যবহৃত হয়- [HSTU'25-26; DU'16-17]",
    options: ["ইউরিয়া", "ডলোমাইট", "ডিএপি", "টিএসপি"],
    correct_answer: "ডলোমাইট",
    explanation: "$\\mathrm{Sol^{n}}$: মাটির $\\mathrm{pH}$ বৃদ্ধির জন্য ডলোমাইট এবং চুন এবং $\\mathrm{pH}$ হ্রাস করার জন্য টিএসপি, ফসফেট ব্যবহার করা হয়।",
    time_limit: 60
  },
  {
    id: 87039,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৩৯. জৈব এসিডের বিয়োজন মাত্রা $10\\%$ হলে, ঐ দ্রবণের $0.001\\mathrm{M}$ এর $\\mathrm{pH}$ কত? [CoU'25-26; RU'19-20, 17-18]",
    options: ["2", "3", "4", "5"],
    correct_answer: "4",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{[H^{+}] = \\alpha C = 0.1 \\times 0.001 = 1 \\times 10^{-4}}$\n$\\therefore \\mathrm{pH = -\\log[H^{+}] = -\\log[1 \\times 10^{-4}] = 4}$",
    time_limit: 60
  },
  {
    id: 87040,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৪০. একটি দ্রবণের $\\mathrm{pOH = 3}$ হলে $\\mathrm{H_{3}O^{+}}$ এর মোলার ঘনমাত্রা কত? [RU'24-25]",
    options: ["$1 \\times 10^{-3}$", "$1 \\times 10^{-11}$", "$1 \\times 10^{-7}$", "$1 \\times 10^{-14}$"],
    correct_answer: "$1 \\times 10^{-11}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87041,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৪১. মানুষের রক্তের স্বাভাবিক $\\mathrm{pH}$ কত? [JU'24-25, 18-19]",
    options: ["9.4", "8.3", "7.4", "6.4"],
    correct_answer: "7.4",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87042,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৪২. $\\mathrm{0.01\\mathrm{M}HCl}$ দ্রবণের $\\mathrm{pH}$ কত? [JnU'24-25]",
    options: ["1", "2", "3", "4"],
    correct_answer: "2",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{[H^{+}] = 0.01\\mathrm{M}}$\n$\\mathrm{pH = -\\log[H^{+}] = -\\log(0.01) = 2}$",
    time_limit: 60
  },
  {
    id: 87043,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৪৩. একটি দ্রবণের হাইড্রোক্সাইড আয়ন ($\\mathrm{OH^{-}}$) এর ঘনমাত্রা $8.2 \\times 10^{-4}\\mathrm{molL^{-1}}$ হলে উক্ত দ্রবণের $\\mathrm{pH}$ এর মান কত? [KU'24-25]",
    options: ["3.09", "4.09", "10.91", "10.09"],
    correct_answer: "10.91",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{pOH = -\\log[OH^{-}] = -\\log(8.2 \\times 10^{-4})}$\n$= -\\log 8 - \\log 10^{-4} = -0.9 + 4 = 3.1$\n$\\therefore \\mathrm{pH \\approx 14 - 3.1 = 10.9}$",
    time_limit: 60
  },
  {
    id: 87044,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৪৪. দ্রবণে $\\mathrm{[H^{+}] = 1.0 \\times 10^{-4}\\mathrm{M}}$ হলে, $\\mathrm{pOH}$ কত? [GST'24-25]",
    options: ["4.0", "6.0", "10.0", "14.0"],
    correct_answer: "10.0",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{pH + pOH = 14}$\n$\\Rightarrow \\mathrm{pOH = 14 - pH \\Rightarrow pOH = 14 + \\log[H^{+}]}$\n$= 14 + \\log(1 \\times 10^{-4}) = 14 - 4 = 10$",
    time_limit: 60
  },
  {
    id: 87045,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৪৫. কোন দ্রবণটির $\\mathrm{pH}$ শূন্যের চেয়ে বেশি কিন্তু 1.0 এর চেয়ে কম? [SUST'24-25]",
    options: ["$\\mathrm{0.1MHCl}$", "$\\mathrm{0.1MH_{2}SO_{4}}$", "$\\mathrm{0.1MNa_{2}CO_{3}}$", "$\\mathrm{0.01MNaCl}$"],
    correct_answer: "$\\mathrm{0.1MH_{2}SO_{4}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\underset{\\mathrm{0.1M}}{H_{2}SO_{4}} \\rightarrow \\underset{\\mathrm{2 \\times 0.1M}}{2H^{+}} + \\underset{\\mathrm{0.1M}}{SO_{4}^{2-}}$\n$\\therefore \\mathrm{[H^{+}]} = 2 \\times 0.1 = 0.2$\n$\\mathrm{pH = -\\log[H^{+}] = -\\log[0.2] = 0.69897}$\n$\\therefore 0 < \\mathrm{pH} < 1$",
    time_limit: 60
  },
  {
    id: 87046,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৪৬. নিচের কোন দ্রবণের ক্ষেত্রে $\\mathrm{pH}$ এর মান সর্বাধিক? [CoU'24-25]",
    options: ["$\\mathrm{0.01\\mathrm{M}H_{2}CO_{3}}$", "$\\mathrm{0.01\\mathrm{M}HCl}$", "$\\mathrm{0.01\\mathrm{M}HNO_{3}}$", "$\\mathrm{0.01\\mathrm{M}H_{2}SO_{4}}$"],
    correct_answer: "$\\mathrm{0.01\\mathrm{M}H_{2}CO_{3}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{H_{2}SO_{4}, HCl, HNO_{3}, H_{2}CO_{3}}$ এসিডসমূহের মধ্যে $\\mathrm{H_{2}CO_{3}}$ সবচেয়ে দুর্বল এসিড। তাই এর $\\mathrm{pH}$ সর্বাধিক।",
    time_limit: 60
  },
  {
    id: 87047,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৪৭. $25^{\\circ}\\mathrm{C}$ তাপমাত্রায় পানির $\\mathrm{pH}$ ও $\\mathrm{pOH}$ উভয়েই $7.0$ হলে অধিক তাপমাত্রায় নিচের কোন সম্পর্কটি সঠিক? [DU'23-24]",
    options: ["$\\mathrm{pH < 7.0; pOH < 7.0}$", "$\\mathrm{pH < 7.0; pOH > 7.0}$", "$\\mathrm{pH > 7.0; pOH < 7.0}$", "$\\mathrm{pH > 7.0; pOH > 7.0}$"],
    correct_answer: "$\\mathrm{pH < 7.0; pOH < 7.0}$",
    explanation: "$\\mathrm{Sol^{n}}$: তাপমাত্রা বেশি হলে $\\mathrm{K_{w}}$ এর মান বাড়ে। $\\mathrm{K_{w}}$ এর মান বাড়লে $\\mathrm{[H^{+}]}$ ও $\\mathrm{[OH^{-}]}$ ঘনমাত্রা বাড়ে। তাই $\\mathrm{pH}$ ও $\\mathrm{pOH}$ এর মান কমে যায়।\n$\\mathrm{pH + pOH = 14}$ ($25^{\\circ}\\mathrm{C}$ এ)\n$\\mathrm{pH + pOH < 14}$ (বেশি তাপমাত্রায়)",
    time_limit: 60
  },
  {
    id: 87048,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৪৮. লেমন জুসের নমুনায় $\\mathrm{OH^{-}}$ আয়নের ঘনমাত্রা $4.0 \\times 10^{-12}\\mathrm{M}$ হলে $\\mathrm{H_{3}O^{+}}$ আয়নের মোলার ঘনমাত্রা কত? [RU'23-24]",
    options: ["$5.2 \\times 10^{-3}$", "$2.5 \\times 10^{-4}$", "$2.5 \\times 10^{-3}$", "$5.2 \\times 10^{-1}$"],
    correct_answer: "$2.5 \\times 10^{-3}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{[H_{3}O^{+}] \\times [OH^{-}] = 1 \\times 10^{-14}}$\n$\\mathrm{[H_{3}O^{+}] = \\frac{1 \\times 10^{-14}}{4 \\times 10^{-12}} = 0.25 \\times 10^{-2} = 2.5 \\times 10^{-3} M}$",
    time_limit: 60
  },
  {
    id: 87049,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৪৯. যে দ্রবণের $\\mathrm{pH = 5}$, ঐ দ্রবণে $\\mathrm{H_{3}O^{+}}$ এর ঘনমাত্রা কত? [JU'23-24]",
    options: ["$\\mathrm{10^{-7}gionL^{-1}}$", "$\\mathrm{10^{-4}gionL^{-1}}$", "$\\mathrm{10^{-5}gionL^{-1}}$", "$\\mathrm{10^{-6}gionL^{-1}}$"],
    correct_answer: "$\\mathrm{10^{-5}gionL^{-1}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{pH = -\\log[H^{+}] = 5}$\n$\\mathrm{[H^{+}] = 10^{-5}M = 10^{-5}gionL^{-1}}$",
    time_limit: 60
  },
  {
    id: 87050,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৫০. $\\mathrm{0.125\\mathrm{MNa_{2}CO_{3}}}$ দ্রবণের $\\mathrm{pH}$-এর মান কত? [JU'23-24]",
    options: ["13.4", "0.6", "5.4", "11.2"],
    correct_answer: "11.2",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{pH = 14 - pOH = 14 + \\log[OH^{-}]}$\n$= 14 + \\log(2 \\times 0.125) = 14 + \\log 0.25$\n$\\because \\log 1 = 0; \\log 0.1 = -1$\n$\\therefore -1 < \\log(0.25) < 0 ; 13 < \\mathrm{pH} < 14$\nনোট: বইয়ের ব্যাখ্যা অনুযায়ী pH ১৩–১৪ এর মধ্যে আসে, কিন্তু মুদ্রিত উত্তর ঘ) 11.2 — যাচাই প্রয়োজন।",
    time_limit: 60
  },
  {
    id: 87051,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৫১. নিচের কোনটি সঠিক? [JU'22-23]\n(i) কৃষি কাজের ক্ষেত্রে মাটির $\\mathrm{pH}$ মান 3.0-9.5 এর মধ্যে নিয়ন্ত্রণ করা হয়।\n(ii) মাটির $\\mathrm{pH}$ মান হ্রাস পেয়ে 3.0 এর কাছাকাছি চলে আসলে উদ্ভিদ মরে যায়।\n(iii) মাটির $\\mathrm{pH}$ মান বৃদ্ধি পেয়ে 9.5 এর উপরে উঠে গেলে মাটিতে বর্তমান বিভিন্ন অণুজীব মরে যায়, ফলে মাটির প্রাকৃতিক উর্বরতা বিনষ্ট হয়।",
    options: ["i, ii", "ii, iii", "কোনোটিই নয়", "সবগুলো"],
    correct_answer: "সবগুলো",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87052,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৫২. $12.5\\%$ $\\mathrm{NaOH}$ দ্রবণের $\\mathrm{pH}$ কত? [JU'22-23; SUST'19-20]",
    options: ["12.51", "13.51", "14.53", "15.51"],
    correct_answer: "15.51",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{S = \\frac{10x}{M} = \\frac{10 \\times 12.5}{40} = 3.125\\mathrm{M}}$\n$\\mathrm{[OH^{-}] = 3.125M ; pH + pOH = 14}$\n$\\mathrm{pH = 14 - pOH = 14 + \\log[OH^{-}]}$\n$= 14 + \\log(3.125) \\therefore \\log 1 = 0$\n$\\log 10 = 1 \\therefore 0 < \\log 3.125 < 1 \\therefore 14 < \\mathrm{pH} < 15$",
    time_limit: 60
  },
  {
    id: 87053,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৫৩. $\\mathrm{pH}$ কমে গেলে জমিতে ব্যবহৃত হয়: [JU'22-23]\n(i) চুন\n(ii) ক্যালসিয়াম সার\n(iii) ম্যাগনেসিয়াম সার\nনিচের কোনটি সঠিক?",
    options: ["i, ii", "ii, iii", "i, iii", "i, ii, iii"],
    correct_answer: "i, ii, iii",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87054,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৫৪. $\\mathrm{0.001\\mathrm{M}KOH}$ দ্রবণের $\\mathrm{pH}$ কত? [CU'22-23, 21-22, 20-21, 16-17]",
    options: ["14", "0.01", "11", "7"],
    correct_answer: "11",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{pH = 14 - pOH = 14 - (-\\log[OH^{-}]) = 11}$",
    time_limit: 60
  },
  {
    id: 87055,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৫৫. কমলা লেবুর রসের $\\mathrm{pH\\ 2.3}$ হলে উক্ত রসের $\\mathrm{[H^{+}]}$ ও $\\mathrm{pOH}$ এর মান হবে যথাক্রমে- [RU'21-22]",
    options: ["$10^{-2.3}\\mathrm{molL^{-1}}$ ও $13.0$", "$10^{2.3}\\mathrm{molL^{-1}}$ ও $11.7$", "$10^{-2.3}\\mathrm{molL^{-1}}$ ও $11.7$", "$10^{2.3}\\mathrm{molL^{-1}}$ ও $13.0$"],
    correct_answer: "$10^{-2.3}\\mathrm{molL^{-1}}$ ও $11.7$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{pH = 2.3 \\Rightarrow -\\log[H^{+}] = 2.3}$\n$\\Rightarrow \\mathrm{[H^{+}] = 10^{-2.3}}$ এবং $\\mathrm{pOH = 14 - pH = 11.7}$",
    time_limit: 60
  },
  {
    id: 87056,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৫৬. কোন উক্তিটি সঠিক নয়? [JU'21-22]",
    options: ["পানির বিয়োজন তাপহারী বলে তাপমাত্রা বৃদ্ধিতে $\\mathrm{H^{+}}$ আয়ন বৃদ্ধি পায়", "$\\mathrm{pH}$ এর মান $\\mathrm{H^{+}}$ আয়নের ঘনমাত্রার ব্যস্তানুপাতিক", "ফুটন্ত পানির $\\mathrm{pH}$ এর মান $6.526$", "ফুটন্ত পানির $\\mathrm{pH}$ এর মান $7.526$"],
    correct_answer: "ফুটন্ত পানির $\\mathrm{pH}$ এর মান $7.526$",
    explanation: "$\\mathrm{Sol^{n}}$: ফুটন্ত পানি অর্থাৎ, $100^{\\circ}\\mathrm{C}$ তাপমাত্রায় পানির $\\mathrm{K_{w}}$ বৃদ্ধি পায় ফলে $\\mathrm{H^{+}}$ ও $\\mathrm{OH^{-}}$ দুটোই বাড়ে। ফলে পানি $\\mathrm{pH}$ কমতে থাকে অর্থাৎ $7$ এর কম হয়।",
    time_limit: 60
  },
  {
    id: 87057,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৫৭. কোন উক্তিটি সঠিক নয়? [JU'21-22]",
    options: ["দ্রবণের ঘনমাত্রা হ্রাস করলে $\\mathrm{pH}$ এর মান বৃদ্ধি পায়", "দ্রবণের ঘনমাত্রা বৃদ্ধি করলে $\\mathrm{pH}$ এর মান হ্রাস পায়", "দ্রবণে $\\mathrm{H_{3}O^{+}}$ আয়নের ঘনমাত্রা $10$ গুণ বৃদ্ধি করলে $\\mathrm{pH}$ এক একক বৃদ্ধি পায়", "দ্রবণে $\\mathrm{H_{3}O^{+}}$ আয়নের ঘনমাত্রা $10$ গুণ হ্রাস করলে $\\mathrm{pH}$ এক একক বৃদ্ধি পায়"],
    correct_answer: "দ্রবণে $\\mathrm{H_{3}O^{+}}$ আয়নের ঘনমাত্রা $10$ গুণ বৃদ্ধি করলে $\\mathrm{pH}$ এক একক বৃদ্ধি পায়",
    explanation: "বি.দ্র.: Option (a) এবং (b) তে $\\mathrm{H_{3}O^{+}}$ আয়নের ঘনমাত্রা হবে।",
    time_limit: 60
  },
  {
    id: 87058,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৫৮. একটি জলীয় দ্রবণের $\\mathrm{pOH}$ এর মান $4$ হলে দ্রবণটিতে $\\mathrm{H^{+}}$ এর ঘনমাত্রা কত? [JU'20-21]",
    options: ["$10^{-8}\\mathrm{mol/l}$", "$10^{-6}\\mathrm{mol/l}$", "$10^{-4}\\mathrm{mol/l}$", "$10^{-2}\\mathrm{mol/l}$"],
    correct_answer: "$10^{-4}\\mathrm{mol/l}$",
    explanation: "$\\mathrm{Sol^{n}}$: (সঠিক উত্তর নেই); $\\mathrm{pH = 14 - pOH}$\n$= 14 - 4 = 10 \\Rightarrow -\\log[H^{+}] = 10$\n$\\Rightarrow \\mathrm{[H^{+}] = 10^{-10}M}$\nনোট: বইয়ের সমাধান অনুযায়ী প্রকৃত মান $10^{-10}\\mathrm{M}$, যা কোনো অপশনে নেই — যাচাই প্রয়োজন।",
    time_limit: 60
  },
  {
    id: 87059,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৫৯. $\\mathrm{pH-5}$ অপেক্ষা $\\mathrm{pH-2}$ এর দ্রবণ কতগুণ বেশি অম্লীয়? [Agri.'19-20; JU'14-15; CU'13-14, 12-13, 10-11, 08-09]",
    options: ["5", "8", "10", "1000"],
    correct_answer: "1000",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{[H^{+}] = 10^{pH_{2}-pH_{1}} = 10^{5-2} = 10^{3} = 1000}$",
    time_limit: 60
  },
  {
    id: 87060,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৬০. $50\\mathrm{mL\\ 1.0\\ M\\ NaOH}$ এবং $50\\mathrm{mL\\ 0.8\\ M\\ HCl}$ এর মিশ্রণের $\\mathrm{pH}$ কত? [DU'18-19]",
    options: ["1.0", "2.0", "13.0", "12.0"],
    correct_answer: "13.0",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{[H^{+}] = \\frac{50 \\times 0.8 - 50 \\times 1}{50 + 50}\\mathrm{M} = -0.1\\mathrm{M}}$;\n$\\mathrm{[H^{+}] = (-)}$ হলে, দ্রবণ ক্ষারীয় তাই $\\mathrm{[OH^{-}]}$ লাগবে, $\\mathrm{[OH^{-}] = 0.1\\mathrm{M}}$\n$\\therefore \\mathrm{pH = 14 - pOH = 14 + \\log(0.1) = 13}$",
    time_limit: 60
  },
  {
    id: 87062,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৬২. $499\\mathrm{cm^{3}}$ পানিতে $1\\mathrm{cm^{3}}\\ 10\\mathrm{MHCl}$ যোগ করলে উৎপন্ন দ্রবণের $\\mathrm{pH}$ কত হবে? [CU'18-19]",
    options: ["0", "1", "1.69", "4"],
    correct_answer: "1.69",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{[H^{+}] = \\frac{10 \\times 1 \\times 10^{-3}}{(499+1) \\times 10^{-3}} ; pH = -\\log(0.02)}$\n$= -\\log(2 \\times 10^{-2}) = 2 - \\log 2$\n$\\because 0 < \\log(2) < 1 \\therefore 1 < \\mathrm{pH} < 2$",
    time_limit: 60
  },
  {
    id: 87063,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৬৩. নিচের কোন দ্রবণটির $\\mathrm{pH}$ সবচেয়ে বেশি? [KU'18-19]",
    options: ["$\\mathrm{0.1MHCl}$", "$\\mathrm{1MNa_{2}CO_{3}}$", "$\\mathrm{1MNaCl}$", "$\\mathrm{1MNaOH}$"],
    correct_answer: "$\\mathrm{1MNaOH}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87064,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৬৪. দাঁতের ক্ষয় রোধে ব্যবহৃত টুথপেস্টের $\\mathrm{pH}$ কত? [KU'18-19]",
    options: ["4.5", "5.5", "7.4", "8.9"],
    correct_answer: "8.9",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87065,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৬৫. মৎস্য চাষে মাটির $\\mathrm{pH}$ কত রাখা প্রয়োজন? [BAU'18-19]",
    options: ["6.0-6.5", "6.8-7.2", "8.5-9.5", "10.5-12.0"],
    correct_answer: "6.8-7.2",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87066,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৬৬. নিচের কোনটি সঠিক নয়? [DU'17-18]",
    options: ["$10^{-4}\\mathrm{MHCl}$ দ্রবণের $\\mathrm{pH}$ হলো 2", "$0.01\\mathrm{MNa_{2}CO_{3}}$ দ্রবণের $\\mathrm{pH\\ 7}$ এর চেয়ে বেশি", "$0.01\\mathrm{MNaOH}$ দ্রবণের $\\mathrm{pH}$ হলো 12", "$10^{-9}\\mathrm{MHCl}$ দ্রবণের $\\mathrm{pH}$ হলো 9"],
    correct_answer: "$10^{-9}\\mathrm{MHCl}$ দ্রবণের $\\mathrm{pH}$ হলো 9",
    explanation: "$\\mathrm{Sol^{n}}$: অধিক লঘু এসিডের $\\mathrm{pH}$-$7$ এর নিচে হবে।",
    time_limit: 60
  },
  {
    id: 87067,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৬৭. কোনো ক্ষারীয় দ্রবণের ঘনমাত্রা $8.2 \\times 10^{-4}\\mathrm{molL^{-1}}$ হলে উক্ত দ্রবণের $\\mathrm{pH}$ কত? [JnU'17-18]",
    options: ["10.9", "10.5", "11.5", "11.9"],
    correct_answer: "10.9",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{pH = 14 + \\log(8.2 \\times 10^{-4})}$\n$= 14 + \\log(10^{-4}) + \\log(8.2)$\n$= 14 - 4 + \\log(8.2) = 10 + \\log(8.2) = 10.9$",
    time_limit: 60
  },
  {
    id: 87068,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৬৮. $0.01\\mathrm{MHCl}$ দ্রবণের $\\mathrm{pOH}$ এবং $\\mathrm{pH}$ হলো- [DU'16-17; RU'14-15]",
    options: ["13, 1", "14, 0", "12, 2", "1, 13"],
    correct_answer: "12, 2",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{pH = -\\log[H^{+}] = -\\log(0.01) = 2}$;\n$\\mathrm{pOH = 14 - pH = 14 - 2 = 12}$",
    time_limit: 60
  },
  {
    id: 87069,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৬৯. দুর্বল এসিড, $\\mathrm{HX}$ ও $\\mathrm{NaOH}$ এর বিক্রিয়ার সমীকরণটি হলো- $\\mathrm{HX(aq) + NaOH(aq) \\rightarrow NaX(aq) + H_{2}O(l)}$; $\\mathrm{NaX}$ এর জলীয় দ্রবণের সম্ভাব্য $\\mathrm{pH}$ হবে- [DU'15-16]",
    options: ["5.5", "7.0", "8.5", "3.0"],
    correct_answer: "8.5",
    explanation: "$\\mathrm{Sol^{n}}$: দুর্বল এসিড ও তীব্র ক্ষারের বিক্রিয়ায় উৎপন্ন লবণের দ্রবণ ক্ষারীয়। $\\therefore \\mathrm{pH > 7}$",
    time_limit: 60
  },
  {
    id: 87070,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৭০. $0.01\\mathrm{N}\\mathrm{NaOH}$ দ্রবণে $\\mathrm{NaOH}\\ 100\\%$ আয়নিত হয়; উক্ত দ্রবণের $\\mathrm{pH}$ কত? [RU'15-16]",
    options: ["12", "2", "ক্ষারীয় দ্রবণের $\\mathrm{pH}$ মান নেই", "কোনটিই নয়"],
    correct_answer: "12",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{NaOH}$ এর তুল্য সংখ্যা $1$ হওয়ায় $0.01\\mathrm{N}$ $\\mathrm{NaOH \\equiv 0.01\\mathrm{M}NaOH}$। $100\\%$ আয়নিত হওয়ায়, দ্রবণে $\\mathrm{OH^{-}}$ আয়নের ঘনমাত্রা $= 0.01\\mathrm{M}$।\n$\\therefore$ দ্রবণের $\\mathrm{pOH = -\\log(0.01) = 2}$\n$\\therefore$ দ্রবণের $\\mathrm{pH = 14 - 2 = 12}$",
    time_limit: 60
  },
  {
    id: 87071,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৭১. নিরপেক্ষ লবণের জলীয় দ্রবণের $\\mathrm{pH}$ কত? [JU'15-16]",
    options: ["6.75", "7.0", "7.25", "7.50"],
    correct_answer: "7.0",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87072,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৭২. $0.4\\mathrm{gmL^{-1}}\\mathrm{NaOH}$ এর জলীয় দ্রবণের $\\mathrm{pH}$ কত? [CU'15-16]",
    options: ["10", "11", "12", "9"],
    correct_answer: "12",
    explanation: "$\\mathrm{Sol^{n}}$: $0.4\\mathrm{gmL^{-1}}\\mathrm{NaOH}$ মানে $\\frac{0.4}{40}\\mathrm{molL^{-1}}$\n$= 0.01\\mathrm{molL^{-1}}\\mathrm{NaOH}$\nঅর্থাৎ, দ্রবণে $\\mathrm{OH^{-}}$ এর ঘনমাত্রা $0.01\\mathrm{M}$।\n$\\therefore$ দ্রবণের $\\mathrm{pOH = -\\log(0.01) = 2}$ এবং\n$\\mathrm{pH = (14 - 2) = 12}$",
    time_limit: 60
  },
  {
    id: 87074,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৭৪. মানুষের চোখের পানির $\\mathrm{pH}$- [JU'14-15]",
    options: ["6.35 - 6.68", "6.6 - 6.9", "4.8 - 7.5", "7.4 - 7.8"],
    correct_answer: "4.8 - 7.5",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87075,
    topic: "pH, pOH সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t10",
    question_text: "১৭৫. সাবান উৎপাদনে $\\mathrm{pH}$ রাখতে হয়- [JU'14-15]",
    options: ["> 7.0", "> 6.0", "> 5.0", "< 7.0"],
    correct_answer: "> 7.0",
    explanation: "",
    time_limit: 60
  },
  // --- T-11: বাফার দ্রবণ সংক্রান্ত সমস্যা ---
  {
    id: 87176,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৭৬. একটি বাফার দ্রবণে অল্প পরিমাণ শক্তিশালী এসিড বা ক্ষার যুক্ত করলে দ্রবণের $\\mathrm{pH}$ কিরূপ হবে? [CU'25-26]",
    options: ["$\\mathrm{pH}$ কমবে", "$\\mathrm{pH}$ বাড়বে", "$\\mathrm{pH}$ অপরিবর্তিত থাকবে", "নির্ণয় করা যায় না"],
    correct_answer: "$\\mathrm{pH}$ অপরিবর্তিত থাকবে",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87177,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৭৭. $0.1\\mathrm{M}$ ঘনমাত্রার $1\\mathrm{L}$ ফসফেট বাফার দ্রবণ তৈরি হলো যার $\\mathrm{pH = 7.0}$। এখন এই দ্রবণে আরো $1\\mathrm{L}$ বিশুদ্ধ পানি যোগ করলে কোন তথ্যটি সঠিক হবে? [SUST'25-26]",
    options: ["$\\mathrm{pH}$-এর মান কমে যাবে", "$\\mathrm{pH}$-এর মান বেড়ে যাবে", "বাফার ক্ষমতা অপরিবর্তিত থাকবে", "$\\mathrm{pH}$-এর মান অপরিবর্তিত থাকবে"],
    correct_answer: "$\\mathrm{pH}$-এর মান অপরিবর্তিত থাকবে",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87178,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৭৮. $50\\mathrm{mL\\ 0.1\\mathrm{M}}$ বেনজয়িক এসিডের সাথে $50\\mathrm{mL\\ 0.05\\mathrm{M}}$ $\\mathrm{KOH}$ মিশ্রিত করলে, মিশ্রণের $\\mathrm{pH}$ গণনা করার যথার্থ সূত্রটি হবে- [SUST'25-26]",
    options: ["$\\mathrm{pH = -\\log[H^{+}]}$", "$\\mathrm{pH = 14 - pOH}$", "$\\mathrm{pH = pK_{a}}$", "$\\mathrm{pH = \\frac{1}{2}(pK_{w} + pK_{a} + \\log C)}$"],
    correct_answer: "$\\mathrm{pH = pK_{a}}$",
    explanation: "$\\mathrm{Sol^{n}}$:\n[এখানে চিত্র ছিল]\nপ্রাথমিক: $5\\mathrm{mL\\ 1\\mathrm{M}} \\quad 2.5\\mathrm{mL\\ 1\\mathrm{M}} \\quad 0 \\quad 0$\nসাম্যাবস্থা: $(5 - 2.5)\\mathrm{mL} \\quad 0 \\quad 2.5 \\quad 2.5 = 2.5\\mathrm{mL}$\n$\\therefore \\mathrm{pH = pKa + \\log\\frac{2.5}{2.5}}$\n$\\Rightarrow \\mathrm{pH = pKa + \\log 1}$\n$\\therefore \\mathrm{pH = pKa}$",
    time_limit: 60
  },
  {
    id: 87179,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৭৯. নিচের কোনটি বাফার দ্রবণ নির্দেশ করে? [CoU'25-26]",
    options: ["$30\\mathrm{mL\\ 0.1MNH_{4}OH} + 20\\mathrm{mL\\ 0.2MHCl}$", "$40\\mathrm{mL\\ 0.2MCH_{3}COOH} + 30\\mathrm{mL\\ 0.3MNaOH}$", "$50\\mathrm{mL\\ 0.1MNaOH} + 40\\mathrm{mL\\ 0.2MH_{2}CO_{3}}$", "$60\\mathrm{mL\\ 0.1MNaOH} + 70\\mathrm{mL\\ 0.2MHCl}$"],
    correct_answer: "$50\\mathrm{mL\\ 0.1MNaOH} + 40\\mathrm{mL\\ 0.2MH_{2}CO_{3}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{NaOH = (0.05 \\times 0.1) = 5 \\times 10^{-3}mole}$\n$\\mathrm{H_{2}CO_{3} = (0.04 \\times 0.2) = 8 \\times 10^{-3}mole}$\n$\\therefore \\mathrm{n_{H_{2}CO_{3}} > n_{NaOH}}$। সুতরাং এটি বাফার দ্রবণ।",
    time_limit: 60
  },
  {
    id: 87180,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৮০. কোনটি বাফার দ্রবণ? [RU'24-25]",
    options: ["$\\mathrm{NaOH}$ ও $\\mathrm{Na_{2}CO_{3}}$", "$\\mathrm{NaCl}$ ও $\\mathrm{HCl}$", "$\\mathrm{NaH_{2}PO_{4}}$ ও $\\mathrm{Na_{2}HPO_{4}}$", "$\\mathrm{CH_{3}COOH}$ ও $\\mathrm{NaOH}$"],
    correct_answer: "$\\mathrm{NaH_{2}PO_{4}}$ ও $\\mathrm{Na_{2}HPO_{4}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87181,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৮১. মানব রক্তে কোন বাফার বিদ্যমান? [HSTU'24-25]",
    options: ["$\\mathrm{NaHCO_{3} + H_{2}CO_{3}}$", "$\\mathrm{NaHCO_{3} + HCO_{3}}$", "$\\mathrm{NaHCO_{3} + H_{2}NO_{3}}$", "$\\mathrm{NaHCO_{3} + H_{2}NO_{2}}$"],
    correct_answer: "$\\mathrm{NaHCO_{3} + H_{2}CO_{3}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87182,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৮২. একটি বাফার দ্রবণে $2.0$ মোল ইথানোয়িক এসিড ($\\mathrm{pK_{a} = 4.8}$) এবং $0.02$ মোল এসিডের সোডিয়াম লবণ আছে। বাফার দ্রবণটির $\\mathrm{pH}$ কত? [HSTU'24-25]",
    options: ["2.8", "3.8", "4.8", "5.5"],
    correct_answer: "2.8",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{pH = pK_{a} + \\log\\frac{n_{salt}}{n_{acid}}}$\n$= 4.8 + \\log\\frac{0.02}{2} = 4.8 - 2 = 2.8$",
    time_limit: 60
  },
  {
    id: 87183,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৮৩. সম আয়তনের $0.1\\mathrm{MCH_{3}COONa}$ এবং $0.01\\mathrm{M}$ $\\mathrm{CH_{3}COOH}$ মিশ্রণের $\\mathrm{pH}$ কত? [$\\mathrm{CH_{3}COOH}$ এর $\\mathrm{pK_{a} = 4.76}$] [RU'23-24; GST'23-24, 20-21]",
    options: ["5.76", "3.76", "4.76", "2.76"],
    correct_answer: "5.76",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{pH = pK_{a} + \\log\\frac{[Salt]}{[Acid]}}$\n$= 4.76 + \\log\\frac{[CH_{3}COO^{-}]}{[CH_{3}COOH]} = 4.76 + \\log\\left[\\frac{0.1}{0.01}\\right]$\n$= 4.76 + \\log 10 = 4.76 + 1 = 5.76$",
    time_limit: 60
  },
  {
    id: 87184,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৮৪. 4.74 $\\mathrm{pH}$ বিশিষ্ট বাফার দ্রবণ নিচের কোনটি? [RU'23-24]",
    options: ["$\\mathrm{CH_{3}COOH}$ ও $\\mathrm{CH_{3}COONa}$", "$\\mathrm{HCl}$ ও $\\mathrm{NaCl}$", "$\\mathrm{NH_{3}}$ ও $\\mathrm{NH_{4}Cl}$", "$\\mathrm{NaCl}$ ও $\\mathrm{NaHCO_{3}}$"],
    correct_answer: "$\\mathrm{CH_{3}COOH}$ ও $\\mathrm{CH_{3}COONa}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87185,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৮৫. $0.4\\mathrm{MCH_{3}COOH}$ ও $0.4\\mathrm{MCH_{3}COONa}$ মিশ্রণের জলীয় দ্রবণের $\\mathrm{pH}$ কত? ($\\mathrm{K_{a} = 1.0 \\times 10^{-5}}$) [GST'22-23]",
    options: ["9", "8", "5", "4"],
    correct_answer: "5",
    explanation: "$\\mathrm{Sol^{n}}$: বাফার দ্রবণের ক্ষেত্রে, $\\mathrm{pH = pK_{a} + \\log\\frac{[salt]}{[acid]}}$\n$= -\\log(1.0 \\times 10^{-5}) + \\log\\left(\\frac{0.4}{0.4}\\right) = 5$",
    time_limit: 60
  },
  {
    id: 87186,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৮৬. কোনটি ক্ষারীয় বাফার দ্রবণ? [DU'21-22]",
    options: ["$\\mathrm{HCOOH + HCOONa}$", "$\\mathrm{NaOH + NaCl}$", "$\\mathrm{aq. NH_{3} + NaOH}$", "$\\mathrm{aq. NH_{3} + NH_{4}Cl}$"],
    correct_answer: "$\\mathrm{aq. NH_{3} + NH_{4}Cl}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{NH_{3}}$ দুর্বল ক্ষার ও তার লবণ $\\mathrm{[NH_{4}Cl]}$",
    time_limit: 60
  },
  {
    id: 87187,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৮৭. নিচের কোনটি বাফার দ্রবণ? [CU'21-22, 18-19, 3-04; JnU'12-13, 04-05]",
    options: ["$\\mathrm{CH_{3}COOH}$ & $\\mathrm{NaOH}$", "$\\mathrm{CH_{3}COOH}$ & $\\mathrm{CH_{3}COONa}$", "$\\mathrm{NaOH}$ & $\\mathrm{Na_{2}CO_{3}}$", "$\\mathrm{HCl}$ & $\\mathrm{NaCl}$"],
    correct_answer: "$\\mathrm{CH_{3}COOH}$ & $\\mathrm{CH_{3}COONa}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87188,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৮৮. কোনটি সঠিক নয়? [RU'19-20]",
    options: ["মানব দেহে স্বাভাবিক অবস্থায় রক্ত একটু ক্ষারীয়", "$\\mathrm{NH_{4}OH + NH_{4}Cl}$ একটি বাফার দ্রবণ নয়", "$\\mathrm{CH_{3}COOH + CH_{3}COONa}$ একটি বাফার দ্রবণ", "এসিড বৃষ্টি হলে মাটির $\\mathrm{pH}$ মান হ্রাস পায়"],
    correct_answer: "$\\mathrm{NH_{4}OH + NH_{4}Cl}$ একটি বাফার দ্রবণ নয়",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87189,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৮৯. রক্তের $\\mathrm{pH}$ নিয়ন্ত্রণে কোন বাফারটি সাধারণত ভূমিকা পালন করে না? [JU'19-20]",
    options: ["ফসফেট", "এসিটেট", "বাই কার্বনেট", "প্রোটিন"],
    correct_answer: "এসিটেট",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87190,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৯০. রক্তের বাইকার্বনেট বাফারের $\\mathrm{pH}$ মান $7.4$ উক্ত বাফারে বাইকার্বনেট ও কার্বনিক এসিডের অনুপাত কীরূপ? [RU'15-16]",
    options: ["1:10", "2:5", "1:25", "20:1"],
    correct_answer: "20:1",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87191,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৯১. কোনো বাফার দ্রবণে সমঘনমাত্রার $\\mathrm{X^{-}}$ ও $\\mathrm{HX}$ আছে। $\\mathrm{HX}$ এর $\\mathrm{K_{a} = 10^{-6}}$ হলে বাফার দ্রবণটির $\\mathrm{pOH}$ কত? [RU'15-16]",
    options: ["3", "8", "6", "14"],
    correct_answer: "8",
    explanation: "$\\mathrm{Sol^{n}}$: সম ঘনমাত্রার $\\mathrm{X^{-}}$ এবং $\\mathrm{HX}$ থাকায় $\\mathrm{pH = pK_{a}}$\n$\\therefore \\mathrm{pH = -\\log K_{a} = -\\log(10^{-6}) = 6}$\n$\\therefore \\mathrm{pOH = 14 - 6 = 8}$",
    time_limit: 60
  },
  {
    id: 87192,
    topic: "বাফার দ্রবণ সংক্রান্ত সমস্যা",
    topicId: "chem1_change_t11",
    question_text: "১৯২. নিম্নের কোনটি বাফার দ্রবণ নয়? [CU'15-16]",
    options: ["$\\mathrm{CH_{3}COOH + CH_{3}COONa}$", "$\\mathrm{NH_{4}OH + NH_{4}Cl}$", "$\\mathrm{HCl + NaCl}$", "$\\mathrm{Na_{2}CO_{3} + NaHCO_{3}}$", "$\\mathrm{CH_{3}CH_{2}COOH + CH_{3}CH_{2}COONa}$"],
    correct_answer: "$\\mathrm{HCl + NaCl}$",
    explanation: "",
    time_limit: 60
  },
  // --- T-12: তাপ রসায়ন ---
  {
    id: 87293,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "১৯৩. তাপোৎপাদী বিক্রিয়ার ক্ষেত্রে কোনটি সত্য? [JU'25-26]",
    options: ["বিক্রিয়াটি তাপ শোষণ করবে", "বিক্রিয়কের গড় স্থিতি শক্তি উৎপাদের গড় স্থিতি শক্তি থেকে কম হবে", "বিক্রিয়কের গড় স্থিতি শক্তি উৎপাদের গড় স্থিতি শক্তি থেকে বেশি হবে", "বিক্রিয়কের গড় স্থিতি শক্তি উৎপাদের গড় স্থিতি শক্তির সমান হবে"],
    correct_answer: "বিক্রিয়কের গড় স্থিতি শক্তি উৎপাদের গড় স্থিতি শক্তি থেকে বেশি হবে",
    explanation: "$\\mathrm{Sol^{n}}$: তাপোৎপাদী বিক্রিয়ার ক্ষেত্রে, $\\mathrm{E_{reactant} > E_{product}}$",
    time_limit: 60
  },
  {
    id: 87294,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "১৯৪. রাসায়নিক বিক্রিয়ায় কখন $\\mathrm{\\Delta H = \\Delta E}$ হয়? [JnU'25-26]",
    options: ["তাপমাত্রা স্থির হলে", "আয়তন স্থির হলে", "চাপ স্থির হলে", "মোলসংখ্যা সমান হলে"],
    correct_answer: "মোলসংখ্যা সমান হলে",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87295,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "১৯৫. কোন এসিডের সাথে $\\mathrm{NaOH}$-এর বিক্রিয়ার প্রশমন তাপ সবচেয়ে বেশি? [JnU'25-26]",
    options: ["$\\mathrm{HNO_{3}}$", "$\\mathrm{HF}$", "$\\mathrm{HCl}$", "$\\mathrm{H_{2}SO_{4}}$"],
    correct_answer: "$\\mathrm{HF}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87296,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "১৯৬. $25^{\\circ}\\mathrm{C}$ তাপমাত্রায় $2$ মোল $\\mathrm{H_{2}}$ এবং $1$ মোল $\\mathrm{O_{2}}$ বিক্রিয়া করলে $54\\mathrm{kJ}$ শক্তি নির্গত হয়। প্রতি মোলে $\\Delta\\mathrm{H}$ কত? [JnU'25-26]",
    options: ["$-27\\mathrm{kJ/mol}$", "$-54\\mathrm{kJ/mol}$", "$-108\\mathrm{kJ/mol}$", "$-13.5\\mathrm{kJ/mol}$"],
    correct_answer: "$-27\\mathrm{kJ/mol}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{2H_{2} + O_{2} \\rightarrow 2H_{2}O}$\n$2\\mathrm{mole}$ বিক্রিয়া করলে, নির্গত শক্তি $= 54\\mathrm{kJ}$\n$\\therefore 1\\mathrm{mole}$ বিক্রিয়া করলে, $\\Delta\\mathrm{H} = -27\\mathrm{kJ}$",
    time_limit: 60
  },
  {
    id: 87297,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "১৯৭. $\\mathrm{H_{2}}$ এর দহন তাপ ও $\\mathrm{H_{2}O}$ এর গঠন তাপ সম্পর্কে কোনটি সঠিক? [RU'25-26]",
    options: ["দহন তাপ > 0, গঠন তাপ < 0", "সমান মান কিন্তু বিপরীত চিহ্ন", "সমান মান ও একই চিহ্ন", "গঠন তাপের পরম মান কম"],
    correct_answer: "সমান মান ও একই চিহ্ন",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87298,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "১৯৮. $\\mathrm{A + BC \\rightleftharpoons C + 20kJ}$ একটি উভমুখী রাসায়নিক বিক্রিয়া যা সম্মুখমুখীভাবে সংঘটিত করতে হলে নূন্যতম $80\\mathrm{kJ}$ শক্তির প্রয়োজন হয়। বিক্রিয়াটি বিপরীতমুখীভাবে সংঘটিত করতে হলে, নূন্যতম কত শক্তি সরাতে/প্রদান করতে হবে? [SUST'25-26]",
    options: ["$20\\mathrm{kJ}$ শক্তি সরাতে হবে", "$20\\mathrm{kJ}$ শক্তি প্রদান করতে হবে", "$100\\mathrm{kJ}$ শক্তি প্রদান করতে হবে", "$60\\mathrm{kJ}$ শক্তি প্রদান করতে হবে"],
    correct_answer: "$100\\mathrm{kJ}$ শক্তি প্রদান করতে হবে",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87299,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "১৯৯. কোনটি তাপহারী বিক্রিয়া? [HSTU'25-26; CU'22-23]",
    options: ["$\\mathrm{C + O_{2} = CO_{2}}$", "$\\mathrm{N_{2} + O_{2} = 2NO}$", "$\\mathrm{2H_{2} + O_{2} = 2H_{2}O}$", "$\\mathrm{CH_{4} + 2O_{2} = CO_{2} + 2H_{2}O}$"],
    correct_answer: "$\\mathrm{N_{2} + O_{2} = 2NO}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87200,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "২০০. তাপোৎপাদী বিক্রিয়ায় $\\mathrm{H_{P} - H_{r}}$ এর মান- [JU'17-18]",
    options: ["ঋণাত্মক", "ধনাত্মক", "শূন্য (0)", "জটিল সংখ্যা"],
    correct_answer: "ঋণাত্মক",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87201,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "২০১. তাপোৎপাদী পরিবর্তনে উৎপাদের মধ্যে- [JU'16-17]",
    options: ["অভ্যন্তরীণ শক্তি বাড়ে", "অভ্যন্তরীণ শক্তি কমে", "অভ্যন্তরীণ শক্তির পরিবর্তন হয় না", "কোনটিই নয়"],
    correct_answer: "অভ্যন্তরীণ শক্তি কমে",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87202,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "২০২. কোন বিক্রিয়াটি তাপোৎপাদী? [RU'22-23]",
    options: ["$\\mathrm{H_{2}O(l) \\rightarrow H_{2}O(g)}$", "$\\mathrm{H_{2}O(g) \\rightarrow H_{2}O(l)}$", "$\\mathrm{H_{2}O(s) \\rightarrow H_{2}O(l)}$", "$\\mathrm{H_{2}O(s) \\rightarrow H_{2}O(g)}$"],
    correct_answer: "$\\mathrm{H_{2}O(g) \\rightarrow H_{2}O(l)}$",
    explanation: "$\\mathrm{Sol^{n}}$: ঘনীভবন একটি তাপোৎপাদী প্রক্রিয়া।",
    time_limit: 60
  },
  {
    id: 87203,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "২০৩. নিম্নের বিক্রিয়াগুলো হতে কার্বনের প্রমাণ দহন তাপ নির্ণয় কর। [DU'20-21, 15-16]\n(i) $\\mathrm{C(s) + \\frac{1}{2}O_{2}(g) \\rightarrow CO(g); \\Delta H^{\\circ} = -111.0\\mathrm{kJmol^{-1}}}$\n(ii) $\\mathrm{CO(g) + \\frac{1}{2}O_{2}(g) \\rightarrow CO_{2}(g); \\Delta H^{\\circ} = -283.0\\mathrm{kJmol^{-1}}}$",
    options: ["$-173.0\\mathrm{kJmol^{-1}}$", "$-394.0\\mathrm{kJmol^{-1}}$", "$373.0\\mathrm{kJmol^{-1}}$", "$394.0\\mathrm{kJmol^{-1}}$"],
    correct_answer: "$-394.0\\mathrm{kJmol^{-1}}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87204,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "২০৪. স্থির চাপে, অভ্যন্তরীণ শক্তির পরিবর্তন ($\\Delta\\mathrm{U}$) এবং সিস্টেমের এনথালপির পরিবর্তন ($\\Delta\\mathrm{H}$) এর পার্থক্য নির্দেশ করে- [RU'20-21]",
    options: ["তাপ", "কাজ", "এনট্রপি", "গিবস ফ্রি এনার্জি"],
    correct_answer: "কাজ",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{\\Delta H = \\Delta U + P\\Delta V}$",
    time_limit: 60
  },
  {
    id: 87205,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "২০৫. $\\mathrm{TiO_{2}(s)}$ এবং $\\mathrm{CO(g)}$ এর 'প্রমাণ গঠন এনথালপি' যথাক্রমে $-940\\mathrm{kJmol^{-1}}$ এবং $-110\\mathrm{kJmol^{-1}}$। $\\mathrm{TiO_{2}(s) + 2C(s) \\rightarrow Ti(s) + 2CO(g)}$, এই বিক্রিয়ার প্রমাণ এনথালপির পরিবর্তন কত? [DU'18-19]",
    options: ["$-830\\mathrm{kJmol^{-1}}$", "$-720\\mathrm{kJmol^{-1}}$", "$+720\\mathrm{kJmol^{-1}}$", "$+830\\mathrm{kJmol^{-1}}$"],
    correct_answer: "$+720\\mathrm{kJmol^{-1}}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{\\Delta H = 2H_{f(CO)} + H_{f(Ti)} - H_{f(TiO_{2})} - 2H_{f(C)}}$\n$= 2 \\times (-110) + 0 - 940 - 0$\n$= +720\\mathrm{kJmol^{-1}}$\nনোট: বইয়ের সমাধানে $-(-940)$ ধরলে $+720$ আসে; মুদ্রিত ধাপে চিহ্ন-বিভ্রান্তি আছে — যাচাই প্রয়োজন।",
    time_limit: 60
  },
  {
    id: 87206,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "২০৬. কোন বিক্রিয়ার \"বিক্রিয়া এনথালপি\" \"আদর্শ গঠন এনথালপি\" নির্দেশ করে? [DU'18-19]",
    options: ["$\\mathrm{CO(g) + \\frac{1}{2}O_{2}(g) \\rightarrow CO_{2}(g)}$", "$\\mathrm{H_{2}(g) + \\frac{1}{2}O_{2}(g) \\rightarrow H_{2}O(g)}$", "$\\mathrm{NO(g) + \\frac{1}{2}O_{2}(g) \\rightarrow NO_{2}(g)}$", "$\\mathrm{K(s) + Mn(s) + 2O_{2}(g) \\rightarrow KMnO_{4}(s)}$"],
    correct_answer: "$\\mathrm{H_{2}(g) + \\frac{1}{2}O_{2}(g) \\rightarrow H_{2}O(g)}$",
    explanation: "$\\mathrm{Sol^{n}}$: সরাসরি পরমাণু অণু হয়ে গঠিত।",
    time_limit: 60
  },
  {
    id: 87207,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "২০৭. $\\mathrm{CS_{2}, C}$ এবং $\\mathrm{S}$ এর দহন তাপ যথাক্রমে $-1109$, $-394$ এবং $-297\\mathrm{kJmol^{-1}}$ হলে $\\mathrm{CS_{2}}$ এর প্রমাণ সংগঠন তাপ কত? [JU'18-19]",
    options: ["$-121\\mathrm{kJ}$", "$+121\\mathrm{kJ}$", "$-298\\mathrm{kJ}$", "$+298\\mathrm{kJ}$"],
    correct_answer: "$+121\\mathrm{kJ}$",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{C + 2S \\rightarrow CS_{2}} \\therefore \\Delta H_{f(CS_{2})}^{\\circ}$\n$= -(-1109) + (-394) - 2 \\times 297\\mathrm{kJ} = +121\\mathrm{kJ}$",
    time_limit: 60
  },
  {
    id: 87208,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "২০৮. এক কাপ গরম চায়ে একটি ঠাণ্ডা চামচ ডুবানো হলে কি ঘটে? [RU'17-18]",
    options: ["চামচের অন্তস্থঃ শক্তি বৃদ্ধি পায়", "চামচের অন্তস্থঃ শক্তি একই থাকে", "চা এর অন্তস্থঃ শক্তি বৃদ্ধি পায়", "চা এর অন্তস্থঃ শক্তি একই থাকে"],
    correct_answer: "চামচের অন্তস্থঃ শক্তি বৃদ্ধি পায়",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87209,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "২০৯. স্বতঃস্ফূর্ত প্রক্রিয়ার ক্ষেত্রে অনুকূল পরিস্থিতি কোনটি? [KU'17-18]",
    options: ["$\\Delta\\mathrm{H}$ ঋণাত্মক, $\\Delta\\mathrm{S}$ ধনাত্মক", "$\\Delta\\mathrm{H}$ ধনাত্মক, $\\Delta\\mathrm{S}$ ধনাত্মক", "$\\Delta\\mathrm{H}$ ঋণাত্মক, $\\Delta\\mathrm{S}$ ঋণাত্মক", "$\\Delta\\mathrm{H}$ ধনাত্মক, $\\Delta\\mathrm{S}$ ঋণাত্মক"],
    correct_answer: "$\\Delta\\mathrm{H}$ ঋণাত্মক, $\\Delta\\mathrm{S}$ ধনাত্মক",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{\\Delta G = \\Delta H - T\\Delta S}$ ; $\\Delta\\mathrm{H}\\ (-)\\mathrm{ve}$, $\\Delta\\mathrm{S}\\ (+)\\mathrm{ve}$ হলে $\\Delta\\mathrm{G} (-)\\mathrm{ve}$, তাই স্বতঃস্ফূর্ত।",
    time_limit: 60
  },
  {
    id: 87210,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "২১০. এনথালপি ও বিক্রিয়া তাপের মধ্যে সম্পর্ক- [JU'16-17]",
    options: ["$\\mathrm{\\Delta H = \\Delta U + P\\Delta}$", "$\\mathrm{\\Delta H = \\Delta q}$", "উভয়টি", "কোনটিই নয়"],
    correct_answer: "$\\mathrm{\\Delta H = \\Delta q}$",
    explanation: "$\\mathrm{Sol^{n}}$:\n$\\mathrm{C(s) + \\frac{1}{2}O_{2}(g) \\rightarrow CO(g); \\Delta H^{\\circ} = -111.0\\mathrm{Kjmol^{-1}}}$\n$\\mathrm{CO(g) + \\frac{1}{2}O_{2}(g) \\rightarrow CO_{2}(g); \\Delta H^{\\circ} = -283.0\\mathrm{Kjmol^{-1}}}$\nযোগ করে, $\\mathrm{C(s) + O_{2}(g) \\rightarrow CO_{2}(g); \\Delta H^{\\circ} = -394.0\\mathrm{Kjmol^{-1}}}$",
    time_limit: 60
  },
  {
    id: 87211,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "২১১. কোন বিক্রিয়ায় এন্ট্রপির মান বাড়ে? [DU'14-15]",
    options: ["$\\mathrm{2C(s) + O_{2}(g) \\rightarrow 2CO(g)}$", "$\\mathrm{2H_{2}S(g) + SO_{2}(g) \\rightarrow 3S(s) + 2H_{2}O(g)}$", "$\\mathrm{4Fe(s) + 3O_{2}(g) \\rightarrow 2Fe_{2}O_{3}(s)}$", "$\\mathrm{CO(g) + 2H_{2}(g) \\rightarrow CH_{3}OH(l)}$"],
    correct_answer: "$\\mathrm{2C(s) + O_{2}(g) \\rightarrow 2CO(g)}$",
    explanation: "$\\mathrm{Sol^{n}}$: স্বতঃস্ফূর্ত বিক্রিয়ায় এন্ট্রপির মান বাড়ে।",
    time_limit: 60
  },
  {
    id: 87212,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "২১২. $\\mathrm{CH_{3}CO_{2}H(aq) + NaOH(aq) \\rightarrow CH_{3}COONa(aq) + H_{2}O(l)}$ এর $\\Delta\\mathrm{H^{\\circ}}$ হলো- [JU'14-15]",
    options: ["$-50.4\\mathrm{Kj}$", "$-55.6\\mathrm{Kj}$", "$-55.2\\mathrm{Kj}$", "$-68.6\\mathrm{Kj}$"],
    correct_answer: "$-55.6\\mathrm{Kj}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87213,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "২১৩. নিচের কোন এসিড-ক্ষার যুগলের প্রশমন তাপ সর্বাধিক? [RU'14-15]",
    options: ["$\\mathrm{HCl - KOH}$", "$\\mathrm{HF - NaOH}$", "$\\mathrm{CH_{3}COOH - NaOH}$", "$\\mathrm{HF - NH_{4}OH}$"],
    correct_answer: "$\\mathrm{HF - NaOH}$",
    explanation: "",
    time_limit: 60
  },
  {
    id: 87214,
    topic: "তাপ রসায়ন",
    topicId: "chem1_change_t12",
    question_text: "২১৪. $\\mathrm{100mL\\ 0.25M\\ H_{2}SO_{4}}$ দ্রবণকে $\\mathrm{100mL\\ 0.40M\\ NaOH}$ দ্রবণের সাথে মিশ্রিত করলে কত $\\mathrm{kJ}$ তাপ উৎপন্ন হবে? [প্রশমন বিক্রিয়ার $\\Delta\\mathrm{H = -57\\mathrm{kJmol^{-1}}}$] [SUST'19-20]",
    options: ["57.0", "2.28", "2.85", "1.42", "3.71"],
    correct_answer: "1.42",
    explanation: "$\\mathrm{Sol^{n}}$: $\\mathrm{H_{2}SO_{4} + 2NaOH \\rightarrow Na_{2}SO_{4} + 2H_{2}O}$\n$\\frac{n(H_{2}SO_{4})}{1} = \\frac{0.1 \\times 0.25}{1} = 0.025$ এবং $\\frac{n(NaOH)}{2}$\n$= \\frac{0.1 \\times 0.4}{2} = 0.02 \\therefore \\mathrm{NaOH}$ লিমিটিং বিক্রিয়ক।\n$2\\mathrm{mol\\ NaOH}$ এর জন্য উৎপন্ন তাপ $= 57\\mathrm{kJ}$\n$\\therefore (0.1 \\times 0.4)\\mathrm{mol\\ NaOH}$ এর জন্য উৎপন্ন তাপ $= \\frac{57 \\times 0.04}{2}\\mathrm{kJ} = 1.14\\mathrm{kJ}$\n[নোট: সঠিক উত্তর $1.14$ যা, option (d) এর সবচেয়ে কাছাকাছি]",
    time_limit: 60
  },
];
