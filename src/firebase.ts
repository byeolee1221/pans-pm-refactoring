import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlMMs35LIAKuSjiY0NWxPebl19YazmtLg",
  authDomain: "pans-pm.firebaseapp.com",
  projectId: "pans-pm",
  storageBucket: "pans-pm.appspot.com",
  messagingSenderId: "1095874793112",
  appId: "1:1095874793112:web:5f355a7967f50f6eaecaed"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);