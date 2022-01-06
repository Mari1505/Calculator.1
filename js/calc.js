const out = document.querySelector('.calc-screen_2');
const out_1 = document.querySelector('.calc-screen_1');
const numbersEl =  document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.ac');
const clearLastEl = document.querySelector('.ce');

let a = '';
let b = '';
let result = null;
let lastOperation = '';
let haveDot = false;


numbersEl.forEach( number => {
    number.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot){
            return;
        }
       b += e.target.innerText;
       out.innerText = b;
    })
});

operationEl.forEach( operation => {
    operation.addEventListener('click', (e) => {
      if (!b) result;
      haveDot = false;
      const operationName = e.target.innerText;
      if (a && b && lastOperation) {
          mathOperation();
      } else {
          result = parseFloat(b);
      }
      clearVar(operationName);
      lastOperation = operationName;
      console.log(result);
    })
});
function clearVar(name = '') {
    a += b+ ' ' + name + ' ';
    out_1.innerText = a;
    out.innerText = '';
    b = '';
};

function  mathOperation() {
    if (lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(b);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(b);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(b);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(b);   
    } else if (lastOperation === '%') {
        result =parseFloat(result) % parseFloat(b);
    }

};

equalEl.addEventListener('click', (e) => {
    if ( !a || !b ) return;
    haveDot = false;
    mathOperation();
    clearVar();
    out.innerText = result;
    b = result;
    a = '';
});
 

clearAllEl.addEventListener('click', (e) => {
    out_1.innerText = '0';
    out.innerText = '0';
    a = '';
    b = '';
    result = '';
});

clearLastEl.addEventListener('click', (e) => {
    out.innerText = '';
    b = '';
});
window.addEventListener('keydown', (e) => {
    if (
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.' 
        ){
        clickButtonEl(e.key);
    }else if (
        e.key === '+' ||
        e.key === '-' ||
        e.key === '%' ||
        e.key === '/'
    ){
        clickOperation(e.key);
    } else if (e.key === "*"){
        clickOperation('X');
    }else if( e.key == 'Enter' || e.key === "=") {
        clickEqual();
    }else if( e.key == 'Backspace' || e.key === 'ce') {
        clickClearLastEl();
    }
    
});

function clickButtonEl(key) {
    numbersEl.forEach( button => {
        if (button.innerText === key) {
            button.click();
        }
    })
};

function clickOperation(key) {
    operationEl.forEach( button => {
        if (button.innerText === key) {
            button.click();
        }
    })
};

function clickEqual(key) {
    equalEl.click();
};

function clickClearLastEl(key) {
    clearLastEl.click();
};
