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
    specials  : "!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~",
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

    // Compile the password; uses internal validation before it returns a successful password
    let validator = false;
    while( !validator ){
        // Check against these parameters:
        let typeValidation = passwordParams.typecount,
        hasLowers = !passwordParams.lowers,
        hasCapitals = !passwordParams.capitals,
        hasNumbers = !passwordParams.numbers,
        hasSpecials = !passwordParams.specials;

        // Empty the password placeholder, in case of failure to meet validation
        passwordCompiled ="";

        // Random selector for length of the requested character count
        for(i = passwordParams.charcount; i > 0; i-- ){

            // Grab a character to try and meet the requirements
            var addCharacter = passwordParams.charbucket.charAt( Math.floor(Math.random() * passwordParams.charbucket.length) );

            // VALIDATION
            if( !hasLowers && characterchoices.lowers.includes(addCharacter) && typeValidation > 0 ){
                hasLowers = true;
                typeValidation--;
                console.log(`Password includes a Lowercase: ${addCharacter}`);
            }
            else if( !hasCapitals && characterchoices.capitals.includes(addCharacter) ){
                hasCapitals = true;
                typeValidation--;
                console.log(`Password includes a Capital: ${addCharacter}`);
            }
            else if( !hasNumbers && characterchoices.numbers.includes(addCharacter) ){
                hasNumbers = true;
                typeValidation--;
                console.log(`Password includes a Number: ${addCharacter}`);
            }
            else if( !hasSpecials && characterchoices.specials.includes(addCharacter) ){
                hasSpecials = true;
                typeValidation--;
                console.log(`Password includes a Special Character: ${addCharacter}`);
            }
            else{
                console.log(`Skipping: ${addCharacter}`);
            }

            // Add it to the password string... this doesn't guarantee success!
            passwordCompiled += addCharacter;
        }

        // Are we good to go?
        if( typeValidation === 0 && hasLowers && hasCapitals && hasNumbers && hasSpecials){
            console.log(`The password meets all requirements!`);
            validator = true;
        }
        else{
            console.log(`ERROR: Password failed parameter validation.\nRestarting...`);
        }

    }

    // If all validation completes, the final password is returned.
    console.log( passwordCompiled );
    return(passwordCompiled);

}