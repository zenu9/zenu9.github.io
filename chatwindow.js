function toggleChat() {
    var chatPopup = document.getElementById("chatPopup");
    chatPopup.style.display = (chatPopup.style.display === "none" || chatPopup.style.display === "") ? "block" : "none";
}

function sendMessage() {
    var inputElement = document.querySelector('.chat-input input');
    var message = inputElement.value.trim();

    if (message !== "") {
        var chatContent = document.querySelector('.chat-content');
        var newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.textContent = message;
        chatContent.appendChild(newMessage);

        // Clear the input field after sending the message
        inputElement.value = "";
    }
}
