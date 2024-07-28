//Iterator pattern
class Iterator {
    constructor(items) {
        this.index = 0;
        this.items = items;
    }

    next() {
        return this.index < this.items.length ? 
            { value: this.items[this.index++], done: false } : 
            { done: true };
    }

    hasNext() {
        return this.index < this.items.length;
    }

    reset() {
        this.index = 0;
    }
}

const items = ['item1', 'item2', 'item3'];
const iterator = new Iterator(items);

while (iterator.hasNext()) {
    console.log(iterator.next().value); 
}

iterator.reset();
console.log(iterator.next().value);  

//observer pattern
class Subject {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notifyObservers(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}
class Observer {
    constructor(name) {
        this.name = name;
    }
    update(message) {
        console.log(`${this.name} received message: ${message}`);
    }
}
const subject = new Subject();
const observer1 = new Observer('Observer1');
const observer2 = new Observer('Observer2');
const observer3 = new Observer('Observer3');
subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notifyObservers('First message');  
subject.removeObserver(observer1);
subject.addObserver(observer3);
subject.notifyObservers('Second message');  

//Chain of responsibility
class AuthHandler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        console.log('Request could not be handled:', request);
    }
}

class CheckUsername extends AuthHandler {
    handle(request) {
        if (request.username) {
            console.log('Username is valid');
            return super.handle(request);
        } else {
            console.log('Username is missing');
        }
    }
}
class CheckPassword extends AuthHandler {
    handle(request) {
        if (request.password) {
            console.log('Password is valid');
            return super.handle(request);
        } else {
            console.log('Password is missing');
        }
    }
}
class CheckCaptcha extends AuthHandler {
    handle(request) {
        if (request.captcha) {
            console.log('Captcha is valid');
            return super.handle(request);
        } else {
            console.log('Captcha is missing');
        }
    }
}
const usernameHandler = new CheckUsername();
const passwordHandler = new CheckPassword();
const captchaHandler = new CheckCaptcha();

usernameHandler.setNext(passwordHandler).setNext(captchaHandler);

const request1 = { username: 'user1', password: 'password1', captcha: 'captcha1' };
const request2 = { username: 'user2', password: 'password2' };
const request3 = { username: 'user3' };

usernameHandler.handle(request1); 
usernameHandler.handle(request2);  
usernameHandler.handle(request3);  
