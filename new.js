// Select the input box where results will be displayed
const inputBox = document.getElementById("inputBox");

// Function to update the input value with the button press
function addToInput(value) {
    inputBox.value += value;
}

// Function to clear the input box (AC button)
function clearInput() {
    inputBox.value = '';
}

// Function to delete the last character (DEL button)
function deleteLast() {
    inputBox.value = inputBox.value.slice(0, -1);
}

// Function to evaluate the expression in the input box
function calculateResult() {
    try {
        // Replace division and multiplication symbols
        let expression = inputBox.value.replace('÷', '/').replace('x', '*');
        inputBox.value = eval(expression);
    } catch (e) {
        inputBox.value = 'Error';
    }
}

// Event listeners for number and operator buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === '=') {
            calculateResult();
        } else if (button.innerText === 'π') {
            addToInput(Math.PI);
        } else {
            addToInput(button.innerText);
        }
    });
});

// Event listeners for the DEL and AC buttons (corrected class: 'funct')
document.querySelectorAll('.funct').forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === 'AC') {
            clearInput();
        } else if (button.innerText === 'DEL') {
            deleteLast();
        }
    });
});
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

// Function to handle scientific operations
document.querySelectorAll('.function').forEach(button => {
    button.addEventListener('click', () => {
        let operation = button.innerText.trim();
        let inputVal = parseFloat(inputBox.value) || 0;

        switch (operation) 
        {
            case 'Abs':
                inputBox.value = Math.abs(inputVal);
                break;
            case 'x³':
                inputBox.value = Math.pow(inputVal, 3);
                break;
            case 'x²':
                inputBox.value = Math.pow(inputVal, 2);
                break;
            case '√':
                inputBox.value = Math.sqrt(inputVal);
                break;
            case 'ln':
                inputBox.value = Math.log(inputVal);
                break;
            case 'log10':
                inputBox.value = Math.log10(inputVal);
                break;
            case 'exp':
                inputBox.value = Math.exp(inputVal);
                break;
            case 'sin':
                inputBox.value = Math.sin(inputVal);
                break;
            case 'cos':
                inputBox.value = Math.cos(inputVal);
                break;
            case 'tan':
                inputBox.value = Math.tan(inputVal);
                break;
            case 'x/y':
                // This will need custom logic for two inputs
                inputBox.value += '/';
                break;
            case 'x⁻¹':
                inputBox.value = Math.pow(inputVal, -1);
                break;
            case 'sinh':
                inputBox.value = Math.sinh(inputVal);
                break;
            case 'cosh':
                inputBox.value = Math.cosh(inputVal);
                break;
            case 'tanh':
                inputBox.value = Math.tanh(inputVal);
                break;
            case 'x!':  // Handle factorial
                let num = parseInt(screen.value);  // Convert screen value to integer
                content = factorial(num);  // Compute factorial
                break;
            default:
                break;
        }
    });
});
