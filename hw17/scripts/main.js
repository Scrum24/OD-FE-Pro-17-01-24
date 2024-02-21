const arr = [1, 2, 0.123, 0.111, 'str1', 'str2', true, false, null, , undefined, NaN, {}, [], function () { }];

const avg = numbersAvg(arr);
console.log(`Arr: ${arr} \nAvg: ${avg}`);

function numbersAvg(arr) {
    const filteredArr = arr.filter(el => Number.isFinite(el));

    const numbersSum = filteredArr.reduce((sum, current) => sum + current);
    return (numbersSum / filteredArr.length)
        .toFixed(4);
}