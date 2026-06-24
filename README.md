# 👾 Space Invaders — Classic Arcade Shooter in JavaScript

> Defend Earth from waves of descending alien invaders in this faithful browser-based recreation.

A complete implementation of the classic 1978 arcade game built entirely with vanilla JavaScript and DOM manipulation. The player controls a ship at the bottom of a 600px-wide game area, shooting upward at a 3×8 grid of alien invaders that march laterally across the screen, reverse direction at the edges, and descend one row closer with each pass. As invaders are eliminated the remaining ones speed up, creating escalating tension until the final showdown.

## 📦 What's Inside

- 🚀 Player-controlled ship with smooth left/right movement
- 👾 3×8 grid of alien invaders (24 total enemies)
- 🔫 Bullet firing system with spacebar trigger
- 💥 Pixel-accurate collision detection between bullets and invaders
- ↔️ Lateral invader movement with automatic edge detection and reversal
- ⬇️ Row-by-row descent when invaders reach screen boundaries
- ⚡ Dynamic speed increase as fewer invaders remain on screen
- 🏆 Real-time score tracking displayed during gameplay
- ✅ Win condition — eliminate all 24 invaders to claim victory
- ❌ Game over condition — invaders reach the player's row
- 🎯 Bullet lifecycle management using `setInterval` for smooth projectile travel
- 🖥️ 600px fixed-width game area for consistent gameplay experience
- 🎨 Clean visual styling with CSS3

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🏗️ Project Structure

```
spaceinvaders/
├── index.html      # Game layout and grid container
├── styles.css      # Visual styling, ship and invader appearance
├── app.js          # Core game logic, movement, collision, scoring
└── README.md
```

## 🎮 Controls

| Key | Action |
|-----|--------|
| `←` Arrow Left | Move ship left |
| `→` Arrow Right | Move ship right |
| `Spacebar` | Fire bullet upward |

## ⚙️ Game Mechanics

### Invader Grid & Movement

The game initializes a 3-row by 8-column grid of invader cells. Invaders move as a single formation — they shift one cell laterally on each tick. When the rightmost invader in the formation hits the right boundary of the game area, the entire grid reverses direction and drops down one row. The same happens at the left boundary. This creates the iconic zigzag descent pattern.

### Speed Escalation

A core mechanic ties invader speed to the number of remaining invaders. The movement interval decreases as invaders are destroyed, meaning fewer invaders move faster. By the time only a handful remain, they race across the screen, demanding quick reflexes from the player.

### Bullet System

When the player presses spacebar, a bullet element is created at the ship's position and travels upward via a `setInterval` timer. Each bullet independently checks its position on every tick. If it moves beyond the top of the game area without hitting anything, it is removed from the DOM and its interval is cleared to prevent memory leaks.

### Collision Detection

On every bullet movement tick, the game checks whether the bullet's current grid position overlaps with any active invader. If a collision is detected, both the bullet and the invader are removed from play, the score increments, and the speed recalculates. This per-tick checking ensures no invader is skipped even at high bullet speeds.

### Win & Lose Conditions

- **Win:** All 24 invaders are eliminated. A victory message is displayed.
- **Lose:** Any invader's position reaches or passes the player's row. The game halts and a game-over message appears.

## 🚀 How to Run

```bash
# Clone the repository
git clone https://github.com/VidiPT89/spaceinvaders.git

# Navigate into the project
cd spaceinvaders

# Open in your default browser
open index.html
```

No build tools, no dependencies — just open and play.

## 📝 Notes

- The game uses DOM manipulation rather than Canvas, making it lightweight and easy to inspect
- Bullet tracking via `setInterval` provides smooth, independent projectile movement without a global game loop
- The speed escalation mechanic faithfully recreates the original arcade behavior where the hardware ran faster with fewer sprites to render
- All game state is managed in vanilla JavaScript with no external libraries or frameworks
- The fixed 600px game area ensures consistent gameplay across different screen sizes
- Grid-based positioning simplifies collision math while maintaining visual fidelity

---

Developed by **David Arsénio Martins** — *"Vidi"*
