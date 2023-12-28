console.log("--------------step1----------------------");
function sqare(n1) {
    console.log("Given number is:",n1);
    var result=n1*n1;
    console.log("SQUARE  is:",result);
}
sqare(9);
sqare(10);
console.log("--------------step2----------------------");
function mul(n1,n2,n3){
console.log("Given number is:",n1,n2,n3);
var result=n1*n2*n3;
return result

}
var result=mul(5,5,3);
console.log("Multiplication of given number is:",result);
var result=mul(34,56,89);
console.log("Multiplication of given number is:",result);
console.log("--------------step3----------------------");
function swap(n1,n2){
console.log("Before swap-->",n1,n2);
var temp=n1;
n1=n2;
n2=temp;
console.log("After swap--->",n1,n2);
}
swap(100,200);
swap("satyavan","shejal")