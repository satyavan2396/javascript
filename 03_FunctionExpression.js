//Fe-->
var display=function(){
console.log(`"hello I love javascript"`);
}
display();

var maleMariageEligibility=function(gender,age,boyname){
    var result=gender=="male" && age>=21 ?`Hey ${boyname} You are Eligible for Marriage` :`Unfortunatily-You are not eligible,please try next time`;
    console.log(result);

}
maleMariageEligibility("male",25,"Bilgates");
maleMariageEligibility("male",20,"Elon")