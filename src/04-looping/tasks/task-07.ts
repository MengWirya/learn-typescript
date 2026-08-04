/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];


let presentStudent = 0
let absentStudent = 0

console.log("Nama siswa yang absen")
attendances.forEach((attendance) => {
  attendance.present ? presentStudent++ : absentStudent++
  console.log(attendance.name)
})

const attendancePercentage = (presentStudent / attendances.length) * 100

console.log("Deskripsi hari ini")
console.log(`Jumlah Siswa masuk: ${presentStudent}`)
console.log(`Jumlah Siswa absen: ${absentStudent}`)
console.log(`Persentase siswa masuk: ${attendancePercentage}%`)