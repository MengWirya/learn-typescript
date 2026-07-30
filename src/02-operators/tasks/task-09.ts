/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

interface Customer {voucherValue: number, isPremium: boolean, pointRate: number}
interface Product {productName: string, productPrice: number, productQuantity: number}
interface Receipt {subTotal: number, membershipDiscount: number, voucherDeduction: number, priceBeforeTax: number, VAT: number, finalPrice: number, rewardPayment: number, freeShipping: boolean}

const KenzieCustomer: Customer = {
    voucherValue: 100000,
    isPremium: true,
    pointRate: 50000
}

const KenzieShopping: Product[] = [
    {productName: "Mechanical Keyboard", productPrice: 850000, productQuantity: 1},
    {productName: "Wireless Mouse", productPrice: 275000, productQuantity: 2},
    {productName: "Mouse Pad", productPrice: 120000, productQuantity: 1},
]

function calculateReceipt(customer: Customer, shoppingCart: Product[]): Receipt {
    let subTotal = 0
    
    shoppingCart.forEach((product) => {
        subTotal += (product.productPrice * product.productQuantity)
    })

    const membershipDiscount = subTotal * 0.1
    const priceAfterDiscount = subTotal - membershipDiscount
    const voucherDeduction = customer.voucherValue - priceAfterDiscount < 0 ? customer.voucherValue : customer.voucherValue - priceAfterDiscount 
    const priceBeforeTax = priceAfterDiscount - customer.voucherValue
    const tax = priceBeforeTax * 0.1
    const finalPrice = priceBeforeTax + tax
    const rewardPayment = finalPrice / customer.pointRate
    const isFreeShipping = (customer.isPremium || priceBeforeTax > 1500000)
    
    return {
        subTotal: subTotal,
        membershipDiscount: membershipDiscount,
        voucherDeduction: voucherDeduction,
        priceBeforeTax: priceBeforeTax,
        VAT: tax,
        finalPrice: finalPrice,
        rewardPayment: rewardPayment,
        freeShipping: isFreeShipping
    }
}

console.table(calculateReceipt(KenzieCustomer, KenzieShopping))