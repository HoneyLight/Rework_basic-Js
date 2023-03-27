let form=document.getElementById('form');
let firstName=document.getElementById('Fname');
let firstnameErr=document.getElementById('firstnameErr');
let lastName=document.getElementById('Lname');
let lastnameErr=document.getElementById('lastnameErr');
let homeAddress = document.getElementById('Homeaddress');
let homeaddressErr = document.getElementById('homeaddressErr');
let phoneNumber=document.getElementById('phoneNumber');
let phoneNumberErr=document.getElementById('phonenumberErr');
let email=document.getElementById('email');
let emailErr=document.getElementById('emailErr');
let checkInDate = document.getElementById('check-in');
let checkinErr = document.getElementById('check-inErr');
let checkOutDate = document.getElementById('check-out');
let checkoutErr = document.getElementById('check-outErr');
let roomType = document.getElementById('room-type');
let roomtypeErr = document.getElementById('room-typeErr');
let numPersons = document.getElementById('numpersons');
let numpersonsErr = document.getElementById('numpersonsErr');


let btn=document.getElementById('btn');
let btn_reset = document.getElementById('btn_reset');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    validation();
    verification();
//     let empty=document.querySelectorAll('#Fname, #Lname, #Homeaddress, #phoneNumber, #email');
//     empty.forEach(input=>{
//     input.value='';
//   });
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
    if(homeAddress.value==''|| homeAddress.value==undefined){
        homeaddressErr.innerHTML='Home Address required';
        homeaddressErr.style.color='red';
        return false;
    }
    if(phoneNumber.value==''|| phoneNumber.value==undefined){
        phoneNumberErr.innerHTML='Phone Number required';
        phoneNumberErr.style.color='red';
        return false;
    }
    if(email.value==''|| email.value==undefined){
        emailErr.innerHTML='Email address required';
        emailErr.style.color='red';
        return false;
    }
    if(checkInDate.value==''|| checkInDate.value==undefined){
        checkinErr.innerHTML='Check-in details required';
        checkinErr.style.color='red';
        return false;
    }
    if(checkOutDate.value==''|| checkOutDate.value==undefined){
        checkoutErr.innerHTML='Check-out details required';
        checkoutErr.style.color='red';
        return false;
    }
    if(roomType.value==''|| roomType.value==undefined){
        roomtypeErr.innerHTML='Room type required';
        roomtypeErr.style.color='red';
        return false;
    }    
    if(numPersons.value==''|| numPersons.value==undefined){
        numpersonsErr.innerHTML='Number of persons required';
        numpersonsErr.style.color='red';
        return false;
    }   
    return true; 
}
        let checkInDate_=new Date(checkInDate.value);
        let checkOutDate_=new Date(checkOutDate.value);
        let duration_of_time = checkOutDate_.getTime()  - checkInDate_.getTime();
        let duration_of_days = duration_of_time / (1000 * 3600 * 24);
        console.log(checkInDate_);
        console.log(checkOutDate_);
        console.log('Total number of your reservation day(s) is' + ' ' + duration_of_days);        

function verification(){
    if(validation()){       
        if(numPersons.value > 2){
            numpersonsErr.innerHTML='Maximum number of persons in a room is 2 ';
            numpersonsErr.style.color='red';
            return false;
        }

        let checkInDate_=new Date(checkInDate.value);
        let checkOutDate_=new Date(checkOutDate.value);
        let duration_of_time = checkOutDate_.getTime()  - checkInDate_.getTime();
        let duration_of_days = duration_of_time / (1000 * 3600 * 24);
          
        
        if(duration_of_days >= 1){
            console.log(checkInDate_);
            console.log(checkOutDate_);
            console.log('Total number of your reservation day(s) is' + ' ' + duration_of_days);
        }

        let deluxe = 'We are sorry but this room category is not available, kindly check our other options. Thank you!';
        let exclusiveCost = 35000;
        let luxuryCost = 50000;

        if(roomType.value == "Deluxe"){
            alert(deluxe);
        }
        else if(roomType.value == "Exclusive"){
            let customerCost = duration_of_days * exclusiveCost;
            console.log(customerCost);
        }
        else if(roomType.value == "Luxury"){
            let customerCost = duration_of_days * luxuryCost;
            console.log(customerCost);
        }
        // else{
        //     alert('work');
        //     alert("First name: " +firstName.value +'<br></br>' + "Last name: " + lastName.value+'<br></br>'+ "Home Address: " + homeAddress.value+'<br></br>'+ "Phone number: " + phoneNumber.value+'<br></br>'+ "Email: "+email.value+'<br></br>' +'Check-in-Date: '+checkInDate.value +'<br></br>' +'Check-out-Date: '+checkOutDate.value +'<br></br>' +'Duration: '+ duration_of_days + ' day(s)' +'<br></br>' +'Room Type: '+roomType.value +'<br></br>' +'Number of guests: '+ numPersons.value + ' person(s)' +'<br></br>' +'Total amount: '+customerCost + 'naira');
        // }
    }  
}
function onClick(){
    if(verification()){
        alert('work');
    }
    
}

function removeErr(){
    firstName.onkeydown = () => {
        firstnameErr.innerHTML='';
    };
    lastName.onkeyup = () => {
        lastnameErr.innerHTML='';
    };
    homeAddress.onkeydown = () => {
        homeaddressErr.innerHTML='';
    }
    phoneNumber.onkeyup = () => {
        phoneNumberErr.innerHTML='';
    };
    email.onkeyup = () => {
        emailErr.textContent='';
    };
    checkInDate.onkeyup = () => {
        checkinErr.innerHTML = '';
    }
    checkOutDate.onkeyup = () => {
        checkoutErr.innerHTML = '';
    }
    roomType.onkeyup = () => {
        roomtypeErr.textContent='';
    };
    numPersons.onfocus = () => {
        numpersonsErr.innerHTML='';
    };
}
removeErr();


function resetBtn() {
    alert('RESET');
    location.reload();
  }