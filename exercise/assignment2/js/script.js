"use strict";

/********************************************************************

Assignment 2: Raving Redactionist Redux
David Fong

In this program, we have to find the secret word that is hiding in the
paragraphe while also uncensor the word that are being hiding by the
black bars

*********************************************************************/

// const: Constant is a function that is a value that doen't change
//
// The percentage chance that will make the word appear
const REVEAL_POSSIBILTY = 0.1;
// It is a value of a time interval
const UPDATE_FREQUENCY = 500;

// A place to store the jQuery selection of all the spans
// in other words a variable for jQuery
let $spans;
let $secrets;

// Variable for secrets found and revealed in total
let secretsFound = 0;
let secretsTotal;

// To set-up the page to be ready when it loads
$(document).ready(setup);

function setup(){
  console.log("Loaded!");
  // Save the selection of all the spans (Since we are going to click it multiple times anyway)
  $spans = $('span');


  // Putting the total number secrets in the top screen
  $('#found').text(secretsTotal);

  // Set up a click handler on the spans
  $('span').on('click',spanClicked);

  // Adding an event listener for to find secret words
  $('.secret').on('mouseover', findSecret);

  // setInterval()
  //
  // Adding a time interval that links to the function update for each
  // 500 milisecond
  setInterval(update, UPDATE_FREQUENCY);
  }

// spanClicked()
//
// When the span is clicked, we reveal the sentence
function spanClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}

// update()
//
// Update is called every 500 milliseconds and it updates all the spans on the page
// using jQuery's each() function which calls the specified function on _each_ of the
// elements in the selection
function update(){
  console.log("Update");
  $('span').each(updateSpan);
}

// updateSpan()
//
// With random chance it unblanks the current span by removing the
// redacted class and adding the revealed class. Because this function is called
// by each(), "this" refers to the current element that each has selected.
function updateSpan(){
  console.log("Updating span!");
  let r = Math.random();
  if(r < REVEAL_POSSIBILTY) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

// findSecret
//
// Once a secret word is found by a mouse hover, the secret
// word is turned into a class called 'founded' and it increase the
// counter
function findSecret() {
  // Adding the founded class
  $(this).addClass('founded');

  // Once the word is hovered, the mouseover function
  // is off
  $(this).off('mouseover');

  // Increase the number count of the secret founded
  secretsFound += 1;

  // Presenting the words found
  $('#found').text(secretsFound);
}
