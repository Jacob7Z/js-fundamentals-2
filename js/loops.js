// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for(const cat of cats){
    console.log(cat);
}
// given the collection cats ,get the first item and assign it to cat and run the code{} , 
// then get the next item and repeat until you reach the end of the collection 

function multiply(number){
    return number*2;

}



//map
const numbers = [2,3,4,5];
const numbersM = numbers.map(multiply);

console.log(numbersM);
console.log(numbers);



//filter
const strings = ["yo","name","LA","Loop"];

function Lnum(string){

    return string.startsWith('L');
 
}

const filtered = strings.filter(Lnum);
console.log(filtered);



//for loop


