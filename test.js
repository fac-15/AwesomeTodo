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
    expect(todoFunctions.deleteTodo(testObject, -2)).toBe([
      { id: -3, description: "first todo" },
      { id: -1, description: "third todo" }
    ]);
  });

  test("Original array shouldn't be changed", () => {
    expect(testObject.length).toBe(3);
  });
});
