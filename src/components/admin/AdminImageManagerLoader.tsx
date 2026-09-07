import { useState, useEffect } from 'react';
import { Loader2, Cloud, Check, Settings2 } from 'lucide-react';
import ImageRequiredTab from './ImageRequiredTab';
import { fetchQuestions } from '../../lib/questionBankFirestore';
import { QuestionItem } from '../../types/questionBank';
import { getCloudinaryConfig, setCloudinaryConfig, isCloudinaryConfigured } from '../../utils/cloudinaryUpload';

// ============================================================
// Image Manager (sidebar) loader:
//  • Loads ALL Firestore questions so newly-imported questions
//    appear in the scan REALTIME (previously only seed data)
//  • Cloudinary settings card (free image hosting, no card)
// ============================================================

export default function AdminImageManagerLoader({ userEmail }: { userEmail: string }) {
  const [questions, setQuestions] = useState<QuestionItem[] | null>(null);
  const [showCloudinarySettings, setShowCloudinarySettings] = useState(false);
  const [cloudName, setCloudName] = useState('');
  const [preset, setPreset] = useState('');
  const [savedFlash, setSavedFlash] = useState(false);
  const configured = isCloudinaryConfigured();

  useEffect(() => {
    const cfg = getCloudinaryConfig();
    setCloudName(cfg.cloudName);
    setPreset(cfg.uploadPreset);
  }, []);

  const loadQuestions = async () => {
    try {
      const data = await fetchQuestions();
      setQuestions(data || []);
    } catch (e) {
      console.warn('Image manager questions load failed:', e);
      setQuestions([]);
    }
  };

  useEffect(() => { loadQuestions(); }, []);

  const handleSaveCloudinary = () => {
    setCloudinaryConfig(cloudName, preset);
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2000);
    setShowCloudinarySettings(false);
  };

  if (questions === null) {
    return (
      <div className="flex items-center justify-center py-20 text-slate-400 gap-3">
        <Loader2 className="w-6 h-6 animate-spin" /> সব প্রশ্ন লোড হচ্ছে (সিড + Firestore)...
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Cloudinary settings */}
      <div className={`border rounded-2xl p-4 ${configured ? 'bg-emerald-500/5 border-emerald-500/30' : 'bg-amber-500/5 border-amber-500/30'}`}>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <Cloud className={`w-4 h-4 ${configured ? 'text-emerald-400' : 'text-amber-400'}`} />
            <div>
              <span className="text-xs font-extrabold text-white">
                Cloudinary চিত্র হোস্টিং {configured ? '— ✓ সংযুক্ত' : '— সেটআপ করুন (ফ্রি, কার্ড লাগে না)'}
              </span>
              <p className="text-[10px] text-slate-400 mt-0.5">
                {configured
                  ? 'আপলোড করা ছবি Cloudinary CDN-এ যাবে (২৫GB ফ্রি)। সেট না থাকলে কমপ্রেসড অবস্থায় Firestore-এ যায়।'
                  : 'cloudinary.com-এ ফ্রি সাইনআপ → Settings → Upload presets → Unsigned preset বানান → নিচে বসান।'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {savedFlash && <span className="text-[10px] font-extrabold text-emerald-400 flex items-center gap-1"><Check className="w-3 h-3" /> সংরক্ষিত</span>}
            <button
              onClick={() => setShowCloudinarySettings(!showCloudinarySettings)}
              className="text-[10px] font-extrabold bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Settings2 className="w-3 h-3" /> {configured ? 'পরিবর্তন' : 'সেটআপ'}
            </button>
          </div>
        </div>

        {showCloudinarySettings && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 pt-3 border-t border-slate-800">
            <input
              value={cloudName}
              onChange={e => setCloudName(e.target.value)}
              placeholder="Cloud name (যেমন: dqz1abcde)"
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            <input
              value={preset}
              onChange={e => setPreset(e.target.value)}
              placeholder="Unsigned preset name"
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={handleSaveCloudinary}
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              সংরক্ষণ করুন
            </button>
          </div>
        )}
      </div>

      {/* The actual image manager — now with LIVE Firestore questions included */}
      <ImageRequiredTab
        questions={questions}
        userEmail={userEmail}
        onRefreshQuestions={loadQuestions}
      />
    </div>
  );
}
