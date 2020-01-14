"use strict";

window.onload = setup;
//window.addEventListener('load',setup); this is also similar to the first one

function setup() {


  document.addEventListener('keydown', enlargePage);
  // let mainHeading = document.getElementById('main-heading');
  // console.log(mainHeading);
  //
  // console.log("The page has loaded!");
  // console.log("Now we can do stuff with the DOM of the page!");
  // console.log(document);

  let imagesDiv = document.getElementById('images');
  let gameIcons = imagesDiv.getElementsByClassName('game-icon');
  // gameIcons contains an array (kind of) containing all the elements
  // with a class of "game-icon"
  // If there aren't any the (kind of) array will have a .length of 0
  for (let i = 0; i < gameIcons.length; i++) {
    console.log(gameIcons[i]);
  }

  let heading = document.getElementById('main-heading');
  heading.style.color = 'yellow';
  heading.style.backgroundColor = 'rgb(0,0,0)';

}

function enlargePage() {
  // Get the style properties of the body with window.getComputedStyle()
  let style = window.getComputedStyle(document.body);
  let currentSize = parseFloat(style.fontSize);
  currentSize += 0.1;
  document.body.style.fontSize = `${currentSize}px`;
}
