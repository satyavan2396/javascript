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
console.log(`===============Step1===============`);
arrayEmployees.forEach((element)=>{
    if (element.emp_company=="TCS") {
        console.log(element.emp_name,element.emp_company);
    }
})
console.log(`===============step2==============`);
arrayEmployees.forEach((element)=>{
    if (element.emp_salary>=50000) {
        console.log(element.emp_id,element.emp_name,element.emp_dept,element.emp_salary,element.emp_company);
    }
})
console.log(`==============step3=============`);
const sumOfAllEmployeesalary= arrayEmployees.reduce((rt,element)=>{
    return rt+element.emp_salary;
},0)
console.log(`Sum of all Employee Salary:${sumOfAllEmployeesalary}`);
console.log(`=================step4============`);
const array= arrayEmployees.filter((element)=>{
    return element.emp_name;
})
console.log(`Total Number Of Employees:${array.length}`);
console.log(`Avearage Salary of Employees:${sumOfAllEmployeesalary/array.length}`);
console.log(`================step5================`);
arrayEmployees.forEach((element)=>{
    if (element.emp_dept=="IT"||element.emp_dept=="HR") {
        if (element.emp_salary>=75000) {
            console.log(`Emp ID:${element.emp_id},Emp Name:${element.emp_name},Emp Dept:${element.emp_dept},Emp salary:${element.emp_salary},Emp Company:${element.emp_company}`);
        }
    }
})