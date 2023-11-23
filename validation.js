document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Reset custom error messages
        clearValidationMessages();

        // Check email format
        const emailInput = document.getElementById("emailAddress");
        if (!isValidEmail(emailInput.value)) {
            isValid = false;
            alert("Please enter a valid email address.");
        }

        // Check password
        const passwordInput = document.getElementById("inputPassword");
        if (passwordInput.value === "") {
            isValid = false;
            alert("Password is required.");
        }
        
        // Prevent form submission
        if (!isValid) {
            event.preventDefault(); 
        }
    });

    // Validate email format
    function isValidEmail(email) {
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailPattern.test(email);
    }

    // Clear validation messages
    function clearValidationMessages() {
        const emailInput = document.getElementById("emailAddress");
        const passwordInput = document.getElementById("inputPassword");
        emailInput.setCustomValidity("");
        passwordInput.setCustomValidity("");
    }
});
