class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
  }
}

class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make}'s battery is now charged to ${this.charge}%`);
  }

  accelerate() {
    this.speed += 20;
    this.charge -= 1;
    console.log(
      `${this.make} is accelerating. New speed: ${this.speed} km/h, with a charge of ${this.charge}%`
    );
  }
}

// Create an electric car object
const tesla = new EV("Tesla", 120, 23);

// Test the accelerate method
tesla.accelerate();

// Test the brake method
tesla.brake();

// Charge the battery to 90%
tesla.chargeBattery(90);
