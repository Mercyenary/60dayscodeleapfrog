const numbers = [1, 2, 3, -4, 5];
const  tt= numbers.some(number => number < 0);
console.log(tt); 
//seperate by name
const strings = ['twitter', 'leapfrog', 'mercenary'];
const containedleapfrog = strings.some(str => str.includes('leapfrog'));
console.log(leapfrog); 
//seperate by role
const users = [
    { name: 'mercy', role: 'user' },
    { name: 'twitter', role: 'admin' },
    { name: 'leapfrog', role: 'user' }
  ];
  const admins = users.some(user => user.role === 'admin');
  console.log(admins); 
//greater value
  const inventory = [
    { item: 'acer', inStock: 0 },
    { item: 'iphone', inStock: 1 },
    { item: 'ipad', inStock: 0 }
  ];
  const stock = inventory.some(product => product.inStock > 0);
  console.log(stock); 
//starting letter 
const words = ['mercy', 'leapfrog', 'tweet', 'june', '13'];
const startswithb = words.some(word => word.startswith('b'));
console.log(startswithb); 

  
  
