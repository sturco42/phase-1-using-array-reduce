const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// batteryBatches.map(function(totalBatteries) {
//     return totalBatteries.reduce()
// })

const totalBatteries = batteryBatches.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
);
