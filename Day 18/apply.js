function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + 
        punctuation);
}

const person = { name: 'Mercenarys' };
greet.apply(person, ['Hello', 'twitter']); 

//city
const person2 = {
    fullName: function(city, country) {
        console.log(this.firstName + " " + 
    this.lastName + " from " + city + ", " + country);
    }
};

const person1 = {
    firstName: "Mercenary",
    lastName: "S"
};

person.fullName.apply(person1, ["chitwan", "Nepal"]); 

//pet
function animal(age, type) {
    console.log(this.name + ' is a ' + age + 
        ' year old ' + type);
}
const pet = { name: 'mikey' };
animal.apply(pet, [3, 'cat']); 

