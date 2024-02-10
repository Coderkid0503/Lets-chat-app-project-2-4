// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDT-2ChEXWlZjgemYKSFEpOAKTkmhrIHao",
    authDomain: "lets-chat-app-f2756.firebaseapp.com",
    databaseURL: "https://lets-chat-app-f2756-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-f2756",
    storageBucket: "lets-chat-app-f2756.appspot.com",
    messagingSenderId: "226096292011",
    appId: "1:226096292011:web:a0b3da827111b76568d7ee"
  };
//initialize firedatabase
firebase.initializeApp(firebaseConfig)  

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firbase.database().ref("/").child(user_name).update((
      purpose: "ADD MY NAME"
    ))
}