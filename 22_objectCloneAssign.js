const arrayNums=[20,3,4,56,90,400,49];
const arrayShallow=arrayNums;
arrayShallow.push(55,66);
console.log(`=================step1===============`);
console.log(`Orginal array:${arrayNums}`);
console.log(`Cloned array:${arrayShallow}`);
console.log(`==========step2==============`);
const deepClonedArray=[...arrayNums];
const orginalarray=arrayNums.splice(3,0,10);
console.log(`Orginal array:${orginalarray}`);
console.log(`Deep cloned array:${deepClonedArray}`);
console.log(`===================step3===============`);
const arrayEven=[2,30,14,8];
const mergeArray=[[arrayNums],...arrayEven]
console.log(`merge array operation:${mergeArray}`);

const employee_info={
    emp_id:27,
    emp_name:"john doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokali, 431202"
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"]
}
console.log(`=========================step5============`);
console.log(employee_info);
console.table(employee_info.address);
console.log(employee_info.mobiles);
console.log(`===================step6=================`);
const deepCopyOfemployee_info=JSON.parse(JSON.stringify(employee_info))
deepCopyOfemployee_info.salary.july_month="80k";
employee_info.address.country="United Kingdom"
console.log(`==================Orginal object==================`);
console.table(employee_info);
console.log(`=============cloned object============`);
console.log(deepCopyOfemployee_info);