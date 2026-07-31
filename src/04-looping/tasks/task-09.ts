/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];


let A = 0
let B = 0
let C = 0
let D = 0
let highestScore = 0
let lowestScore = Infinity

students.forEach((student) => {
    highestScore += student.score;
    (student.score <= 100 && student.score >= 90) ? A++ : (student.score <= 89 && student.score >= 80) ? B++ : (student.score <= 79 && student.score >= 70) ? C++ : D++
})

const averageScore = highestScore / students.length

console.log(`Deskripsi Nilai`)
console.log(`Number of A students: ${A}`)
console.log(`Number of B students: ${B}`)
console.log(`Number of C students: ${C}`)
console.log(`Number of D students: ${D}`)
console.log(`Highest Score: ${highestScore}`)
console.log(`Lowest Score: ${lowestScore}`)
console.log(`Average Score: ${averageScore}`)