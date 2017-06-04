
var userInput = $('#input');
var userAnswer = $('#answer');

// Creating Levels class and its new instance for each level.
var score = 0;
function Levels(b,c,d) {
  a = 0;
  this.b = Math.floor(Math.random() * (a+b) + d );
  this.c = Math.floor(Math.random() * (a+c) + d );
  // store different math problems in variables.
  var operator1 = this.b * this.c;
  var operator2 = this.b + this.c;
  var operator3 = this.b - this.c;
  // array of different math problems.
  var operators = [operator1, operator2, operator3];
  // pull random math problem from operators array.
  var random = Math.floor(Math.random() * operators.length + 0);

  Levels.prototype.randomize = function() {
    if (operators[random] === operators[0]) {
        return operators[random];
    } else if (operators[random] === operators[1]) {
        return operators[random];
    } else if (operators[random] === operators[2]) {
        return operators[random];
    }

};
    // Pull questions based on randomized numbers.
  Levels.prototype.question = function() {
    if (operators[random] === operators[0]) {
          var question1 = this.b + " x " + this.c;
          return question1;
        } else if (operators[random] === operators[1]) {
          var question2 = this.b + " + " + this.c;
          return question2;
        } else if (operators[random] === operators[2]) {
          var question3 = this.b + " - " + this.c;
          return question3
        }

  };
  // add Score.
  Levels.prototype.addScore = function() {
      score += 10;
      console.log(score);
    };
}

var levelOne = new Levels(10,10,5);
var levelTwo = new Levels(5,5,1);
var result = levelOne.randomize();
var score = 0;

// set randomized questions at start of game. UPDATE WITH levelOne.question();
$("#question").html(levelOne.question());

// function for wrong answers.
function wrong() {
        // clear fields after each answer.
      userInput.val("");
        // change font to red.
      document.getElementById('question').style.color = "red";
}

// game main function, automatic random number generator and score keeping.
function next() {
          // convert answers to integer then check if answer is correct.
      if (parseInt(userInput.val()) !== result){
        wrong();
      }
        if (parseInt(userInput.val()) === result) {
           // replace with levelOne.randomized() to line 105.
            console.log("nice");
            console.log(levelOne.randomize())
            // keep/ change color back to white.
            document.getElementById('question').style.color = "white";
               // clear fields after each answer.
               userInput.val("");
               // set new random numbers.

              // update question with new random numbers.
                    document.getElementById('question').innerHTML = levelOne.question();
              // update result.
                    result = levelTwo.randomize();
              // add score.
              score++
              // display new score.
              $("#show-score").html(score);
          }
          // if (score === 2) {
          //   document.getElementById('question').style.color = "blue";
          //   // code to go to next level
          // }
}

// on click event handler.
userAnswer.on("click", function(){
  console.log(userInput.val());
  next();
})

// "enter" presskey event handler.
userInput.keypress(function(e) {
  if(e.which == 13) {
    next();
    console.log("press key is working");
  }
})
