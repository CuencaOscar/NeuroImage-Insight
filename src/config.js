// Runtime configuration. Values come from EXPO_PUBLIC_* variables (see .env.example),
// which Expo inlines at build time. Never commit a real .env file.
const required = (name, value) => {
  if (!value) {
    console.warn(`Missing ${name}. Copy .env.example to .env and fill it in.`);
  }
  return value ?? "";
};

export const firebaseConfig = {
  apiKey: required("EXPO_PUBLIC_FIREBASE_API_KEY", process.env.EXPO_PUBLIC_FIREBASE_API_KEY),
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: required("EXPO_PUBLIC_FIREBASE_PROJECT_ID", process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID),
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

// Public download URL prefix for files stored in Firebase Storage.
export const storageBaseUrl = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/`;

// Classification endpoint of the backend API.
export const apiUrl = required("EXPO_PUBLIC_API_URL", process.env.EXPO_PUBLIC_API_URL);
