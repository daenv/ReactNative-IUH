// Constructor function for Car
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// Method to accelerate the car
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
};

// Method to brake the car
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
};

// Create two Car objects
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

// Test the accelerate and brake methods
car1.accelerate(); // BMW is accelerating. New speed: 130 km/h
car1.accelerate(); // BMW is accelerating. New speed: 140 km/h
car1.brake(); // BMW is braking. New speed: 135 km/h

car2.accelerate(); // Mercedes is accelerating. New speed: 105 km/h
car2.brake(); // Mercedes is braking. New speed: 100 km/h
