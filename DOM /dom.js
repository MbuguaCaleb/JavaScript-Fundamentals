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

//Selectors
//(3)//QUERY SELECTOR

//Always grabs the first element
//grabs always the first element(id or class)
//My grap all the type of elements(inputs but the first etc)

var header = document.querySelector("#main-header");

header.style.borderBottom = "solid 4px #ccc";

var input = document.querySelector("input");

//value and text..both setting and getting

input.value = "Hello World";

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector(".list-group-item");
item.style.color = "red";

//grabbing the last child via css attribute
var lastitem = document.querySelector(".list-group-item:last-child");
lastitem.style.color = "blue";

//nth child//css selectors
var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "coral";



//QUery selectorALL
//Grabs  more than one elemet eg class and tags

var titles = document.querySelectorAll(".title");

//returns a nodelist which is similar to a collection and
//we can actually run array functions in the nodelist

console.log(titles);
titles[0].textContent = "Hello";

//CSS Sudo Selector
var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");

console.log(odd);
for (var i = 0; i < odd.length; i++) {
  //setting for each iteration in the LOOP

  odd[i].style.backgroundColor = "#f4f4f4";
  even[i].style.backgroundColor = "#ccc";
}
*/

/*Lesson NUmber two

//Travesing the Dom



/*Parent and CHILD NODes

var itemList = document.querySelector('#items');
console.log(itemList);


//ParentNode

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);


//Child Node property

//Returns a node list as well as spaces 
//It is thus unpreffered
console.log(itemList.childNodes)



//Returns a specific HTML Element
console.log(itemList.children);

//assessing a specific child

console.log(itemList.children[1]);

//styling thr child
itemList.children[1].style.backgroundColor = 'yellow';


//First Child Property
//Inroduces line breaks and spaces same as the CHildNode
console.log(itemList.firstChild);


//FirstElement Child
//More useful.Grabs the elements and ignores the 
//white spaces
console.log(itemList.firstElementChild);

itemList.firstElementChild.textContent = 'Hello Caleb is a great programmer'



//Last Child and Last Element Child
var itemList = document.querySelector('#items');


//returns the last text node(which contains line breaks and white spaces)
console.log(itemList.lastChild);


console.log(itemList.firstElementChild);
itemList.lastElementChild.textContent = 'Caleb Loves Python'


//nextSibling

var itemList = document.querySelector('#items');
console.log(itemList.nextSibling)

//Next Element Sibling
console.log(itemList.nextElementSibling)


//previous Sibling
var itemList = document.querySelector("#items");
console.log(itemList.previousSibling);

//Previous Element Sibling
console.log(itemList.previousElementSibling);

itemList.previousElementSibling.style.color = "green";

*/

//CREATING DOM ELEMENTS AND INSERTING THEM

//CREATE ELEMENT

var newDiv = document.createElement("div");

//Add a class
newDiv.className = "hello";

//Ad id

newDiv.id = "hello1";

//ADD ATTRIBUTE
newDiv.setAttribute("title", "Hello Div");

//Create a textNode
var newDivText = document.createTextNode("Hello World");

//Add text to Div
newDiv.appendChild(newDivText);

//selecting the container class in the header
var container = document.querySelector("header .container");

var h1 = document.querySelector("header h1");

console.log(newDiv);


//changing font size of the created Dom Element
newDiv.style.fontSize = "30px";
container.insertBefore(newDiv, h1);
