"use strict";

/********************************************************************

Eat up
David Fong

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

// Varriables for the images
let $mouth;
let $fly;

// The variables for the sound files
let buzzSFX = new Audio ("assets/sounds/buzz.mp3");
let crunchSFX = new Audio ("assets/sounds/crunch.wav");


// To load the program
$(document).ready(setup);

// setup function
function setup() {


  // The codes run in here
  $mouth = $('#mouth');
  $fly = $('#fly');

  // draggable function
  $fly.draggable();

  // mouth droppable
  $mouth.droppable({
    drop: onDrop
  });

  buzzSFX.loop = true;

  $fly.on('mousedown' ,function() {
  buzzSFX.play();
  });

  $fly.off('mouseup', function() {
  buzzSFX.pause();
  });
}

// onDrop function
//
// it supposedd to remove the fly
function onDrop(event, ui){
  console.log("Eating");
  ui.draggable.remove();

  crunchSFX.play();
  buzzSFX.pause();

  //setInterval
  setInterval(chew, 500);
}

// chew function
//
// when the image mouth open mouth, it will close in loop with the
// closed mouth
function chew(){
  // Using the attr jquery function to search for the attribute called
  // "src" in a if function
  if ($mouth.attr("src") === "assets/images/mouth-open.png") {
    $mouth.attr("src", "assets/images/mouth-closed.png");
    crunchSFX.play();
    }

  else {
    $mouth.attr("src", "assets/images/mouth-open.png");

    }
}
