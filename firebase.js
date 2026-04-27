// Firebase SDK imports (CDN script index.html me add karna hoga)

function signInWithGoogle() {
  alert("Real Google Login setup starting...");

  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;

      alert("Login Successful: " + user.email);
      console.log("User:", user);
    })
    .catch((error) => {
      console.log(error);
      alert("Login Failed");
    });
}

function logoutUser() {
  firebase.auth().signOut()
    .then(() => {
      alert("Logout Successful");
    })
    .catch((error) => {
      console.log(error);
    });
}
