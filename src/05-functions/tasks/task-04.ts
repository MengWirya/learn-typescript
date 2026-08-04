/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport() {
    let TotalPresent = 0
    let TotalAbsent = 0
    attendances.forEach((attendance) => {
        if (attendance.present) {
            TotalPresent++;
        } else {
            TotalAbsent++;
            console.log(`Student with the name ${attendance.name} is absent`);
        }
    })
    console.log(`Total Present: ${TotalPresent}`)
    console.log(`Total Absent: ${TotalAbsent}`)
}

printAttendanceReport()