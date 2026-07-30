/**
 * A hospital emergency department must determine the priority level of every arriving patient.
 * The hospital follows these rules:
 * 1. If the patient's condition is critical, they are immediately assigned to the Emergency Room.
 * 2. Otherwise, if the patient has an appointment:
 *  - Elderly patients (age ≥ 60) receive Priority Queue.
 *  - Other patients receive Regular Queue.
 * 3. Otherwise:
 *  - Patients with health insurance are assigned to the Insurance Registration Counter.
 *  - Patients without insurance are assigned to the General Registration Counter.
 * 
 * Today's patient information:
 * | Information        | Value      |
 * | ------------------ | ---------- |
 * | Patient Name       | Siti Rahma |
 * | Critical Condition | No         |
 * | Has Appointment    | Yes        |
 * | Age                | 67         |
 * | Has Insurance      | Yes        |
 * 
 * Tasks: 
 * 1. Declare all required variables.
 * 2. Implement the hospital workflow using conditional statements.
 * 3. Display the patient's destination.
 */

interface patient {patientName: string, patientIsCritical: boolean, patientHasAppointment: boolean, patientAge: number, patientHasInsurance: boolean}

const TodayPatient: patient = {
    patientName: "Siti Rahma",
    patientIsCritical: false,
    patientHasAppointment: true,
    patientAge: 67,
    patientHasInsurance: true
}

enum Queue {
    Emergency = "Emergency Room",
    Priority = "Priority Queue",
    Regular = "Regular Queue",
    Insurance = "Insurance Counter",
    General = "General Counter",
}

function checkPlacement(data: patient): Queue {
    const isOld = data.patientAge >= 60
    
    if (data.patientIsCritical) {
        return Queue.Emergency
    } else if (data.patientHasAppointment) {
        if (isOld) {
            return Queue.Priority
        } else {return Queue.Regular}
    } else {
        if (data.patientHasInsurance) {
            return Queue.Insurance
        } else {return Queue.General}
    }
}

console.log(checkPlacement(TodayPatient))