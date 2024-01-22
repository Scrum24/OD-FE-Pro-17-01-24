const numb1 = getOperand('', 1);
const numb2 = getOperand('', 2);

if (numb1 === null || numb2 === null) {
    const message = getCancelMessage();
    window.alert(message);

} else {
    const addition = sum(numb1, numb2);
    const subtraction = subtract(numb1, numb2);
    const multiplication = multiply(numb1, numb2);
    const division = divide(numb1, numb2);

    const message = createResultMessage(numb1, numb2, addition, subtraction, multiplication, division);
    window.alert(message);
}


function getOperand(messagePrefix, operandNumber) {
    const message = `${messagePrefix} Please enter the ${operandNumber}st number`;
    const enteredVal = window.prompt(message);
    if (enteredVal === null) {
        return null;
    }

    const val = parseFloat(enteredVal);
    if (!isNaN(val) && val === +enteredVal) {
        return val;
    }

    const errorPrefix = "Entered value is not a number. ";
    return getOperand(errorPrefix, operandNumber);
}

function sum(numb1, numb2) {
    return numb1 + numb2;
}

function subtract(numb1, numb2) {
    return numb1 - numb2;
}

function multiply(numb1, numb2) {
    return numb1 * numb2;
}

function divide(numb1, numb2) {
    return numb1 / numb2;
}

function getCancelMessage() {
    return "Instead of entering one of the variables, you clicked \"Cancel\""
        + "\nCalculation was cancelled. See you next time."
}

function createResultMessage(numb1, numb2, addition, subtraction, multiplication, division) {
    return `User entered two numbers ${numb1} and ${numb2}. Results: \n
    1) ${numb1} + ${numb2} = ${addition} \n
    2) ${numb1} - ${numb2} = ${subtraction} \n
    3) ${numb1} * ${numb2} = ${multiplication} \n
    4) ${numb1} / ${numb2} = ${division}`;
}