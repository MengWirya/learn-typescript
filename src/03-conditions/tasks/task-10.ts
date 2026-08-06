/**
 * A university allows students to register for advanced programming courses only if they satisfy all academic requirements.

Registration Process

Step 1 — Academic Status
The student must:
 - Be actively enrolled.
 - Have completed tuition payment.

If either requirement is not satisfied:
Registration Rejected

Otherwise, continue.

Step 2 — Academic Requirements
The student must:
- Pass Programming Fundamentals.
- Pass Database Systems.
- Have a GPA of at least 3.20.
If these requirements are satisfied, continue.
Otherwise:
Academic Requirements Not Met

Step 3 — Seat Availability
If seats are still available:
- Registration Successful
Otherwise:
- Added to Waiting List

Student Information:
| Information                     | Value       |
| ------------------------------- | ----------- |
| Student Name                    | Nadia Putri |
| Active Student                  | Yes         |
| Tuition Paid                    | Yes         |
| Passed Programming Fundamentals | Yes         |
| Passed Database Systems         | Yes         |
| GPA                             | 3.45        |
| Seats Available                 | No          |

Student Tasks
- Declare all variables.
- Implement the registration workflow.
- Use nested conditional statements.
- Display the final registration result.
 */

interface student {studentName: string, studentIsActive: boolean, studentTuitionPaid: boolean, studentProgrammingFundamental: boolean, studentDatabase: boolean, studentGPA: number, studentWaiting: number}

let studentNadia: student = {
    studentName: "Nadia Putri",
    studentIsActive: true,
    studentTuitionPaid: true,
    studentProgrammingFundamental: true,
    studentDatabase: true,
    studentGPA: 3.45,
    studentWaiting: 14
}

const TotalSeatAvaible = 13

function checkRegistration(data: student): string {
    if (data.studentIsActive && data.studentTuitionPaid) {
        if (data.studentProgrammingFundamental && data.studentDatabase && data.studentGPA >= 3.2) {
            return data.studentWaiting <= TotalSeatAvaible ? "Registration Successful" : "Added to Waiting List"
        } else {return "Academic Requirements Not Met"}
    } else {
        return "Registration Rejected"
    }
}

console.log(checkRegistration(studentNadia))