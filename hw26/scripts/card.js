import {getProductBy} from "./data.js";

//cardContentEl block
const cardContentEl = document.getElementsByClassName("product-card__content")[0];
cardContentEl.addEventListener("click", buyProduct);

function buyProduct(e) {
    if (e.target.className === "card__buy-btn") {
        const cardElDataset = e.target.closest(".card");
        const prodCategory = cardElDataset.dataset.prodCategory;
        const prodId = cardElDataset.dataset.prodId;

        const product = getProductBy(prodCategory, prodId);
        actualizeProductBuyForm(product.title, product.price, prodCategory, prodId);
    }
}

function actualizeProductBuyForm(productTitle, productPrice, prodCategory, prodId) {
    const formProdTitle = document.getElementById("form-prod-title");
    formProdTitle.innerText = productTitle;

    const formProdPrice = document.getElementById("form-prod-price");
    formProdPrice.innerText = productPrice;

    const bayFormModWind = document.getElementById("buy-form-modal-w");
    bayFormModWind.classList.remove("isHideModal");

    bayFormModWind.setAttribute("data-prod-id", prodId);
    bayFormModWind.setAttribute("data-prod-category", prodCategory);
}