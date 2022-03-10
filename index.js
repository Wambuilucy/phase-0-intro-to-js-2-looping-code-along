// Code your solutions in this file

function writeCards(names,events){
    let newArray = [];

    for (let i = 0; i < names.length;i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)

    }
    return newArray;
}

function countDown(integer){
    while(integer > 0){
        console.log(integer);
        integer-=1;
    }

    console.log(integer);
     }