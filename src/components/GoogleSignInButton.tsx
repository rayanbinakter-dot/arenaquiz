import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { Loader2 } from 'lucide-react';

interface GoogleSignInButtonProps {
  onSuccess: () => void;
  onError: (message: string) => void;
}

// Google-verified real account sign-in.
// Google itself verifies the Gmail — no fake emails can enter.
export default function GoogleSignInButton({ onSuccess, onError }: GoogleSignInButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      const cred = await signInWithPopup(auth, provider);
      const gUser = cred.user;

      // Ensure a Firestore user doc exists (first-time Google users)
      try {
        const userRef = doc(db, 'users', gUser.uid);
        const snap = await getDoc(userRef);
        if (!snap.exists()) {
          await setDoc(userRef, {
            uid: gUser.uid,
            email: gUser.email,
            name: gUser.displayName || 'Un-named User',
            role: 'user',
            coins: 100,
            gems: 0,
            energy: 5,
            isPro: false,
            currentStreak: 0,
            lastActiveDate: new Date().toISOString().split('T')[0],
            lastEnergyUpdate: Date.now(),
            purchasedItems: ['avatar_default'],
            equippedAvatar: gUser.photoURL || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
            equippedBorder: 'none',
            authProvider: 'google',
            createdAt: serverTimestamp()
          });
        }
      } catch (docErr) {
        // App.tsx onAuthStateChanged also auto-creates the doc — safe to continue
        console.warn('User doc ensure failed (will be created on auth listener):', docErr);
      }

      onSuccess();
    } catch (err: any) {
      const code = err?.code || '';
      if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
        // user dismissed — no error message needed
      } else if (code === 'auth/popup-blocked') {
        // popup blocked: fall back to full-page redirect
        try {
          await signInWithRedirect(auth, provider);
          return;
        } catch {
          onError('পপ-আপ ব্লক করা আছে। ব্রাউজারে পপ-আপ অনুমতি দিয়ে আবার চেষ্টা করুন।');
        }
      } else if (code === 'auth/network-request-failed') {
        onError('ইন্টারনেট সংযোগ বিচ্ছিন্ন। নেটওয়ার্ক যাচাই করে আবার চেষ্টা করুন।');
      } else if (code === 'auth/unauthorized-domain') {
        onError('এই ডোমেইন থেকে Google সাইন-ইন অনুমোদিত নয়। Firebase Console → Authentication → Settings → Authorized domains-এ ডোমেইনটি যোগ করুন।');
      } else if (code === 'auth/account-exists-with-different-credential') {
        onError('এই ইমেইল দিয়ে অন্য পদ্ধতিতে অ্যাকাউন্ট খোলা আছে। ইমেইল-পাসওয়ার্ড দিয়ে লগইন করুন।');
      } else {
        onError(`Google সাইন-ইন ব্যর্থ: ${err?.message || 'অজানা ত্রুটি'}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      disabled={loading}
      className="w-full bg-white hover:bg-slate-100 disabled:opacity-60 text-slate-900 font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-3 cursor-pointer shadow-lg"
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {/* Google G logo */}
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          <span>Google দিয়ে সাইন ইন করুন</span>
        </>
      )}
    </button>
  );
}
