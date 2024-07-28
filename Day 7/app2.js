//selectors
const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

//event listners

todobutton.addEventListener('click',addtodo);
todolist.addEventListener('click', deletecheck);
filterOption.addEventListener("click", filtertodo);


//functions
function addtodo(event){

    //prevent from submition
   event.preventDefault();

   //todo div
   const tododiv = document.createElement("div");
   tododiv.classList.add("todo");
   //create LI
   const newtodo = document.createElement('li');
   newtodo.innerText=todoinput.value;
   //adding todo to local storage
   saveLocaltodos(todoinput.value);
   newtodo.classList.add("todo-item");
   tododiv.appendChild(newtodo);
   todoinput.value="";
  
   //check mark button here

   const completedbutton = document.createElement("button");
   completedbutton.innerHTML ='<i class="fas fa-check"></i>';
   completedbutton.classList.add('complete-btn');
   tododiv.appendChild(completedbutton);
   //check mark button here

   const trashbutton= document.createElement("button");
   trashbutton.innerHTML ='<i class="fas fa-trash"></i>';
   trashbutton.classList.add('trash-btn');
   tododiv.appendChild(trashbutton);

    //append to list
    todolist.appendChild(tododiv);
    //clear input value
   
}

function deletecheck(e){
    const item = e.target;

    //deleting the todo
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        //animate
        todo.classList.add("fall");
        todo.addEventListener('transitioned', function(){
            todo.remove();
        });
    }

    //check mark
    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


function filtertodo(e) {
    const todos = todolist.getElementsByClassName("todo");
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    }
}

function saveLocaltodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function removeLocaltodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoindex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoindex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  function gettodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {

      //Create todo div
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");

      //Create list

      const newTodo = document.createElement("li");
      newTodo.innerText = todo;
      newTodo.classList.add("todo-item");
      todoDiv.appendChild(newTodo);
      todoinput.value = "";

      //Create Completed Button

      const completedButton = document.createElement("button");
      completedButton.innerHTML = `<i class="fas fa-check"></i>`;
      completedButton.classList.add("complete-btn");
      todoDiv.appendChild(completedButton);

      //Create trash button

      const trashButton = document.createElement("button");
      trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
      trashButton.classList.add("trash-btn");
      todoDiv.appendChild(trashButton);
      //attach final Todo

      todolist.appendChild(todoDiv);
    });
  }
  