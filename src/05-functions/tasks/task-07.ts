/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(): number {
  let countStudent = 0
  students.forEach((student) => {
    student.active ? countStudent++ : null
  })
  return countStudent
}

function countInactiveStudents(): number{
  let countStudent = 0
  students.forEach((student) => {
    !student.active ? countStudent++ : null
  })
  return countStudent
}


interface MajorCount {
  software: number;
  network: number;
  multimedia: number;
}

function countStudentsByMajor(): MajorCount{
  let countStudentSoftware = 0
  let countStudentNetwork = 0
  let countStudentMultimedia = 0
  students.forEach((student) => {
    student.major === "Software Engineering" ? countStudentSoftware++ : student.major === "Networking" ? countStudentNetwork++ : countStudentMultimedia++
  }) 

  return {
  software: countStudentSoftware,
  network: countStudentNetwork,
  multimedia: countStudentMultimedia
  };
}

function printEnrollmentReport() {
    const majors = countStudentsByMajor();

    const EnrollmentReport = {
      "Total Active Student": countActiveStudents(),
      "Total Inactive Student": countInactiveStudents(), // Perbaikan: panggil fungsi inactive
      "Major: Software": majors.software,
      "Major: Network": majors.network,
      "Major: Multimedia": majors.multimedia,
    };

    console.table(EnrollmentReport);
}

printEnrollmentReport()