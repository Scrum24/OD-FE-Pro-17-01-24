import {closeProductCard} from "./cleaning.js";
import {getProductsFor} from "./data.js";

//nav block
const nav = document.getElementById("nav");
nav.addEventListener("click", collectsProductsPage);

function collectsProductsPage(e) {
    const targetCategory = e.target.dataset.targCategory;
    if (targetCategory) {
        const products = getProductsFor(targetCategory);
        const productsListHTML = collectHtmlProductsList(products, targetCategory);
        actualizeProductsPage(productsListHTML);

        closeProductCard();
    }
}

function collectHtmlProductsList(products, productCategory) {
    const productsList = [];
    for (let product of products) {
        const productHtml =
            `<div class="product" data-prod-id="${product.id}" data-prod-category="${productCategory}">
                <div class="product__img">
                    <img src="${product.imgLink}" alt="${product.title} img">
                </div>
                <div class="product__info-block">
                    <div class="product__title">${product.title}</div>
                    <div class="product__description">${product.description}</div>
                    <div class="product__details"><a href="#" class="details">Details..</a></div>
                </div>
            </div>`;
        productsList.push(productHtml);
    }
    return productsList.join("\n");
}

function actualizeProductsPage(productsListHTML) {
    const productsBlock = document.getElementById("products");
    productsBlock.classList.remove("isHide");

    const productsListParent = productsBlock.getElementsByClassName("products__list")[0];
    productsListParent.innerHTML = productsListHTML;
}

export function hideNavMenu() {
    const nav = document.getElementById("nav");
    nav.classList.add("isHide");
}