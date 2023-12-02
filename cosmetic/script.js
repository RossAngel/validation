var email=document.getElementById("email");

var err1=document.getElementById("err1");





btnSubmit.onclick = function validate(){
    
    if(email.value==""|| pass.value==""){
        err1.innerHTML="Field cannot be empty";
        err1.style.color="red"
        err2.innerHTML="Field cannot be empty";
        err2.style.color="red"
        email.style.border="2px solid red";
        return false
    }
    else if(!regex.test(email.value)){
        err1.innerHTML="Please enter proper Email";
        err1.style.color="red"
        email.style.border="2px solid red";
        return false
    }
    else{
        err1.innerText="";
        email.style.border="2px solid green";
        return true
    }
    

}
var pass=document.getElementById("password");
var err2=document.getElementById("err2");
var passwordValue=passwordInput.value;
var minLength=8
var hasLetter=/[a-zA-Z]/.test(passwordValue);
var hasNumber=/\d/.test(passwordValue);

        if(passwordValue.Length>=minLength&&hasLetter&&hasNumber){
            passwordInput.setCustomvalidity('');
        }
        else{
            passwordInput.setCustomvalidity('Password must me atleast 8');
        }
