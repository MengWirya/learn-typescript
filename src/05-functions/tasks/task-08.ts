/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function generateReport(): object {
    const TotalStudent = submissions.length
    let Submitted = submissions.reduce((acc, current) => current.submitted ? acc + 1 : acc, 0)
    let MissingAssignment = submissions.reduce((acc, current) => !current.submitted ? acc + 1 : acc, 0)
    let TotalPassed = submissions.reduce((acc, current) => current.score >= 75 ? acc + 1 : acc, 0)
    let TotalFailed = submissions.reduce((acc, current) => (current.submitted && current.score <= 75) ? acc + 1 : acc, 0)
    let totalScore = submissions.reduce((acc, current) => acc += current.score, 0)
    let averageScore = totalScore / TotalStudent
    let HighestScore = submissions.reduce((acc, current) => acc < current.score ? acc = current.score : acc, -Infinity)
    let lowestScore = submissions.reduce((acc, current) => acc > current.score ? acc = current.score : acc, Infinity)

    return {TotalStudent, Submitted, MissingAssignment, TotalPassed, TotalFailed, averageScore, HighestScore, lowestScore}
}

function printReport() {
    console.table(generateReport())
}

printReport()