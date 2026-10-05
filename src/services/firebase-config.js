import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBGlHY3ic9bkP4BW44cJ9bghEBVDxeUIgk",
	authDomain: "my-web-page-b01c7.firebaseapp.com",
	projectId: "my-web-page-b01c7",
	storageBucket: "my-web-page-b01c7.appspot.com",
	messagingSenderId: "760325923658",
	appId: "1:760325923658:web:faf60f0c91d9c265d497b3",
	measurementId: "G-QPTT3JS3N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
