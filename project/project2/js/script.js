"use strict";

/*****************

Project 2:
David Fong

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let sprite;

let spriteImg;

let bearImg;

let ponyImg;

let wheelImg;

let backgroundKid;

let violenceImg;

let gunfightImg;

let coolImg;

let violentBg;

let platformImg;

let platformF = [];

let toyFall = [];

let bearFplus= [];

let ponyFplus = [];

let wheelFplus = [];

let gunfightFplus = [];

let violenceFplus = [];

let coolFplus = [];

let startingPlatPlus;

let toyNumb = 1;

let vioNumb = 1;

let platNumb = 5;

let numbStartP = 1;

let startingPlat = [];

let state = "startGame"

let toyScore = 0;




// preload()
//
// Description of preload

function preload() {

spriteImg = loadImage("assets/images/boy.png");

bearImg = loadImage("assets/images/bear.png");

ponyImg = loadImage("assets/images/pony.jpeg");

wheelImg = loadImage("assets/images/wheel.png");

violenceImg = loadImage("assets/images/violence.jpg");

gunfightImg = loadImage("assets/images/gunfight.jpg");

coolImg  = loadImage("assets/images/cool.jpg");

platformImg = loadImage("assets/images/box.png");

violentBg = loadImage("assets/images/violentBG.jpg");

backgroundKid = loadImage("assets/images/backgroundKid.jpg");

}


// setup()
//
// Description of setup

function setup() {
createCanvas(1280, 720);
imageMode(CENTER, CENTER);

sprite = new Sprite(width/2, 500, 600, 600 , 3.5, spriteImg, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW);

//Array
//
// For the starting platform
for (let s = 0; s < numbStartP; s++) {
  // Starting platform
  //
  //this is a platform for the sprite for the start of the game
  // in case all the the random platform doesn't spawn under
  startingPlatPlus = new Platform(width / 2, 700, 2000, 1000, platformImg);

  // push
  //
  // To add the platform as an array
  startingPlat.push(startingPlatPlus);
}


// for loop
for (let i = 0; i < toyNumb; i++){
  let btoyX = random(0, width);
  let btoyY = random(0, height);

  let ptoyX = random(0, width);
  let ptoyY = random(0, height);

  let wtoyX = random(0, width);
  let wtoyY = random(0, height);

  let bearF = new Toys(btoyX, btoyY, 500, 500, bearImg);
  let ponyF = new Toys(ptoyX, ptoyY, 500, 500, ponyImg);
  let wheelF = new Toys(wtoyX, wtoyY, 500, 500, wheelImg);


  bearFplus.push(bearF);
  ponyFplus.push(ponyF);
  wheelFplus.push(wheelF);
}



for (let s = 0; s < vioNumb; s++){
  let vvioX = random(0, width);
  let vvioY = random(0, height);

  let gvioX = random(0, width);
  let gvioY = random(0, height);

  let cvioX = random(0, width);
  let cvioY = random(0, height);


  let violenceF = new Violence(vvioX, vvioY, 500, 500, violenceImg);
  let gunfightF = new Violence(gvioX, gvioY, 500, 500, gunfightImg);
  let coolF = new Violence(cvioX, cvioY, 500, 500, coolImg);

  violenceFplus.push(violenceF);
  gunfightFplus.push(gunfightF);
  coolFplus.push(coolF);

}
}

function startScreen(){
image(backgroundKid, width/2, height/2);
  push();
  textSize(80);
  textAlign(CENTER, CENTER);
  fill(255);
  text("Dreamworld Climb", width / 2, height / 4);

  noStroke();
  pop();

  if (keyIsPressed) {
    state = "playGame";
  }
}

function gameScreen(){
image(backgroundKid, width/2, height/2);

push();
textSize(40);
textAlign(CENTER, CENTER);
fill(255);
text(toyScore, width - 20, height/10);
pop();

  sprite.handleInput();
  sprite.gravity();
  sprite.move();
  sprite.display();

  sprite.pull = 1;

  sprite.grounded = false;

  // for loop
  for (let i = 0; i < bearFplus.length; i++) {
    bearFplus[i].gravity();
    bearFplus[i].display();
    bearFplus[i].move();
    bearFplus[i].handleWrapping();
    bearFplus[i].handleCollision(sprite);
  }

  for (let i = 0; i < ponyFplus.length; i++) {
    ponyFplus[i].gravity();
    ponyFplus[i].display();
    ponyFplus[i].move();
    ponyFplus[i].handleWrapping();
    ponyFplus[i].handleCollision(sprite);
  }

  for (let i = 0; i < wheelFplus.length; i++) {
    wheelFplus[i].gravity();
    wheelFplus[i].display();
    wheelFplus[i].move();
    wheelFplus[i].handleWrapping();
    wheelFplus[i].handleCollision(sprite);
  }

  if(toyScore === 10){
    state = "shadyGame";
  }

  // for loop for starting platform
  //
  // the starting platform will be an array
  for (let s = 0; s < startingPlat.length; s++) {
    // startingPlat
    //
    // To display the starting platform and the handleStanding
    startingPlat[s].display();
    sprite.handleStanding(startingPlat[s]);
  }

if (sprite.y > height) {
  state = "gameOver";
}

}

function shadyScreen(){
  image(violentBg, width/2, height/2);


  push();
  textSize(40);
  textAlign(CENTER, CENTER);
  stroke(0);
  fill(255);
  text(toyScore, width - 20, height/10);
  pop();

    sprite.handleInput();
    sprite.gravity();
    sprite.move();
    sprite.display();

    sprite.pull = 1;

    sprite.grounded = false;

    // for loop
    for (let s = 0; s < violenceFplus.length; s++) {
      violenceFplus[s].gravity();
      violenceFplus[s].display();
      violenceFplus[s].move();
      violenceFplus[s].handleWrapping();
      violenceFplus[s].handleCollision(sprite);
    }

    for (let s = 0; s < gunfightFplus.length; s++) {
      gunfightFplus[s].gravity();
      gunfightFplus[s].display();
      gunfightFplus[s].move();
      gunfightFplus[s].handleWrapping();
      gunfightFplus[s].handleCollision(sprite);
    }

    for (let s = 0; s < coolFplus.length; s++) {
      coolFplus[s].gravity();
      coolFplus[s].display();
      coolFplus[s].move();
      coolFplus[s].handleWrapping();
      coolFplus[s].handleCollision(sprite);
    }
    // for loop for starting platform
    //
    // the starting platform will be an array
    for (let s = 0; s < startingPlat.length; s++) {
      // startingPlat
      //
      // To display the starting platform and the handleStanding
      startingPlat[s].display();
      sprite.handleStanding(startingPlat[s]);
    }

  if (sprite.y > height) {
    state = "gameOver";

    responsiveVoice.speak("Great now, you ruin the kids mind...", 'UK English Male');
  }

  if (toyScore === 20){
    state = "gameOver";

    responsiveVoice.speak("Great now, you ruin the kids mind...", 'UK English Male');
  }
}




// draw()
//
// Description of draw()

function draw() {
clear();


  switch (state) {
    case "startGame":

      startScreen();
      break;
    case "playGame":

      gameScreen();
      break;
    case "shadyGame":
      shadyScreen();
      break;
    case "gameOver":

      overScreen();
      break;

  }

  function overScreen(){
  push();
  textSize(14);
  textAlign(CENTER, CENTER);
  noStroke();
  text("The kids mind has rotted", width/2, height/4);

  pop();

  if (mouseIsPressed) {
    state = "startGame";
    toyScore = 0;
    responsiveVoice.speak("You better not ruined the kid's mind again...", 'UK English Male');

    sprite = new Sprite(width/2, 500, 600, 600 , 3.5, spriteImg, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW);
  }
  }

}
