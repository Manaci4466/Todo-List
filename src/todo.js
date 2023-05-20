const todoItem = (title,description,dueDate,priority,checklist,id) => {
        return {title,description,dueDate,priority,checklist,id}        
}

const projects = {

        project1: []

};



const createTodo = (project) => {
         // input fields
        const checkInput = document.querySelector("#check");
        const titleInput = document.querySelector("#title");
        const descriptionInput = document.querySelector("#description");
        const dueDateInput = document.querySelector("#due-date");
        const urgencyLevelInput = document.querySelector("#urgency-level");

        const todo = todoItem(titleInput.value,descriptionInput.value,dueDateInput.value,urgencyLevelInput.value,checkInput.value,projects[project].length);
        projects[project].push(todo);
          // LOCAL storage don't forget
          const storedProjects = JSON.stringify(Object.assign(localStorage.getItem("storedProjects"),projects));
          localStorage.setItem("storedProjects",storedProjects);
        
         
}

const editTodo = (project,id) => {

        const checkInput = document.querySelector("#check");
        const titleInput = document.querySelector("#title");
        const descriptionInput = document.querySelector("#description");
        const dueDateInput = document.querySelector("#due-date");
        const urgencyLevelInput = document.querySelector("#urgency-level");

        // Filter
        const todo = projects[project][id];
        todo.title = titleInput.value;
        todo.description = descriptionInput.value;
        todo.dueDate = dueDateInput.value;
        todo.priority = urgencyLevelInput.value;
        todo.checklst = checkInput.value;

        // LOCAL storage don't forget
        const storedProjects = JSON.stringify(Object.assign(localStorage.getItem("storedProjects"),projects));
        localStorage.setItem("storedProjects",storedProjects);
}

const removeTodo = (project,id) => {
        projects[project].splice(id,1);
          // LOCAL storage don't forget
          const storedProjects = JSON.stringify(Object.assign(localStorage.getItem("storedProjects"),projects));
          localStorage.setItem("storedProjects",storedProjects);
        
}

const createProject = () => {
        
        const projectInput = document.querySelector("#project-name");
        Object.defineProperty(projects,projectInput.value,{value: []});

}

export {todoItem,projects,editTodo,createProject,createTodo, removeTodo};