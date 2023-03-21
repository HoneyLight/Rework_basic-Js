// Get a prompt from a user and abbreviate each word supplied to be 3 characters long.

// let abbr="please pass them some salt"
let abbr = prompt('write some words that are 3 characters long');
let abbr_ = abbr.split(' ');
console.log(abbr_);
let abbr_single;
let newSplit;
let newSplitOut = [];
//[please, pass, some, salt]
console.log(abbr_.length);

for (let i = 0; i < abbr_.length; i++) {
  abbr_single = abbr_[i];
  console.log(abbr_single);
  let newSplit_ = abbr_single.substring(0, 3); // please - ple, pass - pas
  newSplitOut.push(newSplit_); //[ple, pas]
}
//[ple, pas, som, sal]
console.log(newSplitOut.join(' ')); //"ple pas som sal"

// take note that the meaning of the first and second numbers written in a substring is thus, the first is saying, for example: substring(0, 3): start from the first letter of the word and stop at the 3rd index; meaningthatthe 3rd index which is the 4th letter should not display.

//Functions with parameters

function minimumnum(num1, num2) {
  if (num1 < num2) {
    return num1 + ' is the minimum number';
  } else {
    return num2 + ' is the minimum number';
  }
}
console.log(minimumnum(2, 3));

//write a function that takes in 3 parameters and return the largest

function maximumnum(num1, num2, num3) {
  let largest = num1;
  if (num2 > largest) {
    largest = num2;
  }
  if (num3 > largest) {
    largest = num3;
  }
  return largest;
}
console.log(maximumnum(2, 3, 4));

//function with expressions

//a function that takes an array and sums all the numbers

let sumNums = function(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  return sum;
};

console.log(sumNums([2, 4, 6])); //12
// sumNums=12

//Micheal's question based on expressions

// add two numbers

function addTwoNums(num1,num2){
return num1 + num2
}

console.log(addTwoNums(2,sumNums([1, 2, 3]))) //2 + 6 = 8


// assignment class6

function num(numm1, numm2) {
  let divNumber = numm1 / numm2;
  if (numm1 < numm2) {
    return numm2 + ' cannot be used in this application';
  } if (numm2 == 0){
    return numm2 + ' cannot be used in this application';
  }
  else {
    return divNumber;
  }
}
console.log(num(4, 2));
console.log(num(4, 0));
console.log(num(4, 7));



