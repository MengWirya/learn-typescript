/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

let scholarshipBudget = 500000000
interface student {studentName: string, studentGPA: number, studentIncome: number, studentCompetition: number, studentDisciplinaryRecord: boolean, studentDocumentCompletition: boolean}
interface studentScholarship extends student {scholarIsEligible: boolean, scholarshipAmount: number}

let studentAlya: student = {
    studentName: "Alya Putri",
    studentGPA: 3.89,
    studentIncome: 4200000,
    studentCompetition: 4,
    studentDisciplinaryRecord: false,
    studentDocumentCompletition: true
}

function checkEligible(data: student): studentScholarship {
    let isEligible = (data.studentGPA >= 3.75 && data.studentIncome <= 5000000 && data.studentCompetition >= 3 && !data.studentDisciplinaryRecord && data.studentDocumentCompletition)
    isEligible ? scholarshipBudget -= 12000000 : null

    return {
        ...data,
        scholarIsEligible: isEligible,
        scholarshipAmount: isEligible ? 12000000 : 0
    }
}

console.table(checkEligible(studentAlya))
console.log(`total remaining budget for scholarship: ${scholarshipBudget}`)

