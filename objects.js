// Objects in JavaScript...>An object is a collection of key-value pairs where keys are called properties.
// Object literal..>An object literal is a list of property names:values inside curly braces {}.
const person = {
    name: "Mritunjay",
    age: 21,
    isMarried: false,
}
console.log(person.name + " is " + person.age + " years old.");

// dot notation..>Accessing object properties using dot notation
let human = {
    name: "Mritunjay",
    age: 21,
};
console.log(human.name);
// bracket notation..>Accessing object properties using bracket notation
let animal = {
    name: "Dog",
    age: 2,
};
console.log(animal["name"]);

// nested objects..>Objects can also contain other objects.
const student = {
    name: "Mritunjay",
    age: 21,
    address: {
        city: "kathmandu"
    }
}
console.log(student.address.city);

// with a function..>Objects can also contain functions.
const per = {
    name: "mritunjay",
    age: 21,
    displayinfo: function () {
        console.log("My name is " + this.name + " and age is " + this.age);
    }
}

per.displayinfo();
// object.assign()..>The Object.assign() method is used to copy properties of one or more source objects to a target object.
const obj1 = { a: 1 };
const obj2 = { b: 3 };
const obj3 = { c: 5 };
const merged = Object.assign({}, obj1, obj2, obj3);
console.log(merged);

// overwriting properties..>When multiple sources have the same key, the last one overwrites the others.
const target = { a: 1 };
const source1 = { a: 2, b: 3 };
const source2 = { a: 4, c: 5 };
const result = Object.assign(target, source1, source2);
console.log(result);
