const arrayNum=[55,11,66,18,20,73];
const array=[];
arrayNum.forEach((element)=>{
    if (element%5==0) {
        array.push(element)
    }
})
console.log(array);
const arr= arrayNum.filter((currentValue)=>{
   return currentValue%5==0;
})
console.log(arr);

class Student {

    // Data member or properties

    // Constructor

    constructor(id, name, city, marks ){

        this.id = id;

        this.name = name;

        this.city = city;

        this.marks = marks;

    }

    // Member Functions or methods

    getDetails(){

       console.log(`ID: ${this.id}, Name: ${this.name}, City: ${this.city}, Marks: ${this.marks}`);

    } 
}

 

const jenny = new Student(11, 'Jenny', 'Pune', 67);

const bill = new Student(43, 'Bill', 'Mumbai', 96);

const elon = new Student(32, 'Elon', 'Hyd', 83);

const stew = new Student(22, 'Stew', 'Pune', 75);

const ratan = new Student(65, 'Ratan', 'Mumbai', 90);

const arrayStudents = [jenny, bill, elon, ratan, stew];
const studentFromPune=arrayStudents.filter((element)=>{
    return element.city=="Pune"
})
console.log(studentFromPune);
studentFromPune.forEach((element)=>{
    console.log(element);
})
console.log(`==========WAP to filter out second grade (marks>=55 && marks<75)students==========`);
arrayStudents.filter((element)=>{
    return element.marks>=55 && element.marks<75;
}).map((element)=>{
   return element.name;
}).forEach((element)=>{
    console.log(element);
})