// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const characterchoices = {
    specials  : " !”#$%&’()*+,-./:;<=>?@[\]^_`{|}~",
    numbers   : "1234567890",
    capitals  : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowers    : "abcdefghijklmnopqrstuvwxyz"
};

function generatePassword(){
    // Holding the password
    var passwordCompiled = "";

    // Paramets for creating the password, populated by user responses
    let passwordParams = {
        charcount   :   0,
        typecount   :   0,
        specials    :   false,
        numbers     :   false,
        capitals    :   false,
        lowers      :   false,
        charbucket  :   ""
    };


    // Grab the length of the requested password
    let charCountRequest = parseInt(window.prompt("Select password length (between 8 and 20)"));
    while( !Number.isInteger(charCountRequest) || !charCountRequest || charCountRequest < 8 || charCountRequest > 20 ){
        charCountRequest = parseInt(window.prompt("Invalid Character Amount\nSelect password length (between 8 and 20)"));
    };
    passwordParams.charcount = charCountRequest;
    console.log(`User entered: ${passwordParams.charcount}`);

    // Check which kind of characters the user wants
    while(passwordParams.typecount == 0){

        if( window.confirm("Use lowercase letters?") ){
            passwordParams.typecount++;
            passwordParams.lowers = true;
            passwordParams.charbucket += characterchoices.lowers;
        };
        
        if( window.confirm("Use uppercase letters?") ){
            passwordParams.typecount++;
            passwordParams.capitals = true;
            passwordParams.charbucket += characterchoices.capitals;
        };
        
        if(window.confirm("Use numbers?")){
            passwordParams.typecount++;
            passwordParams.numbers = true;
            passwordParams.charbucket += characterchoices.numbers;
        };
        
        if(window.confirm("Use special characters?")){
            passwordParams.typecount++;
            passwordParams.specials = true;
            passwordParams.charbucket += characterchoices.specials;
        };
        
        // Restart of they choose none of them...
        if(passwordParams.typecount == 0){
            alert("Please choose at least one type of character for use.");
        };
    }

    // Random selector for length of the requested character count
    for(i = passwordParams.charcount; i > 0; i-- ){
        passwordCompiled += passwordParams.charbucket.charAt( Math.floor(Math.random() * passwordParams.charbucket.length) );
    }

    console.log( passwordCompiled );

}









var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"];

var playGame = function() {
  // Ask user for their choice
  var userChoice = window.prompt("Enter R, P, or S:");

  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }

  // Convert to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();

  // Get random index from array of options
  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

  // If choices are the same, it's a tie
  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");

  // Check every win condition for the player
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");

  // If above conditions failed, assume player lost
  } else {
    losses++;
    window.alert("You lost!");
  }

  // Print stats with line breaks
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  // Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame();
  }
};

// Run the game for the first time
playGame();
