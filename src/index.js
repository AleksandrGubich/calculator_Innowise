import './style.css';
import './themes.css';

let screen = document.getElementById('screen');
let numBtn = document.querySelectorAll('.numBtn');
let clear = document.querySelector('.clear');
let changeSymb = document.querySelector('.changeSymb');
let percentage = document.querySelector('.percentage');
let operator = document.querySelectorAll('.operator');
let decimal = document.querySelector('.decimal');
let eqSymbol = document.querySelector('.eqSymbol');
let changeThemeBtn = document.querySelector('.changeTheme');

let firstNum = '';
let secondNum = '';
let operatorSymbol = '';
let isCalculated = false;

numBtn.forEach((button) => {
  button.addEventListener('click', () => {
    if (isCalculated) {
      screen.value = '';
      isCalculated = false;
    }

    screen.value += button.textContent;
  });
});

operator.forEach((button) => {
  button.addEventListener('click', () => {
    if (operatorSymbol && screen.value !== '') {
      secondNum = screen.value;
      firstNum = calculate(firstNum, secondNum, operatorSymbol);
      screen.value = firstNum;
      secondNum = '';
    } else {
      firstNum = screen.value;
    }

    operatorSymbol = button.textContent;
    screen.value = '';
    isCalculated = false;
  });
});

eqSymbol.addEventListener('click', () => {
  if (firstNum && operatorSymbol) {
    secondNum = screen.value;
    const result = calculate(firstNum, secondNum, operatorSymbol);
    screen.value = result;
    firstNum = result;
    secondNum = '';
    operatorSymbol = '';
    isCalculated = true;
  }
});

function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case 'x':
      return num1 * num2;
    case '÷':
      return num2 !== 0 ? num1 / num2 : 'Ошибка';
    default:
      return num1;
  }
}

clear.addEventListener('click', () => {
  screen.value = '';
  firstNum = '';
  secondNum = '';
  operatorSymbol = '';
  isCalculated = false;
});

changeSymb.addEventListener('click', () => {
  screen.value = -screen.value;
});

percentage.addEventListener('click', () => {
  screen.value = screen.value / 100;
});

decimal.addEventListener('click', () => {
  // Если результат предыдущих вычислений, добавляем "0."
  if (isCalculated) {
    screen.value = firstNum + '.'; // Используем результат и добавляем точку
    isCalculated = false; // Сбрасываем флаг
  } else {
    // Добавляем точку, если её ещё нет в текущем числе
    if (!screen.value.includes('.')) {
      screen.value += '.';
    }
  }
});

function themeChanger() {
  const body = document.body;
  const screen = document.getElementById('screen');
  const buttons = document.querySelectorAll('.btns button');
  const calculator = document.querySelector('.calculator');

  if (body.classList.contains('darkTheme')) {
    body.classList.remove('darkTheme');
    body.classList.add('lightTheme');
    calculator.classList.remove('calcDark');
    calculator.classList.add('calcLight');
    screen.classList.remove('screenDark');
    screen.classList.add('screenLight');

    buttons.forEach((button) => {
      if (button.classList.contains('darkGrey')) {
        button.classList.remove('darkGrey');
        button.classList.add('darkGreyBright');
      }

      if (button.classList.contains('lightGrey')) {
        button.classList.remove('lightGrey');
        button.classList.add('lightGreyBright');
      }

      if (button.classList.contains('lightGreyLarge')) {
        button.classList.remove('lightGreyLarge');
        button.classList.add('lightGreyLargeBright');
      }

      if (button.classList.contains('lightOrange')) {
        button.classList.remove('lightOrangeBright');
        button.classList.add('lightOrangeBright');
      }
    });
  } else {
    body.classList.remove('lightTheme');
    body.classList.add('darkTheme');
    calculator.classList.remove('calcLight');
    calculator.classList.add('calcDark');
    screen.classList.remove('screenLight');
    screen.classList.add('screenDark');

    buttons.forEach((button) => {
      if (button.classList.contains('darkGreyBright')) {
        button.classList.remove('darkGreyBright');
        button.classList.add('darkGrey');
      }

      if (button.classList.contains('lightGreyBright')) {
        button.classList.remove('lightGreyBright');
        button.classList.add('lightGrey');
      }

      if (button.classList.contains('lightGreyLargeBright')) {
        button.classList.remove('lightGreyLargeBright');
        button.classList.add('lightGreyLarge');
      }
      if (button.classList.contains('lightOrangeBright')) {
        button.classList.remove('lightOrangeBright');
        button.classList.add('lightOrange');
      }
    });
  }
}

changeThemeBtn.addEventListener('click', themeChanger);
