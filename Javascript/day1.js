// line below is used to print on the console
console.log('Hello Namsthe')

let a = "love";//scope level
var b = "love";//global level
var b = "love";// redeclaration is allowed in var not in let
console.log(a)

// Arithmetic operators
let x=1;
let y=2;
let c = x+y;
console.log(c);
c = x-y;
console.log(c);
c = x*y;
console.log(c);
c = x/y;
console.log(c);
c = x%y;
console.log(c);
c = x**y;
console.log(c);

//post and pre / increment and decrement and assignment
let k = 4; // assignment
console.log(x++); // post increment
console.log(++x); // pre increment
console.log(--x); // pre decrement
console.log(x--); // post decrement

//Comparision
// < > <= >= !== ===
console.log(5>6);
console.log(6>9);
console.log(5===5);
console.log(5!==5);
console.log(5=='5');

// Ternary/ conditional operator
console.log(x>y ? 'X is big' : 'Y is big');

// Logicla Operators - to work with multiple conditions
// && - all conditions should be true
console.log(true && true); // return true
console.log(true && false); // return false
// || - at least onle conditions should to true
console.log(true || true); // return true
console.log(true || false); // return true
console.log(false || false); // reaturn false
// ! - converts from true to flase and vice versa
console.log(!true); // return false
console.log(!false); // return true

// And also can use with non boolean conditions
// this works base on truthy and falsy values
// falsy values : undefined, NaN, '',false,[],0
// truthy values: anything that is not falsy
// In AND we use short circuting concept when first condition is true then only
// we will check second condition otherwise we will not check
console.log(true && 'hello');  //  return hello
console.log(false && 'hello'); // return false

// In OR we use short circuting concept when first condition is true then 
// we will not check second condition otherwise we will check
console.log(true || 'hello');  //  return true
console.log(false && 'hello'); // return hello


// Bitwise Operators
// Bitwise AND(&) and Bitwise OR(|)
let j=2;
let l =3;
// return 2
// 2 = 0000 0010 -- in bits
// 3 = 0000 0011
// --------------
//     0000 0010 = 2
console.log(j&l);
// return 3
// 2 = 0000 0010 -- in bits
// 3 = 0000 0011
// --------------
//     0000 0011 = 3
console.log(j|l);

//Conditonal statements
// Simple IF
if(5 >9){
    console.log('this will not be printing');
}

// if else; if somthing is false then do the next thing
if(5 > 9){
    console.log('5 is bigger');
}
else{
    console.log('9 is bigger');
}

//if-elseif-else
if(5 >9){
    console.log('5 is bigger');
}
else if(5 > 4){
    console.log('5 is bigger')
}

//Switch Expression
switch(1+3){
    case 1: console.log("hello");break;
    case 2: console.log("hello");break;
    case 3: console.log("hello");break;
    case 4: console.log("hello");break;
    case 5: console.log("hello");break;
    default: console.log('nice');break;

}

// Loops
// for, while, do-while, infinite-loop, for-in, for-of
// repetition of same tasks
// infinite loops which keep on running
for(i=0;i<5;i++){
    console.log(i);
}

let i=0;
while(i<5){
    console.log(i);
}

let u=1
do{
    console.log(u)
}while(u >5);

