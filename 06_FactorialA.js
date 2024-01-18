function factorialOfNum(num){
    if (num==0||num==null||num==undefined) {
        console.log(`Given number:${num} is Invalid`);
    }else{
let result=1;
for (let index = 1; index <=num; index++) {
    result=result*index;
    
}
console.log(`Factorial of given Number is:${num}====>${result}`);
    }

}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null)
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0)
