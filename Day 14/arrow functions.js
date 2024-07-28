
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 600 },
    { name: 'Tablet', price: 300 },
    { name: 'Headphones', price: 100 }
  ];
  
  const cheapProducts = products
    .filter(product => product.price < 500)
    .map(product => `${product.name} - $${product.price}`);
  
  console.log(cheapProducts); 

 
const users = [
    { id: 1, name: 'qwerty' },
    { id: 2, name: 'king' },
    { id: 3, name: 'queen' }
  ];
  const user = users.find(user => user.id === 2);
  console.log(user); 

 
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); 

  
  