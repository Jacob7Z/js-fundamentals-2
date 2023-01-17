let letters = ["a","b","c","d"];


console.log(letters.toString());
console.log(letters);               //these two are the same , objects have a built in toString()
console.log(typeof(letters.toString()));


console.log(letters.join(" | ")); // it makes an array a string and adds an input between every element


letters.pop(); //       pop() removes the last element from an array
console.log(letters);


letters.push("P"); //   push() adds an element to the end of an array
console.log(letters);


letters.shift(); //     shift() removes the first element from an array
console.log(letters);


letters.unshift("@");// unshift() adds a new element to  the beginning  
console.log(letters);


let numbers = [1,2,3,4];
let numbersN = [-1,-2,-3,-4]

let characters = numbers.concat(letters,numbersN);  //array1.concat(array2) merges two or more arrays
console.log(characters);


letters.splice(2,0,"S1","S2")   // array.splice() adds new elements to an array| 
console.log(letters);           // 2 is the where should it add the new elements ,
                                // 0 is how many elements should be removed,
                                // the rest are the elements that should be added

letters.splice(1,1) // using splice() this way removes elements without undefined gabs
console.log(letters);


let numbersSliced1 = numbers.slice(1)// slice() slices an array from the beginning to the given index and puts in a new array
let numbersSliced2 = numbers.slice(1,3)// it will slice the array from the idex 1 to 3 but not including the 3

console.log(numbersSliced1); 
console.log(numbersSliced2); 

// console.log(letters);

