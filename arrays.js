//Arrays-Variables that hold muliple values

/*multi
line
comment */

//Creating an Array Via a constructor

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

//methodtwo

const fruits = ['apples', 'oranges', 'pears']

console.log(fruits);

//In JS You may Have Mutiple datatypes within an array(you have permiission to mix data types )

const fruit = ['apples', 'oranges', 'pears', 10, true];

//JS not statically typed:runtime and compile time
//Arrays are 0 based on indexing
console.log(fruit[1]);
//with const adding values to array/manipulate it with methods but you cant reasign 

//Adding to the Array

fruit[3] = 'grapes';
fruit.push('mangoes');
fruit.unshift('strawberries');//adding to beggining of array
fruit.pop();//Pops last one off


//checking if element is an array
console.log(Array.isArray(fruit));
console.log(Array.isArray('caleb'));
console.log(fruit);

//getting the index
console.log(fruit.indexOf('grapes'));







