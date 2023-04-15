// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr46mJtmy36IIneMUYNpJ6NSKrf0o9AOg",
  authDomain: "formsworld-cbd33.firebaseapp.com",
  projectId: "formsworld-cbd33",
  storageBucket: "formsworld-cbd33.appspot.com",
  messagingSenderId: "958088867508",
  appId: "1:958088867508:web:4a307d0b5ce81cbf4cf1e1",
  measurementId: "G-TJT5FMEJT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);