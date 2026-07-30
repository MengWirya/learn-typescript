/**
 * A company evaluates employees every month.
 * If an employee's performance score is 80 or above, they receive a performance bonus.
 * Otherwise, they do not receive a bonus.
 * Employee information:
 * | Information       | Value         |
 * | ----------------- | ------------- |
 * | Employee Name     | Dimas Pratama |
 * | Performance Score | 78            |
 * 
 * Tasks:
 * 1. Declare the variables.
 * 2. Use an if...else statement.
 * 3. Display the evaluation result. If eligible will display "Bonus Approved", 
 * otherwise display "Bonus not approved"
 */

interface employee {employeeName: string, employeeScore: number}
interface employeeBonus extends employee {employeeBonus: string}

const employeeDimas: employee = {
    employeeName: "Dimas Pratama",
    employeeScore: 78
}

function checkEligible(data: employee): employeeBonus {
    return {
        ...data,
        employeeBonus: data.employeeScore >= 80 ? "Bonus Approved" : "Bonus Not Approved"
    }
}

console.table(checkEligible(employeeDimas))