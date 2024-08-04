const todoList = [
  {
    name: 'make dinner',
    dueDate: '2024-08-04'
  },
  { 
    name: 'wash dishes',
    dueDate: '2024-08-04'

  }

]; //Save data

renderTodoList();

function renderTodoList() {
  
  let todoListHTML = '';

  
  for (let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject; // Destructuring
    //const name = todoObject.name;
    //const dueDate =todoObject.dueDate;
    const html = `
      <p>
        ${name} ${dueDate}
        <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
          ">Delete</button>
      </p>
    `; //Generating the HTML
    todoListHTML += html;

  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addToDo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';


  renderTodoList();

}

  


 
