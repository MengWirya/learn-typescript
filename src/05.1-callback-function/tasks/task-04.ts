/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */
function processScores(scores: number[], callback: (score: number) => void): void {
    for (let score of scores) {
        let bonusScore = 0
        score + 5 > 100 ? bonusScore = 100 : bonusScore = score + 5
        callback(bonusScore)
    }
}

function printScore(score: number) {
    console.log(`Score siswa: ${score} (After Bonus 5)`)
}

function isPass(score: number) {
    score < 70 ? console.log(`Failed`) : console.log(`Passed`)
}

function showGrade(score: number) {
    if (score >= 90) {
        console.log(`Grade: A`)
    } else if (score >= 80) {
        console.log(`Grade: B`)
    } else if (score >= 70) {
        console.log(`Grade: C`)
    } else {console.log(`Grade D`)}
}

function isExcellent(score: number) {
    score >= 90 ? console.log(`Excellent Score`) : console.log(`Reguler Score`)
}

console.log(`\nScore List:`)
processScores(scores, printScore)

console.log(`\nPass List:`)
processScores(scores, isPass)

console.log(`\nGrade List:`)
processScores(scores, showGrade)

console.log(`\nExcellent score List:`)
processScores(scores, isExcellent)