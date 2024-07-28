const numbers = [1, 2, 3, 4, 5];
const positive = numbers.every(number => number > 0);
console.log(positive); 
//shows longer than 3 
const strings = ['apple', 'banana', 'cherry'];
const longstring = strings.every(str => str.length > 3);
console.log(longstring); 
//verifies every user
const users = [
    { name: 'mercy', verified: true },
    { name: 'leapfrog', verified: true },
    { name: 'twitter', verified: true }
  ];
  const verification = users.every(user => user.verified);
  console.log(verification); 
  //inventory greater than 5 shown
  const inventory = [
    { item: 'acer', inStock: 10 },
    { item: 'iphone', inStock: 15 },
    { item: 'ipad', inStock: 8 }
  ];
  const  products= inventory.every(product => product.inStock > 5);
  console.log(products); 
//length 8 and above pass valids
const passwords = ['abc123', 'password123', 'securePassword123'];
const valid = passwords.every(password => password.length >= 8);
console.log(valid); 

  