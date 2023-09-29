import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIW4Nl2p7Zq7VIt_0jOFx9FN-OJV1q4bg",
  authDomain: "digitallibrary-a154a.firebaseapp.com",
  projectId: "digitallibrary-a154a",
  storageBucket: "digitallibrary-a154a.appspot.com",
  messagingSenderId: "996324027292",
  appId: "1:996324027292:web:577828fa39ab7cfe38b659",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
