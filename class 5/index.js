// classwork

// write a for loop that calculates the sum of the numbers from 1 to 10 andprints the result to the console 

let number = 0;

for (let i = 1; i <= 10; i++) {
    number = number + i;
    // or number += i;
}
console.log(number);


// if (num1 > num2) {
//   alert(num1 + ',' + num2);
// } else {
//   alert(num2 + ',' + num1);
// }

//Loops

//For loop

//for(let i=0; i>10; i++){

//block of code}

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

let arr_ = [1, 2, 3, 4, 5];
let arr_2 = [];

for (let i = 0; i < arr_.length; i++) {
  if (i === 2) {
    continue;
  }
  arr_2.push(arr_[i] * 2);
}

console.log(arr_2);

//While

let i = 0;

//while(i<arr_.length){
// arr_2.push(arr_[i] * 2);
//i++
//}

// Write a for loop that calculates the sum of the numbers from 1 to 10 and prints the result to the console.

let sum = 0;

for (let i = 1; i <= 10; i++) {
  // sum=sum + i;
  sum += i;
}

console.log(sum);
// let num1 = 6;
// let num2 = 4;

//Functions

//functions with parameters
function addNumbers(num1, num2) {
  // console.log(num1+num2)
  return num1 + num2;
}
addNumbers(7, 8);
addNumbers(20, 23);

let addedNumbers = addNumbers(3, 6);
console.log(addedNumbers)


//function as expressions

const x=function(a,b){return a+ b}

const y=x(2,3)
console.log(y)


//Assignment

// 1. Get a prompt from a user and abbreviate each word supplied to be 3 characters long.
// 2. Recieve a prompt from a user and change the first character of each word supplied to an uppercase.
// 3. Get variable using prompt

// a. function checkAge(age) {
//   if (age > 18) {
    // return true; //Use doucment.write or console.log
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// Rewrite the above function. Using the if else statement rewrite the above condition with question mark operator ? and colon : (ternary)

// b. Write a function that returns the minimun number of 2 parameters passed and console.log it.

//Write a for loop that sums all the even numbers in the array

//Write a while loop that displays the even numbers from 2 to 20 to the console.

