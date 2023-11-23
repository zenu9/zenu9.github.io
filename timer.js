document.getElementById("startButton").addEventListener("click", function () {
    // Retrieve the value entered in an input field with the ID "minutes" and convert it to an integer
    var minutes = parseInt(document.getElementById("minutes").value);
    var seconds = minutes * 60;

    var timer = document.getElementById("timer");

    // Set up an interval that runs a function every 1000 milliseconds
    var interval = setInterval(function () {
        if (seconds <= 0) {
            clearInterval(interval);
            timer.textContent = "Your order should be ready!";
        } else {
            // Calculate minutes and seconds remaining, update the timer display, and decrement the seconds
            var minutesRemaining = Math.floor(seconds / 60);
            var secondsRemaining = seconds % 60;
            timer.textContent = minutesRemaining + "m " + secondsRemaining + "s";
            seconds--;
        }
    }, 1000);
});
