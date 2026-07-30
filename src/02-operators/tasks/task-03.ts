/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

interface Employee {employeeName: string, employeeStandardSalary: number, employeeOvertimeHour: number, employeeOvertimeRate: number}

const JohnEmployee: Employee = {
    employeeName: "John Doe Kenzie",
    employeeStandardSalary: 5000000,
    employeeOvertimeHour: 12,
    employeeOvertimeRate: 50000,
}

interface EmployeeBonus extends Employee {
    employeeOvertimePay: number;
    employeeBonus: number;
    employeeFinalSalary: number;
}

function calculateBonus(calculate: Employee): EmployeeBonus {
    const isOvertime = calculate.employeeOvertimeHour > 0;

    const employeeOvertimePay = isOvertime ? calculate.employeeOvertimeHour * calculate.employeeOvertimeRate : 0;
    const employeeBonus = isOvertime ? 300000 : 0;
    const employeeFinalSalary = calculate.employeeStandardSalary + employeeOvertimePay + employeeBonus;

    return {
        ...calculate,
        employeeOvertimePay,
        employeeBonus,
        employeeFinalSalary
    };
}

const calculateJohn = calculateBonus(JohnEmployee)
console.table(calculateJohn)