// Variables
var min = 1;
var max = 100;
var nGuesses = 0;
var randInt = getRandInt(min, max);
var updateButton = document.querySelector(".article__form__button--update");
var submitButton = document.querySelector(".article__div__button--submit");
var clearButton = document.querySelector(".article__div__button--clear");
var restartButton = document.querySelector(".article__div__button--restart");


// Functions 
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeCard(winner) {
  document.querySelector('.section--right').insertAdjacentHTML('afterbegin', `<article class="article-winner-card">
        <p class="header-for-winner-card">
           <span class="span__challenger1-name">${challengerOne.toUpperCase()}</span> 
              <span class="versus">VS</span>
          <span class="span__challenger2-name">${challengerTwo.toUpperCase()}</span></p>
      <div class="article__div__winner-card">
        <p class="challenge-winner">
          <span class="winning-challenger-name">${winner}</span><br/>
          WINNER
        </p>
      </div>
      <div class="bottom-data-line">
        <p class="bottom-data-line-paragraph"><span class="total-number-guesses">${nGuesses *2}</span> guesses</p>
        <p class="bottom-data-line-paragraph"><span class="total-time-spent"> ${(timer / 60).toFixed(2)}</span> minutes</p>
      <button type="button" class="winner-card-close-button">&times;</button>
    </div>
  </article>`);
}

function setTimer() {
  if (nGuesses === 0) {
    timer = 0;
    timerId = setInterval(function() {timer++;}, 1000);
  }
}

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

function clearName() {
  document.querySelector(".article__paragraph--challenger-1").innerText = "Challenger 1";
  document.querySelector(".article__paragraph--challenger-2").innerText = "Challenger 2";
  document.querySelector(".span--challenger-1").innerText = "Challenger 1";
  document.querySelector(".span--challenger-2").innerText = "Challenger 2";  
}

function resetRange() {
  document.querySelector(".bold--min").innerText = 1;
  document.querySelector(".bold--max").innerText = 100;  
  min = 1;
  max = 100;
}


// Event Listeners
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
  document.querySelector(".span--number-1").innerText = guessOne;
  document.querySelector(".span--number-2").innerText = guessTwo; 
  setTimer()
  nGuesses ++;

  if (guessOne > randInt) {
    document.querySelector(".span--high-low-1").innerText = "that's too high";
  } else if (guessOne < randInt) {
    document.querySelector(".span--high-low-1").innerText = "that's too low";
  } else if (guessOne === randInt) {
    document.querySelector(".span--high-low-1").innerText = "BOOM!";
    clearForm();
    makeCard(challengerOne);
  }

  if (guessTwo > randInt) {
    document.querySelector(".span--high-low-2").innerText = "that's too high";
  } else if (guessTwo < randInt) {
    document.querySelector(".span--high-low-2").innerText = "that's too low";
  } else if (guessTwo === randInt) {
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
  }
  if (nGuesses >= 1) {
    restartButton.disabled = false;
  }
});

clearButton.addEventListener('click', function(){
  clearForm();
  clearLatestGuess();
  clearButton.disabled = true;
})

restartButton.addEventListener('click', function(){
  clearForm();
  clearLatestGuess();
  clearName();
  nGuesses = 0;
  randInt = getRandInt(min, max);
  restartButton.disabled = true;
  clearButton.disabled = true;
})



