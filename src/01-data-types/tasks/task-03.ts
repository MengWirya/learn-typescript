/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

import promptSync from 'prompt-sync';
const prompt = promptSync();

let student: {studentID: string, studentName: string, studentAge: number, studentStatus: boolean} = {
    studentID: prompt(`masukan ID anda:`),
    studentName: prompt(`masukan nama anda:`),
    studentAge: Number(prompt(`masukan umur anda:`)),
    studentStatus: Boolean(prompt(`status murid: `))
};

console.log(`Deskripsi Murid`);
console.log(`ID Murid ${student.studentID}`);
console.log(`Nama Murid ${student.studentName}`);
console.log(`Umur Murid ${student.studentAge}`);
console.log(`Status Murid ${student.studentStatus}`);
