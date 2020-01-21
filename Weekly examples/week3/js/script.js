"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
//$ sign is a short hand for Jquery
$(document).ready(setup);

function setup() {
  // This code will run when the document is ready!
  console.log("Loaded!");

  // Standard that I know
  //_---------------------
  // let $divs = $('div'); // a let variable

  // $divs.hide(); // to make the words invisble
  // $divs.fadeIn(2000); // To make the words appear  over time in mill Secs

  //Chaining the effects

  // $('div').hide().fadeIn(2000); // Select all divs THEN hide them THEN fade them in

  // $('div')
  // .hide()
  // .fadeIn(2000);


  // $('div').css('color','red'); // Set text in all divs to have red text

  // Modify the css

  //   $('div').css({
  //   color: 'red',
  //   backgroundColor: 'green',
  //   fontSize: '2em'
  // });

  // $('div').slideToggle({5000, slideToggleCompleted );

//   $('div').slideToggle({
//     duration: 5000,
//     complete: slideToggleCompleted;
//   });
//
//
// }
//
// function slideToggleCompleted(){
//   $('div').fadeIn(2000);
// }

$('div').on('mouseover',divClicked); // Add a click listener to ever div
function divClicked() {
  $(this).fadeOut(); // Tell the div cliked to fade out
}
}

// For more infomation, I could go to the API Jquery site in the slide 
