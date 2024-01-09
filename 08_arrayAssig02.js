const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`=================== step 1 ===================`);
let result=arrayNumbers.length;
console.log(`Total Number of elements avilable in the array is:${result}`);
console.log(`===================step 2 =========================`);
let firstElement=arrayNumbers[0];
console.log(`First element of given array is:${firstElement}`);
 let lastElement=arrayNumbers[arrayNumbers.length-1];
 console.log(`Lastvelement of given array is:${lastElement}`);
 console.log(`==================Step 3===================`);
  let lastthreeelements=arrayNumbers.splice(arrayNumbers.length-3);
  console.log(`Last three Element of given array is:${lastthreeelements}`);
  console.log(`====================step 4===================`);
  const array=[20,31,40,25,23,11,29,9,60,2,11];
  for (const index of array) {

    if (index%2==0) {
        console.log(index);
        
    }
  }
  console.log(`================step 5=================`);
  for (const element of array) {
    if (element%2==1) {
        console.log(element);
        
    }
  }
  console.log(`=================================step 6 ======================`);
  const array1=[20,31,40,25,23,11,29,9,60,2,11]
  let sum=0;
  for (const index in array1) {
    if (index%2==0) {
   sum=sum+ array1[index]
    }
  }
console.log(`Sum of all even positioned number is:${sum}`);
console.log(`================================step 7===================`);
let result1=0;
for (const index in array1) {
if (index%2==1) {
  result1=result1+array1[index]
}

}
console.log(`Sum of all odd positioned number is:${result1}`);
console.log(`====================step 8 ========================`);
let SumOfAll=0;
for (const index in array1) {
  SumOfAll=SumOfAll+array1[index];
}
console.log(`Sum of all Numbers avilable in array is:${SumOfAll}`);
console.log(`=================step 9=================`);
const newarray=[20,31,40,25,23,11,29,9,60,2,11];
let allElements=[];
for (let index = 0; index < newarray.length; index++) {
  if (newarray[index]%5==0) {
    allElements.push(newarray[index])
  }
  
}
console.log(`The all elements which are multiple of 5 are:${allElements}`);
console.log(`=======================step 10======================`);
console.log(`Is nuber 115 avilable in array:${newarray.includes(115)}`);
console.log(`=========================step 11==================`);
console.log(`Is nuber 23 avilable in array:${newarray.includes(23)}`);
console.log(`==================Step12==========================`);
newarray.splice(3,0,55,66);
console.log(`After adding 55 and 66 at index 3 array is :${newarray}`);
console.log(`========================step13===================`);
newarray.splice(4,3);
console.log(`Delete 3 elements strating index 3 then given array is:${newarray}`);
console.log(`=================Thank You==================`);



