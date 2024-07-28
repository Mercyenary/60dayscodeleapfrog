function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + 
        punctuation);
}

const person1 = { name: 'Mercenarys' };
greet.call(person1, 'Hello', 'twitter');


const person = {
    fullName: function(city, country) {
        console.log(this.firstName + " " + 
    this.lastName + " from " + city + ", " + country);
    }
};

const person2 = {
    firstName: "Mercenary",
    lastName: "s"
};

person.fullName.call(person2, "Leapfrog", "twitter"); 


function animal(age, type) {
    console.log(this.name + ' is a ' + age + ' year old ' + type);
}

const pet = { name: 'mikey' };
 animal.call(pet, 3, 'cat'); 
