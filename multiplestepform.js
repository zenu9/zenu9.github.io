var currentTab = 0;
showTab(currentTab);

// This function will display the specified tab
function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";

    // Update the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");

    // Exit the function if any field is invalid
    if (n == 1 && !validateForm()) return false;

    // Hide the current tab
    x[currentTab].style.display = "none";
    
    currentTab = currentTab + n;

    if (currentTab >= x.length) {
        alert("You have successfully registered your VIP seat!");
        document.getElementById("regForm").submit();
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");

    // Check every input field in the current tab
    for (i = 0; i < y.length; i++) {
        // If a field is empty add an "invalid" class to the field
        if (y[i].value == "") {
            y[i].className += " invalid";
            valid = false;
        }
    }
    return valid;
}