function sumFunction(initVal = 0) {
    let sum = initVal;

    return function(val) {
        sum = sum + val;
        return sum;
    };
}

const sum1 = sumFunction();
console.log("Sum1 |", sum1(3));
console.log("Sum1 |", sum1(5));
console.log("Sum1 |", sum1(20));

const sum2 = sumFunction();
console.log("Sum2 |", sum2(10));
console.log("Sum2 |", sum2(20));
console.log("Sum2 |", sum2(30));

const sum3 = sumFunction(100);
console.log("Sum3 |", sum3(5));
console.log("Sum3 |", sum3(5));
console.log("Sum3 |", sum3(5));