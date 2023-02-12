
// step-1: Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: Get the email address inside the email input field
    // always remember to add .value to get the text from input field
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    // step-3: get password
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    
    // DANGER : DO NO VERIFY EMAIL AND PASS ON THE CLIENT SITE

    // step-4: verify email and password
    if(email === 'sontan@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }

})