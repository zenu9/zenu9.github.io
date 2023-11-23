var modal = document.getElementById('myModal');
var openGuideBtn = document.getElementById('openGuideBtn');
var closeGuideBtn = document.getElementById('closeGuideBtn');

// Open the modal when the button is clicked
openGuideBtn.onclick = function() {
    modal.style.display = 'block';
}

// Close the modal when the close button is clicked
closeGuideBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
