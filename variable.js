let name = "mritunjay"; // let is used for variables that might change...> block scoped 
var age = 21; // var is old function scoped
const country = "Nepal"; // used for variables which values wont change...> block scoped
console.log(name);
console.log(age);
console.log(country);







// block scope
function textblockscope() {
    if (true) {
        let example = "hello world";
        console.log(example); // this will be printed
    }
    console.log(example);// referenced error as message is not defined
}
textblockscope();



// function scope
function textblockscope() {
    if (true) {
        var example = "hello world";
    }
    console.log(example);// this will also be printed
}
textblockscope();
