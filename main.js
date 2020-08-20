// // alert("HI Maraphones");
// prompt("Введи номер:");

// let phone = "+71234567890";
// let i= phone.length;
// function formattedPhone(phone) {
//     if (i == 12)
//     phone.charAt(2, "", "(");
//     phone.charAt(6," ", ")");


// }

// console.log(formattedPhone); // +7 (123) 456-78-90

const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

let secondRowCounter = 0;
let firstRowCounter = 0;

function getRow(firstRow, secondRow) {
    for (let i = 0; i <= firstRow.length ;i++){
        if(firstRow.charAt(i) == "а"){
            firstRowCounter++;
        }    
    }

    for (let j = 0; j <= secondRow.length ;j++){
        if (secondRow.charAt(j) == "а") {
            secondRowCounter++;
        }
    }

    if (firstRowCounter > secondRowCounter) {
        console.log(firstRow);
    } 
    else {
        console.log(secondRow);
    }
}
alert(getRow(firstRow)); 
// alert(getRow(secondRow));


