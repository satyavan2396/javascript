console.log(`------------------------Interview assignment system---------------------------`);
var interviewEligibility=function(gradeScore,hscScore,sscScore,candiaterName){

   if (gradeScore>=70 || hscScore>=80 ||sscScore>90){
    console.log(`Congrates:${candiaterName} You are eligible For TCS interview`);
   }
   else{
console.log(`Unfortunately :${candiaterName} You are not eligible for TCS interview`);
   }
}
interviewEligibility(80,86,90,"Satyavan");
interviewEligibility(70,65,55,"Ganesh");
interviewEligibility(60,79,88,"Sayaji")
console.log(`--------------------------- Thank you ----------------------------------------`);