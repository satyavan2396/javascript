console.log(`========================= Step 1 ==================================`);
function maleMarriageEligibility(gender,age,boyName){
   var result= gender=="Male" && age>=21 ? `Hey ${boyName} You are Eligible for Marriage` :`Hey ${boyName} You are not Elgible for Marriage`;
return result;
}
var result=maleMarriageEligibility("Male",25,"Billgates");
console.log(result);
var result=maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(result);
console.log(`================================== Step 2 ==========================`);
function femaleMarriageEligibility(gender,age,girlName){
  var result= gender=="Female" && age>=18 ? `Hey ${girlName} You are Eligible For Marriage`: `Hey ${girlName} You are Not Eligible for Marriage`;
  return result;
}
 var result=femaleMarriageEligibility("Female",16,"Jenifer");
 console.log(result);
 var result=femaleMarriageEligibility("Female",27,"Malinda Gates");
 console.log(result);
 console.log(`========================== Thank You =====================================`);