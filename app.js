let taskInput = document.querySelector('input');
let submitBtn = document.querySelector('.add');
let randBtn = document.querySelector('.rand');
let todoList = document.querySelector('.list');
let completeList = document.querySelector('.complete');

taskInput.addEventListener('keypress', function (e) {
    let key = e.keyCode;
    if (key === 13) {
        addTask();
    }
});

submitBtn.addEventListener('click', addTask);


function addTask(){
    let task = taskInput.value;
    if (task == ''){
        return;
    }      
    let li = document.createElement('li');
    li.innerHTML = '<div><input type="checkbox" class="checkbox"><span>' + task + '</span></div><button class="remove">Remove</button>';   
    todoList.prepend(li);  
    taskInput.value = '';
    addRemoveBtnEvent();
    addCheckboxEvent();
}

function addCheckboxEvent(){
    let checkbox = document.querySelectorAll('.checkbox');
    for(let i = 0; i<checkbox.length; i++){
        checkbox[i].addEventListener('click', switchTask);
    }
}

function switchTask(e){   
    let li = e.target.parentElement.parentElement;
    let checked = e.target.checked;
    if(checked){
        completeList.prepend(li);    
        addRemoveBtnEvent();
        addCheckboxEvent();
    }
    else{
        todoList.prepend(li);      
        addRemoveBtnEvent();
        addCheckboxEvent();
    }
}

function addRemoveBtnEvent(){
    let removeBtn = document.querySelectorAll('.remove');
    for(let i = 0; i<removeBtn.length; i++){
        removeBtn[i].addEventListener('click', delTask);
    }
}

function delTask(e){
    let li = e.target.parentElement;
    li.remove();   
}

addCheckboxEvent();
addRemoveBtnEvent();

let tasks = [
    'отправить другу смешную гифку',
    'расставить книги на полке по цвету'
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let rand = document.querySelector('.rand');

rand.addEventListener('click', function () {
    let task = getRandomElement(tasks);
    let li = document.createElement('li');
    li.innerHTML = '<div><input type="checkbox" class="checkbox"><span>' + task + '</span></div><button class="remove">Remove</button>';   
    todoList.prepend(li);  
    addCheckboxEvent();
    addRemoveBtnEvent();    
  }); 
  