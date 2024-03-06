//java-script file for calculator project


//Variables used throught the java-script file
let clearButton = document.querySelector('.clear');

let plusButton = document.querySelector('#plus');

let equalButton = document.querySelector('.equal');

let display = document.querySelector('.top-display');
let numButtons = document.querySelectorAll('.number');

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayVal;

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
    return firstNumber / secondNumber;
}

//Event listeners for Buttons
clearButton.addEventListener('click', function() {
    display.textContent = "0";
    display.setAttribute('style', 'font-size: 100px');
    numButtons.forEach((button) => {
        button.disabled = false;
    })
})

plusButton.addEventListener('click', function(){
    if (operator != "")
    {
        secondNumber = displayVal;
        display.textContent = operate(firstNumber, operator, secondNumber);
        firstNumber = operate(firstNumber, operator, secondNumber);
        operator = "";
        secondNumber = 0;
        displayVal = 0;
        console.log(firstNumber);
    }
    else
    {
        firstNumber = displayVal;
    }
    operator = "+";
    displayVal = 0;
    equalButton.disabled = false;
})

equalButton.addEventListener('click', function(){
    secondNumber = displayVal;
    display.textContent = operate(firstNumber, operator, secondNumber);
    operator = "";
    firstNumber = 0;
    secondNumber = 0;
    displayVal = 0;
})

numButtons.forEach((button) =>{
    button.addEventListener('click', function() {
        if (display.textContent.length == 7)
        {
            display.setAttribute('style', 'font-size: 90px');
        }
    
        if (display.textContent.length == 8)
        {     
            display.setAttribute('style', 'font-size: 80px');
        }
    
        if (display.textContent.length >= 9)
        {
            button.disabled = true;
        }
        else
        {   
            if (display.textContent != "0" && displayVal != 0)
            {
                display.textContent = display.textContent + button.textContent;
                displayVal = Number(display.textContent);
            }
            else
            {
                display.textContent = button.textContent;
                displayVal = Number(display.textContent);
            }
        }   
    })   
})
