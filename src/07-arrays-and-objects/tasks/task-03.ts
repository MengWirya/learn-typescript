/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are absent
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

// LEFT JOIN
const combinedArray = students.map((student) => {
    const attendRecord: any = attendance.find((att) => att.studentId === student.id);
    
    return {
        ...student,
        status: attendRecord.status 
    };
});

// INNER JOIN
// const innerJoin = students
//     .filter(student => attendance.some(att => att.studentId === student.id))
//     .map(student => {
//         const att: any = attendance.find(att => att.studentId === student.id);
//         return { ...student, status: att.status };
//     });

console.log(`\nTask 1`)
console.log(combinedArray.filter((data) => data.status === "present").map((student) => student.name))

console.log(`\nTask 2`)
console.log(combinedArray.filter((data) => data.status === "absent").map((student) => student.name))

console.log(`\nTask 3`)
console.log(combinedArray.filter((data) => data.status === "late").map((student) => student.name))

console.log(`\nTask 4`)
console.table(combinedArray)