const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601]
console.log(`=============step1==============`);
arrayNumbers.forEach((currentValue,index)=>{
    console.log(`Value:${currentValue},Index is:${index}`);
});
console.log(`================step2==============`);
arrayNumbers.forEach((value)=>{
    if (value>0) {
        console.log(`Positive value is:${value}`);
    }
});
console.log(`============step3===============`);
const array=[]
arrayNumbers.forEach((element)=>{
if (element<0) {
    array.push(element);
}
})
console.log(array);
console.log(`=============step4===============`);
arrayNumbers.forEach((element)=>{
    if (element%2==0) {
    
        console.log(element);
    }
})
console.log(`===================step5=============`);
const sumofarrayelement=arrayNumbers.reduce((rt,element)=>{
    return rt+element;
})
console.log(`Sum of array element:${sumofarrayelement}`);
console.log(`==============step6===============`);
arrayNumbers.forEach((element,index)=>{
    if (index%2==0) {
        console.log(element);
        
    }
})