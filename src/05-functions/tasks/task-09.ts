/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * patient Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function calculateReport() {
    const Totalpatient = patients.length;
    let admittedPatient = 0;
    let dischargedPatient = 0;
    
    let countByDepartement: Record<string, number> = {};
    const allName: string[] = [];

    patients.forEach((patient) => {
        if (patient.admitted) {
            admittedPatient++;
            allName.push(patient.name);
        } else {
            dischargedPatient++;
        }
        countByDepartement[patient.department] = (countByDepartement[patient.department] || 0) + 1;
    });

    const allBill = patients.map(patient => patient.bill);
    const highestBill = Math.max(...allBill);
    const lowestBill = Math.min(...allBill);
    const totalBill = allBill.reduce((sum, bill) => sum + bill, 0);
    const averageBill = totalBill / Totalpatient;
    console.log(`Name of admitted patient: ${allName.join(', ')}`);
    console.log(`Department Count:`, countByDepartement);
    
    const report = {
        Totalpatient,
        admittedPatient,
        dischargedPatient,
        highestBill,
        lowestBill,
        averageBill
    };
    
    console.table(report);
}


calculateReport()