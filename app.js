const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let posX = 2;
let posY = 1;

const snake = [];
snake.push({
    x: 2,
    y: 1,
    xNext: 0,
    yNext: 0,
    pinta: function(){
        ctx.font = '20px Serif';
        ctx.fillText('🐮', this.x * 20, this.y * 20);
    }
});
snake.push({
    x: 1,
    y: 1,
    xNext: 2,
    yNext: 1,
    pinta: function(){
        ctx.font = '20px Serif';
        ctx.fillText('🤍', this.x * 20, this.y * 20);
    }
});
snake.push({
    x: 0,
    y: 1,
    xNext: 1,
    yNext: 1,
    pinta: function(){
        ctx.font = '20px Serif';
        ctx.fillText('🤍', this.x * 20, this.y * 20);
    }
});

const comida = {
    x: 0,
    y: 0,
    aparece: function() {
        this.x = Math.floor(Math.random() * 30);
        this.y = Math.ceil(Math.random() * 20);
    },
    pinta: function(){
        ctx.font = '25px Serif';
        ctx.fillText('🌽', this.x * 20, this.y * 20);
    }
}

function nextMove(){
    snake.forEach((cuerpo, index) => {
        if(index === 0){
            cuerpo.x = posX;
            cuerpo.y = posY;
        }else{
            cuerpo.x = cuerpo.xNext;
            cuerpo.y = cuerpo.yNext;
            cuerpo.xNext = snake[index - 1].x;
            cuerpo.yNext = snake[index - 1].y;
        }
    })
}

setInterval(() => {
    ctx.fillRect(0,0,600,400);
    // comida.aparece();
    // comida.pinta();
    snake.forEach(cuerpo => cuerpo.pinta());
    posX ++;
    nextMove();
}, 500);
