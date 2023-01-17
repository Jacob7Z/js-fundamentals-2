const numbers = [];
// const number ["Zero","One","Two","Three"]; same 
numbers[0] = "Zero";
numbers[1] = "One";
numbers[2] = "Two";
numbers[3] = 3;

console.log(numbers);

//another way to create arrays

const letters = new Array("a","b","c","d");

console.log(letters);

//
console.log(numbers[3]);
console.log(typeof(numbers[3])); // they can contain numbers
console.log(letters[2]);
console.log(typeof(letters));   //arrays type is object

//properties and methods
console.log(numbers.length);
console.log(numbers[0]);                // THE FIRST ARRAY ELEMENT
console.log(numbers[numbers.length-1])  // THE LAST ARRAY ELEMENT

letters.push("E")  // to add elements to an array

let fLen = letters.length;    // 
for(let i= 0 ; i < fLen ; i++){
    console.log(letters[i]);
}

console.log("is it an array "+Array.isArray(numbers)); 