"use strict";

window.onload = setup;

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


function resetPixel(pixel){
  pixel.style.backgroundColor = 'black';
}
