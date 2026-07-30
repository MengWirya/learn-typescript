/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

interface guest {roomPrice: number, nightStayed: number, servicePrice: number, tax: number, isVIP: boolean}
interface payment {roomSubtotal: number, discount: number, taxTotal: number, freeBreakfast: boolean, totalPrice: number}

const AlbiGuest: guest = {
    roomPrice: 650000,
    nightStayed: 4,
    servicePrice: 120000,
    tax: 0.11,
    isVIP: true
}

function calculatePrice(data: guest): payment {
    const subTotal = data.roomPrice * data.nightStayed
    const discount = data.isVIP ? subTotal * 0.12 : 0
    const tax = (subTotal + discount) * data.tax
    const freeBreakfast = (data.nightStayed >= 3 || data.isVIP)
    
    return {
        roomSubtotal: subTotal,
        discount: discount,
        taxTotal: tax,
        freeBreakfast: freeBreakfast,
        totalPrice: subTotal + tax + data.servicePrice 
    }
}

console.table(calculatePrice(AlbiGuest))