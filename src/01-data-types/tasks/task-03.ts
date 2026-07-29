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

import PromptSync from "prompt-sync";
const prompt = PromptSync();

interface student {studentID: string, studentName: string, studentAge: number, studentStatus: boolean}

let studentList: student[] = [];

for (let i = 1; i <= 3; i++) {
    const idInput = prompt(`Masukan ID siswa milikmu: `);
    const nameInput = prompt(`Masukan namamu: `);
    const ageInput = Number(prompt(`Masukan umurmu: `));

    let isStudent = false;
    while (true) {
        const inputBoolean = prompt(`Apakah seorang siswa? (True/False): `);
        const statusInput = inputBoolean ? inputBoolean.trim().toLowerCase() : "";

        if (statusInput === "true") {
            isStudent = true;
            break;
        } else if (statusInput === "false") {
            isStudent = false;
            break;
        }
        console.log(`Input hanya "True" atau "False"`);
    }

    let newStudent: student = {
        studentID: idInput ?? "",
        studentName: nameInput ?? "",
        studentAge: ageInput ?? "",
        studentStatus: isStudent,
    }

    studentList.push(newStudent);
}

console.log(`List siswa: ${studentList}`);

// ----------- TESTING -----------
// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// let student: {studentID: string, studentName: string, studentAge: number, studentStatus: boolean} = {
//     studentID: prompt(`masukan ID anda:`),
//     studentName: prompt(`masukan nama anda:`),
//     studentAge: Number(prompt(`masukan umur anda:`)),
//     studentStatus: Boolean(prompt(`status murid: `).toLowerCase())
// };

// console.log(`Deskripsi Murid`);
// console.log(`ID Murid ${student.studentID}`);
// console.log(`Nama Murid ${student.studentName}`);
// console.log(`Umur Murid ${student.studentAge}`);
// console.log(`Status Murid ${student.studentStatus}`);