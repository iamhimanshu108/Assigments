// Object containing items with names, categories, and prices in USD
const items = [
    {
        name: "Pixel 8a",
        category: "Mobile",
        priceUSD: 999,
    },
    {
        name: "MSI Khatana",
        category: "Laptops",
        priceUSD: 1499,
    },
    {
        name: "Smart Watch",
        category: "Watches",
        priceUSD: 499,
    },
];
const exchangeRate = 80;

function convertToINR(priceInUSD) {
    return priceInUSD * exchangeRate;
}

const itemsInINR = items.map((item) => ({
    ...item,
    priceINR: convertToINR(item.priceUSD),
}));

console.log(itemsInINR);