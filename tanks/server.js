import express from 'express';
import { WebSocketServer, WebSocket } from 'ws';
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

console.log('WebSocket server initialized');

// Handle WebSocket connections
wss.on('connection', (ws) => {
    const clientId = uuidv4();
    console.log(`New client connected: ${clientId}`);

    clients.set(ws, {
        id: clientId,
        position: { x: 0, y: 0, z: 0 },
        rotation: { y: 0 },
        health: 500,
        score: 0,
        lastUpdate: Date.now(),
        lastDamageTime: 0
    });

    const clientList = Array.from(clients.values()).map(client => ({
        id: client.id,
        position: client.position,
        rotation: client.rotation,
        health: client.health,
        score: client.score
    }));

    const initMessage = {
        type: 'init',
        id: clientId,
        clients: clientList
    };
    ws.send(JSON.stringify(initMessage));

    broadcast({
        type: 'playerJoined',
        client: { id: clientId, position: { x: 0, y: 0, z: 0 }, rotation: { y: 0 }, health: 500, score: 0 }
    }, ws, false);

    ws.on('close', () => {
        console.log(`Client disconnected: ${clientId}`);
        const clientData = clients.get(ws);
        if (clientData) {
            broadcast({ type: 'playerLeft', id: clientId });
            clients.delete(ws);
            console.log(`Current client count: ${clients.size}`);
        }
    });

    ws.on('error', (error) => {
        console.error(`Client ${clientId} error:`, error);
        const clientData = clients.get(ws);
        if (clientData) {
            broadcast({ type: 'playerLeft', id: clientId });
            clients.delete(ws);
            ws.terminate();
            console.log(`Current client count after error: ${clients.size}`);
        }
    });

    ws.on('message', (data) => {
        try {
            const message = JSON.parse(data);
            // Log ALL received message types
            // console.log(`[Server Received Raw] Type: ${message?.type || 'UNKNOWN'}`);

            if (message.type === 'ping') return;

            const client = clients.get(ws);
            if (!client) {
                console.error('Message received from unknown client (ws key not found in map)');
                return;
            }
            message.id = client.id;

            switch (message.type) {
                case 'update':
                    // Update client info
                    if (message.position) {
                        client.position = message.position;
                    }
                    if (message.rotation) {
                        client.rotation = message.rotation;
                    }
                    // Server is authoritative for health, IGNORE health from client update
                    // if (message.health !== undefined) {
                    //     client.health = message.health;
                    // }
                    // Server is authoritative for score, IGNORE score from client update
                    // if (message.score !== undefined) {
                    //     client.score = message.score;
                    // }
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
                    }, ws, true);
                    break;

                case 'tankHit':
                    let targetClientData = null;
                    let targetWs = null;

                    for (const [ws, clientData] of clients.entries()) {
                        if (clientData.id === message.targetId) {
                            targetClientData = clientData;
                            targetWs = ws;d
                            break;
                        }
                    }

                    // Log health BEFORE any calculation
                    if (targetClientData) {
                      // console.log(`  [Server Tank Hit PRE-CALC] Target ${message.targetId} health is: ${targetClientData.health}`);
                    }

                    // Apply damage ONLY if target exists, has health, and cooldown passed
                    if (targetClientData && targetClientData.health > 0) {
                        const now = Date.now();
                        const damageCooldown = 200; // 200ms cooldown between hits on the same target

                        if (now - targetClientData.lastDamageTime > damageCooldown) {
                            // Cooldown passed, process the hit
                            targetClientData.lastDamageTime = now; // Update last damage time

                            const healthBefore = targetClientData.health;
                            targetClientData.health -= message.damage;
                            targetClientData.health = Math.max(0, targetClientData.health);
                            console.log(`  [Server Tank Hit Calculation] Target ${message.targetId}: Health ${healthBefore} - Damage ${message.damage} = ${targetClientData.health}`);

                            broadcast({ type: 'tankDamaged', id: message.targetId, health: targetClientData.health }, null, true);

                            if (targetClientData.health <= 0) {
                                console.log(`Tank ${message.targetId} destroyed by ${message.shooterId}`);

                                // Award points to the shooter server-side
                                let shooterClientData = null;
                                for (const cData of clients.values()) {
                                    if (cData.id === message.shooterId) {
                                        shooterClientData = cData;
                                        break;
                                    }
                                }
                                if (shooterClientData && shooterClientData.id !== targetClientData.id) { // Check shooter exists and not self-destruct
                                    shooterClientData.score += 100;
                                    console.log(`Awarded 100 points to shooter ${message.shooterId}. New score: ${shooterClientData.score}`);
                                    // Broadcast shooter's score update
                                    broadcast({
                                        type: 'playerUpdate',
                                        id: shooterClientData.id,
                                        position: shooterClientData.position, // Include position/rotation
                                        rotation: shooterClientData.rotation,
                                        health: shooterClientData.health,
                                        score: shooterClientData.score,
                                        timestamp: Date.now() // Use current time
                                    }, null, true); // Send to all (including shooter)
                                }

                                broadcast({ type: 'tankDestroyed', id: message.targetId, destroyedBy: message.shooterId, position: targetClientData.position }, null, true);

                                if (targetWs) {
                                    console.log(`Terminating connection for destroyed client ${message.targetId}`);
                                    targetWs.terminate();
                                    clients.delete(targetWs);
                                }
                            }
                        } else {
                            // Hit occurred within cooldown period, ignore it
                            console.log(`  [Server Tank Hit Cooldown] Hit ignored for Target ${message.targetId}. Time since last hit: ${now - targetClientData.lastDamageTime}ms`);
                        }
                    } else if (targetClientData) {
                         // console.log(`  [Server Tank Hit Skip] Target ${message.targetId} already has 0 health.`);
                    }

                    // Log final health state after processing this hit
                    if (targetClientData) {
                      // console.log(`  [Server Tank Hit POST-CALC] Target ${message.targetId} final health in map: ${clients.get(targetWs)?.health ?? 'N/A (removed?)'}`);
                    }
                    break;

                case 'tankRespawned':
                    console.log('Tank respawned:', message);
                    broadcast({
                        type: 'tankRespawned',
                        id: message.id,
                        position: message.position,
                        rotation: message.rotation
                    }, null, true);
                    break;

                case 'projectile':
                    broadcast(message, null, true);
                    break;

                case 'explosion':
                    // Add a log here to confirm it's NOT being run
                    console.error("!!! SERVER ERROR: Unexpectedly entered 'explosion' message handler case!");
                    // The broadcast below should remain commented out or removed
                    // broadcast(message, null, true); // Keep this commented/removed
                    break;

                case 'obstacleDestroyed':
                    broadcast(message, null, true);
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
    let recipients = 0;
    const totalClients = clients.size;

    for (const [clientWs, clientData] of clients.entries()) {
        try {
            const shouldSend = (includeAll || clientWs !== sender) && clientWs.readyState === WebSocket.OPEN;

            if (shouldSend) {
                try {
                    clientWs.send(JSON.stringify(message));
                    recipients++;
                } catch (error) {
                    console.error(`Error sending to client ${clientData.id}:`, error);
                    clients.delete(clientWs);
                    clientWs.terminate();
                }
            }
        } catch (loopError) {
            console.error(`!!! Error during broadcast loop for client ${clientData?.id}:`, loopError);
        }
    }
}

// Restore cleanup interval
setInterval(() => {
    const now = Date.now();
    const timeout = 30000;

    clients.forEach((clientData, ws) => {
        if (now - clientData.lastUpdate > timeout) {
            console.log(`Client ${clientData.id} timed out`);
            const wasPresent = clients.delete(ws);
            ws.terminate();
            if (wasPresent) {
                const leaveMessage = { type: 'playerLeft', id: clientData.id };
                broadcast(leaveMessage);
            }
        }
    });
}, 10000);

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