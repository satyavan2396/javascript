const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`================Step 1 ======================`);
let firstElement=fruits_seasonal[0]
console.log(`First Element Of Given array is:${firstElement}`);
let lastElement=fruits_seasonal[fruits_seasonal.length-1]
console.log(`Last Element Of Given array is:${lastElement}`);
console.log(`======================== Step 2 =============================`);
console.log(fruits_seasonal);
fruits_seasonal.unshift("Papaya");
console.log(`------------Adding elemnet before Banana---------------`);
console.log(fruits_seasonal);
console.log(`================step 3==================`);
const fruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits);
fruits.splice(3,1);
console.log(`-----------------Remove "Mango" from the array-----------------`);
console.log(fruits);
console.log(`====================step 4 ================`);
const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arrayFruits);
arrayFruits.push("Pineapple");
console.log(`--------------Add elemnt "pineapple to last of array"-------------`);
console.log(arrayFruits);
console.log(`================ step 5 =========================`);
const fruitsArray=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruitsArray);
fruitsArray.splice(4,0,"Dragon fruit");
console.log(`-------------------insert an Element "Dragon fruit"before water melon-------------------`);
console.log(fruitsArray);
console.log(`==========================step 6 =======================`);
const arrayFruits1=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arrayFruits1);
arrayFruits1.splice(1,0,"Kiwi")
console.log(`--------------Replace an element "orange" with "Kiwi"----------------`);
console.log(arrayFruits1);
console.log(`=======================step 7====================`);
 const fruit=["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(fruit);
 let sliceElement=fruit.slice(1,4)
 console.log(`Log the Elements Strarting from 1 to 4`);
 console.log(sliceElement);
 console.log(`===================step 8=====================`);
 const arrayFruits12=["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(arrayFruits12);
 let lastThreeElements=arrayFruits12.slice(arrayFruits12.length-3);
 console.log(`Last three Elements of array `);
 console.log(lastThreeElements);