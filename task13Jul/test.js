/*************************************Dom Manipulation & Events*************************************/

/*we can manipulate the DOM and work with events to dynamically change the content and behavior of a web page.*/

/*************************************Finding element in html*************************************/
/*
1- Using getElementById:
    If the element you want to find has a unique id attribute, you can use the getElementById method.
*/

const element1 = document.getElementById('myElement');

// Changing element content (p)
element1.textContent = 'New content';
// Modifying element style (p)
element1.style.color = 'red';
element1.style.fontSize = '60px';

/*
2- Using getElementsByClassName:
    We use a for loop in the example because getElementsByClassName returns a live HTMLCollection, which is similar to an array-like object. In order to iterate over the elements in the HTMLCollection, we use a loop.
*/

// Accessing elements by class name
const headings = document.getElementsByClassName('myHeading');
const paragraphs = document.getElementsByClassName('myParagraph');

// Changing elements
for (let i = 0; i < headings.length; i++) {
  headings[i].textContent = 'New Heading';
  //headings[i].classList.add('highlight');
}

// const testtt = document.getElementsByClassName('highlight');
// console.log(testtt);

/*
.classList: The classList property allows you to work with the classes of an element. It provides a set of methods to manipulate the classes.

.add('highlight'): The add method is used to add a class to the element's classList. In this case, we are adding the class 'highlight' to the specific element.
*/

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = 'New Paragraph';
  //paragraphs[i].style.fontWeight = 'bold';
}


/*
3- Using getElementsByTagName:

    If you want to find elements by their tag name (e.g., <div>, <p>, <h1>), you can use the getElementsByTagName method. It returns a live HTMLCollection of elements that have the specified tag name.
*/

const elements3 = document.getElementsByTagName('span');
for (let i = 0; i < paragraphs.length; i++) {
    elements3[i].style.color = 'orange';
    //paragraphs[i].style.fontWeight = 'bold';
}



/*************************************Changing element in html*************************************/

// Accessing the element
const heading = document.getElementById('myHeading2');

// 1 -Changing element content:
heading.textContent = 'New Heading 2';

//  2- Changing element attribute:
heading.setAttribute('class', 'highlight');

const elements4 = document.getElementsByClassName('highlight');

// 3- Changing Element Styles:
heading.style.color = "blue";

//4- Modifying Element Structure:
// Accessing the container element
const container = document.getElementById('container');

// Creating a new element
const newElement = document.createElement('div');
newElement.textContent = 'New element';

// Appending the new element to the container
container.appendChild(newElement);

/************innerHTML************/

// Accessing the container element
const container2 = document.getElementById('container2');

// Changing the content using innerHTML
container2.innerHTML = '<p>New content FOR SECONED DIV</p>';


/*************************************Adding and Removing element*************************************/
// Accessing elements
const container3 = document.getElementById('container3');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');

// Function to add an element
function addElement() {
  const newElement = document.createElement('div');
  newElement.textContent = 'New Element';
  container3.appendChild(newElement);
}

// Function to remove the last element
function removeElement() {
  const lastElement = container3.lastElementChild;// The lastElementChild property returns the last child element of the container element.
  if (lastElement) {
    container3.removeChild(lastElement);
  }
}

/*************************************Events*************************************/
// Add event listeners
addButton.addEventListener('click', addElement);
removeButton.addEventListener('click', removeElement);




/*
3-Creating and Appending DOM Elements:

    You can dynamically create new DOM elements using methods like createElement and then append them to the document using methods like appendChild.
*/

// Creating a new element
// const newElement = document.createElement('div');
// newElement.textContent = 'New element';

// Appending to the document
// const container = document.getElementById('container');
// container.appendChild(newElement);
 

//to craete an element in js page with no htmlpage 
// you have to do this 3 stips 
//  let newElement = document.createElement("div"); or anything else
//newElement.setAttributeNode(myAttr);
//newElement.appendChild(myAttr);

//append element to body 
// document.body.appednchild(newElement); 

/* 
let MyCard = document.createElement ("div");
let myHeading


*/


