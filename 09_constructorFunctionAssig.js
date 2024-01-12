function Bank(bankName,location,ifscCode,branchCode){
this.bankName=bankName;
this.location=location;
this.ifscCode=ifscCode;
this.branchCode=branchCode;
this.bankDetails=function(){
console.log(`Bank Name:${this.bankName},Location:${this.location},Ifsc Code:${this.ifscCode},Branch Code:${branchCode}`);
}
}
const yseBank=new Bank("Yes Bank","Pune","YES212233",208);
const sbiBank=new Bank("State Bank Of india","Sangola","SBIN0000271",209);
const mahBank=new Bank("maharashtra Bank","Mumbai","MAH0000307",210)
const axisBank=new Bank("Axis Bank of India","Solapur","AXIS0001013",211)
console.log(`------------------------Yes Bank details---------------------------------`);
yseBank.bankDetails();
console.log(`------------------------State Bank details---------------------------------`);
sbiBank.bankDetails();
console.log(`------------------------Maharashtra Bank details---------------------------------`);
mahBank.bankDetails();
console.log(`------------------------Axis Bank details---------------------------------`);
axisBank.bankDetails();
Bank.prototype.opentime="9 AM IST";
Bank.prototype.closeTime="6 PM IST";
console.log(`------------------Open Time and Close Time of State Bank--------------------------`);
console.log(`Open Time:${sbiBank.opentime},Close Time:${sbiBank.closeTime}`);
console.log(`------------------Bank Name and Close Time of Axis Bank--------------------------`);
console.log(`Bank Name:${axisBank.bankName},Close Time:${axisBank.closeTime}`);
console.log(`------------------Bank Name, Branch Code and Open Time of Yes Bank--------------------------`);
console.log(`Bank Name:${yseBank.bankName},branch code:${yseBank.branchCode},Open Time:${yseBank.opentime}`);