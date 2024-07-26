// Get the display element
const display = document.getElementById('result');

// Function to append characters to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to calculate the result
function calculate() {
    try {
        // Use eval() to calculate the result
        // Note: eval() can be dangerous if used with user input, but it's okay for this simple calculator
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to calculate the square of a number
function calculateSquare() {
    try {
        const number = parseFloat(display.value);
        display.value = number * number;
    } catch (error) {
        display.value = 'Error';
    }
}

// Add event listener for keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Prevent the default action for certain keys
    if (key === 'Enter' || key === 'Escape' || key === '=' || key === 'Backspace') {
        event.preventDefault();
    }
    
    // Check if the pressed key is a number, operator, or special key
    if (/[\d+\-*/.%]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '^') {
        calculateSquare();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
});

// Focus on the display input when the page loads
window.onload = function() {
    display.focus();
};
