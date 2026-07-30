/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

function countMinute(hours: number, minutes: number): number {
    return ((hours * 60) + minutes)
}

interface Rent {rentID: string, rentPrice: number, rentMinutes: number}
interface Payment {paymentRemainingMinutes: number, paymentCountedHours: number, paymentSubTotal: number, paymentDiscount: number, paymentTotal: number}

const PramaCustomer: Rent = {
    rentID: "001",
    rentPrice: 8000,
    rentMinutes: countMinute(7, 35)
}

function calculatePayment(data: Rent): Payment {
    let isDiscount = data.rentMinutes > 300
    let Hours = Math.floor(data.rentMinutes / 60)
    let remainingMinutes = data.rentMinutes % 60
    let subTotal = Hours * data.rentPrice
 
    return {
        paymentRemainingMinutes: remainingMinutes,
        paymentCountedHours: Hours,
        paymentSubTotal: subTotal,
        paymentDiscount: subTotal * 0.15,
        paymentTotal: isDiscount ? subTotal * 0.85 : subTotal
    }
}

console.log(calculatePayment(PramaCustomer))