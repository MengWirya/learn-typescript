/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

enum cabinClass {
    Economy = "Economy Class",
    Business = "Business Class"
}

interface passenger {passengerName: string, passengerCheckIn: boolean, passengerCabinClass: cabinClass, baggageWeight: number}

const todayPassenger: passenger = {
    passengerName: "Fajar Nugroho",
    passengerCheckIn: true,
    passengerCabinClass: cabinClass.Economy,
    baggageWeight: 24
}

function checkPlacement(data: passenger): string {
    if(data.passengerCheckIn) {
        if (data.baggageWeight > 20) {
            return data.passengerCabinClass === cabinClass.Business ? "Extra baggage allowed." : "Additional baggage fee required."
        } else {return "Proceed to boarding pass printing."}
    } else {
        return "Please complete online check-in first."
    }
}

console.log(checkPlacement(todayPassenger))