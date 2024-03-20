import {closeProductCard, closeProducts} from "./cleaning.js";

// form block
const submitBtn = document.getElementById("buy-form");
submitBtn.addEventListener("submit", buyProductForm);

function buyProductForm(e) {
    e.preventDefault();
    const form = e.target.closest("form");
    const formInfo = createObjFrom(form);
    addOrderBlock(formInfo);

    hideBuyProductForm();
    closeProductCard();
    closeProducts();
}

function createObjFrom(form) {
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

    return {formProdTitle, formProdPrice, firstName, email, phone, city, warehouse, payment, prodCount, comment};
}

function addOrderBlock(content) {
    const orderBlock = `<div class="order">
        <div class="close-btn">x</div>
        <div class="order__title">Order</div>
        <div class="order__content">
            <b>Product</b>: ${content.formProdTitle}</br>
            <b>Price</b>: ${content.formProdPrice}</br>
            
            <b>Full name</b>: ${content.firstName}</br>
            <b>Email</b>: ${content.email}</br>
            <b>Phone</b>: ${content.phone}</br>
            <b>City</b>: ${content.city}</br>
            <b>NP warehouse</b>: ${content.warehouse}</br>
            <b>Payment method</b>: ${content.payment}</br>
            <b>Products count</b>: ${content.prodCount}</br>
            <b>Comment</b>: ${content.comment}
        </div>
    </div>`;

    const aside = document.getElementById("aside");
    aside.insertAdjacentHTML("beforeend", orderBlock);
}

const formCloseBtn = document.querySelector("form > div.close-btn");
formCloseBtn.addEventListener("click", () => {
    hideBuyProductForm();
});

function hideBuyProductForm() {
    const bayFormMidWind = document.getElementById("buy-form-modal-w");
    bayFormMidWind.classList.add("isHideModal");
}