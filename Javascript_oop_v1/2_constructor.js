//Construcutor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

//Instantiate an object
const book1 = new Book("Book One", "Mbugua Caleb", "2018");
const book2 = new Book("Book Two", "Mercy Wanjiru", "2019");

console.log(book1);
console.log(book2);

console.log(book1.getSummary());
console.log(book2.getSummary());
