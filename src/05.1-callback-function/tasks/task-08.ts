/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */

type paymentStatus = "paid" | "pending" | "cancelled"
interface transaction {id: string, customer: string, amount: number, status: paymentStatus}

type paymentCategory = "HIGH VALUE" | "MEDIUM VALUE" | "LOW VALUE"
interface transactionCategory extends transaction {category: paymentCategory}
interface transactionFee extends transaction {platformFee: number}

const transactions: transaction[] = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */

function processPayment<T>(arr: transaction[], callback: (payment: transaction) => T): T[] {
    const results: T[] = []
    for (let index = 0; index < arr.length; index++) {
        const result = callback(arr[index])
        results.push(result)
    }
    return results
}

function printPayment(payment: transaction) {
    console.log(`${payment.customer}`)
}

function categoryPayment(payment: transaction): transactionCategory {
    const categoryResult = payment.amount >= 2000000 ? "HIGH VALUE" : payment.amount >= 1000000 ? "MEDIUM VALUE" : "LOW VALUE"

    return {
        ...payment,
        category: categoryResult
    }
}

function feePayment(payment: transaction): transactionFee {
    const fee = payment.status == "paid" ? payment.amount * 0.02 : payment.status == "pending" ? payment.amount * 0.01 : 0

    return {
        ...payment,
        platformFee: fee
    }
}

console.log(`Customer List`)
processPayment(transactions, printPayment)
console.log(`Category List`)
console.table(processPayment(transactions, categoryPayment))
console.log(`Fee List`)
console.table(processPayment(transactions, feePayment))