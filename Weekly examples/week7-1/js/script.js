"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let frequencies = [
  220.00,
  246.94,
  277.18,
  293.66,
  329.63,
  369.99,
  415.30
];

let pattern = [
  'x',
  '*',
  'xo',
  ' ',
  'x',
  'xo',
  ',',
  '*'
];

let beat  = 0;


let synth = new Pizzicato.Sound({
  source:'wave',

});
let kick = new Pizzicato.Sound('assets/sounds/kick.wav');
let snare = new Pizzicato.Sound('assets/sounds/snare.wav');
let hihat= new Pizzicato.Sound('assets/sounds/hihat.wav');

function setup(){

}

function moussePressed(){
  setInterval(playNote, 500);
}

function playNote(){
  let note = frequencies[Math.floor(Math.random()*frequencies.length)];
  synth.frequency = note;
  synth.play();
}

function playDrum(){
  let symbols = pattern[beat];
  if (symbols.includes('x')) {
    kick.play();
  }
  if (symbols.includes('o')) {
    snare.play();
  }
  if (symbols.includes('*')) {
    hihat.play();
  }
beat++;
if ()
}
