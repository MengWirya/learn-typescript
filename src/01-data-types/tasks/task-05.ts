/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

interface employee {employeeID: string, employeeName: string, employeeDate: Date, employeeCheckIn: number, employeeCheckOut: number, employeeWorkHour: number, employeeIsHere: boolean}

let employeeList: employee[] = [];

for (let i = 1; i <= 3; i++) {
    const inputID = prompt(`Masukan ID karyawan`);
    const inputName = prompt(`Masukan ID karyawan`);
    const inputCheckIn = Number(prompt(`Masukan ID karyawan`));
    const inputCheckOut = Number(prompt(`Masukan ID karyawan`));
    const workHour = inputCheckOut - inputCheckIn;

    let isHere = false;
    while (true) {
        const inputBoolean = prompt(`Apakah hari ini masuk? (True/False): `);
        const statusInput = inputBoolean ? inputBoolean.trim().toLowerCase() : "";

        if (statusInput === "true") {
            isHere = true;
            break;
        } else if (statusInput === "false") {
            isHere = false;
            break;
        }
        console.log(`Input hanya "True" atau "False"`);
    }

    let newEmployee: employee = {
        employeeID: inputID ?? "",
        employeeName: inputName ?? "",
        employeeDate: new Date(),
        employeeCheckIn: inputCheckIn ?? "",
        employeeCheckOut: inputCheckOut ?? "",
        employeeWorkHour: workHour,
        employeeIsHere: isHere,
    }

    employeeList.push(newEmployee)
}

console.log(`List karyawan perusahaan hari ini: ${employeeList}`)