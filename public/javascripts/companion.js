const formGetUser = document.getElementById('form-get-user');

if(formGetUser){
    formGetUser.addEventListener('submit', (e) => {
        e.preventDefault();
        socket.emit('sendData', { messageType: "getUser"}, config);
    })
}

socket.on('sendData', (data) => {
    if(data.messageType == "getUserSuccess"){

        const dataString = JSON.stringify(data, null, 2); // Pretty-print the JSON

        const item = document.createElement('li');
        item.textContent = dataString;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
    }
});