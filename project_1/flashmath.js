
function startGame() {

var userAnswer = $('#answer');
var userInput = $('#input');

// Created a variable to hold all the math questions, which will be improved by incorporating Math.random() function (further research and study needed):
var qBank = [

  {question: " 5 x 6 ?",
   answer: 30},

  {question: " 3 x 15 ? ",
  answer:45
},
 {question: " 22 x 100 ?",
 answer: 2200
},
 {question:"33 x 3 ?",
answer:99
},
{question:"33 x 2 ?",
answer:66
},
{question:"25 x 6 ?",
answer:150
}
];


function clearFields() {

     document.getElementById("input").value = "";
};

// Created the below codes when attempted to create a function to keep track of score, however was stuck and coldn't seem to figure out why
// Once the function's codes are figured out, it should be placed under the clearFields() function nested in each IF condition.
/*

function score() {
  var x = 0
  for (x = 0; x <= qBank.length; x++) {
  document.getElementById("track").innerHTML = x + 1;
}
}
*/

var next = function() {
  if (userInput.val() == qBank[0].answer) {
    document.getElementById('question').innerHTML = qBank[1].question;
    clearFields();
    score();

}
    if (userInput.val() == qBank[1].answer) {
      document.getElementById('question').innerHTML = qBank[2].question;
      clearFields();
      score();

    }
      if (userInput.val() == qBank[2].answer) {
        document.getElementById('question').innerHTML = qBank[3].question;
        clearFields();
        score();
    }
      if (userInput.val() == qBank[3].answer) {
        document.getElementById('question').innerHTML = qBank[4].question;
        clearFields();
        score();
      }
      if (userInput.val() == qBank[4].answer) {
        document.getElementById('question').innerHTML = qBank[5].question;
        clearFields();
        score();
  }
   if (userInput.val() == qBank[5].answer) {
    alert("GREAT JOB!!");
    clearFields();
    document.getElementById('question').innerHTML = qBank[0].question;

}
}
//event  caller to invoke the next() function when the Answer button is clicked.
userAnswer.on("click", function(){
  next();
});

//event  caller to invoke the next() function when the Enter key is pressed.
$('#input').keypress(function(e) {
  if (e.which == '13') {
     e.preventDefault();
     next();
   }
});


}
startGame();
