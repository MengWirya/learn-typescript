/**
 * A teacher wants to calculate students' final grades automatically. Instead of writing the same formula multiple times, the teacher asks the developer to create a reusable function.
 * The final grade is calculated using the following formula:
 * - Assignment: 30%
 * - Midterm Exam: 30%
 * - Final Exam: 40%
 * 
 * Three students have the following scores:
 * | Student | Assignment | Midterm | Final |
 * | ------- | ---------: | ------: | ----: |
 * | Alya    |         85 |      80 |    92 |
 * | Budi    |         78 |      75 |    81 |
 * | Citra   |         90 |      88 |    95 |
 * 
 * The function should return the calculated final grade.
 * Student Tasks:
 * 1. Create a function named calculateFinalGrade.
 * 2. The function must receive:
 *  - assignment score
 *  - midterm score
 *  - final exam score
 * 3. Return the final grade.
 * 4. Call the function for each student.
 * 5. Display every student's final grade.

 */

interface Student {studentName: string, assignmentScore: number, midtermExamScore: number, finalExamScore: number}

interface StudentResult extends Student {studentFinalGrade: number}

const StudentsList: Student[] = [
    {studentName: `Alya`, assignmentScore: 85, midtermExamScore: 80, finalExamScore: 92},
    {studentName: `Budi`, assignmentScore: 78, midtermExamScore: 75, finalExamScore: 81},
    {studentName: `Citra`, assignmentScore: 90, midtermExamScore: 88, finalExamScore: 95}
]

function calculateFinalGrade(data: Student): StudentResult {
    return {
        ...data,
        studentFinalGrade: (data.assignmentScore * 0.3) + (data.midtermExamScore * 0.3) + (data.finalExamScore * 0.4)
    }
}

let StudentFinalList: Student[] = []

StudentsList.forEach((student) => {
    StudentFinalList.push(calculateFinalGrade(student))
})

console.table(StudentFinalList)