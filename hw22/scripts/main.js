showRandomImg();

function showRandomImg(){
    const imgEl = createImgBlock();

    setRandomImgTo(imgEl);
    const intervalId = setInterval(() => {
        setRandomImgTo(imgEl);
    }, 500);

    setTimeout(() =>{
        clearInterval(intervalId);
    },30000)
}

function createImgBlock(){
    const parentEl = document.getElementById('random-img');
    const imgEl = document.createElement('img');
    parentEl.appendChild(imgEl);

    return imgEl;
}

function setRandomImgTo(imgEl){
    const randomImgNumber = getRandomNumber(1, 9);
    console.log("RandomImgNumber:", randomImgNumber);

    imgEl.src = `./img/${randomImgNumber}.png`;
    imgEl.alt = `Random img №${randomImgNumber}`;
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}