// //document object model:Like whole of your HTML DOCUMENT/TREE STRUCTURE
// //we can select HTML elements and work with them

// //window object-It is the Parent Object of the Browser
// //The window object is parent object of the browser

// console.log(window);

// //alert is part of the window object
// //document in window object is what makes up DOM 
// //document is used to select things from the document



// //alert(1);
// //window.alert(1);

// //Single element

// console.log(document.getElementById('my-form'));

// //grabbing a class
// //It is a single element selector//
// console.log(document.querySelector('.container'));//works like JQUERY
console.log(document.querySelector('h1'));


// //J-query a JS library that enabled the selection of other things rather than ID
// // const form = document.getElementById('my-form');

// // console.log(form);


/// ///Mutiple element
// //(a)
// //selecting all the list items
// //You can use array methods from this dom element property
console.log(document.querySelectorAll('.item'));

// //(b)
// //older methods-mutiple selector
// //Returns a HTML Collection.You cannot use array Elements on this
console.log(document.getElementsByClassName('item'));
// //Also returns a HTML Collection

console.log(document.getElementsByTagName('li'));


//returns a list of elements with class item
const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));


//Manipulating the dom

const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Caleb';

//adding HTML Dynamically using inner HTML 
ul.lastElementChild.innerHTML = '<h1>Caleb finally Learning JS</h1>'


const btn = document.querySelector('.btn');
btn.style.background = 'red';

//helps you make manipulations on clicking events









