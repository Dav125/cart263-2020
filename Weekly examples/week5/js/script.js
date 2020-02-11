"use strict";


let state = "START";

$(document).ready(setup);

function setup() {
  $('#start').show();
  $('#game').hide();

  $(document).one('click', startGame);
}

function startGame() {
  state = "GAME";

  $('#start').hide();
  $('#game').show();

  $('#clown').resizable({
    stop: unresize
  });

  $(document).on('keydown', moveClown);
}

function moveClown(e) {
  if (e.keyCode === 39) {
    console.log("hello")
    $('#clown').parent().animate({
      left: '+=50px'
    });
  }
  else if (e.keyCode === 37) {
    console.log("hello")
    $('#clown').parent().animate({
      left: '-=50px'
    });
  }
}

function unresize() {
  $('#clown').css({
    width: '200px',
    height: '200px'
  });
}
