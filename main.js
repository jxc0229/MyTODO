
function addCloseBtn(item) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  item.appendChild(span);
}

function crossOut(item) {

}
// Create a "close" button and append it to each list item
var START_LIST = 3
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = START_LIST; i < myNodelist.length; i++) {
  addCloseBtn(myNodelist[i])
}


document.addEventListener('DOMContentLoaded', function () {
  // Add event listener to a parent element that exists when the page loads
  document.body.addEventListener('change', function (event) {
    if (event.target.classList.contains('task-checkbox')) {
      var li = event.target.parentElement;
      if (event.target.checked) {
        li.classList.add('task-crossed');
      } else {
        li.classList.remove('task-crossed');
      }
    }
  });

  document.body.addEventListener('click', function (event) {
    if (event.target.classList.contains('close')) {
      var li = event.target.parentElement;
      li.remove();
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Select all "Add New Task" buttons
  var addTaskButtons = document.querySelectorAll('.btn-primary[data-list-id]');

  // Attach event listeners to each button
  addTaskButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      var listId = event.target.getAttribute('data-list-id');
      addTask(listId);
    });
  });
});

function addTask(todoListId) {
  var input = document.querySelector('.input-container[data-list-id="' + todoListId + '"] input[type="text"]');
  var taskName = input.value.trim();
  if (taskName !== '') {
    var ul = document.querySelector('ul[list-id="' + todoListId + '"]');
    var li = document.createElement('li');
    li.className = 'list-group-item';
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(' ' + taskName));
    addCloseBtn(li)
    ul.appendChild(li);
    input.value = '';
  }
  else {
    alert("You must write something!");
  }
}




