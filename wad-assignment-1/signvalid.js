function validateForm() {
    var email = document.getElementById('floatingInput').value;
    var password = document.getElementById('floatingPassword').value;

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
        alert("Email address must be filled out");
        return false;
    } else if (!emailRegex.test(email)) {
        alert("Invalid email address");
        return false;
    }

    // Password validation
    if (password.trim() === "") {
        alert("Password must be filled out");
        return false;
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    return true;
}