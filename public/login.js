var firebaseConfig = {
  apiKey: "AIzaSyA4f65a7OJao3naT00CT2tKsLdFGD1P_ig",
  authDomain: "url-shortner-2c163.firebaseapp.com",
  databaseURL: "https://url-shortner-2c163.firebaseio.com",
  projectId: "url-shortner-2c163",
  storageBucket: "url-shortner-2c163.appspot.com",
  messagingSenderId: "989201405789",
  appId: "1:989201405789:web:fb9063fdb5069f4b41fab4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "./shortenlink.html",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: "",
  // Privacy policy url.
  privacyPolicyUrl: "<your-privacy-policy-url>",
};
// The start method will wait until the DOM is loaded.
ui.start("#firebaseui-auth-container", uiConfig);
