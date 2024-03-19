//java-script file for calculator project


//Variables used throught the java-script file
let display = document.querySelector('.top-display');

let posnegButton = document.querySelector('.positive-negative');
let percentButton = document.querySelector('.percent');

let numButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator')
let equalButton = document.querySelector('.equal');
let clearButton = document.querySelector('.clear');
let decimalButton = document.querySelector('.decimal');

let firstNumber = 0;
let secondNumber = 0;
let total = 0;
let operator = "";
let numberPressed = false;
let amountNumPressed = 0;
let opPressed = false;
let decPressed = false;
let displayVal;

equalButton.disabled = true;
operatorButtons.forEach((opbutton) => {
     opbutton.disabled = true;
})
decimalButton.disabled = true;
posnegButton.disabled = true;

//Functions for operators
function operate (firstNumber, operator, secondNumber)
{
    if (operator == "+")
    {
        return addNums(firstNumber, secondNumber);
    }
    if (operator == "-")
    {
        return subtractNums(firstNumber, secondNumber);
    }
    if (operator == "x")
    {
        return multiplyNums(firstNumber, secondNumber);
    }
    if (operator == "/")
    {
        return divideNums(firstNumber, secondNumber);
    }
}

function addNums (firstNumber, secondNumber)
{
    return firstNumber + secondNumber;
}

function subtractNums (firstNumber, secondNumber)
{
    return firstNumber - secondNumber;
}

function multiplyNums (firstNumber, secondNumber)
{
    return (firstNumber * secondNumber);
}

function divideNums (firstNumber, secondNumber)
{
    return +(Math.round((firstNumber/secondNumber) + "e+6") + "e-6");
}

function beforeDecimal (number)
{
    let digitArray = number.toString().split('.');
    return digitArray[0].length;
}

//Event listeners for Buttons
clearButton.addEventListener('click', function() {
    display.textContent = "0";
    firstNumber = 0;
    secondNumber = 0;
    displayVal = 0;
    operator = "";
    numberPressed = false;
    decPressed = false;
    amountNumPressed = 0;
    numButtons.forEach((button) => {
        button.disabled = false;
    })
    operatorButtons.forEach((opbutton) => {
        opbutton.disabled = true;
    })
    operatorButtons.forEach((opbutton) => {
        opbutton.setAttribute('style', 'background-color: orangered; color: white');
    })
    decimalButton.disabled = true;
    posnegButton.disabled = true;
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', function() {
        opPressed = true;
        if (opPressed == true)
        {
            operatorButtons.forEach((opbutton) => {
                opbutton.disabled = true;
            })
            button.setAttribute('style', 'background-color: white; color: orangered');
        }
        if (operator != "")
        {
            secondNumber = displayVal;
            display.textContent = operate(firstNumber, operator, secondNumber); 
            firstNumber = operate(firstNumber, operator, secondNumber);
            operator = "";
            secondNumber = 0;
            displayVal = 0;
        }
        else
        {
            firstNumber = displayVal;
        }
        operator = button.id;
        displayVal = 0;
        numberPressed = false;
        amountNumPressed = 0;
        numButtons.forEach((numb) => {
            numb.disabled = false;
        })
        equalButton.disabled = false;
    })
})

equalButton.addEventListener('click', function(){
    secondNumber = displayVal;
    if (numberPressed == false)
    {
        secondNumber = firstNumber;
    }
    if ((operate(firstNumber, operator, secondNumber)).toString().length >= 8 && operator != "/" && (operate(firstNumber, operator, secondNumber).toString().includes(".")) != true)
    {
        total = operate(firstNumber, operator, secondNumber);
        display.textContent = total.toExponential(4);
    }
    else if (operate(firstNumber, operator, secondNumber) >= 100000 || operate(firstNumber, operator, secondNumber) <= -100000)
    {
        total = operate(firstNumber, operator, secondNumber);
        display.textContent = total.toExponential(4);
    }
    else if (secondNumber == 0 && operator == "/")
    {
        display.textContent = "Nice Try!";
    }
    else
    {
        switch (beforeDecimal(operate(firstNumber, operator, secondNumber)))
        {
            case 1:
                display.textContent = parseFloat(operate(firstNumber, operator, secondNumber).toFixed(8));
                break;
            case 2:
                display.textContent = parseFloat(operate(firstNumber, operator, secondNumber).toFixed(7));
                break;
            case 3:
                display.textContent = parseFloat(operate(firstNumber, operator, secondNumber).toFixed(6));
                break;
            case 4:
                display.textContent = parseFloat(operate(firstNumber, operator, secondNumber).toFixed(5));
                break;
            case 5:
                display.textContent = parseFloat(operate(firstNumber, operator, secondNumber).toFixed(4));
                break;
            case 6:
                display.textContent = parseFloat(operate(firstNumber, operator, secondNumber).toFixed(3));
                break;
            case 7:
                display.textContent = parseFloat(operate(firstNumber, operator, secondNumber).toFixed(2));
                break;
            case 8:
                display.textContent = parseFloat(operate(firstNumber, operator, secondNumber).toFixed(1));
                break;
            default: display.textContent = operate(firstNumber, operator, secondNumber);
        }
    }
    displayVal = operate(firstNumber, operator, secondNumber);
    operator = "";
    firstNumber = 0;
    secondNumber = 0;
    numberPressed = false;
    numButtons.forEach((numb) => {
        numb.disabled = false;
    })
    operatorButtons.forEach((opbutton) => {
        opbutton.disabled = false;
        opbutton.setAttribute('style', 'background-color: orangered; color: white');
    })
    amountNumPressed = 0;
    equalButton.disabled = true;
    decimalButton.disabled = true;
})

numButtons.forEach((button) =>{
    button.addEventListener('click', function() {
        if (amountNumPressed >= 8)
        {
            numButtons.forEach((numb) => {
                numb.disabled = true;
            })
            decimalButton.disabled = true;
        }
       
        if (numberPressed != false)
        {
            display.textContent = display.textContent + button.textContent;
            displayVal = Number(display.textContent);
            amountNumPressed += 1;
        }
        else
        {
            display.textContent = button.textContent;
            displayVal = Number(display.textContent);
            numberPressed = true;
            amountNumPressed += 1;
            operatorButtons.forEach((opbutton) => {
                opbutton.disabled = false;
                opbutton.setAttribute('style', 'background-color: orangered; color: white');
            })
            decPressed = true;
            decimalButton.disabled = false;
            posnegButton.disabled = false;
        }   
    })   
})

decimalButton.addEventListener('click', function(){
    if (decPressed == true)
    {
        decimalButton.disabled = true;
    }
    
    display.textContent = display.textContent + ".";
})

posnegButton.addEventListener('click', function(){
    if (display.textContent.includes("-") != true)
    {
        display.textContent = "-" + display.textContent;
        displayVal = -Math.abs(Number(display.textContent));
    }
    else
    {
        display.textContent = display.textContent.replace('-', '');
        displayVal = +Math.abs(Number(display.textContent));
    }   
})

percentButton.addEventListener('click', function(){
    if (display.textContent.length > 7)
    {
        display.textContent = (Number(display.textContent) / 100).toExponential(4);
        displayVal = (Number(display.textContent) / 100).toExponential(4);
    }
    else
    {
        display.textContent = (Number(display.textContent) / 100);
        displayVal = (Number(display.textContent) / 100);
    }
})

