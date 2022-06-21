class Estrela {

   constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
   }
//desenha a estrela na tela
   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
   }

   //atualiza a posição da estrela na tela

   update() {
      if ((this.x + this.size) >= width) {
         this.velX = -(this.velX);
      }

      if ((this.x - this.size) <= 50) {
         this.velX = -(this.velX);
      }

      if ((this.y + this.size) >= height) {
         this.velY = -(this.velY);
      }


      this.x += this.velX;
      this.y += this.velY;
   }
//veruifica a colisão entre as estrela
   collisionDetect(Meteorito) {
      for (var estrela of Meteorito) {
         if (!(this === estrela)) {
            const dx = this.x - estrela.x;
            const dy = this.y - estrela.y;
            const distance = Math.sqrt(dx + dy);

            if (distance < this.size + estrela.size) {
              estrela= this.color = randomRGB();
            }
         }
      }
   }

}
