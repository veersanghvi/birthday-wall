document.getElementById('addMessageButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText) {
        const messagesDiv = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = messageText;
        messagesDiv.appendChild(newMessage);
        messageInput.value = ''; // Clear the input
    } else {
        alert('Please enter a message!');
    }
});
