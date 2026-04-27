const firebaseConfig = {
  apiKey: "AIzaSyChWz8PoMxQtgeCWpu0o7lYgZkxqN6oD1s",
  authDomain: "zabtube-e81d6.firebaseapp.com",
  projectId: "zabtube-e81d6",
  storageBucket: "zabtube-e81d6.appspot.com",
  messagingSenderId: "1088501191721",
  appId: "1:1088501191721:web:9f3050ab5c8c6a50a63838",
  measurementId: "G-G4L1HW8X9Z"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;

      alert("Login Successful: " + user.email);

      // login ke baad home page
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log("Login Error:", error);
      alert("Login Failed");
    });
}

function logoutUser() {
  firebase.auth()
    .signOut()
    .then(() => {
      alert("Logout Successful");

      // logout ke baad page refresh
      location.reload();
    })
    .catch((error) => {
      console.log("Logout Error:", error);
    });
}
