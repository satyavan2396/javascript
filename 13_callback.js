
function jenny(callback){
console.log(`after session ....jeny strated homework`);
console.log(`Jenny completed all steps`);
console.log(`Then she is redy to callback Bill`);
callback();
}
let bill=function(){
console.log(`I am bill and I am going to play cricket`);
console.log(`i know Jenny likes me,hence once she complete her homework`);
console.log(`She will difenitely call back me...`);
console.log(`Then I will copy all assignement as It is.....`);
}
jenny(bill);

let greet=function(){
    console.log(`Hey ...... Good Morning.......`);

}
setTimeout(greet, 3000);
let result=setInterval(greet, 3000);
clearInterval(result)