import { todoItem,removeTodo,editTodo,createProject,createTodo} from "./todo";
import {render,renderProjects} from "./DOM"


var currentProject = "project1";
localStorage.setItem("storedProjects",{});
// buttons
const createTodoButton = document.querySelector("#todo-button");
const submitTodoButton = document.querySelector("#submit-todo");
const editTodoButton = document.querySelector("#edit-todo")
const projectForm = document.querySelector("#new-project");
const sumbitProjectButton = document.querySelector("#submit-project");
const contentTasks = document.querySelector("#content-tasks");
const projectTabs = document.querySelector(".projects");

projectTabs.addEventListener("click",(e) => {
    if(e.target && e.target.matches(".projects > div")){

        currentProject = e.target.innerHTML;
        render(currentProject);
        console.log(currentProject);
    }
})

contentTasks.addEventListener("click",(e) => {
    if(e.target && e.target.matches(".delete-button > img")){

       removeTodo(currentProject,e.target.getAttribute("data-attribute"));
       render(currentProject);
    }
    if(e.target && e.target.matches(".edit-button > img")){
        const dialogTodo = document.querySelector(".todo-dialog");
        dialogTodo.show();
        localStorage.setItem("editItem",e.target.getAttribute("data-attribute"));
    }
});


projectForm.addEventListener("click",(e) => {e.preventDefault});

sumbitProjectButton.addEventListener("click",(e) => {

    createProject();
    renderProjects();
    
});

submitTodoButton.addEventListener("click",(e) => {

    createTodo(currentProject);
    render(currentProject);
});

editTodoButton.addEventListener("click",(e) => {

    console.log(localStorage.getItem("editItem"));
    editTodo(currentProject,localStorage.getItem("editItem"));
    render(currentProject);
})

createTodoButton.addEventListener("click",(e) => {
    const dialogTodo = document.querySelector(".todo-dialog");
    console.log(dialogTodo);
    dialogTodo.show();
});



