console.log("------------Q1---------------");
function display(){
    console.log("function is nothing but block of code");

}
display();

function play(){
    console.log("Function has Four types");
    console.log("01.Function with no arguments no return types");
    console.log("02.Function with no arguments with return types");
    console.log("03.Function with arguments no return types");
    console.log("01.Function with arguments with return types");
}
play();
console.log("------------Q2---------------");

function personalDetails(firstname,lastName,collegeName){
    var firstname="satyavan",lastName="Shejal",collegeName="Sangola College Sangola";
    console.log("First Name :",firstname,"Last Name:",lastName,"College Name:",collegeName);

}
personalDetails();
console.log("------------Q3---------------");
 function swapValues(value1,value2){
    console.log("Before swap ","Value1-->",value1,"Value2-->",value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After Swap:","Value1-->",value1,"Value2-->",value2);

 }
 swapValues("virat","Anushka")
 swapValues(1000,2000);
 console.log("------------Q4---------------");
 function addThreeValues(n1,n2,n3){
    console.log("Given Value is:",n1,n2,n3);
    var result=n1+n2+n3;
    console.log("addition of Given Three number is:",result);

 }
 addThreeValues(10.23,600,40);
 addThreeValues("Hello","Good","Morning")