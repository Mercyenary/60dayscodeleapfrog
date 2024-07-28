//basic transformation
const numbers = [1, 2, 3, 4, 5];
const multiplier = numbers.map(number => number * 2);

console.log(multiplier); 

//extractor
const users = [
    { name: 'mercenary', age: 21 },
    { name: 'leapfrog', age: 23 },
    { name: 'twitter', age: 18 }
];

const names = users.map(user => user.name);      
console.log(names); 

//new object                                                
const users1 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const greetings = users1.map(user => ({
    ...user,
    greeting: `Hello, my name is ${user.name}`
}));
console.log(greetings);




