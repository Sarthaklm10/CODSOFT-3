// Function to clear the input field
function clearResult() {
    document.getElementById('result').value = '';
}

// Function to delete the last character
function deleteLast() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

// Function to append a value to the input field
function append(value) {
    document.getElementById('result').value += value;
}

// Function to evaluate the expression
function calculate() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}

// Function to handle keypress events
function handleKeyPress(event) {
    const key = event.key;

    if (!isNaN(key) || key === '.') {
        append(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        append(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearResult();
    } else if (key === '%') {
        append('%');
    }
}

// Add event listener for keydown events
document.addEventListener('keydown', handleKeyPress);
