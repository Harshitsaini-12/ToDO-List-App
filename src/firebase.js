
  import firebase from 'firebase';

  const firebaseApp =firebase.initializeApp({
        apiKey: "AIzaSyCdcHQ7Wl96MyhuAA5pxtuizwqMlOu5KKQ",
        authDomain: "todolist-harshit.firebaseapp.com",
        projectId: "todolist-harshit",
        storageBucket: "todolist-harshit.appspot.com",
        messagingSenderId: "1053898694509",
        appId: "1:1053898694509:web:fba843a2df10c5aa820464",
        measurementId: "G-K367HH4DGE"
      });
 

      const db=firebaseApp.firestore();
     

      export default db;