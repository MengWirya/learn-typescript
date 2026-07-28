/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

import PromptSync = require("prompt-sync");
const prompt = PromptSync();

interface book {bookISBNNumber: string, bookTitle: string, bookAuthor: string, bookPages: number, bookCategory: string};

let bookList: book[] = [];

for (let i = 1; i <= 3; i++) {
    const inputISBNNumber = prompt(`Masukan ISBN Buku: `);
    const inputTitle = prompt(`Masukan judul buku: `);
    const inputAuthor = prompt(`Masukan author buku: `);
    const inputPages = Number(prompt(`Masukan jumlah halaman buku: `));
    const inputCategory = prompt(`Masukan kategori buku: `);

    let newBook: book = {
        bookISBNNumber: inputISBNNumber ?? "",
        bookTitle: inputTitle ?? "",
        bookAuthor: inputAuthor ?? "",
        bookPages: inputPages ?? "",
        bookCategory: inputCategory ?? "",
    }
    
    bookList.push(newBook);
}

console.log(`Book list: ${bookList}`);

// enum category {
//     Fiction = "FICTION",
//     NonFiction = "NONFICTION"
// }