// Your web app's Firebase configuration
// Your web app's Firebase configuration
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
     
function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name is = "+Room_names);
      row  = "<div class='room_name' id="+Room_names+ " onclick = 'redirectToRoomName(this.id)' ># " +Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
      window.location = "index.html";
}