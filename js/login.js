

function validate() {
    var email = document.getElementById("login-name").value;
    var password = document.getElementById("login-pass").value;

    if (email == "formget@formget.com" && password == "formget#123") {
        alert("Login successfully");
        window.location = "mural.html"; // Redirecting to other page.
        return false;
    }

    if (isEmpty(password)) {
        document.getElementById("passwordValid").textContent = "Favor digitar senha";
        document.getElementById("passwordValid").style.display = "block";
        return false;
    }

    if (isEmpty(email)) {
        document.getElementById("emailValid").textContent = "Favor digitar email";
        document.getElementById("emailValid").style.display = "block";
        return false;
    }
 
}

function isEmpty(value) {
    if (value == null || value == "") return true;
}
