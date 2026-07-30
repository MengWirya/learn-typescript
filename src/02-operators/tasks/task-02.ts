/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */

interface graduation {finalScore: number, attendanceScore: number, tuitionIsPaid: boolean}

const JohnSiswa: graduation = {
    finalScore: 82,
    attendanceScore: 94,
    tuitionIsPaid: true,
}

interface graduationResult extends graduation {
    isEligible: boolean
}

function checkEligible(check: graduation): graduationResult {
    return{
        ...check,
        isEligible: (check.finalScore >= 75 && check.attendanceScore >= 90 && check.tuitionIsPaid) ? true : false
    }
}

const checkResult = checkEligible(JohnSiswa);
console.table(checkResult)