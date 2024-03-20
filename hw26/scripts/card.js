import {getProductBy} from "./data.js";

//cardContentEl block
const cardContentEl = document.getElementsByClassName("product-card__content")[0];
cardContentEl.addEventListener("click", buyProduct);

function buyProduct(e) {
    if (e.target.className === "card__buy-btn") {
        const cardElDataset = e.target.closest(".card");
        const productCategory = cardElDataset.dataset.prodCategory;
        const prodId = cardElDataset.dataset.prodId;

        const product = getProductBy(productCategory, prodId);
        actualizeProductBuyForm(product.title, product.price);
    }
}

function actualizeProductBuyForm(productTitle, productPrice) {
    const formProdTitle = document.getElementById("form-prod-title");
    formProdTitle.innerText = productTitle;

    const formProdPrice = document.getElementById("form-prod-price");
    formProdPrice.innerText = productPrice;

    const bayFormMidWind = document.getElementById("buy-form-modal-w");
    bayFormMidWind.classList.remove("isHideModal");
}