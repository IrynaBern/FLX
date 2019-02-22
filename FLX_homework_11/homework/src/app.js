let rootNode = document.getElementById('root');
const MAX = 10;
let counter = 0;
let header;
let notification ;
let formSection;
let inputField;
let addButton;
let todoList;
let footer;
let immige;

function createElement(tag, innerText, attributes) {
  tag = document.createElement(tag);
  tag.innerHTML = innerText;
  
  for(let key in attributes) {
    if(attributes.hasOwnProperty(key)) {
    tag.setAttribute(key, attributes[key]);
	}
  }
  return tag;
}

header = createElement('header', '<h1>TODO Cat List</h1>', {'class': 'todo-header'});
notification = createElement('p', 'Maximum item per list are created', {'class': 'max-msg'});
header.appendChild(notification);
formSection = createElement('div', '', {'class': 'todo-add'});
inputField = createElement('input', '', 
  {'class': 'add-input',
   'type': 'text',
   'name': 'inputField',
   'placeholder': 'Add New Action',
   'autofocus': 'true'
  });
addButton = createElement('button', '<i class="material-icons">add_box</i>', 
  {'class': 'add-btn',
   'disabled': 'true'
  });
todoList = createElement('ul', '', {'class': 'todo-list'});
footer = createElement('footer', '', {'class': 'todo-footer'});
immige = createElement('img', '', {'class': 'todo-img', 'src': 'assets/img/cat.png','alt': 'Todo-cat'});

footer.appendChild(immige);
formSection.appendChild(inputField);
formSection.appendChild(addButton);
rootNode.appendChild(header);
rootNode.appendChild(formSection);
rootNode.appendChild(todoList);
rootNode.appendChild(footer);
	
inputField.addEventListener('change', event => {
  const text = inputField.value;
  addButton.disabled = !text;
  if (event.code === 'Enter' && text) {
    addListItem(text.trim());
  }
});

inputField.addEventListener('keyup', event => {
  const text = inputField.value;
  addButton.disabled = !text;
  if (event.code === 'Enter' && text) {
    addListItem(text.trim());
  }
});

addButton.addEventListener('click', () => {
  addListItem(inputField.value.trim());
});

function addListItem(labelText) {
  const checkIcon = createElement('i', 'check_box_outline_blank', {'class': 'material-icons'});
  const deleteIcon = createElement('i', 'delete', {'class': 'material-icons'});
  const label = createElement('span', labelText, {});
  const checkboxBtn = createElement('button', '', {'class': 'checkbox-item'});
  const deleteBtn = createElement('button', '', {'class':'remove-item'});
  const listItem = createElement('li', '', {'class': 'list-item', 'draggable': 'true'});
  checkboxBtn.appendChild(checkIcon);
  checkboxBtn.appendChild(label);
  deleteBtn.appendChild(deleteIcon);
  listItem.appendChild(checkboxBtn);
  listItem.appendChild(deleteBtn);
  todoList.appendChild(listItem);
  
  checkboxBtn.addEventListener('click', () => {
    checkIcon.textContent = 'check_box';
  });

  deleteBtn.addEventListener('click', () => {
    listItem.remove();
    counter--;
    inputField.disabled = false;
    notification .style.display = 'none';
  });
  
  if (++counter >= MAX) {
    inputField.disabled = true;
    notification.style.display = 'block';
  }
  inputField.value = '';
  addButton.disabled = true;
  
  let dragAndDrop = null;
  
  listItem.addEventListener('dragstart', e => {
    dragAndDrop = e.target;
    dragAndDrop.style.cursor = 'pointer';
    e.dataTransfer.setData('text', dragAndDrop.className);
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.effectAllowed = 'move';
  });

  todoList.addEventListener('dragover', e => {
    if (e.target.className === 'list-item') {
      e.preventDefault();
      e.target.style.transform = 'translate(10px)';
    }
   });

  todoList.addEventListener('dragleave', e => {
    e.preventDefault();
    e.target.style.transform = '';
  });

  todoList.addEventListener('drop', e => {
    const className = e.dataTransfer.getData('text');
    if (e.target.className === 'list-item') {
      e.preventDefault();
      e.target.style.transform = '';
      const coords = e.target.getBoundingClientRect();
      const halfHeight = 0.5;
      const elemCenterY = coords.top + halfHeight * e.target.offsetHeight;
      const clickY = e.clientY;
      if (clickY > elemCenterY) {
        todoList.insertBefore(dragAndDrop, e.target.nextSibling);
      } else {
        todoList.insertBefore(dragAndDrop, e.target);
      }
    }
  });
}



