var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    $('#solution').empty();
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });

  $('#calculator').submit(function(event) {
    event.preventDefault();
    var operation = $("#operation").val();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var simpleCalculator = new Calculator("hot pink", num1, num2);
    console.log(simpleCalculator);
    $('#solution').empty();
    if (operation === "add"){
      $('#solution').append(simpleCalculator.add());
    } else if (operation === "subtract"){
      $('#solution').append(simpleCalculator.subtract());
    } else if(operation === "divide"){
      $('#solution').append(simpleCalculator.divide());
    } else if(operation === "multiply"){
      $('#solution').append(simpleCalculator.multiply());
    }
  });
});
