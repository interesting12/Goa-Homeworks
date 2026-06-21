// ცხოველის კლასი
class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    makeSound() {
      return `${this.name} is ${this.species} `;
    }
  }
  
  class Mammal extends Animal {
    constructor(name, species, weight) {
      super(name, species); 
      this.weight = weight;
    }
  
    describe() {
      return `${this.name} is ${this.species}, which is ${this.weight} "kilos".`;
    }
  }
  
  class Dog extends Mammal {
    constructor(name, breed) {
      super(name, "dog", true); 
      this.breed = breed;
    }
  
    bark() {
      return `${this.name} make sound: woh`;
    }
  }
  