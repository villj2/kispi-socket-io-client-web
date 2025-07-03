const url = new URL(window.location.href);
const queryParams = new URLSearchParams(url.search);
const config = queryParams.get('config');
document.getElementById("config").innerText = config;

//const socket = io('https://kispi-socket-io-server.fly.dev/', {
//const socket = io('https://kispi-socket-io-server-dev.fly.dev/', {
const socket = io('http://localhost:3001/', {    
    query: {
        token: 'my-auth-token',
        custom: 'goat',
        room: config
    }
});
const formMessage = document.getElementById('form-message');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

formMessage.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value, config);
        input.value = '';
    }
});

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

socket.on('message', (msg) => {

    console.log(msg);

    try {
        const data = typeof msg === 'string' ? JSON.parse(msg) : msg;

        console.log("Nachricht empfangen:");
        console.log("MessageType:", data.MessageType);
        console.log("Message:", data.Message);
    } catch (err) {
        console.error("Fehler beim Parsen der Nachricht:", err);
    }
})

socket.on('client connected', (clientId) => {
    console.log("client connected with id: " + clientId);
    updateConnectionStatus("green");
});

socket.on('client disconnected', (clientId) => {
    console.log("client disconnected with id: " + clientId);
    updateConnectionStatus("red");
});

socket.on('clients in room', (clientIds) => {
    console.log("Other clients in room: "+ clientIds);

    if (clientIds.length === 0) updateConnectionStatus("red");
    else updateConnectionStatus("green");
});

function updateConnectionStatus(color) {
    const connectionStatus = document.getElementById("connection-status");

    if (connectionStatus) {
        connectionStatus.className = "status-circle";
        connectionStatus.classList.add(color);
    } else {
        console.error("Element with ID 'connection-status' not found.");
    }
}