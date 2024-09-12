function togglePassword() {
    var form = document.getElementById("loginForm"); 
    const passwordField = document.getElementById("password");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
}

function validateForm(event) {  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    var validRegex = /^[a-z0-9.]+@[a-zA-Z0-9]+(?:\.[a-z0-9]+)*$/;
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Username and password cannot be empty.";
        event.preventDefault(); 
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        event.preventDefault();  
        return false;
    }

    if (!username.match(validRegex)) {
        errorMessage.textContent = "Invalid email address!";
        event.preventDefault();  
        return false;
    }

    alert(`Login Successfully - ${username}`);
    return true;
}

document.getElementById("password").addEventListener("input", function() {
    const passwd = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    if (passwd.length >= 6) {
        errorMessage.textContent = "";
    }
});
