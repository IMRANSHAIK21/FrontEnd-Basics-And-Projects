// function print(){
//     console.log("Hello")
// }
//EventListener
// It listens to some browser events like click,scroll etc and do actions
// adding event
// above function will triggere
// document.addEventListener('click',print);
// removing event 
// document.removeEventListener('click',print);

// const content = document.querySelector('#wrapper');
// content.addEventListener('click',function(event){
//     console.log(event);
// });

// //Prevent Defaults
// let link = document.querySelector('a');
// link.addEventListener('click',function(evnetsData){
//     evnetsData.preventDefault();
//     console.log("now the Default behaviour is stopped by Prevent Default Function")
// })

//How to Avoid Excess Events
//Optimized code
// function ParaEvent(evnetData){
//     // making use of target in the eventData
//     // to get the individuality
//     console.log(evnetData.target.textContent);
// }

// let myDiv = document.createElement('div');
// myDiv.addEventListener('click',ParaEvent)
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = "This is a para" + i;
//     // here we are points to same function which same for each objet
//     // we can optimize this by creating afunction like above
//     // newElement.addEventListener('click',function(evnetData){
//     //     console.log("I have clicked on the Para ",i);
//     // })
//     myDiv.appendChild(newElement)
// }
// document.body.appendChild(myDiv)

//2nd example
// let ele = document.querySelector("#article")
// ele.addEventListener('click',function(event){
//       console.log(event.target.textContent)
// })

// Performance 
// how to check the performance
// adding 100 para
// const t1 = performance.now();// starting the timmer
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = "this is Para" + i;
//     document.body.appendChild(newElement)
// }
// const t2 = performance.now();
// const total1 = t2-t1;
// console.log("Time takes to run First Programm : " + (total1)+"ms")

//optimizing a bit
// why is this faster because we added a div step extra event though it is fast
// there are two concepts 
// Reflow : calculations where to put what on the screen like it will do mathematical calculations according to screen size
// it is a time taking process
// and Repaint : it is just drawing pixels after calculations

// This means in the fist example when ever we are adding the content 
// to the document every single time it will do Reflow and Repaint that for 100 paragraphs it will do 100 reflows and 100 repaits
// while in the second Example
// we create a div inside that we added paragraph and at the end we added this div to document
// now Reflow and Repait triggered less number of times

// const t3 = performance.now();
// let myDiv = document.createElement('div')
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = "this is Para" + i;
//     myDiv.appendChild(newElement)
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// const total2 = t4-t3;
// console.log("Time takes to run Second Programm : " + total2 +"ms")

// Document fragment
// we can optimize this second example also using this concept
// Document Fragment is a light weight document object model 
// with 0 Reflow and 0 Repaint, it will Relowed&Repainted after addint this to document
// Example
// it is a best practice to use this when we are doing 
// frequest Repaints and reflows.

// const t5 = performance.now();
// let fragment = document.createDocumentFragment()
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = "this is Para" + i;
//     fragment.appendChild(newElement)
// }
// document.body.appendChild(myDiv); // only one reflow and repaint
// const t6 = performance.now();
// const total3 = t6-t5;
// console.log("Time takes to run Second Programm : " + total3 +"ms")


// if(total1 > total2 && total1 > total3){
//     console.log("Second Program is fast")
// }
// else if(total2 > total3){
//     console.log("first Program is Fast")
// }
// else{
//     console.log("Third one is faster")
// }

// Call stack is list which holds function call when it is invoked and will be remove once execution of respective funciton is done 
// Single Threading: means one command at a time
// Javascript is a single threaded language
// function a(){
//     console.log("this is a A function")
// }

// function b(){
//     console.log("")
// }

// Event loop


// Asynchronous Javascript
// we will have block of code and we know it will run, but don't know when it runs
// console.log("Synchronous Javascirpt");
// // this is synchornous Code
// function sync(){
//     console.log('first')
// }
// sync();
// console.log("second")

// console.log("Asynchronous Javascirpt");
// setTimeout(function(){
//     // this is async code, execues only when call stack is empty
//     console.log("Third")
// })
// function sync(){
//     console.log('first')
// }
// sync();
// console.log("second")

// // Promise

// console.log("This is Promice start")
// let myPromice = new Promise(function(resolve, reject){
//     console.log("Hello Bro I am using Promise");
//     resolve(223);
// })

// console.log("This is promice End")
// console.log("Asynchronours Promice Starts")
// let myPromice1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//     console.log("Hello Bro I am using Async Promise");
//     })
//     resolve("223");
// })
// console.log("Asynchronours Promice end")

// // then and catch
// let myPromise3 = new Promise(function(resolve, reject){
//     console.log("Hello Bro I am using Promise");
//     resolve(1234);
// }) 

// let myPromise4 = new Promise(function(resolve, reject){
//     console.log("Hello Bro I am using Promise");
//     reject("SomeErro Happned");
// })

// this means do I need to do anything after fullfillment of data
// that time we use "then"
// work do we need to after completion of Promise
// myPromise3.then((value)=>{
//     console.log(value)
// })
// myPromise4.catch((value)=>{
//     console.log(value)
// })

// when depency is there
// let vaadaa1 = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("setTimout completed");
//         resolve("vaadaa1");
//     },2000);
//     // resolve("vaadaa1")-> if we add this it case issue because here code executes
//     // asynchronously that means before adding to queue itself out side we are resolving meaning we are saying it is completed

// });
// after completion of first vaadaa1 i want to run vaadaa2
// let vaada2 = vaadaa1.then(()=>{
//     let vaadaa = new Promise(function(resolve, reject){ 
//     console.log("In vaada 2") ;
//     resolve("Vaada2 Completed");
//     })
//     return vaadaa;
// })
// vaada2.then((value)=>console.log(value))


//Async - await
// Consider instead of two promises depends on each other like above example
// we have 500 promises depends on each other
// that time is it possible to use "then" and "catch" functions?
// No, so thats why we use Async-await
// it is a special syntax to work with promices
// we can make any function Asynchronous using "async" and waiting with "await"
// async function abcd(){
//     console.log("Hello Bro")
// }
// making a asyc function
// here everthing run parallelly
// async function utility(){
//     let apWhether = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("In Andhra It is very hot")
//         }, 1000);
//     });
//     let delhiWhether = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("In Andhra It is very hot")
//         }, 5000);
//     });
    
//     let aw = apWhether;
//     let dw = delhiWhether
//     return [aw,dw]
// }

// function call utility();
//Await
// if want stop this like if I want to execute the dw only if aw is completed
// or i want to execute return only when dw is completed
// this can be acheived by await, it will wait until the mentioneed operations are get completed

// async function utility1(){
//     let apWhether = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("In Andhra It is very hot")
//         }, 1000);
//     });
//     let delhiWhether = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("In Andhra It is very hot")
//         }, 5000);
//     });
    
//     let aw = await apWhether;
//     let dw = await delhiWhether
//     return [aw,dw]
// }
//utility1();


// Fetch Api
// Check Json Placeholder webiste to get fake api's
// Fetch Api with GET Call

// let fetchApi = fetch('https://jsonplaceholder.typicode.com/posts/1'); // fetching the content from the provided api
// let output =fetchApi.then((fetchApi)=>{return fetchApi.json()});
// console.log(output)

// we know, we can also do this using async and await
// fetch is a built in method so don't use it for function names, it will cause error
// async function GetCall(){
//     // Here it will wait until the fetch operation is complete, until completes it won't go to next line
//     let content = await fetch('https://api.publicapis.org/entries');
//     console.log(content)
//     let output = await content.json();
//     console.log(output)
// }
// GetCall()

// fetch call wih Post call
//if we give only url then it is only get call
// to do post call , including url we need to give the extra option
// fetch('api url',[options])
// options will be in object format only
// JSON.stringify will convert the json object to json string format
// console.log(JSON.stringify({val:3,n:2})) output: {"val":"3","n":"2"}
// why we are sending in this format becuse it is syntax
// let options = {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   };

// post call
// here we are sending the body contet to the below provided link
// why we are sending? because we want to put the contetn in that sever 
// let fetchCall = fetch('https://jsonplaceholder.typicode.com/posts',options);

//console.log(fetchCall)


// we can do same thing using async and await
// body - actual content we want to send the data
// header - additional data like secret key, encryption
// async function PostCall(){
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar jHello bro how are you',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       };
//       let fetchCall =await fetch('https://jsonplaceholder.typicode.com/posts',options);
//       let respon = await fetchCall.json();
//       return respon;
    
// }
// let res = PostCall();
// console.log(res)

//Closure Function
// let name = "Sher"
// function abcd(){
//     var name = "Mozilla"; // name is a local variable created in init
//     function displayName(){
//         // {
//         //     name="Bad"
//         // }
//         // let name = "Dragon"
//         // displayName() is the inner function that forms a closure
//         console.log(name);// use variable declaration in the parent function

//     }
//     return displayName;
// }
// here I returned a displayName function
// but as per the variable scopes it will destroty once the scope is ended
// but here 
// let func1 = abcd()
// func1();