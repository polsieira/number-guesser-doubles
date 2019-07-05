// Generate Random Number
// Update Max and Min in Current Range

// Function for calculating random integer
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Default random number in case user doesn't choose range
var min = 1;
var max = 100;
var randInt = getRandInt(min, max);

var updateButton = document.querySelector(".article__form__button--update");

updateButton.addEventListener('click', function(){ 
  var min = parseInt(document.querySelector(".article__form__input--min-range").value);
  var max = parseInt(document.querySelector(".article__form__input--max-range").value);
  document.querySelector(".bold--min").innerText = min;
  document.querySelector(".bold--max").innerText = max;
  document.querySelector(".article__form__input--min-range").value = "";
  document.querySelector(".article__form__input--max-range").value = "";
  randInt = getRandInt(min, max);
})

console.log("random = " + randInt)

// Populate Challenger Names, Guesses, and Messages
var submitButton = document.querySelector(".article__div__button--submit");
var nGuesses = 0;

submitButton.addEventListener('click', function(){
  // Populate Names and Guesses
  challengerOne = document.querySelector(".article__form__input--nameOne").value;
  challengerTwo = document.querySelector(".article__form__input--nameTwo").value;
  guessOne = Math.round(parseInt(document.querySelector(".article__form__input--guessOne").value));
  guessTwo = Math.round(parseInt(document.querySelector(".article__form__input--guessTwo").value));
  document.querySelector(".article__paragraph--challenger-1").innerText = challengerOne;
  document.querySelector(".article__paragraph--challenger-2").innerText = challengerTwo;
  document.querySelector(".span--challenger-1").innerText = challengerOne;
  document.querySelector(".span--challenger-2").innerText = challengerTwo;
  document.querySelector(".span__challenger1-name").innerText = challengerOne.toUpperCase();
  document.querySelector(".span__challenger2-name").innerText = challengerTwo.toUpperCase();
  document.querySelector(".span--number-1").innerText = guessOne;
  document.querySelector(".span--number-2").innerText = guessTwo; 
  //Start timer
  if (nGuesses === 0) {
    timer = 0;
    timerId = setInterval(function() {timer++;}, 1000);
  } 
  // Increment nGuesses
  nGuesses ++;
  console.log(nGuesses)
  // Populate message
function makeCard(winner) {
  document.querySelector('.winning-challenger-name').innerText = winner.toUpperCase();
  document.querySelector('.total-number-guesses').innerText = nGuesses;
  nGuesses = 0;
  document.querySelector('.total-time-spent').innerText = (timer / 60).toFixed(2);
  clearInterval(timerId);
  document.querySelector('.article-winner-card').classList.remove('hidden');
}

  if (guessOne > randInt) {
    document.querySelector(".span--high-low-1").innerText = "that's too high";
  } else if (guessOne < randInt) {
    document.querySelector(".span--high-low-1").innerText = "that's too low";
  } else {
    document.querySelector(".span--high-low-1").innerText = "BOOM!";
    clearForm();
    makeCard(challengerOne);
  }

  if (guessTwo > randInt) {
    document.querySelector(".span--high-low-2").innerText = "that's too high";
  } else if (guessTwo < randInt) {
    document.querySelector(".span--high-low-2").innerText = "that's too low";
  } else {
    document.querySelector(".span--high-low-2").innerText = "BOOM!"
    clearForm();
    makeCard(challengerTwo);
  }
  // Enable disable button
  if (document.querySelector(".article__form__input--guessOne").value === "" && document.querySelector(".article__form__input--guessTwo").value === "" && document.querySelector(".article__form__input--nameOne").value === "" && document.querySelector(".article__form__input--nameTwo").value === "") {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  // Enable restart button
  if (nGuesses >= 1) {
    restartButton.disabled = false;
  }

  }
})

// Clear Challenger Names and Guesses
var clearButton = document.querySelector(".article__div__button--clear");

function clearForm() {
  document.querySelector(".article__form__input--nameOne").value = "";
  document.querySelector(".article__form__input--nameTwo").value = "";
  document.querySelector(".article__form__input--guessOne").value = "";
  document.querySelector(".article__form__input--guessTwo").value = "";
}

function clearLatestGuess() {
  document.querySelector(".span--high-low-1").innerText = "";
  document.querySelector(".span--high-low-2").innerText = "";  
  document.querySelector(".span--number-1").innerText = "";  
  document.querySelector(".span--number-2").innerText = "";  
}

clearButton.addEventListener('click', function(){
  clearForm();
  clearLatestGuess();
  clearButton.disabled = true;
})
// Restart Game Button
var restartButton = document.querySelector(".article__div__button--restart");

restartButton.addEventListener('click', function(){
  clearForm();
  clearLatestGuess();
  nGuesses = 0;
  randInt = getRandInt(min, max);
  restartButton.disabled = true;
  clearButton.disabled = true;
})



