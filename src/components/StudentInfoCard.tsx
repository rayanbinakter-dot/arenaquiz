import React, { useState, useEffect } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase';
import {
  User, School, GraduationCap, Phone, Pencil, Check, X, Loader2, BadgeCheck
} from 'lucide-react';

// =====================================================
// Student Info Card — নাম, কলেজ, HSC ব্যাচ, মোবাইল নম্বর
// Editable inline; saved to users/{uid} in Firestore
// =====================================================

interface StudentInfoCardProps {
  user: any;
  userData?: any;
  onUpdated?: (fields: Record<string, any>) => void;
}

const HSC_BATCH_OPTIONS = ['HSC 2025', 'HSC 2026', 'HSC 2027', 'HSC 2028'];

const isValidBdMobile = (v: string): boolean => {
  const cleaned = v.replace(/[\s-]/g, '');
  return /^(?:\+8801|01)[3-9]\d{8}$/.test(cleaned);
};

export default function StudentInfoCard({ user, userData, onUpdated }: StudentInfoCardProps) {
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [savedFlash, setSavedFlash] = useState(false);

  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [hscBatch, setHscBatch] = useState('');
  const [mobile, setMobile] = useState('');

  // Sync from userData when it arrives / changes
  useEffect(() => {
    setName(userData?.name || user?.displayName || '');
    setCollege(userData?.college || '');
    setHscBatch(userData?.hscBatch || '');
    setMobile(userData?.mobile || '');
  }, [userData?.name, userData?.college, userData?.hscBatch, userData?.mobile, user?.displayName]);

  const infoComplete = Boolean(
    (userData?.name || user?.displayName) && userData?.college && userData?.hscBatch && userData?.mobile
  );

  const handleSave = async () => {
    setError('');

    if (!name.trim()) {
      setError('নাম লিখুন।');
      return;
    }
    if (mobile.trim() && !isValidBdMobile(mobile.trim())) {
      setError('সঠিক মোবাইল নম্বর দিন (যেমন: 01712345678)।');
      return;
    }

    setSaving(true);
    try {
      const fields = {
        name: name.trim(),
        college: college.trim(),
        hscBatch: hscBatch,
        mobile: mobile.trim().replace(/[\s-]/g, '')
      };

      if (db && user?.uid) {
        await setDoc(doc(db, 'users', user.uid), fields, { merge: true });
      }
      // Keep Firebase Auth displayName in sync
      if (auth.currentUser && name.trim() !== auth.currentUser.displayName) {
        try {
          await updateProfile(auth.currentUser, { displayName: name.trim() });
        } catch { /* non-fatal */ }
      }

      onUpdated?.(fields);
      setEditing(false);
      setSavedFlash(true);
      setTimeout(() => setSavedFlash(false), 2500);
    } catch (e: any) {
      console.error('Error saving student info:', e);
      setError('সংরক্ষণ ব্যর্থ হয়েছে। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setName(userData?.name || user?.displayName || '');
    setCollege(userData?.college || '');
    setHscBatch(userData?.hscBatch || '');
    setMobile(userData?.mobile || '');
    setError('');
    setEditing(false);
  };

  const InfoRow = ({ icon: Icon, label, value, colorClass }: { icon: any; label: string; value: string; colorClass: string }) => (
    <div className="flex items-center gap-3 bg-slate-950/60 border border-slate-800 rounded-2xl px-4 py-3.5">
      <div className={`p-2 rounded-xl ${colorClass} shrink-0`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] text-slate-500 font-bold uppercase">{label}</div>
        <div className={`text-sm font-extrabold truncate ${value ? 'text-white' : 'text-slate-500 italic font-medium'}`}>
          {value || 'যোগ করা হয়নি'}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <User className="w-5 h-5 text-cyan-400" />
            শিক্ষার্থীর তথ্য
          </h2>
          <p className="text-[11px] text-slate-400 mt-0.5">
            আপনার পরিচিতি ও যোগাযোগের তথ্য — লিডারবোর্ড ও সার্টিফিকেটে ব্যবহৃত হবে
          </p>
        </div>

        <div className="flex items-center gap-2">
          {savedFlash && (
            <span className="text-[11px] font-extrabold text-emerald-400 flex items-center gap-1 animate-in fade-in">
              <BadgeCheck className="w-4 h-4" /> সংরক্ষিত!
            </span>
          )}
          {!editing && (
            <button
              onClick={() => setEditing(true)}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-extrabold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-700"
            >
              <Pencil className="w-3.5 h-3.5" />
              {infoComplete ? 'সম্পাদনা করুন' : 'তথ্য পূরণ করুন'}
            </button>
          )}
        </div>
      </div>

      {!infoComplete && !editing && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-3 text-[11px] font-bold text-amber-300">
          ⚠️ আপনার প্রোফাইল অসম্পূর্ণ — কলেজ, HSC ব্যাচ ও মোবাইল নম্বর যোগ করুন।
        </div>
      )}

      {!editing ? (
        /* ---------- VIEW MODE ---------- */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <InfoRow icon={User} label="নাম" value={userData?.name || user?.displayName || ''} colorClass="bg-cyan-500/10 text-cyan-400" />
          <InfoRow icon={School} label="কলেজ" value={userData?.college || ''} colorClass="bg-indigo-500/10 text-indigo-400" />
          <InfoRow icon={GraduationCap} label="HSC ব্যাচ" value={userData?.hscBatch || ''} colorClass="bg-emerald-500/10 text-emerald-400" />
          <InfoRow icon={Phone} label="মোবাইল নম্বর" value={userData?.mobile || ''} colorClass="bg-amber-500/10 text-amber-400" />
        </div>
      ) : (
        /* ---------- EDIT MODE ---------- */
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">
                নাম <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="আপনার পূর্ণ নাম"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">কলেজ</label>
              <input
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="যেমন: ঢাকা কলেজ"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">HSC ব্যাচ</label>
              <div className="flex flex-wrap gap-2">
                {HSC_BATCH_OPTIONS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setHscBatch(hscBatch === b ? '' : b)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-colors cursor-pointer ${
                      hscBatch === b
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-600'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">মোবাইল নম্বর</label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="01712345678"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
              <p className="text-[10px] text-slate-500 mt-1">বাংলাদেশি নম্বর (01XXXXXXXXX)</p>
            </div>
          </div>

          {error && (
            <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3 text-xs font-bold text-rose-300">
              {error}
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-800">
            <button
              onClick={handleCancel}
              disabled={saving}
              className="text-xs font-bold text-slate-400 hover:text-white px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              বাতিল
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-xs font-extrabold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-lg shadow-emerald-600/20"
            >
              {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
              সংরক্ষণ করুন
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
