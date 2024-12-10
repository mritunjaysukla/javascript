// control statements..>allow developers to dictate the flow of a program based on certain conditions.
// conditional statements..>allow developers to execute code based on certain conditions.
let age = 21; // if  and if... else  statements
if (age >= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible to vote");
}
// switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// if... else if...else sataement
let marks = 80;
if (marks >= 90) {
    console.log("A");
}
else if (marks >= 80) {
    console.log("B");
}
else {
    console.log("C");
}



//loops..>execute a block of code multiple times, as long as a condition is met.
// for loop..>Repeats a block of code a specific number of times.
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// while loop..>Executes a block of code as long as the specified condition is true.
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// do...while loop..>Executes a block of code once, and then repeats the loop as long as the condition is true
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// for...in loop..>Iterates over the properties of an object.
let person = {
    name: "John",
    age: 30,
    isMarried: false
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// for...of loop..>Iterates over the elements of an iterable object(such as an array or string).
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}
// break and continue statements
// break statement..>Terminates the loop immediately.
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
// continue statement..>Skips the current iteration of the loop and continues with the next iteration.
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}




