console.log(outerFunction()); 
var x = 10;
function outerFunction() {
    var y = 20;
    console.log(x); 
    var x = 5;
    return x + y; 
}console.log(x); 

//var & let fn declaration
var anotherFunction = function() {
    console.log("Another function");
};
console.log(anotherFunction); 
anotherFunction(); 

console.log(greet()); 
console.log(x); 
try {
    console.log(y); 
} catch (e) {
    console.log(e.message);
}
function greet() {
    return "Hello, world!";
}
var x = 5;
let y = 10;
console.log(x);
console.log(y); 
