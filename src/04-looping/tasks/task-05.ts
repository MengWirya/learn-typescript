/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let goldMedal = 0
let silverMedal = 0
let bronzeMedal = 0
let noMedal = 0
let totalScore = 0

for (const score of scores) {
    totalScore += score
    score >= 95 ? goldMedal++ : (score < 95 && score >= 85) ? silverMedal++ : (score <= 84 && score >= 75) ? bronzeMedal++ : noMedal++
}

const averageScore = totalScore / scores.length

console.log(`Deskripsi Nilai`)
console.log(`Average score: ${averageScore}`)
console.log(`Gold medal: ${goldMedal}`)
console.log(`Silver medal: ${silverMedal}`)
console.log(`Bronze medal: ${bronzeMedal}`)
console.log(`No medal: ${noMedal}`)