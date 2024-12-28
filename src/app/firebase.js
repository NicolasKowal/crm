// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBK8GD9euNw4s_egxhVjV4_11FzvzvhulI",
	authDomain: "panaderia-2cfe9.firebaseapp.com",
	projectId: "panaderia-2cfe9",
	storageBucket: "panaderia-2cfe9.firebasestorage.app",
	messagingSenderId: "346128625928",
	appId: "1:346128625928:web:3924313f87cf845c173cbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
