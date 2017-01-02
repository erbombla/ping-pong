(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName, num1, num2) {
  this.skin = skinName;
  this.num1 = num1;
  this.num2 = num2;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
    for (var i = 1; i <= goal; i++) {
      if (i % 15 === 0) {
        output.push("PING-PONG");
    } else if (i % 3 === 0) {
        output.push("PING");
    } else if (i % 5 === 0) {
        output.push("PONG");
    }  else {
        output.push(i);
    }
  }
  return output;
};

Calculator.prototype.add = function (){
  return this.num1 + this.num2;
}
Calculator.prototype.subtract = function (n1, n2){
  return this.num1 - this.num2;
}
Calculator.prototype.multiply = function (n1, n2){
  return this.num1 * this.num2;
}
Calculator.prototype.divide = function (n1, n2){
  return this.num1 / this.num2;
}

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

},{"./../js/pingpong.js":1}]},{},[2]);
