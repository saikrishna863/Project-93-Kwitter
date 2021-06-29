
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDgRF635AVMmiW4OJ2ha6VPVTRS57beU3k",
      authDomain: "shanmukha-kwitter-project-1.firebaseapp.com",
      databaseURL: "https://shanmukha-kwitter-project-1-default-rtdb.firebaseio.com",
      projectId: "shanmukha-kwitter-project-1",
      storageBucket: "shanmukha-kwitter-project-1.appspot.com",
      messagingSenderId: "424622385547",
      appId: "1:424622385547:web:5c65fb0dc0c38eec09278e",
      measurementId: "G-9C1WMW0QVM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
