
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCUCxOj3kErLshhPkFc_u1HPFG_0VpvTIo",
  authDomain: "finance-management-22613.firebaseapp.com",
  projectId: "finance-management-22613",
  storageBucket: "finance-management-22613.firebasestorage.app",
  messagingSenderId: "186469715777",
  appId: "1:186469715777:web:9c40a5aa04b344f4665bc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
