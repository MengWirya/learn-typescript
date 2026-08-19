import { info } from "node:console";

/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

const employeesDetail = employees.map((data) => {
    const averageScore = data.projects.reduce((sum, info) => sum += info.score ,0) / data.projects.length

    return {
        ...data,
        averageScore: averageScore
    }
})

console.log(`\nTask 1`)
console.table(employeesDetail, ['name', 'averageScore'])

console.log(`\nTask 2`)
console.table(employeesDetail.filter((data) => data.averageScore >= 85), ['name', 'averageScore'])

console.log(`\nTask 3`)
console.log(employeesDetail.filter((data) => data.projects.find((info) => info.score < 80)))