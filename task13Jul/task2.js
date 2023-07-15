let card = document.createElement("div");
let paragraph   = document.createElement("p");
paragraph.textContent="Hello World !";
card.appendChild(paragraph);

// Add event listener for mouseover
card.addEventListener("mouseover",function()
{
    paragraph.textContent= "Can i help you ?";
}); 


// Add event listener for mouseout
card.addEventListener("mouseout",function()
{
    paragraph.textContent= "Hello World !";
}); 

//styling
card.style.border = "1px solid black ";
card.style.backgroundColor= "yellow";
card.style.textAlign="center";

document.body.appendChild(card);

