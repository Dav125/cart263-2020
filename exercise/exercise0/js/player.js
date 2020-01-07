Player class{
  constructor(x, y, speed, size, fillColor){

    this.x = x;
    this.y = y;

    this.vx = 0;
    this.vy = 0;

    this.size = size;

    this.speed = speed;

    this.fillColor = fillColor;


    this.maxHealth = this.size;

    this.currentHealth =  this.maxHealth;
    this.healthloss = 0.1;
    this.healthGain = 1;






  }

  move(){
    this.x += this.vx;
    this.y += this.vy;

    this.currentHealth = this.currentHealth - this.healthloss;
    this.currentHealth = constrain(this.currentHealth, 0, this.maxHealth);

    this.handleWrapping(); 

  }



  handleEating(food){
    let d = dist(this.x, this.y, food.x, food.y);

    if (d < this.size + food.size) {
      this.currentHealth += this.healthGain;
      this.currentHealth = constrain(this.currentHealth, 0, this.maxHealth);

      food.currentHealth -= this.healthGain;

      if(food.currentHealth < 0){
        food.reset();
      }
    }
  }

  display(){

    push();
    noStroke();
    fill(this.fillColor);
    this.size = this.currentHealth;
    ellipse(mouseX, mouseY, this.size * 2);
    pop();

  }

}
