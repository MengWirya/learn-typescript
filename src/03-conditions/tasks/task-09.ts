/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */

interface machine {isOn: boolean, machineTemperture: number, isHighVibration: boolean, productionSpeed: number}

const todayMachine: machine = {
    isOn: true,
    machineTemperture: 95,
    isHighVibration: false,
    productionSpeed: 92
}

function checkMachine(data: machine): string {
    if (data.isOn) {
        if (data.machineTemperture > 90) {
            return data.isHighVibration ? "Emergency Shutdown" : "Cooling Required"
        } else {
            return data.productionSpeed < 80 ? "Performance Warning" : "Machine Operating Normally"
        }
    } else {
        return "Display Machine Offline."
    }
}

console.log(checkMachine(todayMachine))