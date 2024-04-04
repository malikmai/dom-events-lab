document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll(".button");

  let currentInput = "";
  let result = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.textContent;

      if (value === "C") {
        clearDisplay();
      } else if (value === "=") {
        evaluateExpression();
      } else if (isOperator(value)) { // learned from ChatGPT, isOperator is a function used to check if a given character is an operator (+,-,*,/)
        handleOperator(value); // learned from ChatGPT, handleOperator is responsible for (-,+,*,/) buttons.
      } else {
        updateInput(value);
      }
    });
  });

  function clearDisplay() {
    currentInput = "";
    result = "";
    display.textContent = "0";
  }

  function evaluateExpression() { // learned from ChatGPT, "try-catch" tries to catch potential errors during eval
    try {
      result = eval(currentInput);
      display.textContent = result;
      currentInput = result.toString();
    } catch (error) {
      display.textContent = "Error";
    }
  }

  function updateInput(value) {
    currentInput += value;
    display.textContent = currentInput;
  }

  function isOperator(value) {
    return value === "+" || value === "-" || value === "*" || value === "/";
  }

  function handleOperator(value) {
    const lastInput = currentInput.slice(-1);
    if (isOperator(lastInput)) {
      currentInput = currentInput.slice(0, -1) + value;
    } else {
      currentInput += value;
    }
    display.textContent = currentInput;
  }
});
