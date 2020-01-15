"use strict";

window.onload = setup;

// Global rotation
let rotation = 0;

// Global variable for currentKey
let currentKey = "";

function setup(){
  console.log("Testing, testing");

  for(let i = 0; i < 1000; i++){
    let pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    pixel.addEventListener('mouseover', paint); // New

    // pixelClick
    //
    // When the mouse is clicked it makes a hole
    // but in actuality, I'm setting the opacity of
    // the pixel to 0
    pixel.addEventListener('click', pixelRemove);

    // pixelRotate
    //
    // When I press a specific key, the pixels rotates
    // a specfic way like clockwise or counter-clockwise
    document.addEventListener('keydown', pixelRotate);

    // typedPixel
    //
    // to keep track of the key being pressed
    document.addEventListener('keydown', typedPixel);

    // MouseOver event
    //
    // To show the current key that is being used at
    // the center of the screen
    document.addEventListener('mouseover', addText);

    document.body.appendChild(pixel);

  }
}

function paint(e){
  let pixel = e.target;
  // Math.random times 255
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  pixel.style.backgroundColor = `rgb(${r},${g},${b})`;
  setTimeout(resetPixel, 1000, pixel);

}

// pixelRemove
//
// When the mouse is clicked it makes a hole
// but in actuality, I'm setting the opacity of
// the pixel to 0
function pixelRemove(e) {
  let pixel = e.target;

  pixel.style.opacity = '0';
}


// pixelRotate
//
// When I press the right arrow key, the pixels rotates clockwise and
// as for the the left arrow key, the pixels rotates counter-clockwise
function pixelRotate(e) {
  let pixel = e.target;

  // Right arrow key
  if (e.keyCode === 39) {
    rotation += 1;
  }
  // Left arrow key
  else if (e.keyCode === 37) {
    rotation -= 1;
  }

  // querySelectorAll()
  //
  // Using this function to able to control all the pixel in the
  // screen as an array for loop
  let allPixels = document.querySelectorAll('.pixel');

  for(let i = 0; i < allPixels.length; i++){
    allPixels[i].style.transform = `rotate(${rotation}deg)`;
  }
}

// typedPixel()
//
// To keep track of the key being pressed
function typedPixel(e){
  currentKey = e.keyCode;
}

// addText()
//
// To show the current key that is being used with
// the mouseOver event
function addText(e){
  let pixel = e.target;

  if (pixel.className === 'pixel'){
    pixel.innerHTML = String.fromCharCode(currentKey);
  }

}

function resetPixel(pixel){
  pixel.style.backgroundColor = 'black';
}
