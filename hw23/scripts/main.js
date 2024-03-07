const main = document.getElementsByTagName('main')[0];

main.addEventListener('focusin', isActiveDiv);
main.addEventListener('focusout', isActiveDiv);

function isActiveDiv(e){
    if (e.target.id === "testInput"){
        const divEl = document.getElementById('testDiv');
        divEl.classList.toggle("isActive");
    }
}