// Functions
// Block of code that fulfills specific reusable task
// there are two ways
// first - general way
functionName() // we can put anywhere this function call
// this is because JS internarlly moves all the functions to the top before excecuting
// this concept is called "Hoisting"
function functionName(){
    console.log("this is the general syntax")
};
functionName()// function call/invoke

// Second
// Function Assignment - again it have two ways  and in this one Hoisting won't work
// i) Named function assignment
// it means we assign a function to variable to access the function
//nameFunctionAssignment()// this will raise error because Hoisting won't work here
let nameFunctionAssignment = function func(){
    console.log("Named Function Assignment")
}
nameFunctionAssignment();
//func(); // this also raise error uncomment and check

//ii) Anonymous function assignment
// it means we assign a function to a variable which doesn't have a function name
let anonymosFunction = function(){
    console.log("This is Anonymos Function")
}

anonymosFunction();// here also hoisting won't work

// Functions Practic
function sum(a,b){
    return a+b;
}
function sum1(a,b){
    // dynamic kind of function
    console.log(arguments);
    for(let value of arguments){
        console.log(value)
    }
}

console.log(sum(1,3)); // return 3
console.log(sum()); // ruturn NaN, because we didn't give values that means they are undefined, and we are trying to sum undefined values
console.log(sum(1));// return NaN, adding 1 with undefined values
console.log(sum(1,2,3,4,54,56,6,7));// return 3, but what about, remaining values
// in this scenario, in JS we have a concept called Argument(argument)
// in this one all the remaing arguments will be stored as key value pair
// by using this argument we can create a dynamic sort of function.
sum1(1,2,3,4,54,5,6,6,6,6,6,6,6,6);


//Rest Operator (...)
// this is also like arguments
// unlike arguments, it will create an array instead of object
function sum2(...args){
    console.log(args)
}

sum2(1,2,3,4,54,5,6,6,6,6,6,6,6,6);

// Default Parameters
function interest(p,t,r=10){
    // function interest(p,t=10,r) this is not allowed
    return p*t*r/100;
}

console.log(interest(1,2))
console.log(interest(100,12,undefined))// if send undefined for default value, this time it will take default value only



//Getter - used to get the value
// it is like readonly, we only get the value
// by using "get" key word we declare in the object
// this is more convinent way than the normal function
let person = {
    fName:"iam",
    age:19,
    get fullName(){
        return `${person.fName} ${person.age}`;
    },
    set fullName(value){
        if (typeof (value) !== 'string'){
            throw new Error("This is not a string");
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.age = parts[1];    }
}
console.log(person);
console.log(person.fullName);// accessing getter function
console.log(person.fullName = "imran 23");// accessing setter function
console.log(person.fullName);

// getter function which gets a requied values
// exmple lets get full name
function GetFunction(){
    // this is the same this we mentioned for the person object using "get" 
    return `${person.fName} ${person.age}`
}
// setter - used to set the value
// change or mutate properties.
//this is the same function we mentioned in the person object using "set"
function setFunction(value){
    let parts = value.split(' ');
    this.fName = parts[0];
    this.age = parts[1];  
}


// Error handling
// try-catch
// by using this we haldle the error/exceptions
// we put this try and catch method  where we expect some erros in the code
try{
    person.fullName = 1; // this cause the error because, it will not able to split this one
}
//catch{
catch(errorThatIRecived){
    // the error we will get that will be handled here
    console.log(errorThatIRecived)// built in function to give, alert on screen
}

//Scope - the life time of a variable

function toDefineScope1(){
    let a=10;
    var b = 80;
    console.log(b);// the life timeof a and b is ended out side of this function
    if(a == 10){
        console.log(a)
    }
}
function toDefineScope2(){
    var b = 80; // outside the function this is not accessible
    console.log(b);// the life timeof a and b is ended out side of this function
    if(b=80){
        let a =1; // this one is only accessible within this if condition
        console.log(a);
        var c=10; // here c is accssible throught the function
    }
    console.log(c)
}
toDefineScope1()
toDefineScope2()
for(let i =10; i<11 ; i++){}
//console.log(i); // this won't work
for(var i =10; i<11 ; i++){}
//console.log(i); // this will work
// console.log(a)// both a's are not same, it will give error
//console.log(b);
function a (){
    const a = 10;
    console.log(a)
}
function b(){
    const a =11;
    console.log(a)
}
b();
a();// both will work



const r=5;
const s = 6;
console.log(`The Sum of xand{y} is ${r+s}`)
