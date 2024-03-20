// aside
const aside = document.getElementById("aside");
aside.addEventListener("click", removeOrderInfoBlock);

function removeOrderInfoBlock(e) {
    const clickedEl = e.target;

    if (clickedEl.className === "close-btn") {
        const order = clickedEl.closest(".order");
        order.remove();
    }
};