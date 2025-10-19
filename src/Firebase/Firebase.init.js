// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA83OCd2M_XBz0o3NqbiYRl56VW9HMj0sw",
  authDomain: "dreagon-news-react-f4be0.firebaseapp.com",
  projectId: "dreagon-news-react-f4be0",
  storageBucket: "dreagon-news-react-f4be0.firebasestorage.app",
  messagingSenderId: "972521467925",
  appId: "1:972521467925:web:298657d6350630e9cf5e1c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);
