//ARRAYS
// An array is a special type of variable that can hold more than one value

let num = 3;
let txt = 'my name is mary';
let arr_ = [1, 2, 3, 4, 'alex', 'obi'];

console.log(typeof num); //number
console.log(typeof txt); //string
console.log(typeof arr_); //object

console.log(arr_ instanceof Array);
console.log(Array.isArray(arr_));

console.log(arr_[4]);

//Array Methods

//length
console.log(arr_.length);

//toStrings
// let arr_strings=arr_.toStrings()
console.log(txt.split(' '));
console.log(arr_.toString());

//Acessing the last element in an array
console.log(arr_[arr_.length - 1]);

//Adding elements to an array
//Push
console.log(arr_.push('rice'));
console.log(arr_);

//unshift
console.log(arr_.unshift('chicken'));
console.log(arr_);

//splice
console.log(arr_.splice(4, 4, 'chips', 'water'));
console.log(arr_);

//removing elements from an array
//pop
console.log(arr_.pop());
console.log(arr_);

//shift
console.log(arr_.shift());
console.log(arr_);

//slice
let newArr_ = arr_.slice(2);
console.log(newArr_);

//merging two or more arrays
let arr1 = ['rice', 'stew'];
let arr2 = ['water', 'wine'];

console.log(arr1.concat(arr_, arr2));

//Objects

//objects are written in keys and values

let obj = { name: 'aisha', age: 12, location: 'area 1', gender: 'female' };

console.log(obj)
console.log(obj.age)
console.log(obj["age"])



//Assignments

// 1. Take in two numbers from prompt and display the larger one.

// 2. Take in two numbers from prompt and display them in ascending order.

// 3. Takes in an array of numbers and multiply each of the elements by 2.

// 4. Reverse an array of numbers with out affecting the original array.

// 5. Using the splice command, remove the 3rd element of an array and add two elements.