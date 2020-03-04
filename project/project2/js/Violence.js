class Violence{
  constructor(x, y, width, height, violentimg) {
    // The x and y Postion
    this.x = x;
    this.y = y;

    // the vx and vy
    this.vx = 0;
    this.vy = 0;

    // Scale of the image
    this.scale = 0.2;

    // The width and height of the object
    this.width = width * this.scale;
    this.height = height * this.scale;

    // Variable to display the image
    this.violentimg = violentimg;
  }

  move() {
    // To update the position
    this.x += this.vx;
    this.y += this.vy;

  // Handle wrapping
  this.handleWrapping();
  }


  gravity(){
    this.vy = 2;

    this.handleWrapping();
  }

  handleCollision(sprite){
    let d = dist(this.x, this.y, sprite.x, sprite.y);

    if (d < this.width / 2 + sprite.width / 2) {
      this.x = random(width/3, width/3*2);
      this.y = 0;
      toyScore ++;

      responsiveVoice.speak("Oh my god", 'UK English Male');
    }
  }

  handleWrapping() {

    // Random positions
    if (this.y > height) {
      this.vy = 0;
      this.x = random(width/3, width/3*2);
      this.y = 0;
    }
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.violentimg, this.x, this.y, this.width, this.height);
    pop();
  }

}
