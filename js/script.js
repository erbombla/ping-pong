//Business Logic
var userInput = parseInt($("input#userInput").val());
var total = 0;

//User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    //for loop
    for (var i = 1; i <= total; i++) {
      //conditional statements
      if ((i % 3 === 0 && i % 5 === 0)) { //if index is divisible by 3 OR 5
        ("<b>PING-PONG</b>");
      }
      else if (i % 3 === 0) { //if index is divisible by 3
        ("**PING**");
      }
      else if (i % 5 === 0) { //if index is divisible by 5
        ("**PONG**");
      }
      else if (i % 18 === 0) { //if index is divisible by 18
        ("**PEPPERCORN PING-PONG**PEPPERCORN PING-PONG**");
      }

    $("div#result").show();
      $("ul#result-list").append("<li>" + total + "</li>");
    }
  });
});
