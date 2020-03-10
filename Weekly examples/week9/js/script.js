"use strict";
// Part 1

// let tarot;
//
// function preload() {
//   tarot = loadJSON("data/tarot_interpretations.json");
// }
//
// function setup() {
//   console.log(tarot);
// }

//Part 2

// let tarot;
//
// function setup() {
//
// }
//
// function mousePressed() {
//   loadJSON("data/tarot_interpretations.json",tarotLoaded);
// }
//
// function tarotLoaded(data) {
//   tarot = data;
//   let foolShadowMeaning = tarot.tarot_interpretations[0].meanings.shadow[0];
//
//   console.log(foolShadowMeaning);
// }

// Part 3


// let tarot;
//
// function setup() {}
//
// function mousePressed() {
//   loadJSON("data/tarot_interpretations.json", tarotLoaded);
// }
//
// function tarotLoaded(data) {
//   tarot = data.tarot_interpretations; // We only want the actual cards
//   makePrediction();
// }
//
// function makePrediction() {
//   let card = random(tarot); // Choose a random card
//   let cardName = card.name; // Get the name
//   let fortune = random(card.fortune_telling); // Choose a random fortune
//   let prediction = `You have chosen ${cardName}! ${fortune}!`; // Make a prediction string
//   console.log(prediction); // Say it
//

//Part 4

let tarot;

function setup() {}

function mousePressed() {
  loadJSON("data/tarot_interpretations.json", tarotLoaded);
}

function tarotLoaded(data) {
  tarot = data.tarot_interpretations; // We only want the actual cards
  for (let i = 0; i < tarot.length; i++) {
    console.log(tarot[i].name);
  }
}




// Part 5


// let jokes; // A place to store the jokes
// function preload() {
//   // Load the jokes by accessing the API endpoint
//   // Jokes will contain an OBJECT with ten jokes in it
//   jokes = loadJSON("https://official-joke-api.appspot.com/jokes/programming/ten");
// }
//
// function setup() {}
//
// function mousePressed() {
//   // Tell a joke when they click
//   tellJoke();
// }
//
// function tellJoke() {
//   // Get an array with the name of each property in the jokes object
//   let keys = Object.keys(jokes);
//   // Choose a random property name (they're actually just numbers, yet it's not an array)
//   let randomKey = random(keys);
//   // Get the joke with that property name
//   let joke = jokes[randomKey];
//   // Get the setup part
//   let jokeSetup = joke.setup;
//   // And the punchline part
//   let jokePunchline = joke.punchline;
//   // Display the setup
//   console.log(jokeSetup);
//   // After a delay of two seconds...
//   setTimeout(function() {
//     // ... display the punchline
//     console.log(jokePunchline);
//   }, 2000);
// }
