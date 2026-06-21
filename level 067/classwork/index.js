function Car(make, model, year, color, engine) {

    this.make = make;       
    this.model = model;     
    this.year = year;       
    this.color = color;     
    this.engine = engine;   
}


let car1 = new Car("Nissan", "Skyline", 2000, "White", "3.6L");
let car2 = new Car("Honda", "Civic", 2002, "Silver", "2.5L");
let car3 = new Car("Ford", "Mustang", 2008, "Red", "5.0L");
let car4 = new Car("BMW", "F30", 2013, "White", "3.0L");
let car5 = new Car("Subaru", "Legacy", 2007, "Black", "3.3L");


console.log(car1.make);  
console.log(car1.model); 
console.log(car1.year);  
console.log(car1.color); 
console.log(car1.engine);
// ???????????////////////////


function Person(name, age) {
    this.name = name; 
    this.age = age;  
    
   
    this.introduce = function() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    };
}


const person1 = new Person('Georg', 16);
person1.introduce(); 



// ////////////////////////////////////


function Car(brand, year) {
    this.brand = brand;            
    this.year = year || 2020;      
                                   
   
    this.describe = function() {
        console.log(`This is a ${this.brand} from ${this.year}.`);
    };
}


const carr = new Car('Nissan', 2000);
carr.describe(); 

const car = new Car('Honda');
car.describe(); 




// //////////////////////////

function Library(name, books) {
    this.name = name;
    this.books = books;

  
    this.listBooks = function() {
        console.log(this.books);
    };
}


const myLibrary = new Library('City Library', ['1984', 'To Kill a Mockingbird']);
myLibrary.listBooks(); 
