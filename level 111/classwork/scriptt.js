class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    startEngine() {
      return `${this.brand} ${this.model} engine start.`;
    }
  
    drive() {
      return `${this.brand} ${this.model} moving!`;
    }
  }
  
  class ElectricCar extends Car {
    constructor(brand, model, year, battery) {
      super(brand, model, year);
      this.battery = battery;
    }
  
    startEngine() {
      return `${this.brand} ${this.model} without sound.`;
    }
  
    drive() {
      return `${super.drive()} at the same time, using ${this.battery} kWh battery.`;
    }
  }
  
  const car = new Car("BMW", "E46", 2005);
  console.log(car.startEngine());
  console.log(car.drive());
  
  const electricCar = new ElectricCar("Tesla", "Model S", 2023, 100);
  console.log(electricCar.startEngine());
  console.log(electricCar.drive());
  