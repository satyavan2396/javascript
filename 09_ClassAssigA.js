class Vehicle{
    Vehiclename
    vehicleColor
    vehicleType
    vehiclePrize
    vehicleModel
    getVehicledetails(){
        console.log(`Vehicle Name:${this.Vehiclename},Vehicle Color:${this.vehicleColor},Vehicle Type:${this.vehicleType},Vehicle Prize:${this.vehiclePrize},Vehicle Model:${this.vehicleModel}`);
    }
    constructor(Vehiclename,vehicleColor,vehicleType,vehiclePrize,vehicleModel){
        this.Vehiclename=Vehiclename;
        this.vehicleColor=vehicleColor;
        this.vehicleType=vehicleType;
        this.vehiclePrize=vehiclePrize;
        this.vehicleModel=vehicleModel;
    }
}
const suzuki=new Vehicle("suzuki","skyblue","4 Wheeler","6 Lakh",2019);
const splendor=new Vehicle("splendor","black","2 Wheeler","80 Thousnad",2017);
const ecco=new Vehicle("Ecco","white","4 Wheeler","8 Lakh",2018);
const fortuner=new Vehicle("Fortuner","Golden","4 Wheeler","45 Lakh",2020);
const ertiga=new Vehicle("Ertiga","darkbalack","4 Wheeler","12 Lakh",2021);
const vehicleArray=[suzuki,splendor,ecco,fortuner,ertiga];

console.log(`===============Traversing vehicle object using for of loop==================`);
for (const element of vehicleArray) {
    element.getVehicledetails();
}

class College{
    name
    street
    city
    pin
    display(){
        console.log(`Name:${this.name},street:${this.street},City:${this.city},Pin Code:${this.pin}`);
    }
    constructor(
        name,street,city,pin){
        this.name=name;
        this.street=street;
        this.city=city;
        this.pin=pin;

    }
}
const sangolaVidy=new College("Sangola vidhyamandir sangola","sangola","solapur",413307);
const sangolaNewEng=new College("Sangola new English sangola","sangola","solapur",413308);
const kbppandhrpur=new College("Karmvir Bhaurav college pandhrpur","pandhrpur","solapur",423307);
const laxmiVidya=new College("Laxmi Vidhyamandir sonand","sonand","solapur",413322);
sangolaVidy.display();
sangolaNewEng.display();
kbppandhrpur.display();
laxmiVidya.display();

function traverseObject(arg){
    for (const key in arg) {
        if (Object.hasOwnProperty.call(arg, key)) {
            const element = arg[key];
            console.log(`keys:${key},Elements:${element}`);
            
        }
    }

}
console.log(`-----------------------Sangola Vidhyamandir object-------------------------------`);
traverseObject(sangolaVidy);
console.log(`-----------------------Sangola New English object--------------------------------`);
traverseObject(sangolaNewEng);
console.log(`-----------------------karmavir bhaurav college object---------------------------`);
traverseObject(kbppandhrpur);
console.log(`-----------------------Laxmi Vidhyamandir object---------------------------------`);
traverseObject(laxmiVidya);


