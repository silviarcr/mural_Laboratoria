
var xmlhttp = new XMLHttpRequest();

var url = "https://mural-da-laboratoria.firebaseio.com/users ";
var users;
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        users = JSON.parse(this.responseText);
        console.log("onreadystatechange5");
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
console.log("onreadystatechange6");
var form = document.querySelector("form");

// function validate() {
//     console.log("onreadystatechange7");
    
//     var email = document.getElementById("login-name").value;
//     var password = document.getElementById("login-pass").value;

//     var emailErrorMsg = document.getElementById("emailValid");
//     var passwordErrorMsg = document.getElementById("passwordValid");

//     if (email.length == 0) {
//         console.log("onreadystatechange8");
//         emailErrorMsg.textContent = "Favor digitar email";
//         emailErrorMsg.style.display = "block";
//         return false;
//     }

//     var isLoginOK = false;
//     // var keys = Object.keys(users);
//     //const auth = firebase.auth();
//     //const promise = auth.signInWithEmailAndPassword(email, password);
//     //
//     //console.log(auth);
//     //console.log(promise);
//     //
//     firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         if (errorCode === 'auth/wrong-password') {
//             passwordErrorMsg.textContent = "Senha incorreta";
//             passwordErrorMsg.style.display = "block";
//             console.log("onreadystatechange9");
//          }
//         if (errorCode === 'auth/user-not-found') {
//             emailErrorMsg.textContent = "Email incorreto";
//             emailErrorMsg.style.display = "block";
//             console.log("onreadystatechange10");
//         }
//         if (errorCode !== 'auth/user-not-found' && errorCode !== 'auth/wrong-password') {
//             isLoginOK = true;
//             console.log("onreadystatechange11");
//             // window.location = "mural.html"; // Redirecting to other page.
//         }
//     });
//     //
//     if (!isLoginOK) {
//         return false;
//     }
// }

