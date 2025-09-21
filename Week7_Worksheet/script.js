// Part 2: JavaScript Functions (Scope, Parameters, Return)
function addNumbers(a, b) {
  // Demonstrating local vs global scope
  let sum = a + b; // local variable
  return sum;
}

function showSum(x, y) {
  let result = addNumbers(x, y);
  document.getElementById("sumResult").innerText =
    `The sum of ${x} and ${y} is: ${result}`;
}

// Part 3: Combine CSS + JS
const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

animateBtn.addEventListener("click", () => {
  jsBox.classList.toggle("animate"); // Trigger CSS animation
});

// Modal Example
const modalBtn = document.getElementById("modalBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
