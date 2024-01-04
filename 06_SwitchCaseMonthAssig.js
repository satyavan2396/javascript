console.log(`==================== Switch case assignment =====================`);
function monthOfYear(month){
    var month;
    switch (month) {
        case 1:
            console.log(`Given month Number:${month}==>January`);
            break;
        case 2:
           console.log(`Given month Number:${month}==>Febuary`);
            break;
        case 3:
            console.log(`Given month Number:${month}==>March`);
            break;
        case 4:
            console.log(`Given month Number:${month}==>April`);
            break;
        case 5:
            console.log(`Given month Number:${month}==>May`);
            break;
        case 6:
            console.log(`Given month Number:${month}==>June`);
            break;
        case 7:
            console.log(`Given month Number:${month}==>July`);
            break;
        case 8:
            console.log(`Given month Number:${month}==>August`);
            break;
        case 9:
            console.log(`Given month Number:${month}==>septmber`);
            break;
        case 10:
            console.log(`Given month Number:${month}==>Octomber`);
            break;
        case 11:
            console.log(`Given month Number:${month}==>November`);
            break;
        case 12:
            console.log(`Given month Number:${month}==>December`);
            break;

        default:
            console.log(`Given month Number:${month}==>Invalid Month`);
            break;
    }

}
monthOfYear(1);
monthOfYear(2);
monthOfYear(3);
monthOfYear(4);
monthOfYear(5);
monthOfYear(6);
monthOfYear(7);
monthOfYear(8);
monthOfYear(9);
monthOfYear(10);
monthOfYear(11);
monthOfYear(12);
monthOfYear(null);
monthOfYear(undefined)