
var userInput = $('#input');
var userAnswer = $('#answer');

var randomNumA = Math.floor(Math.random() * 10 + 1);
var randomNumB = Math.floor(Math.random() * 10 + 1);
var multiply = randomNumA * randomNumB;
var question = randomNumA + "x" + randomNumB + "?";
var score = 0;

// set randomized questions.
$("#question").html(question);


var next = function() {

      // convert answer to integer then check if answer is correct.
  if (parseInt(userInput.val()) !== multiply ){
    console.log("try again");
      // clear fields after each answer.
    userInput.val("");

  }
  if (parseInt(userInput.val()) === multiply ) {
      console.log("nice");
         // clear fields after each answer.
         userInput.val("");
         // set new random numbers.
            randomNumA = Math.floor(Math.random() * 10 + 1);
            randomNumB = Math.floor(Math.random() * 10 + 1);
        // update question with new random numbers.
              document.getElementById('question').innerHTML = randomNumA + "x" + randomNumB;
        // update result.
           multiply = randomNumA * randomNumB;
        // add score.
        score++
      console.log("your score is " + score);
    }

}

userAnswer.on("click", function(){
  console.log(userInput.val());
  next();
})
