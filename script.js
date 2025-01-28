// Append values to the display
function append(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Remove the last character (Backspace functionality)
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid Expression');
        clearDisplay();
    }
}

// Apply a mathematical function (sin, cos, tan, log, sqrt)
function applyFunction(func) {
    const display = document.getElementById('display');
    try {
        const value = parseFloat(display.value); // Convert the input to a number
        if (isNaN(value)) {
            alert('Please enter a valid number before applying the function.');
            return;
        }
        let result;
        switch (func) {
            case 'sin':
                result = Math.sin(value * (Math.PI / 180)); // Convert degrees to radians
                break;
            case 'cos':
                result = Math.cos(value * (Math.PI / 180)); // Convert degrees to radians
                break;
            case 'tan':
                result = Math.tan(value * (Math.PI / 180)); // Convert degrees to radians
                break;
            case 'log':
                if (value <= 0) {
                    alert('Logarithm is undefined for zero or negative numbers.');
                    return;
                }
                result = Math.log10(value); // Logarithm base 10
                break;
            case 'sqrt':
                if (value < 0) {
                    alert('Square root is not defined for negative numbers.');
                    return;
                }
                result = Math.sqrt(value); // Square root
                break;
            default:
                alert('Unknown function');
                return;
        }
        display.value = result; // Show the result in the display
    } catch (e) {
        alert('An error occurred while applying the function.');
        clearDisplay();
    }
}
