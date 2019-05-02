function addNums(num1, num2) {

    //    console.log(num1 + num2);
    return num1 + num2;

}

console.log(addNums(5, 4));

addNums();


//we may set default values for our paramers in functions

function setDefault(num1 = 1, num2 = 1) {
    console.log(num1 + num2);
}

setDefault();

//overwrites the default values set
setDefault(5, 5);


//ARROW FUNCTIONS

const testArrowES6 = (num1 = 1, num2 = 1) => {

    return num1 + num2;
}

console.log(testArrowES6(10, 10));


//
const addNumsES6 = (num1 = 1, num2 = 2) => console.log(num1 + num2);

addNumsES6(2, 2);


//more simplification in ES6//No return Key word
const addNumsSimlified = (num1 = 1, num2 = 2) => num1 + num2;

console.log(addNumsSimlified(20, 20));


//harder way


const addingNums = (num1 = 1, num2 = 2) => {
    return num1 + num2;
}


console.log(addingNums(10, 10));


const add = num1 => num1 + 5;
console.log(add(5));



