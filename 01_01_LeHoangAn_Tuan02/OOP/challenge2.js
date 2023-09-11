class CarCl {
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

  // Getter for speedUS
  get speedUS() {
    return this.speed / 1.6;
  }

  // Setter for speedUS
  set speedUS(speedInMiles) {
    this.speed = speedInMiles * 1.6;
  }
}

// Create a new car
const car1 = new CarCl("Ford", 120);

// Test the accelerate and brake methods
car1.accelerate();
car1.brake();

// Get and set speedUS
console.log(`${car1.make}'s speed in mi/h: ${car1.speedUS}`);
car1.speedUS = 75;
console.log(`New speed set in mi/h: ${car1.speedUS}`);
