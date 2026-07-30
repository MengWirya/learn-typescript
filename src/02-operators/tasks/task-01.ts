/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

interface Student {studentID: string, studentName: string, studentIsCouncil: boolean}

const studentRaka: Student = {
    studentID: "001",
    studentName: "Raka",
    studentIsCouncil: true
}

enum FoodType {
    food = "food",
    drink = "drink"
}

interface Food {foodID: string, foodName: string, foodType: FoodType, foodPrice: number, foodBuyed: number};

const foodList: Food[] = [
    {foodID: "NAG-001", foodName: "Fried Rice", foodType: FoodType.food, foodPrice: 18000, foodBuyed: 3,},
    {foodID: "WAT-002", foodName: "Water", foodType: FoodType.drink, foodPrice: 5000, foodBuyed: 2,},
];

interface FoodDetail extends Food {
    foodTotalPrice: number;
}

function createFoodDetail(data: Food): FoodDetail {
    return {
        ...data,
        foodTotalPrice: data.foodBuyed > 0 ? Number(data.foodPrice) * data.foodBuyed : 0
    }
}

const foodComplete: FoodDetail[] = []

foodList.forEach((Food) => {
    foodComplete.push(createFoodDetail(Food))
})

let TotalFoodPrice = 0;
let TotalDrinkPrice = 0;
let TotalPriceBeforeDiscount = 0;
let GrandPrice = 0;

foodComplete.forEach((FoodDetail) => {
    if (FoodDetail.foodType === FoodType.food) {
        TotalFoodPrice += FoodDetail.foodTotalPrice;
    } else {
        TotalDrinkPrice += FoodDetail.foodTotalPrice;
    }

    TotalPriceBeforeDiscount += FoodDetail.foodTotalPrice;
})


console.log("Deskripsi Receipt");
if (studentRaka.studentIsCouncil) {
    console.log(`Kamu mendapatkan Diskon sebesar 10.000`)
    GrandPrice = TotalPriceBeforeDiscount - 10000
} else {
    GrandPrice = TotalPriceBeforeDiscount
}

console.log(`Total Harga Makanan: ${TotalFoodPrice}`);
console.log(`Total Harga Minuman: ${TotalDrinkPrice}`);
console.log(`Total Harga sebelum Diskon: ${TotalPriceBeforeDiscount}`);
console.log(`Total Harga: ${GrandPrice}`);