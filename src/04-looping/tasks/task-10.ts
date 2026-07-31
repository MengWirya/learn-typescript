/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let totalScore = 0
let studentSubmit = 0
let studentNull = 0
let studentPass = 0
let studentFail = 0

console.log(`Siswa yang belum mengumpulakn/harus revisi`)
submissions.forEach((submission) => {
    totalScore += submission.score

    if (submission.submitted) {
        studentSubmit++
        if (submission.score >= 75) {
            studentPass++
        } else {
            studentFail++
            console.log(`Student with the name ${submission.student} must revise the work`)
        }
    } else {
        studentNull++
        console.log(`Student with the name ${submission.student} must submit the work`)
    }
})


const averageScore = totalScore / submissions.length

console.log(`Deskripsi Nilai`)
console.log(`Total score: ${totalScore}`)
console.log(`Average score: ${averageScore}`)
console.log(`Student who submit: ${studentSubmit}`)
console.log(`Student who didn't submit: ${studentNull}`)
console.log(`Student pass: ${studentPass}`)
console.log(`Student fail: ${studentFail}`)