class Book {
  constructor(title, author, pubDate, isbn) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    this.isbn = isbn;
  }
}
// Create a book
//const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018");

class Library {
  constructor(name) {
    this._name = name;
    this._books = [];
  }
  get books() {
    // Return copy of books
    return JSON.parse(JSON.stringify(this._books));
  }
  get count() {
    return this._books.length;
  }
  addBook(book = {}) {
    const { title = "", author = "", pubDate = "", isbn = "" } = book;
    if (title.length > 0 && author.length > 0) {
      const newBook = { title, author, pubDate, isbn };
      this._books.push(newBook);
    }
  }
  listBooks() {
    for (const book of this._books) {
      const { title, author, pubDate, isbn } = book;
      console.log(
        `Title: ${title}, Author: ${author}, PubDate: ${pubDate}, isbn: ${isbn}`
      );
    }
  }
  deleteBook(isbn) {
    let copy = [];
    for (let i = 0; i < this._books.length; i++) {
      if (isbn !== this._books[i].isbn) {
        copy.push(this._books[i]);
      }
    }
  this._books = copy;
  }
}

// Create library object
const library = new Library("New York Times Best Seller List");

const atomicHabits = new Book(
  "Atomic Habits",
  "James Clear",
  "10/16/2018",
  "0735211299"
);
const theHillWeClimb = new Book(
  "The Hill We Climb",
  "David Baldacci",
  "03/30/2021",
  "059346527X"
);
const oceanPrey = new Book(
  "Atomic Habits",
  "John Sandford",
  "04/13/2021",
  "1398505501"
);
const elmo = new Book("elmo", "Cookie Monster", "04/16/2022", "479134739");
const barney = new Book("barney", "friends", "06,23,2019", "43792749274");
// Add books to library and output library count and books
library.addBook(atomicHabits);
library.addBook(theHillWeClimb);
library.addBook(oceanPrey);
library.addBook(elmo);
library.addBook(barney);
console.log(`Book count: ${library.count}`);
library.listBooks();

// Delete a book and output library books
console.log("* Library after delete *");
library.deleteBook("059346527X");
library.listBooks();
