// Array of special characters to be included in password
var specialCharacters = [
	'@',
	'%',
	'+',
	'\\',
	'/',
	"'",
	'!',
	'#',
	'$',
	'^',
	'?',
	':',
	',',
	')',
	'(',
	'}',
	'{',
	']',
	'[',
	'~',
	'-',
	'_',
	'.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];

let passwordOptions = {
	length: 0,
	charTypes: [],

	getLength: function(){
		return this.length;
	},

	getCharTypes: function(){
		return this.charTypes;
	},

	changeLength: function(x){
		this.length = x;
	},

	addCharType: function(charType){
		this.charTypes = this.charTypes.concat(charType);
	}

	/* code for logging for debugging
	logOptions: function(){
		console.log(
			`Length: ${this.length}
			Character Types: ${this.charTypes}`
		);
	} */
}

// Function to prompt user for password options
function getPasswordOptions() {
	let passwordLength = prompt("Pick a password length from 10-64:");
	// checks to ensure the length is the right size before changing length of object
	while(passwordLength < 10 || passwordLength > 64){
		passwordLength = prompt("Please ensure your password length is between 10-64:");
	}
	passwordOptions.changeLength(passwordLength);

	let count = 0;
	do {
		if(confirm("Select either 'Confirm' or 'Cancel' for whether you would like special characters in your password.")){
			passwordOptions.addCharType(specialCharacters);
		}
		if(confirm("Select either 'Confirm' or 'Cancel' for whether you would like numeric characters in your password.")){
			passwordOptions.addCharType(numericCharacters);
		}
		if(confirm("Select either 'Confirm' or 'Cancel' for whether you would like lowercase characters in your password.")){
			passwordOptions.addCharType(lowerCasedCharacters);
		}
		if(confirm("Select either 'Confirm' or 'Cancel' for whether you would like uppercase characters in your password.")){
			passwordOptions.addCharType(upperCasedCharacters);
		}

		if(passwordOptions.charTypes.length === 0){ count++; }
		if(count>0){alert("You didn't pick a single option! You must pick one. Try again."); }
	}while(passwordOptions.charTypes.length === 0)
}

// Function for getting a random element from an array
function getRandom(arr) {
	return arr[Math.floor(Math.random()*arr.length)];
}

// Function to generate password with user input
function generatePassword() {
	let password = ""
	for (let i = 0; i < passwordOptions.getLength(); i++){
		password = password.concat(getRandom(passwordOptions.getCharTypes()));
	}

	return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	getPasswordOptions();
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);