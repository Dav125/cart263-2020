"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);


function setup() {
$(document).on ('click',talk)


}

function talk(){
  responsiveVoice.speak("Come back", "UK English Male", {
    pitch: 0.11111,
    rate: 1.2,

  });
}
