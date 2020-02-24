//Construcutor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//getSummary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

//Magazine inheriting from Book
//Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

//Inherit Prototypes beloging to book so that magazine will have them
Magazine.prototype = Object.create(Book.prototype);

//Use Magazine constructor
Magazine.prototype.constructor = Magazine;
//Intantiate Magazine Object

const mag1 = new Magazine("Mag One", "Mbugua Caleb", "2020");

console.log(mag1);

console.log(mag1.getSummary());
