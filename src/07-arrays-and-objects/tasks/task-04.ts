/**
 * A customer has a shopping cart below.
 * Tasks:
 * 1. Count subtotal of all products (expected result: 3.350.000)
 * 2. Calculate discount with this rules.
 *  - subtotal >= 3,000,000 → 10% discount
 *  - subtotal >= 2,000,000 → 5% discount
 *  - otherwise             → 0%
 * 
 * 3. Calculate final subtotal after given discount
 * 4. Find expensive product ( > 1.000.000)
 */

const cart = [
    {
        product: "Keyboard",
        price: 350000,
        quantity: 2,
    },
    {
        product: "Mouse",
        price: 150000,
        quantity: 1,
    },
    {
        product: "Monitor",
        price: 2500000,
        quantity: 1,
    },
];

console.log(`\nTask 1`)
console.log(cart.reduce((sum, n) => sum += n.price * n.quantity,0))

console.log(`\nTask 2`)
console.table(cart.map((data) => {
    const subtotal = data.price * data.quantity
    return {
        ...data,
        discount: subtotal >= 3000000 ? "10% Discount" : subtotal >= 2000000 ? "5% Discount" : "No Discount" 
    }
}).map((data) => ({ product: data.product, discount: data.discount })))

console.log(`\Task 3`)
console.table(cart.map((data) => {
    const subtotal = data.price * data.quantity
    const discount = subtotal >= 3000000 ? "10% Discount" : subtotal >= 2000000 ? "5% Discount" : "No Discount"
    return {
        ...data,
        subtotal: subtotal,
        discount: discount,
        finalPrice: discount === "10% Discount" ? subtotal * 0.1 : discount === "5% Discount" ? subtotal * 0.05 : subtotal
    }
}), ['product', 'price', 'quantity', 'subtotal', 'discount', 'finalPrice'])

console.log(`\Task 4`)
console.table(cart.filter((data) => data.price > 1000000))