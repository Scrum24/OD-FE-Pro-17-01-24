const num = window.prompt('Please, enter the number.');
const degree = window.prompt('Please, enter the degree.');

const result = raiseToPower(num, degree);
console.log(`Explanation log | Result = ${result}`);
window.alert(`Result = ${result} (for num: ${num}, degree: ${degree}).`);


function raiseToPower(num, degree){
    console.log(`Explanation log | num: ${num}, degree: ${degree}`);

    if(degree === 1){
        return num;
    }

    return num * raiseToPower(num, --degree);
}