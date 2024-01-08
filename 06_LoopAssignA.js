console.log(`1.Count The Total numbers Of Vowels including small and captial voweles for using For loop `);
function countVowels(str){
    let count=0;
    for (let index = 0; index <str.length; index++) {
        let ch=str.charAt(index);
        if (ch=="a"||ch=="e"|| ch=="i"||ch=="o"||ch=="u"||ch=="A"||ch=="E"||ch=="I"||ch=="O"||ch=="U") {
           
         count=count+1;
         
        }
        
    }
    console.log(`Total number of vowels:${count}`);

}
countVowels("I am very good IT developer");
console.log(`2.Write a Function to get the sum of cube of numbers from 1 to 5`);

function cubeOfSum(){
    let sum=0;
for (let index = 1; index<=5; index++) {
    sum=sum+(index*index*index);
    }
console.log(`Cube of Numbers From 1 to 5 is:${sum}`);
}
cubeOfSum();
console.log(`=====================Step 3 ============================`);
function oddPositionedChars(word){
for (let index = 0; index <word.length; index++) {
   let char= word.charAt(index);
   if (index%2==1 && char!="") {
    console.log(word.charAt(index));
    
   }
    
}
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be UI IT Champ")