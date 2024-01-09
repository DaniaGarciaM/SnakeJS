const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

ctx.fillStyle = 'palevioletred';

const snake = {
    x: 0,
    y: 0,
    pinta: function(){
        ctx.fillRect(this.x,this.y,20,20);
    }
}

snake.pinta();