// const form = document.getElementById('form')
// const input = document.getElementById("input")
// const btn = document.getElementById('submit-btn')
// const ul = document.getElementsByClassName('todo-list')

// let tasktext;
// form.addEventListener('submit',  (e) =>{
//     e.preventDefault();

//     tasktext = input.value.trim();

//     if(tasktext){
//         addtodoItem(tasktext);
//         input.value = '';
//     }
// })


// function addtodoItem(tasktext){
//     const li = document.createElement('li');
//     li.className= 'todo-item';

//     const span  = document.createElement('span');
//     span.textContent = tasktext;

//     const deletebtn = documen.createElement('button');
//     deletebtn.textContent = 'Delete';


//     deletebtn.addEventListener('click', ()=> {

//      li.remove();
//     });

//     li.appendChild(span);
//     li.appendChild(deletebtn);
//     todolist.appendChild(li)
// }



// Select DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for adding a task
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get the input value
  const taskText = todoInput.value.trim();
  
  if (taskText) {
    addTodoItem(taskText);
    todoInput.value = ''; // Clear input field
  }
});

// Function to add a new to-do item
function addTodoItem(taskText) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  
  const span = document.createElement('span');
  span.textContent = taskText;
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  
  // Event listener for deleting the task
  deleteButton.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
}
