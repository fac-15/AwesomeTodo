const todoFunctions = require("./logic.js");

test("adds 1 + 2 to equal 3", () => {
  expect(1).toBe(1);
});

test("1 will be 1", () => {
  expect(todoFunctions.generateId()).toBe(1);
});

test("Adding new todo", () => {
  const todos = [1, 2, 3];
  const newTodo = 4;
  expect(todoFunctions.addTodo(todos, newTodo)).toEqual([1, 2, 3, 4]);
});

test("Adding new todo", () => {
  const todos = [
    { id: 0, description: "zero todo", done: true },
    { id: 1, description: "first todo", done: false },
    { id: 2, description: "second todo", done: false }
  ];
  const newTodo = {
    id: 3,
    description: "third todo",
    done: true
  };
  expect(todoFunctions.addTodo(todos, newTodo)).toEqual([
    { id: 0, description: "zero todo", done: true },
    { id: 1, description: "first todo", done: false },
    { id: 2, description: "second todo", done: false },
    {
      id: 3,
      description: "third todo",
      done: true
    }
  ]);
});
