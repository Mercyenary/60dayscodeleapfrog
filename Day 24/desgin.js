// Singleton Pattern

var singleton = (function() {
    var instance;

    function createinstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getinstance: function() {
            

            if (!instance) {

                instance = createinstance();
            }
            return instance;
        }
    };
})
();

var instance1 = singleton.getinstance();

var instance2 = singleton.getinstance();

console.log(instance1 === instance2); 

//factory method
function car() {
    this.type = "car";
}

function truck() {
    this.type = "truck";
}

function vehiclefactory() {}

vehiclefactory.prototype.createvehicle = function(vehicletype) {
    switch(vehicletype) {
        case "car":
            return new car();
        case "truck":
            return new truck();
        default:
            return null;
    }
};

var factory = new vehiclefactory();
var car = factory.createvehicle("car");
var truck = factory.createvehicle("truck");

console.log(car.type);  
console.log(truck.type);  

//builder pattern
function carbuilder() {
    this.car = new Car();
}
carbuilder.prototype.setmake = function(make) {
    this.car.make = make;
    return this;
};

carbuilder.prototype.setmodel = function(model) {
    this.car.model = model;
    return this;
};

carbuilder.prototype.build = function() {
    return this.car;
};

function car() {
    this.make = "";
    this.model = "";
}

var builder = new carbuilder();
var car = builder.setmake("TATA").setmodel("Nano").build();

console.log(car.make);  
console.log(car.model);  

//Prototype Pattern
var vehicleprototype = {
    init: function(model) {
        this.model = model;
    },
    getmodel: function() {

        console.log("The model of this vehicle is " + this.model);
    }
};


function car(model) {

    function F() {}

    F.prototype = vehicleprototype;

    var f = new F();
    f.init(model);
    return f;
}

var mycar = new car("TATA NANO");
mycar.getmodel();  
