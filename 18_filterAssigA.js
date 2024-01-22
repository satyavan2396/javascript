class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
    getDetails(){
        console.log(`Emp.Id:${this.emp_id},Emp Name:${this.emp_name},Emp Dept:${this.emp_dept},Emp salary:${this.emp_salary},Emp Company:${this.emp_company}`);
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
const arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]
 const tcsEmployee=arrayEmployees.filter((element)=>{
    return element.emp_company=="TCS";
})

console.log(`==============step1==================`);
tcsEmployee.forEach((element)=>{
    console.log(`Employee Name:${element.emp_name},Company name:${element.emp_company}`);
})
console.log(`============step2=================`);
const wiproEmp=arrayEmployees.filter((element)=>{
    return element.emp_company=="Wipro"
})
let wiproempLength=wiproEmp.length;
let totalsalary=0;
wiproEmp.forEach((element)=>{
    totalsalary=element.emp_salary+totalsalary;
})
let avgSalaryOfWiproEmployee=totalsalary/wiproempLength;
console.log(`Avaerage salary Of WIPRO company is :${avgSalaryOfWiproEmployee}`);
console.log(`=====================step 3================`);
const totalEmpOfWiOrInfy=arrayEmployees.filter((element)=>{
    return element.emp_company=="Wipro"||element.emp_company=="Infy"
})
let lengthOfWiproOrInfy=totalEmpOfWiOrInfy.length;
let totalsalryofEmpOfWipInfy=0;
totalEmpOfWiOrInfy.forEach((element)=>{
    totalsalryofEmpOfWipInfy=totalsalryofEmpOfWipInfy+element.emp_salary;
})
let avgSalaryWipInfy=totalsalryofEmpOfWipInfy/lengthOfWiproOrInfy;
console.log(`Average Salary of Emp Wipro Or Infy is:${avgSalaryWipInfy}`);