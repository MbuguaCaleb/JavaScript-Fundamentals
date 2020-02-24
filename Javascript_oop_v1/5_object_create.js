// Object Of Protos
//Methods you can use
const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
};

//Create the Object
//Passing the prototypes into the Object
const book1 = Object.create(bookProtos, {
  title: { value: "Book One" },
  author: { value: "Mbugua Caleb" },
  year: { value: "2013" }
});

/*
book1.title = "Book One";
book1.author = "Mbugua Caleb";
book1.year = "2010";
*/

console.log(book1);
