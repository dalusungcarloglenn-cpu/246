const { createFloatingBubbles } = require("../script.js");

beforeAll(() => {
  Element.prototype.animate = () => ({});
});

beforeEach(() => {
  document.body.innerHTML = "";
});

test("bubbles container should exist after running", () => {
  createFloatingBubbles();
  const container = document.querySelector(".bubbles-container");
  expect(container).not.toBeNull();
});

test("bubbles count should be 50", () => {
  createFloatingBubbles();
  const bubbles = document.querySelectorAll(".bubble");
  expect(bubbles.length).toBe(50);
});

// 💥 Intentional failing test
test("bubbles should NOT exist (intentional fail)", () => {
  document.body.innerHTML = "";
  createFloatingBubbles();
  const bubbles = document.querySelectorAll(".bubble");
  expect(bubbles.length).toBe(0); // ❌ Expected 0, got 50
});
