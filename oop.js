//Must start with capital //The constructor constructor class/function


//Constructor function
function Person(firstName, lastName, dob) {

    //setting properties of objects

    this.firstName = firstName;
    this.lastName = lastName;
    //this.dob = dob;
    this.dob = new Date(dob);


    //adding methods
    this.getBirthYear = function () {

        return this.dob.getFullYear();
    }

    this.getFullName = function () {

        // return this.firstName + this.lastName;
        return `${this.firstName} ${this.lastName}`;

    }

}

//instantiate object
const person1 = new Person('caleb', 'Mbugua', '4-3-1980');
const person2 = new Person('mercy', 'wanjiru', '5-3-1990');

console.log(person1);
console.log(person2.firstName);
//console.log(person2.dob.getFullYear());


//calling method in the class

console.log(person1.getBirthYear());

console.log(person1.getFullName());

//Prototypes

console.log(person1);




