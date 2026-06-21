// შექმენით ობიექტი საყვარელ პერსონაჟზე
let character = {
  name: "Paul", 
  surname: "Walker",     
  age: 31,                
  car: "Nissan skyline R34 GT-R",         
};

// დავბეჭდოთ თითოეული კუთვნილება 
console.log("Name: " + character.name);   
console.log("Race: " + character.race);   
console.log("Age: " + character.age);     
console.log("Weapon: " + character.weapon); 
console.log("Origin: " + character.origin);

// ორი კუთვნილების შეცვლა
character.age = 105;
character.weapon = "Steel Sword";

// ობიექტის მთლიანად დაბეჭდვა ცვლილებების შემდეგ
console.log(character);

// ახალი კუთვნილების დამატება
character.title = "Butcher of Blaviken";

// ძველი კუთვნილების წაშლა 
delete character.origin;

// ობიექტის საბოლოო სახის დაბეჭდვა
console.log(character);

