//function with value
function book(title, author, year) {
    this.title = title || "U_title";
    this.author = author || "U_author";
    this.year = year || "U_year";
}

let book1 = new book("Crime and Punishment", 
    "Fyodor Dostoevsky", "1866");
console.log(book1); 
//using this
function tweet(follower,following) {
    this.follower = follower;
    this.following = following;
    this.number = function() {
        console.log(this.follower + " is following.");
    };
}
let tweet1 = new tweet("Mercenary", 101);
tweet1.number(); 
//using private or secrert
function account(username, password) {
    this.username = username;
    var _password = password; 

    this.checkpassword = function(password) {
        return _password === password;
    };
}
let account1 = new account("Mercenary", "secret");
console.log(account1.checkPassword("secret")); 
console.log(account1._password); 


