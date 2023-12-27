console.log("Lets goooo");
// let rectangle ={
//     length:1, // properties
//     breadth:2,
//     draw:function(){
//         // behaviour
//         console.log(rectangle);
//     }
// }

//Factory function
// which creates an object and return it
// function createFunction(){
//     let rectangle ={
//         length:1, // properties
//         breadth:2,
//         draw:function(){
//             // behaviour
//             console.log(rectangle);
//         }
//     }

//     return rectangle;
// }

// let recatangleobj1 = createFunction();
// recatangleobj1.draw();

// Construction Function
// We follow the Pascal notation (FirstName)
// Constructor function is a function which initializes/define our properties/methods
function CreateRectangle(){
    this.length = 1;
    this.breadth = 2;
    this.draww = function(){
        console.log("Drawing")
    }
}

let rectangleobj = new CreateRectangle();
console.log(rectangleobj)

// in key word used to find whether a specific
// property is available or not
if('lengt' in rectangleobj){
    console.log("Yes it is there")
}
else{
    console.log("No it is not there")
}

// Constructor Property
// In any object, it will hava a propety called constructor that we call it as constructor property
// this will tell from which constructor function this object is created.


// primitive vs reference
//primitive
let a =10;
let b= a;
console.log(a, b++);

//reference
let c = {value:1}
let d = c;
console.log(c.value, d.value);
c.value++;
console.log(c.value, d.value);

// Clonig object- same to same copy
// lets clone the below object using different ways

let rect ={
    length:1,
    breadth:3,
    copy:5
};
console.log(rect);
// Iteration : means using loops
let usingIteration = {}
for(key in rect){
    usingIteration[key]=rect[key] 
}
console.log(usingIteration)

// Assign function
//let usingAssignFunction = Object.assign({},rect);
//or
let usingAssignFunction = {};
usingAssignFunction = Object.assign(usingAssignFunction, rect)
console.log(usingAssignFunction)

// Spread Operator(...) these three dots
let usingSpread = {...rect}
console.log("using Spread", usingSpread)







