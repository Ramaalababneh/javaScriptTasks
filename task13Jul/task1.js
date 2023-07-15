// Array of data
let data = [
    { name: "monica", age: 24, images: "monica.jpg" },
    { name: "phoebe", age: 24, images: "phoebe.jpg" },
    { name: "rachel", age: 25, images: "rachel.jpg" }
];

for (let i = 0; i < data.length; i++) {
    // Create elements
    let card = document.createElement("div");
    card.className = "Card"; // set class to div 

    // Create and set name element
    let names = document.createElement("h2");
    names.textContent = data[i].name;
    card.appendChild(names);

    // Create and set age element
    let ages = document.createElement("p");
    ages.textContent = "Age: " + data[i].age;
    card.appendChild(ages);

    // Create and set image element
    let images = document.createElement("img");
    images.setAttribute("src", data[i].images);
    card.appendChild(images);

    // Apply border style to card
    card.style.border = "1px solid black ";

    card.style.margin =" 50px" ;
   // card.style.display = "flex";
card.style.justifyContent = "center";

    // Show card in the page body
    document.body.appendChild(card);  }



// div.style.border = "1px solid black";
// //show it in page body 
// document.body.appendChild(card);


//     // Set values from data array
//   let nameValue = document.createTextNode(data[i].name);
//   let ageValue = document.createTextNode(data[i].age);
//   image.setAttribute("src", data[i].images);

// //create element
// let card   = document.createElement ("div");
// let names  = document.createElement("h2");
// let ages   = document.createElement("p");
// let images = document.createElement("img");

// //create element text 
// let nameValue = document.createTextNode();
// let ageValue = document.createTextNode();
// let imageValue = document.createTextNode();

//set classes for elements
//card.className = "Crad";

//name
// add name value in names element 
//names.appendChild(nameValue);
//add names to card 
//card.appendChild(names);

//age
//add age value to ages
//ages.appendChild(ageValue);
//add age to card 
//card.appendChild(ages);

//image
//add img value to ages
//images.appendChild(imageValue);
//add img to card 
//card.appendChild(images);

// div.style.border = "1px solid black";
// //show it in page body 
// document.body.appendChild(card);
