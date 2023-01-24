let i =10;

while(i){  // while i is true "doesnt equal to 0" do the code below
    // console.log(i);
    i--;    
}

i = 7;
 
while(i)console.log(i--)  //when it has a single statement   


//break
let sum = 0;

while(true){
    let value //= +prompt("Enter a number",'');

    if(!value) break;

    sum += value;

}

alert('Sum: ' + sum);


// continue
for(x=0 ; x<20 ; x++){
    if( x%2 == 0 ) continue;

    console.log(x);
}


//label
outer: for (let z = 0; z < 3; z++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${z},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
  
      // do something with the value...
    }
  }
  
  alert('Done!');

