/**
 * An online store has the following products below.
 * Tasks:
 * 1. Display only products that are currently available.
 * 2. Generate an array containing only the product names.
 * 3. Calculate the total value of all products currently in stock.
 * 4. Sort available products from most expensive → cheapest.
 */

const products = [
    {
        id: 1,
        name: "Keyboard",
        category: "Computer",
        price: 350000,
        stock: 10,
    },
    {
        id: 2,
        name: "Mouse",
        category: "Computer",
        price: 150000,
        stock: 0,
    },
    {
        id: 3,
        name: "Monitor",
        category: "Computer",
        price: 2500000,
        stock: 5,
    },
    {
        id: 4,
        name: "Headset",
        category: "Audio",
        price: 450000,
        stock: 8,
    },
    {
        id: 5,
        name: "Microphone",
        category: "Audio",
        price: 850000,
        stock: 3,
    },
];

console.log(`\nTask 1`)
console.log(products.filter((product) => product.stock > 0))

console.log(`\nTask 2`)
console.log(products.map((product) => product.name))

console.log(`\nTask 3`)
console.log(products.reduce((sum, n) => n.stock > 0 ? sum + n.price : sum, 0))

console.log(`\nTask 4`)
console.log(products.sort((a, b) => b.price-a.price))
