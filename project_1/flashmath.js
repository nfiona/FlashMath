
function startGame() {

var userAnswer = $('#answer');
var userInput = $('#input');

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


 var clearFields = function() {

     document.getElementById("input").value = "";
};


var next = function() {
  if (userInput.val() == qBank[0].answer) {
    document.getElementById('question').innerHTML = qBank[1].question;
    clearFields();
  }
    if (userInput.val() == qBank[1].answer) {
      document.getElementById('question').innerHTML = qBank[2].question;
      clearFields();

    }
      if (userInput.val() == qBank[2].answer) {
        document.getElementById('question').innerHTML = qBank[3].question;
        clearFields();
    }
      if (userInput.val() == qBank[3].answer) {
        document.getElementById('question').innerHTML = qBank[4].question;
        clearFields();
      }
      if (userInput.val() == qBank[4].answer) {
        document.getElementById('question').innerHTML = qBank[5].question;
        clearFields();
  }
   if (userInput.val() == qBank[5].answer) {
    alert("GREAT JOB!!");
    clearFields();
    startGame();
}
}

userAnswer.on("click", function(){
  next();
});

}
startGame();

/*userInput.keypress(function(){
  next();
});*/

/*userAnswer.on("click", function(){
  if (userInput.val() === "30") {
    next();
  }
})    /*if (userInput.val() === "45")
    }


  } else {
    alert("Sorry, try again");
  }
});*/
