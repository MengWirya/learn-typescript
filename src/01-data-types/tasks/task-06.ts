/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

interface product {productCode: string, productName: string, productPrice: number, productStock: number, productWeight: number, productAverageRating: number, productIsDiscount: boolean}

let productList: product[] = [];

for (let i = 1; i <= 3; i++) {
    const inputCode = prompt(`Masukan kode product: `);
    const inputName = prompt(`Masukan nama product: `);
    const inputPrice = Number(prompt(`Masukan kode product: `));
    const inputStock = Number(prompt(`Masukan kode product: `));
    const inputWeight = Number(prompt(`Masukan kode product: `));
    const inputAverageRating = Number(prompt(`Masukan kode product: `));

    let isDiscount = false
    while (true) {
       const inputBoolean = prompt(`Apakah sedang diskon? (True/False): `);
        const statusInput = inputBoolean ? inputBoolean.trim().toLowerCase() : "";

        if (statusInput === "true") {
            isDiscount = true;
            break;
        } else if (statusInput === "false") {
            isDiscount = false;
            break;
        }
        console.log(`Input hanya "True" atau "False"`); 
    }

    let newProduct: product = {
        productCode: inputCode ?? "",
        productName: inputName ?? "",
        productPrice: inputPrice ?? "",
        productStock: inputStock ?? "",
        productWeight: inputWeight ?? "",
        productAverageRating: inputAverageRating ?? "",
        productIsDiscount: isDiscount ?? "",
    }

    productList.push(newProduct);
}

console.log(`List produk yang ada: ${productList}`);