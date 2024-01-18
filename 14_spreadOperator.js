let array=["jenny","Elon","bill","stew"]
console.log(array);
console.log(...array);
console.log(`================Rest parameter===========`);
function show(n1,n2,...arg){
    console.log(n1);
    console.log(n2);
console.log(arg);

}
show(10,20,30,40,50)