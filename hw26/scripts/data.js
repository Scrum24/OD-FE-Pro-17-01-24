export function getProductsFor(targetCategory) {
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

export function getProductBy(prodCategory, prodId) {
    const products = getProductsFor(prodCategory);
    return products.find(prod => prod.id === prodId);
}

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