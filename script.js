const inputEl1 = document.getElementById("number1");
const inputEl2 = document.getElementById("number2");
const resultEl = document.getElementById("result");

let num1, num2;

let add = false;
let sub = false;
let mul = false;
let div = false;

const sum = () => {
  num1 = parseFloat(inputEl1.value);
  num2 = parseInt(inputEl2.value);
  add = true;
  sub = false;
  mul = false;
  div = false;
};

const multiply = () => {
  num1 = parseFloat(inputEl1.value);
  num2 = parseFloat(inputEl2.value);
  mul = true;
  add = false;
  sub = false;
  div = false;
};
const divide = () => {
  num1 = parseFloat(inputEl1.value);
  num2 = parseFloat(inputEl2.value);
  div = true;
  add = false;
  sub = false;
  mul = false;
};
const subtraction = () => {
  num1 = parseFloat(inputEl1.value);
  num2 = parseFloat(inputEl2.value);
  sub = true;
  add = false;
  div = false;
  mul = false;
};

function equal() {
  if (add === true) {
    resultEl.innerHTML = `${inputEl1.value} + ${inputEl2.value} = ${num1 + num2}`;
  } else if (sub === true) {
    resultEl.innerHTML = `${inputEl1.value} - ${inputEl2.value} = ${num1 - num2}`;
  } else if (mul === true) {
    resultEl.innerHTML = `${inputEl1.value} * ${inputEl2.value} = ${num1 * num2}`;
  } else if (div === true) {
    resultEl.innerHTML = `${inputEl1.value} / ${inputEl2.value} = ${num1 / num2}`;
  } else {
    resultEl.innerHTML = "Select a condition";
  }
}
