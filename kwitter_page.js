//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDKgLScFUg2z9Lw-anz-pUfyA3B0r1m54Q",
    authDomain: "project-94-69dc1.firebaseapp.com",
    databaseURL: "https://project-94-69dc1-default-rtdb.firebaseio.com",
    projectId: "project-94-69dc1",
    storageBucket: "project-94-69dc1.appspot.com",
    messagingSenderId: "622458341122",
    appId: "1:622458341122:web:068662ef60c0da4d73e41b"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");

   function send()
   {
    msg = document.getElementById("msg").value; 
    firebase.database().ref(user_name).push({
         name : user_name,
         message: msg,
         like: 0
    });
   }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); 
    if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

//End code
    } });  }); }
getData();

function logout()
{
    localStorage.removeItem(user_name);
    localStorage.removeItem(room_name);
    window.location = "index.html";
}