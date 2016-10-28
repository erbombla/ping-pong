//User Interface Logic
$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
  });
});

function playPong(userInput) {
  var array = [];
    //for loop
    for (i = 1; i <= userInput; i++) {
      //conditional statements
      if ((i % 3 === 0 && i % 5 === 0)) { //if index is divisible by 3 OR 5
        array.push("**PING-PONG**"); //add message to the end
      }
      else if (i % 3 === 0) { //if index is divisible by 3
        array.push("**PING**");
      }
      else if (i % 5 === 0) { //if index is divisible by 5
        array.push("**PONG**");
      }
      else if (i % 18 === 0) { //if index is divisible by 18
        array.push("**PEPPERCORN PING-PONG**PEPPERCORN PING-PONG**");
      }
      else {
        array.push(i);
      }
    }
  return array;
}
