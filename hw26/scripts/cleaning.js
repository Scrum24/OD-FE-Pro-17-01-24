//cleaning block
const products = document.getElementById("products");
products.addEventListener('click', closeProductsBlock)

function closeProductsBlock(e) {
    if (e.target.className === "close-btn") {
        closeProductCard();
        closeProducts();
    }
}


const productCard = document.getElementById("product-card");
productCard.addEventListener('click', closeProductCardBlock)

function closeProductCardBlock(e) {
    if (e.target.className === "close-btn") {
        closeProductCard();
    }
}


export function closeProductCard() {
    const productCardBlock = document.getElementById("product-card");
    [...productCardBlock.getElementsByClassName("card")]
        .forEach(card => card.remove());
    productCardBlock.classList.add("isHide");
}

export function closeProducts() {
    const productsBlock = document.getElementById("products");
    [...productsBlock.getElementsByClassName("product")]
        .forEach(product => product.remove());
    productsBlock.classList.add("isHide");
}