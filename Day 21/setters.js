//object literals
const person = {
    firstname: 'Leapfrog',
    lastname: 'Admin',
    
    get fullname() {
      return `${this.firstname} ${this.lastname}`;
    },
    
    set fullname(name) {
      [this.firstname, this.lastname] = name.split(' ');
    }
  };
  console.log(person.fullname); 
  person.fullname = 'Mercenary S';
  console.log(person.firstname);
  console.log(person.lastname); 

  //using function and prototype
  function Circle(radius) {
    this.radius = radius;
  }
  
  Circle.prototype = {
    set diameter(d) {
      this.radius = d / 2;
    }
  };
  
  const circle = new Circle(7);
  circle.diameter = 14;
  console.log(circle.radius); 
  //using class

  class rectangle {

    constructor(width, height) {

      this.width = width;

      this.height = height;

    }
  
    set dimensions(dim) {

      [this.width, this.height] = dim.split('x').map(Number);
    }
  }
  
  const rect = new rectangle(5, 10);

  rect.dimensions = '7x14';

  console.log(rect.width); 
  
  console.log(rect.height); 
  
