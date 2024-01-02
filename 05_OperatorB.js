console.log(`========================step1========================`);
function greaterNumber(num1,num2){
console.log(`"Given Number is":${num1} and ${num2}`);
var result=(num1>num2)?num1:num2;
console.log(`Gratest Number is :${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899)
console.log(`=========================step2========================`);
function isEvenOrOdd(num){
console.log(`Given number is: ${num}`);
  return result=(num%2==0)?(`Given number is Even`):(`Given number is Odd`);    

}
var result= isEvenOrOdd(29);
console.log(`${result}`);
var result= isEvenOrOdd(44);
console.log(`${result}`);
var result= isEvenOrOdd(0);
console.log(`${result}`);
var result= isEvenOrOdd(101);
console.log(`${result}`);
console.log(`======================step3===========================`);
function wordLength(str){
console.log(`Given Word is:${str}`);
var result=str.length;
console.log(`Given Word length is:${result}`);
return res=(result%2==0)?(`Given Word is EVEN`):(`Given Word is ODD`);
}
var evenOdd=wordLength("Javascript")
console.log(evenOdd);
var evenOdd=wordLength("developer")
console.log(evenOdd);
var evenOdd=wordLength("Google")
console.log(evenOdd);