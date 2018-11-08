const todoFunctions = require("./logic");

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

describe("Delete tests", () => {
  let testObject = [
    { id: -3, description: "first todo" },
    { id: -2, description: "second todo" },
    { id: -1, description: "third todo" }
  ];
  test("Should delete the to do with an index of -2", () => {
    expect(todoFunctions.deleteTodo(testObject, -2)).toEqual([
      { id: -3, description: "first todo" },
      { id: -1, description: "third todo" }
    ]);
  });

  test("Original array shouldn't be changed", () => {
    expect(testObject.length).toBe(3);
  });

  test("Correct element has been removed", () => {
    testObject = todoFunctions.deleteTodo(testObject, -2);

    var testVar = testObject.find(function(ele) {
      return ele.id === -2;
    });
    expect(testVar).toBe(undefined);
  });
});

describe("Mark Todo tests", () => {
  let testObject = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: false }
  ];
  test("Function should not change initial input array", () => {
    expect(todoFunctions.markTodo(testObject, -1)).not.toEqual(testObject);
  });
  test("Done value was changed", () => {
    testObject = todoFunctions.markTodo(testObject, -1);
    console.log(testObject);
    testObject2 = testObject.find(function(ele) {
      return ele.id === -2;
    });
    console.log(testObject2);
    expect(testObject.done).toBe(false);
  });
});
