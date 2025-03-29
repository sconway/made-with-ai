# 3D Tank Simulator

A simple 3D tank game built with Three.js where you can drive a tank around a terrain and destroy obstacles.

## Features

- 3D environment with terrain, roads, mountains, and clouds
- Drivable tank with realistic movement
- Destructible obstacles (crates, barrels, trees, and barriers)
- Obstacle respawning after destruction
- Mobile-friendly controls
- Day/night cycle
- Dynamic lighting and shadows
- Particle effects for explosions
- Score tracking

## Controls

### Desktop

- **W / S** - Move forward / backward
- **A / D** - Rotate tank left / right
- **SPACE** - Fire projectile

### Mobile

- **Left joystick** - Movement control
- **Red button** - Fire projectile

## Game Mechanics

- Different obstacles have different health points
- Some obstacles (like barrels) can be explosive, causing chain reactions
- Destroyed obstacles respawn after 10-15 seconds
- Score is earned for each destroyed obstacle

## Technical Details

This project uses:

- Three.js for 3D rendering
- Vite for development and building
- JavaScript for game logic
- CSS for UI styling

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Credits

Developed with AI assistance as a demonstration of Three.js capabilities.

## License

MIT
