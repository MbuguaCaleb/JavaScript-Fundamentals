//They are Key Value Pairs
//embeded  object->object within an object


const person = {

    firstName: 'Caleb',
    lastName: 'Mbugua',
    age: 23,
    hobbies: ['music', 'movies', 'sports'],
    address: {

        street: '50 main street',
        city: 'Naivasha',
        state: 'Nakuru'

    }
}


console.log(person);
//getting a specific value
console.log(person.firstName);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
//getting from object object
console.log(person.address.city);


//Pulling things out of the array to simplify
//Destructuring of an Array
//New ES6 Feature
const { firstName, lastName, address: { city } } = person;
console.log(firstName);
console.log(city);


//Adding properties  to an object literal
person.email = 'mbuguacaleb30@gmail.com'
console.log(person);

