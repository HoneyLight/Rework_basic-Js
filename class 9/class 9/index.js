//create a form with these fields
// a field that takes in name
// a field that takes in password
//a field that takes in date of birth
// a group of checkboxes
//two buttons: submit, reset.

const { check } = require('prettier');

//** mouse and form events */
//onclick
//onsubmit
//onmouseout
//onkeyup
//onblur
//onfocus
//onchange
let form = document.getElementById('form');
let firstname = document.getElementById('firstname');
let passwd = document.getElementById('passwd');
let Num_ = document.getElementById('Num_');
let firstNameErr = document.getElementById('firstNameErr');
let passwdErr = document.getElementById('passwdErr');
let numberErr = document.getElementById('numberErr');
let fruits = document.querySelectorAll('input[name="fruit"]');
let btn = document.getElementById('btn');
let btn_reset = document.getElementById('btn_reset');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validation();
});

function validation() {
  if (firstname.value == '' || firstname.value == undefined) {
    firstNameErr.innerHTML = 'Required';
    firstNameErr.style.color = 'red';
  }
  if (passwd.value == '' || passwd.value == undefined) {
    passwdErr.innerHTML = 'Password cannot be empty';
    passwdErr.style.color = 'red';
  }
  if (Num_.value == '' || Num_.value == undefined) {
    numberErr.innerHTML = 'Required';
    numberErr.classList.add('errormsg');
  }
  let checkedItem = false;
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].checked);
    checkedItem = true;
    break;
  }
  if (!checkedItem) {
    checkErr.innerHTML = 'select an item';
    checkErr.classList.add('errormsg');
  } else {
    formFilled();
  }
}

function formFilled() {
  if (passwd.value.length < 3) {
    passwdErr.innerHTML = 'Password should be more than 3';
    passwdErr.style.color = 'red';
    passwd.focus();
  } else {
    alert(
      'Your name is ' +
        firstname.value +
        '\n' +
        'Your password ' +
        passwd.value +
        '\n',
    );
  }
}

btn_reset.onreset = () => {};
