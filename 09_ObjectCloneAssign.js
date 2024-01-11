const bankSbi={
    bankname:"State Bank of India",
    branch:"sangola",
    accNo:40150401,
    AccType:"savings",
}
const bankLocation={
    street:"save",
    city:"sangola",
    pin:413317,
}
const newBankSbi=Object.assign({},bankSbi);
console.log(`orginal bankSbi object`);
console.log(bankSbi);
console.log(`After cloning orginal bankSbi object then new object is`);
console.log(newBankSbi);
const newBanklocation=Object.assign({},bankLocation);
console.log(`orginal bankLocation object`);
console.log(bankLocation);
console.log(`After cloning orginal bank location object then new object is`);
console.log(newBanklocation);

const rateOfInterest={
    homeLoaninterest:"8.7%",
    personalLoaninterest:"9%",
    duelInterest:"10%",
}
const sbidetails=Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(`after merging step1,step2,step3`);
console.table(sbidetails);
console.log(`===========Traversing merged object using for in loop==========`);
for (const key in sbidetails) {
    if (Object.hasOwnProperty.call(sbidetails, key)) {
        const element = sbidetails[key];
        console.log(element);
    }
   
}
