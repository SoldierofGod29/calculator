//java-script file for calculator project


//Variables used throught the java-script file
let display = document.querySelector('.top-display');

let numButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator')
let equalButton = document.querySelector('.equal');
let clearButton = document.querySelector('.clear');

let firstNumber = 0;
let secondNumber = 0;
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
    return firstNumber * secondNumber;
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
    numButtons.forEach((button) => {
        button.disabled = false;
    })
    operatorButtons.forEach((opbutton) => {
        opbutton.disabled = true;
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
    if (secondNumber == 0)
    {
        secondNumber = firstNumber;
    }
    display.textContent = operate(firstNumber, operator, secondNumber);  
    displayVal = operate(firstNumber, operator, secondNumber);
    operator = "";
    firstNumber = 0;
    secondNumber = 0;
    numberPressed = false;
    numButtons.forEach((numb) => {
        numb.disabled = false;
    })
    amountNumPressed = 0;
    equalButton.disabled = true;
})

numButtons.forEach((button) =>{
    button.addEventListener('click', function() {
        if (amountNumPressed >= 9)
        {
            button.disabled = true;
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
            })
        }
           
    })   
})
