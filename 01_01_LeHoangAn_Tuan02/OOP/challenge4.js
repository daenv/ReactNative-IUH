class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make}'s battery is now charged to ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is accelerating. New speed: ${
        this.speed
      } km/h, with a charge of ${this.#charge}%`
    );
    return this;
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
    return this;
  }
}

// Create an electric car object
const rivian = new EVCl("Rivian", 120, 23);

// Test chaining of methods
rivian.accelerate().chargeBattery(90).brake();
