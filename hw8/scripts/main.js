//case_1: from 20 to 30 (inclusively)
const arr1 = [];
for (let i = 20; i <= 30; i = i + 0.5) {
    arr1.push(i);
}
console.log("Case_1 |", arr1.toString());


//case_2: 1$..
const price = 27;
const arr2 = [];
for (let i = 10; i <= 100; i = i + 10) {
    arr2.push(i * price);
}
console.log("Case_2 |", arr2.toString());


//case_3: the square of which <= the number N
const testArr3 = [7, 25, 38, 50, 76];
testArr3.forEach( numb => {

    const arr3 = [];
    for (let i = 1; i <= 100; i++) {
        if (Math.pow(i, 2) <= numb){
            arr3.push(i);
        } else {
            break;
        }
    }
    console.log("Case_3 |", `testNumber = ${numb}, arr3 = ${arr3.toString()}.`);
});


//case_4: Prime numbers 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47...
const testArr4 = [2, 3, 4, 5, 6, 7];
testArr4.forEach( numb => {
    const isNumbPrime = isPrime(numb);
    console.log("Case_4 |",`testNumber = ${numb}, isNumbPrime = ${isNumbPrime}.`);
});

function isPrime(numb){
    if (numb < 2){
        return false;
    }
    for (let i = 2; i < numb; i++) {
        if ( numb % i === 0){
            return false;
        }
    }
    return true;
}


//case_5: E.g.: 4 or 100 (false), 9 or 81 (true)
const testArr5 = [4, 9, 81, 100];
testArr5.forEach( numb => {
    const canReceiveNumb = canReceiveNumber(numb);
    console.log("Case_5 |",`testNumber = ${numb}, canReceiveNumb = ${canReceiveNumb}.`);
});

function canReceiveNumber(numb){
    let degree = 1;
    let root;

    do {
        root = Math.pow(3, degree);
        if (root === numb){
            return true;
        }
        degree++;
    } while (root <= numb);

    return false;
}