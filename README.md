# 👾 Space Invaders — Classic Arcade Shooter

> A browser-based Space Invaders game built with vanilla JavaScript and DOM manipulation.

Defend Earth from waves of alien invaders. Move your ship with the arrow keys, shoot with the spacebar, and destroy all enemies before they reach you. Features a 3x8 invader grid, collision detection, and progressively faster enemy movement.

## 📦 What's Inside

- 🚀 Player ship with smooth left/right movement
- 🔫 Spacebar shooting with bullet tracking
- 👾 3x8 grid of invaders with lateral movement
- 💥 Collision detection between bullets and invaders
- ⚡ Invaders speed up and descend as the game progresses
- 🏆 Win condition when all invaders are destroyed

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🏗️ Architecture

```
spaceinvaders/
├── index.html
├── styles.css
└── app.js
```

## 🎮 Controls

| Key | Action |
|-----|--------|
| `←` | Move left |
| `→` | Move right |
| `Space` | Shoot |

## 🚀 How to Run

```bash
# Clone the repository
git clone https://github.com/VidiPT89/spaceinvaders.git

# Open in browser
open index.html
```

## 📝 Notes

- The game area is 600px wide with boundary detection for both the player and invaders.
- Invaders reverse direction and move down when reaching the edges.
- No external libraries or frameworks required.

---

Developed by **David Martins**
