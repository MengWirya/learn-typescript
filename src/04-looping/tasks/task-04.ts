/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [125000, 350000, 78000, 910000, 150000, 420000, 275000, 99000, 640000, 18000]

let totalSales = 0
let highestTransaction = 0
let lowestTransaction = Infinity

for (const sale of sales) {
   totalSales += sale
   highestTransaction < sale ? highestTransaction = sale : highestTransaction
   lowestTransaction > sale ? lowestTransaction = sale : lowestTransaction
}

const averageSales = totalSales / sales.length

console.log(`Deskripsi Sales`)
console.log(`Total sales: ${totalSales}`)
console.log(`Highest transaction: ${highestTransaction}`)
console.log(`Lowest transaction: ${lowestTransaction}`)
console.log(`Average sales: ${averageSales}`)