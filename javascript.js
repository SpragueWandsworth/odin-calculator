
let number1 = null;
let operator = null;
let number2 = null;

const operators = document.querySelectorAll('.operator');
const digits = document.querySelectorAll('.digit');
const display = document.querySelector('.output-display');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals')

clearButton.addEventListener('click', () => {
    display.textContent = '...';
    number1 = null;
    operator = null;
    number2 = null;
});

equalsButton.addEventListener('click', () => {
    if (number1 != null && operator != null) {
    number2 = parseInt(display.textContent.split(operator).pop());
        if (number2 === 0) alert(`You can't divide by zero!`);
        else if (number2) operate(number1, operator, number2);
    };
});

for (i = 0; i < digits.length; i++) {
    let button = digits[i];
    digits[i].addEventListener('click', () => updateDisplay(button.textContent));
};
for (i = 0; i < operators.length; i++) {
    let button = operators[i];
    operators[i].addEventListener('click', () => {if (operator === null) number1 = parseInt(display.textContent)});
    operators[i].addEventListener('click', () => {if (operator === null && number1 || number1 === 0) updateDisplay(button.textContent)});
    operators[i].addEventListener('click', () => {if (operator === null && number1 || number1 === 0) operator = button.textContent});

    operators[i].addEventListener('click', () => {
        if (number1 != null && operator != null) {
        number2 = parseInt(display.textContent.split(operator).pop());
            if (number2 === 0) alert(`You can't divide by zero!`);
            else if (number2) operate(number1, operator, number2);
        }});
};

function add(num1, num2) {
    operator = null;
    return num1 + num2;
};
function subtract(num1, num2) {
    operator = null;
    return num1 - num2;
};
function multiply(num1, num2) {
    operator = null;
    return num1 * num2;
};
function divide(num1, num2) {
    operator = null;
    return +(num1 / num2).toFixed(3);
};
function operate(num1, operator, num2) {
    if (operator === '+') {
        display.textContent = (add(num1, num2));
    }
    else if (operator === '-') {
        display.textContent = (subtract(num1, num2));
    }
    else if (operator === '*') {
        display.textContent = (multiply(num1, num2));
    }
    else if (operator === '/') {
        display.textContent = (divide(num1, num2));
    };
};

function updateDisplay(num) {
    if (display.textContent === '...') {
        display.textContent = num;
    }
    else {
        display.textContent += num;
    }
};