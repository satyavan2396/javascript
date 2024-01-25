const submitButton=document.querySelector("#addition")
const fieldOne=document.querySelector("#field-one")
const fieldTwo=document.querySelector("#field-two")
const resultValue=document.querySelector("#resultValue")
submitButton.addEventListener('click',()=>{
    const valueOne=+fieldOne.value;
    const valueTwo=+fieldTwo.value;
    const result=valueOne+valueTwo;
    resultValue.innerHTML=result;
    //console.log(`Addition of two number is :${valueOne+valueTwo}`);
})