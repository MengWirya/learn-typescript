/**
 * A lecturer wants to summarize examination results for 20 students.
 * The examination scores are stored in the following array:
 * ---------------------------------------
 * const scores = [
 * 82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76
 * ]
 * ---------------------------------------
 * 
 * Business Rules
 * - Passing score is 75.
 * - Count how many students passed.
 * - Count how many students failed.
 * - Calculate the total score.
 * - Calculate the average score.
 * 
 * Tasks: 
 * 1. Iterate through every score using a loop.
 * 2. Use conditional statements to determine pass/fail.
 * 3. Calculate:
 * - Total score
 * - Average score
 * - Number of passing students
 * - Number of failing students
 */

const scores = [82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76]

let totalScore = 0
let studentPass = 0
let studentFail = 0

for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i]
    if (scores[i] >= 75) {
        studentPass += 1
    } else {studentFail += 1}
}

const averageScore = totalScore / scores.length

console.log(`Deskripsi Nilai`)
console.log(`Total score: ${totalScore}`)
console.log(`Average score: ${averageScore}`)
console.log(`Student pass: ${studentPass}`)
console.log(`Student fail: ${studentFail}`)