"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
$(document).ready(function() {
$('#question').dialog({
buttons: {
  "Good": function() {
    $(this).dialog('close');
  },
  "Bad": function() {
    $(this).parent().effect('shake');
  }
}
});
});
