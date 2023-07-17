//invok all elements
let fname = document.getElementById("fname")
let erroname=document.getElementById("erroname")
let lname = document.getElementById("lname")
let bdate = document.getElementById("bdate")
let eemail = document.getElementById("eemail")
let cemail = document.getElementById("cemail")
let password = document.getElementById("password")
let cpassword = document.getElementById("cpassword")
let submit = document.getElementById("submit")
let errolname=document.getElementById("errolname")
let errobirth = document.getElementById("errobirth")
let erroemail = document.getElementById("erroemail")
let errocemail = document.getElementById("errocemail")
let erropassword = document.getElementById("errpassword")
let errocpassword = document.getElementById("errocpassword")

submit.onclick= function () {
    let fnamere = fname.value;
    let fnamtest = /[^0-9]|[^0-9][a-z|A-Z]/g;
 
if(fnamere.match(fnamtest)){
    erroname.innerText="The name is valid"
}else{
    erroname.innerText="number is not allow"
}
let lnamere = lname.value;
let lnamtest = /[^0-9]|[^0-9][a-z|A-Z]/g;

if(lnamere.match(lnamtest)){
errolname.innerText="The name is valid"
}else{
errolname.innerText="number is not allow"
}

let bdatere = bdate.value;
    let bdatetest =/^[0-9]{1,2}\/{1}[0-9]{1,2}\/{1}[0-9]{4}$/gi;
 
if(bdatere.match(bdatetest)){
    errobirth.innerText="The name is valid"
}else{
    errobirth.innerText="The formal should be ddd/mmm/yyy"
} console.log(bdatere.match(bdatetest))

let eemailre = eemail.value;
let cemailre = cemail.value;
    let emailtest = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gi;
   
if(eemailre.match(emailtest)){
    erroemail.innerText="The email is valid"
   
}else{
    erroemail.innerText="you can not allow use these "
    
}
 if (eemailre ===cemailre) {
        errocemail.innerText="The email is valid"
    }else{
        errocemail.innerText="The email is not valid"
    }


    let passwordre = password.value;
let cpasswordre = cpassword.value;
    let passwordtest = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gi;
   
if(passwordre.match(passwordtest)){
    erropassword.innerText="The password is true"
   
}else{
    erropassword.innerText="The password is true "
    
}
 if (cpasswordre ===passwordre) {
    errocpassword.innerText="The password is macth"
    }else{
        errocpassword.innerText="The password is not macth"
    }

}