const operation = getOperation();
const num1 = getNumber(1);
const num2 = getNumber(2);

let message = null;
if (operation === 'add') {
    const res = num1 + num2;
    message = createResultMessage("+", num1, num2, res);

} else if (operation === 'sub') {
    const res = num1 - num2;
    message = createResultMessage("-", num1, num2, res);

} else if (operation === 'mult') {
    const res = num1 * num2;
    message = createResultMessage("*", num1, num2, res);

} else if (operation === 'div') {
    const res = num1 / num2;
    message = createResultMessage("/", num1, num2, res);
} else {
    message = "Error. Something went wrong."
}

window.alert(message);



function getOperation() {
    const message = `What operation do you want to do (add, sub, mult, div)?`;
    return window.prompt(message);
}

function getNumber(varNumber) {
    const message = `Please enter the ${varNumber}st number`;
    return +window.prompt(message);
}

function createResultMessage(operation, num1, num2, result) {
    return `${num1} ${operation} ${num2} = ${result}`;
}