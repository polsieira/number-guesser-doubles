// Generate Random Number
// Update Max and Min in Current Range

function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var updateButton = document.querySelector(".article__form__button--update");
var randInt = null;

updateButton.addEventListener('click', function(){ 
  var min = document.querySelector(".article__form__input--min-range").value;
  var max = document.querySelector(".article__form__input--max-range").value;
  document.querySelector(".bold--min").innerText = min;
  document.querySelector(".bold--max").innerText = max;
  document.querySelector(".article__form__input--min-range").value = "";
  document.querySelector(".article__form__input--max-range").value = "";
  console.log("min = " + min)
  console.log("max = " + max)
  var randInt = getRandInt(min, max);
  console.log("random = " + randInt)
})

