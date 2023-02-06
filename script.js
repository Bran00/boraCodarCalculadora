document.querySelectorAll("button[data-button]").forEach(item => {
  item.addEventListener("click", optionClickEvent)
}, {once : true});



let screenSelected = document.querySelector("#numbersSelected")
let screenResult = document.querySelector("#resultScreen > p") 

let number = 0;
let result = 0;
let negative = -1;
let operation;
let currentOperation = '';
let resets = ['=', '%', '+/-', 'CE', 'c']
let operations = ['+', '-', '*', '÷', ',']


function optionClickEvent(e) {
  let value = (e.target.getAttribute('data-button'))
  
  if(resets.includes(value)) {
  screenSelected.textContent;
  } else if(currentOperation === value) {
  screenSelected.textContent;
  }
  else {
  screenSelected.textContent += value
  }
  calc(value)
}


function calc(value) {
  if(value === '+') {
  operation = '+'
  result = (Number(number) + result)
  if(number == 0) {
    currentOperation = operation
  } else {
    currentOperation = ''
  }
  console.log(result )
  number = 0
} 

  else if(value === '-') {
  operation = '-'
  result = Number(result)
  number = Number(number)
  result = number - result
  if (result < number ) {
    result = result * (-1)
  }
  number = 0
}

  else if(value === 'x') {
  operation = 'x'
  console.log(result)
  if(result === 0) {
    result = 1
    number = Number(number)
    result = result * number
    number = 0;
  } else {
    number = Number(number)
    result = result * number
  }
  number = 0;
} 

  else if(value === '÷') {
  operation = '÷'
  if(result === 0) {
    result = Number(number);
    number = 0;
  } else {
    result = result / Number(number)
  }
  number = 0;
}

  else if(value === '=') {
  calc(operation)
  operation = ''
  screenSelected.textContent = result
}

  else if(value === '%') {
  operation = '%'
  result = Number(number) / 100;
  number = 0;
}
  else if(value === 'CE') {
  result = 0
  screenSelected.textContent = ''
  number = 0;
  operation = '';
}
  else if(value === 'c') {
  screenSelected.textContent = screenSelected.textContent.slice(0, -1);
  operation = ''
  number = 0;
  value = 0;
}

  else if(value === ',') {
  number = Number(res.value.tofixed(2));
}
  else if(value === '+/-') {
  operation = '+/-'
  result = Number(number) * negative;
}
  else if(Number(value) !== NaN){
   number += value
  }
  
  screenResult.textContent = result
}
