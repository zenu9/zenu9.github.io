const videoElement = document.getElementById('fullscreen-video');
const fullscreenButton = document.getElementById('fullscreen-button');

// Function to toggle fullscreen
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        videoElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Event listener for fullscreen change
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        console.log('Entered fullscreen mode');
    } else {
        console.log('Exited fullscreen mode');
    }
});

fullscreenButton.addEventListener('click', toggleFullScreen);