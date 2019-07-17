//all properties and methods we can access

/*


Key things is selecting elements  then using this methods
//Examine the document object
console.dir(document);


console.log(document.domain);
console.log(document.URL);
console.log(document.title);

//Document is not only ReadOnly
//You may actually change everything from your scripts
document.title = 1234;

console.log(document.doctype);
console.log(document.head);
console.log(document.body);

//returns a HTML Collection of everything that is in the dom
//every element you add in your HTML Document is always added
//to the document.all selector
console.log(document.all);

//grabbing the element with an index of 10
console.log(document.all[10]);

//selection from the DOM
//However it is not the required way which you should select things
document.all[10].textContent = "Caleb is a goodProgrammer";

console.log(document.forms);
console.log(document.links);


console.log(document.images);

//Selectors
//(1)GET ELEMENT BY ID//
//console.log(document.getElementById("header-title"));

var headerTilte = document.getElementById("header-title");
console.log(headerTilte);

//changing/manipulating the properties
headerTilte.textContent = "Hello";
headerTilte.innerText = "Goodbye";

//Disregareds the styling
console.log(headerTilte.textContent);
//Regareds the styling
console.log(headerTilte.innerText);
//Puts the Html content inside of the selected Element
headerTilte.innerHTML = "<h3>Hello</h3>";


var headerTilte = document.getElementById("header-title");

//selecting the header by the ID TO input the style
var header = document.getElementById("main-header");

//headerTilte.style.borderBottom = "solid 3px #000";
header.style.borderBottom = "solid 3px #000";


//Selectors
//(2)GET ELEMENTS BY ClassName//

var items = document.getElementsByClassName("list-group-item");
console.log(items);

//accessing individual Elements
console.log(items[1]);

//changing the text content after selection
items[1].textContent = "Hello 2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";

//setting stlye for all elements by classname
//we have to loop through the elements
//Does not work like below(gives error)
//items.style.backgroundColor = "#f4f4f4";

for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "#f4f4f4";
}

//Selectors
//(3)GET ELEMENTS BY TagName//

//setting the styles by the tagName

var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);

//changing the text content after selection
li[1].textContent = "Hello 2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";

//gives error
//items.style.backgroundColor = "#f4f4f4";

for (var i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "#f4f4f4";
}


*/
//Selectors
//(3)//QUERY SELECTOR

//Always grabs the first element 
var header = document.querySelector("main-header");
