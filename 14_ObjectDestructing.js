let person={
    firstName:"Satyavan",
    age:32,
    ismarried:true,
    city:"Sangola",
    country:"India"
}
// object destructing----------
let {firstName,age,country,city,pin=12345}=person;
console.log(firstName,age,country,city,pin);
console.log(`==============Array destructing================`);
let array=["jenny","Elon","Bill","stew"]
let[acterss,teslaowner,microsoftOwner]=array;
console.log(acterss,teslaowner,microsoftOwner);