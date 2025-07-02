## SOCKETIO-CLIENT

### Description
The **Socket.IO Client** is a browser-based application that connects to the remote server. It serves as a demonstration of how clients can join specific rooms and interact with other clients in real-time. The clients are informed about other clients connecting and disconnecting.

### Features
- Automatically connects to the remote Socket.IO Server.
- Joins a room specified in the URL query parameters.
- Sends and receives real-time messages within the room.
- Displays the connection status of other clients in the same room.

### URLs
- Paraverse View: [http://localhost:3000/paraverse?config=62:4b:aa:85:12:21](http://localhost:3000/paraverse?config=62:4b:aa:85:12:21)
- Companion View: [http://localhost:3000/companion?config=62:4b:aa:85:12:21](http://localhost:3000/companion?config=62:4b:aa:85:12:21)

### Running Locally
1. Ensure you have Node.js installed (version 16 or higher).
2. Navigate to the project directory: `cd SOCKETIO-CLIENT`
3. Install the required dependencies: `npm install`
4. Start the local server: `npm start`
5. Open your browser and navigate to the client URLs to test real-time communication.