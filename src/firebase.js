import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBi145pKw0FnzbTkTbvVNu9A2H_3-ai_g4",
  authDomain: "e-learning-961b5.firebaseapp.com",
  projectId: "e-learning-961b5",
  storageBucket: "e-learning-961b5.appspot.com",
  messagingSenderId: "88572620787",
  appId: "1:88572620787:web:2840baf20b73050baa2c86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; // Export the auth object

export default app;