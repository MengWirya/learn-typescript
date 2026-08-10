/**
 * An online store has the following products:
 */
const products = [
    { name: "Keyboard", price: 850000 },
    { name: "Mouse", price: 275000 },
    { name: "Monitor", price: 2200000 },
    { name: "Headset", price: 650000 }
];

/**
 * The warehouse system needs to perform different operations on the same product list.
 * 1. Operation for display product
 * Keyboard - Rp850000
 * Mouse - Rp275000
 * Monitor - Rp2200000
 * Headset - Rp650000
 * 
 * 2. Display expensive products - Only products with a price above Rp1,000,000 should be displayed.
 * 3. Display products that cost more than Rp500,000 and show a 10% discount price.
 * 
 * Instead of creating a separate loop for every operation, the developer creates a reusable processing function.
 */

function processProduct<T>(arr: any[], callback: (person: any) => T): T[] {
    const results: T[] = []
    for (let index = 0; index < arr.length; index++) {
        const result = callback(arr[index])
        results.push(result)
    }
    return results
}

// function determineExpensive<K>(products: K[]): K | null {
    
//     return products.reduce((max: any, item: any) => 
//         (item.price > max.price) ? item : max
//     );
// }

// console.log("--- 1. Semua Produk ---");
// products.forEach(p => console.log(`${p.name} - Rp${p.price}`));


// console.log("\n--- 2. Produk Mahal (> Rp1.000.000) ---");
// products
//     .filter(p => p.price > 1000000)
//     .forEach(p => console.log(`${p.name} - Rp${p.price}`));


// console.log("\n--- 3. Produk Diskon (> Rp500.000) ---");
// products
//     .filter(p => p.price > 500000)
//     .map(p => `${p.name} (Diskon 10%) - Rp${p.price * 0.9}`)
//     .forEach(item => console.log(item));