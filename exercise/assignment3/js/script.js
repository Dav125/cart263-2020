"use strict";

/********************************************************************

Assignment 2: Slamina Special
David Fong

This is a project where we click on the correct animal names in button.
And there is also the voice commands to makes things more interesting

*********************************************************************/

// Variables for all the animal names being used
let animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];

// Variable to know the correct answer
let correctAnimal;

// For loop variable for the answer
let answers = [];

// Variable for the score
let score = 0;

// A constant to keep number of options to five
const NUM_OPTIONS = 5;

// Variable for the voice command:

// The 'I give up' voice command
let speakGiveUp = {
  'I give up': giveup
};

// The 'Say it again' voice command
let speakRepeat = {
  'Say it again': repeat
};

// The 'I think it is *animals' voice command
let speakGuess = {
  'I think it is *animals': voiceGuess
};

$(document).ready(setup);

// setup()
function setup() {
  addButton("Lamb");
  addButton("Llama");

  // The annyang addCommands which links to the functions down below
  annyang.addCommands(speakGiveUp);
  annyang.addCommands(speakRepeat);
  annyang.addCommands(speakGuess);

  // A function that allows the annyang commands to start
  annyang.start();

  // newRound() is function that reset the round with new choices
  newRound();

}

// addButton()
// Allows to create button function function
function addButton(label) {
  // Creates the wrapper
  let $button = $('<div></div>');

  // $button.addClass() allows me to create various button functions
  $button.addClass('guess');
  $button.addClass('new');
  $button.addClass('correct');
  $button.addClass('incorrect');

  // Allows to display the text of buttons
  $button.text(label);


  $button.button();

  // An button event happen only once when I click a button
  // it also links to handleGuess function
  $button.on('click', handleGuess);


  $('body').append($button);

}
// It is a function says the name of the animals in backwards
function sayBackwards(text) {
  let backwardsText = text.split('').reverse().join('');

  // allows to controls the rate and the pitch of the word being said
  let options = {
    rate: Math.random(),
    pitch: Math.random()
  };

  // function that creates the voice and the word being saide
  responsiveVoice.speak(backwardsText, 'UK English Male', options);

}

// newRound() reset the game with new options
function newRound() {
  // variable for the for loop
  answers = [];

  // adds new buttons
  $('.new').remove();

  // for loop that creates new option
  for (let i = 0; i < NUM_OPTIONS; i++) {
    let answer = animals[Math.floor(Math.random() * animals.length)];
    addButton(answer);
    answers.push(answer);
  }

  // also add the new correct answer
  correctAnimal = answers[Math.floor(Math.random() * answers.length)];

  // calling the correct answer backwards
  sayBackwards(correctAnimal)
}

// handleGuess() allows to know if the user chose the correct or not
function handleGuess() {
  // locating the name text
  if ($(this).text() === correctAnimal) {

    // removes the correct answer
    $('.guess').remove();

    // a time delay to 10 milli seconds and links to the newRound()
    setTimeout(newRound, 1000);

    // to add point to the score
    correct();
  } else {
    // a shake event that start when the answer is wrong
    $(this).effect('shake');

    // reset the score to 0
    incorrect();

    // says the new backwards again to give hint
    sayBackwards(correctAnimal);
  }
}

// giveup function
function giveup() {

  // Says the correct answer normally
  responsiveVoice.speak(correctAnimal, 'UK English Male');

  // checks the correct answer
  $('.guess').each(checkCorrect);

  // call the incorrect function to lose point(s)
  incorrect();

  // Set a time delay of 20 milli seconds
  setTimeout(newRound, 2000);
}

// highlights the correct answer
function checkCorrect() {
  if ($(this).text() === correctAnimal) {
    $(this).effect('highlight');
  }
}

// a voice command to repeat the answer in backwards
function repeat() {
  sayBackwards(correctAnimal);
}

// a voice command to guess the right answer
function voiceGuess(animalGuess) {
  // linking the variables
  if (animalGuess === correctAnimal) {
    // calling the correct()
    correct();
    // removes the buttons
    $('.guess').remove();
    // time delay
    setTimeout(newRound, 1000);

  } else {
    // shake event
    $('.guess').effect('shake');

    // says answer backwards
    sayBackwards(correctAnimal);
  }
}
// adds one points for the correct answer
function correct() {
  score += 1;
  $('#score').text(score);
}
// removes the points for wrong answer
function incorrect() {
  score = 0;
  $('#score').text(score);
}
