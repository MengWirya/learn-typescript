/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

interface Student {name: string, score: number, attendance: number}
type RECOMMENDATION_RESULT = "Excellent" | "Good" | "Improve Attendance" | "Improve Academic Performance"
interface studentResult extends Student {recomendation: RECOMMENDATION_RESULT}

const students: Student[] = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

function processStudent<T>(arr: Student[], callback: (student: Student) => T): T[] {
    const results: T[] = []
    for (let index = 0; index < arr.length; index++) {
        const result = callback(arr[index])
        results.push(result)
    }
    return results
}

function studentStatus(student: Student) {
    student.score >= 75 && student.attendance >= 90 ? console.log(`Student ${student.name} - Pass`) : console.log(`Student ${student.name} - Failed`)
}

function studentRecomendation(student: Student): studentResult {
    const recomendationResult = student.score >= 90 && student.attendance >= 90 ? "Excellent" : student.score >= 75 && student.attendance >= 90 ? "Good" : student.score >= 75 && student.attendance >= 90 ? "Improve Attendance" : "Improve Academic Performance"

    return {
        ...student,
        recomendation: recomendationResult
    }
}

console.log(`---Student List---`)
processStudent(students, studentStatus)
console.log(`---Student Recommendation---`)
console.table(processStudent(students, studentRecomendation))
