//leapfrog likes a tweet
function Merceanry(name) {
    this.name = name;
}

Merceanry.prototype.speak = function() {
    console.log(`${this.name} likes a tweet.`);
};

let tweet = new Merceanry('Leapfrog');
tweet.speak();  

//ray-zr-125cc is starting
function bike(model) {
    this.model = model;
}

let biker = new bike('ray-zr-125cc');

bike.prototype.start = function() {
    console.log(`${this.model} is starting.`);
};

biker.start();  

//Hello , my name is mercenary
let personprototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

let mercy = Object.create(personPrototype);
mercy.name = 'Mercenary';
mercy.greet();  