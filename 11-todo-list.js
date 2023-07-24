const todoList = [{name: 'wash dishes',dueDate:'22-12-2022'},
{name: 'make dinner', dueDate: '11-4-2022'}];
renderTodoList();
function renderTodoList(){
    
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
       
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        if(todoObject.name !=='' && todoObject.dueDate !==''){
        const {name,dueDate} = todoObject;
        const html = `<div>
             ${name}</div>
             <div> ${dueDate}</div>
             <button
             class="delete-button">Delete</button> 
            `;
        todoListHTML+=html;
        }  
    }
    // console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    }
    document.querySelectorAll('.delete-button')
    .forEach((deletebutton,index)=>{
            deletebutton.addEventListener('click',()=>{
                todoList.splice(index,1);
                renderTodoList();
            })
    })

document.querySelector('.js-add-button').addEventListener('click',()=>{
    addTodo();
});
function addTodo(){
   const inputElement =  document.querySelector('.js-name-input');
   const name = inputElement.value;
   const inputDateElement = document.querySelector('.js-due-date');
   const dueDate = inputDateElement.value;
   console.log(name);

   todoList.push({
    name:name,
    dueDate:dueDate
    });

//    console.log(todoList);

   inputElement.value = '';
   inputDateElement.value = '';
   renderTodoList();
}