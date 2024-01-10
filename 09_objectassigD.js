console.log(`=========================Object assignment================`);
const professor={
    name:"satyavan",
    age:27,
    Designation:"Technical assistant",
    city:"sangola",
    isMarried:true,
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
        passoutYear:2017,
    },
    certificates:["Haker Rank participation","Certificate in IFE Courrse","Certificate in ADv Programming"],


}
professor.totalExperince="14 years";
console.log(professor);
console.log(professor.degrees);
console.log(professor.certificates);
console.log(`=============Modifying property city==================`);
professor.city="solapur";
console.log(professor);
professor.certificates.splice(2,0,"Oracle Certified")
console.log(`===========Added new certificate========= at index 2`);
console.log(professor.certificates);
console.log(`================Traversing array ===============`);
for (const index of professor.certificates) {
    console.log(index);
}


