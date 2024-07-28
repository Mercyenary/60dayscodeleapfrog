const collectionItems = document.getElementsByClassName("item");
const todolist = document.getElementsByClassid("todo-list");
const todonr = document.getElementsByClassName("todonr");

const newitem = document.createElement("li");
newitem.classList.add("item");
newitem.innerText="item3";

const anotheritem =document.createElement("li");
anotheritem.classList.add("item");
anotheritem.innerText = "Item 4";

todolist.appendchild(newitem);
todolist.appendchild(anotheritem);

//update amount of item
todonr.innerText=collectionItems.length;

console.log(collectionItems);
