import { WebSocket, WebSocketServer } from 'ws';
import { createServer } from 'http';

// Create HTTP server
const server = createServer();

// Create WebSocket server
const wss = new WebSocketServer({ server });

// Store connected clients and their game states
const clients = new Map();
const playerStates = new Map(); // Store persistent player states

// Game state update interval (ms)
const UPDATE_INTERVAL = 1000 / 60; // 60 FPS

// Handle new WebSocket connections
wss.on('connection', (ws, req) => {
    // Get client IP and port for unique identification
    const clientIP = req.socket.remoteAddress;
    const clientPort = req.socket.remotePort;
    const clientIdentifier = `${clientIP}:${clientPort}`;

    // Check if this is a reconnecting client
    let clientId;
    let clientState;

    // Look for existing state with this identifier
    for (const [existingId, state] of playerStates.entries()) {
        if (state.identifier === clientIdentifier) {
            clientId = existingId;
            clientState = state;
            break;
        }
    }

    // If no existing state found, create new client
    if (!clientState) {
        clientId = generateUniqueId();
        clientState = {
            id: clientId,
            identifier: clientIdentifier,
            position: { x: 0, y: 0, z: 0 },
            rotation: { y: 0 },
            health: 100,
            score: 0,
            lastUpdate: Date.now()
        };
        playerStates.set(clientId, clientState);
    }

    // Update the clients map with the new connection
    clients.set(ws, clientState);

    console.log(`Client ${clientId} ${clientState.identifier} connected. Total clients: ${clients.size}`);

    // Send initial state to client
    ws.send(JSON.stringify({
        type: 'init',
        id: clientId,
        state: clientState, // Send client's own state
        clients: Array.from(clients.values())
            .filter(client => client.id !== clientId) // Exclude the connecting client
            .map(client => ({
                id: client.id,
                position: client.position,
                rotation: client.rotation,
                health: client.health,
                score: client.score
            }))
    }));

    // Broadcast new player to all other clients
    broadcastToOthers(ws, {
        type: 'playerJoined',
        client: clientState
    });

    // Handle incoming messages
    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);
            handleClientMessage(ws, data);
        } catch (error) {
            console.error('Error parsing message:', error);
        }
    });

    // Handle client disconnect
    ws.on('close', () => {
        const state = clients.get(ws);
        if (state) {
            // Keep the player state in playerStates map
            // but remove from active clients
            clients.delete(ws);

            // Set a timeout to remove the player state if they don't reconnect
            setTimeout(() => {
                if (!Array.from(clients.values()).some(client => client.id === state.id)) {
                    // If no active connections have this ID after timeout
                    playerStates.delete(state.id);
                    // Broadcast final removal
                    broadcastToAll({
                        type: 'playerLeft',
                        id: state.id
                    });
                }
            }, 30000); // 30 second timeout for reconnection

            console.log(`Client ${state.id} disconnected. Total clients: ${clients.size}`);
        }
    });
});

// Handle client messages
function handleClientMessage(ws, data) {
    const clientState = clients.get(ws);
    if (!clientState) return;

    switch (data.type) {
        case 'ping':
            // Respond to heartbeat with pong
            ws.send(JSON.stringify({ type: 'pong' }));
            break;

        case 'update':
            // Update client state
            Object.assign(clientState.position, data.position);
            Object.assign(clientState.rotation, data.rotation);
            clientState.health = data.health;
            clientState.score = data.score;
            clientState.lastUpdate = Date.now();

            // Broadcast update to other clients
            broadcastToOthers(ws, {
                type: 'playerUpdate',
                id: clientState.id,
                position: clientState.position,
                rotation: clientState.rotation,
                health: clientState.health,
                score: clientState.score
            });
            break;

        case 'projectile':
            // Broadcast projectile to all clients
            broadcastToAll({
                type: 'projectile',
                id: clientState.id,
                position: data.position,
                direction: data.direction,
                speed: data.speed
            });
            break;

        case 'explosion':
            // Broadcast explosion to all clients
            broadcastToAll({
                type: 'explosion',
                position: data.position,
                isLarge: data.isLarge
            });
            break;

        case 'obstacleDestroyed':
            // Broadcast destroyed obstacle to all clients
            broadcastToAll({
                type: 'obstacleDestroyed',
                id: data.obstacleId,
                position: data.position
            });
            break;
    }
}

// Broadcast message to all clients except sender
function broadcastToOthers(sender, message) {
    const messageStr = JSON.stringify(message);
    clients.forEach((state, client) => {
        if (client !== sender && client.readyState === WebSocket.OPEN) {
            client.send(messageStr);
        }
    });
}

// Broadcast message to all clients
function broadcastToAll(message) {
    const messageStr = JSON.stringify(message);
    clients.forEach((state, client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(messageStr);
        }
    });
}

// Generate unique ID for clients
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
}

// Clean up disconnected clients periodically
setInterval(() => {
    const now = Date.now();
    clients.forEach((state, client) => {
        if (now - state.lastUpdate > 10000) { // 10 seconds timeout
            client.terminate();
            clients.delete(client);
            console.log(`Client ${state.id} timed out. Total clients: ${clients.size}`);
        }
    });
}, 5000);

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`WebSocket server is running on port ${PORT}`);
}); 