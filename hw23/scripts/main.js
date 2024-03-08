const main = document.getElementsByTagName('main')[0];

main.addEventListener('focusin', isActiveDiv);
main.addEventListener('focusout', isActiveDiv);

function isActiveDiv(e){
    const listeningEl = "testInput";
    if (e.target.id === listeningEl){
        const divEl = document.querySelector(`[data-main-el=${listeningEl}]`);
        divEl.classList.toggle("isActive");
    }
}