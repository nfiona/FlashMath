
function randomize() {

num1 = Math.floor(Math.random() * 5);
num2 = Math.floor(Math.random() * 5);
operator1 = num1 * num2;
operator2 = num1 + num2;
operator3 = num1 - num2;
operator4 = num2 - num1;

operators = [operator1, operator2, operator3, operator4];
random = Math.floor(Math.random() * operators.length + 0);

  if (operators[random] === operators[0]) {
    console.log("operator1 is used");
    console.log(num1 + " x " + num2);
  } else if (operators[random] === operators[1]) {
    console.log("operator2 is used");
    console.log(num1 + " + " + num2);
  } else if (operators[random] === operators[2]) {
    console.log("operator3 is used");
    console.log(num1 + " - " + num2);
  } else if (operators[random] === operators[3]) {
    console.log("operator4 is used");
    console.log(num2 + " - " + num1);

  }
  return operators[random];
}
randomize();

// Creating Levels class and its inheritance
function Levels(b,c) {
  a = 0;
  this.b = Math.floor(Math.random() * (a+b) );
  this.c = Math.floor(Math.random() * (a+c) );
}


var levelOne = new Levels(5,5);

var levelTwo = new Levels(10,10);
