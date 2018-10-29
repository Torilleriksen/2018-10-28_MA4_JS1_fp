
//Access json file 
var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
request.responseType = 'json';
request.send();

//store data
request.onload = function() {
  var toDo = request.response; 
  notesTodo(toDo); 
  }
  
//Displaying TODO notes in cards
function notesTodo(jsonObj) {
  
  for (var i = 0; i < toDo.lenght; i++) {
  var idNr = document.createElement('h1');
  var noteNr = document.createElement('h2');
  var whatTodo = document.createElement('p');
  var status = document.createElement('p');
    
  idNr.textContent = 'User: ' + toDo[i].userId;
  noteNr.textContent = 'Number: ' + toDo[i].id;
  whatTodo.textContent = 'Task: ' + toDo[i].title;
  status.textContent = 'Status' + toDo[i].completed; 
     }

section.appendChild(idNr);
section.appendChild(noteNr);
section.appendChild(whatTodo);  
section.appendChild(status);


  }
}
