

randomize = function() {

var matched = operators[random];


var num1 = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
var num2 =  Math.floor(Math.random() * (12 - 5 + 1)) + 5;
var operator1 = num1 * num2;
var operator2 = num1 + num2;
var operator3 = num1 - num2;

operators = [operator1, operator2, operator3];
random = Math.floor(Math.random() * operators.length + 0);

  if (operators[random] === operators[0]) {
    console.log("operator1 is used");
    // console.log(num1 + " x " + num2);
    problem = num1 + " x " + num2;
  } else if (operators[random] === operators[1]) {
    console.log("operator2 is used");
    console.log(num1 + " + " + num2);
  } else if (operators[random] === operators[2]) {
    console.log("operator3 is used");
    console.log(num1 + " - " + num2);
  }
  if(operators[random] === match) {
    console.log("match!");
  }
  // actual answer
  return operators[random];

};
randomize();


// formula to generate numbers between two numbers - can make function with this later
// Math.floor(Math.random() * (max - min + 1)) + min;

// Creating Levels class and its inheritance
      // function Levels(b,c) {
      //   a = 0;
      //   this.b = Math.floor(Math.random() * (a+b) );
      //   this.c = Math.floor(Math.random() * (a+c) );
      // }
      //
      //
      // var levelOne = new Levels(5,5);
      //
      // var levelTwo = new Levels(10,10);
