import { WebSocketServer } from 'ws';
import { createServer } from 'http';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

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

// Handle WebSocket connections
wss.on('connection', (ws) => {
    // Generate unique client ID
    const clientId = Math.random().toString(36).substr(2, 9);
    
    // Store client information
    clients.set(ws, {
        id: clientId,
        position: { x: 0, y: 0, z: 0 },
        rotation: { y: 0 },
        health: 500,
        score: 0
    });

    // Send initial setup to new client
    ws.send(JSON.stringify({
        type: 'init',
        id: clientId,
        clients: Array.from(clients.values())
    }));

    // Broadcast new player to all other clients
    broadcast({
        type: 'playerJoined',
        client: clients.get(ws)
    }, ws);

    console.log(`Client ${clientId} connected`);

    // Handle incoming messages
    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);
            
            // Update client data
            const client = clients.get(ws);
            if (client) {
                switch (data.type) {
                    case 'update':
                        client.position = data.position;
                        client.rotation = data.rotation;
                        client.health = data.health;
                        client.score = data.score;
                        broadcast({
                            type: 'playerUpdate',
                            id: client.id,
                            position: client.position,
                            rotation: client.rotation,
                            health: client.health,
                            score: client.score
                        }, ws);
                        break;

                    case 'projectile':
                    case 'explosion':
                    case 'tankHit':
                    case 'tankDestroyed':
                    case 'obstacleDestroyed':
                        // Add client ID to message and broadcast
                        data.id = client.id;
                        broadcast(data);
                        break;

                    case 'ping':
                        ws.send(JSON.stringify({ type: 'pong' }));
                        break;
                }
            }
        } catch (error) {
            console.error('Error handling message:', error);
        }
    });

    // Handle client disconnect
    ws.on('close', () => {
        const client = clients.get(ws);
        if (client) {
            console.log(`Client ${client.id} disconnected`);
            broadcast({
                type: 'playerLeft',
                id: client.id
            });
            clients.delete(ws);
        }
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