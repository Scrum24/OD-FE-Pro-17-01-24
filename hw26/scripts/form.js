import {closeProductCard, closeProducts} from "./cleaning.js";
import {addOrderToLSList} from "./localStorage.js";
import {addOrderBlockToAside} from "./orders.js";

// form block
const submitBtn = document.getElementById("buy-form");
submitBtn.addEventListener("submit", buyProductForm);

function buyProductForm(e) {
    e.preventDefault();
    const form = e.target.closest("form");
    const orderFormInfo = createObjFrom(form);
    addOrderBlockToAside(orderFormInfo);
    addOrderToLSList(orderFormInfo);

    hideProductForm();
    closeProductCard();
    closeProducts();
}

function createObjFrom(form) {
    const bayFormMidWind = document.getElementById("buy-form-modal-w");
    const prodCategory = bayFormMidWind.dataset.prodCategory;
    const prodId = bayFormMidWind.dataset.prodId;
    const date = new Date();
    const orderDate = getISODateTime(date);
    const orderTSId = getTimestampFrom(date);

    const formProdTitle = document.getElementById("form-prod-title").innerText;
    const formProdPrice = document.getElementById("form-prod-price").innerText;

    const firstName = form.elements['fullName'].value;
    const email = form.elements['email'].value;
    const phone = form.elements['phone'].value;
    const city = form.elements['city'].value;
    const warehouse = form.elements['warehouse'].value;
    const payment = form.elements['payment'].value;
    const prodCount = form.elements['prodCount'].value;
    const comment = form.elements['comment'].value;

    return {
        prodCategory, prodId, orderDate, orderTSId,
        formProdTitle, formProdPrice,
        firstName, email, phone, city,
        warehouse, payment, prodCount, comment
    };
}

function getISODateTime(date) {
    return date.toISOString().slice(0, 19).replace('T', ' ');
}

function getTimestampFrom(date) {
    return date.valueOf().toString();
}

const formCloseBtn = document.querySelector("form > div.close-btn");
formCloseBtn.addEventListener("click", () => {
    hideProductForm();
});

function hideProductForm() {
    const bayFormMidWind = document.getElementById("buy-form-modal-w");
    bayFormMidWind.classList.add("isHideModal");
}