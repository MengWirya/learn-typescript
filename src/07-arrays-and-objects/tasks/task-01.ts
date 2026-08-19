/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];

const nameArray = students.map(student => student.name)
console.log(nameArray)


console.log(`\n`)
console.log(students.filter((student) => student.score >= 70))


console.log(`\n`)
console.log(students.filter((student) => student.name === "Citra"))
console.log(students.some((student) => student.name === "Citra"))


let totalScore = 0
students.forEach((student) => {
  totalScore += student.score
})
const averageScore = totalScore / students.length
console.log(`\n`)
console.log(`Average Score: ${averageScore}`)


