// In-build Objects 


// 1. Math Object
// This one have static properties and methods not need to call the constructor function
// This means we can access Directly with its Object Name Math
//Properties Examples we have some others also refer mdn
console.log(Math.PI);
console.log(Math.LN10);
//Methods that we have
console.log(Math.random()); // return random number between 0 to 1

// 2.Strings
// In JS we have two types of strings 
//i. Primitive Strings
let firstName = "Imran ";
console.log(typeof(firstName))// typeof to know the datatype

//ii. Object/Reference Type
//This one we create by calling the String(value) constructor
let lastName = new String("Shaik");
console.log(typeof(lastName));

// converting primitive to object type of string
// by using dot notation (firstName.) if we use like this 
// JS will automatilly consider it as String object
// if we use the .(dot) js will automatically treat it as Object
// strings always work with a copy of a string
// so these functions won't change the original value
console.log(firstName.length)
console.log(lastName.length) // to get the no.of character

console.log(lastName.includes("Sh"));// whether metioned characters are there(case-sensitive)
console.log(firstName.startsWith('m')) // returns false is string starts with m
console.log(lastName.endsWith('n'));// string ends with?
console.log(firstName.trim().length);// to remove spaces in the start and end
console.log(firstName.length)
console.log(firstName.trimEnd())
console.log(firstName.split(''))// splits with single characters

// 2.Template literal
// we know the  escape sequences in other languages like \n,\\,\' etc
// to get the new lines or horizontal spaces etc
let message = 'hello \n All "How" are \'you\' doing bro \t nice \v to meet you';
console.log(message);
// Now to replace this one we make use of Template literals
// It is not thing but the back tick `content`
// it is used to give multiple line data
let message1 = `hello
All "How"
are 'you' doing bro     nice 


to meet you`;
console.log(message1)

let message2 = `Hello bro ${firstName}`;// ${} is a place holder to dynamically give the data
console.log(message2);

// 4.Date And Time
// used to create Date and Time
// we have five ways to create 5 ways check mdn
let date = new Date(); // gives current date and time
console.log(date); // Thu Dec 28 2023 15:29:22 GMT+0530 (India Standard Time)

let date1 = new Date('Jan 10 2003');// Fri Jan 10 2003 00:00:00 GMT+0530 (India Standard Time)
console.log(date1);

let date2 = new Date(1999,11,22);// year,month(0-11),datae Wed Dec 22 1999 00:00:00 GMT+0530 (India Standard Time)
console.log(date2);

// we have functins also in this one
console.log(date1.getDay());

//====================================================================================================================================
//====================================================================================================================================
//====================================================================================================================================
//====================================================================================================================================
// Arrays
// Creation
let numbers = [1,3,9,2,5,6,7,9,6,0,8]; // indexed are number use to access the values
console.log(numbers);
// Insertion
// At Begining
numbers.unshift('a');
console.log(numbers)
// At End
numbers.push(10)
console.log(numbers)
//At Middle
numbers.splice(3,0,'b','c','d')

console.log(numbers);

// Searching
// searching values in primitives
console.log(numbers.indexOf(1)) // to find the index of element but it is not a good practice
console.log(numbers.indexOf(111)) // return -1 if element is not there
console.log(numbers.includes(1)) // best practice to find the elemnent

// searching values in reference type
let course = [
    {no1:1, naan:'im'},
    {no:2, naan:'sh'}
]
console.log(course);
course.push({no:4})
console.log(course)

console.log(numbers.indexOf({no:1, naan:'im'}))// return -1, because indexOf wont work on reference type

// to work with references we use Callback functions
let cou = course.find(function(course){
    return course.naan == 'im';
})
console.log(cou)
// here i made arrow function for the above example
// this is an another way to write the thing
let c = course.find((course)=>{
    return course.naan == 'nice'
})

console.log(c); // returns undefined

function callme(functionRefAsArg){
    console.log("Hello Bro");

}

callme(()=>{})// arrow function without parameter

// Removing Elements
// On primitive
// End

console.log(numbers)
console.log(numbers.pop());
console.log(numbers)
//Begining
console.log(numbers.shift())
console.log(numbers)
//middle
console.log(numbers.splice(2,3));
console.log(numbers)

//on reference/objects
// find out how to do 

// Empting an array
// first way


// combining and slicing array
//Combining
// firstArray.concat(secondArraytocombine)
let first =[1,2,3]
let second = [4,5,6]
let com = first.concat(second)
console.log(com);
console.log(second.concat(first));

// Combing using spread operator
let combined  = [...first,'a',true,...second,'imran'];
first.push(0)
console.log(combined)
console.log(first)
// slicing
// splitting the array
let sliced = com.slice(2,4);
console.log(sliced);


// Practice combining/slicing on objects  


//Iterating Arrays
let arr =[1,2,3,4,5,6]
console.log("for of loop")
for(ar of arr){
    console.log(ar)
}
console.log("foreach loop")
arr.forEach(singleValue =>{
    console.log(singleValue);
})

//try using reference objects doing iteration

// Joining and Splitting
let nums = [1,2,3,4,5]
let joinedNumbers = nums.join(">>")
console.log(joinedNumbers);

let splittingNumbers = joinedNumbers.split(">>") // split won't work on arrays
console.log(splittingNumbers)

//Sorting
// sort function internally changes the values to string
// try with mixed vlaues and test
let sortedArray = numbers.sort();
console.log(numbers)
console.log(sortedArray)

// Reverse
console.log(sortedArray.reverse())

// filter
// means what values we want to see excepet those don't show other things
let n = [1,-2,0,-8,-9];
let filteredValue = n.filter(nvalue =>{
    return nvalue >=0;
})

console.log(filteredValue);

//Maps in array
// maps each element of an array with something else
let mappedArray = n.map(num=>{
    return "value "+num;
});

console.log(mappedArray);
// maps for objects
let arrayObject = n.filter(v=> v<=0).map(()=>{number:v})
console.log(arrayObject)

//Reducing arrays
// to reduce an array and make some value by reducing that array
// syntax: array.reduce(callbackfucntion(accumulato, current vaue), accumulatorInitializeValue)
// our array
let arrr = [1,2,3,4,5];
Array.isArray()

// lets see in loop first
let total = 0;
for(let value of arrr){
    total = total + value;
}
console.log("total value using for loop",total)
//now using reduce
// here accumulator is like "total" as in the above example and 0 is the initialization for that
// first we are initializing accumulator by "0" as we done for total
// now we will be storing total value in the accumulator variable
// if we don't give accumulator or current value
// then accumulator initilized with first value and current value starts with second value
let totalvalue = arrr.reduce((accumulator,currentValue)=> accumulator + currentValue, 0);
console.log("Total value using reduce : ", totalvalue);