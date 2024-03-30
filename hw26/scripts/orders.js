import {getOrderByTSId, getOrders, removeOrderFromLSList} from "./localStorage.js";
import {hideNavMenu} from "./nav.js";
import {closeProductCard, closeProducts} from "./cleaning.js";

// aside orders
const ordersAside = document.getElementById("orders");
ordersAside.addEventListener("click", showOrdersShortInfo);

function showOrdersShortInfo(e) {
    if (e.target.classList.contains("orders__show-btn")) {
        const orderList = getOrders();
        orderList.forEach(orderInfo => addShortInfoOrderBlock(orderInfo));

        deactivateBtn(e.target);
        hideNotRelatedBlocks();
    }
}

function hideNotRelatedBlocks() {
    hideNavMenu();
    closeProductCard();
    closeProducts();
    removeAsideOrders();
}

function deactivateBtn(btn) {
    const deactivatedClass = "isDeactivated";
    if (!btn.classList.contains(deactivatedClass)) {
        btn.classList.add(deactivatedClass);
    }
}

function addShortInfoOrderBlock(content) {
    const shortInfoOrder = `<div class="order" data-order-ts-id="${content.orderTSId}">
        <div class="close-btn">x</div>
        <div class="order__title">Order</div>
        <div class="order__content">
            <b>Product</b>: ${content.formProdTitle}</br>
            <b>Price</b>: ${content.formProdPrice}</br>
            <b>Date:</b>: ${content.orderDate}</br>
        </div>
        <div class="order__buttons">
            <div class="order__show-details-btn">Show details</div>
        </div>
    </div>`;

    const main = document.getElementById("main");
    main.insertAdjacentHTML("beforeend", shortInfoOrder);
}



export function addOrderBlockToAside(content) {
    const orderBlock = addOrderBlock(content);

    const aside = document.getElementById("aside");
    aside.insertAdjacentHTML("beforeend", orderBlock);
}

function addOrderBlock(content, isHide = true) {
    const isHideClass = isHide ? 'isHide' : '';

    return `<div class="order" data-order-ts-id="${content.orderTSId}">
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
            <b>Comment</b>: ${content.comment}</br>
            <b>Date:</b>: ${content.orderDate}
        </div>
        <div class="order__buttons">
            <div class="order__delete-btn ${isHideClass}">Delete order</div>
        </div>
    </div>`;
}


// cleaning
const aside = document.getElementById("aside");
aside.addEventListener("click", removeOrderInfoBlock);

const main = document.getElementById("main");
main.addEventListener("click", removeOrderInfoBlock);
main.addEventListener("click", showOrderDetails);
main.addEventListener("click", removeOrderFromLS);

function removeOrderInfoBlock(e) {
    const clickedEl = e.target;

    if (clickedEl.className === "close-btn") {
        const order = clickedEl.closest(".order");
        order.remove();
    }
}

function showOrderDetails(e) {
    const clickedEl = e.target;
    if (clickedEl.className === "order__show-details-btn") {
        const orderEl = clickedEl.closest(".order");
        const orderTSId = orderEl.getAttribute("data-order-ts-id");
        const order = getOrderByTSId(orderTSId);

        replaceShortToFullOrderInfo(order, orderEl);
    }
}

export function replaceShortToFullOrderInfo(content, oldEl) {
    const orderBlock = addOrderBlock(content, false);

    oldEl.insertAdjacentHTML("beforebegin", orderBlock);
    oldEl.remove();
}

function removeOrderFromLS(e) {
    const clickedEl = e.target;

    if (clickedEl.classList.contains("order__delete-btn")) {
        const orderEl = clickedEl.closest(".order");
        const orderTSId = orderEl.getAttribute("data-order-ts-id");

        removeOrderFromLSList(orderTSId);
        orderEl.remove();
    }
}


function removeAsideOrders() {
    const nav = document.getElementById("aside");
    [...nav.getElementsByClassName("order")]
        .forEach(product => product.remove());
}