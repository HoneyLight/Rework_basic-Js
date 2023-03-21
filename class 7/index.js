//JAVASCRIPT BUILT_IN FUNCTIONS
//Date()

const todaysdate = new Date();
console.log(todaysdate); //tue 14 mar .....

//Date.now()
const currentDate = Date.now(); //1 jan 1970 00:00:00
console.log(currentDate); //122038376268628

//getDate()
const todaysdate_ = todaysdate.getDate();
console.log(todaysdate_); //14

//getDay()
const todaysday = todaysdate.getDay();
console.log(todaysday); //2 //tuesday //sunday being 0

// getMonth()
const todaysMonth = todaysdate.getMonth();
console.log(todaysMonth); //2 //march

//getFullYear()
const thisYear = todaysdate.getFullYear();
console.log(thisYear); //2023

//toLocaleString()
const datetostring = todaysdate.toLocaleString('en-NG', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
console.log(datetostring);

//JAVASCRIPT MATH METHODS
//Math.random()

const randomNum = Math.random(); //0 and 1
console.log(randomNum); //0.23333 ,0.78656

const higherRanNum = Math.random() * 10; //0 and 10
console.log(higherRanNum); //2.667, 8.9998

//Math.floor()
const num1 = 6.78;
const roundDownNum = Math.floor(num1);
console.log(roundDownNum); // 6

//Math.min()
const minNum1 = 20;
const minNum2 = 5;

const getMinNum = Math.min(minNum1, minNum2);
console.log(getMinNum); // 5

const numbers = [2, 3, 5, 10, 1];
const getMinNumArr = Math.min(...numbers);
console.log(getMinNumArr); //1

//Math.max()

const largNum1 = 20;
const largNum2 = 10;
const largNum3 = 80;

const getMaxNum = Math.max(largNum1, largNum2, largNum3);
console.log(getMaxNum); // 80

//DOM = DOcument Object Model

//selecting elements on the HTML

//No two elements can have the same ID
//getElementById

let firstPTag = document.getElementById('firstp');
console.log(firstPTag.innerHTML); //This is the first p tag

firstPTag.style.color = 'blue';

//getElementsByName
let nameElement= document.getElementsByName('firstName')
console.log(nameElement[0].value) //alex //undefined

//getElementsByTagname
let tagElement=document.getElementsByTagName('li')
console.log(tagElement.length) //2

//getElementsbyClassname
let classElement=document.getElementsByClassName('colore')
console.log(classElement.length) //3

classElement[1].style.color='green'

//querySelector
let firstPContainer=document.querySelector('.container .colore:first-child')
console.log(firstPContainer.innerHTML) //This is the first p tag




//ASSIGNMENT
// 1. Create a html page with design of your choice
// 2. Include a form inside your designed page with details to be gotten from the form should be 
// 	a. First Name
// 	b. last Name
// 	c. Username
// 	d. Gender
// 	e. Email
// 	f. Password
// 3. Validate the form inputs and make sure they are not empty or null, and the password length should not be lower than 5

// **read up on the onclick method for your submit function

// 4. If all details are correctly submitted, show the details submitted by the user in the browser.