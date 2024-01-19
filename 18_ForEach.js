const arrayNum=[55,11,68,18,22,73]
arrayNum.forEach((currentValue,index,array)=>{
    console.log(currentValue,index,array);
})
console.log(`==============Using Current value Only==========`);
arrayNum.forEach((currentValue)=>{
    console.log(currentValue);
})
console.log(`=============WAP to find odd values`);
arrayNum.forEach((Element)=>{
    if (Element%2!==0) {
        console.log(Element);
    }
})
console.log(`===========Program to traverse on set===============`);
const setOfRollNum=new Set();
setOfRollNum.add(44);
setOfRollNum.add(22);
setOfRollNum.add(33);
setOfRollNum.add(44);
setOfRollNum.add(22);
setOfRollNum.add(66);
setOfRollNum.add(77);
setOfRollNum.forEach((value)=>{
    console.log(value);
})
console.log(`==========Program to traverse on Map============`);
const map=new Map();
map.set("Height","6ft");
map.set("Weight",78);
map.set("Name","Satyavan");
map.set("City","Pune");
map.set("Married",true);
map.forEach((value,key)=>{
    console.log(key,value);
})
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
console.log(`===============WAP to get students of Even id===============`);
arrayStudents.forEach((element)=>{
    if (element.id%2==0) {
        console.log(element);
        
    }
})
