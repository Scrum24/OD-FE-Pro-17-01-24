const num1 = getNumber(1);
const num2 = getNumber(2);

const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;

const message = createResultMessage(num1, num2, addition, subtraction, multiplication, division);
window.alert(message);


function getNumber(varNumber) {
    const message = `Please enter the ${varNumber}st number`;
    return +window.prompt(message);
}

function createResultMessage(num1, num2, addition, subtraction, multiplication, division) {
    return `User entered two numbers ${num1} and ${num2}. Results: \n
    1) ${num1} + ${num2} = ${addition} \n
    2) ${num1} - ${num2} = ${subtraction} \n
    3) ${num1} * ${num2} = ${multiplication} \n
    4) ${num1} / ${num2} = ${division}`;
}