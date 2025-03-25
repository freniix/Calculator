const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const plus = document.getElementById('addition');
const minus = document.getElementById('minus');
const div = document.getElementById('division');
const multiply = document.getElementById('multiply');
const equal = document.getElementById('equal');
const del = document.getElementById("del")
const decimal = document.getElementById('decimal')
const input = document.getElementById('input')
const clear = document.getElementById('clear')
let num1, num2, add, sub, mul, divide;
const numbers= [zero, one, two, three, four, five, six, seven, eight, nine];
function addchar(char){
    input.value +=char;
}

numbers.forEach((button, index) => {
    button.addEventListener('click', ()=>addchar(index))
});
del.addEventListener('click', ()=>{
    input.value = input.value.slice(0,-1)
})
decimal.addEventListener('click', ()=>addchar("."))


plus.addEventListener('click', ()=>{
    num1 = input.value
    input.value =''
    add++;
})
minus.addEventListener('click', ()=>{
    num1 = input.value 
    input.value = ''
    sub++;
})
div.addEventListener('click', ()=>{
    num1 = input.value 
    input.value = ''
    divide++;
})
multiply.addEventListener('click', ()=>{
    num1 = input.value 
    input.value = ''
    mul++;
})
clear.addEventListener('click', ()=>{
    input.value=''
    add=0;
    sub=0;
    divide=0;
    mul=0;
    num1=0;
    num2=0;
})
equal.addEventListener('click', ()=>{
    if(add ==1){
    num2 = input.value 
    input.value = ''
    input.value = parseInt(num1) + parseInt(num2)
    num1=0;
    num2=0;
    add--;
    }else if(sub ==1){
        num2 = input.value 
        input.value = ''
        input.value = parseInt(num1) - parseInt(num2)
        num1=0;
        num2=0;
        sub--;
        
    }else if(divide==1){
        num2 = input.value 
        input.value = ''
        input.value = parseInt(num1) / parseInt(num2)
        num1=0;
        num2=0;
        divide--;
        
    }else if(mul == 1){
        num2 = input.value 
        input.value = ''
        input.value = parseInt(num1) * parseInt(num2)
        num1=0;
        num2=0;
        mul--;

    }
})