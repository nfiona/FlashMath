/*var kittenOneHolder = $('#kittenOne')
var kittenTwoHolder = $('#kittenTwo')
var baconOneHolder = $('#baconOne')*/


var getCardOne = $('#cardOne');

getCardOne.on("click",function() {
  $("#kittenOne").toggleClass("clicked");
});


var getCardTwo = $('#cardTwo');

getCardTwo.on("click",function() {
  $("#kittenTwo").toggleClass("clicked");

});

var getCardThree = $('#cardThree');

getCardThree.on("click",function() {
  $("#baconOne").toggleClass("clicked");
});

var getCardFour = $('#cardFour');

getCardFour.on("click",function() {
  $("#spaceOne").toggleClass("clicked");
});

var getCardFive = $('#cardFive');

getCardFive.on("click",function() {
  $("#baconTwo").toggleClass("clicked");
});

var getCardSix = $('#cardSix');

getCardSix.on("click",function() {
  $("#spaceTwo").toggleClass("clicked");
});
