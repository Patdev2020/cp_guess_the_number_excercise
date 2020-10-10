/**
 * The Guess The Number Game
 */

// Initialize Global Variables

// Variable to store the list of guesses 
let guesses = [];
// Variable for store the correct random number 
let correctNumber = 0;

// Test
//console.log(correctNumber);

////
window.onload = function () {

  // Add playGame click listener here.


  // Add initGame click listener here.


  // Add get random number function call here.


}

/**
 * Functionality for playing the whole game
 */
function playGame() {
  // 
  let numberGuess = document.getElementById('number-guess').value;
  //console.log(numberGuess);
  saveGuessHistory(numberGuess);
  //
  displayResult(numberGuess);
  //
  displayHistory();
  // Ask / Prepare for their next guess.
  document.getElementById("number-guess").value = "";

  // Test
  //console.log( 'What is your next guess?');

}

/**
 * COMPARE and SHOW the result test if the guess is too high, too low, or correct.
 * HINT: Use if, else if, else statement 
 */
function displayResult(numberGuessed) {

  // Add COMPARE the number the user guessed code here.


}


/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame() {
  // 
  //Reset the correctNumber / get a NEW random number for the user to guess.


  //Reset the result display. / remove the HTML text we created in previous game.


  //Reset the guesses array. Redefine the guesses variable to be an empty array.


  //Reset the guesses display history.


}


/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
  document.getElementById("history").innerHTML = "";
}


/**
 * Return a random number between 1 and 100 inclusive.
 * HINT: Use Math.random 
 */
function getRandomNumber() {

  // 
  // Math.random() :generates a random floating point number (decimal) from 0 up to but not including 1 
  // Math.random() * 100 :here you are saying, give me a random floating point number from 0 up to but not including 100.
  // Math.floor(n)  :Round a number downward to its nearest integer.
  // When you combine: Math.floor(Math.random() * 100) + 1 :here you are saying give me a random whole number from 
  // 0 up to but not including 100, then the +1 ensures that you receive a random number from 1 - 100

  randomInteger = Math.floor(Math.random() * 100) + 1;

  // Test
  //console.log(randomInteger);

  return randomInteger;
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  // Add code to push the user's guess into the array.


  //console.log( guesses );

}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li>
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {

  // initialize our variables.


  // We are displaying the last to first guess in our list. 0 is the first address/location in our array.


  // put in closing tag


  // Test
  //console.log( list );

  // display the html created.
  document.getElementById("history").innerHTML = list;

}



/**
 * CREATE the dialog based on if the guess is wrong or correct. 
 */
//
function getDialog(dialogType, text) {
  //
  let dialog;

  // Build and return simple div using Bootstrap class names for div color.
  switch (dialogType) {

    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;

    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;

  }

  dialog += text;
  dialog += "</div>"

  return dialog;
}

////////////////////////////////////////////////////////
function showYouWon() {
  //
  const text = "YOU GUESSED IT!!!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */

  // 
  let dialog = getDialog('won', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */

  // 
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */

  // 
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}
/////////////////////////////////////////////////////////////////