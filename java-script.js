//java-script file for calculator project


//Variables used throught the java-script file
let clearButton = document.querySelector('.clear');

let plusButton = document.querySelector('#plus');

let equalButton = document.querySelector('.equal');

let numOneButton = document.querySelector('#one');
let numTwoButton = document.querySelector('#two');
let numThreeButton = document.querySelector('#three');
let numFourButton = document.querySelector('#four');
let numFiveButton = document.querySelector('#five');
let numSixButton = document.querySelector('#six');
let numSevenButton = document.querySelector('#seven');
let numEightButton = document.querySelector('#eight');
let numNineButton = document.querySelector('#nine');
let numZeroButton = document.querySelector('#zero');

let display = document.querySelector('.top-display');

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
    numOneButton.disabled = false;
    numTwoButton.disabled = false;
    numThreeButton.disabled = false;
    numFourButton.disabled = false;
    numFiveButton.disabled = false;
    numSixButton.disabled = false;
    numSevenButton.disabled = false;
    numEightButton.disabled = false;
    numNineButton.disabled = false;
    numZeroButton.disabled = false;
})

plusButton.addEventListener('click', function(){
    firstNumber = displayVal;
    operator = "+";
    displayVal = 0;
})

equalButton.addEventListener('click', function(){
    console.log(firstNumber);
    secondNumber = displayVal;
    console.log(secondNumber);
    display.textContent = operate(firstNumber, operator, secondNumber);
    operator = "";
    firstNumber = 0;
    secondNumber = 0;
})

numOneButton.addEventListener('click', function() {
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
        numOneButton.disabled = true;
    }
    else
    {   
        if (display.textContent != "0" && displayVal != 0)
        {
            display.textContent = display.textContent + numOneButton.textContent;
            displayVal = Number(display.textContent);
        }
        else
        {
            display.textContent = numOneButton.textContent;
            displayVal = Number(display.textContent);
        }
    }    
})

numTwoButton.addEventListener('click',function() {

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
        numTwoButton.disabled = true;
    }
    else
    {
        if (display.textContent != "0")
        {
            display.textContent = display.textContent + numTwoButton.textContent;
        }
        else
        {
            display.textContent = numTwoButton.textContent;
        }
    }  
})

numThreeButton.addEventListener('click',function() {

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
        numThreeButton.disabled = true;
    }
    else
    {
        if (display.textContent != "0")
        {
            display.textContent = display.textContent + numThreeButton.textContent;
        }
        else
        {
            display.textContent = numThreeButton.textContent;
        }
    }
})

numFourButton.addEventListener('click',function() {

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
        numFourButton.disabled = true;
    }
    else
    {
        if (display.textContent != "0")
        {
            display.textContent = display.textContent + numFourButton.textContent;
        }
        else
        {
            display.textContent = numFourButton.textContent;
        }
    }
})

numFiveButton.addEventListener('click',function() {

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
        numFiveButton.disabled = true;
    }
    else
    {
        if (display.textContent != "0")
        {
            display.textContent = display.textContent + numFiveButton.textContent;
        }
        else
        {
            display.textContent = numFiveButton.textContent;
        }
    }
})

numSixButton.addEventListener('click',function() {

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
        numSixButton.disabled = true;
    }
    else
    {
       if (display.textContent != "0")
        {
            display.textContent = display.textContent + numSixButton.textContent;
        }
        else
        {
            display.textContent = numSixButton.textContent;
        } 
    } 
})

numSevenButton.addEventListener('click',function() {

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
        numSevenButton.disabled = true;
    }
    else
    {
        if (display.textContent != "0")
        {
            display.textContent = display.textContent + numSevenButton.textContent;
        }
        else
        {
            display.textContent = numSevenButton.textContent;
        }
    }
})

numEightButton.addEventListener('click',function() {

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
        numEightButton.disabled = true;
    }
    else
    {
        if (display.textContent != "0")
        {
            display.textContent = display.textContent + numEightButton.textContent;
        }
        else
        {
            display.textContent = numEightButton.textContent;
        }
    }
})

numNineButton.addEventListener('click',function() {

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
        numNineButton.disabled = true;
    }
    else
    {
        if (display.textContent != "0")
        {
            display.textContent = display.textContent + numNineButton.textContent;
        }
        else
        {
            display.textContent = numNineButton.textContent;
        }
    }    
})

numZeroButton.addEventListener('click',function() {

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
        numZeroButton.disabled = true;
    }
    else
    {
        if (display.textContent != "0")
        {
            display.textContent = display.textContent + numZeroButton.textContent;
        }
        else
        {
            display.textContent = numZeroButton.textContent;
        }
    }
})