//Business Logic
variables

  //for loop
  for (i = 1; 1 <= num; i++) {
    listItems += "<li>";
    //conditional statements
    if ((i % 3 === 0) && (i % 5 === 0)){ //if index is divisible by 3 OR 5
      listItems += "<b>PING-PONG</b>"
    }
    else if (i % 3 === 0) { //if index is divisible by 3
      listItems += "<b>PING</b>"
    }
    else if (i % 5 === 0) { //if index is divisible by 5
      listItems += "<b>PONG</b>"
    }
    else if (i % 18 === 0) { //if index is divisible by 18 
      listItems += "<b>**PEPPERCORN PING-PONG**PEPPERCORN PING-PONG**PEPPERCORN PING-PONG**</b>"
    }
    else {
      listItems += i;
    }
    listItems += "</li>";
  }

//User Interface Logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
  });
});
