function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    // Evaluate the expression
    display.value = eval(display.value);
  } catch (error) {
    // Handle any errors
    display.value = "Error";
  }
}
