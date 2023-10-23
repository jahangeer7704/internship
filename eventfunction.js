import { password,passConfirm } from "./signup.js"
let alert=document.createElement("span")
let passMisMatch=document.createElement("span")
passMisMatch.className="alert"
alert.className="alert"
let passwordStrength=(e)=>{
    alert.innerHTML=""
    let passUpdates=password.value
    let text=passUpdates.length>8?"strong password":passUpdates.length>6 && passUpdates.length<=8?"medium password":"weak password"
    
    alert.innerHTML=text


if(text.includes("strong")){
    alert.style.color="rgb(0, 255, 26)"
}
   
else if(text.includes("medium")){
    alert.style.color="yellow"
}
else{
    alert.style.color="red"

}
password.closest("div").append(alert)
if(password.value.length===0){
    alert.remove()

}
}
let passwordValidate=()=>{
let passUpdates=password.value
passMisMatch.innerHTML="password Mismatch"
passMisMatch.style.color="red"
if(passUpdates!==passConfirm.value){
passConfirm.closest("div").append(passMisMatch)
    
}
else{
    passMisMatch.remove()
}
}
export {passwordStrength,passwordValidate}