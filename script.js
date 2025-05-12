const calculatorScreen = document.getElementById('result');
let currentInput = '';
let previousInput = '';
let operator = '';

document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () => {
    currentInput += button.dataset.number;
    updateScreen();
  });
});

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    operator = button.dataset.operator;
    previousInput = currentInput;
    currentInput = '';
    updateScreen();
  });
});

document.querySelector('.decimal').addEventListener('click', () => {
  if (!currentInput.includes('.')) currentInput += '.';
  updateScreen();
});

document.querySelector('.equal-sign').addEventListener('click', () => {
  if (currentInput === '' || previousInput === '') return;
  calculate();
  updateScreen();
  previousInput = '';
  operator = '';
});

document.getElementById('clear').addEventListener('click', () => {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateScreen();
});

function calculate() {
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current !== 0 ? prev / current : 'Error';
      break;
    default:
      return;
  }
  currentInput = result.toString();
}

function updateScreen() {
  calculatorScreen.value = currentInput;
}
