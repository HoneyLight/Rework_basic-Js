// assignment

// question1

let num1 = prompt('input first number');
let num2 = prompt('input second number');

// if (num1 > num2){
//     alert(num1 + "," " is the larger number");
// }
// else if (num1 < num2) {
//     alert(num2 + "," " is the larger number");
// }
// else{
//     alert('null');
// }

// question2
// using question1 variables

// hence it's two numbers, just use if/else

// const numbers = [num1, num2];
// numbers.sort(function(a, b) {return a - b});
// alert(numbers);

// question3

let arr1 = [2, 5, 3, 8];

arr1.forEach(myArr);

function myArr(digit) {
 console.log(digit * 2)
}

// question4
// using the array in question3

let arrReverse = arr1.slice().reverse();

console.log(arrReverse)
console.log(arr1)

// question5
// using the array in question3

console.log(arr1.splice(2, 1, 'bee', true));
console.log(arr1);

// end

