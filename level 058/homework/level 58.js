// Create an object: Make an object called car with properties like brand, model, and year.
let car = {
    brand: "Nissan",
    model: "Skyline",
    year: 2000
};

// Access object properties: Using the car object, access the brand and year properties and print them.
console.log("Brand: " + car.brand); 
console.log("Year: " + car.year);   

// Add a new property: Add a new property color to the car object.
car.color = "Red";
console.log("Color: " + car.color); 

// Change a property value: Update the year property of the car object to a new value.
car.year = 2000;
console.log("Updated Year: " + car.year); 

// Delete a property: Remove the model property from the car object.

delete car.model;
console.log("Model after deletion: " + car.model); 

// Create a method: Add a method startEngine to the car object that prints "Engine started".
car.startEngine = function() {
    console.log("Engine started");
};

// Object inside an object: Create a new object owner inside the car object with properties like name and age.
car.startEngine(); 

// Create a new object owner inside the car object
car.owner = {
    name: "George Shavadze",
    age: 16
};

// Accessing the owner object properties
console.log("Owner Name: " + car.owner.name); 
console.log("Owner Age: " + car.owner.age);   
