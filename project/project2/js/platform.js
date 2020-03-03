class Platform {
  // constructor()
  //
  // This is all of the parametres for the platform to be placed
  constructor(x, y, width, height, platformImg) {
    // The x and y Postion
    this.x = x;
    this.y = y;

    // the vx and vy
    this.vx = 0;
    this.vy = 0;

    // Scale of the image
    this.scale = 0.1;

    // The width and height of the object
    this.width = width * this.scale;
    this.height = height * this.scale;

    // Variable to display the image
    this.platformImg = platformImg;

  }

  // move()
  //
  // platform will not move on it own but when the avalanche comes in contact
  // to platform, it collapes
  move() {
    // To update the position
    this.x += this.vx;
    this.y += this.vy;

    // Handle wrapping
    this.handleWrapping();

  }

  // handleWrapping
  //
  // Once the platform falls off screen, it will reapear in a
  // different postion
  handleWrapping() {

    // Random positions
    if (this.y > height) {
      this.vy = 0;
      this.x = random(30, width - 30);
      this.y = random(10, height - 10);
    }
  }

  // diplay();
  //
  // Display the platform in the background
  display() {
    push();
    imageMode(CENTER);
    image(this.platformImg, this.x, this.y, this.width, this.height);
    pop();
  }
}
