function toggleSignup(){
    document.getElementById("login-toggle").style.backgroundColor="#fff";
     document.getElementById("login-toggle").style.color="#222";
     document.getElementById("signup-toggle").style.backgroundColor="#57b846";
     document.getElementById("signup-toggle").style.color="#fff";
     document.getElementById("login-form").style.display="none";
     document.getElementById("signup-form").style.display="block";
 }
 
 function toggleLogin(){
     document.getElementById("login-toggle").style.backgroundColor="#57B846";
     document.getElementById("login-toggle").style.color="#fff";
     document.getElementById("signup-toggle").style.backgroundColor="#fff";
     document.getElementById("signup-toggle").style.color="#222";
     document.getElementById("signup-form").style.display="none";
     document.getElementById("login-form").style.display="block";
 }

 const firebaseConfig = {
    apiKey: "AIzaSyBbdXlLKxXF4_j94XhnnjHJZKW0x5Hvv80",
    authDomain: "ohayo-d5749.firebaseapp.com",
    projectId: "ohayo-d5749",
    storageBucket: "ohayo-d5749.appspot.com",
    messagingSenderId: "409271309698",
    appId: "1:409271309698:web:95e19acfeacd23659aeb9b",
    measurementId: "G-K8S225CMZ3"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);