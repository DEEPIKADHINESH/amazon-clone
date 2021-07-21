import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBN-Pp0zl9JtIOrvs6aTibhdipXmegGgTQ",
    authDomain: "clone-a5e37.firebaseapp.com",
    projectId: "clone-a5e37",
    storageBucket: "clone-a5e37.appspot.com",
    messagingSenderId: "163272295205",
    appId: "1:163272295205:web:8982929627ebbb843d50cc",
    measurementId: "G-7JHJSCCT2R"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};