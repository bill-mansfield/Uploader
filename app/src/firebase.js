import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAiVrVm5TdMgmCp-EJK_bl0ecEvSuV9T_g",
  authDomain: "uploader-6ceec.firebaseapp.com",
  databaseURL: "https://uploader-6ceec.firebaseio.com",
  projectId: "uploader-6ceec",
  storageBucket: "gs://uploader-6ceec.appspot.com",
  messagingSenderId: "981124315752",
  appId: "1:981124315752:web:4f846458cbeb2bab2799dd",
  measurementId: "G-39HKMVQ5MZ"
};
firebase.initializeApp(firebaseConfig);

export default firebase;