//Object Literal
const book1 = {
  title: "Book One",
  author: "MbuguaCaleb",
  year: 2020,
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

const book2 = {
  title: "Book Two",
  author: "Mercy Wanjiru",
  year: 2019,
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

// console.log(book1);
// console.log(book1.title);
//console.log(book2.getSummary());

//seeing the Values in an Object
//console.log(Object.values(book2));
//console.log(Object.keys(book2));
