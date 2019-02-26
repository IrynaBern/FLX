const rootNode = document.getElementById('root');
const todoItems = [];
let counter = 0;
let doc = document;
let header;
let textNode;
let caption;
let messege;
let inputField;
let addNewTaskBtn;
let saveChangeBtn;
let canselBtn;
let todoList;
let listItem;
let blankIcon;
let checkboxIcon;
let removeIcon;
let blankBtn;
let checkboxBtn;
let removeBtn;
let todoItem;
let conteiner;
let wrapper;
const ZERO = 0;

function clearContent(conteiner) {
  let content = document.getElementsByClassName(conteiner)[ZERO];
  if (content) {
    rootNode.removeChild(content);
  }
}

function hashHandler() {
  let hash = window.location.hash;
  addNewTask();
}

function createMainPage(){
  wrapper = doc.createElement('div');
  wrapper.setAttribute('class', 'wrapper');
  header = doc.createElement('header');
  header.innerHTML = '<h1>Simple TODO application</h1>';
  conteiner = doc.createElement('div');
  conteiner.setAttribute('class', 'todo-content');
  addNewTaskBtn = doc.createElement('input');
  addNewTaskBtn.setAttribute('type', 'button');
  addNewTaskBtn.setAttribute('class', 'add-btn');
  addNewTaskBtn.setAttribute('value', 'Add new task');
  messege = doc.createElement('p');
  messege.setAttribute('class', 'msg');
  messege.innerHTML = 'TODO is empty';
  todoList = doc.createElement('ul');
  todoList.setAttribute('class', 'todo-list');	
  conteiner.appendChild(addNewTaskBtn);
  conteiner.appendChild(messege);
  for(let i = 0; i < todoItems.length; i++) {
    addListItem(i);
  }
  if(todoItems.length === ZERO) {
    messege.style.display = 'block';
  } else {
    messege.style.display = 'none';
    conteiner.appendChild(todoList);
  }
  wrapper.appendChild(header);
  wrapper.appendChild(conteiner);
  rootNode.appendChild(wrapper);
	
  addNewTaskBtn.addEventListener('click', () => {
    let hash = window.location.href;
    if(window.location.hash === ''){
      hash += '#/add';
      window.location.href = hash;
    }
    clearContent('wrapper');
    addNewTask('Add new item');
  });
}

function addNewTask(title) {
  wrapper = doc.createElement('div');
  wrapper.setAttribute('class', 'wrapper');
  conteiner = doc.createElement('div');
  conteiner.setAttribute('class', 'todo-content');
  header = doc.createElement('header');
  caption = doc.createElement('h1');
  textNode = doc.createTextNode(title);
  caption.appendChild(textNode);
  header.appendChild(caption);
  inputField = doc.createElement('input');
  inputField.setAttribute('type', 'text');
  inputField.setAttribute('autofocus', 'true');
  canselBtn = doc.createElement('input');
  canselBtn.setAttribute('type', 'button');
  canselBtn.setAttribute('class', 'add-btn');
  canselBtn.setAttribute('value', 'Cansel');
  saveChangeBtn = doc.createElement('input');
  saveChangeBtn.setAttribute('type', 'button');
  saveChangeBtn.setAttribute('class', 'add-btn');
  saveChangeBtn.setAttribute('value', 'Save changes');
  conteiner.appendChild(inputField);
  conteiner.appendChild(saveChangeBtn);
  conteiner.appendChild(canselBtn);
  wrapper.appendChild(header);
  wrapper.appendChild(conteiner);
  rootNode.appendChild(wrapper);

  saveChangeBtn.addEventListener('click', () => {
    let hash = window.location.href;
    const text = inputField.value;
    
	if(text) {
      if (window.location.hash === '' || window.location.hash === '#/add') {
        let itemID = counter;
        let item = {isDone: false, id: itemID, description: text};
        let i = 0; 
        while (i < counter && todoItems[i].isDone !== true) {
          i++;
        }
        if(i === counter) {
          todoItems.push(item);
        } else {
          const toDel = 0;
          todoItems.splice(i, toDel, item);
        }
        counter++;
      } else {
       let itemID = window.location.hash[window.location.hash.length -1];
       todoItems[itemID].description = text;
      }
    }
	
    window.history.back();
    clearContent('wrapper');
    createMainPage(); 
  });
	
  canselBtn.addEventListener('click', () => {
    clearContent('wrapper');
    window.history.back();
    createMainPage();
  });
}

function addListItem(index) {
  checkboxBtn = doc.createElement('button');
  checkboxBtn.className = 'checkbox-item';
  checkboxIcon = doc.createElement('img');

  if(!todoItems[index].isDone) {
    checkboxIcon.setAttribute('src', './assets/img/todo-s.png');
    checkboxIcon.setAttribute('alt','Blank');
  } else {
    checkboxIcon.setAttribute('src', './assets/img/done-s.png');
    checkboxIcon.setAttribute('alt','Checked');
  }

  checkboxBtn.appendChild(checkboxIcon);
  removeBtn = doc.createElement('button');
  removeBtn.setAttribute('class', 'remove-item');
  removeIcon = doc.createElement('img');
  removeIcon.setAttribute('src', './assets/img/remove-s.jpg');
  removeIcon.setAttribute('alt','Done');
  removeBtn.appendChild(removeIcon);
  todoItem = doc.createElement('p');
  todoItem.innerHTML = todoItems[index].description;
  listItem = doc.createElement('li');
  listItem.className = 'list-item';
  listItem.appendChild(checkboxBtn);
  listItem.appendChild(todoItem);
  listItem.appendChild(removeBtn);
  todoList.appendChild(listItem);
  
  checkboxBtn.addEventListener('click', () => {
    checkboxIcon.setAttribute('src', './assets/img/done-s.png');
    checkboxIcon.setAttribute('alt','Checked');
    todoItems[index].isDone = true;
	const first = 0;
    todoItems.push(todoItems.splice(index,1)[first]);       
    clearContent('wrapper');
    window.history.back();
    createMainPage();
  });

  removeBtn.addEventListener('click', () => {
    todoList.remove(listItem);
    counter--;
    const removed = todoItems.splice(index ,1);

    if(counter <= ZERO) {
      messege.style.display = 'block';
    } else {
      messege.style.display = 'none';
    }
    clearContent('wrapper');
    window.history.back();
    createMainPage();
 });
	
  todoItem.addEventListener('click', () => {
    let hash = window.location.href;
    if(window.location.hash === ''){
      hash += '#/modify/:' + todoItems[index].id;
      window.location.href = hash;
    }
    clearContent('wrapper');
    addNewTask('Modify item');
  });
}

createMainPage();
