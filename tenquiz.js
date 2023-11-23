function checkAnswers() {
    const message = document.getElementById('message');

    // User-selected answers
    var q1 = document.getElementById('q1').value;
    var q2 = document.getElementById('q2').value;
    var q3 = document.getElementById('q3').value;
    var q4 = document.getElementById('q4').value;
    var q5 = document.getElementById('q5').value;
    var q6 = document.getElementById('q6').value;
    var q7 = document.getElementById('q7').value;
    var q8 = document.getElementById('q8').value;
    var q9 = document.getElementById('q9').value;
    var q10 = document.getElementById('q10').value;

    if (q1 === 'zeff' && q2 === 'east' && q3 === 'karla' && q4 === 'patrick' && q5 === 'david' 
    && q6 === 'kwame' && q7 === 'british' && q8 === 'italianamerican' && q9 === 'austrianamerican' && q10 === 'seafood') {
        message.innerHTML = "<div class='alert alert-success'>Congratulations! You've won a VIP seat. <a href=\"vipseat.html\" class=\"btn btn-success\">VIP seat registration!</a></div>";
    } else {
        alert('Oops! You didn\'t answer all the questions correctly.');
    }
}
