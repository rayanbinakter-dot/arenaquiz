// ============================================================
// Cloudinary Unsigned Upload (FREE plan, no card required)
// Setup (one-time, 2 mins):
//   1. cloudinary.com → free signup (no card)
//   2. Dashboard → Settings → Upload → "Upload presets"
//      → Add upload preset → Signing Mode: **Unsigned** → Save
//   3. Put cloud name + preset name below (or in localStorage
//      keys qm_cloudinary_cloud / qm_cloudinary_preset from
//      the admin UI).
// Free tier: 25GB storage + 25GB bandwidth/month — অনেক বেশি
// যথেষ্ট MCQ ডায়াগ্রামের জন্য।
// ============================================================

const DEFAULT_CLOUD_NAME = '';   // যেমন: 'dqz1abcde'
const DEFAULT_UPLOAD_PRESET = ''; // যেমন: 'quiz_master_unsigned'

export function getCloudinaryConfig(): { cloudName: string; uploadPreset: string } {
  let cloudName = DEFAULT_CLOUD_NAME;
  let uploadPreset = DEFAULT_UPLOAD_PRESET;
  try {
    cloudName = localStorage.getItem('qm_cloudinary_cloud') || cloudName;
    uploadPreset = localStorage.getItem('qm_cloudinary_preset') || uploadPreset;
  } catch { /* SSR/no-localStorage */ }
  return { cloudName, uploadPreset };
}

export function setCloudinaryConfig(cloudName: string, uploadPreset: string) {
  try {
    localStorage.setItem('qm_cloudinary_cloud', cloudName.trim());
    localStorage.setItem('qm_cloudinary_preset', uploadPreset.trim());
  } catch { /* ignore */ }
}

export function isCloudinaryConfigured(): boolean {
  const { cloudName, uploadPreset } = getCloudinaryConfig();
  return Boolean(cloudName && uploadPreset);
}

/**
 * Upload a file to Cloudinary via unsigned preset.
 * Returns the secure URL. Throws on failure.
 */
export async function uploadToCloudinary(
  file: File,
  folder: string,
  onProgress?: (pct: number) => void
): Promise<string> {
  const { cloudName, uploadPreset } = getCloudinaryConfig();
  if (!cloudName || !uploadPreset) {
    throw new Error('CLOUDINARY_NOT_CONFIGURED');
  }

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const form = new FormData();
  form.append('file', file);
  form.append('upload_preset', uploadPreset);
  if (folder) form.append('folder', folder);

  return new Promise<string>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) {
        onProgress(Math.round((e.loaded / e.total) * 100));
      }
    };
    xhr.onload = () => {
      try {
        const res = JSON.parse(xhr.responseText);
        if (xhr.status >= 200 && xhr.status < 300 && res.secure_url) {
          resolve(res.secure_url as string);
        } else {
          reject(new Error(res?.error?.message || `Cloudinary HTTP ${xhr.status}`));
        }
      } catch (e) {
        reject(e);
      }
    };
    xhr.onerror = () => reject(new Error('Cloudinary network error'));
    xhr.send(form);
  });
}
