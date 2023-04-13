const listItem = document.getElementById("items");

// Load items from local storage and display them on the screen
function loadItems() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const obj = JSON.parse(localStorage.getItem(key));
    displayItemOnScreen(obj);
  }
}

// Display an item on the screen
function displayItemOnScreen(obj) {
  const newItem = document.createElement('li');
  newItem.textContent = obj.name + '-' + obj.email + '-' + obj.number;

  // Create Delete Button
  const deletebtn = document.createElement('input') //Delete Button
  const editbtn = document.createElement('input') //Edit Button

  deletebtn.type = 'button';
  deletebtn.value = 'Delete'; //value of delete button
  deletebtn.onclick = () => {
    localStorage.removeItem(obj.name);
    listItem.removeChild(newItem);
  }

  editbtn.type = 'button';
  editbtn.value = 'Edit'; //value of edit button
  editbtn.onclick = () => {
    localStorage.removeItem(obj.name);
    listItem.removeChild(newItem);
    document.getElementById('name').value = obj.name;
    document.getElementById('email').value = obj.email;
    document.getElementById('number').value = obj.number;
  }

  newItem.appendChild(deletebtn) //deletebtn append into li
  newItem.appendChild(editbtn) //editbtn append into li
  listItem.appendChild(newItem); // to show under the form downwards
}

// Add a new item to local storage and display it on the screen
function addItemToLocalStorage(obj) {
  localStorage.setItem(obj.name, JSON.stringify(obj)); // storing data to local 
  displayItemOnScreen(obj);
}

// Handle form submission
function onsubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const obj = { name, email, number };
  addItemToLocalStorage(obj);
  e.target.reset();
}

// Add event listener for form submission
document.getElementById('prnt').addEventListener('submit', onsubmit);

// Add event listener for page load
document.addEventListener("DOMContentLoaded", () => {
  loadItems();
});