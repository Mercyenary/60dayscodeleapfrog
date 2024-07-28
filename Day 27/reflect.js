//reflect on a proxy
const admin = {
    name: 'Mercenary',
    age: 21,
    city: "bhp"
  };
  const handler = {
    get(admin, property, receiver) {
      console.log(`Getting property ${property}`);
      return Reflect.get(admin, property, receiver);
    },
   
  };
  const proxy = new Proxy(target, handler);
  console.log(proxy.name);
  proxy.age = 21;           
  console.log(proxy.age);                           
  try {
    proxy.age = 'twenty-one'; 
  } catch (e) {
    console.error(e);  
  }
  
  //reflect on constructor
  class cricketer {
    constructor(name) {
      this.name = name;
    }
  
    score() {
      console.log(`${this.name} hits a six.`);
    }
  }
  
  class Dog extends cricketer {
    constructor(name) {
      super(name);
    }
  
    score() {
      console.log(`${this.name} hits.`);
    }
  }
  
  function createInstance(className, name) {
    return Reflect.construct(className, [name]);
  }
  
  const rohit = createInstance(rohit, 'scores');
  rohit.score();  
  
  const cricket = createInstance(cricketer, 'kholi');
  cricket.score();  
  
  //function and proxy 
  function greet(namaste, punctuation) {
    return `${namaste}, my name is ${this.name}${punctuation}`;
  }
  const person = {
    name: 'mercenary'
  };
  
  const result = reflect.apply(greet, person, ['Hello', '!']);
  console.log(result);  
  
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  
  const mergedarray = reflect.apply(Array.prototype.concat, array1, array2);
  console.log(mergedarray);  
  