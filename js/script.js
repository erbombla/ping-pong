//Business Logic

//Setup empty array?

function
  //for loop
  for (i = 1; i <= input; i++) {
    //conditional statements
    if ((i % 3 === 0 && num % 5 === 0)) { //if index is divisible by 3 OR 5
      counter.push("<b>PING-PONG</b>");
    }
    else if (i % 3 === 0) { //if index is divisible by 3
      counter.push("**PING**");
    }
    else if (i % 5 === 0) { //if index is divisible by 5
      counter.push("**PONG**");
    }
    else if (i % 18 === 0) { //if index is divisible by 18
      counter.push("**PEPPERCORN PING-PONG**PEPPERCORN PING-PONG**");
    }
  }
};

//User Interface Logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
  });
});
