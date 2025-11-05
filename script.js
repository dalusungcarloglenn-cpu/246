// ✨ Eye-catching bubbles function — runs when page loads
function createFloatingBubbles() {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = 0;
  container.style.left = 0;
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.pointerEvents = "none";
  document.body.appendChild(container);

  for (let i = 0; i < 15; i++) {
    const bubble = document.createElement("div");
    bubble.style.position = "absolute";
    bubble.style.width = `${10 + Math.random() * 30}px`;
    bubble.style.height = bubble.style.width;
    bubble.style.borderRadius = "50%";
    bubble.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.top = "100%";
    bubble.style.opacity = 0.8;
    container.appendChild(bubble);

    // Animate upward
    const duration = 3000 + Math.random() * 2000;
    bubble.animate(
      [
        { transform: "translateY(0)", opacity: 0.8 },
        { transform: "translateY(-120vh)", opacity: 0 }
      ],
      { duration, easing: "ease-out" }
    );
  }

  // Remove after animation
  setTimeout(() => container.remove(), 5000);
}

// Run on load
window.addEventListener("load", () => {
  createFloatingBubbles();
});

// Export for Jest tests
module.exports = { createFloatingBubbles };
