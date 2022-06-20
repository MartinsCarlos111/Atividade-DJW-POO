// gerencia o Canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// gera um número aleatório

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// gera uma cor aleatória

function randomRGB() {
  return `rgb(${random(255, 255, 255)},${random(255, 255, 255)},${random(255, 255, 255)})`;
}


//define um vetor de bolas
const bolas = [];

while (bolas.length < 10) {
   const size = random(10,20);
   const bola = new Bola(
      // posição de sempre uma bola de distância
      // fora das bordas para evitar erros de desenho
      (0 + size,width - size),
      (0 + size,height - size),
      (-2,2),
      (-8,8),
      randomRGB(),
      size
   );

   //atualiza o vetor
  bolas.push(bola);
}

//realiza um loop em todas as bolas geradas
function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0)';
   ctx.fillRect(0, 0,  width, height);

   for (const bola of bolas) {
    bola.draw();
    bola.update();
   }

   requestAnimationFrame(loop);
}

loop();


