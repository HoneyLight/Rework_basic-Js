        let firstname = document.getElementById('fname');
        let firstNameErr = document.getElementById('firstNameErr');
        let middlename = document.getElementById('Mname');
        let middleNameErr = document.getElementById('middleNameErr');
        let lastname = document.getElementById('Lname');
        let lastNameErr = document.getElementById('lastNameErr');
        let gender = document.getElementById('gender'); 
        let email = document.getElementById("email");
        let phoneNumber = document.getElementById("Pnumber");
        let phoneNumErr = document.getElementById('phoneNumErr');
        let accNum = document.getElementById("Accnum");
        let accNumErr = document.getElementById('accNumErr');
        let bvn = document.getElementById("bvn");
        let bvnErr = document.getElementById('bvnErr')
        let amtLoanNeeded = document.getElementById('Lamount');
        let amtLoanNeededErr = document.getElementById('amtLoanNeededErr')
        let accountBalance = document.getElementById('Abalance');
        let accountBalErr = document.getElementById('accountBalErr');
        let creditHistory = document.getElementById('Chistory');
        let creditHistoryErr = document.getElementById('creditHistoryErr');
        let lastDepositDate = document.getElementById('Ldeposit');
        let lastDepositErr = document.getElementById('lastDepositErr');
        let lastLoanDate = document.getElementById('Lloan');
        let lastLoanDateErr = document.getElementById('lastLoanDateErr');
        let loanRepaymentDate = document.getElementById('Lrepayment');
        let loanRepaymentErr = document.getElementById('loanRepaymentErr');
        let accountType = document.querySelectorAll('input[name="acc-type"]');
        let btn = document.getElementById('btn');

        let x = 10;
        let y = 5;
        let userPoint = 0;

        function myFunction() {
            validation();
            accountDetails();
            loanDetails();
            // userTotalPoint();
        }

        function validation() {
            if (firstname.value == undefined || firstname.value == "") {
                firstNameErr.innerHTML = 'Required';
                firstNameErr.classList.add('errormsg');
                return false;
            }
            if (middlename.value == undefined || middlename.value == ""){
                middleNameErr.innerHTML = 'Required';
                middleNameErr.classList.add('errormsg');
                return false;
            }

            if (lastname.value == undefined || lastname.value == ""){
                lastNameErr.innerHTML = 'Required';
                lastNameErr.classList.add('errormsg');
                return false;
            }
            if (gender.value == null || gender.value== ""){
                alert("please input your Gender");
                return false;
            }
            if (email.value == null || email.value=="")
              {  alert('please input your email');
              return false;}

            if ( phoneNumber.value.length < 11 ){
                phoneNumErr.innerHTML = 'Phonenumber is required';
                phoneNumErr.classList.add('errormsg');
                return false;
            }
            return true;
        }

        function accountDetails() {
           if(validation()){
            if (accNum.value.length <= 10) {
                accNumErr.innerHTML = 'Account number is required';
                accNumErr.classList.add('errormsg');
                return false;
            }
            if (bvn.value.length <= 10) {
                bvnErr.innerHTML = 'Bank verification number is required';
                bvnErr.classList.add('errormsg');
                return false;
            }
            if (amtLoanNeeded.value== null || amtLoanNeeded.value=="") {
                amtLoanNeededErr.innerHTML = 'Required';
                amtLoanNeededErr.classList.add('errormsg');
                return false;
            }            
            if (accountBalance.value== null || accountBalance.value=="") {
                accountBalErr.innerHTML = 'Required';
                accountBalErr.classList.add('errormsg');
                return false;
            }
            if (creditHistory.value== null || creditHistory.value=="") {
                creditHistoryErr.innerHTML = 'Required';
                creditHistoryErr.classList.add('errormsg');
                return false;
                }
            if (lastDepositDate.value== null || lastDepositDate.value=="") {
                lastDepositErr.innerHTML = 'Required';
                lastDepositErr.classList.add('errormsg');
                return false;
            }
            if (lastLoanDate.value== null || lastLoanDate.value=="") {
                lastLoanDateErr.innerHTML = 'Required';
                lastLoanDateErr.classList.add('errormsg');
                return false;
            }
            if (loanRepaymentDate.value== null || loanRepaymentDate.value=="") {
                loanRepaymentErr.innerHTML = 'Required';
                loanRepaymentErr.classList.add('errormsg');
                return false;
            }
            return true;
           }
           else{return false}
        }


        function loanDetails() {
            if(accountDetails()){

            if (accountBalance.value > amtLoanNeeded.value) {
                // console.log(userPoint + x);
                userPoint=userPoint + x;
                console.log(userPoint);
                // return false;
            }
            else if (accountBalance.value < amtLoanNeeded.value) {
                userPoint=userPoint - x;
                console.log(userPoint);
                // return false;
            }
    // if(creditHistory <= 6) {
    //     userPoint=userPoint + x;
    //     // return false;
    // }
    // else if (creditHistory > 6) {
    //     userPoint=userPoint - x;
    //     // return false;
    // }

    // let lastDepositDate_ = new Date(lastDepositDate.value);
    // let todaysDate = new Date();
    // let diff_in_days = (lastDepositDate_.getFullYear() * 12 + lastDepositDate_.getMonth() + lastDepositDate_.getDate()) - (todaysDate.getFullYear() * 12 + todaysDate.getMonth() + todaysDate.getDate());
        
    // if (lastDepositDate <= 30) {
    //     console.log(lastDepositDate.value);
    //     console.log(diff_in_days);
    //     userPoint=userPoint + y;
    //     // return false;
    // }
    // else if (lastDepositDate > 30) {
    //     console.log(lastDepositDate.value);
    //     console.log(diff_in_days);
    //     userPoint=userPoint - y;
    //     // return false;
    // }

    // let lastLoanDate_ = new Date(lastLoanDate.value)
    // let currentDate = new Date();
    // let diff_in_months = (lastLoanDate_.getFullYear() * 12 + lastLoanDate_.getMonth()) - (currentDate.getFullYear() * 12 + currentDate.getMonth());
    
    // if (lastLoanDate > 6){
    //     console.log(lastLoanDate.value);
    //     console.log(diff_in_months);
    //     userPoint=userPoint + x;   
    //     // return false;             
    // }
    // else if (lastLoanDate < 6){
    //     console.log(lastLoanDate.value);
    //     console.log(diff_in_months);
    //     userPoint=userPoint - x;     
    //     // return false;           
    // }

    // let loanRepaymentDate_ = new Date(loanRepaymentDate.value)
    // let presentDate = new Date();
    // let repayment_diff_in_months = (loanRepaymentDate_.getFullYear() * 12 + loanRepaymentDate_.getMonth()) - (presentDate.getFullYear() * 12 + presentDate.getMonth());
        
    // if (loanRepaymentDate < 6){
    //     console.log(loanRepaymentDate.value);
    //     console.log(repayment_diff_in_months);
    //     userPoint=userPoint + y;
    //     console.log(userPoint);
    //     // return false;
    // }
    // else if (loanRepaymentDate >= 6){
    //     console.log(loanRepaymentDate.value);
    //     console.log(repayment_diff_in_months);
    //     userPoint=userPoint - y;
    //     console.log(userPoint);
    //     // return false;
    // }
    // if(accountType.value == 'current') {
    //     userPoint=userPoint + x;
    //     console.log(userPoint);
    //     // return false;
    // }
    // else if(accountType.value == 'savings') {
    //     userPoint=userPoint + y;
    //     console.log(userPoint);
    //     // return false;
    // }
    if (userPoint > 30) {
        console.log('congratulations,' + ' ' + firstname.value + ' ' + 'you are qualified for this loan');
    }
    else {
        console.log('Sorry,' + ' ' + firstname.value + ' ' + 'you are not qualified to get this loan');
    }

}}
    