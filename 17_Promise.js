const isNotesAvailable=false;
const promisenotes=new Promise(function(success,reject){
    if (isNotesAvailable) {
        console.log(`Sharing the notes......Hey you get`);
    }
        reject(`Sorry guys i didnt get time`)
});
promisenotes.then(function(success){
    console.log(`Thank You master`);
    console.log(success);
}).catch(function(failure){
    console.log(`${failure}`);
    console.log(`very Khadus Master`);
}).finally(function(){
    console.log(`I have my notes`);
})

const promiseNotes = new Promise((success, reject)=>{

    if (isNotesAvailable) {

        success("Sharing the notes.. Here you go..");

    }

    reject(`Sorry guys.. I didn't get time`);

});

promiseNotes.then(success => {

    console.log(success);

    console.log(`Thank you Master`);

}).catch(failure => {

    console.log(`${failure}`);

    console.log(`Very Kadhus master.. `);

}).finally(() => {

    console.log(`I must have my notes...`);

});