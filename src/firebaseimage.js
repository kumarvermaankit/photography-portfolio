// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7IuvmLrdcoX6hV6F5qV00btCq2bJkHTk",
  authDomain: "ashishportfolio-b781e.firebaseapp.com",
  projectId: "ashishportfolio-b781e",
  storageBucket: "ashishportfolio-b781e.appspot.com",
  messagingSenderId: "827223437633",
  appId: "1:827223437633:web:ae9843dc2de378501331c0",
  measurementId: "G-NTLNKDYH81"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
console.log(storage)
export {
    firebaseConfig,
    app,
    analytics,
    storage
}