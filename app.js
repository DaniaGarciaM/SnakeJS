const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
const snake = [];
snake.push({
    x: 2,
    y: 1,
    xNext: 0,
    yNext: 0,
    pinta: function(){
        ctx.font = '25px Serif';
        ctx.fillText('👨🏻‍🌾', this.x * 20, this.y * 20);
    }
});
snake.push({
    x: 1,
    y: 1,
    xNext: 0,
    yNext: 0,
    pinta: function(){
        ctx.font = '25px Serif';
        ctx.fillText('🌽', this.x * 20, this.y * 20);
    }
});
snake.push({
    x: 0,
    y: 1,
    xNext: 0,
    yNext: 0,
    pinta: function(){
        ctx.font = '25px Serif';
        ctx.fillText('🌽', this.x * 20, this.y * 20);
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

setInterval(() => {
    ctx.fillRect(0,0,600,400);
    // comida.aparece();
    // comida.pinta();
    snake.forEach(cuerpo => cuerpo.pinta());
}, 500);