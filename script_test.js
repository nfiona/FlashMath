
var userInput = $('#input');
var userAnswer = $('#answer');
var randomNumA = Math.floor(Math.random() * 10 + 1);
var randomNumB = Math.floor(Math.random() * 10 + 1);
var multiply = randomNumA * randomNumB;
var add = randomNumA + randomNumB;
var substract = randomNumA - randomNumB;
var division = randomNumA / randomNumB;
var question = randomNumA + " x " + randomNumB + "?";
var score = 0;

// set randomized questions at start of game.
$("#question").html(question);

// function for wrong answers.
function wrong() {
        // clear fields after each answer.
      userInput.val("");
        // change font to red.
      document.getElementById('question').style.color = "red";
}

// game main function, automatic random number generator and score keeping.
function next() {
          // convert answer to integer then check if answer is correct.
      if (parseInt(userInput.val()) !== multiply ){
        wrong();
      }
        if (parseInt(userInput.val()) === multiply ) {
            console.log("nice");
            // keep/ change color back to white.
            document.getElementById('question').style.color = "white";
               // clear fields after each answer.
               userInput.val("");
               // set new random numbers.
                  randomNumA = Math.floor(Math.random() * 10 + 1);
                  randomNumB = Math.floor(Math.random() * 10 + 1);
              // update question with new random numbers.
                    document.getElementById('question').innerHTML = randomNumA + " x " + randomNumB;
              // update result.
                 multiply = randomNumA * randomNumB;
              // add score.
              score++
              // display new score.
              $("#show-score").html(score);
          }
          if (score === 2) {
            document.getElementById('question').style.color = "blue";
            // code to go to next level
          }
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
