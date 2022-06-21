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


//define um vetor de meteorito
const meteorito = [];

while (meteorito.length < 10) {
   const size = random(70,50);
   const estrela = new Estrela(
      // posição de sempre uma estrela de distância
      // fora das bordas para evitar erros de desenho
      (0 + size,width - size),
      (0 + size,height - size),
      (5,13),
      (-2,8),
      randomRGB(),
      size
   );

   //atualiza o vetor
  meteorito.push(estrela);
}

//realiza um loop em todas as meteorito geradas
function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
   ctx.fillRect(0, 0,  width, height);

   for (const estrela of meteorito) {
    estrela.draw();
    estrela.update();
   }

   requestAnimationFrame(loop);
}

loop();


