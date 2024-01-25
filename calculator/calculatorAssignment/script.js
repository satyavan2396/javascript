const addButton=document.querySelector("#addition");
const substButton=document.querySelector("#substraction");
const multiButton=document.querySelector("#multiplication");
const diviButton=document.querySelector("#division");
const firstValue=document.querySelector("#firstValue");
const secondValue=document.querySelector("#secondvalue");
const resultValue=document.querySelector("#resultValue")
addButton.addEventListener('click',()=>{
    const valueOne=+firstValue.value;
    const valueTwo=+secondValue.value;
    const result=valueOne+valueTwo;
    resultValue.innerHTML=result;
    //console.log(`Addition of two number is :${valueOne+valueTwo}`);
})
substButton.addEventListener('click',()=>{
    const valueOne=+firstValue.value;
    const valueTwo=+secondValue.value;
    const result=valueOne-valueTwo;
    resultValue.innerHTML=result;
    //console.log(`Addition of two number is :${valueOne+valueTwo}`);
})
multiButton.addEventListener('click',()=>{
    const valueOne=+firstValue.value;
    const valueTwo=+secondValue.value;
    const result=valueOne*valueTwo;
    resultValue.innerHTML=result;
    //console.log(`Addition of two number is :${valueOne+valueTwo}`);
})
diviButton.addEventListener('click',()=>{
    const valueOne=+firstValue.value;
    const valueTwo=+secondValue.value;
    const result=valueOne/valueTwo;
    resultValue.innerHTML=result;
    //console.log(`Addition of two number is :${valueOne+valueTwo}`);
})