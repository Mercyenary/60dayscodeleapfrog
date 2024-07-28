//CALLBACK FUNCTION
const books = [
    "To kill a mockingbird",
    "The Great Gatsby",
    "The Fault in Our Stars",
    "Through the Looking Glass "

];

books.forEach(function(book){
    console.log("run");
    console.log(book)
});

button.addeventlistner('click', function(){

});

// HIGHER ORDER FUNCTION
function repeater(fn){
    fn();
    fn();
    fn();
}
function sayhi(){
    console.log("hello there!!!");
}

