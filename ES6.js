//ES6 (ECMAScript 2015) Features
// let and const
if (true) {
    let x = 10;
    const y = 20;
    console.log(x);
    console.log(y);

    console.log(x); // Error: x is not defined
    console.log(y); // Error: y is not defined
}
// Template Literals
const name = "Mritunjay";
const age = 21;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// Arrow Functions..>A concise syntax for writing functions. 
const add = (a, b) => a + b;
console.log(add(2, 3));

// default parameters
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet();
greet("Mritunjay");

// Destructuring..>>Extract values from arrays or objects into distinct variables.
// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [a, b, c, d] = numbers;
console.log(a, b, c, d);

// Object destructuring
const person = { namee: "mritubjay", agee: 21 };
const { namee, agee } = person;
console.log(namee, agee);

// spread and rest operator...> Spread (...): Expands arrays or objects.
//Rest (...): Collects remaining items into a new array
//spread...
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 5, 6];
console.log(arr2);
//rest...
const [first, ...rest] = arr2;
console.log(first);
console.log(rest);

// Classes...>A class is a blueprint for creating objects.
class Per {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    consoleInfo() {
        return (`Hello, my name is ${this.name}.`);
    }
}
const per = new Per("Mritunjay", 21);
console.log(per.consoleInfo());




// promises...>A promise is an object that represents the eventual completion or failure of an asynchronous operation.
const fetchData = new Promise((resolve, reject) => {
    let dataloaded = true;
    setTimeout(() => {
        if (dataloaded) {
            resolve("Data loaded successfully!");
        } else {
            reject("Error: Data not loaded.");
        }
    }, 2000);

});
fetchData
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

// chaining promises ...>Chaining promises allows you to execute multiple asynchronous operations in a sequence.

const fetchUser = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve({ name: "mritunjay", age: 20 }), 1000);
    });

const fetchPosts = (user) =>
    new Promise((resolve) => {
        setTimeout(() => resolve([`${user.name}'s Post 1`, `${user.name}'s Post 2`]), 1000);
    });

fetchUser()
    .then((user) => fetchPosts(user))
    .then((posts) => console.log(posts)) // Output: ["mritunjay's Post 1", "mritunjay's Post 2"]
    .catch((error) => console.error(error));

// async and await...>async and await are used to work with asynchronous code in a more synchronous-like manner.
// a promised based function
const fetchdata = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data loaded successfully!"), 2000);
    }
    );
};
//using async and await
const getData = async () => {
    console.log("Fetching data...");
    const data = await fetchdata();  // Waits for the Promise to resolve
    console.log(data);
};
getData();


// modules ...>Modules allow you to organize your code into reusable units.
// module example is in file..>math.js and app.js





