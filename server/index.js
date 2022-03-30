import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  auth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

var loginFormGLogin = document.getElementById("loginFormGLogin");
var signupFormGLogin = document.getElementById("signupFormGLogin");
// TODO: Add SDKs for Firebase products that you want to use
//   https://firebase.google.com/docs/web/setup#available-libraries

//   Your web app's Firebase configuration
//   For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbdXlLKxXF4_j94XhnnjHJZKW0x5Hvv80",
  authDomain: "ohayo-d5749.firebaseapp.com",
  projectId: "ohayo-d5749",
  storageBucket: "ohayo-d5749.appspot.com",
  messagingSenderId: "409271309698",
  appId: "1:409271309698:web:95e19acfeacd23659aeb9b",
  measurementId: "G-K8S225CMZ3",
};

//   Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

function loginFormSignInWithGoogle() {
  loginFormGLogin.addEventListener("click", (event) => {
    signInWithRedirect(auth, provider);

    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  });
}

function toggleSignup() {
  document.getElementById("login-toggle").style.backgroundColor = "#fff";
  document.getElementById("login-toggle").style.color = "#222";
  document.getElementById("signup-toggle").style.backgroundColor = "#57b846";
  document.getElementById("signup-toggle").style.color = "#fff";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
}

function toggleLogin() {
  document.getElementById("login-toggle").style.backgroundColor = "#57B846";
  document.getElementById("login-toggle").style.color = "#fff";
  document.getElementById("signup-toggle").style.backgroundColor = "#fff";
  document.getElementById("signup-toggle").style.color = "#222";
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}
