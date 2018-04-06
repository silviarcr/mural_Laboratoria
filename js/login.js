

function validate() {
    var email = document.getElementById("login-name").value;
    var password = document.getElementById("login-pass").value;
    if (isEmpty(password))
        displaySpan('isPassword', 'Favor digitar senha!');

    checkEmail(email);

    if (email == "formget@formget.com" && password == "formget#123") {
        alert("Login successfully");
        window.location = "mural.html"; // Redirecting to other page.
        return false;
    }
}

function checkEmail(mail) {
    if (isEmpty(mail))
        displaySpan('isEmail', 'Favor digitar email!');
    else {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!reg.test(mail))
            displaySpan('isEmail', 'Email inválido!');
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

