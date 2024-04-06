let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperator(operator) {
    displayValue += ` ${operator} `;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}