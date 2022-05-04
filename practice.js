var firebaseConfig = {
    apiKey: "AIzaSyD723HxBmgk7GNxM6RtIrF-mnDtx4DJTyw",
    authDomain: "kwitter-practice-db441.firebaseapp.com",
    databaseURL: "https://kwitter-practice-db441-default-rtdb.firebaseio.com",
    projectId: "kwitter-practice-db441",
    storageBucket: "kwitter-practice-db441.appspot.com",
    messagingSenderId: "246247682203",
    appId: "1:246247682203:web:d5d2c2e07382b5bff3563e"
};

firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}