let form=document.getElementById('form');
let firstName=document.getElementById('Fname');
let firstnameErr=document.getElementById('firstnameErr');
let lastName=document.getElementById('Lname');
let lastnameErr=document.getElementById('lastnameErr');
let email=document.getElementById('email');
let emailErr=document.getElementById('emailErr');
let gender=document.getElementById('gender');
let genderErr=document.getElementById('genderErr');
let phoneNumber=document.getElementById('phoneNumber');
let phoneNumberErr=document.getElementById('phonenumberErr');
let DOB=document.getElementById('DOB');
let dobErr=document.getElementById('dobErr');
let password=document.getElementById('password');
let passwordErr=document.getElementById('passwordErr');
let btn=document.getElementById('btn');
let btn_reset = document.getElementById('btn_reset');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    validation();
    formFilled();
    let empty=document.querySelectorAll('#Fname, #Lname, #email, #gender, #phoneNumber, #dob, #password');
    empty.forEach(input=>{
    input.value='';
  });
});

function validation(){
    if(firstName.value==''|| firstName.value==undefined){
        firstnameErr.innerHTML='First name required';
        firstnameErr.style.color='red';
        return false;
    }
    if(lastName.value==''|| lastName.value==undefined){
        lastnameErr.innerHTML='Last name required';
        lastnameErr.style.color='red';
        return false;
    }
    if(email.value==''|| email.value==undefined){
        emailErr.innerHTML='Email address required';
        emailErr.style.color='red';
        return false;
    }
    if(gender.value==''|| gender.value==undefined){
        genderErr.innerHTML='Gender required';
        genderErr.style.color='red';
        return false;
    }
    if(phoneNumber.value==''|| phoneNumber.value==undefined){
        phoneNumberErr.innerHTML='Phone Number required';
        phoneNumberErr.style.color='red';
        return false;
    }
    if(DOB.value==''|| DOB.value==undefined){
        dobErr.innerHTML='Please input your birth date';
        dobErr.style.color='red';
        return false;
    }
    if(password.value==''|| password.value==undefined){
        passwordErr.innerHTML='Password required and should be at least 8 characters long';
        passwordErr.style.color='red';
        return false;
    }
}

function formFilled(){
    if(validation()){
        if(password.value.length > 3 && password.value.length < 8){
            passwordErr.innerHTML='Password is weak';
            passwordErr.style.color='red';
            password.focus();
        }
        else if(password.value.length>=8){
            passwordErr.innerHTML='Password is strong';
            passwordErr.style.color='green';
        }
    }
    let DOB_ = new Date(DOB.value);
    let today = new Date();
    let age= today.getFullYear() - DOB_.getFullYear();
    console.log(today);
    console.log(DOB_);
    console.log(age);
    return age;
}

// function myFunction(){
//     if(firstName.value!=null && lastName.value!='' && email.value!=null && gender.value!=null && phoneNumber.value!=null && DOB.value!=null && password.value!=null && password.value.length>=8){
//         passwordErr.innerHTML='Password is strong';
//         passwordErr.style.color='green';
//         alert('Values inputed: '+ '\n' + firstName.value + '\n' + lastName.value + '\n' + email.value + '\n'+ gender.value + '\n' + phoneNumber.value + '\n'+ age.value + '\n' + password.value); 
//     }
//     else if(password.value.length > 3 && password.value.length<8){
//         passwordErr.innerHTML='Password is weak';
//         passwordErr.style.color='red';
//         password.focus();
//     }
    
// }

function removeErr(){
    firstName.onkeydown = () => {
        nameErr.innerHTML='';
    };
    lastName.onkeyup = () => {
        nameErr.innerHTML='';
    };
    email.onkeyup = () => {
        emailErr.innerHTML='';
    };
    gender.onkeyup = () => {
        genderErr.innerHTML='';
    };
    phoneNumber.onkeyup = () => {
        phoneNumberErr.innerHTML='';
    };
    DOB.onkeyup=()=>{
        dobErr.innerHTML='';
    };
    password.onfocus = () => {
        passwordErr.innerHTML='';
    };
}
removeErr();

function resetBtn() {
  alert('working');
//   window.location.href = 'https://www.apple.com/';
  location.reload();
}
