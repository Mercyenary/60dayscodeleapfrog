//micro pollutes the air alot , micro na 4 pa 2255
function bus(name) {
    this.name = name;
}

bus.prototype.ride = function() {
    console.log(`${this.name} pollutes the air alot.`);
};

function bus(name,number) {
    bus.make(this, name);  
    this.number = number;
}

thisbus.prototype = Object.create(bus.prototype);
thisbus.prototype.constructor = Dog;

thisbus.prototype.pollute = function() {
    console.log(`${this.name} worn out.`);
};

let newbus = new thisbus('micro', 'na 4 pa 2255');
newbus.ride();  
newbus.make();   

