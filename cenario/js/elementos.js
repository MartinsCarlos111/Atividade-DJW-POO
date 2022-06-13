const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

Class Plataforma{

    constructor(x, y, color, size) {
       this.x = x;
       this.y = y;
       this.color = color;
       this.size = size;
    }

    draw() {
       ctx.beginPath();
       ctx.fillStyle = "red"
       ctx.moveTo (100,100)
       ctx.lineTo(200,100)
       
       ctx.fill();
    }
}