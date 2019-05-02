function Person(firstName, lastName, dob) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

}

Person.prototype.getBirthYear = function () {

    return this.dob.getFullYear();
}

Person.prototype.getFullName = function () {

    return `${this.firstName} ${this.lastName}`;

}

person3 = new Person('Ruth', 'Wamboi', '4-5-1968');

console.log(person3);



//class
//adds syntatic sugar

class Per {

    constructor(firstName, lastName, dob) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);

    }

    getBirthYear() {

        return this.dob.getFullYear();
    }

    getFullName() {

        return `${this.firstName} ${this.lastName}`;
    }
}


//instantiate object
const person1_class = new Per('caleb', 'Mbugua', '4-3-1980');
const person2_class = new Per('mercy', 'wanjiru', '5-3-1990');

console.log(person1_class);
console.log(person2_class.firstName);


console.log(person2_class.getFullName());





