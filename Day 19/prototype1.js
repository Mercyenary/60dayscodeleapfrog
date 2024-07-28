//class
let baja = {
    speak: function() {
        console.log(`${this.name} makes a melody sound.`);
    }
};

let madal = Object.create(baja);
madal.name = 'madal';
madal.speak(); 
//inherit
let flute = Object.create(baja);
flute.name = 'flute';
flute.speak();  

class person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
class student extends person {
    constructor(name, studentid) {
        super(name);
        this.studentid = studentid;
    }

    displayid() {
        console.log(`My student ID is ${this.studentId}.`);
    }
}
let student = new Student('Mercenary', 1889);
student.greet();    
student.displayId();  

