const firebase = require('firebase/app')
require('firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCwBFMtW4LMroizIkVWQElf939rMFbYDCc",
  authDomain: "catlog-coming-soon.firebaseapp.com",
  projectId: "catlog-coming-soon",
  appId: "1:1060267592743:web:eb234b9d8b772014289202",
  measurementId: "G-QHB2NMD8FT",
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

export default db;