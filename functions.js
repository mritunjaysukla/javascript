// functions...>a block of codes to perform a particular tasks.
//function declaration
function greetings(name) {
    console.log("Hello " + name + "!");
}
greetings("Mritunjay");

//function expression..>A function can also be assigned to a variable, creating an anonymous function expression.
const add = function (a, b) {
    return a + b;
};
console.log(add(5, 6));

//arrow function..>arrow functions are a concise way to write functions. They do not have their own this value.
const multiply = (c, d) => c * d; // implicit return..>the function automatically returns the result of the expression without the need of return keyword.
console.log(multiply(4, 3));

//Anonymous function..>Functions without a name, often used as arguments to other functions.
setTimeout(function () {
    console.log("This runs after 5 seconds.");
}, 5000);


//Immediately Invoked Function Expression (IIFE)..>Functions that are executed immediately after being defined.
var result = (function () {
    var a = 5;
    var b = 10;
    return a + b; // Returns 15  
})();
console.log(result); // Outputs: 15  
// console.log(a); // Uncaught ReferenceError: a is not defined


//Higher-Order Functions..>Functions that accept other functions as arguments or return a function.
const names = [
    "mritunjay",
    "nirgun",
    "pooja",
    "gai",
    "prashant",
]
const filteredNames = names.filter(n => n[0] == "p");
console.log(filteredNames);

