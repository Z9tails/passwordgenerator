// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Variable array of possible strings

  var uppercaseArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowercaseArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var charArray = [
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
  ];

  // Empty array path

  var resultArray = [];
  var userArray = [];

  uppercaseArray[1];
  //-----------------------------------------------------------------
 var numCharacter = prompt(
   "How long of a password do you want (between 8 and 128 characters?"
 );

  if (numCharacter < 8) {
    alert("Password is too small");
    return null;
  }

  if (numCharacter > 128) {
    alert("Password is too big");
    return null;
  }

  if ((numCharacter > 7) && (numCharacter < 129)) {
    // "If" statements with concat instead of spread or push, spread will be used far more often in the future, but I wasn't quite able to manage the process.
 
 var numbers = confirm("Would you like numbers in your password?");
 var uppercases = confirm("Would you like Uppercase letters in your password?");
 var lowercases = confirm("Would you like lowercase letters in your password?");
 var characters = confirm(
   "And lastly, any special characters in your password?"
 );
    if (numbers) {
      resultArray = resultArray.concat(numArray);
    }

    if (uppercases) {
      resultArray = resultArray.concat(uppercaseArray);
    }

    if (lowercases) {
      resultArray = resultArray.concat(lowercaseArray);
    }

    if (characters) {
      resultArray = resultArray.concat(charArray);
    }
    console.log(resultArray);

    for (var i = 0; i < numCharacter; i++) {
      userArray.push(
        resultArray[Math.floor(Math.random() * resultArray.length)]
      );
    }

    return userArray.join("");
  }
}

// Display password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function timedRefresh(timeoutPeriod) {
  setTimeout("location.reload(true);", timeoutPeriod);
}

window.onload = timedRefresh(120000);
