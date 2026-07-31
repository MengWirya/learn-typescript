/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */

interface applicant {applicantName: string, applicantIncome: number, applicantCredit: number, applicantExistingDebt: number, applicantEmployee: boolean}

let applicantToday: applicant = {
    applicantName: "Andi Wijaya",
    applicantIncome: 10000000,
    applicantCredit: 725,
    applicantExistingDebt: 2500000,
    applicantEmployee: true,
}

function checkEligible(data: applicant): string {
    let firstScreening = (data.applicantIncome >= 700 && data.applicantIncome >= 8000000)
    let secondScreening = (data.applicantEmployee && data.applicantExistingDebt <= (data.applicantIncome * 0.3))

    return !firstScreening ? "Loan Rejected" : secondScreening ? "Loan Approved" : "Manual Review"
}

console.table(checkEligible(applicantToday))