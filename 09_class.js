class Student{
    //data memeber or properties
    id
    name
    city
    marks
    constructor(id,name,city,marks){
        this.id=id;
        this.name=name;
        this.city=city;
        this.marks=marks;
    }
    //member function or methods
    getDetails(){
        console.log(`ID:${this.id},name:${this.name},city:${this.city},marks:${this.marks}`);
    }
    //constructor

}
const jenny = new Student(11, "Jenny", "Pune", 70);

console.log(jenny.name);

jenny.getDetails();

 

const bill = new Student(22, "Bill", "LA", 60);

//console.table(bill);

bill.getDetails();
const elon = new Student(33, "Elon", "Mumbai", 90);

const stew = new Student(44, "Stew", "Bergen", 80);

console.log(`Traversing array of Object...`);

const arrayStudents = [ jenny, bill, elon, stew ];

for (const element of arrayStudents) {

    element.getDetails();

}
console.log(`WAP to log the details of students having marks greater than equal 80`); 

for (const student of arrayStudents) {

    if (student.marks>=80) {

        student.getDetails();

    }

}


class User {

 

}

// instanceof operator

console.log(elon instanceof Student);

console.log(stew instanceof User);