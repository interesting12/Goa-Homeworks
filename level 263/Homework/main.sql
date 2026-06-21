CREATE TABLE Authors (
    author_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    birth_year INTEGER CHECK (birth_year > 0),
    country TEXT NOT NULL
) STRICT;


CREATE TABLE Books (
    book_id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    author_id INTEGER NOT NULL,
    publication_year INTEGER CHECK (publication_year > 0),
    genre TEXT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES Authors(author_id)
) STRICT;



CREATE TABLE Members (
    member_id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    join_date DATE DEFAULT (date('now'))
) STRICT;


CREATE TABLE Loans (
    loan_id INTEGER PRIMARY KEY,
    book_id INTEGER NOT NULL,
    member_id INTEGER NOT NULL,
    loan_date DATE DEFAULT (date('now')),
    return_date DATE,
    
    FOREIGN KEY (book_id) REFERENCES Books(book_id),
    FOREIGN KEY (member_id) REFERENCES Members(member_id)
) STRICT;
