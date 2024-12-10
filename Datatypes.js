// primitive datatypes:string,number,boolean,null,undefined
let greetings = "hello world"; // string
console.log(greetings);
let age = 21; // number
console.log(age);
let bignumber = 12345678901234567890n; //bigint 
console.log(bignumber);
let javascriptisamazing = true; // boolean
console.log(javascriptisamazing);
let nothing = null; // null
console.log(nothing);
let notdefined; // undefined
console.log(notdefined);



// non primitive datatypes:array,object,function
let fruits = ["apple", "banana", "orange"]; // array is used for storing ordered collection of data
console.log(fruits);

let person = { // object is used for storing unordered collection of data
    name: "John",
    age: 30,
    isMarried: false
};
console.log(person);

function sayHello() { // function are used for storing code that can be reused oe recalled.
    return "Hello";
}
console.log(sayHello());

//typeof operator for checking datatypes of variables
let str = "hello world";
console.log(typeof str); // string
let num = 21;
console.log(typeof num); // number
let bool = true;
console.log(typeof bool); // boolean
let obj = { key: "value" };
console.log(typeof obj); // object

// Type conversion: converting one datatype to another
// explicit conversion: manually converting one datatype to another
let no = "21";
console.log(Number(no)); // 21
console.log(String(no)); // "21"
console.log(Boolean(no)); // true

// implicit conversion: automatically converting one datatype to another
console.log(50 + "21"); // 5021 ; string concatenation
console.log(50 - "21"); // 29  ; string to number
console.log(50 * "21"); // 1050; sting to number
