
var emailIsValid = false;
var passwordIsValid = false;

function validate() {

    var email = document.getElementById("login-name").value;
    var password = document.getElementById("login-pass").value;
    if (isEmpty(password)) {
        displaySpan('isPassword', 'Favor digitar senha!');
        passwordIsValid = false;
    }
    else {
        passwordIsValid = true;
    }
    checkEmail(email);


    if (!passwordIsValid || !emailIsValid) {
        return false;
    }
    else {
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                displaySpan('isPassword', 'Senha incorreta!');
                return false;
            }
            if (errorCode === 'auth/user-not-found') {
                displaySpan('isEmail', 'Usuário inválido');
                return false;
            }
            if (errorCode !== 'auth/user-not-found' && errorCode !== 'auth/wrong-password') {
                window.location = "mural.html"; // Redirecting to other page.
            }
        });
    }
}

function checkEmail(mail) {
    if (isEmpty(mail)) {
        displaySpan('isEmail', 'Favor digitar email!');
        emailIsValid = false;
    }
    else {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(mail)) {
            emailIsValid = true;
        }
        else {
            displaySpan('isEmail', 'Email inválido!');
            emailIsValid = false;
        }
    }
}

function isEmpty(value) {
    if (value == null || value == "")
        return true;
    else
        return false;
}

function displaySpan(word, message) {
    var elId = "";

    if (word === "isPassword") {
        elId = "passwordValid";
    }
    else if (word === "isEmail") {
        elId = "emailValid";
    }

    if (elId !== "" && message !== "") {
        document.getElementById(elId).textContent = message;
        document.getElementById(elId).style.display = "block";
    }
}

