// 	**Traversing Elements
// Get the parent element
// Get child elements
// Get siblings of an element
// 	**Manipulating Elements
// createElement()
// appendChild()
// textContent
// innerHTML
// append()
// prepend()
// replaceChild()
// removeChild()

function add() {
  let firstLi = document.createElement('li');
  let secondLi = document.createElement('li');
  //   let anothervariable = document.createTextNode('scooter');
  //   anynameyouchoose.append('scooter');
  secondLi.textContent = 'ship';
  firstLi.textContent = 'bike';
  document.getElementById('container').append(firstLi, secondLi);
}

function addChild() {
  let nana = document.createElement('p');
  let nana2 = document.createTextNode('My name is Nana');
// note: we have 3 ways of adding to html: (innerhtml, textcontent and textnode).
// for textnode, you have to create the element e.g a button and then create the textnode and then appendthe text to the element
  nana.appendChild(nana2);
    document.body.appendChild(nana);
}
//Note: appenchild is when you are adding only one element while append is when you are adding more than element.

//get siblings
let firstborn = document.querySelector('li');
let secondborn = firstborn.nextElementSibling;

console.log(secondborn);


//replace child
function replace(){
let newNode= document.getElementById('container')
let newElement=document.createElement('li')
newElement.innerHTML='God is good'
let second=document.getElementById('second')
newNode.replaceChild(newElement,second )
}


function myfunction(){
	let myList=document.getElementById('container')
	myList.removeChild(myList.firstElementChild)
}



//create a form with these fields
// a field that takes in name
// a field that takes in password
//a field that takes in date of birth
// a group of checkboxes 
//two buttons: submit, reset.