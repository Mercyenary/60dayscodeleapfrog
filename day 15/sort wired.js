//soting the array numerically
let weird = [10, "20", 5, "3", 100];
weird.sort((a, b) => Number(a) - Number(b));
console.log(weird); 

//sorting by priority
let weird2= [100, "20", {name: "object"}, "3", 5];
weird2.sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') return a - b;
    if (typeof a === 'number') return -1;
    if (typeof b === 'number') return 1;
    if (typeof a === 'string' && typeof b === 'string') return a.localeCompare(b);
    if (typeof a === 'string') return -1;
    if (typeof b === 'string') return 1;
    return 0;
});
console.log(weird2); 

//sprt by sum
let weird3 = [[3, 2], [1, 2, 3], [10], [1]];
weird3.sort((a, b) => 
    a.reduce((sum, num) => sum + num, 0)- b.reduce((sum, num) => sum + num, 0));
console.log(weird3); 

//nested sort 
let weird4 = [{id: 1, nested: {value: 10}}, {id: 2, nested: {value: 5}}, {id: 3, nested: {value: 15}}];
weird4.sort((a, b) => a.nested.value - b.nested.value);
console.log(weird4); 
//sort by multiple property
let weird5 = [{a: 1, b: 3}, {a: 3, b: 1}, {a: 2, b: 2}];
weird5.sort((a, b) => a.b - b.b);
console.log(weird5);
