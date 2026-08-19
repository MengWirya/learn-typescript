/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

console.log(`\nTask 1`)
console.table(orders.filter((data) => data.status === "completed"))

console.log(`\nTask 2`)
const paymentDetails = orders.map((data) => {
    const subtotal = data.items.reduce((sum, info) => sum += info.price * info.quantity ,0)

    return {
        ...data,
        subtotal: subtotal,
    }
})
console.table(paymentDetails, ['id', 'customer', 'subtotal'])

console.log(`\nTask 3`)
console.table(paymentDetails.sort(function(a, b){return b.subtotal - a.subtotal}))

console.log(`\nTask 4`)
console.log(`Total Penghasilan: ${paymentDetails.reduce((sum, data) => data.status === "completed" ? sum += data.subtotal : sum ,0)}`)

console.log(`\nTask 5`)
console.log(paymentDetails.filter((data) => data.status === "completed"))