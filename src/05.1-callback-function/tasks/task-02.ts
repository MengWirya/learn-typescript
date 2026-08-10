/**
 * Teacher has list of student score:
 */
const scores = [85, 72, 91, 64, 88];

/**
 * The teacher wants to process the scores in different ways.
 * One report should simply display each score:
 * 
 * Score: 85
 * Score: 72
 * Score: 91
 * ...
 * 
 * Second report should determine whether each student passed.
 * Third report should determine grade of score with rules below.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |

 * Instead of creating different looping functions, create one reusable 
 * function that receives the processing logic as a callback.
 */

function processScores(scores: number[], callback: (score: number) => void): void {
    for (const score of scores) {
        callback(score)
    }
}

function printScore(score: number) {
    console.log(`Score siswa: ${score}`)
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

console.log(`\nScore List:`)
processScores(scores, printScore)

console.log(`\nPass List:`)
processScores(scores, isPass)

console.log(`\nGrade List:`)
processScores(scores, showGrade)