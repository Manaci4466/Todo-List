import { todoItem,createProject,createTodo,editTodo,projects } from "./todo";
export {render,renderProjects}

const render = (project) => {

    const contentTasks = document.querySelector("#content-tasks")
    contentTasks.innerHTML = "";
    const storedProjects = JSON.parse(localStorage.getItem("storedProjects"));
    // for loop that goes through array of todos
    if(!projects[project]) return;
    projects[project].forEach(element => {
        let template = `  <article>
        <div>${element.check}</div>
        <div>${element.title}</div>
        <div>${element.description}</div>
        <div>${element.dueDate}</div>
        <div>${element.priority}</div>
        <div class="delete-button" >
            <img data-attribute="${element.id}" src="https://images.unsplash.com/photo-1580836618305-605c32623ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="delete" width="100" height="100"/>
        </div>
        <div class="edit-button" >
            <img data-attribute="${element.id}" src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=675&q=80" alt="delete" width="100" height="100"/>
        </div>
    </article>
    `
    contentTasks.innerHTML += template;

    });

}

const renderProjects = () => {

    const projectInput = document.querySelector("#project-name");
   const projectTabs = document.querySelector(".projects");

    let template = `<div class="project">${projectInput.value}</div>`
    projectTabs.innerHTML += template;


}

