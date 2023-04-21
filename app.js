const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const operationBtn = document.querySelectorAll(".operator");
const numberBtn = document.querySelectorAll(["data-number"]);
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equalsBtn = document.getElementById("equals");
const btns=document.querySelectorAll(".btns");
// var calculateValue;
let num="";
window.onload = clear();

btns.forEach(btn => {
    btn.addEventListener("click",()=>{
    let n2=currentOperand.innerHTML=num.concat(btn.innerHTML);
    num=n2;  
    })
})

equalsBtn.addEventListener("click",calculateValue);
clearBtn.addEventListener("click",()=>{
    currentOperand.innerHTML = "";
    previousOperand.innerHTML = "";
    num="";
});
deleteBtn.addEventListener("click",del(currentOperand.innerHTML));

// numberBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     appendNumber(btn);
//     updateDisplay();
//   });
// });

// operationBtn.forEach((operator) => {
//   operator.addEventListener("click", () => {
//     chooseOperation(operator.innerHTML);
//     updateDisplay();
//   });
// });

// function updateDisplay() {
//     this.currentOperand.innerHTML = this.currentOperand;
//      this.previousOperand.innerHTML = this.previousOperand;
//   }

function clear() {
  currentOperand.innerHTML = "";
  previousOperand.innerHTML = "";
  // operation=undefined;
}

function del(number){
    number=number.slice(0,-1);
    }
    
function appendNumber(number) {
  if (number.innerHTML === "." && currentOperand.innerHTML.includes("."))return;
  currentOperand.innerHTML=currentOperand.innerHTML.toString() + number.innerHTML.toString();
}

function chooseOperation(operator) {
  this.operator = operator;
  this.previousOperand = this.currentOperand;
this.currentOperand="";
}

function calculateValue() {
previousOperand.innerHTML=currentOperand.innerHTML;
currentOperand.innerHTML=eval(currentOperand.innerHTML.toString()).toFixed(3);
}












