/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

interface information {previousMeter: number, currentMeter: number, pricePerKWh: number, panelIsInstalled: boolean, isEnergySaving: boolean}
interface extraInformation {energyConsumption: number, electricityBill: number, finalBill: number, qualifiesProgram: boolean}

const MamadHome: information = {
    previousMeter: 25640,
    currentMeter: 25892,
    pricePerKWh: 1650,
    panelIsInstalled: true,
    isEnergySaving: false
}

function calculateInfo(data: information): extraInformation {
    const totalEnergy = data.currentMeter - data.previousMeter
    const electricityBill = totalEnergy * data.pricePerKWh;
    let discountGained = 0;
    if (data.panelIsInstalled) discountGained += 0.20;
    if (data.isEnergySaving) discountGained += 0.05;
    const finalBill = electricityBill - (electricityBill * discountGained)
    const isQualifies = (totalEnergy < 300 && data.panelIsInstalled && data.isEnergySaving)

    return {
        energyConsumption: totalEnergy,
        electricityBill: electricityBill,
        finalBill: finalBill,
        qualifiesProgram: isQualifies
    }
}

console.table(calculateInfo(MamadHome))