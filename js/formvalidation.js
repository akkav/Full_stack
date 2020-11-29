var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var form = document.getElementById("form");

//Events handler

form.addEventListener('submit' , function(e){
    e.preventDefault(); //data will not submit tot the server
    checkinputs();

})

//Functions

function checkinputs(){

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue ===''){

        showError(username, "Username can not be blank");
    }else if(!isUsernameValid(usernameValue)){
        showError(username,"Username is not valid");

    }
       else{
           showSuccess(username);
       }
       if (emailValue ===''){

        showError(email, "Username can not be blank");
    }
    else if(!isEmailValid(emailValue)){
        showError(email,"Email is not valid")
    }
       else{
           showSuccess(email);
       }
       if (password1Value ===''){

        showError(password1, "Password can not be blank");
    }
       else{
           showSuccess(password1);
       }
       if (password2Value ===''){

        showError(password2, "Password can not be blank");
    }else if(password2Value != password1Value){
        showError(password2,"Password did not matched")
    }
       else{
           showSuccess(password2);
       }

}


function showError(input,msg){

    const formControl = input.parentNode;
    formControl.className ='form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;

}

function showSuccess(input){

    const formControl = input.parentNode;
    formControl.className ='form-control success';

}


function isEmailValid(email){
    return /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}

function isUsernameValid(username){
    return /^([a-z]+)$/.test(username);
}
