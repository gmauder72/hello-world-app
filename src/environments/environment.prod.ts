// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD11lU3oiDjfLKbr2DXCQVqAUc5P8hrh8Q",
  authDomain: "speedrun-app-ce1b6.firebaseapp.com",
  databaseURL: "https://speedrun-app-ce1b6-default-rtdb.firebaseio.com",
  projectId: "speedrun-app-ce1b6",
  storageBucket: "speedrun-app-ce1b6.appspot.com",
  messagingSenderId: "99214238608",
  appId: "1:99214238608:web:033e38c9f8d12748150915",
  measurementId: "G-5CK319BK0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);