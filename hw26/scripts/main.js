//data set
const monitors = [
    {
        id: "mon-1",
        imgLink: "./img/monitors/mon-1.png",
        title: "Monitor №1",
        description: "Monitor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos magni non perferendis qui similique!",
        price: "110$",
        category: "monitors"
    },
    {
        id: "mon-2",
        imgLink: "./img/monitors/mon-2.png",
        title: "Monitor №2",
        description: "Monitor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos magni non perferendis qui similique!",
        price: "120$",
        category: "monitors"
    },
    {
        id: "mon-3",
        imgLink: "./img/monitors/mon-3.png",
        title: "Monitor №3",
        description: "Monitor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos magni non perferendis qui similique!",
        price: "130$",
        category: "monitors"
    },
    {
        id: "mon-4",
        imgLink: "./img/monitors/mon-4.png",
        title: "Monitor №4",
        description: "Monitor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos magni non perferendis qui similique!",
        price: "140$",
        category: "monitors"
    },
    {
        id: "mon-5",
        imgLink: "./img/monitors/mon-5.png",
        title: "Monitor №5",
        description: "Monitor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos magni non perferendis qui similique!",
        price: "150$",
        category: "monitors"
    }
];

const laptops = [
    {
        id: "lap-1",
        imgLink: "./img/laptops/lap-1.png",
        title: "Laptop №1",
        description: "Laptop. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos magni non perferendis qui similique!",
        price: "210$"
    },
    {
        id: "lap-2",
        imgLink: "./img/laptops/lap-2.png",
        title: "Laptop №2",
        description: "Laptop. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos magni non perferendis qui similique!",
        price: "220$"
    },
    {
        id: "lap-3",
        imgLink: "./img/laptops/lap-3.png",
        title: "Laptop №3",
        description: "Laptop. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos magni non perferendis qui similique!",
        price: "230$"
    },
    {
        id: "lap-4",
        imgLink: "./img/laptops/lap-4.png",
        title: "Laptop №4",
        description: "Laptop. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos magni non perferendis qui similique!",
        price: "240$"
    },
    {
        id: "lap-5",
        imgLink: "./img/laptops/lap-5.png",
        title: "Laptop №5",
        description: "Laptop. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos magni non perferendis qui similique!",
        price: "250$"
    }
];

const phones = [
    {
        id: "ph-1",
        imgLink: "./img/phones/ph-1.png",
        title: "Phone №1",
        description: "Phone. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos magni non perferendis qui similique!",
        price: "310$"
    },
    {
        id: "ph-2",
        imgLink: "./img/phones/ph-2.png",
        title: "Phone №2",
        description: "Phone. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos magni non perferendis qui similique!",
        price: "320$"
    },
    {
        id: "ph-3",
        imgLink: "./img/phones/ph-3.png",
        title: "Phone №3",
        description: "Phone. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos magni non perferendis qui similique!",
        price: "330$"
    },
    {
        id: "ph-4",
        imgLink: "./img/phones/ph-4.png",
        title: "Phone №4",
        description: "Phone. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos magni non perferendis qui similique!",
        price: "340$"
    },
    {
        id: "ph-5",
        imgLink: "./img/phones/ph-5.png",
        title: "Phone №5",
        description: "Phone. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos magni non perferendis qui similique!",
        price: "350$"
    }
];



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

function getProductsFor(targetCategory) {
    switch (targetCategory) {
        case "monitors":
            return monitors;
        case "laptops":
            return laptops;
        case "phones":
            return phones;
        default:
            return [];
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

function getProductBy(prodCategory, prodId) {
    const products = getProductsFor(prodCategory);
    return products.find(prod => prod.id === prodId);
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


//cardContentEl block
const cardContentEl = document.getElementsByClassName("product-card__content")[0];
cardContentEl.addEventListener("click", buyProduct);

function buyProduct(e) {
    if (e.target.className === "card__buy-btn") {
        const cardElDataset = e.target.closest(".card");
        const productCategory = cardElDataset.dataset.prodCategory;
        const prodId = cardElDataset.dataset.prodId;

        const product = getProductBy(productCategory, prodId);
        const buyMessage = `Hello. Congratulations! \n You bought "${product.title}" (price: ${product.price})`;

        alert(buyMessage);
        closeProductBlocks();
    }
}

function closeProductBlocks() {
    setTimeout(() => {
        closeProductCard();
    }, 1000);

    setTimeout(() => {
        closeProducts();
    }, 2000);
}


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


function closeProductCard() {
    const productCardBlock = document.getElementById("product-card");
    [...productCardBlock.getElementsByClassName("card")]
        .forEach(card => card.remove());
    productCardBlock.classList.add("isHide");
}

function closeProducts() {
    const productsBlock = document.getElementById("products");
    [...productsBlock.getElementsByClassName("product")]
        .forEach(product => product.remove());
    productsBlock.classList.add("isHide");
}