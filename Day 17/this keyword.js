//universal keyword
console.log(this); 

//object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person.fullName()); 

//constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.getDetails = function() {
        return `${this.make} ${this.model}`;
    };
}
const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getDetails()); 

//call or apply
function greet() {
    return `Hello, ${this.name}!`;
}
const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };
console.log(greet.call(person1)); 
console.log(greet.apply(person2)); 

