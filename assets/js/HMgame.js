

    //this portion holds all of the variables to use throughout the js
    var wordList = ["mario", "luigi", "peach", "daisy", "yoshi", "pipe", "castle", "flag", "mushroom", "toad", "bowswer", "shell", "koopa", "boo", "shyguy", "goomba"];
    var chosenWord = "";
    var lettersInRandomWord = [];
    var guesses = 0;
    var inputString = [];
    var incorrectGuesses = [];
    var letterGuessed = "";
    var winCounter = 0;
    var lossCounter = 0;
    var numberOfguesses = 6;




    //this is the function that initiates/starts the game
    function initiateGame() {
        numberOfguesses = 6;
        chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
        lettersInChosenWord = chosenWord.split("");
        guesses = lettersInChosenWord.length;
        console.log(chosenWord);
        inputString = [];
        incorrectGuesses = [];

        for (var i = 0; i < guesses; i++) {
            inputString.push("_");
        }
        console.log(inputString);

        document.getElementById("numberOfguesses").innerHTML = numberOfguesses;
        document.getElementById("wordBlanks").innerHTML = inputString.join("_ ");
        document.getElementById("incorrectGuesses").innerHTML = incorrectGuesses.join(" ");
    }







    //this function SHOULD check the letter and determine whether or not 
    //it is in the random generated word or not
    function checkLetters(letter) {

        var letterInWord = true;

        if (letterInWord) {


            for (var i = 0; i < chosenWord.length; i++) {

                if (chosenWord.charAt(i) === letter)

                    inputString[i] = letter;
            }


            console.log(inputString);
        }

        else {

            document.getElementById("wordBlanks").innerHTML = inputString.join("_ ");

        }

        var letterInWord = false;
        if (letterInWord) {


            for (var j = 0; j < guesses; j++) {

                if (chosenWord[j] === letter) {

                    inputString[j] = letter;
                }
            }
            console.log(inputString);
        }


        else {

            incorrectGuesses.push(letter);

            guesses--;

        }
    }








    //this function should run once the round is complete and log your 
    //win/loss and
    //re-generate the random word 
    function roundComplete() {
        console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | guesses: " + numberOfguesses);

        document.getElementById("numberOfguesses").innerHTML = guesses;

        document.getElementById("wordBlanks").innerHTML = inputString.join("_ ");

        document.getElementById("incorrectGuesses").innerHTML = incorrectGuesses.join(" ");


        if (lettersInChosenWord.toString() === inputString.toString()) {

            winCounter++;

            alert("You Win! Too bad Peach is in a different castle!!");

            document.getElementById("winCounter").innerHTML = winCounter;
            initiateGame();
        }


        else if (guesses === 0) {

            lossCounter++;

            alert("Bowser has taken the Princess!");

            document.getElementById("lossCounter").innerHTML = lossCounter;
            initiateGame();

        }

    }





    //this reinitiates the game while logging wins and losses
    initiateGame();







    //this allows the user to select a key to try to guess the random word
    document.onkeydown = function (letter) {
        letterGuessed = String.fromCharCode(letter.which).toLowerCase();
        checkLetters(letterGuessed);
        roundComplete();
    };







//psuedo code

//a random word is generated without the user knowing what it is
//then, the user will choose a letter from the keyboard 
//this letter will either corelate to one of the letters in the word or it wont
//if the letter does correlate, then the letter will appear in the correct slot(s)
//if it doesn't correlate, then no letter will appear and they will lose 1 of their 6 attempts
//once all 6 attempts are used up, then you lose
//if you can guess the word within your 6 attempts, then you WIN!




//old javascript (first take) for REFERENCE

// var state = {
//     guesses: 0,
//     word: "",
//     lettersGuessed: [],
//     wins: 0,
//     currentWord: [],
// }

// document.getElementById("Play").addEventListener("click", generateRandomWord);
// function generateRandomWord() {
//     state.word = "";
//     state.currentWord = [];
//     var span = document.getElementById("currentWord");
//     span.innerHTML = "_ ";
//     var words = ["mario", "luigi", "peach", "daisy", "yoshi", "pipe", "castle", "flag", "mushroom", "toad", "bowswer", "shell", "koopa", "boo", "shyguy", "goomba"]
//     state.word = (words[Math.floor(Math.random() * words.length)]);
//     pushChoicehtml();
// }


// //input letters guessed to HTML for the current word

// function pushChoicehtml() {
//     var span = document.getElementById("currentWord");
//     var length = state.word.length;
//     var word = "";
//     for (let i = 0; i < length; i++) {
//         state.currentWord.push("_");
//         word = word + "_ "
//     }
//     span.textContent = String(word);
//     console.log(word);
// };

// document.getElementById("Guess").addEventListener("click", guess);
// function guess() {
//     let input = document.getElementById("input");
//     let letter = input.value;
//     console.log(letter);


//     if (state.word.indexOf(letter) === -1) {
//         console.log("!");
//         state.guesses += 1;
//         document.getElementById("lettersGuessed").innerHTML += letter;
//     }
// };

// document.onkeyup = function (event) {
//     var userGuess = event.keyCode;
//     var userKey = event.userKey;
//     var wordChoice = (words[Math.floor(Math.random() * words.length)]);
//     lettersGuessed = String.fromCharCode(event.which).toLowerCase();
//     console.log(wordChoice);
//     console.log(event);

//     if (state.word.indexOf(letter) === -1) {
//         console.log("!");
//         state.guesses += 1;
//         document.getElementById("currentWord").innerHTML += letter;
//     }
// };



// for (var i = 0; i < wordChoice.length; i++) {
//     correctAnswer[i] = "_";
// }
// console.log(correctAnswer);
// pushChoicehtml();


























// // words.forEach(function (item) {
// //     console.log(item);
//     //random generated number