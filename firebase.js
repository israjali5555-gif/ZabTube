const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "zabtube-e81d6.firebaseapp.com",
  projectId: "zabtube-e81d6",
  storageBucket: "zabtube-e81d6.appspot.com",
  messagingSenderId: "1088501191721",
  appId: "1:1088501191721:web:9f3050ab5c8c6a50a63838",
  measurementId: "G-G4L1HW8X9Z"
};

firebase.initializeApp(firebaseConfig);

function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;

      alert("Login Successful: " + user.email);
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
      alert("Login Failed");
    });
}

function logoutUser() {
  firebase.auth()
    .signOut()
    .then(() => {
      alert("Logout Successful");
    });
}
