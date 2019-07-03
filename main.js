// Generate Random Number
// Update Max and Min in Current Range

function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var updateButton = document.querySelector(".article__form__button--update");

updateButton.addEventListener('click', function(){ 
  var min = parseInt(document.querySelector(".article__form__input--min-range").value);
  var max = parseInt(document.querySelector(".article__form__input--max-range").value);
  document.querySelector(".bold--min").innerText = min;
  document.querySelector(".bold--max").innerText = max;
  document.querySelector(".article__form__input--min-range").value = "";
  document.querySelector(".article__form__input--max-range").value = "";
  console.log("min = " + min)
  console.log("max = " + max)
  var randInt = getRandInt(min, max);
  console.log("random = " + randInt)
})

// Populate Challenger names and guesses
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
  document.querySelector(".article__form__input--nameOne").value = "";
  document.querySelector(".article__form__input--nameTwo").value = "";
  document.querySelector(".article__form__input--guessOne").value = "";
  document.querySelector(".article__form__input--guessTwo").value = "";
})
