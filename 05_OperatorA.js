console.log(`====================Step1=========================`);
function squareOfWord(str){
console.log(`Given String is:${str}`);
var lengthOfstr=str.length;
return result=lengthOfstr*lengthOfstr;

}
var result=squareOfWord("Javascript");
console.log(`Square of Given String is:${result}`);
var result=squareOfWord("Google Chrome");
console.log(`Square of Given String is:${result}`);
var result=squareOfWord("Developer Smart");
console.log(`Square of Given String is:${result}`);
console.log(`====================Step2=========================`);
function display(){
var givenStr="I am Angular Developer";
var lengthOfgivenString=givenStr.length;
var leadingspace=givenStr.trim();
var totalWords=leadingspace.split(" ");
var totalnumberOfWords=totalWords.length;
var result=lengthOfgivenString/totalnumberOfWords;
console.log(`String Length is:${lengthOfgivenString} and divide by total Number of words is:${totalnumberOfWords}then result is:${result}`);
console.log(`The string length is:${lengthOfgivenString} multiple by the words available in string:${totalnumberOfWords} then result is:${lengthOfgivenString*totalnumberOfWords}`);
}
display();
