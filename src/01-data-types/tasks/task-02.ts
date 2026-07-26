/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

let product: {productName: string, productCode: string, productPrice: number, productStock: number} = {
    productName: `Mechanical Keyboard RGB`,
    productCode: `KBR-001`,
    productPrice: 850000,
    productStock: 18,
}
let discount: number = 0.25;
let isPremium: boolean = true;
let userPurchase: number = 2;

function checkStock(): number{
    let a: number;
    let b: number;

    a = product.productStock;
    b = userPurchase
    return a - b;
}

console.log(`Product Description: `);
console.log(`Product Name: ${product.productName}`);
console.log(`Product Code: ${product.productCode}`);
console.log(`Product Price: ${product.productPrice}`);
console.log(`Product Stock: ${product.productStock}`);

console.log(`User Description`);
if (isPremium) {
    console.log(`User is premium, free shipping`);
} else {
    console.log(`User is not premium, paid shipping`);
};
console.log(`Flash Sale discount around ${discount * 100}%`);
console.log(`User purchased ${userPurchase} keyboards`);
console.log(`Total keyboard ${product.productStock - userPurchase}`);
console.log(`Test function ${checkStock()}`)