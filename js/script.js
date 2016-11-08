//Buisness Interface Logic
  var pingPong = function(number) {
    arr = [];
      for (var i = 1; i <= number; i++) {
        if (i % 15 === 0) {
        arr.push("**PING-PONG**");
      } else if (i % 3 === 0) {
        arr.push("**PING**");
      } else if (i % 5 === 0) {
        arr.push("**PONG**");
      }  else {
        arr.push(i)
      }
    }
    return arr;
  }

  //User Interface Logic
  $(document).ready(function() {
    $("form#pingPong").submit(function(event) {
      event.preventDefault();
      var userInput = parseInt($(input).val());
      var result = pingPong(userInput);
      var number = ($("input#number").val());
      arr.forEach(function(number) {
      $("ul#result-list").text(arr);                                                                                                                                            (number);
      });
    });
  });
