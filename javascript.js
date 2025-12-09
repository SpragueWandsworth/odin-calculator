
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

equalsButton.addEventListener('click', () => evaluate());

deleteButton.addEventListener('click', () => deleteLast());

decimalButton.addEventListener('click', () => addDecimal());

for (i = 0; i < digits.length; i++) {
    let button = digits[i];
    digits[i].addEventListener('click', () => updateDisplay(button.textContent));
};

for (i = 0; i < operators.length; i++) {
    let button = operators[i];
    operators[i].addEventListener('click', () => {if (operator === null && !'+-*/'.includes(display.textContent)) number1 = Number(display.textContent)}); // && result === null
    operators[i].addEventListener('click', () => {if (operator === null && number1 || number1 === 0) updateDisplay(button.textContent)});
    operators[i].addEventListener('click', () => {if (operator === null && number1 || number1 === 0) operator = button.textContent});

    operators[i].addEventListener('click', () => {
        if (number1 != null && operator != null) {
            let split = display.textContent.split(operator);
            if (split[1]){
                number2 = parseInt(split.pop());
                console.log(number2 + ' is number 2');
            }
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
    return result = +(num1 / num2).toFixed(4);
};

function operate(num1, operator, num2) {
    console.log(`${num1} is num1, ${operator} is the operator, ${num2} is num2`)
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
    number1 = result;
    number2 = null;
    operator = null;
};

function updateDisplay(input) {
    if (Number(display.textContent) === result && !'+-*/'.includes(input)) {
        display.textContent = input;
    }
    else {
    display.textContent += input;
    };
};
    //if (display.textContent === '') {
        //display.textContent = input;
    //}
    //else if (result != null && operator === null) {
        //if (!isNaN(input) || input === '.') {
        //display.textContent = input;
        //result = null;
        //}
        //else if (display.textContent != ''){
            //console.log('here')
            //display.textContent+= input;
        //}
    //}
    //else {
        //console.log('aqui')
        //display.textContent += input;
    //};
//};

function deleteLast() {
    let removedNumber = display.textContent.slice(-1);
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    let temparr = display.textContent.split(operator);
    number1 = Number(temparr[0]);
    if (temparr[1]) {
        number2 = Number(temparr[1]);
    }
    if ('+-*/'.includes(removedNumber)) {
        console.log('operator removed');
        operator = null;
    };
};

function evaluate() {
    if (number1 != null && operator != null) {
        number2 = Number(display.textContent.split(operator).pop()); //test parseint 
        if (number2 === 0 && operator === '/') alert(`You can't divide by zero!`);
        else if (number2 || number2 === 0) operate(number1, operator, number2);
    };
};

function addDecimal() {
    if (!display.textContent.includes('.') && number1 === result){updateDisplay('.')}
    else if (number1 != null){
        number2 = display.textContent.split(operator).pop();
        if (!number2.includes('.')) {
            updateDisplay('.');
        };
    };
};
//Keyboard Support

document.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'Delete':
            deleteLast();
            break;
        case '=':
            evaluate();
            break;
        case '.':
            addDecimal();
            break;
             
    }
    console.log(event.key);
});
