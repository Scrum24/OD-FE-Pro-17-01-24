const arr = [1, 2, 0.123, 0.111, 'str1', 'str2', true, false, null, , undefined, NaN, {}, [], function () { }];

const sum = numbersSum(arr);
console.log(`Arr: ${arr} \nSum: ${sum}`);

function numbersSum(arr) {
    return arr
        .filter(el => Number.isFinite(el))
        .reduce((sum, current) => sum + current)
        .toFixed(2);
}