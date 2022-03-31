var firebase = require('firebase');
var firebaseui = require('firebaseui'); 
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    // List of OAuth providers supported.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  // Other config options...
});
ui.start('#firebaseui-auth-container', uiConfig);

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
