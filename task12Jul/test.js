/**********************************************Functions**********************************************/

/*
1-Function Declarations
    function functionName(parameters) {
    // code to be executed
    }
*/

function myFunctio(a, b) {
    return a * b;
}
console.log(myFunctio(5,5));

/*
2-Function Expressions
    A function expression can be stored in a variable.
    anonymous function (a function without a name).
*/

const x = function (a, b) {return a * b};
let z = x(4, 3);
console.log(z);

/*
3-Self-Invoking Functions
    A self-invoking expression is invoked (started) automatically, without being called.
*/
(function () {
    let x = "Hello!!";  // I will invoke myself
    console.log(x);
})();

/*
4-Arrow Functions
    Arrow functions allows a short syntax for writing function expressions.
*/
//const b = function (a, b) {return a * b};
const b = (x, y) => x * y;

/*
5-Default Parameters
    If a function is called with missing arguments (less than declared), the missing values are set to undefined.
*/
function myFunction(x, y) {
    if (y === undefined) {
      y = 2;
    }  
    return x * y;
}
console.log(myFunction(4))

/*
6-Function Rest Parameter
    The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
*/

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

console.log(sum(4, 9, 16, 25, 29, 100, 66, 77));

/*
7-The Arguments Object
    JavaScript functions have a built-in object called the arguments object.
    The argument object contains an array of the arguments used when the function was called (invoked).
*/
function sumAll() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
}
console.log(sumAll(1, 123, 500, 115, 44, 88));

/**********************************************Objects**********************************************/

let person = {
    firstName : "Marah",
    lastName  : "Abusaleh",
    age     : 23,
    eyeColor  : "brown"
};

console.log( person.firstName + " " + person.lastName);
/*
Accessing JavaScript Properties
    The syntax for accessing the property of an object is:
*/
/*1-objectName.property*/
console.log(person.firstName);

/*2-objectName["property"]*/
console.log(person["lastName"]);

/*3-objectName[expression]*/
const m = "age"; console.log(person[m]);

/*4-for in*/
let txt = "";
for (let x in person) {
  txt += person[x] + "\n";
}
console.log(txt);

/*Adding New Properties*/
person.fevColor = "red";
console.log(person.fevColor);

/*Deleting Properties*/
delete person.age;
console.log(person.age);        //undefined


/*Nested Objects*/
myObj = {
    name:"Marah",
    age:23,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
}
console.log(myObj.cars.car2);
console.log(myObj["cars"]["car2"]);
console.log(myObj.cars["car2"]);

let p1 = "cars";
let p2 = "car2";
console.log(myObj[p1][p2]);



/*call()        &       applay()*/
const hum = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName:"John",
    lastName: "Doe"
}
const person2 = {
    firstName:"Mary",
    lastName: "Doe"
}

console.log(hum.fullName.call(person1));
console.log(hum.fullName.apply(person2));
/*
The difference is:

    The call() method takes arguments separately.

    The apply() method takes arguments as an array
*/


/*bind()*/
/*With the bind() method, an object can borrow a method from another object.*/
const perr = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}  
const member = {
    firstName:"Hege",
    lastName: "Nilsen",
}

let fullName = perr.fullName.bind(member);
console.log(fullName);

/*
Invoking a Function as a Method
*/
const myObject = {
    firstName:"Marah",
    lastName: "Abusaleh",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
console.log(myObject.fullName());

let pers = new String();
pers.name = "Marrrrrrrrrrrrrrrrah";

console.log(pers.name);