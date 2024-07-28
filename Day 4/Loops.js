//for loops

for(let i=0; i<=100; i++){

    console.log(i);

    //conosole.log(i) before the if statement gives value with 20 
    //console.log(i) after the the if statement gives value without 20 

     if(i===20){

        console.log ('hey how you doing');
        continue;
     }
     if(i===40){
        console.log ('hey leapfog');
        break;
     }
     
}

//for loops with array using foreach
const texts1 =['leapfrog company', '60days challange','mercenary','twitter'];
for(let i=0; i<=texts1.length; i++){console.log(i);}

names1.forEach(function(name,indez){
    console.log(name,indez);
})

//for loops with texts
const texts =['leapfrog company', '60days challange','mercenary','twitter'];

for(let i=0; i< texts.length; i++){

    console.log(texts[i]);
}

//updated for loop
const names= ['dev','oops', 'logic'];
for (let name of names){
    console.log(names);
}

//for in while loops

const user = {
//key leftside values rightside
    name: 'leapfrog',
    age:23,
    followers: 1700,
    following: 145,
    money: 'alot'
}
for (let x in user){
    console.log(x);
}
console.log(user.followers);

//while  loops
let i1=20;
while(i1<30){
    console.log(i1);
    i1++
}

//dowhile loops
let i2 =0;
do{
    console.log(i2)
    i2++;
}
while(i2 <10);
