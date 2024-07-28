//object literals
const person = {
    firstname: 'Mercenary', 
    lastname: 's', 
    get fullname() {
      return `${this.firstname} ${this.lastname}`;
    }
  };
  
  console.log(person.fullname); 
  
  
  //using class
  class rectangle {
    constructor(width, height, length) {
      this.width = width;
      this.height = height;
      this.length = length;
    }
  
    get area() {
      return this.width * this.height;
    }
  
    get volume() {
      return this.width * this.height * this.length;
    }
  }
  
  const rect = new rectangle(5, 10, 3); 
  console.log(rect.area);  
  console.log(rect.volume);
  //using prototype

  function circle(radius) {
    this.radius = radius;
  }
  
  circle.prototype = {
    get circumference() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  const circle = new circle(7);
  console.log(circle.circumference); 
  