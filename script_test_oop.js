
function onReady() {

  var startGame = new Game();
}

// Start timer on click.
$('#startButton').on("click", function() {
  var fiveMinutes = 60 * 1,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
  document.getElementById('input').style.display = "block";

});

// Restart game.
$('#restartButton').on("click", function() {
  window.location.href=window.location.href;
})

// Set timer
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  console.log(duration);

  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes > 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;
      // time turns red when it hits 10 seconds left.
      if (timer < 11) {
        document.getElementById('time').style.color = "red";
      };
      // time out functionalities.
      if (--timer < 0) {
          timer = 0;
          document.getElementById('input').style.display = "none";
          document.getElementById('startButton').style.display = "none";
          document.getElementById('restartButton').style.display = "block";
      }
  }, 1000);
}



var userInput = $('#input');
var userAnswer = $('#answer');
var num1 = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
var num2 =  Math.floor(Math.random() * (8 - 3 + 1)) + 3;
var operator1 = num1 * num2;
var operator2 = num1 + num2;
var operator3 = num1 - num2;
var operators = [operator1, operator2, operator3];
var random = Math.floor(Math.random() * operators.length + 0);
var questionA;
var empty = NaN;
var score = 0;
var matched = operators[random];


// set randomized questions at start of game.
function setQuestion(n) {
  questionA = n;
  operators = [operator1, operator2, operator3];
  random = Math.floor(Math.random() * operators.length + 0);
  initialQ = document.getElementById("question");

  if (operators[random] === operators[0]) {
    // console.log("operator1 is used");
    operator = num1 * num2;
    console.log(num1 + " x " + num2);
    n = num1 + " x " + num2;
    questionA = n;
    initialQ.innerHTML = n;

  } else if (operators[random] === operators[1]) {
    // console.log("operator2 is used");
    operator = num1 + num2;
    console.log(num1 + " + " + num2);
    n = num1 + " + " + num2;
    questionA = n;
    initialQ.innerHTML = n;
  } else if (operators[random] === operators[2]) {
    // console.log("operator3 is used");
    console.log(num1 + " - " + num2);
    operator = num1 - num2;
    n = num1 + " - " + num2;
    questionA = n;
    initialQ.innerHTML = n;
  }

  return operators[random];

};

// Set initial question
setQuestion(questionA);

// Game main function, automatic random number generator and score keeping.
Game = function() {
    //  check if answer is correct or wrong.
    if (parseInt(userInput.val()) !== operator){
    Game.prototype.wrong();
  } else if (parseInt(userInput.val()) === operator) {
    Game.prototype.correct();
    //set new random numbers
    num1 = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
    num2 = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    // update question based on new random numbers
    setQuestion(questionA);
  };
};

// Method for correct answer.
Game.prototype.correct = function() {
  console.log("nice");
  // keep/ change color back to white.
  document.getElementById('question').style.color = "white";
  // clear fields after each answer.
  userInput.val("");
  // add score.
  score++
  // display new score.
  $("#show-score").html(score);
};

// Method for wrong answer.
Game.prototype.wrong = function() {
  userInput.val("");
  document.getElementById('question').style.color = "red";
  // console.log('wrong');
};

// onClick event handler.
userAnswer.on("click", function(){
  // var userInput = $('#input');
  console.log(parseInt(userInput.val()));
  Game();
})

//  presskey event handler ("enter").
userInput.keypress(function(e) {
  if(e.which == 13) {
    Game();
  }
})


window.onload = onReady;
