function marriageeligibilityChecker(gender,age){
   if (gender==null || gender==undefined && age<0){
    console.log(`Invalid Gender: ${gender} and Age:${age} ==>Invalid Input`);
   }
   else if(gender=="Male"  && age>=21)
   {
    console.log(`Gender is :${gender} and Age is :${age}===>You are Elgible for marriage`);
   }
   else if(gender=="Female" && age>=18){
    console.log(`Gender is :${gender} and Age is :${age}==>You are eligible for marriage`);
   }
   else{
    console.log(`Gender is :${gender} and Age is :${age}==>You are Not eligible for Marriage`);
   }

}
marriageeligibilityChecker("Male",17);
marriageeligibilityChecker("Male",25);
marriageeligibilityChecker("Female",28);
marriageeligibilityChecker("Female",16);
marriageeligibilityChecker("Other",35);
marriageeligibilityChecker("Other",41)
marriageeligibilityChecker(null,25);
marriageeligibilityChecker(undefined,null)