const { createFloatingBubbles } = require("../script.js");

test("bubbles container should exist after running", () => {
  document.body.innerHTML = "";
  createFloatingBubbles();
  const container = document.querySelector("div");
  expect(container).not.toBeNull();
});

// ❌ Deliberately failing test
test("bubbles count should be 50", () => {
  document.body.innerHTML = "";
  createFloatingBubbles();
  const bubbles = document.querySelectorAll("div div");
  expect(bubbles.length).toBe(50); // wrong on purpose
});
