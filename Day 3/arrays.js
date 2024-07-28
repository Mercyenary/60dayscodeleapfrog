const listusers = ['Leapfrog', 'sachin', 'mercy', 'yopu'];

console.log(listusers[0]);
console.log(listusers[1]);
console.log(listusers[2]);
console.log(listusers[3]);
console.log(typeof listusers);

listusers.pop(); 

console.log(listusers);

listusers.push('new');

console.log(listusers);

listusers.shift();
console.log(listusers);

listusers.unshift('new');
console.log(listusers);

console.log(listusers.length);

console.log(listusers.indexOf('leapfog'));

