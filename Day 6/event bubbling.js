const button = document.querySelector('#submit');
const todoList =document.querySelector('#todo-list');
const todonr=document.querySelector(".todo-nr b");
const maintitle = document.querySelector('.main-title');
const items =todoList.children;
const nameinput = document.querySelector(".name-input");
//EVENT is like click scrolling or resizing the browser

//Attaching a event listner
button.addEventListener('click', function(e){
    e.preventDefault();
    //create element
    const newitem = document.createElement('li');
    //adding class
    newitem.classList.add("item");
    //adding the text
    newitem.innerText=nameinput.value;
    todoList.appendChild(newitem);
    todonr.innerText = items.length;
    //deleting the value of input
    nameinput.value="";
    //create the elemet and attaching the listner
    newitem.addEventListener('click',deleteitem);
    
});

function deleteitem(e){
    e.stoppropagation();
    e.target.remove();
}

todoList.addEventListener('click',function(){
    console.log("THE UL EXECTUES");
    todoList.classList.add('fade');
});

