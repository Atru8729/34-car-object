const { fuelComsumption } = require("./zapasData");

class Car {
    constructor(data) {
        this.data = data;
    }

    intro() {
        console.log(`This is ${this.data.brand}.`);
    }
    doorsCount() {

        console.log(`${this.data.brand} has ${this.data.doors.length} doors.`);
    }
    doorsWorking() {
        let workingDoorsCount = 0;
        for (let i = 0; i < this.data.doors.length; i++) {
            const doors = this.data.doors[i];
            if (doors.working === true) {
                ++workingDoorsCount;
            }
        }
        if (this.data.doors.length === workingDoorsCount) {
            console.log(`${this.data.brand} has ${this.data.doors.length} doors and all works!`);
        } else {
            console.log(`${this.data.brand} has ${this.data.doors.length} doors, but only ${workingDoorsCount} is working.`);
        }
    }
    maxDistance() {
        const totalDistance = this.data.tank.maxSize * 100 / this.data.fuelComsumption;
        console.log(`${this.data.brand} can travel maximum ${Math.round(totalDistance)} km.`);
    }
    canTravel(distance) {
        const totalTravel = this.data.tank.currentSize * 100 / this.data.fuelComsumption;
        if (totalTravel >= distance) {

            console.log(`${this.data.brand} can travel ${distance} km.`);
        } else {
            console.log(`${this.data.brand} can't travel ${distance} km, it has fuel only for ${Math.round(totalTravel)} km.`);
        }
    }
    continueTravel(distance) {
        const totalTravel = this.data.tank.currentSize * 100 / this.data.fuelComsumption;
        const distanceTrukumas = distance - totalTravel;
        const EurTrukumas = (this.data.fuelComsumption * distanceTrukumas / 100) * this.data.fuelCostPerLitre;
        if (totalTravel >= distance) {

            console.log(`${this.data.brand} can travel ${distance} km, no extra fuel is needed.`);
        } else {
            console.log(`${this.data.brand} can't travel ${distance} km, you need ${EurTrukumas.toFixed(2)} Euros for extra fuel.`);
        }
    }
}

module.exports = Car;