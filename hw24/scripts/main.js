const slider = document.getElementById("slider");
slider.addEventListener('click', switchImg);

function switchImg(e){
    if(e.target.tagName !== 'BUTTON'){
        return;
    }

    const pressedBtn = e.target;
    const activeImg = document.querySelector(".slides > img.isActive");

    const targetImg = pressedBtn.id === "prev-btn" ?
        activeImg.previousElementSibling:
        activeImg.nextElementSibling;

    const activeImgClass = "isActive";
    activeImg.classList.remove(activeImgClass);
    targetImg.classList.add(activeImgClass);

    const parent = activeImg.parentNode;
    const hideBtnClass = "isHide";
    if( targetImg === parent.firstElementChild ||
        targetImg === parent.lastElementChild){
        pressedBtn.classList.add(hideBtnClass);
    } else {
        const btns = document.querySelectorAll("#slider > button");
        btns.forEach( btn => btn.classList.remove(hideBtnClass));
    }
}