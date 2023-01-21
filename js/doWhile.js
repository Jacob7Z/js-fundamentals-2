// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#skipping_iterations_with_continue

// while loop


const cats = ['Pete', 'Biggles', 'Jasmine'];

let myCats = "My cats are called : ";

let i = 0;

while (i<cats.length){
    if(i === cats.length -1 ){
        myCats += `and ${cats[i]}.`;
    }else{
        myCats += `${cats[i]}, `;  
    }
    
    i++;
}

console.log(myCats);


//do while


let myCats2 = "My cats are called : ";
i = 0;
do{
    if(i === cats.length -1 ){
        myCats2 += `and ${cats[i]}.`;    
    }else{
        myCats2 += `${cats[i]}, `;
    }
    i++
}while(i<cats.length);

console.log(myCats2)



















