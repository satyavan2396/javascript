const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19]
console.log(`==================step1============`);
const newarray=arrayNumbers.map((element)=>{
   return element+10;
})
console.log(`Orginal Array:${arrayNumbers}`);
console.log(`after adding 10 value in each element in array :${newarray}`);
console.log(`===============step2=============`);
const cubeOfArray= arrayNumbers.map((element)=>{
 return element*element*element;
})
console.log(`Cube of each element:${cubeOfArray}`);
console.log(`====================step3===============`);
const addElementWithIndex=arrayNumbers.map((element,index)=>{
 return element+index;
})
console.log(`add index value into its Corresponding each array :${addElementWithIndex}`);