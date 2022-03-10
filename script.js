
//getting all the operators, numbers and functionalities from html document

const screen = document.querySelector('.display')
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const upperdisplay = document.querySelector('.display1');

//variables to store values throughOut the operation
let currentValue  = 0;
let nextValue;
let storeValue;
let StringValue = '';
let NumberValue ;

screen.innerHTML = currentValue;
//when user clicks a number
    numbers.forEach((number) => {
    number.addEventListener('click', ()=>{
    number.classList.add('active');
    if (operatorsActive()==false) {
        screen.innerHTML = currentValue;
        upperdisplay.innerHTML += number.value;
        StringValue += number.value;
        nextValue = Number(StringValue)
    }
    else {
        buttonDisabled();
        upperdisplay.innerHTML += number.value;
        StringValue += number.value;
        nextValue = Number(StringValue)
    }
    }) 
});
operators.forEach((operator)=>
{
    operator.addEventListener('click', ()=>{
        operator.classList.add('active');
        if (operator.value == '+') {
            operator.disabled = true;
            upperdisplay.append(operator.value);
             add(currentValue, nextValue);
             StringValue = '';
            screen.innerHTML = null;
            screen.innerHTML = `${currentValue}`;
        }
        else if (operator.value == '-') {
            console.log(operator.value);
        }
        else if (operator.value== '*' ) {
            console.log(operator.value);
        }
        else 
        console.log(operator.value);
    })
});
//when user clicks clear
const cleared = clear.addEventListener('click', ()=>
screen.innerHTML = '')
//when user clicks equals
//function to get number
function getInputIftrue()
    {
        numbers.forEach(number => {
        number.addEventListener('click', ()=>{
        return number.value;
    })
});
}
function add(a,b) {
    currentValue = (+a+b);
    return +a+b;
}

function substract(a,b) {
    return a-b;
}


function operatorsActive(){
   return document.querySelector('.operators.active')!=null; 
}

function buttonDisabled(){
    operators.forEach((button)=>{
        button.disabled = false;
    })
}
