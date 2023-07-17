/********************************Local Storage************************************************************/
/*
    - Is a web browser feature that allows you to store key-value pairs locally on the user's device.
    - It provides a simple way to store and retrieve data without the need for a server or a database.
    - The data stored in the local storage remains persistent even after the browser window is closed or the device is restarted.
*/

/*
    1-localStorage.setItem(key, value): 
        This method allows you to store a value in the local storage. The key is a string that represents the name of the item, and the value can be a string or any serializable object converted to a string.
*/
localStorage.setItem('username', 'Marah');

localStorage.age = 23;

/*
    2-localStorage.getItem(key):
        This method retrieves the value associated with a given key from the local storage.
*/

const username = localStorage.getItem('username');
console.log(username); // Output: Marah

/*
    3-localStorage.removeItem(key): 
        This method removes an item from the local storage based on the specified key.
*/

//localStorage.removeItem('age');

/*
    4-localStorage.clear(): 
        This method clears all items from the local storage.
*/

//localStorage.clear();

let firstKey = localStorage.key(0);
console.log(firstKey); // Output: The name of the first key in localStorage


/*
    5-localStorage.length: 
        This property returns the number of items stored in the local storage.
*/

console.log(localStorage.length);
console.log(localStorage);
console.log(typeof localStorage);


/**************************Session Storage************************************************************/
/*
    - Is another web browser feature that allows you to store key-value pairs similar to Local Storage but with a slight difference.
    - Session Storage stores data for the duration of the user's session.
    - Once the session ends (e.g., the browser is closed), the stored data is cleared.
*/

/*
    1-sessionStorage.setItem(key, value): 
        This method allows you to store a value in the session storage. The key is a string representing the name of the item, and the value can be a string or a serializable object converted to a string.
*/
sessionStorage.setItem('usernameR', 'Rama');

sessionStorage.age = 22;

/*
    2-sessionStorage.getItem(key): 
        This method retrieves the value associated with the specified key from the session storage.
*/

const usernameR = sessionStorage.getItem('usernameR');
console.log(usernameR); // Output: Rama

/*
    3-sessionStorage.removeItem(key): 
        This method removes an item from the session storage based on the specified key.
*/

//sessionStorage.removeItem('age');

/*
    4-sessionStorage.clear(): 
        This method clears all items from the session storage.
*/

//sessionStorage.clear();

/*
    5-sessionStorage.length: 
        This property returns the number of items stored in the session storage.
*/

console.log(sessionStorage.length);
console.log(sessionStorage);
console.log(typeof sessionStorage);


/*******************************Regular Expressions*********************************************************/

/*
    - In JavaScript are powerful tools for pattern matching and manipulating strings.
    - They provide a concise and flexible way to search, replace, and validate text based on specified patterns.
    - In JavaScript, regular expressions are represented by the RegExp object.
*/

/*
    1-Regular Expression Literal:
*/

const regex = /pattern/;
//Pattern refers to the sequence of characters that defines what you're searching for or manipulating within a given text.

/*
    Some common methods for working with regular expressions in JavaScript include:
*/

/*
    1.test: Tests if a pattern matches a string.
*/

const regex2 = /abc/;
console.log(regex2.test("abc")); // Output: true

/*
    2.exec: Searches for a pattern match within a string and returns the matched result.
*/

const regex3 = /abc/;
console.log(regex3.exec("defabcghi")); // Output: ["abc"]

/*
    3.match: Returns an array of matches found in a string.
*/

const regex4 = /abc/;
console.log("defabcghi".match(regex4)); // Output: ["abc"]

/*
    4.replace: Replaces matched patterns in a string with a specified replacement.
*/

const regex5 = /abc/;
console.log("defabcghi".replace(regex5, "xyz")); // Output: "defxyzghi"

/*
    5.search: Searches for a pattern match within a string and returns the index of the match.
*/

const regex6 = /abc/;
console.log("defabcghi".search(regex6)); // Output: 3

/*------------------------------------Example----------------------------------------------------------*/

// Example: Extracting numbers from a string

const text = "I have 3 apples and 5 oranges.";

// Create a regular expression to match numbers (\d+)
const regex7 = /\d+/g;

/*
    / - The first forward slash indicates ---the start of the regular expression literal---.
    \d - The \d is a special character class in regular expressions that represents ---any digit character (0-9)---.
    + - The + is a quantifier that specifies that the preceding \d character class should ---match one or more occurrences---.
    / - The second forward slash marks ---the end of the regular expression pattern---.
    g - The g is a flag indicating that the regular expression should be matched globally throughout the input string. It stands for "global."
        When you use a regular expression without the g flag, the matching process will stop after finding the first match in the input string.
*/

const text2 = "There are 123 apples and 456 bananas.";
const regex8 = /\d+/g;
const matches = text2.match(regex8);
console.log(matches); // Output: ["123", "456"]

const text3 = "Hello, hello, hello!";
const regexWithoutG = /hello/;
const regexWithG = /hello/g;

console.log(text3.match(regexWithoutG)); // Output: ["hello"]
console.log(text3.match(regexWithG));    // Output: ["hello", "hello", "hello"]


// Use the match() method to extract all numbers from the string
const numbers = text.match(regex7);

// Print the extracted numbers
console.log(numbers); // Output: ["3", "5"]

/*------------------------------------Example2----------------------------------------------------------*/

// Example: Validating an email address

const email = "example10 @example.com";

// Create a regular expression to validate email addresses
const emailRegex = /^[^\s@]+@[^\s@[0-9]]+\.[^\s@]+/;

/*
    ^ - The caret symbol ^ represents the start of the string anchor. It specifies that the pattern ---must match the beginning of the string---.

    [^\s@]+ - The square brackets [] denote a character class, 
    and the ^ within the brackets negates the class. 
    \s represents any whitespace character, 
    and @ represents the at symbol. 
    Therefore, [^\s@]+ matches one or more characters that are not whitespace or the at symbol.

    @ - The at symbol @ matches the literal character '@'.

    [^\s@]+ - Again, this character class matches one or more characters that are not whitespace or the at symbol.

    \. - The backslash \ is an escape character, and . matches any character except a newline. Therefore, \. matches a literal period/dot character.

    [^\s@]+ - This character class matches one or more characters that are not whitespace or the at symbol.

    $ - The dollar sign $ represents the end of the string anchor. It specifies that the pattern must match the end of the string.

*/

// Use the test() method to check if the email is valid
const isValidEmail = emailRegex.test(email);

// Print the result
console.log(isValidEmail); // Output: true

// Example: Replacing part of a string

const sentence = "Hello, world!";

// Create a regular expression to match the word "world"
const wordRegex = /world/;

// Use the replace() method to replace "world" with "universe"
const newSentence = sentence.replace(wordRegex, "universe");

// Print the modified sentence
console.log(newSentence); // Output: "Hello, universe!"


/*************************Regular Expressions*********************************************************/

/*
    - In JavaScript involves handling and managing errors that occur during the execution of a program. 
    - It allows you to gracefully handle unexpected situations, prevent application crashes, and provide meaningful feedback to users.
*/

/*
    1-Try-Catch Block:
*/

try {
    // Code that may throw an error
}
 catch (error) {
    // Code to handle the error
}

try {
    const result = 10 / 0; // This will throw a "Division by zero" error
    console.log(result); // This line won't be executed
} 
catch (error) {
    console.log("An error occurred:", error.message);
}
  // Output: An error occurred: Division by zero


/*
    2-Throwing Errors:
        You can manually throw errors using the throw statement. 
        It allows you to create custom error objects or throw built-in JavaScript error types.
*/

//throw new Error("Something went wrong!");

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    const result = divide(10, 0); // This will throw a custom error
    console.log(result); // This line won't be executed
} 
catch (error) {
    console.log("An error occurred:", error.message);
}
// Output: An error occurred: Division by zero is not allowed.  

try {
    const result = divide(10, 2); // This will throw a custom error
    console.log(result); // This line won't be executed
} 
catch (error) {
    console.log("An error occurred:", error.message);
} 

//regular expression 
// . (dot): Matches any single character except a newline character.
// *: Matches zero or more occurrences of the preceding character or group.
// +: Matches one or more occurrences of the preceding character or group.
// ?: Matches zero or one occurrence of the preceding character or group.
// []: Defines a character class. Matches any single character within the brackets.
// [^]: Defines a negated character class. Matches any single character not within the brackets.
// (): Creates a capturing group. Groups patterns together and captures the matched substring.
// \: Escapes a metacharacter, treating it as a literal character.
let email = "example@example.com";
let regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

if (regex.test(email)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}

