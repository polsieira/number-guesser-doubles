// Generate Random Number
// Update Max and Min in Current Range

function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var updateButton = document.querySelector(".article__form__button--update");
var randInt = null;

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

// Populate Challenger Names and Guesses
var submitButton = document.querySelector(".article__div__button--submit");

submitButton.addEventListener('click', function(){
  challengerOne = document.querySelector(".article__form__input--nameOne").value;
  challengerTwo = document.querySelector(".article__form__input--nameTwo").value;
  guessOne = parseInt(document.querySelector(".article__form__input--guessOne").value);
  guessTwo = parseInt(document.querySelector(".article__form__input--guessTwo").value);
  document.querySelector(".article__paragraph--challenger-1").innerText = challengerOne;
  document.querySelector(".article__paragraph--challenger-2").innerText = challengerTwo;
  document.querySelector(".span--challenger-1").innerText = challengerOne;
  document.querySelector(".span--challenger-2").innerText = challengerTwo;
  document.querySelector(".span--number-1").innerText = guessOne;
  document.querySelector(".span--number-2").innerText = guessTwo;  


  if (guessOne > randInt) {
    document.querySelector(".span--high-low-1").innerText = "that's too high";
  } else if (guessOne < randInt) {
    document.querySelector(".span--high-low-1").innerText = "that's too low";
  } else {
    document.querySelector(".span--high-low-1").innerText = "BOOM!";
  }

  if (guessTwo > randInt) {
    document.querySelector(".span--high-low-2").innerText = "that's too high";
  } else if (guessTwo < randInt) {
    document.querySelector(".span--high-low-2").innerText = "that's too low";
  } else {
    document.querySelector(".span--high-low-2").innerText = "BOOM!";
  }

  if (document.querySelector(".article__form__input--guessOne").value === "" && document.querySelector(".article__form__input--guessTwo").value === "" && document.querySelector(".article__form__input--nameOne").value === "" && document.querySelector(".article__form__input--nameTwo").value === "") {
  clearButton.disabled = true;
  } else {
  clearButton.disabled = false;
  }
})

// Clear Challenger Names and Guesses
var clearButton = document.querySelector(".article__div__button--clear");

clearButton.addEventListener('click', function(){
  document.querySelector(".article__form__input--nameOne").value = "";
  document.querySelector(".article__form__input--nameTwo").value = "";
  document.querySelector(".article__form__input--guessOne").value = "";
  document.querySelector(".article__form__input--guessTwo").value = "";
  document.querySelector(".span--high-low-1").innerText = "";
  document.querySelector(".span--high-low-2").innerText = "";  
  document.querySelector(".span--number-1").innerText = "";  
  document.querySelector(".span--number-2").innerText = "";  
  clearButton.disabled = true;
})