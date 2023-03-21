//create a form with these fields
// a field that takes in name
// a field that takes in password
//a field that takes in date of birth
// a group of checkboxes
//two buttons: submit, reset.

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
let checkedItemValue;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validation();
  formFilled();
});

function validation() {
  if (firstname.value == '' || firstname.value == undefined) {
    firstNameErr.innerHTML = 'Required';
    firstNameErr.style.color = 'red';
    return false;
  }
  if (passwd.value == '' || passwd.value == undefined) {
    passwdErr.innerHTML = 'Password cannot be empty';
    passwdErr.style.color = 'red';
    return false;
  } else if (passwd.value.length < 3) {
    passwdErr.innerHTML = 'Password should be more than 3';
    passwdErr.style.color = 'red';
    passwd.focus();
    return false;
  }
  if (Num_.value == '' || Num_.value == undefined) {
    numberErr.innerHTML = 'Required';
    numberErr.classList.add('errormsg');
    return false;
  }
  let checkedItem = false;
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].checked) {
      checkedItem = true;
      console.log(fruits[i].value);
      checkedItemValue = fruits[i].value;
      break;
    }
  }
  if (!checkedItem) {
    checkErr.innerHTML = 'select an item';
    checkErr.classList.add('errormsg');
    // alert('all fields are required');
    return false;
  }
  return true;
}

function formFilled() {
  if (validation()) {
    if (passwd.value.length > 3 && passwd.value.length < 8) {
      passwdErr.innerHTML = 'Password is weak';
      passwdErr.style.color = 'red';
      passwd.focus();
    } else if (passwd.value.length > 8) {
      passwdErr.innerHTML = 'Password is strong';
      passwdErr.style.color = 'green';
      alert(
        'Your name is ' +
          firstname.value +
          '\n' +
          'Your favorite fruit ' +
          checkedItemValue +
          '\n',
      );
    }
  }
}

function removeErr() {
  firstname.onfocus = () => {
    firstNameErr.innerHTML = '';
  };
  passwd.onkeyup = () => {
    passwdErr.innerHTML = '';
  };
  Num_.onkeyup = () => {
    numberErr.innerHTML = '';
  };
}
removeErr();

// btn_reset.onreset = () => {
//   alert('working');
//   //    window.location.href = "https://www.example.com/";
//   window.location.reload();
// };

function resetBtn() {
  alert('working');
  window.location.href = 'https://www.apple.com/';
  location.reload();
}
