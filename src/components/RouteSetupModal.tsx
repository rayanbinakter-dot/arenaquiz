import { useState, useMemo } from 'react';
import { Stethoscope, GraduationCap, Building2, Atom, Check, ArrowRight, X, Info } from 'lucide-react';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { LearningRoute, StudentGameProfile, MedicalBatch, TimerStatus } from '../types/gamification';
import { syllabus } from '../data/syllabus';
import { MEDICAL_BATCH_OPTIONS, isValidGpa, SECOND_TIMER_DEDUCTION } from '../utils/medicalMerit';

// প্রতিটি pathway-র সিলেবাস/বিষয় নির্দিষ্ট — শিক্ষার্থীকে বিষয় বাছতে হয় না।
const FIXED_ROUTE_SUBJECTS: Record<LearningRoute, string[]> = {
  medical: ['bio1', 'bio2', 'chem1', 'chem2', 'phys1', 'phys2', 'english', 'gk'],
  academic: ['bio1', 'bio2', 'phys1', 'phys2', 'chem1', 'chem2', 'math1', 'math2'],
  varsity: syllabus.filter(s => !s.id.startsWith('gst_') && !s.id.startsWith('dcu_')).map(s => s.id),
  engineering: ['math1', 'math2', 'phys1', 'phys2', 'chem1', 'chem2'],
};

const FIXED_SUBJECT_LABELS: Record<LearningRoute, string[]> = {
  medical: ['জীববিজ্ঞান', 'রসায়ন', 'পদার্থবিজ্ঞান', 'ইংরেজি', 'সাধারণ জ্ঞান'],
  academic: ['জীববিজ্ঞান', 'পদার্থবিজ্ঞান', 'রসায়ন', 'উচ্চতর গণিত'],
  varsity: ['পদার্থবিজ্ঞান', 'রসায়ন', 'গণিত', 'জীববিজ্ঞান', 'ইংরেজি', 'ICT'],
  engineering: ['গণিত', 'পদার্থবিজ্ঞান', 'রসায়ন'],
};

interface RouteOption {
  id: LearningRoute;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  bg: string;
  border: string;
  defaultExam: string;
}

const ROUTE_OPTIONS: RouteOption[] = [
  {
    id: 'academic',
    title: 'একাডেমিক প্রস্তুতি',
    subtitle: 'SSC / HSC / বোর্ডভিত্তিক অনুশীলন',
    description: 'পাঠ্যবইয়ের অধ্যায়ভিত্তিক মৌলিক ও উচ্চতর দক্ষতা অনুশীলন।',
    icon: GraduationCap,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/30',
    defaultExam: 'HSC'
  },
  {
    id: 'medical',
    title: 'মেডিকেল ভর্তি',
    subtitle: 'মেডিকেল ভর্তি প্রস্তুতি',
    description: 'জীববিজ্ঞান, রসায়ন ও পদার্থবিজ্ঞানের দ্রুত ও নিখুঁত উত্তর অনুশীলন।',
    icon: Stethoscope,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    defaultExam: 'MBBS Admission'
  },
  {
    id: 'varsity',
    title: 'বিশ্ববিদ্যালয় ভর্তি',
    subtitle: 'GST / বিশ্ববিদ্যালয় ইউনিট প্রস্তুতি',
    description: 'ঢাকা বিশ্ববিদ্যালয় ও গুচ্ছ বিশ্ববিদ্যালয় ইউনিটের সমন্বিত অনুশীলন।',
    icon: Building2,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    defaultExam: 'Varsity A Unit'
  },
  {
    id: 'engineering',
    title: 'ইঞ্জিনিয়ারিং ভর্তি',
    subtitle: 'গণিত, পদার্থবিজ্ঞান ও রসায়নভিত্তিক প্রস্তুতি',
    description: 'গাণিতিক সমস্যার নিখুঁত ধারণা ও সমস্যা সমাধানের দক্ষতা।',
    icon: Atom,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    defaultExam: 'BUET Admission'
  }
];

interface RouteSetupModalProps {
  user?: any;
  gameProfile?: Partial<StudentGameProfile> | null;
  currentRoute?: LearningRoute;
  currentTargetExam?: string;
  onSave?: (route: LearningRoute, targetExam: string) => void;
  onSaveProfile?: (profile: StudentGameProfile) => void;
  onClose?: () => void;
  isDismissable?: boolean;
}

export default function RouteSetupModal({ 
  user, 
  gameProfile, 
  currentRoute, 
  currentTargetExam, 
  onSave, 
  onSaveProfile, 
  onClose, 
  isDismissable = false 
}: RouteSetupModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedRoute, setSelectedRoute] = useState<LearningRoute>(currentRoute || gameProfile?.selectedRoute || 'academic');
  const [targetExam, setTargetExam] = useState<string>(currentTargetExam || gameProfile?.targetExam || 'HSC 2026');
  const [saving, setSaving] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // --- Medical-specific academic info ---
  const [medicalBatch, setMedicalBatch] = useState<MedicalBatch>(gameProfile?.medicalBatch || 'hsc2026');
  const [timerStatus, setTimerStatus] = useState<TimerStatus>(gameProfile?.timerStatus || 'first');
  const [sscGpaText, setSscGpaText] = useState<string>(gameProfile?.sscGpa != null ? String(gameProfile.sscGpa) : '');
  const [hscGpaText, setHscGpaText] = useState<string>(gameProfile?.hscGpa != null ? String(gameProfile.hscGpa) : '');

  const batchInfo = useMemo(() => MEDICAL_BATCH_OPTIONS.find(b => b.id === medicalBatch)!, [medicalBatch]);
  const needsHscGpa = selectedRoute === 'medical' && batchInfo.needsHscGpa;

  const handleSelectRoute = (routeId: LearningRoute) => {
    setSelectedRoute(routeId);
    const option = ROUTE_OPTIONS.find(r => r.id === routeId);
    if (option && !targetExam) {
      setTargetExam(option.defaultExam);
    }
  };

  const handleSelectBatch = (batchId: MedicalBatch) => {
    setMedicalBatch(batchId);
    const info = MEDICAL_BATCH_OPTIONS.find(b => b.id === batchId)!;
    // HSC 2025 বাছলে স্বয়ংক্রিয়ভাবে ২য় টাইমার
    setTimerStatus(info.defaultTimer);
    setValidationError(null);
  };

  const validateMedical = (): boolean => {
    const ssc = parseFloat(sscGpaText);
    if (!sscGpaText.trim() || !isValidGpa(ssc)) {
      setValidationError('SSC GPA আবশ্যক (১.০০ – ৫.০০ এর মধ্যে লিখুন)।');
      return false;
    }
    if (needsHscGpa) {
      const hsc = parseFloat(hscGpaText);
      if (!hscGpaText.trim() || !isValidGpa(hsc)) {
        setValidationError('HSC 2025 ব্যাচের জন্য HSC GPA আবশ্যক (১.০০ – ৫.০০)।');
        return false;
      }
    }
    setValidationError(null);
    return true;
  };

  const handleSave = async () => {
    if (selectedRoute === 'medical' && !validateMedical()) return;

    if (onSave) {
      onSave(selectedRoute, targetExam.trim() || 'সাধারণ প্রস্তুতি');
      return;
    }
    if (!user?.uid) return;
    setSaving(true);

    const fixedSubjects = FIXED_ROUTE_SUBJECTS[selectedRoute];

    const medicalFields = selectedRoute === 'medical' ? {
      medicalBatch,
      timerStatus,
      sscGpa: parseFloat(sscGpaText) || null,
      hscGpa: needsHscGpa ? (parseFloat(hscGpaText) || null) : (hscGpaText.trim() ? parseFloat(hscGpaText) || null : null),
    } : {};

    // মেডিকেল হলে লক্ষ্য (targetExam) সবসময় নির্বাচিত ব্যাচ থেকে আসবে — আলাদা ইনপুটের সাথে অমিল হবে না
    const resolvedTargetExam = selectedRoute === 'medical'
      ? batchInfo.label
      : (targetExam.trim() || 'সাধারণ প্রস্তুতি');

    const updatedProfile: StudentGameProfile = {
      userId: user.uid,
      selectedRoute,
      targetExam: resolvedTargetExam,
      selectedSubjects: fixedSubjects,
      ...medicalFields,
      skillDivisions: gameProfile?.skillDivisions || { [selectedRoute]: 'foundation' },
      progressPoints: gameProfile?.progressPoints || 0,
      helpPoints: gameProfile?.helpPoints || 0,
      currentStreak: gameProfile?.currentStreak || 1,
      lastMeaningfulStudyDate: gameProfile?.lastMeaningfulStudyDate || new Date().toISOString().split('T')[0],
      competitionOptIn: gameProfile?.competitionOptIn ?? false,
      updatedAt: new Date().toISOString()
    };

    try {
      if (db) {
        const docRef = doc(db, 'users', user.uid, 'gameProfile', 'main');
        await setDoc(docRef, {
          ...updatedProfile,
          updatedAt: serverTimestamp()
        }, { merge: true });

        // Also sync user document selectedRoute for top-level accessibility
        const userRef = doc(db, 'users', user.uid);
        await setDoc(userRef, {
          selectedRoute,
          targetExam: updatedProfile.targetExam,
          ...(selectedRoute === 'medical' ? { hscBatch: batchInfo.label } : {})
        }, { merge: true });
      }

      onSaveProfile?.(updatedProfile);
      onClose?.();
    } catch (err) {
      console.error('Error saving game profile route:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {isDismissable && onClose && (
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* HEADER */}
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            আপনার প্রস্তুতির পথ বেছে নিন
          </h2>
          <p className="text-xs md:text-sm text-slate-400 max-w-lg mx-auto">
            আপনার লক্ষ্য অনুযায়ী অনুশীলন, রুটিন ও অগ্রগতি সাজানো হবে।
          </p>
        </div>

        {/* STEP 1: ROUTE SELECTION */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ROUTE_OPTIONS.map((opt) => {
                const Icon = opt.icon;
                const isSelected = selectedRoute === opt.id;

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectRoute(opt.id)}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                      isSelected
                        ? `${opt.bg} ${opt.border} ring-2 ring-indigo-500 shadow-lg shadow-indigo-500/10`
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-3 rounded-xl ${opt.bg} ${opt.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        {isSelected && (
                          <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-white mb-1">
                        {opt.title}
                      </h3>
                      <p className={`text-xs font-semibold mb-2 ${opt.color}`}>
                        {opt.subtitle}
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {opt.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold px-6 py-3 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/20 text-sm"
              >
                <span>পরবর্তী ধাপ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: TARGET / BATCH INFO */}
        {step === 2 && (
          <div className="space-y-6">

            {/* ============ MEDICAL: BATCH + GPA + TIMER ============ */}
            {selectedRoute === 'medical' ? (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    আপনার HSC ব্যাচ বেছে নিন
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {MEDICAL_BATCH_OPTIONS.map((b) => {
                      const isChecked = medicalBatch === b.id;
                      return (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => handleSelectBatch(b.id)}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            isChecked 
                              ? 'bg-emerald-500/10 border-emerald-500/40 text-white ring-1 ring-emerald-500/50' 
                              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-extrabold">{b.label}</span>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              isChecked ? 'bg-emerald-600 border-emerald-500 text-white' : 'border-slate-700'
                            }`}>
                              {isChecked && <Check className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                          <span className={`text-[11px] font-semibold ${isChecked ? 'text-emerald-300' : 'text-slate-500'}`}>
                            {b.sub}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* GPA inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      SSC GPA <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="1"
                      max="5"
                      value={sscGpaText}
                      onChange={(e) => { setSscGpaText(e.target.value); setValidationError(null); }}
                      placeholder="যেমন: 5.00"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <p className="text-[10px] text-slate-500 mt-1">মেরিট স্কোরে: SSC GPA × ১৫ (সর্বোচ্চ ৭৫)</p>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      HSC GPA {needsHscGpa ? <span className="text-rose-400">*</span> : <span className="text-slate-500">(ঐচ্ছিক)</span>}
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="1"
                      max="5"
                      value={hscGpaText}
                      onChange={(e) => { setHscGpaText(e.target.value); setValidationError(null); }}
                      placeholder={needsHscGpa ? 'যেমন: 5.00' : 'HSC হয়নি — ফাঁকা রাখুন'}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <p className="text-[10px] text-slate-500 mt-1">মেরিট স্কোরে: HSC GPA × ২৫ (সর্বোচ্চ ১২৫)</p>
                  </div>
                </div>

                {/* Timer status */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    টাইমার স্ট্যাটাস
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setTimerStatus('first')}
                      className={`p-3 rounded-xl border text-center text-xs font-extrabold transition-all cursor-pointer ${
                        timerStatus === 'first'
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 ring-1 ring-emerald-500/50'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      ১ম টাইমার
                      <span className="block text-[10px] font-semibold text-slate-500 mt-0.5">কোনো মার্ক কাটা হবে না</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTimerStatus('second')}
                      className={`p-3 rounded-xl border text-center text-xs font-extrabold transition-all cursor-pointer ${
                        timerStatus === 'second'
                          ? 'bg-amber-500/10 border-amber-500/40 text-amber-300 ring-1 ring-amber-500/50'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      ২য় টাইমার
                      <span className="block text-[10px] font-semibold text-slate-500 mt-0.5">মোট স্কোর থেকে −{SECOND_TIMER_DEDUCTION} মার্ক</span>
                    </button>
                  </div>
                </div>

                {/* Fixed syllabus notice */}
                <div className="flex items-start gap-2.5 bg-slate-950/60 border border-slate-800 rounded-xl p-3.5">
                  <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    <span className="text-slate-200 font-bold">মেডিকেল ভর্তির সিলেবাস নির্দিষ্ট:</span>{' '}
                    {FIXED_SUBJECT_LABELS.medical.join(' • ')} — DGHS মানবণ্টন অনুযায়ী (জীববিজ্ঞান ৩০, রসায়ন ২৫, পদার্থবিজ্ঞান ২০, ইংরেজি ১৫, সাধারণ জ্ঞান ১০)। আলাদা করে বিষয় বাছাইয়ের প্রয়োজন নেই।
                  </p>
                </div>
              </>
            ) : (
              /* ============ OTHER ROUTES: TARGET EXAM ONLY ============ */
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    টার্গেট পরীক্ষা বা ব্যাচ (ঐচ্ছিক)
                  </label>
                  <input
                    type="text"
                    value={targetExam}
                    onChange={(e) => setTargetExam(e.target.value)}
                    placeholder="যেমন: HSC 2026 বা BUET 2026"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="flex items-start gap-2.5 bg-slate-950/60 border border-slate-800 rounded-xl p-3.5">
                  <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    <span className="text-slate-200 font-bold">এই পথের সিলেবাস নির্দিষ্ট:</span>{' '}
                    {FIXED_SUBJECT_LABELS[selectedRoute].join(' • ')} — সব বিষয় স্বয়ংক্রিয়ভাবে যুক্ত থাকবে।
                  </p>
                </div>
              </>
            )}

            {validationError && (
              <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3 text-xs font-bold text-rose-300">
                {validationError}
              </div>
            )}

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-bold text-slate-400 hover:text-white px-4 py-2 rounded-xl transition-colors"
              >
                পেছনে যান
              </button>

              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-6 py-3 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/20 text-sm disabled:opacity-50"
              >
                <span>{saving ? 'সংরক্ষণ হচ্ছে...' : 'প্রস্তুতি শুরু করুন'}</span>
                <Check className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
