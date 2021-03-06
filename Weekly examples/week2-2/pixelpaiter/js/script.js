"use strict";

window.onload = setup;

function setup(){
  console.log("Testing, testing");

  for(let i = 0; i < 1000; i++){
    let pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    pixel.addEventListener('mouseover', paint); // New
    document.body.appendChild(pixel);

  }
}

function paint(e){
  let pixel = e.target;
  pixel.style.backgroundColor = 'white';
  setTimeout(resetPixel, 1000, pixel);
}

function resetPixel(pixel){
  pixel.style.backgroundColor = 'black';
}
