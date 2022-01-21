//Strings in JavaScript
let username = 'oakgibbon12';
const stateName = 'Indiana';
let currentLanguage = "JavaScript";
let phrase = "The quick brown fox over the lazy dog";
let emptyString = '';

//Escape Sequences
let escapedString = 'I just can\'t believe it\'s not butter!';
let withAQuote = "the docor said, \"Where is the patient?\", while he ran out the door,";

//Template Strings
let firstName = 'Jane';
let cartItems = 5;
let greeting = 'welcome, ${ firstName }!  You have ${ cartItems } units in your cart.';

//String Methods

//Index
const daysOfTheWorkWeek = 'MTWRF';
let firstDay = daysOfTheWorkWeek[0];

//Replace all
const oldMarkup = "The apples are the best fruit. Apples will dominate other fruits!";
let newMarkup = oldMarkup.replaceAll("Apples", "Oranges");

// Includes
let stockChoices = 'AAPL, MSFT, GOOG, AMZN, FB';
let containsNetflixStock = stockChoices.includes('NFLX');

//Uppercase/Lowercase
let userEmail = 'MycoolMail@Mailservice.NET'
let allUpperCase = userEmail.toUpperCase();
let allLowerCase = userEmail.toLowerCase();