/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

console.log(`\nTask 1`)
const correctedStudents = students.map((student) => {
    const check = student.answers.map((answer, i) => answer === correctAnswers[i])
    let score = 0
    check.forEach((data) => data ? score += 20 : score)
    return {
        ...student,
        isCorrect: check,
        score: score,
    }
})
console.table(correctedStudents, ['name', 'score'])

console.log(`\nTask 2`)
console.table(correctedStudents.filter((data) => data.score > 70))

console.log(`\nTask 3`)
const HighestScorer = correctedStudents.reduce((highestScore, data) => {
    return data.score > highestScore.score ? data: highestScore
})
console.log(`Highest Scorer: ${HighestScorer.name}`)

console.log(`\nTask 4`)
const totalScore = correctedStudents.reduce((sum, data) => sum += data.score, 0)
console.log(`Average: ${totalScore / correctedStudents.length}`)