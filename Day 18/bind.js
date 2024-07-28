const person = {
    firstName: "Leap",
    lastName: "Frog",
    names: function() {
        return this.firstname + " " + this.lastname;
    }
};

const name = person.names.bind(person);
console.log("Hello, " + name() + "!"); 

const twitter = {
    follower: "1.8k",
    following: "146",
    gettwitterinfo: function() {
        return this.follower + " " + this.following;
    }
};

const gettwitterinfo = car.gettwitterinfo.bind(twitter);
console.log("Tweet Info: " + gettwitterinfo()); 

const module = {
    x: 42,
    getX: function() {
        return this.x;
    }
};

const unboundGetX = module.getX;
const boundGetX = unboundGetX.bind(module);
console.log("The value is: " + boundGetX()); 

