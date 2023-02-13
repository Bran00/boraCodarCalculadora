document.querySelectorAll("button[data-button]").forEach(item => {
  item.addEventListener("click", optionClickEvent)
});



let screenSelected = document.querySelector("#numbersSelected")
let screenResult = document.querySelector("#resultScreen > p") 
let screenOperation = document.querySelector("#operation") 

let number = 0;
let result = 0;
let negative = -1;
let operation;
let point = '';
let currentOperation = '';
let resets = ['+/-', 'c', 'CE']
let operations = ['+', '-', 'x', '÷', '=', '%']


function optionClickEvent(e) {
  let value = (e.target.getAttribute('data-button'))
  
  if(resets.includes(value)) {
   screenOperation;
  } else if(value === point) {
    screenOperation.textContent;
  } else if(operations.includes(value)) {
    screenOperation.textContent = value
    screenSelected.textContent = ''
    point = ''
  } else if (number !== NaN){
    screenSelected.textContent += value
  }
  calc(value)
}


function calc(value) {
  if(value === '+') {
  operation = '+'
  result = Number(number) + Number(result)
  number = 0
  
} 

  else if(value === '-') {
  operation = '-'
  number = Number(number)
  result = Number(result)
  if(result === 0) {
  result = number
  } else if( result === 0 && operation !== '') {
  result = number * (-1)
  } else if( result !== 0 ) {
    result = result - number
  }
  number = 0
}

  else if(value === 'x') {
  operation = 'x'
  if(result === 0) {
    result = 1
    number = Number(number)
    result = result * number
    number = 0;
  } else if(result !== 0 && number !== 0) {
    number = Number(number)
    result = result * number
    number = 0;
  }
} 

  else if(value === '÷') {
  operation = '÷'
  if(result === 0) {
    result = Number(number);
  } else if(number === 0) {
    result = result
  } else {
    result = result / number
    if(result === Infinity) {
      alert("Valor Infinito")
    }
  }
  number = 0;
}

  else if(value === '=') {
  calc(operation)
  operation = ' '
}

  else if(value === '%') {
  operation = '%'
  result = Number(number) / 100;
  number = 0;
}
  else if(value === 'CE') {
  result = 0
  screenOperation.textContent = '='
  screenSelected.textContent = ''
  number = 0;
  operation = '=';
  point = '';
}

  else if(value === 'c') {
  screenSelected.textContent = screenSelected.textContent.slice(0, -1);
  number = number.slice(0, -1);
  value = 0;
}

  else if(value === '.') {
  point = value
  number += value
}

  else if(value === '+/-') {
  operation = '+/-'
  result = Number(number) * negative;
  number = 0
}
  else if(Number(value) !== NaN){
   number += value
} 
  screenResult.textContent = result
}
