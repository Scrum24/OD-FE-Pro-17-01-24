const remNumb = +window.prompt('Please, enter number, that need to remove');

const arrayEx1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(arrayEx1, remNumb);

const arrayEx2 = [1, 2, 3, 4, 5, 6, 7, 5];
const resArr2 = clearArr(arrayEx2, remNumb);

const message = `Result (for numb =  ${remNumb}):\n
RemoveEl | resArr: ${arrayEx1}\n
ClearArray | resArr: ${resArr2}`
window.alert(message);


function removeElement(array, remNumb){
    const index = array.indexOf(remNumb);
    array.splice(index, 1);
}

function clearArr(array, remNumb){
    return array.filter( el => el !== remNumb);
}