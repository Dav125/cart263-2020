class Toys {
  constructor(x, y, width, height, toysImg) {
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
    this.toysImg = toysImg;
  }

  move() {
    // To update the position
    this.x += this.vx;
    this.y += this.vy;

    // Handle wrapping
    this.handleWrapping();
  }

  // Gravity pulling the objects
  gravity() {

    this.vy = 2;
    this.handleWrapping();
  }

  //when it touches the sprite
  handleCollision(sprite) {
    let d = dist(this.x, this.y, sprite.x, sprite.y);

    if (d < this.width / 2 + sprite.width / 2) {
      this.x = random(width / 3, width / 3 * 2);
      this.y = 0;
      toyScore++;

      responsiveVoice.speak("Fun", 'UK English Male');
    }
  }

  // the object reappear at the top
  handleWrapping() {

    // Random positions
    if (this.y > height) {
      this.vy = 0;
      this.x = random(width / 3, width / 3 * 2);
      this.y = 0;
    }
  }

  // to display the object
  display() {
    push();
    imageMode(CENTER);
    image(this.toysImg, this.x, this.y, this.width, this.height);
  }

}
