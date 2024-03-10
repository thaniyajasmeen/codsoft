let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("result").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("result").value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById("result").value = displayValue;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
// Rest of your JavaScript code

const buttonLabels = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "C", "0", "=", "+" // Added backspace button
  ];
  
  // Function to generate buttons
  function generateButtons() {
    const buttonsContainer = document.querySelector(".buttons");
    buttonLabels.forEach(label => {
      const button = document.createElement("button");
      button.textContent = label;
      button.className = "button";
      button.addEventListener("click", () => handleButtonClick(label));
      buttonsContainer.appendChild(button);
    });
  }
  
  // Function to handle button clicks
  function handleButtonClick(label) {
    if (label === "=") {
      calculate();
    } else if (label === "C") {
      clearDisplay();
    } else if (label === "←") {
      eraseCharacter();
    } else {
      appendToDisplay(label);
    }
  }
  
  // Function to erase a character from the display
  function eraseCharacter() {
    if (displayValue.length > 0) {
      displayValue = displayValue.slice(0, -1);
      document.getElementById("result").value = displayValue;
    }
  }
  
  // Call the function to generate buttons when the page loads
  window.addEventListener("load", generateButtons);
  