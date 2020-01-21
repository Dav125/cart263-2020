"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

function setup(){
  console.log("Loaded!");

setInterval(update, 500);
$('span').on('click',spanClicked);
}

function spanClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}


function update(){
  console.log("Update");
  $('span').each(updateSpan);
}

function updateSpan(){
  console.log("Updating span!");
  let r = Math.random();
  if(r < 0.1) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}
