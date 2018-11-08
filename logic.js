// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },
  createTodo: function(newTodoStr) {
    // uses input string from user to create a new todo item
    let newTodoObj = {
      id: todoFunctions.generateId(),
      description: newTodoStr,
      done: false
    };
    return newTodoObj;
  },
  // todos is an array of object
  // newTodo is a string
  addTodo: function(todos, newTodo) {
    //Clones the array to keep the function pure
    let todoCopy = todoFunctions.cloneArrayOfObjects(todos);
    // use newTodo string to create an object
    let newTodoObj = todoFunctions.createTodo(newTodo);
    // adds the new todo object to array of todos
    todoCopy.push(newTodoObj);
    return todoCopy;
  },
  deleteTodo: function(todos, idToDelete) {
    //Clones the array to keep the function pure
    var cloneArr = todoFunctions.cloneArrayOfObjects(todos);
    //Returns array of objects with an id different to the input to delete id
    var filtered = cloneArr.filter(function(ele) {
      return ele.id !== idToDelete;
    });
    return filtered;
  },
  markTodo: function(todos, idToMark) {
    //Clones the array to keep the function pure
    let todoCopy = todoFunctions.cloneArrayOfObjects(todos);
    // finds the elements which was completed using the id
    elementDone = todoCopy.find(function(ele) {
      return ele.id === idToMark;
    });
    // toggle  'done' property on selected element
    elementDone.done = !elementDone.done;
    return todoCopy;
  },
  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  }
};

// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== "undefined") {
  module.exports = todoFunctions;
}
