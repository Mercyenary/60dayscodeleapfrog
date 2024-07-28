const button = document.querySelector('#submit');
const todoList =document.querySelector('#todo-list');
const todonr=document.querySelector(".todo-nr b");
const maintitle = document.querySelector('.main-title');
// const items =todoList.children;

// //EVENT is like click scrolling or resizing the browser

// //Attaching a event listner
// button.addEventListener('click', function(){
//     const newitem = document.createElement('li');
//     newitem.classList.add("item");
//     newitem.innerText=`Day ${items.length+1}`;
//     todoList.appendChild(newitem);
//     todonr.innerText = items.length;
// });


// function additem(){
//     console.log("New item added")
// }

button.addEventListener('keydown',function(event){
    console.log(event);
    maintitle.classList.toggle("spectacular");
    
});
