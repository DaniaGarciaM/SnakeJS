const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let posX = 2;
let posY = 1;
let direccion = 1;

const eating = new Audio('./moo.mp3');
const dead = new Audio('./oh.mp3');

function start() {
    posX = 2;
    posY = 1;
    direccion = 1;
    const snake = [];
    snake.push({
        x: 2,
        y: 1,
        xNext: 0,
        yNext: 0,
        pinta: function () {
            ctx.font = '20px Serif';
            ctx.fillText('🐮', this.x * 20, this.y * 20);
        }
    });
    snake.push({
        x: 1,
        y: 1,
        xNext: 2,
        yNext: 1,
        pinta: function () {
            ctx.font = '20px Serif';
            ctx.fillText('🤍', this.x * 20, this.y * 20);
        }
    });
    snake.push({
        x: 0,
        y: 1,
        xNext: 1,
        yNext: 1,
        pinta: function () {
            ctx.font = '20px Serif';
            ctx.fillText('🤍', this.x * 20, this.y * 20);
        }
    });
    return snake;
};

let snake = start();

const comida = {
    x: 0,
    y: 0,
    aparece: function () {
        this.x = Math.floor(Math.random() * 25);
        this.y = Math.ceil(Math.random() * 15);
    },
    pinta: function () {
        ctx.font = '25px Serif';
        ctx.fillText('🍓', this.x * 20, this.y * 20);
    }
}

function nextMove() {
    snake.forEach((cuerpo, index) => {
        if (index === 0) {
            cuerpo.x = posX;
            cuerpo.y = posY;
        } else {
            cuerpo.x = cuerpo.xNext;
            cuerpo.y = cuerpo.yNext;
            cuerpo.xNext = snake[index - 1].x;
            cuerpo.yNext = snake[index - 1].y;
        }
    })
}

function checkEat() {
    if (snake[0].x === comida.x && snake[0].y === comida.y) {
        eating.play();
        snake.push({ ...snake[1] });
        comida.aparece();
    }
}

function gameOver() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    return false;
}



comida.aparece();

setInterval(() => {
    ctx.fillRect(0, 0, 600, 400);;
    snake.forEach(cuerpo => cuerpo.pinta());
    comida.pinta();

    checkEat();
    if (gameOver()) {
        dead.play();
        alert('Perdiste  :(');
        snake = start();
    }

    if (direccion === 1) posX++;
    else if (direccion === 2) posY++;
    else if (direccion === 3) posX--;
    else posY--;

    if (posX > 24) posX = 0;
    else if (posX < 0) posX = 24;
    if (posY > 15) posY = 1;
    else if (posY < 1) posY = 15;

    nextMove();
}, 200);

document.querySelector('body')
    .addEventListener('keydown', function (e) {
        switch (e.key) {
            case 'ArrowUp':
                direccion = 4;
                break;
            case 'ArrowRight':
                direccion = 1;
                break;
            case 'ArrowLeft':
                direccion = 3;
                break;
            case 'ArrowDown':
                direccion = 2;
                break;
        }
    });

document.querySelector('.container')
    .addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')){
        const bText = e.target.innerText;
        if(bText === 'UP') direccion = 4;
        else if(bText === 'RIGHT') direccion = 1;
        else if(bText === 'LEFT') direccion = 3;
        else direccion = 2;
    }
})