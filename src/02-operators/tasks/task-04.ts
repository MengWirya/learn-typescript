/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

interface Product {productName: string, productPrice: number, productQuantity: number}
interface ProductPayment {customerIsPremium: boolean, productTotalQuantity: number, paymentSubtotal: number, paymentgainDiscount: boolean, paymentTotal: number}

const RezaBuyer: Product[] = [
    {productName: "Mechanical Keyboard", productPrice: 850000, productQuantity: 1},
    {productName: "Wireless Mouse", productPrice: 275000, productQuantity: 2},
    {productName: "Mouse Pad", productPrice: 120000, productQuantity: 1},
]

function calculatePayment(Buyer: Product[], isPremium: boolean): ProductPayment {
    let TotalQuantity = 0
    let SubTotal = 0

    Buyer.forEach((product) => {
        TotalQuantity += product.productQuantity
        SubTotal += product.productPrice * product.productQuantity
    })

    let gainDiscount = SubTotal > 1000000
    let Total = gainDiscount ? SubTotal * 0.9 : SubTotal

    return {
        customerIsPremium: isPremium,
        productTotalQuantity: TotalQuantity,
        paymentSubtotal: SubTotal,
        paymentgainDiscount: gainDiscount,
        paymentTotal: Total
    }
}

console.table(calculatePayment(RezaBuyer, true))