
 var globalVariable=100;
 function outerFun(){
    let outerFunVariable=200;
    let innerFun=function(){
let innerFunvariable=300;
console.log(innerFunvariable);
console.log(outerFunVariable);
console.log(globalVariable);
    }
    return innerFun;
 }
 let result=outerFun();
 result();