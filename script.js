// Assignment Code
var generateBtn = document.querySelector("#generate");
var charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSpec = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~", "=", "@", "^"];
var charLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Write password to the #password input

function generatePassword() {
  var charLength = (prompt("How long do you want your password to be from 8 - 128 Characters"));
    while(charLength < 8 || charLength > 128 || (isNaN(charLength))) {
      alert("Try again");
      charLength = (prompt("How long do you want your password to be from 8 - 128 Characters"));
  }
  var confirmcharLow = confirm("If you want Lower Case characters click OK, if not click Cancel");
  var confirmcharUp = confirm("If you want Upper Case characters click OK, if not click Cancel");    
  var confirmcharNum = confirm("If you want Number characters click OK, if not click Cancel");
  var confirmcharSpec = confirm("If you want Special characters click OK, if not click Cancel");
    while(confirmcharUp === false && confirmcharLow === false && confirmcharSpec === false && confirmcharNum === false) {
        alert("You must choose at least one parameter");
        confirmcharLow = confirm("If you want Lower Case characters click OK, if not click Cancel");
        confirmcharUp = confirm("If you want Upper Case characters click OK, if not click Cancel");    
        confirmcharNum = confirm("If you want Number characters click OK, if not click Cancel");
        confirmcharSpec = confirm("If you want Special characters click OK, if not click Cancel");  
  }
  var passwordChar = [];

  if (confirmcharLow) { passwordChar = passwordChar.concat(charLow) }
  if (confirmcharUp) { passwordChar = passwordChar.concat(charUp) }
  if (confirmcharNum) { passwordChar = passwordChar.concat(charNum) }
  if (confirmcharSpec) { passwordChar = passwordChar.concat(charSpec) }

  var randomPassword = [];
      
      for (var i = 0; i < charLength; i++) {
        randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
      }
      return randomPassword;
    
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);