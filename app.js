const game = document.getElementById("game");
const player = document.getElementById("player");

let playerPos = 280;
let bullets = [];
let invaders = [];
let invaderDirection = 1; // 1 = direita, -1 = esquerda
let invaderSpeed = 20;
let invaderMoveInterval;
let gameInterval;

// Criar invasores
function createInvaders() {
    const rows = 3;
    const cols = 8;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const invader = document.createElement("div");
            invader.classList.add("invader");
            invader.style.top = `${r * 40}px`;
            invader.style.left = `${c * 60}px`;
            game.appendChild(invader);
            invaders.push(invader);
        }
    }
}

// Mover jogador
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        playerPos = Math.max(playerPos - 15, 0);
        player.style.left = playerPos + "px";
    } else if (e.key === "ArrowRight") {
        playerPos = Math.min(playerPos + 15, 560);
        player.style.left = playerPos + "px";
    } else if (e.key === " ") {
        shoot();
    }
});

// Atirar
function shoot() {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.style.left = playerPos + 18 + "px";
    bullet.style.top = "580px";
    game.appendChild(bullet);
    bullets.push(bullet);
}

// Atualizar jogo
function update() {
    // Mover balas
    bullets.forEach((b, index) => {
        b.style.top = parseInt(b.style.top) - 10 + "px";
        // Colisão com invasores
        invaders.forEach((inv, i) => {
            if (isColliding(b, inv)) {
                game.removeChild(b);
                bullets.splice(index, 1);
                game.removeChild(inv);
                invaders.splice(i, 1);
            }
        });
        // Remover balas fora do jogo
        if (parseInt(b.style.top) < 0) {
            game.removeChild(b);
            bullets.splice(index, 1);
        }
    });
}

// Mover invasores
function moveInvaders() {
    let moveDown = false;
    invaders.forEach((inv) => {
        let left = parseInt(inv.style.left);
        left += invaderDirection * invaderSpeed;
        inv.style.left = left + "px";
        if (left >= 570 || left <= 0) {
            moveDown = true;
        }
    });
    if (moveDown) {
        invaderDirection *= -1;
        invaders.forEach((inv) => {
            inv.style.top = parseInt(inv.style.top) + 20 + "px";
            if (parseInt(inv.style.top) >= 580) {
                alert("Fim de Jogo!");
                clearInterval(invaderMoveInterval);
                clearInterval(gameInterval);
            }
        });
    }
}

// Colisão
function isColliding(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();
    return !(
        aRect.top > bRect.bottom ||
        aRect.bottom < bRect.top ||
        aRect.right < bRect.left ||
        aRect.left > bRect.right
    );
}

// Iniciar jogo
createInvaders();
gameInterval = setInterval(update, 50);
invaderMoveInterval = setInterval(moveInvaders, 500);
