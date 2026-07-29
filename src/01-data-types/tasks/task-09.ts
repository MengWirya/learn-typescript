/**
 * A programming bootcamp stores information about every participant who registers for the Backend Development class. 
 * Since many students register for the same course, the system stores the participant data as a collection instead of creating separate variables.
 * Today, three students registered for the course.
| Student ID | Name           | Age | Has Paid |
| ---------- | -------------- | --- | -------- |
| ST001      | Ahmad Fauzi    | 16  | Yes      |
| ST002      | Siti Nurhaliza | 17  | No       |
| ST003      | Budi Santoso   | 16  | Yes      |


 * Task:
 * 1. Define a proper type for the participant information.
 * 2. Store the participant data in a single collection.
 * 3. Display the participant data using console.log.
 */

interface Student {studentID: string, studentName: string, studentAge: number, studentHasPaid: boolean;}

const studentList: Student[] = [
    {studentID: `ST001`, studentName: `Ahmad Fauzi`, studentAge: 16, studentHasPaid: true},
    {studentID: `ST002`, studentName: `Siti Nurhaliza`, studentAge: 17, studentHasPaid: false},
    {studentID: `ST003`, studentName: `Budi Santoso`, studentAge: 16, studentHasPaid: true},
]

console.table(studentList)

// Versi console.log

studentList.forEach((student) => {
    if (student.studentHasPaid) {
        console.log(`Siswa dengan ID ${student.studentID}, dengan nama ${student.studentName} yang umurnya sebesar ${student.studentAge}. Sudah membayar`)
    } else {
        console.log(`Siswa dengan ID ${student.studentID}, dengan nama ${student.studentName} yang umurnya sebesar ${student.studentAge}. Belum membayar`)
    }
})