// Importing named exports
import { add, subtract, multiply, divide } from './math.js';

console.log(add(2, 3));
console.log(subtract(5, 2));
console.log(multiply(4, 3));
console.log(divide(10, 2));




// Import All as an Object
import * as MathOperations from './math.js';

console.log(MathOperations.add(2, 3));
console.log(MathOperations.subtract(5, 2));   