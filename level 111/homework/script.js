class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }



getDetails() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
}


summary() {
    return `${this.title} is a book written by ${this.author} in ${this.year}.`;
}
}
class AdventureBook extends Book {
    
summary() {
      return `${this.title} is an action-packed adventure written by ${this.author}.`;
}
}