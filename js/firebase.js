import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCP8DGLQMXPUsv_p2zQ-NLkziwPQe1XkgU",
  authDomain: "fixmywork-d83ba.firebaseapp.com",
  projectId: "fixmywork-d83ba",
  storageBucket: "fixmywork-d83ba.firebasestorage.app",
  messagingSenderId: "207313302232",
  appId: "1:207313302232:web:73055348982ad84abeddad",
  measurementId: "G-11FQMLCBQY"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {
  app,
  auth,
  db,
  onAuthStateChanged
};
