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
    const volume = i * price;
    arr2.push(volume);
}
console.log("Case_2 |", arr2.toString());


//case_3: the square of which <= the number N
const arr3 = [7, 25, 38, 50, 76];
arr3.forEach( testNumber => {

    const arr3 = [];
    for (let i = 1; i <= 100; i++) {
        if (Math.pow(i, 2) <= testNumber){
            arr3.push(i);
        } else {
            break;
        }
    }
    console.log("Case_3 |", `testNumber = ${testNumber}, arr3 = ${arr3.toString()}.`);

});


//case_4: Prime numbers 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47...
const arr4 = [2, 3, 4, 5, 6, 7];
arr4.forEach( testNumber => {
    const isNumbPrime = isPrime(testNumber);
    console.log("Case_4 |",`testNumber = ${testNumber}, isNumbPrime = ${isNumbPrime}.`);
});

function isPrime(testNumber){
    if (testNumber < 2){
        return false;
    }
    for (let i = 2; i < testNumber; i++) {
        if ( testNumber % i === 0){
            return false;
        }
    }
    return true;
}


//case_5: E.g.: 4 or 100 (false), 9 or 81 (true)
const arr5 = [4, 9, 81, 100];
arr5.forEach( testNumber => {
    const canReceiveNumb = canReceiveNumber(testNumber);
    console.log("Case_5 |",`testNumber = ${testNumber}, canReceiveNumb = ${canReceiveNumb}.`);
});

function canReceiveNumber(testNumber){
    let degree = 1;
    let root;

    do {
        root = Math.pow(3, degree);
        if (root === testNumber){
            return true;
        }
        degree++;
    } while (root <= testNumber);

    return false;
}