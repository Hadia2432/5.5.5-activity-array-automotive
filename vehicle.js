class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 5;
        this.speed = 0;
        this.mileage = 30000;
        this.started = false;
        this.numberOfWheels = 0;
    }
       loadPassenger(){
        if(this.passenger = 5){ 
            return this.loadPassenger=true;
        console.log("maximum passenger!!");
       }
       else{
        return this.loadPassenger = false;
        console.log("passenger load available")
       }
       }
    start() {
        if (this.fuel >= 0) {
            return this.started = true;
            console.log("engine started!");
        } else {
            return this.started = false;
            console.log("engine cannot start.");
        }
    }
    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    stop() {
        this.started = false;
    }

    drive() {
        accelerate();
    }
    brake() {
        decelerate();
    }


    scheduleService(){
        if(this.mileage = 30000){ 
            return this.scheduleService=true;
        console.log("time for maintainence!!");
       }
       else{
        return this.mileage = false;
        console.log("no maintenance needed")
       }
       }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4 && 4 == wheels) {
            console.log(this.model + " " + this.make + " is a CAr");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}

//This exports things you want to use from this "module", more info in readme
module.exports = {
    Vehicle
}
