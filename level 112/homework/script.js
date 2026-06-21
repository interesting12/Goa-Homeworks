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

const book = new Book("იგი", "ჯემალ ქარჩხაძე", 1977);


const adventureBook = new AdventureBook("გოდორი", "ოთარ ჭილაძე", 2021);


document.getElementById("book-title").textContent = book.title;
document.getElementById("book-details").textContent = book.getDetails();
document.getElementById("book-summary").textContent = book.summary();

document.getElementById("adventure-book-title").textContent = adventureBook.title;
document.getElementById("adventure-book-details").textContent = adventureBook.getDetails();
document.getElementById("adventure-book-summary").textContent = adventureBook.summary();
