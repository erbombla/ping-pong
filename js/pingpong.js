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
