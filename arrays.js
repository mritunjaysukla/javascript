//Arrays...>>An array is a collection of elements of the same data type.
//Creating an array or array literals
let fruits = ["apple", "banana", "orange"];

// array constructor
let numbers = new Array(1, 2, 3, 4, 5);

// accessing array elements
console.log(fruits);

// modifying array elements
fruits[1] = "grape";
console.log(fruits);
console.log(numbers);

// array methods

// push()..>Adds one or more elements to the end of an array.
const fruitss = ["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits);

// pop()..>Removes the last element from an array and returns it.
const fruit = ["apple", "banana", "orange"];
fruit.pop();
console.log(fruit);
// shift()..>Removes the first element from an array and returns it.
const car = ["toyota", "honda", "bmw"];
car.shift();
console.log(car);

// unshift()..>Adds one or more elements to the beginning of an array.
const bikes = ["yamaha", "suzuki", "kawasaki"];
bikes.unshift("honda");
console.log(bikes);

// splice()..>Adds or removes elements from an array at a specified index.
const animals = ["lion", "tiger", "elephant"];
animals.splice(1, 0, "giraffe");
console.log(animals);

// slice()..>Returns a new array containing a portion of an existing array.
const colors = ["red", "green", "blue", "yellow"];
const slicedColors = colors.slice(1, 3);
console.log(slicedColors);

// indexOf()..>Finds the first index of an element in an array.
const numberss = [1, 2, 3, 4, 5];
const index = numberss.indexOf(3);
console.log(index);

// includes()..>Checks if an array contains a specific element.
const birds = ["parrot", "eagle", "penguin"];
const includesEagle = birds.includes("eagle");
console.log(includesEagle);

// join()..>Joins all elements of an array into a string.
const mammals = ["dog", "cat", "rabbit"];
const joinedMammals = mammals.join(", ");
console.log(joinedMammals);

// reverse()..>Reverses the order of elements in an array.
const omnivores = ["human", "bear", "pig"];
omnivores.reverse();
console.log(omnivores);

// sort()..>Sorts the elements of an array in ascending order.
const vegetables = ["carrot", "broccoli", "spinach"];
vegetables.sort();
console.log(vegetables);

// concat()..>Combines two or more arrays into a new array.
const animalss = ["lion", "tiger", "elephant"];
const birdss = ["parrot", "eagle", "penguin"];
const combined = animalss.concat(birds);
console.log(combined);

// forEach()..>Executes a provided function once for each array element. 
const company = ["apple", "google", "microsoft"];
company.forEach(function (element) {
    console.log(element);
});

// map()..>Creates a new array by applying a function to each element.
const persons = ["John", "Jane", "Bob"];
const upperCaseNames = persons.map(function (name) {
    return name.toUpperCase();
});
console.log(upperCaseNames);

// filter()..>Creates a new array with elements that pass a condition.
const variables = [1, 2, 3, 4, 5];
const evenNumbers = variables.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbers);

// reduce()..>Reduces the array to a single value by applying a function.
const num = [1, 2, 3, 4];
const sum = num.reduce((acc, num) => acc + num, 0);
console.log(sum);








