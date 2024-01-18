 const array=[11,3,4,11,4,7,3];
// console.log(array);
// //using filter function
// console.log(`==============using Filter method==============`);
// function removeDuplicate(array){
// return array.filter((el,index)=>array.indexOf(el)===index);
// }
// let result=removeDuplicate(array);

// console.log(result);
//using for loop
console.log(`============Using forEach loop============`);
function uniqueElement(array){
    console.log(`Original array:${array}`);
let unique=[];
array.forEach(element => {
    if (!unique.includes(element)) {
        unique.push(element)
    }
});
return unique;
}
 let res=uniqueElement(array);
 console.log(`After Removing duplicate element from array :${res}`);

 let str="How are you mate";
 function convertFirstLastCharInCap(str){
let words=str.split(" ");
let result=[];
for (let word of words) {
    if (word.length>1) {
        word=word[0].toUpperCase()+word.slice(1,-1)+word[word.length-1].toUpperCase();
        
    }else{
        word=word.toUpperCase()
    }
    result.push(word);
}
return result.join(" ");
 }
console.log(convertFirstLastCharInCap(str)); 