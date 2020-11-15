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
const db = firebase.firestore();
var namesused = [];
function generatelink() {
  db.collection("STORED-URLS")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        var data = { name: doc.id };
        namesused.push(data);
      });
      findused(namesused, namesused.length);
    });
}
function findused(data, lenght) {
  var status = false;
  var url = document.getElementById("input1").value;
  var name = document.getElementById("input2").value;
  for (i = 0; i < lenght; i++) {
    if (data[i].name == name) {
      status = true;
    } else {
      if (status == true) {
      } else {
        status = false;
      }
    }
  }
  if (status == true) {
    alert(name + " NAME IS TAKEN BY OTHERS..");
  } else {
    db.collection("STORED-URLS")
      .doc(name)
      .set({
        REDIRECT: url,
      })
      .then(function () {
        var sucuss = document.getElementById("shorturl");
        sucuss.innerHTML =
          "Shortened URL : https://bit-dk.web.app/" +
          name +
          '<button onclick="copy()"><img  src="https://tic-tac-toe-anywhere.000webhostapp.com/clipboard-multimedia-crouton-picture-frame-cut-copy-and-paste.jpg"  width="50px"  height="50px"/</button>';
        document.getElementById("input1").innerHTML = "";
        document.getElementById("input2").innerHTML = "";
        alert("Shortened URL : https://bit-dk.web.app/" + name);
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }
}
function copy() {
  document.execCommand("copy");
}
