import { WebSocketServer, WebSocket } from 'ws';
import { createServer } from 'http';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ 
    server,
    path: '/socket'
});

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
    app.use(express.static(path.join(__dirname, 'dist')));
    
    // Serve index.html for all routes in production
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
} else {
    // In development, Vite handles static files
    console.log('Running in development mode - static files handled by Vite');
}

// Store connected clients
const clients = new Map();

// Log WebSocket server status
console.log('WebSocket server initialized with path:', wss.options.path);

// Handle WebSocket connections
wss.on('connection', (ws, req) => {
    console.log('New client connecting...', req.url);
    
    // Generate unique client ID
    const clientId = Math.random().toString(36).substr(2, 9);
    
    // Store client information
    const clientInfo = {
        id: clientId,
        position: { x: 0, y: 0, z: 0 },
        rotation: { y: 0 },
        health: 500,
        score: 0,
        lastUpdate: Date.now()
    };
    clients.set(ws, clientInfo);

    // Get list of other clients for initialization
    const otherClients = Array.from(clients.entries())
        .filter(([socket]) => socket !== ws)
        .map(([_, info]) => ({
            id: info.id,
            position: info.position,
            rotation: info.rotation,
            health: info.health,
            score: info.score
        }));

    console.log(`Client ${clientId} connected. Other clients:`, otherClients.map(c => c.id));

    // Send initial setup to new client
    ws.send(JSON.stringify({
        type: 'init',
        id: clientId,
        clients: otherClients
    }));

    // Broadcast new player to all other clients
    broadcast({
        type: 'playerJoined',
        client: clientInfo
    }, ws);

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

                    // Broadcast update to other clients
                    broadcast({
                        type: 'playerUpdate',
                        id: client.id,
                        position: client.position,
                        rotation: client.rotation,
                        health: client.health,
                        score: client.score,
                        timestamp: message.timestamp
                    }, ws);
                    break;

                case 'tankHit':
                    console.log('Tank hit:', message);
                    // Broadcast tank hit to all clients (including sender)
                    broadcast({
                        type: 'tankHit',
                        targetId: message.targetId,
                        shooterId: message.shooterId,
                        damage: message.damage,
                        position: message.position
                    });
                    break;

                case 'tankDestroyed':
                    console.log('Tank destroyed:', message);
                    // Broadcast tank destroyed to all clients
                    broadcast({
                        type: 'tankDestroyed',
                        id: message.id,
                        destroyedBy: message.destroyedBy,
                        position: message.position
                    });
                    break;

                case 'tankRespawned':
                    console.log('Tank respawned:', message);
                    // Broadcast tank respawn to all clients
                    broadcast({
                        type: 'tankRespawned',
                        id: message.id,
                        position: message.position,
                        rotation: message.rotation
                    });
                    break;
                    
                case 'projectile':
                case 'explosion':
                case 'obstacleDestroyed':
                    // These messages are broadcast as-is
                    broadcast(message, ws);
                    break;
                    
                default:
                    console.log('Unknown message type:', message.type);
                    return;
            }
        } catch (error) {
            console.error('Error handling message:', error);
        }
    });

    // Handle client disconnection
    ws.on('close', () => {
        console.log(`Client ${clientId} disconnected`);
        
        // Remove client from storage
        clients.delete(ws);
        
        // Broadcast player left message
        broadcast({
            type: 'playerLeft',
            id: clientId
        });
    });

    // Handle errors
    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
        ws.close();
    });
});

// Broadcast message to all clients except sender
function broadcast(message, sender = null) {
    wss.clients.forEach((client) => {
        if (client !== sender && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(message));
        }
    });
}

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    if (!isProduction) {
        console.log('Development mode: Please also run "npm run dev" in another terminal');
    }
}); 