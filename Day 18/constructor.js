//Basic Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + 
        " and I am " + this.age + " years old.");
    };
}

let person1 = new Person("Mercenary", 21);
person1.greet(); 
//type method
function Car(make, model) {
    this.make = make;
    this.model = model;
}
Car.type.detail = function() {
    return this.make + " " + this.model;
};
let car1 = new Car("maruti", "suzuki");
console.log(car1.detail()); 

//nested 
function Student(name, id, grades) {
    this.name = name;
    this.id = id;
    this.grades = grades || {};
}
let student1 = new Student("Mercenary", 1889, 
    { OOSE: 90, datacomms: 85 });
console.log(student1); 

