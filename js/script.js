//User Interface Logic
$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    $("div#result").show();
    $("ul#result-list").append("<li>" + total + "</li>");
  });
});

//Buisness Interface Logic
  var userInput = parseInt($("input#userInput").val());
  var range = [];
  var total = 0;
    //for loop
    for (var i = 1; i <= range; index++) {
      total += userInput;
      //conditional statements
      if ((i % 3 === 0 && i % 5 === 0)) { //if index is divisible by 3 OR 5
        range.push("**PING-PONG**"); //add message to the end
      }
      else if (i % 3 === 0) { //if index is divisible by 3
        range.push("**PING**");
      }
      else if (i % 5 === 0) { //if index is divisible by 5
        range.push("**PONG**");
      }
      else if (i % 18 === 0) { //if index is divisible by 18
        range.push("**PEPPERCORN PING-PONG**PEPPERCORN PING-PONG**");
      }
      else {
        range.push(i); //final result
      }
  }
