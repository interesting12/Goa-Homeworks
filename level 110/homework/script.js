// შექმნით ცხოველის, მაქანის და ადამიანისკლასი, თითოეული სამი property-თ და ერთი მეთოდით.
//  თითოეული კლასიდან შექმენით სამ-სამი -ობიექტი და გამოიტანეთ ისინი კონსოლში.

class Animal {
    constructor(name, color, age) {
      this.name = name;
      this.color = color;
      this.age = age;
    }

}
const animal = new Animal("Bob", "yellow&white", 6);

class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }

}
const car = new Car("Nissan", "Skyline", 2002);

class Human {
    constructor(name, surname, height) {
      this.name = name;
      this.surname = surname;
      this.height = height;
    }
}

const human = new Human("George", "Shavadze", 2002)