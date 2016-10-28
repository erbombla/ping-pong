$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    var myNum = parseInt($("input#myNum").val());
    var total = 0

    if (isNaN(myNum) === true || isNaN(stopNum) === true) {
      alert("Please enter a number");
    }
    else {

      for (var startNum = 0; total < stopNum; startNum +- 0) {
        total += myNum;

        $("div#result").show();
        $("ul#result-list").append("<li>" + total + "</li>");
        // console.log(total);
      }
    }
    event.preventDefault();
  });
});
