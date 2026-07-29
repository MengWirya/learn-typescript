/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

// UPGRADED VERSION

// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

// interface Student {studentID: string, studentName: string, studentGrade: number};
// interface Course {courseID: string, courseTitle: string, courseInstructor: string, courseHours: number}
// interface Registration {registrationID: string, student: Student, course: Course, registrationDate: Date, registrationIsPaid: boolean}

// const courseCatalog: Record<string, Course> = {
//   "SCI-001": {
//     courseID: "SCI-001",
//     courseTitle: "Science Course",
//     courseInstructor: "Kenzie",
//     courseHours: 5,
//   },
//   "MAT-002": {
//     courseID: "MAT-002",
//     courseTitle: "Mathematics Course",
//     courseInstructor: "Reza",
//     courseHours: 6,
//   },
//   "HIS-003": {
//     courseID: "HIS-003",
//     courseTitle: "History Course",
//     courseInstructor: "Albi",
//     courseHours: 11,
//   },
// };

// const registrationList: Registration[] = [];

// for (let i = 1; i <= 3; i++) {
//     let inputStudentID = prompt(`Masukan ID kamu: `);
//     let inputStudentCourse = prompt(`Masukan course yang kamu inginkan (SCI-001/MAT-002/HIS-003): `);
//     let inputStudentName = prompt(`Masukan nama kamu: `);
//     let inputStudentGrade = Number(prompt(`Masukan kelas kamu: `));
    
//     let IsPaid = false;
//     while (true) {
//        const inputBoolean = prompt(`Apakah biaya registrasi sudah dibayar? (True/False): `);
//         const statusInput = inputBoolean ? inputBoolean.trim().toLowerCase() : "";

//         if (statusInput === "true") {
//             IsPaid = true;
//             break;
//         } else if (statusInput === "false") {
//             IsPaid = false;
//             break;
//         }
//         console.log(`Input hanya "True" atau "False"`); 
//     };
// };    



// VERSI BELUM SEMPURNA

import PromptSync from "prompt-sync";
const prompt = PromptSync();

interface student {studentID: string, courseID: string, registrationID: string, studentName: string, studentGrade: number};
interface course {courseID: string, courseName: string, courseInstructor: string, courseHours: number}
interface registration {registrationID: string, registrationDate: Date, registrationIsPaid: boolean}

let studentList: student[] = [];
let courseList: course[] = [];
let registrationList: registration[] = [];

let courseScience: course = {
    courseID: `SCI-001`,
    courseName: `Science Course`,
    courseInstructor: `Kenzie`,
    courseHours: 5,
}

let courseMath: course = {
    courseID: `MAT-002`,
    courseName: `Mathematic Course`,
    courseInstructor: `Reza`,
    courseHours: 6,
}

let courseHistory: course = {
    courseID: `HIS-003`,
    courseName: `History Course`,
    courseInstructor: `Albi`,
    courseHours: 11,
}

for (let i = 1; i <= 3; i++) {
    let inputStudentID = prompt(`Masukan ID kamu: `);
    let inputStudentCourse = prompt(`Masukan course yang kamu inginkan (SCI-001/MAT-002/HIS-003): `);
    let inputStudentName = prompt(`Masukan nama kamu: `);
    let inputStudentGrade = Number(prompt(`Masukan kelas kamu: `));
    
    let IsPaid = false;
    while (true) {
       const inputBoolean = prompt(`Apakah biaya registrasi sudah dibayar? (True/False): `);
        const statusInput = inputBoolean ? inputBoolean.trim().toLowerCase() : "";

        if (statusInput === "true") {
            IsPaid = true;
            break;
        } else if (statusInput === "false") {
            IsPaid = false;
            break;
        }
        console.log(`Input hanya "True" atau "False"`); 
    };

    let newStudent: student = {
        studentID: inputStudentID ?? "",
        courseID: inputStudentCourse ?? "",
        registrationID: String(i),
        studentName: inputStudentName ?? "",
        studentGrade: inputStudentGrade ?? "",
    };

    let newRegistration: registration = {
        registrationID: String(i),
        registrationDate: new Date(),
        registrationIsPaid: IsPaid ?? "",
    };

    studentList.push(newStudent);
    registrationList.push(newRegistration);
}

studentList.forEach((student) => {
    console.log(`\nstudent description`);
    console.log(`ID siswa: ${student.studentID}, Nama Siswa: ${student.studentName}, Kelas: ${student.studentGrade}`)
    console.log(`Deskripsi Course yang diambil`)
    if (student.courseID === "SCI-001") {
        console.log(courseScience)
    } else if (student.courseID === "MAT-002") {
        console.log(courseMath)
    } else if (student.courseID === "HIS-003") {
        console.log(courseHistory)
    } else{console.log(`Siswa memilih course yang tidak valid`)};

    const informationDashboard  = studentList.map((student) => {
        const matchRegistration = registrationList.find((registration) => registration.registrationID === student.registrationID);
        return {
            student,
            matchRegistration
        }
    });
    console.log(informationDashboard);
});