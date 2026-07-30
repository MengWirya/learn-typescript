// /**
//  * Module 03: Conditions — Task 01
//  *
//  * Instructions:
//  * 1. Implement the functions using if/else or switch.
//  * 2. Run: npm run example src/03-conditions/tasks/task-01.ts
//  */

// function getGrade(score: number): string {
//   let grade: string

//   if (100 >= score && score >= 90) {
//     grade = "A"
//   } else if (89 >= score && score >= 80) {
//     grade = "B"
//   } else if (79 >= score && score >= 70) {
//     grade = "C"
//   } else if (69 >= score && score >= 60) {
//     grade = "D"
//   } else if (score < 60) {
//     grade = "F"
//   } else {
//     grade = "Error, masukan nilai yang benar"
//   }

//   return grade;
// }

// // TODO: Return the number of days in the given month (ignore leap years).
// // Use a switch statement. month is 1-12.
// function daysInMonth(month: number): number {
//   switch(month) {
//     case 1: return "January",
//     case 2: return "February",
//     case 3: return "March",
//     case 4: return "April",
//     case 5: return "May",
//     case 6: return "June",
//     case 7: return "July",
//     case 8: return "August",
//     case 9: return "September",
//     case 10: return "October",
//     case 11: return "November",
//     case 12: return "December",
//     default: return "Hore",
//   }
// }

// // TODO: Return "positive", "negative", or "zero"
// function checkSign(num: number): string {

//   return ""; 
// }

// // --- Tests (do not modify) ---
// console.log("getGrade(95):", getGrade(95)); // expected: "A"
// console.log("getGrade(72):", getGrade(72)); // expected: "C"
// console.log("getGrade(45):", getGrade(45)); // expected: "F"
// console.log("daysInMonth(2):", daysInMonth(2)); // expected: 28
// console.log("daysInMonth(4):", daysInMonth(4)); // expected: 30
// console.log('checkSign(5):', checkSign(5)); // expected: "positive"
// console.log('checkSign(-3):', checkSign(-3)); // expected: "negative"
// console.log('checkSign(0):', checkSign(0)); // expected: "zero"
