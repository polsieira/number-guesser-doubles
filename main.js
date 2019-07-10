// Variables
var min = 1;
var max = 100;
var nGuesses = 0;
var cardIndex = 0;
var randInt = getRandInt(min, max);
var minInput = document.querySelector(".article__form__input--min-range");
var maxInput = document.querySelector(".article__form__input--max-range");
var minDisplay = document.querySelector(".bold--min");
var maxDisplay = document.querySelector(".bold--max");
var updateButton = document.querySelector(".article__form__button--update");
var submitButton = document.querySelector(".article__div__button--submit");
var clearButton = document.querySelector(".article__div__button--clear");
var restartButton = document.querySelector(".article__div__button--restart");
var challengerOneInput = document.querySelector(".article__form__input--nameOne");
var challengerTwoInput = document.querySelector(".article__form__input--nameTwo");
var challengerOneLabel = document.querySelector(".article__paragraph--challenger-1");
var challengerTwoLabel = document.querySelector(".article__paragraph--challenger-2");
var challengerOneLatestGuess = document.querySelector(".span--challenger-1");
var challengerTwoLatestGuess = document.querySelector(".span--challenger-2");
var guessOneInput = document.querySelector(".article__form__input--guessOne");
var guessTwoInput = document.querySelector(".article__form__input--guessTwo");
var latestGuessOne = document.querySelector(".span--number-1");
var latestGuessTwo = document.querySelector(".span--number-2");
var guessMessageOne = document.querySelector(".span--high-low-1");
var guessMessageTwo = document.querySelector(".span--high-low-2");
var minErrorMessage = document.querySelector(".min-error-message");
var maxErrorMessage = document.querySelector(".max-error-message");
var nameOneErrorMessage = document.querySelector(".nameone-error-message");
var nameTwoErrorMessage = document.querySelector(".nametwo-error-message");
var guessOneErrorMessage = document.querySelector(".guessone-error-message");
var guessTwoErrorMessage = document.querySelector(".guesstwo-error-message");
var rightSection = document.querySelector(".section--right");
var timer;

// Event Listeners
updateButton.addEventListener('click', onUpdateButton);

submitButton.addEventListener('click', onSubmitButton);

clearButton.addEventListener('click', onClearButton);

restartButton.addEventListener('click', onRestartButton);

rightSection.addEventListener('click', rightHandler);

// Functions 
function onUpdateButton() {
  var minCheck = verifyRange(minInput, minErrorMessage);
  var maxCheck = verifyRange(maxInput, maxErrorMessage);
  if (minCheck && maxCheck) {
    updateRange(parseInt(min), parseInt(max));
    randInt = getRandInt(parseInt(min), parseInt(max));
  }
  
}

function onSubmitButton() {
  var checkGuessOne = checkGuessInput(guessOneInput, guessOneErrorMessage);
  var checkGuessTwo = checkGuessInput(guessTwoInput, guessTwoErrorMessage);
  var checkNameOne = checkNameInput(challengerOneInput, nameOneErrorMessage);
  var checkNameTwo = checkNameInput(challengerTwoInput, nameTwoErrorMessage);
  if (checkGuessOne && checkGuessTwo && checkNameOne && checkNameTwo) {
    setTimer();  
    updateGuess();
    updateName();
    updateLatestGuess();
    checkGuess(guessOne, guessMessageOne, challengerOneInput);
    checkGuess(guessTwo, guessMessageTwo, challengerTwoInput);
    enableClearButton();
    enableRestartButton();
  }  
}

function onClearButton() {
  clearForm();
  clearLatestGuess();
  clearButton.disabled = true;  
}

function onRestartButton() {
  clearForm();
  clearLatestGuess();
  clearName();
  randInt = getRandInt(min, max);
  restartButton.disabled = true;
  clearButton.disabled = true;  
}

function rightHandler(event) {
  if (event.target.classList[0] === 'winner-card-close-button') {
    var WinnerCard = event.target.parentNode.parentNode; 
    rightSection.removeChild(WinnerCard);
  }
}

function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setTimer() {
  if (nGuesses === 0) {
    timer = 0;
    timerId = setInterval(function() {timer++;}, 1000);
  }
}

function checkNameInput(elementValue, errorMessage ) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (elementValue.value.match(letters)){
    errorMessage.classList.add("error--hidden");
    elementValue.classList.remove("error-border-styles");
    return true;
  } else {
    errorMessage.classList.remove("error--hidden");
    elementValue.classList.add("error-border-styles");
    errorMessage.innerHTML = `<img src="Images/error-icon.svg" class="error-image" alt ="Error icon">  Enter a name`;
    return false;
  }
}

function checkGuessInput(input, errorMessage) {
  if (parseInt(input.value) === NaN || input.value === ""){
    errorMessage.classList.remove("error--hidden");
    input.classList.add("error-border-styles");
    errorMessage.innerHTML = `<img src="Images/error-icon.svg" class="error-image" alt ="Error icon">  Enter a number`;
    return false;
  } else if (input.value < min || input.value > max) {
    errorMessage.classList.remove("error--hidden");
    input.classList.add("error-border-styles");
    errorMessage.innerHTML = `<img src="Images/error-icon.svg" class="error-image" alt ="Error icon">  Enter a value in specified range`;
    return false;
  } else {
    errorMessage.classList.add("error--hidden");
    input.classList.remove("error-border-styles");
    return true;
  }
}

function checkGuess(guess, message, challenger) {
  if (guess > randInt) {
    message.innerText = 'that\'s too high';
  } else if (guess < randInt) {
    message.innerText = 'that\'s too low';
  } else if (guess === randInt) {
    message.innerText = 'BOOM!';
    makeCard(challenger.value);
    clearForm(); 
    increaseRange();
    nGuesses = 0;
    randInt = getRandInt(min, max);   
  }  
}

function clearForm() {
  challengerOneInput.value = '';
  challengerTwoInput.value = '';
  guessOneInput.value = '';
  guessTwoInput.value = '';
  nameOneErrorMessage.classList.add("error--hidden");
  challengerOneInput.classList.remove("error-border-styles");
  nameTwoErrorMessage.classList.add("error--hidden");
  challengerTwoInput.classList.remove("error-border-styles");    
  guessOneErrorMessage.classList.add("error--hidden");
  guessOneInput.classList.remove("error-border-styles");  
  guessTwoErrorMessage.classList.add("error--hidden"); 
  guessTwoInput.classList.remove("error-border-styles");  
  minErrorMessage.classList.add("error--hidden");
  minInput.classList.remove("error-border-styles");  
  maxErrorMessage.classList.add("error--hidden");
  maxInput.classList.remove("error-border-styles");    
}

function clearLatestGuess() {
  guessMessageOne.innerText = '';
  guessMessageTwo.innerText = '';  
  latestGuessOne.innerText = '';  
  latestGuessTwo.innerText = '';
  nGuesses = 0;  
}

function clearName() {
  challengerOneLabel.innerText = 'Challenger 1';
  challengerTwoLabel.innerText = 'Challenger 2';
  challengerOneLatestGuess.innerText = 'Challenger 1';
  challengerTwoLatestGuess.innerText = 'Challenger 2';  
}

function updateGuess() {
  guessOne = Math.round(parseInt(guessOneInput.value));
  guessTwo = Math.round(parseInt(guessTwoInput.value));
  nGuesses ++;
}

function updateRange(min, max) {
  minDisplay.innerText = min;
  maxDisplay.innerText = max;
  minInput.value = '';
  maxInput.value = '';  
}

function updateName() {
  challengerOneLabel.innerText = challengerOneInput.value;
  challengerTwoLabel.innerText = challengerTwoInput.value;  
  challengerOneLatestGuess.innerText = challengerOneInput.value;
  challengerTwoLatestGuess.innerText = challengerTwoInput.value;
}

function updateLatestGuess() {
  latestGuessOne.innerText = guessOne; 
  latestGuessTwo.innerText = guessTwo;   
}

function enableClearButton() {
  if (guessOneInput.value === '' && guessTwoInput.value === '' && challengerOneInput.value === '' && challengerTwoInput.value === '') {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;  
  }
}

function enableRestartButton() {
  if (nGuesses >= 1) {
    restartButton.disabled = false;
  }
}

function makeCard(winner) {
  cardIndex ++;
  rightSection.insertAdjacentHTML("afterbegin", `<article class="article--winner-card article--winner-card-${cardIndex}">
        <p class="header--winner-card">
           <span class="span__challenger1-name">${challengerOneInput.value.toUpperCase()}</span> 
              <span class="versus">VS</span>
          <span class="span__challenger2-name">${challengerTwoInput.value.toUpperCase()}</span></p>
      <div class="article__div__winner-card">
        <p class="challenge-winner">
          <span class="winning-challenger-name">${winner.toUpperCase()}</span><br/>
          WINNER
        </p>
      </div>
      <div class="bottom-data-line">
        <p class="bottom-data-line-paragraph"><span class="total-number-guesses">${nGuesses * 2}</span> guesses</p>
        <p class="bottom-data-line-paragraph"><span class="total-time-spent"> ${(timer / 60).toFixed(2)}</span> minutes</p>
        <button type="button" class="winner-card-close-button winner-card-close-button--${cardIndex}">&times;</button>
     </div>
  </article>`);
}



function increaseRange() {
  min > 10 ? min -= 10 : min = 1 ;
  max += 10;
  updateRange(min, max);
}

function verifyRange(input, errorMessage) {
  if (minInput.value > maxInput.value) {
      errorMessage.classList.remove("error--hidden");
      input.classList.add("error-border-styles");
      errorMessage.innerHTML = `<img src="Images/error-icon.svg" class="error-image" alt ="Error icon">  Minimum cannot be higher than maximum`;
      return false;
  }  else if (input.value.length === 0){ 
      errorMessage.classList.remove("error--hidden");
      input.classList.add("error-border-styles");
      errorMessage.innerHTML = `<img src="Images/error-icon.svg" class="error-image" alt ="Error icon">  Please input a number`;
      return false;
  } else {
    errorMessage.classList.add("error--hidden");
    input.classList.remove("error-border-styles");
    min = parseInt(minInput.value);
    max = parseInt(maxInput.value); 
    return true;
  }
}





