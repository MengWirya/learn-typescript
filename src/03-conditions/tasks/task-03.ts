/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */

enum Rank {
    Basic = "Basic User",
    Standard = "Standard User",
    Premium = "Premium User",
}

interface customer {customerName: string, customerUsage: number}
interface customerDetail extends customer {customerRank: Rank}

const customerRaka: customer = {
    customerName: "Raka Saputra",
    customerUsage: 124,
}

function checkRank(data: customer): customerDetail | null {
    let rankCustomer: Rank
    
    if (data.customerUsage > 150) {
        rankCustomer = Rank.Premium;
    } else if (data.customerUsage <= 150 && data.customerUsage >= 50) {
        rankCustomer = Rank.Standard;
    } else if (data.customerUsage < 50 && data.customerUsage >= 0) {
        rankCustomer = Rank.Basic;
    } else {
        return null;
    }    
    return {
       ...data,
       customerRank: rankCustomer
    }
}

console.table(checkRank(customerRaka))