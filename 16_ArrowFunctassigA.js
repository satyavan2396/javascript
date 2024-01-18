console.log(`============Step1====================`);
const show=()=>{
console.log(`Good morning , Today is Thursday`);
}
show();
console.log(`============Step2====================`);
const multiply=(n1,n2,n3=1)=>{
const result=n1*n2*n3;
console.log(`Multiplication Of given three Numbers ${n1},${n2},${n3} is:${result}`);
}
multiply(5,5,2);
multiply(10,4)
console.log(`============Step3====================`);
const add=(num1,num2,num3,num4,num5)=>{
return num1+num2+num3+num4+num5;
}
const res= add(100,100,200,349,756)
console.log(`addition of given 5 Number is:${res}`);
const str=add("I am"," learning ","ES6 ","features ","in depth ")
console.log(`addition of given 5 string value is:${str}`);