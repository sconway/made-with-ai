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
        score: 0
    };
    clients.set(ws, clientInfo);

    // Get list of other clients for initialization
    const otherClients = Array.from(clients.entries())
        .filter(([socket]) => socket !== ws)
        .map(([_, info]) => info);

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

            // Add client ID to message
            message.id = clientId;

            // Handle different message types
            switch (message.type) {
                case 'update':
                    // Update client info
                    if (message.position) clientInfo.position = message.position;
                    if (message.rotation) clientInfo.rotation = message.rotation;
                    break;
                    
                case 'projectile':
                case 'explosion':
                case 'obstacleDestroyed':
                case 'tankDamaged':
                case 'tankDestroyed':
                    // These messages are broadcast as-is
                    break;
                    
                default:
                    console.log('Unknown message type:', message.type);
                    return;
            }

            // Broadcast message to other clients
            broadcast(message, ws);
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