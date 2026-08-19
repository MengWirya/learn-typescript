/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];

const combinedArray = borrowings.map((data) => {
    const bookData = books.find((book) => book.id === data.bookId) 
    
    return {
        ...data,
        title: bookData?.title,
        category: bookData?.category,
        stock: bookData?.stock
    }
})

console.log(`\nTask 1`)
console.table(combinedArray.filter((data) => data.student === "Andi"), ['student', 'bookId', 'title'])

console.log(`\nTask 2`)
console.table(combinedArray)

console.log(`\nTask 3`)
console.table(combinedArray.filter((data) => data.category === "Programming"), ['student', 'title', 'category'])

console.log(`\nTask 4`)
console.log(`Total Books ${books.reduce((sum, data) => data.stock ? sum += data.stock : 0 ,0)}`)

console.log(`\nTask 5`)
const averageTimeBorrowing = combinedArray.reduce((sum, data) => sum += data.days ,0) / combinedArray.length
console.log(`Average Time for Borrowing Book: ${averageTimeBorrowing}`)

console.log(`\nTask 6`)
console.table(combinedArray.filter((data) => data.days > 7))