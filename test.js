const todoFunctions = require("./logic.js");

describe("AddTodo tests", () => {
  test("Create new todo", () => {
    const newTodo = "first todo";
    expect(todoFunctions.createTodo(newTodo)).toEqual({
      id: 1,
      description: "first todo",
      done: false
    });
  });

  test("Add new todo", () => {
    const todos = [
      { id: -3, description: "first todo" },
      { id: -2, description: "second todo" },
      { id: -1, description: "third todo" }
    ];
    const newTodo = "fourth todo";
    expect(todoFunctions.createTodo(newTodo)).toEqual({
      description: "fourth todo",
      done: false,
      id: 2
    });
  });

  test("Original todo doesn't change", () => {
    const todos = [
      { id: -3, description: "first todo" },
      { id: -2, description: "second todo" },
      { id: -1, description: "third todo" }
    ];
    const todoCopy = [
      { id: -3, description: "first todo" },
      { id: -2, description: "second todo" },
      { id: -1, description: "third todo" }
    ];
    const newTodo = "fourth todo";
    expect(todoFunctions.addTodo(todoCopy, newTodo)).not.toEqual(todos);
  });

  test("Add id to newTodo", () => {
    const newTodo = todoFunctions.createTodo("new todo");
    expect(typeof newTodo.id).toBe("number");
  });

  test("Check the status of Done", () => {
    const newTodo = todoFunctions.createTodo("new todo");
    expect(newTodo.done).toBe(false);
  });
});
