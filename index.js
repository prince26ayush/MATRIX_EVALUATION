const firebaseConfig = {
    apiKey: "AIzaSyA795DgEHZpV1aDf3_BQED6AlNXg9aJW_E",
    authDomain: "matrix-d4ca9.firebaseapp.com",
    databaseURL: "https://matrix-d4ca9-default-rtdb.firebaseio.com",
    projectId: "matrix-d4ca9",
    storageBucket: "matrix-d4ca9.appspot.com",
    messagingSenderId: "590150249921",
    appId: "1:590150249921:web:20d735f8d5eaf550231340",
    measurementId: "G-MQSQEG7YBB"
  };


// initalize firebase
firebase.initializeApp(firebaseConfig);


//reference your database
var matrixDB = firebase.database().ref('matrix')
document.getElementById('matrix').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
}
 const getElementVal = (id) =>{
        return document.getElementById(id).value;
 }