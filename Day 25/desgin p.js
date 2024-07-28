//Adapter pattern
class oldcalculator {
    operations(term1, term2, operation) {
        if (operation === 'add') return term1 + term2;
        if (operation === 'sub') return term1 - term2;
    }
}


class newcalculator {
    add(term1, term2) {
        return term1 + term2;
    }
    sub(term1, term2) {
        return term1 - term2;
    }
}

class calculatoradapter {
    constructor() {
        this.newcalculator = new newcalculator();
    }

    operations(term1, term2, operation) {
        if (operation === 'add') return this.newcalculator.add(term1, term2);
        if (operation === 'sub') return this.newcalculator.sub(term1, term2);
    }
}

const adapter = new calculatoradapter();
console.log(adapter.operations(10, 5, 'add')); 

// decorator pattern

class coffee {
    cost() {
        return 5;
    }
}

class milkdecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }


    cost() {
        return this.coffee.cost() + 1;
    }
}


let mycoffee = new coffee();

console.log(mycoffee.cost()); 

mycoffee = new milkdecorator(mycoffee);
console.log(mycoffee.cost()); 

//facade pattern
class CPU {
    execute() {
        console.log('CPU executing');
    }
}

class memory {
    load() {
        console.log('memory loading');
    }
}

class facade {
    constructor() {
        this.cpu = new CPU();
        this.memory = new memory();
    }
    start() {
        this.memory.load();
        this.cpu.execute();
    }
}

const computer = new facade();
computer.start();

//proxy pattern
class realimage {
    constructor(filename) {
        this.filename = filename;
        this.loadfromdisk();
    }

    loadfromdisk() {
        console.log(`Loading ${this.filename}`);
    }

    display() {
        console.log(`Displaying ${this.filename}`);
    }
}
class proxyimage {
    constructor(filename) {
        this.realImage = null;
        this.filename = filename;
    }

    display() {
        if (!this.realImage) {
            this.realImage = new realimage(this.filename);
        }
        this.realImage.display();
    }
}
const image = new proxyimage('test_image.jpg');
image.display();             
image.display();  
