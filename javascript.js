
let number1 = null;
let operator = null;
let number2 = null;

const digits = document.querySelectorAll('.digit');

for (i = 0; i < digits.length; i++) {
    let button = digits[i];
    digits[i].addEventListener('click', () => alert(button.textContent));
};

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(num1, operator, num2) {
    if (operator === '+') {
        console.log(add(num1, num2));
    }
    else if (operator === '-') {
        console.log(subtract(num1, num2));
    }
    else if (operator === '*') {
        console.log(multiply(num1, num2));
    }
    else if (operator === '/') {
        console.log(divide(num1, num2));
    };
};