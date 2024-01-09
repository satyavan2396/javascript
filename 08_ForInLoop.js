let array=[11,22,33,44,55,66,77]
console.log(`============traversing array using for in loop================`);
let sum=0;
for (const index in array) {
    console.log(array[index]);
    sum=sum+array[index];
}
console.log(`Sum of array element is:${sum}`);

let arrayNum = [4, 5, 6, 7, 3]
let sum1=0;
console.log(`Traversing an array using for of loop..`);

for (const element of arrayNum) {

   sum1=sum1+element;

}
console.log(`Sum of array element is :${sum1}`);
console.log(`===========WAP to count vowels from given string================`);
const str="Developer UI and Backend";
const vowels="aeiou";
let count=0
for (const char of str) {
    console.log(char);
    if (vowels.includes(char.toLocaleLowerCase())) {
        count++;
    }
}
console.log(`vowels count is:${count}`);

let arrayOfFriends = ["Jenny", "Elon", "Bill"];

const result = arrayOfFriends.join(",");

console.log(typeof result);

console.log(result);
arrayOfFriends.reverse();

console.log(arrayOfFriends);

 

const word = "Developer UI and Backend";

const arrayOfWords = word.split(" ");

console.log(arrayOfWords.length);

 const reverseStr = word.split("").reverse().join("");

console.log(reverseStr);