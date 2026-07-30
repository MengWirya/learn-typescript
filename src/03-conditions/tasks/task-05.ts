/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */

interface student {studentName: string, studentGPA: number, studentIncome: number, studentCompetition: number, studentDisciplinaryRecord: boolean, studentDocumentCompletition: boolean}

let studentFajar: student = {
    studentName: "Fajar Hidayat",
    studentGPA: 3.89,
    studentIncome: 4200000,
    studentCompetition: 4,
    studentDisciplinaryRecord: false,
    studentDocumentCompletition: true
}

function checkEligible(data: student): string {
    let firstScreening = (data.studentGPA >= 3.75 && data.studentIncome < 5000000)
    let secondScreening = (data.studentCompetition >= 3 && !data.studentDisciplinaryRecord && data.studentDocumentCompletition)

    return !firstScreening ? "Failed first Screening" : secondScreening ? "Scholarship Approved" : "Passed First Screening, but Failed Second Screening"
}

console.table(checkEligible(studentFajar))