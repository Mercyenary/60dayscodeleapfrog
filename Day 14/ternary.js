
const exampleArray = [
    condition1 ? value1 : alternativeValue1,
    condition2 ? value2 : alternativeValue2,
    condition3 ? value3 : alternativeValue3,
   
  ];
  
  const isEven = (num) => num % 2 === 0;
  const numbers = [1, 2, 3, 4, 5, 6];
  const resultArray = numbers.map(num => isEven(num) ? 'even' : 'odd');
  
  console.log(resultArray); 

//activity
  const userActivities = [
    { name: 'John', online: true },
    { name: 'Jane', online: false },
    { name: 'Mike', online: true },
    { name: 'Anna', online: false },
  ];
  
  const statusMessages = userActivities.map(user => 
    user.online ? `${user.name} is online` : `${user.name} is offline`
  );
  
  console.log(statusMessages);

//tempcheck
const temperatures = [18, 25, 10, 30, 15, 22];
const hotDays = temperatures
  .filter(temp => temp > 20) 
  .map(temp => `${temp}°C is a hot day`); 

console.log(hotDays);


  
  