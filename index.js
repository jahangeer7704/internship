let eye = document.getElementById("eye");
let password = document.getElementById("password");
eye.addEventListener("click", () => {
  eye.classList.toggle("fa-eye-slash");
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});

let locationChange=()=>{
window.location.assign("./signup.html")
}