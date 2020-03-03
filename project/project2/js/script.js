"use strict";

/*****************

Project 2:
David Fong

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let sprite;

let bearImg;

let ponyImg;

let wheel;

let backgroundKid;

let platform = [];

let toyNumb = 2;

let platNumb = 5;

let state = "startGame"


// preload()
//
// Description of preload

function preload() {

sprite = loadImage("assets/images/boy.png");

bearImg = loadImage("assets/images/bear.png");

pony = loadImage("assets/images/pony.jpeg");

wheel; = loadImage("assets/images/wheel.png");

backgroundKid = loadImage("assets/images/backgroundKid.jpg");

}


// setup()
//
// Description of setup

function setup() {
createCanvas(1280, 720);
}

function startScreen(){
  push();
  textSize(80);
  text("Dreamworld Climb", width / 2, height / 4);
  textAlign(CENTER, CENTER);
  noStroke();
  pop();

  if (keyIsPressed) {
    state = "playgame"
  }
}

function gameScreen(){
  background(backgroundKid, 1280, 720);

  
}

function overScreen(){

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
    case "playgame":

      gameScreen();
      break;
    case "gameOver"
      overScreen();

  }

}
