function validateForm() {
    let x = document.forms["Form"]["name"].value;
    if (x == "") {
      alert("This field cannot be empty");
      return false;
    }
  }

// let form1 = document.getElementById('form1');

// function formSubmit() {
//     let response = alert(document.forms["Form"].submit());
// }
// console.log(response)