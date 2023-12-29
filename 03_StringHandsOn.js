
 function stringHandsOn(){
    console.log(`-----------------------------------step1------------------------------------`);
    var givenstring="   Hey you are doing good, Keep it up   "
    console.log(`1.Given string is:${givenstring}`);
    var lengthOfString=givenstring.length
    console.log(`-----------------------------------step2------------------------------------`);
    console.log(`2.Length of string is:${lengthOfString}`);
    var leadingspace=givenstring.trim();
    console.log(`-----------------------------------step3------------------------------------`);
    console.log(`3.after removing leading and extra space given string is:${leadingspace} and length is:${leadingspace.length}`);
    console.log(`-----------------------------------step4------------------------------------`);
    var result=givenstring.length-leadingspace.length;
    console.log(`4.Total Number of Extra spaces Count after trim() is:${result}`);
    console.log(`-----------------------------------step5------------------------------------`);
    var charatFirstPosition=leadingspace.charAt(0);
    var charatlastPosition=leadingspace.charAt(leadingspace.length-1);
    console.log(`5.Char at first position is :${charatFirstPosition} and char at last position is :${charatlastPosition}`);
    console.log(`-----------------------------------step6------------------------------------`);
    var totalWords=leadingspace.split(" ");
    console.log(totalWords);
    console.log(`6.Total words available in string after Step 3 is:${totalWords.length}`);
    console.log(`-----------------------------------step7------------------------------------`);
   console.log(`7.Index of word "good" is:${givenstring.indexOf("good")}`); 
   console.log(`-----------------------------------step8------------------------------------`);
   console.log(`8.Substring strating from index 22 using substring is:${leadingspace.substring(22)} and usig slice:${leadingspace.slice(22)}`);
   console.log(`-----------------------------------step9------------------------------------`);
   console.log(`9.Is String Ends With "UP"==>:${leadingspace.endsWith("up")}`);
   console.log(`-----------------------------------step10------------------------------------`);
   console.log(`10.Is String start With word "Hey"==>:${leadingspace.startsWith("Hey")}`);
   console.log(`===================================================Thank You sir=======================================================`);
 }
 stringHandsOn();