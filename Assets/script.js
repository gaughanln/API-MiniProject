// create global variables
var startBtn = document.querySelector(".start-button");
var resetBtn = document.querySelector(".reset-button");
var wins = document.querySelector(".win");
var loss = document.querySelector(".lose");
var timer = document.querySelector("timer-count");
var wordBlanks = document.querySelector(".word-blanks");
var words = ["javascript", "array", "consolelog", "readme", "string"];

var choice = "";
var numBlank

// find code of project when we click the box and it appears (visible) and not to make some letters dissapear

function startgame() {
  var start = words[Math.floor(Math.random() * words.length)];
  console.log(start);

  wordGame.textContent = start;
  // string split() will break every piece of your word
}

function restartgame() {

}

// addEventlistener
startBtn.addEventListener("click", startgame);
resetBtn.addEventListener("click", restartgame);