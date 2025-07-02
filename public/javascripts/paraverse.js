socket.on('sendData', (data) => {

    if(data.messageType == "getUser"){

        const dataString = JSON.stringify(data, null, 2); // Pretty-print the JSON

        const item = document.createElement('li');
        item.textContent = dataString;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);

        const payload = {
            "messageType" : "getUserSuccess",
            "statusCode" : 200,
            "userType" : "Primary",
            "userId" : Math.floor(Math.random() * 10),
            "activeSession" : false
          }
    
        socket.emit('sendData', payload, config);
    }
});