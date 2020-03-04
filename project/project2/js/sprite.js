class Sprite {
  constructor(x, y, width, height, speed, sprite, upKey, downKey, leftKey, rightKey) {
    this.x = x;
    this.y = y;

    this.scale = 0.1;

    this.sprite = sprite;

    // The scale of the image that is going to be used
    this.scale = 0.1;

    // Width and Height of this object class
    this.width = width * this.scale;
    this.height = height * this.scale;

    // Velocity of the object
    this.vx = 0;
    this.vy = 1;

    // The speed of the object
    this.speed = speed;

    // The sprite Image
    this.sprite = sprite;

    // The directional keys
    this.upKey = upKey;
    this.downKey = downKey;
    this.leftKey = leftKey;
    this.rightKey = rightKey;

    // The grounded variable is to make sure
    // that the object is being detected for
    // standing in a platform
    this.grounded = false;

    // The pull variable is used
    // to pull object down just like gravity
    this.pull = 1.5;
  }

  // the controls
  handleInput() {
    // Horizontal movement left to right
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
    } else if (keyIsDown(this.rightKey)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }

    // Jumping movement
    //
    // Also detects if the object is grounded
    // if it is, it will be able to jump
    if (keyIsDown(this.upKey) && this.grounded === true) {
      console.log("jumping");

      // The jumping power velocity
      this.vy = -17.5;

      responsiveVoice.speak("boing", 'UK English Male');
    }
  }
  // move()
  //
  // To allow the sprite to move in the screen
  move() {
    // Update the position of the object
    this.x += this.vx;
    this.y += this.vy;

  }

  gravity() {
    // The sprite pulls to the ground
    this.vy += this.pull;

  }

  // handleStanding()
  //
  // To make sure that when the avatar is in contact with the platform
  // the sprite will not fall
  handleStanding(platform) {
    // Variable
    //
    // Variables to calculate the distance of the sprite and the platform
    let d = dist(this.x, this.y, platform.x, platform.y);

    // dist()
    //
    // To keep track of the platform and the avatar are in contact
    if (d < this.width / 2 + platform.width / 2) {

      // this.vy
      //
      // To make sure that the sprite doesn't fall
      this.grounded = true;
      this.pull = 0;
      this.vy = 0;

    }
  }

  // to display this object
  display() {
    push();
    imageMode(CENTER);
    image(this.sprite, this.x, this.y, this.width, this.height);
  }
}
