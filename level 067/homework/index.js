// 1. Basic Constructor with Properties
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.introduce = function() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    };
}

const person1 = new Person("John", 30);
person1.introduce();


function Book(title, author = "Unknown") {
    this.title = title;
    this.author = author;

    this.getDetails = function() {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    };
}

const book1 = new Book("1984", "George Orwell");
book1.getDetails(); 
const book2 = new Book("Untitled");
book2.getDetails();


// 3. Constructor with Arrays
function Classroom(students) {
    this.students = students;

    this.countStudents = function() {
        console.log(`Number of students: ${this.students.length}`);
    };
}


const classroom = new Classroom(["Alice", "Bob", "Charlie"]);
classroom.countStudents();

// 4. State Management with Constructor
function Counter() {
    this.value = 0;

    this.increment = function() {
        this.value += 1;
    };

    this.getValue = function() {
        return this.value;
    };
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getValue()); 


// 5. Constructor with Boolean State
function Light() {
    this.state = "off";

    this.toggle = function() {
        this.state = this.state === "off" ? "on" : "off";
    };
}

const light = new Light();
console.log(light.state); 
light.toggle();
console.log(light.state); 
light.toggle();
console.log(light.state); 


// 6. Product Constructor with Properties
function Product(name, price) {
    this.name = name;
    this.price = price;

    this.getDetails = function() {
        console.log(`Product: ${this.name}, Price: ${this.price} USD`);
    };
}


const product1 = new Product("Laptop", 999);
product1.getDetails(); 


// 7. Constructor with Object Properties
function User(username, contact) {
    this.username = username;
    this.contact = contact; 
    this.getContactInfo = function() {
        console.log(`Username: ${this.username}, Email: ${this.contact.email}, Phone: ${this.contact.phone}`);
    };
}

const user1 = new User("johnDoe", { email: "john@example.com", phone: "123-456-7890" });
user1.getContactInfo();


function Library(books) {
    this.books = books; 

    this.listBooks = function() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}`);
        });
    };
}


const library = new Library([
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" }
]);
library.listBooks();

// 9. Cart Constructor with Array Management
function Cart() {
    this.items = [];

    this.addItem = function(item) {
        this.items.push(item);
    };

    this.getItems = function() {
        console.log("Items in cart:", this.items);
    };
}

const cart = new Cart();
cart.addItem("Apple");
cart.addItem("Banana");
cart.getItems();

// 10. Conditional Logic in Constructor
function Student(name, marks) {
    this.name = name;
    this.marks = marks; 

    this.hasPassed = function() {
        const average = this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;
        return average >= 50;
    };
}


const student1 = new Student("Alice", [60, 70, 80]);
console.log(student1.hasPassed()); 

const student2 = new Student("Bob", [40, 30, 20]);
console.log(student2.hasPassed()); 