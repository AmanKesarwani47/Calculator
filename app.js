const defaultResult = 0;

let currentResult = defaultResult;

let logEnteries = [];

// get input from inputfield 
function getUserNumberInput(){
    return parseInt(userInput.value);
}


function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    }
    logEnteries.push(logEntry);
    console.log(logEnteries);
}

// generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);// from vendor file
}

function calculationResult(calculationType){
    const enteredInput = getUserNumberInput();
    if(calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    !enteredInput
    ){
        return;
    }
    // enteredInput = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD'){
        currentResult += enteredInput;
        mathOperator = '+';
    }else if(calculationType === 'SUBTRACT'){
        currentResult -= enteredInput;
        mathOperator = '-';
    }else if(calculationType === 'MULTIPLY'){
        currentResult *= enteredInput;
        mathOperator = '*';
    }else if(calculationType === 'DIVIDE'){
        currentResult /= enteredInput;
        mathOperator = '/';
    }
    
    createAndWriteOutput(mathOperator,initialResult, enteredInput);
    writeToLog(calculationType, initialResult, enteredInput, currentResult);
}

function add(){
    calculationResult('ADD');
}

function subtract() {
    calculationResult('SUBTRACT');
}

function multiply() {
    calculationResult('MULTIPLY');
}

function divide() {
    calculationResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
