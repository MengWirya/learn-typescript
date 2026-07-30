/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

interface reservation {customerName: string, isPremium: boolean, roomAvaible: boolean}

const todayReversation:  reservation = {
    customerName: "Nadia Putri",
    isPremium: true,
    roomAvaible: false
}

function checkReversation(data: reservation): string {
    if (data.roomAvaible) {
        if (data.isPremium) {
            return "congratulation, you received a free room upgrade"
        } else {
            return "You will receive the reserved room"
        }
    } else {
        if (data.isPremium) {
            return "Sorry room are not avaible, you will be placed on priority wait list"
        } else {
            return "Sorry room are not avaible"
        }
    }
}

console.log(checkReversation(todayReversation))