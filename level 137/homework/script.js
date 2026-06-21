// 1. easy - make multiply function
function multiply(a, b) {
    return a * b
}
// 2. easy - make person info obj  (name, surname, age, gender)
const user1= {
    name: "Giorgi",
    surname: "Shavadze",
    age: 17,
    gender: "male"

}

// 3. easy - make person info obj  (name, surname, age, gender) and return person full name
const user2 = {
    name: "Giorgi",
    surname: "Shavadze",
    age: 17,
    gender: "male",
    fullName: function() {
    return `${this.name} ${this.surname}`;
}};


// 4. medium - make guess number game, number is 10

let number = 10;
let guess = 0;
while (guess !== number){
    let userinput = parseInt(prompt("Enter number: "))
    if (userinput > number ){
        console.log("Too Big, Try again!")

    }else if (userinput < number){
        console.log("Too Small, Try again!")

    }else if (userinput === number){
        console.log("Congrats! You Win!")
    }
    else{
        return NaN
    }
}


// 5. medium - make guess number game, number is 10, add count, if count > 10 Game Over!

let number1 = 10;
let guess1 = 0;
let count = 0;
while (guess1 !== number1){
    let userinput1 = parseInt(prompt("Enter number: "))
    if (userinput1 > number1 ){
        console.log("Too Big, Try again!")
        count ++;
    }else if (userinput1 < number1){
        console.log("Too Small, Try again!")
        count ++;
    }else if (userinput1 === number1){
        console.log("Congrats! You Win!")
    }else if (count > 10){
        console.log("Game Over!")
        break
    }
    else{
        return NaN
    }
}

// 6. hard - make person info with classes
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  class Student extends Person {
    constructor(firstName, lastName, age, school) {
      super(firstName, lastName, age);
      this.school = school;
    }
  
    getStudentInfo() {
      return `${this.getFullName()} is ${this.age} years old and studies at ${this.school}`;
    }
  }
  
  const person = new Person("George", "Shavadze", 17);
  console.log(person.getFullName());
  console.log(person.isAdult());

  