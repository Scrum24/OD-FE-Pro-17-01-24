import {getProductBy} from "./data.js";

//productsList block
const productsList = document.getElementsByClassName("products__list")[0];
productsList.addEventListener("click", collectProductCard);

function collectProductCard(e) {
    if (e.target.className === "details") {
        const productEl = e.target.closest(".product");
        const productCategory = productEl.dataset.prodCategory;
        const prodId = productEl.dataset.prodId;

        const product = getProductBy(productCategory, prodId);
        const productCardHTML = collectHtmlProductCard(product, productCategory);
        actualizeProductCard(productCardHTML);
    }
}

function collectHtmlProductCard(product, productCategory) {
    return `<div class="card" data-prod-id="${product.id}" data-prod-category="${productCategory}" >
                <div class="card__img">
                    <img src="${product.imgLink}" alt="${product.title} img">
                </div>
                <div class="card__info-block">
                    <div class="card__title">${product.title}</div>
                    <div class="card__description">${product.description}</div>
                </div>
                    <div class="card__buy-block">
                    <div class="card__price">${product.price}</div>
                    <div class="card__buy-btn">Buy now</div>
                </div>
            </div>`;
}

function actualizeProductCard(productCardHTML) {
    const productCardBlock = document.getElementById("product-card");
    productCardBlock.classList.remove("isHide");

    const productCardParentEl = productCardBlock.getElementsByClassName("product-card__content")[0];
    productCardParentEl.innerHTML = productCardHTML;
}