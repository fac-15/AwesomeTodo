const todoFunctions = require("./logic");
let testObject = [
  { id: -3, description: "first todo" },
  { id: -2, description: "second todo" },
  { id: -1, description: "third todo" }
];

test("GenerateId returns 1 on first run", () => {
  expect(todoFunctions.generateId()).toBe(1);
});

describe("Delete tests", () => {
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
    console.log(testVar);
    expect(testVar).toBe(undefined);
  });
});
