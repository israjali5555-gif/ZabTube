import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Aapka Firebase Config
const firebaseConfig = {
  apiKey: "AiZaSyChWz8PoMxQtgeCWpu0o7lYgZkxqN6oD1s",
  authDomain: "zabtube-e81d6.firebaseapp.com",
  projectId: "zabtube-e81d6",
  storageBucket: "zabtube-e81d6.firebasestorage.app",
  messagingSenderId: "1088501191721",
  appId: "1:1088501191721:web:9f3050ab5c8c6a50a63838",
  measurementId: "G-G4L1MW8X9Z"
};

// Firebase initialize karein
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Asli Google Login Function
export function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("User logged in:", result.user);
      alert("Mubarak ho! Login safal raha.");
      window.location.reload(); 
    })
    .catch((error) => {
      console.error("Login Error:", error.message);
      alert("Login nahi ho paya: " + error.message);
    });
}
