 // Array with all alphabet letters
 var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
     "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ñ"];


 // Variables to track scores
 var wins = 0;
 var loss = 0;
 var guessesLeft = 10;
 var userLetters = [];


 // JS is waiting for a keyup to star the fuction event 
 document.onkeyup = function (event) {
    // Assigns the key value to userGuess
    var userGuess = event.key.toLowerCase();
    // Variable to randomize the letters array
    var computerChoice = letters[Math.floor(Math.random() * letters.length)];

    // The game will alert no more guesses are left when it gets to 0
    if(guessesLeft == 0){
        loss ++;
        guessesLeft = 10;
        userLetters = [];
    }
    else { 
        
        // Nested if to compare user choice vs computer
        if (userGuess === computerChoice) {
            wins++;
            guessesLeft = 10;
            userLetters = [];
        } 
        else {
            guessesLeft--;
        }
    }
    
    // This if will prevent a letter to be written multiple times 
    if(userLetters.indexOf(userGuess) >=0){

    }
    else {
        userLetters.push(userGuess);
        document.querySelector("#user-letters").innerHTML = userLetters ;
    }
    

    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#loss").innerHTML = loss;
    document.querySelector("#guess").innerHTML = guessesLeft;
    

 }