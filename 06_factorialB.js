function factorialOfWordsCount(str){
    let leadingSpace=str.trim();
     let totalWords=leadingSpace.split(" ");
     console.log(totalWords);
     let res=1;
    for (let index = 0; index <=totalWords.length-1; index++) {
        res=res*index;
        
    }
console.log(res);
}
factorialOfWordsCount("Revision is the mother of Success");