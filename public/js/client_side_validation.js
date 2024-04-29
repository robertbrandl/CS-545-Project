
function checkString(str, fieldName){
    if (!str || str === undefined){
        throw `${fieldName} is not supplied, null, undefined, 0, false, '', or NaN`;
    }
    if (typeof str !== 'string') {
        throw `${fieldName} is not a string`;
    }
    let trimStr = str.trim();
    if (trimStr.length === 0){
        throw `${fieldName} cannot be empty`;
    }
    return trimStr;
}
function checkLoginInput(
    emailAddress,
    password
){
    let email = checkString(emailAddress, "Email");
    if(!email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )){
        throw `Email must be valid`
    }
    let pword = checkString(password, "Password");
    if (/\s/.test(pword)) throw "Password cannot contain spaces";
    if (pword.length < 8) throw "Password is not long enough";
    if ((/[A-Z]/).test(pword) === false) throw "Password must contain an uppercase letter";
    if (/\d/.test(pword) === false) throw "Password must contain a number";
    if (/[^a-zA-Z0-9]/.test(pword) === false) throw "Password must contain a special character";
    return true;
}
function checkRegisterInput(
    firstName,
    lastName,
    emailAddress,
    password,
    confirmPassword
) {
    let fname = checkString(firstName, "First Name");
    if (/\d/.test(fname)) throw "First Name cannot contain numbers";//source: https://stackoverflow.com/questions/5778020/check-whether-an-input-string-contains-a-number-in-javascript
    if (fname.length < 2 || fname.length > 25) throw "First Name length is invalid";
    let lname = checkString(lastName, "Last Name");
    if (/\d/.test(lname)) throw "Last Name cannot contain numbers";
    if (lname.length < 2 || lname.length > 25) throw "Last Name length is invalid";
    let email = checkString(emailAddress, "Email");
    //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    if(!email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )){
        throw `Email must be valid`
    }
    let pword = checkString(password, "Password");
    if (/\s/.test(pword)) throw "Password cannot contain spaces";
    if (pword.length < 8) throw "Password is not long enough";
    if ((/[A-Z]/).test(pword) === false) throw "Password must contain an uppercase letter";
    if (/\d/.test(pword) === false) throw "Password must contain a number";
    if (/[^a-zA-Z0-9]/.test(pword) === false) throw "Password must contain a special character";
    let cpword = checkString(confirmPassword, "Confirm password");
    if (pword !== cpword) throw "Passwords do not match";
    return true;
  }

function checkChangePasswordInput(
    oldPassword,
    newPassword
){
    let opword = checkString(oldPassword, "Old Password");
    if (/\s/.test(opword)) throw "Old Password cannot contain spaces";
    if (opword.length < 8) throw "Old Password is not long enough";
    if ((/[A-Z]/).test(opword) === false) throw "Old Password must contain an uppercase letter";
    if (/\d/.test(opword) === false) throw "Old Password must contain a number";
    if (/[^a-zA-Z0-9]/.test(opword) === false) throw "Old Password must contain a special character";
    let npword = checkString(newPassword, "New Password");
    if (/\s/.test(npword)) throw "New Password cannot contain spaces";
    if (npword.length < 8) throw "New Password is not long enough";
    if ((/[A-Z]/).test(npword) === false) throw "New Password must contain an uppercase letter";
    if (/\d/.test(npword) === false) throw "New Password must contain a number";
    if (/[^a-zA-Z0-9]/.test(npword) === false) throw "New Password must contain a special character";
    return true;
}

let loginForm = document.getElementById('login-form');
let regForm = document.getElementById('registration-form');
let changePasswordForm = document.getElementById('change-password-form');

if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('emailAddressInput').value;
        const password = document.getElementById('passwordInput').value;
        const errorContainer = document.getElementById('error-container');
        const errorTextElement = errorContainer.querySelector('.text-goes-here');
        const otherErrorTextElement = document.querySelector('.error');
        const spinner = document.getElementById('loading-spinner');

        spinner.classList.remove('hidden');

        fetch('/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                emailAddressInput: email,
                passwordInput: password
            })
        })
        .then(response => response.json()) 
        .then(data => {
            spinner.classList.add('hidden');
            console.log(data)

            try {
                if (data.status === 'success') {
                    window.location.href = '/';  
                } else {
                    throw new Error(data.message);
                }
            } catch (error) {
                errorTextElement.textContent = error.message;
                errorContainer.classList.remove('hidden');
                if (otherErrorTextElement) {
                    otherErrorTextElement.style.display = 'none';
                }
            }
        })
        .catch(error => {
            spinner.classList.add('hidden');
            console.error('There was a problem with the fetch operation:', error);
        });
    });
}
if (regForm) {
    const firstName = document.getElementById('firstNameInput');
    const lastName = document.getElementById('lastNameInput');
    const email = document.getElementById('emailAddressInput');
    const password= document.getElementById('passwordInput');
    const confirmPassword = document.getElementById('confirmPasswordInput');
    const errorContainer = document.getElementById('error-container');
    const errorTextElement = errorContainer.getElementsByClassName('text-goes-here')[0];
    const otherErrorTextElement = document.getElementsByClassName('error')[0];
    const spinner = document.getElementById('loading-spinner');

    regForm.addEventListener('submit', (event) =>{
        spinner.classList.remove('hidden');

        try {
            errorContainer.classList.add('hidden');
            let registerR = checkRegisterInput(firstName.value, lastName.value, email.value, password.value, confirmPassword.value);
            
        } catch(e) {
            event.preventDefault();
            const message = typeof e === 'string' ? e : e.message;
            errorTextElement.textContent = "Error: " + e;
            errorContainer.classList.remove('hidden');
            if (otherErrorTextElement){
                otherErrorTextElement.style.display = "none";
            }
            spinner.classList.add('hidden');
        }
    });
}
if (changePasswordForm){
    const oldPassword = document.getElementById('oldPasswordInput');
    const newPassword = document.getElementById('newPasswordInput');
    const errorContainer = document.getElementById('error-container');
    const errorTextElement =
      errorContainer.getElementsByClassName('text-goes-here')[0];
    const otherErrorTextElement =
      document.getElementsByClassName('error')[0];
    changePasswordForm.addEventListener('submit', (event) =>{
        try{
            errorContainer.classList.add('hidden');
            let changepword = checkChangePasswordInput(oldPassword.value, newPassword.value);
        }catch(e){
            event.preventDefault();
            const message = typeof e === 'string' ? e : e.message;
            errorTextElement.textContent = "Error: " + e;
            errorContainer.classList.remove('hidden');
            if (otherErrorTextElement){
                otherErrorTextElement.style.display = "none";
            }
        }
    });
}
