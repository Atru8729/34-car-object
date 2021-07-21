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
}

module.exports = Car;