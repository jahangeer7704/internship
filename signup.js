import {passwordStrength,passwordValidate} from "./eventfunction.js"

let submit= document.getElementById('submit');
let form=document.querySelector("form")
let input=document.querySelectorAll("input");
let password=document.getElementById('password');
let passConfirm=document.getElementById("passConfirm");

let data={}

submit.addEventListener("click",(e)=>{
    
     
})

password.addEventListener("input",passwordStrength)
passConfirm.addEventListener("input",passwordValidate)

export{password,passConfirm}