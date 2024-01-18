function isPrime(num){
    for (let index = 2; index <num; index++) {
        if(num%2==0){
            return false
        }
        
    }
    return true;

}
console.log(`4 is Prmine number:==>${isPrime(4)}`);
console.log(`5 is Prmine number:==>${isPrime(5)}`);
console.log(`9 is Prmine number:==>${isPrime(9)}`);
console.log(`11 is Prmine number:==>${isPrime(11)}`);
console.log(`19 is Prmine number:==>${isPrime(19)}`);