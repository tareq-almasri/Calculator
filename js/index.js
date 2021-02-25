const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const num10 = document.querySelector(".num10");
const addResult = document.querySelector(".addResult");
const divideResult = document.querySelector(".divideResult");
const multiplyResult = document.querySelector(".multiplyResult");
const subtractResult = document.querySelector(".subtractResult");
const remainderResult = document.querySelector(".remainderResult");

const add = () => {
  addResult.value = Number(num1.value) + Number(num2.value);
};

const subtract = () => {
  subtractResult.value = Number(num3.value) - Number(num4.value);
};

const multiply = () => {
  multiplyResult.value = Number(num5.value) * Number(num6.value);
};

const divide = () => {
  divideResult.value = Number(num7.value) / Number(num8.value);
};

const remainder = () => {
  remainderResult.value = Number(num9.value) % Number(num10.value);
};

window.onload = function init() {
  // or window.addEventListener('load',init())
  num1.addEventListener("keyup", add);
  num2.addEventListener("keyup", add);
  num3.addEventListener("keyup", subtract);
  num4.addEventListener("keyup", subtract);
  num5.addEventListener("keyup", multiply);
  num6.addEventListener("keyup", multiply);
  num7.addEventListener("keyup", divide);
  num8.addEventListener("keyup", divide);
  num9.addEventListener("keyup", remainder);
  num10.addEventListener("keyup", remainder);
};
