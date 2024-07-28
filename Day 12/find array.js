// finding the first Even Number
const numbers = [1, 3, 7, 8, 10];
const firstEven = numbers.find(number => number % 2 === 0);

console.log(firstEven); // Output: 8

//finding object
const users = [
    { name: 'mercenary', age: 21 },
    { name: 'leapfrog', age: 23 },
    { name: 'twitter', age: 18 }
];
const usermercy = users.find(user => user.name === 'Bob');

console.log(usermercy); 

//-ve number finding
const numbers1= [4, 6, -3, 7, -1];

const neg = numbers1.find(number => number < 0);

console.log(neg); 

//string length
const strings = ['short', 'medium', 'a very long string', 'tiny'];
const longString = strings.find(str => str.length > 5);
console.log(longString); 


