document.getElementById("registerButton").addEventListener("click", function () {
    const email = document.getElementById("emailAddress").value;
    const password = document.getElementById("inputPassword").value;

    const userRegistration = {
        email: email,
        password: password,
        display: function() {
            return this.email + " " + this.password;
        }
    };

    console.log("User Registered:", userRegistration.display());
});