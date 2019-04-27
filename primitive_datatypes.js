//String ,Numbers,Boolean,null,undefined
//NO float or decimals in Javascript its just a number



const name = 'John';

const age = 30;

const rating = 4.5;

const iscool = true;

const x = null;

//Two ways to declare undefined datatypes
const y = undefined;
let z;


console.log(typeof age);
console.log(typeof rating);
console.log(typeof x);
console.log(typeof y);


//Concatenation
//oldway
console.log('My name is ' + name + ' and i am' + age);
//ES6
//USES BACKTEXT INSTEAD
console.log(`My name is ${name} and i am ${age}`);

const hello = `My name is ${name} and i am ${age}`;
console.log(hello);




