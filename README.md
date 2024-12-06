# WebGL Flappy Cube Game

Flappy Cube Game is a simple yet engaging browser-based game inspired by the classic *Flappy Bird*. It is implemented using HTML, JavaScript, and Three.js for WebGL to create an immersive 3D experience. The game features a cube navigating through obstacles in a 3D environment with a focus on dynamic graphics and responsive gameplay.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Code Structure](#code-structure)
- [Game Controls](#game-controls)
- [Gameplay Logic](#gameplay-logic)
- [Acknowledgments](#acknowledgments)

## Overview
The WebGL Flappy Cube game is a 3D interactive experience where a cube flies through an obstacle course, avoiding collisions and accumulating points. The objective is to achieve the highest score possible without hitting obstacles or the ground.

## Features
- **3D Graphics**: Built using Three.js for enhanced visuals.
- **Dynamic Obstacles**: Randomly positioned gaps to increase difficulty.
- **Responsive Controls**: Smooth interactions with keyboard inputs.
- **Scoring System**: Tracks the player's score and displays encouraging messages.
- **Restart Option**: Allows players to start a new game after a collision.

## Technologies Used
- **HTML5**: Provides the game structure.
- **CSS3**: Adds visual styling and layout.
- **JavaScript (ES6)**: Implements game logic and interactivity.
- **Three.js**: Renders 3D objects and animations.

## Getting Started
## Installation
To set up and run the game on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/username/FlappyCubeGame.git
   ```
2. Navigate to the project folder:
   ```
   cd FlappyCubeGame
   ```
3. Open the index.html file in your preferred web browser.
4. If you don’t want to use a local server, simply double-click the index.html file to launch the game. For better performance, you can run the game using a local server:
Install Python (if not already installed).
    ```
    python -m http.server 8000
    ```
    Open your browser and navigate to http://localhost:8000.

## Project Structure
The project folder is structured as follows:
WebGL-Flappy-Cube/
├── index.html       
├── style.css        
├── three.min.js     
├── keyboard.js      
└── game.js  

- **index.html**: Sets up the game canvas and scoreboard.
- **three.min.js**: Provides Three.js functionality for rendering 3D graphics.
- **keyboard.js**: Manages keyboard inputs for controlling the cube.
- **game.js**: Contains the core logic, including obstacle movement, scoring, and collision detection.

## Game Controls
- **`F` Key**: Start the game and make the cube fly upwards.
- **No Key Press**: The cube descends due to gravity.

## Gameplay Logic
### Initialization
- The game initializes a 3D scene using Three.js, including the cube, obstacles, and background.
- Obstacles are placed at random heights to increase difficulty.

### Game Loop
- The game runs a continuous loop using `requestAnimationFrame`, ensuring smooth rendering and gameplay.
- The cube's position is updated based on user input and gravity.
- Obstacles move toward the player, simulating forward motion.

### Collision Detection
- The game checks for collisions between the cube and obstacles or the ground.
- If a collision occurs, the game ends, and a "Game Over" message is displayed.

### Scoring
- Players earn points for passing through obstacles.
- Encouraging messages are displayed based on the score.

## Acknowledgments
- This project uses the [Three.js](https://threejs.org/) library for rendering 3D graphics.
- Inspired by *Flappy Bird* and its addictive gameplay mechanics.

Enjoy playing **WebGL Flappy Cube**!
