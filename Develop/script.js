var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", startPrompt);

// Character sets valid for password

var numberCharacters = "0123456789"
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz"
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var symbolCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

// Starter prompt
// user enters number of characters
// error statement if they enter less than 8 or more than 128
function startPrompt(){
  var allCharacters = "";
  var characterNumber = prompt("How many characters would you like your password to contain?");
  while (characterNumber<8 || characterNumber>128) {
    alert("Password Length must be at least 8 characters and under 128")
    var characterNumber = prompt("How many characters would you like your password to contain?");
  } 


// User chooses character sets
// using if statements the user chooses what characters are part of the allCharacters string

symbolQuestion = confirm("Click OK to confirm including Special Characters");
numberQuestion = confirm("Click OK to confirm including Numeric Characters");
lowerCaseQuestion = confirm("Click OK to confirm including Lowercase Characters");
upperCaseQuestion = confirm("Click OK to confirm including Uppercase Characters");

if (symbolQuestion===true) {
  allCharacters = allCharacters.concat(symbolCharacters);
}
if (numberQuestion===true) {
  allCharacters = allCharacters.concat(numberCharacters);
}
if (lowerCaseQuestion===true) {
  allCharacters = allCharacters.concat(lowerCaseCharacters);
}
if (upperCaseQuestion===true) {
  allCharacters = allCharacters.concat(upperCaseCharacters);
}
// GENERATE PASSWORD --
//  randomizes the allCharacters string
//  uses the randomized string to create a password
//  generates password when button is clicked

function generatePassword() {
  var password = "";
  for (var i=0; i<characterNumber; i++) {
    var rnum = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.substring(rnum, rnum+1);

  }
  var passwordBox = document.querySelector("#password")
  passwordBox.value = password;
}
generatePassword();
}
