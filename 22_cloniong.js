let n1 = 100;

let n2 = n1; // Deep Clone

n1 = 444;

console.log(n1); // 444

console.log(n2); // 100

 

const user = {

    name: "Jenny",

    age : 32

}

const developer = user; //  Shallow Clone

developer.name = "Bill"; 

console.log(developer.name); // Bill 

console.log(user.name); // Bill
console.log('Deep Clone using Object.assign() ');

const smartBoy = Object.assign({}, boy);

smartBoy.name = "Stew Job";

console.log(smartBoy.name);  // Stew Job

console.log(boy.name); //  Jenny
console.log('Deep Clone using JSON.parse() and JSON.stringfy() ');

const gentleMan = {

    name: "Elon Musk",

    age : 32,

    address: {

        PIN: 334455,

        street: "Bergan"

    }

}

// const gentleWoman = {...gentleMan}; // Spread Operator 

const gentleWoman = JSON.parse(JSON.stringify(gentleMan));

gentleWoman.address.street = "Khawgalli";

console.log(gentleWoman.address.street); // 

console.log(gentleMan.address.street); //