import express from 'express';
import { WebSocketServer } from 'ws';
import { v4 as uuidv4 } from 'uuid';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = createServer(app);

// Create WebSocket server
const wss = new WebSocketServer({ noServer: true });

const isProduction = process.env.NODE_ENV === 'production';

// Set proper MIME types for JavaScript modules
app.use((req, res, next) => {
    if (req.url.endsWith('.js')) {
        res.set('Content-Type', 'application/javascript; charset=utf-8');
    } else if (req.url.endsWith('.mjs')) {
        res.set('Content-Type', 'application/javascript; charset=utf-8');
    }
    next();
});

// Log all incoming requests for debugging
app.use((req, res, next) => {
    console.log('Incoming request:', req.method, req.url);
    next();
});

if (isProduction) {
    // Serve static files from dist in production
    app.use(express.static(join(__dirname, 'dist')));
    
    // Serve index.html for all routes in production
    app.get('*', (req, res) => {
        res.sendFile(join(__dirname, 'dist', 'index.html'));
    });
} else {
    // In development, Vite handles static files
    console.log('Running in development mode - static files handled by Vite');
}

// Store connected clients with their data
const clients = new Map();

// Log WebSocket server status
console.log('WebSocket server initialized with path:', wss.options.path);

// Handle WebSocket connections
wss.on('connection', (ws) => {
    // Generate unique client ID
    const clientId = uuidv4();
    console.log(`New client connected: ${clientId}`);

    // Store client data
    clients.set(ws, {
        id: clientId,
        position: { x: 0, y: 0, z: 0 },
        rotation: { y: 0 },
        health: 500,
        score: 0,
        lastUpdate: Date.now()
    });

    // Send initialization data to new client
    const clientList = Array.from(clients.values()).map(client => ({
        id: client.id,
        position: client.position,
        rotation: client.rotation,
        health: client.health,
        score: client.score
    }));

    ws.send(JSON.stringify({
        type: 'init',
        id: clientId,
        clients: clientList
    }));

    // Notify other clients about new player (exclude sender)
    broadcast({
        type: 'playerJoined',
        client: {
            id: clientId,
            position: { x: 0, y: 0, z: 0 },
            rotation: { y: 0 },
            health: 500,
            score: 0
        }
    }, ws, false); // Exclude sender

    // Handle client disconnect
    ws.on('close', () => {
        console.log(`Client disconnected: ${clientId}`);
        
        // Notify other clients
        broadcast({
            type: 'playerLeft',
            id: clientId
        });

        // Remove client from Map
        clients.delete(ws);
        
        // Log current client count
        console.log(`Current client count: ${clients.size}`);
    });

    // Handle client errors
    ws.on('error', (error) => {
        console.error(`Client ${clientId} error:`, error);
        
        // Clean up client connection
        clients.delete(ws);
        ws.terminate();
        
        // Notify other clients
        broadcast({
            type: 'playerLeft',
            id: clientId
        });
        
        // Log current client count
        console.log(`Current client count: ${clients.size}`);
    });

    // Handle incoming messages
    ws.on('message', (data) => {
        try {
            const message = JSON.parse(data);
            
            if (message.type === 'ping') {
                // Handle ping messages silently
                return;
            }

            const client = clients.get(ws);
            if (!client) {
                console.error('Message received from unknown client');
                return;
            }

            // Add client ID to message
            message.id = clientId;

            // Handle different message types
            switch (message.type) {
                case 'update':
                    // Update client info
                    if (message.position) {
                        client.position = message.position;
                    }
                    if (message.rotation) {
                        client.rotation = message.rotation;
                    }
                    if (message.health !== undefined) {
                        client.health = message.health;
                    }
                    if (message.score !== undefined) {
                        client.score = message.score;
                    }
                    client.lastUpdate = Date.now();

                    // Broadcast update to all clients including sender
                    broadcast({
                        type: 'playerUpdate',
                        id: client.id,
                        position: client.position,
                        rotation: client.rotation,
                        health: client.health,
                        score: client.score,
                        timestamp: message.timestamp
                    }, ws, true); // Include all clients
                    break;

                case 'tankHit':
                    console.log('Tank hit:', message);
                    console.log(`Tank hit event: Target=${message.targetId}, Shooter=${message.shooterId}, Damage=${message.damage}`);
                    // Broadcast tank hit to all clients (including sender)
                    console.log(`Tank hit event: Target=${message.targetId}, Shooter=${message.shooterId}, Damage=${message.damage}`); // Log tank hit details

                    // Find the target client and log their health AFTER the hit conceptually
                    let targetClientData = null;
                    clients.forEach((clientData, ws) => {
                        if (clientData.id === message.targetId) {
                            targetClientData = clientData;
                        }
                    });
                    if (targetClientData) {
                        // Note: Health is updated on the client, server just relays. We log the *expected* health.
                        const expectedHealthAfterHit = Math.max(0, targetClientData.health - message.damage);
                        console.log(`  -> Target tank (${message.targetId}) expected health after hit (server-side): ${expectedHealthAfterHit}`);
                    } else {
                        console.log(`  -> Target tank (${message.targetId}) not found on server.`);
                    }

                    broadcast({
                        type: 'tankHit',
                        targetId: message.targetId,
                        shooterId: message.shooterId,
                        damage: message.damage,
                        position: message.position
                    }, null, true); // Include all clients
                    break;

                case 'tankDestroyed':
                    console.log('Tank destroyed:', message);
                    // Broadcast tank destroyed to all clients
                    broadcast({
                        type: 'tankDestroyed',
                        id: message.id,
                        destroyedBy: message.destroyedBy,
                        position: message.position
                    }, null, true); // Include all clients
                    break;

                case 'tankRespawned':
                    console.log('Tank respawned:', message);
                    // Broadcast tank respawn to all clients
                    broadcast({
                        type: 'tankRespawned',
                        id: message.id,
                        position: message.position,
                        rotation: message.rotation
                    }, null, true); // Include all clients
                    break;

                case 'projectile':
                case 'explosion':
                case 'obstacleDestroyed':
                    // These messages are broadcast to all clients
                    broadcast(message, null, true); // Include all clients
                    break;

                default:
                    console.log('Unknown message type:', message.type);
                    return;
            }
        } catch (error) {
            console.error('Error handling message:', error);
        }
    });
});

// Broadcast message to all clients except sender
function broadcast(message, sender = null, includeAll = false) {
    clients.forEach((clientData, clientWs) => {
        // Send to all clients if includeAll is true, otherwise exclude sender
        if ((includeAll || clientWs !== sender) && clientWs.readyState === WebSocketServer.OPEN) {
            try {
                clientWs.send(JSON.stringify(message));
            } catch (error) {
                console.error('Error broadcasting to client:', error);
                // Clean up dead connection
                clients.delete(clientWs);
                clientWs.terminate();
            }
        }
    });
}

// Clean up inactive clients periodically
setInterval(() => {
    const now = Date.now();
    const timeout = 30000; // 30 seconds timeout

    // Log current player healths
    console.log('Current players and health:');
    if (clients.size === 0) {
        console.log('  No players connected.');
    } else {
        clients.forEach((clientData, ws) => {
            console.log(`  Player ID: ${clientData.id}, Health: ${clientData.health}`);
        });
    }

    clients.forEach((clientData, ws) => {
        if (now - clientData.lastUpdate > timeout) {
            console.log(`Client ${clientData.id} timed out`);
            
            // Clean up client connection
            clients.delete(ws);
            ws.terminate();
            
            // Notify other clients
            broadcast({
                type: 'playerLeft',
                id: clientData.id
            });
        }
    });
    
    // Log current client count
    console.log(`Active clients after cleanup: ${clients.size}`);
}, 10000); // Run cleanup every 10 seconds

// Handle WebSocket upgrade
server.on('upgrade', (request, socket, head) => {
    // In production, check if the request path matches '/socket'
    // In development, the path will be handled by Vite's proxy
    if (isProduction && request.url !== '/socket') {
        socket.destroy();
        return;
    }

    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    if (!isProduction) {
        console.log('Development mode: Please also run "npm run dev" in another terminal');
    }
});

// Export for use in main server file
export default wss; 