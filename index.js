let parentElement=document.getElementById("parent");
let spinnerParent=document.createElement("div")
spinnerParent.classList="h-screen   fixed top-0 w-screen backdrop-blur-sm"

let spinner=document.createElement("div")
spinner.classList="h-36 w-36 border-l-8 border border-cyan-400 animate-spin  rounded-full relative top-[40%] block mx-auto"
spinnerParent.append(spinner)
parentElement.append(spinnerParent)

window.addEventListener("DOMContentLoaded",()=>{
let init=setInterval(()=>{
clearInterval(init)
  spinnerParent.remove()
App()
 
},100)
})

function App(){
  let main = document.querySelector("main");
  main.addEventListener("click", targetButton);
  
  let arr = [];
  let span = document.createElement("span");
  let h1=document.querySelector("h1")
  let replayGame = document.createElement("div");
  
  function targetButton(e) {
    let targetCaught = e.target;
    if (targetCaught.tagName === "BUTTON") {
      
      
        let arrLen = arr.length;
        let turnChooser = arrLen % 2 == 0 ? "x" : "o";
       
        if (turnChooser === "x") {
          let nextValPush =
            targetCaught.innerHTML !== "X" && targetCaught.innerHTML !== "O"
              ? true
              : false;
          if (nextValPush) {
            themesetter(turnChooser)
            arr.push(1);
            targetCaught.classList.add("text-red-500")
            targetCaught.innerHTML = "X";
            winnerEval();
         
          }
        } else {
          let nextValPush =
            targetCaught.innerHTML !== "X" && targetCaught.innerHTML !== "O"
              ? true
              : false;
          if (nextValPush) {
            themesetter(turnChooser)
            arr.push(1);
            targetCaught.classList.add("text-green-500")
            
            targetCaught.innerHTML = "O";
            
            
          }
        }
    }
  }
  
  
  function winnerEval() {
    let button = document.getElementsByClassName("button");
  
    let innerValue = [];
    for (let i = 0; i < button.length; i++) {
      innerValue.push(button[i].innerHTML);
    }
    let winnerx =
      (innerValue[0] === "X" && innerValue[1] === "X" && innerValue[2] === "X") ||
      (innerValue[3] === "X" && innerValue[4] === "X" && innerValue[5] === "X") ||
      (innerValue[6] === "X" && innerValue[7] === "X" && innerValue[8] === "X") ||
      (innerValue[0] === "X" && innerValue[4] === "X" && innerValue[8] === "X") ||
      (innerValue[2] === "X" && innerValue[4] === "X" && innerValue[6] === "X") ||
      (innerValue[0] === "X" && innerValue[3] === "X" && innerValue[6] === "X") ||
      (innerValue[1] === "X" && innerValue[4] === "X" && innerValue[7] === "X") ||
      (innerValue[2] === "X" && innerValue[5] === "X" && innerValue[8] === "X");
    let winnero =
      (innerValue[0] === "O" && innerValue[1] === "O" && innerValue[2] === "O") ||
      (innerValue[3] === "O" && innerValue[4] === "O" && innerValue[5] === "O") ||
      (innerValue[6] === "O" && innerValue[7] === "O" && innerValue[8] === "O") ||
      (innerValue[0] === "O" && innerValue[4] === "O" && innerValue[8] === "O") ||
      (innerValue[2] === "O" && innerValue[4] === "O" && innerValue[6] === "O") ||
      (innerValue[0] === "O" && innerValue[3] === "O" && innerValue[6] === "O") ||
      (innerValue[1] === "O" && innerValue[4] === "O" && innerValue[7] === "O") ||
      (innerValue[2] === "O" && innerValue[5] === "O" && innerValue[8] === "O");
  
    if (winnero) {
    main.removeEventListener("click", targetButton);
      span.classList =
        "text-green-500 block w-full h-20 text-2xl text-center font-extrabold mt-6";
      span.textContent = "O is the winner";
      main.append(span);
      replay();
  
    } else if (winnerx) {
    main.removeEventListener("click", targetButton);
      span.classList = "text-red-500 block w-full h-20 text-2xl text-center font-extrabold mt-6";
      span.textContent = "X is the winner";
      main.append(span);
      replay();
    }
    
    if(!winnerx && !winnero){
      if (arr.length === 9) {
        matchDraw();
      }
    }
  }
  
  function replay() {
    replayGame.classList =
      "h-12 w-36 bg-cyan-400 text-black font-bold text-center rounded-lg mx-auto p-3 cursor-pointer";
    replayGame.textContent = "RESTART";
  
    main.append(replayGame);
    replayGame.addEventListener("click", () => {
      replayGame.remove()
      span.remove()
      location.reload();
    });
  }
  function matchDraw() {
    main.removeEventListener("click", targetButton);
    span.classList = "text-gray-300 block w-full h-20 text-2xl font-extrabold text-center mt-6";
    span.textContent = "Match Draw";
    main.append(span);
    replay();
  }
  
  function themesetter(turn){
    if(turn==="x"){
      let button = document.getElementsByClassName("button");
      for(let i=0; i<button.length; i++){
  
        button[i].classList.remove("border-red-400")
  
        button[i].classList.add("border-green-400")
  
      }
      
      h1.classList.add("text-green-400")
  h1.classList.remove("text-red-400")
  
  
  
    }
    else   if(turn==="o"){
      let button = document.getElementsByClassName("button");
      for(let i=0; i<button.length; i++){
  
        button[i].classList.add("border-red-400")
        button[i].classList.remove("border-green-400")
      }
      h1.classList.remove("text-green-400")
      h1.classList.add("text-red-400") 
  
  
  
    }
  }
  
  
}