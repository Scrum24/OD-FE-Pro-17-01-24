const arr = [];
for (let i = 1; i <= 3; i++) {
    const message = `Hi. Please, enter number №${i}. Thank you.`;
    const val = +window.prompt(message);
    arr.push(val);
}

const arrSum = arr.reduce((total, indexVal) => total + indexVal, 0);
const arrAvg = arrSum / arr.length;
const avgNumber = Number(arrAvg.toFixed(2));
window.alert(`Average value = ${avgNumber}`);