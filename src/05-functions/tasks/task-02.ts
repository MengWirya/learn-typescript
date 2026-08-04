/**
 * The HR department wants to display bonus notifications for employees.
 * Business Rules
 *  - Performance score ≥ 85 → Bonus Approved
 *  - Otherwise → Bonus Not Approved
 * Employee data:
 * | Employee       | Score |
 * | ---------------| ----- |
 * | John Cena      |    92 |
 * | Undertaker     |    76 |
 * | Rey Mysterio   |    88 |
 * 
 * Instead of repeating the decision logic, the HR department wants a reusable function.
 * The function should display the notification directly and does not return any value.
 * 
 * Student Tasks:
 * 1. Create a function named showBonusStatus.
 * 2. The function receives:
 *  - employee name
 *  - performance score
 * 3. Display the bonus result inside the function.
 * 4. Call the function for every employee.
 */

interface employee {employeeName: string, employeeScore: number}
interface employeeBonus extends employee {employeeBonus: string}

const employeeeList: employee[] = [
    {employeeName: `John Cena`, employeeScore: 92},
    {employeeName: `Undertaker`, employeeScore: 92},
    {employeeName: `Rey Mysterio`, employeeScore: 92}
]

function showBonusStatus(data: employee): employeeBonus {
    return {
        ...data,
        employeeBonus: data.employeeScore >= 80 ? "Bonus Approved" : "Bonus Not Approved"
    }
}

let employeeeBonusList: employee[] = []
employeeeList.forEach((employee) => {
    employeeeBonusList.push(showBonusStatus(employee))
})

console.table(employeeeBonusList)