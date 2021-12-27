const firebase = require('firebase/app')
require('firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDWZNl07Otu1IsZkHo8GyMYBOzqu43gnHo",
  authDomain: "bujeti-inc.firebaseapp.com",
  projectId: "bujeti-inc",
  storageBucket: "bujeti-inc.appspot.com",
  messagingSenderId: "23364893092",
  appId: "1:23364893092:web:88d500e0a492008ba4a931",
  measurementId: "G-JLYB6H89N9"
}

if(firebase.apps?.length < 1){
  firebase.initializeApp(firebaseConfig);
}


// console.log(firebase.database())
const db = firebase.firestore();

export default db;