
function onReady() {


  var startGame = new Game();

}

$('#startButton').on("click", function() {
  var fiveMinutes = 60 / 2,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
  document.getElementById('input').style.display = "block";

})


var q = document.getElementById('question');
var userInput = $('#input');
var userAnswer = $('#answer');
var randomNumA = Math.floor(Math.random() * 10 + 1);
var randomNumB = Math.floor(Math.random() * 10 + 1);
var multiply = randomNumA * randomNumB;
var add = randomNumA + randomNumB;
var substract = randomNumA - randomNumB;
var division = randomNumA / randomNumB;
var questionA = randomNumA + " x " + randomNumB + "?";
var questionB = randomNumA + " + " + randomNumB + "?";
var score = 0;
var empty = NaN;

// set randomized questions at start of game.
function setQuestion(n) {
  var initialQ = document.getElementById("question");
  initialQ.innerHTML = n;
};
setQuestion(questionA);


// game main function, automatic random number generator and score keeping.
Game = function() {
  //  check if answer is correct or wrong.
        if (parseInt(userInput.val()) !== multiply){
          Game.prototype.wrong();
        };
         if (parseInt(userInput.val()) === multiply  ) {
          Game.prototype.correct();
        };
};


Game.prototype.wrong = function() {
  userInput.val("");
  document.getElementById('question').style.color = "red";
  console.log('wrong');

}

Game.prototype.correct = function() {
  console.log("nice");
  // keep/ change color back to white.
  document.getElementById('question').style.color = "white";
  // clear fields after each answer.
  userInput.val("");
   // set new random numbers.
  var randomNumA = Math.floor(Math.random() * 10 + 1);
  var randomNumB = Math.floor(Math.random() * 10 + 1);

  // update question with new random numbers.
  document.getElementById('question').innerHTML = randomNumA + " x " + randomNumB;
  // update result.
  multiply = randomNumA * randomNumB;
  // add score.
  score++
  // display new score.
  $("#show-score").html(score);
}


// on click event handler.
userAnswer.on("click", function(){
  // var userInput = $('#input');
  console.log(parseInt(userInput.val()));
  Game();
})

// "enter" presskey event handler.
userInput.keypress(function(e) {
  if(e.which == 13) {
    Game();
  }
})

// Set timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    console.log(duration);

    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            document.getElementById('input').style.display = "none";
        }
    }, 100);
}



window.onload = onReady;
