
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
  
  
