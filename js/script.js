//Business Logic
var myNum = function(num) {
  //for loop
  for (num = 1; num <= input; num++) {
    //conditional statements
    if ((num % 3 === 0 && num % 5 === 0)) { //if num is divisible by 3 OR 5
      "<b>PING-PONG</b>"
    }
    else if (num % 3 === 0) { //if num is divisible by 3
      "<b>PING</b>"
    }
    else if (i % 5 === 0) { //if num is divisible by 5
      "<b>PONG</b>"
    }
    else if (i % 18 === 0) { //if num is divisible by 18
      "<b>**PEPPERCORN PING-PONG**PEPPERCORN PING-PONG**PEPPERCORN PING-PONG**</b>"
    }
  };

//User Interface Logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var myNum = parseInt($("input#myNum").val());
    var total = 0;
    $("div#results").show();
    $("ul#result-list").append("<li>" + total + "</li>");
  });
});
