// Example: 1,3,5,7,9,8,6,4,2,0 or 1,3,2,0 or 2,1

const arrSize = +window.prompt("Hi. Please, enter the array size.");
const arr = arrSize ? new Array(arrSize) : [];
console.log("1. Array created:", arr);

initArr(arr);
console.log("2. Array with elements:", arr);

arr.sort((a, b) => a - b);
console.log("3. SortedArray:", arr);

arr.splice(2, 3);
console.log("4. Array (without el 2,3,4):", arr);


function initArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = +window.prompt(`Please, enter el №${i + 1}`);
    }
}