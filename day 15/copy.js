//loop copy
let main = [1, 2, 3];
let copy = [];
for (let i = 0; i < main.length; i++) {
    copy.push(main[i]);
}console.log(copy); 

//operator method
let main2 = [4, 5, 6];
let copy2 = [...main2];
console.log(copy2); 

//reduce method
let main3 = [4, 5, 6];
let copy3 = main3.reduce((acc, curr) => {
    acc.push(curr);
    return acc;
}, []);
console.log(copy3); 

//concatenation method
let main4 = [10, 11, 12];
let copy4 = main4.concat();
console.log(copy4);

//map method
let main5 = [10, 11, 12];
let copy5 = main5.map(x => x);
console.log(copy5); // [10, 11, 12]
