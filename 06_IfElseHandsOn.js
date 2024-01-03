console.log(`=========================== Step 1 ==========================`);
var evenOdd=function(num){
    var num;
   // console.log(`Given Number is ${num}`);
    if (num%2==0) {
        console.log(`Given number is ${num} Number is Even`);
    } else {
        console.log(`Given Number is ${num} Number is Odd`);
    }

}
evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);
console.log(`============================= step 2 =================================`);
var eligibleVote=function(age){
if (age>=18 ) {
    console.log(`Age is:${age} You are eligible for Vote`);
} else {
    console.log(`Age is:${age} You are not Eligible For Vote`);
}
}
eligibleVote(18);
eligibleVote(20);
eligibleVote(17);
eligibleVote(40);
console.log(`================================== step 3 ===============================`);
var check=function(str){
    var result=str.length;
    if (result>10) 
    {
    console.log(`Given String length is: ${result} contains 10 character`);    
    }
else{
    console.log(`Given string not contain 10 Character`);
}
}
check("Javascript-ES6");
console.log(`=========================== step 4 ====================================`);
var checkstart=function(Word){
    if (Word.startsWith("Java")) {
        console.log(`Given word is:${Word} starts with "Java"`);
    } else {
        console.log(`Given Word is :${Word} does not start with "Java"`);
    }

}
checkstart("Javascript Language")