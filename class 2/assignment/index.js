
// question1

// let firstWord = prompt('Input a word');
// let inputedWord = alert(firstWord.split('').reverse().join(''));

// question2
let fruits = prompt('Name three fruits');

let fruitName = fruits.split(" ");

for (var i = 0; i < fruitName.length; i++) {
    fruitName[i] = fruitName[i].charAt(0).toUpperCase() + fruitName[i].slice(1);
}

let newName = fruitName.join(" ");
console.log(newName)


// question3

let wordString = "She reads like a child playing dress-up, an intern clothing herself out of her mother’s old work clothes."

let newWordString = wordString.split(' ').join('-');
console.log(newWordString)

// question4

