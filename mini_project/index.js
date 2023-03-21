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
        // let accountType = document.querySelectorAll('input[name="account"]');
        let amtLoanNeeded = document.getElementById('Lamount');
        let amtLoanNeededErr = document.getElementById('amtLoanNeededErr')
        let accountBalance = document.getElementById('Abalance');
        let accountBalErr = document.getElementById('accountBalErr');
        let creditHistory = document.getElementById('Chistory');
        let creditHistoryErr = document.getElementById('creditHistoryErr');
        let lastDeposit = document.getElementById('Ldeposit');
        let lastDepositErr = document.getElementById('lastDepositErr');
        let lastLoanDate = document.getElementById('Lloan');
        let lastLoanDateErr = document.getElementById('lastLoanDateErr');
        let loanRepayment = document.getElementById('Lrepayment');
        let loanRepaymentErr = document.getElementById('loanRepaymentErr');
        let accountType = document.querySelectorAll('input[name="acc-type"]');
        let btn = document.getElementById('btn');



        function myFunction() {
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
            else if (lastDeposit.value== null || lastDeposit.value=="") {
                lastDepositErr.innerHTML = 'Required';
                lastDepositErr.classList.add('errormsg');
            }
            else if (lastLoanDate.value== null || lastLoanDate.value=="") {
                lastLoanDateErr.innerHTML = 'Required';
                lastLoanDateErr.classList.add('errormsg');
            }
            else if (loanRepayment.value== null || loanRepayment.value=="") {
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
            let userScore = 0;

            if (accountBalance > amtLoanNeeded) {
                let userScore1 = userScore + x;
                // alert('congratulations,' + ' ' + firstname + ' ' + 'you just won 10points');
                console.log(userScore1);
            }
            else if (accountBalance < amtLoanNeeded) {
                let userScore1 = userScore - x;
                alert('Sorry,' + ' ' + firstname + ' ' + 'you just lost 10points');
                console.log(userScore1);
            }
            else if(creditHistory <= 6) {
                let userScore2 = userScore1 + x;
                // alert('congratulations,' + ' ' + firstname + ' ' + 'you just won 10points');
                console.log(userScore2);
            }
            else if (creditHistory > 6) {
                let userScore2 = userScore1 - x;
                // alert('Sorry,' + ' ' + firstname + ' ' + 'you just lost 10points');
                console.log(userScore2);
            }
            else if (lastDeposit <= 31) {
                let userScore3 = userScore2 + y;
                // alert('congratulations,' + ' ' + firstname + ' ' + 'you just won 5points');
                console.log(userScore3);
            }
            else if (lastDeposit > 31) {
                let userScore3 = userScore2 - y;
                // alert('Sorry,' + ' ' + firstname + ' ' + 'you just lost 5points');
                console.log(userScore3);
            }
            else if(lastLoanDate > 6){
                let userScore4 = userScore3 + x;
                // alert('congratulations,' + ' ' + firstname + ' ' + 'you just won 10points');
                console.log(userScore4);
            }
            else if(lastLoanDate <= 6){
                let userScore4 = userScore3 - x;
                console.log(userScore4);
            }
            else if(loanRepayment < 6){
                let userScore5 = userScore4 + y;
                console.log(userScore5);
            }
            else if(loanRepayment >= 6){
                let userScore5 = userScore4 - y;
                console.log(userScore5);
            }
            else if(accountType.value == 'current') {
                let userScore6 = userScore5 + x;
                console.log(userScore6);
            }
            else if(accountType.value == 'savings') {
                let userScore6 = userScore5 + y;
                console.log(userScore6);
            }
            else userTotalScore();
        }

        function userTotalScore(){
            if (userScore6 > 30) {
                alert('congratulations,' + ' ' + firstname + ' ' + 'you are qualified for the loan');
            }
            else {
                alert('Sorry,' + ' ' + firstname + ' ' + 'you are not qualified to get the loan');
            }
        }
