
let number1 = null;
let operator = null;
let number2 = null;
let result = null;

const operators = document.querySelectorAll('.operator');
const digits = document.querySelectorAll('.digit');
const display = document.querySelector('.output-display');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');
const deleteButton = document.querySelector('#delete');
const decimalButton = document.querySelector('#decimal');

clearButton.addEventListener('click', () => {
    display.textContent = '';
    number1 = null;
    operator = null;
    number2 = null;
    result = null;
});

equalsButton.addEventListener('click', () => {
    if (number1 != null && operator != null) {
    number2 = Number(display.textContent.split(operator).pop());
        if (number2 === 0 && operator === '/') alert(`You can't divide by zero!`);
        else if (number2 || number2 === 0) operate(number1, operator, number2);
    };
});

deleteButton.addEventListener('click', () => {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});

decimalButton.addEventListener('click', () => {
    if (!display.textContent.includes('.') && number1 === null){updateDisplay('.')}
    else if (number1 != 'null'){
        number2 = display.textContent.split(operator).pop()
        if (!number2.includes('.')) {
            updateDisplay('.');
        };
    };
});

for (i = 0; i < digits.length; i++) {
    let button = digits[i];
    digits[i].addEventListener('click', () => updateDisplay(button.textContent));
};

for (i = 0; i < operators.length; i++) {
    let button = operators[i];
    operators[i].addEventListener('click', () => {if (operator === null) number1 = Number(display.textContent)});
    operators[i].addEventListener('click', () => {if (operator === null && number1 || number1 === 0) updateDisplay(button.textContent)});
    operators[i].addEventListener('click', () => {if (operator === null && number1 || number1 === 0) operator = button.textContent});

    operators[i].addEventListener('click', () => {
        if (number1 != null && operator != null) {
        number2 = parseInt(display.textContent.split(operator).pop());
            if (number2 === 0 && operator === '/') alert(`You can't divide by zero!`)
            else if (number2 || number2 === 0) operate(number1, operator, number2);
        }});
};

function add(num1, num2) {
    operator = null;
    return result = num1 + num2;
};
function subtract(num1, num2) {
    operator = null;
    return result = num1 - num2;
};
function multiply(num1, num2) {
    operator = null;
    return result = num1 * num2;
};
function divide(num1, num2) {
    operator = null;
    return result = +(num1 / num2).toFixed(5);
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
    number1 = null;
    number2 = null;
    operator = null;
};

function updateDisplay(input) {
    if (display.textContent === '') {
        display.textContent = input;
    }
    else if (result != null && operator === null) {
        if (!isNaN(input) || input === '.') {
        display.textContent = input;
        result = null;
        }
    }
    else {
        display.textContent += input;
    };
};

//Keyboard Support

document.addEventListener('keypress', (event) => {
    switch (event) {
        case 'b':
            console.log(1);
    };
});