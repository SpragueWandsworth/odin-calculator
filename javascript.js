
let number1 = null;
let operator = null;
let number2 = null;

const operators = document.querySelectorAll('.operator');
const digits = document.querySelectorAll('.digit');
const display = document.querySelector('.output-display');
const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', () => display.textContent = '...');
addEventListener('keypress', (event) => {
    if (event.key === '=') {
        number2 = parseInt(display.textContent.split(operator).pop());
        operate(number1, operator, number2);
    };
});

for (i = 0; i < digits.length; i++) {
    let button = digits[i];
    digits[i].addEventListener('click', () => updateDisplay(button.textContent));
};
for (i = 0; i < operators.length; i++) {
    let button = operators[i];
    operators[i].addEventListener('click', () => number1 = parseInt(display.textContent));
    operators[i].addEventListener('click', () => operator = button.textContent);
    operators[i].addEventListener('click', () => updateDisplay(button.textContent));
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