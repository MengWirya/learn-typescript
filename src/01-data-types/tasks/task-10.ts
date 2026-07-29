/**
 * An online shopping platform allows customers to purchase multiple products in one transaction. 
 * Every product added to the shopping cart stores the product code, product name, unit price, 
 * quantity purchased, and whether the product is eligible for free shipping.
 * Today, one customer added the following products to the cart.

| Product Code | Product Name        | Price   | Quantity | Free Shipping |
| ------------ | ------------------- | ------- | -------- | ------------- |
| KB001        | Mechanical Keyboard | 850000  | 1        | Yes           |
| MS002        | Wireless Mouse      | 275000  | 2        | Yes           |
| HD003        | External SSD 1TB    | 1650000 | 1        | No            |
| HP004        | Gaming Headset      | 720000  | 1        | Yes           |

 * Task:
 * 1. Define a proper type for the product information.
 * 2. Store the product data in a single collection.
 * 3. Display the product data using console.log.
 */

interface Product {productCode: string, productName: string, productPrice: number, productQuantity: number, productFreeShipping: boolean}

const productList: Product[] = [
    {productCode: `KB001`, productName: `Mechanical Keyboard`, productPrice: 850000, productQuantity: 1, productFreeShipping: true},
    {productCode: `MS002`, productName: `Wireless Mouse`, productPrice: 275000, productQuantity: 2, productFreeShipping: true},
    {productCode: `KB001`, productName: `Mechanical Keyboard`, productPrice: 850000, productQuantity: 1, productFreeShipping: false},
    {productCode: `KB001`, productName: `Mechanical Keyboard`, productPrice: 850000, productQuantity: 1, productFreeShipping: true},
];

console.table(productList);

productList.forEach((Product) => {
    if (Product.productFreeShipping) {
        console.log(`Product dengan kode ${Product.productCode}, nama ${Product.productName}, harga ${Product.productPrice}, sejumlah ${Product.productQuantity}. Mendapatkan free shipping`)
    } else {
        console.log(`Product dengan kode ${Product.productCode}, nama ${Product.productName}, harga ${Product.productPrice}, sejumlah ${Product.productQuantity}. Mendapatkan free shipping`)
    }
});