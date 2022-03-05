const display = document.querySelector('.display');
display.value = '';

const buttonvalue = document.querySelectorAll('.numbers');

const operators = document.querySelectorAll('.operators');

let operatorStore;
let nextvalue = '';
let currentValue = 0;
let displayvalue = '';

const value = buttonvalue.forEach((number)=>
{
    number.addEventListener('click', ()=>{
        const getvalue = number.value;
        check();
        const store = Number(getvalue);
        // // console.log(store);
        // // display.value = 0;
        // // display.value += store;
        // // console.log(display.value);
        // displayvalue += getvalue;
        display.innerHTML += store;
        nextvalue += toString(store);
        // // display.value += toString(store);
        
        // console.log(displayvalue);
    })
})



const processing = operators.forEach((operator)=>{
    operator.addEventListener('click', ()=>{
        operator.classList.add('active');
        console.log(operators);
        if (operator.value == '+') {
           
            nextvalue = Number(nextvalue);
            display.innerHTML = currentValue;
            currentValue += Number(displayvalue);
            display.innerhtml
            operatorStore = '+';
               
            // add(temp, display);   
        }
    })
})
console.log(display);

function check() {
    operators.forEach((element) =>{
       if(element.classList.contains('active')){
           console.log('true');
           element.classList.remove('active')
       }
       else console.log('false');
    });
}

function add(a,b){
    display.textContent = ''

    let sum = +a+b;   
}

function substract(a,b) {
    return a-b;
}
console.log(buttonvalue);
console.log(value)