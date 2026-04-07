# 👾 Space Invaders

> _"They arrived in formation. Precise. Relentless. Descending one row at a time."_
> _"Twenty-four invaders. One gun. Zero margin for error."_

A browser-based recreation of the 1978 Taito arcade classic — rebuilt from scratch using nothing but vanilla JavaScript, HTML5, and CSS3. No canvas. No engine. No dependencies. Just raw DOM manipulation, a keyboard, and twenty-four red rectangles that want you dead.

---

## ⚡ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![No Frameworks](https://img.shields.io/badge/frameworks-none-555555?style=flat-square)
![Vanilla JS](https://img.shields.io/badge/engine-vanilla%20JS-yellow?style=flat-square)
![DOM API](https://img.shields.io/badge/rendering-DOM%20only-informational?style=flat-square)
![No Build](https://img.shields.io/badge/build%20step-none-brightgreen?style=flat-square)
![Browser](https://img.shields.io/badge/runs%20in-any%20browser-blue?style=flat-square&logo=googlechrome&logoColor=white)

---

## 🎮 The Battlefield

```
╔══════════════════════════════════════════════════╗
║                                                  ║
║   👾  👾  👾  👾  👾  👾  👾  👾   ← ROW 1      ║
║   👾  👾  👾  👾  👾  👾  👾  👾   ← ROW 2      ║
║   👾  👾  👾  👾  👾  👾  👾  👾   ← ROW 3      ║
║                                                  ║
║             ↙  sweeping  ↘                       ║
║            ↙   left &    ↘                       ║
║           ↙    right      ↘                      ║
║                  ↓ drop                          ║
║                                                  ║
║                  💛  ← bullet (yours)            ║
║                                                  ║
║                 [ 🟩 ]  ← you                    ║
╚══════════════════════════════════════════════════╝
              600 × 600 px  ·  black void
```

---

## 🕹️ Controls

| Key | Action |
|:---:|---|
| `←` | Move ship left |
| `→` | Move ship right |
| `Space` | Fire |

---

## ⚙️ Game Mechanics

| System | Detail |
|---|---|
| 🟩 **Player** | Green rectangle · 40×20px · locked to the bottom row |
| 👾 **Invaders** | 3 rows × 8 columns · 24 total · solid red |
| 💛 **Bullets** | Yellow projectiles · travel upward · one at a time |
| 🤖 **Enemy AI** | Sweeps left and right · drops 20px on every edge hit |
| 💥 **Collision** | AABB detection via `getBoundingClientRect()` |
| ⏱️ **Game Loop** | Bullet update every **50ms** · enemy move every **500ms** |
| ☠️ **Game Over** | Invaders reach `y ≥ 580px` — they win |

---

## 🚀 How to Play

1. Clone or download the repository
2. Open `index.html` in any modern browser — no server needed
3. Use **← →** to navigate your ship across the bottom of the screen
4. Press **Space** to shoot upward
5. Eliminate all 24 invaders before they reach the ground
6. If they touch the bottom — it's over. Reload and try again.

---

## 🗂️ Project Structure

```
📁 spaceinvaders/
│
├── 📄 index.html     —  game container, DOM structure, layout
├── 🎨 styles.css     —  colours, dimensions, positioning, visual theme
└── ⚙️  app.js        —  all game logic: loop, movement, shooting, collision
```

---

## 🔬 Under the Hood

```
┌─────────────────────────────────────────────────────────┐
│                     Initialisation                      │
│              createInvaders() → 3×8 grid DOM            │
└───────────────────────┬─────────────────────────────────┘
                        │
          ┌─────────────┴──────────────┐
          ▼                            ▼
  setInterval (50ms)          setInterval (500ms)
       update()                  moveInvaders()
          │                            │
   ┌──────┴──────┐             ┌───────┴───────┐
   │ Move bullet │             │ Shift X ±20px │
   │   upward    │             │  Edge hit?    │
   │             │             │  → reverse    │
   │ Collision?  │             │  → drop 20px  │
   │ → remove    │             │               │
   │   both      │             │  y ≥ 580px?   │
   │             │             │  → GAME OVER  │
   │ Off-screen? │             └───────────────┘
   │ → remove    │
   │   bullet    │
   └─────────────┘
```

---

## 🎯 Win & Lose Conditions

| Condition | Trigger | Outcome |
|---|---|---|
| 🏆 **Victory** | All 24 invaders destroyed | You win — silently |
| ☠️ **Defeat** | Any invader reaches `y ≥ 580px` | `alert()` — game halts |

---

## 📝 Honest Notes

- The game ends with an `alert()`. It's 1978-accurate in spirit, if not in method.
- There is no score. You destroyed them or you didn't.
- There are no lives. One wave reaches the bottom and it's over.
- Enemy speed is constant — they don't accelerate as numbers drop.
- Bullet fire is not rate-limited. Spam the spacebar. See what happens.
- Source code comments are bilingual. Portuguese crept in during development. It stayed.

---

_Next up: a live score counter, a high-score board, accelerating enemy speed as invaders fall, multi-bullet support, sound effects — or leave it exactly as Taito left it in 1978. Minimal. Merciless. Correct._
