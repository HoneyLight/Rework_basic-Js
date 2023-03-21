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
            }
            else if (middlename.value == undefined || middlename.value == ""){
                middleNameErr.innerHTML = 'Required';
                middleNameErr.classList.add('errormsg');
            }

            else  if (lastname.value == undefined || lastname.value == ""){
                lastNameErr.innerHTML = 'Required';
                lastNameErr.classList.add('errormsg');
            }
            else if (gender.value == null || gender.value== ""){
                alert("please input your Gender");
            }
            else if (email.value == null || email.value=="")
                alert('please input your email');

            else if ( phoneNumber.value.length < 11 ){
                phoneNumErr.innerHTML = 'Phonenumber is required';
                phoneNumErr.classList.add('errormsg');
            }
            else {
                accountDetails();
            }
        }

        function accountDetails() {
            if (accNum.value.length <= 10) {
                accNumErr.innerHTML = 'Account number is required';
                accNumErr.classList.add('errormsg');
            }
            else if (bvn.value.length <= 10) {
                bvnErr.innerHTML = 'Bank verification number is required';
                bvnErr.classList.add('errormsg');
            }
            else if (amtLoanNeeded.value== null || amtLoanNeeded.value=="") {
                amtLoanNeededErr.innerHTML = 'Required';
                amtLoanNeededErr.classList.add('errormsg');
            }            
            else if (accountBalance.value== null || accountBalance.value=="") {
                accountBalErr.innerHTML = 'Required';
                accountBalErr.classList.add('errormsg');
            }
            else if (creditHistory.value== null || creditHistory.value=="") {
                creditHistoryErr.innerHTML = 'Required';
                creditHistoryErr.classList.add('errormsg');
                }
            else if (lastDepositDate.value== null || lastDepositDate.value=="") {
                lastDepositErr.innerHTML = 'Required';
                lastDepositErr.classList.add('errormsg');
            }
            else if (lastLoanDate.value== null || lastLoanDate.value=="") {
                lastLoanDateErr.innerHTML = 'Required';
                lastLoanDateErr.classList.add('errormsg');
            }
            else if (loanRepaymentDate.value== null || loanRepaymentDate.value=="") {
                loanRepaymentErr.innerHTML = 'Required';
                loanRepaymentErr.classList.add('errormsg');
            }
            else{
                loanDetails();
            }
        }


        function loanDetails() {
            let x = 10;
            let y = 5;
            let userPoint = 0;

            if (accountBalance > amtLoanNeeded) {
                console.log(userPoint + x);
            }
            else if (accountBalance < amtLoanNeeded) {
                console.log(userPoint - x);
            }
            if(creditHistory <= 6) {
                console.log(userPoint + x);
            }
            else if (creditHistory > 6) {
                console.log(userPoint - x);
            }

            let lastDepositDate_ = new Date(lastDepositDate.value);
            let todaysDate = new Date();
            let diff_in_days = (lastDepositDate_.getFullYear() * 12 + lastDepositDate_.getMonth() + lastDepositDate_.getDate()) - (todaysDate.getFullYear() * 12 + todaysDate.getMonth() + todaysDate.getDate());
                
            if (lastDepositDate <= 30) {
                console.log(lastDepositDate.value);
                console.log(diff_in_days);
                console.log(userPoint + y);
            }
            else if (lastDepositDate > 30) {
                console.log(lastDepositDate.value);
                console.log(diff_in_days);
                console.log(userPoint - y);
            }

            let lastLoanDate_ = new Date(lastLoanDate.value)
            let currentDate = new Date();
            let diff_in_months = (lastLoanDate_.getFullYear() * 12 + lastLoanDate_.getMonth()) - (currentDate.getFullYear() * 12 + currentDate.getMonth());
            
            if (lastLoanDate > 6){
                console.log(lastLoanDate.value);
                console.log(diff_in_months);
                console.log(userPoint + x);                
            }
            else if (lastLoanDate < 6){
                console.log(lastLoanDate.value);
                console.log(diff_in_months);
                console.log(userPoint - x);                
            }

            let loanRepaymentDate_ = new Date(loanRepaymentDate.value)
            let presentDate = new Date();
            let repayment_diff_in_months = (loanRepaymentDate_.getFullYear() * 12 + loanRepaymentDate_.getMonth()) - (presentDate.getFullYear() * 12 + presentDate.getMonth());
                
            if (loanRepaymentDate < 6){
                console.log(loanRepaymentDate.value);
                console.log(repayment_diff_in_months);
                console.log(userPoint + y);
            }
            else if (loanRepaymentDate >= 6){
                console.log(loanRepaymentDate.value);
                console.log(repayment_diff_in_months);
                console.log(userPoint - y);
            }
            if(accountType.value == 'current') {
                console.log(userPoint + x);
            }
            else if(accountType.value == 'savings') {
                console.log(userPoint + y);
            }
            if (userPoint > 30) {
                console.log('congratulations,' + ' ' + firstname + ' ' + 'you are qualified for this loan');
            }
            else {
                console.log('Sorry,' + ' ' + firstname + ' ' + 'you are not qualified to get this loan');
            }
            // else userTotalPoint();
        }

        
        // function userTotalPoint(){
        //     if (userPoint > 30) {
        //         alert('congratulations,' + ' ' + firstname + ' ' + 'you are qualified for this loan');
        //     }
        //     else {
        //         alert('Sorry,' + ' ' + firstname + ' ' + 'you are not qualified to get this loan');
        //     }
        // }

