document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.getElementById('animated-text');
    // Initial position outside the container
    let position = -100; 

    function animateText() {
        position += 1;

        animatedText.style.left = position + '%';

        if (position >= 100) {
            // Reset the position
            position = -100;
        }

        requestAnimationFrame(animateText);
    }

    animateText();
});