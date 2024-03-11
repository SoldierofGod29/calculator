//java-script file for calculator project


//Variables used throught the java-script file
let display = document.querySelector('.top-display');

let numButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator')
let equalButton = document.querySelector('.equal');
let clearButton = document.querySelector('.clear');

let firstNumber = 0;
let secondNumber = 0;
let total = 0;
let operator = "";
let numberPressed = false;
let amountNumPressed = 0;
let opPressed = false;
let displayVal;

equalButton.disabled = true;
operatorButtons.forEach((opbutton) => {
     opbutton.disabled = true;
})

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

//Event listeners for Buttons
clearButton.addEventListener('click', function() {
    display.textContent = "0";
    firstNumber = 0;
    secondNumber = 0;
    displayVal = 0;
    operator = "";
    numberPressed = false;
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
    else if (operate(firstNumber, operator, secondNumber).toString().length >= 7 && operate(firstNumber, operator, secondNumber).toString().includes(".") == true)
    {
        total = operate(firstNumber, operator, secondNumber);
        display.textContent = +(Math.round(total + "e-6") + "e-6");
    }
    else
    {
        display.textContent = operate(firstNumber, operator, secondNumber);
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
})

numButtons.forEach((button) =>{
    button.addEventListener('click', function() {
        if (amountNumPressed >= 8)
        {
            numButtons.forEach((numb) => {
                numb.disabled = true;
            })
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
        }   
    })   
})
