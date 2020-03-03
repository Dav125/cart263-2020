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

let wheel;

let backgroundKid;

let violenceImg;

let gunfightImg;

let coolImg;

let violentBg;

let platform = [];

let toyFall = [];

let bearF= [];

let ponyF = [];

let wheelF = [];

let gunfightF = [];

let violenceF = [];

let coolF = [];

let toyNumb = 1;

let vioNumb = 1;

let platNumb = 5;

let numbStartP = 1;

let startingPlat = [];

let state = "startGame"


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

platformImg = loadImage("assets/images/platformImg.png")

violentBg = loadImage("assets/images/violentBG.jpg");

backgroundKid = loadImage("assets/images/backgroundKid.jpg");

}


// setup()
//
// Description of setup

function setup() {
createCanvas(1280, 720);

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

  bearF = new Toys(btoyX, btoyY, 500, 500, bearImg);
  ponyF = new Toys(ptoyX, ptoyY, 500, 500, ponyImg);
  wheelF = new Toys(wtoyX, wtoyY, 500, 500, wheelImg);


  bearFplus.push(bearF);
  ponyFplus.push(ponyF);
  wheelFplus.push(wheelF);
}
}

function startScreen(){
  push();
  textSize(80);
  text("Dreamworld Climb", width / 2, height / 4);
  textAlign(CENTER, CENTER);
  noStroke();
  pop();

  if (keyIsPressed) {
    state = "playGame";
  }
}

function gameScreen(){
  background(backgroundKid, 1280, 720);

  sprite.handleInput();
  sprite.gravity();
  sprite.move();
  sprite.display();

  // for loop
  for (i = 0; i < bearF.length; i++) {
    bearF[i].display();
    bearF[i].move();
    bearF[i].handleWrapping();
    bearF[i].handleCollision(sprite);
  }

  for (i = 0; i < ponyF.length; i++) {
    ponyF[i].display();
    ponyF[i].move();
    ponyF[i].handleWrapping();
    ponyF[i].handleCollision(sprite);
  }

  for (i = 0; i < wheelF.length; i++) {
    wheelF[i].display();
    wheelF[i].move();
    wheelF[i].handleWrapping();
    wheelF[i].handleCollision(sprite);
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




// draw()
//
// Description of draw()

function draw() {

  background(backgroundKid, 1280, 720);

  switch (state) {
    case "startGame":

      startScreen();
      break;
    case "playGame":

      gameScreen();
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
  }
  }

}
