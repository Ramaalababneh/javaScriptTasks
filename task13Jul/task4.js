// Create div element
let div = document.createElement("div");

// Create paragraph element
let paragraph = document.createElement("p");
paragraph.textContent = "the quick brown fox over the lazy dog";
div.appendChild(paragraph);

// Create font name dropdown menu
let fontNameDropdown = document.createElement("select");
let fontNames = ["Arial", "Verdana", "Helvetica", "Times New Roman"];
fontNames.forEach(fontName => {
  let option = document.createElement("option");
  option.value = fontName;
  option.text = fontName;
  fontNameDropdown.appendChild(option);
});
div.appendChild(fontNameDropdown);

// Create font size dropdown menu
let fontSizeDropdown = document.createElement("select");
let fontSizes = ["12px", "14px", "15px","16px", "18px", "19px"];
fontSizes.forEach(fontSize => {
  let option = document.createElement("option");
  option.value = fontSize;
  option.text = fontSize;
  fontSizeDropdown.appendChild(option);
});
div.appendChild(fontSizeDropdown);

// Create checkboxes
let boldCheckbox = document.createElement("input");
boldCheckbox.type = "checkbox";
boldCheckbox.id = "boldCheckbox";
let boldLabel = document.createElement("label");
boldLabel.textContent = "Bold";
boldLabel.htmlFor = "boldCheckbox";
div.appendChild(boldCheckbox);
div.appendChild(boldLabel);

let italicCheckbox = document.createElement("input");
italicCheckbox.type = "checkbox";
italicCheckbox.id = "italicCheckbox";
let italicLabel = document.createElement("label");
italicLabel.textContent = "Italic";
italicLabel.htmlFor = "italicCheckbox";
div.appendChild(italicCheckbox);
div.appendChild(italicLabel);

let underlineCheckbox = document.createElement("input");
underlineCheckbox.type = "checkbox";
underlineCheckbox.id = "underlineCheckbox";
let underlineLabel = document.createElement("label");
underlineLabel.textContent = "Underline";
underlineLabel.htmlFor = "underlineCheckbox";
div.appendChild(underlineCheckbox);
div.appendChild(underlineLabel);

// Add event listeners for dropdown menus
fontNameDropdown.addEventListener("change", function() {
  paragraph.style.fontFamily = fontNameDropdown.value;
});

fontSizeDropdown.addEventListener("change", function() {
  paragraph.style.fontSize = fontSizeDropdown.value;
});

// Add event listeners for checkboxes
boldCheckbox.addEventListener("change", function() {
  paragraph.style.fontWeight = boldCheckbox.checked ? "bold" : "normal";
});

italicCheckbox.addEventListener("change", function() {
  paragraph.style.fontStyle = italicCheckbox.checked ? "italic" : "normal";
});

underlineCheckbox.addEventListener("change", function() {
  paragraph.style.textDecoration = underlineCheckbox.checked ? "underline" : "none";
});

// Show div in the page body
document.body.appendChild(div);