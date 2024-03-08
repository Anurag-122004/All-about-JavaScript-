// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// let x = 5;
// console.log(x);
// if (true) {
//     var y = 5;
// }
// console.log(y);
// let mycar = "bob";
// mycar = "tom";
// console.log(mycar);
// let vari5 = true;
// let vari1 = 5;
// let vari2 = "hello";
// let dsa = [1,"bob",2,"secc"];
// console.log(vari5);
// console.log(vari1);
// console.log(vari2);
// console.log(dsa);

// const { get } = require("http");

// if ( vari1 === x){
//     console.log("true");
// } else {
//     console.log("false");
// }

// let ice = "chosc";
// if (ice == "choc"){
//     alert("yes i love choc");
// } else {
//     alert("baw i love choc");
// }

// function multiply (num1,num2){
//     let resultsss = (num1 * num2);
//     return resultsss;
// }

// document.querySelector("html").addEventListener("click", () => {
//     alert("arrow function created")
// })

// let myButton = document.querySelector("button");

// // myButton.addEventListener("click" , () => {
// //     prompt("enter your name");
// // });

// myButton.onclick = () => {
//     prompt("enter name");
// };

// let e = BigInt("5");
// let f = Symbol("tommm");

// const student = {
//     name : "annu",
//     age : 5,
//     marks : 99,
// };

// const product = {
//     productName : "Parker Jotter Standard",
//     rating : 7002,
//     productPrice : 270,
//     discount : 1.35,
// };

// const profile = {
//     name : "Anurag Kaushik",
//     options : "Follow or Message",
//     posts : 195,
//     followers : "569k",
//     following : 4,
//     profession : "Entrepreneur",
//     description : "DRDO, Ex-Microsoft, TedX Speaker",
// };

// let ww = 5;
// let ew = 5;
// console.log("a+b=", ww + ew);

// let agess = 25;
// if (agess > 18) {
//     console.log("yes you can vote");
// } else {
//     console.log("you can't vote ");
// }
// let aunty = 8;

// console.log(aunty > 55 ? "budha" : "javan");

// const fruit = "oranges";
// switch(fruit) {
//     case "mango":
//         console.log("price is 55");
//         break;
//     case "grapes":
//     case "oranges":
//         console.log("price of both is 45");
//         break;
//     default: console.log("no price due to error");
// }

// let number = prompt("enter a number");
// if ( number % 5 == 0 ){
//     console.log("yes it is multiple") ;
// } else {
//     console.log("not a multilpe");
// }

// let grades = prompt("enter your grades?");
// if ( grades > 95){
//     console.log("A+");
// } else if (grades < 95 && grades > 90){
//     console.log("A");
// } else if (grades < 90 && grades > 80){
//     console.log("B");
// } else if (grades < 80 && grades > 70){
//     console.log("C");
// } else {
//     console.log("D");
// }
// let sum = 0;
// let n = prompt("enter your number");
// for (let i=1; i<=n; i++){
//     sum+=i;
//     // console.log("Anurag Kaushik");
// }
// console.log("sum = ",sum);
// let n = prompt("enter your number");
// while (n <= 5){
//     console.log("Anurag Kaushik");
//     n++;
// }
// let stringv = "Anurag Kaushik";
// for (let i in stringv){
//     console.log("Value = ", i);
// }
// for ( let i=0; i<=100; i++){
//     if ( i % 2 === 0 ){
//         console.log("Even number = ", i);
//     } else {
//         console.log("odd Number = ", i);
//     }
// }
// let correctValue = 12;
// let userValue = prompt("enter your value");
// while ( userValue != correctValue ){
//     userValue = prompt("you entered wrong value , guess again");
// } 
// console.log("Congrts, You won..", userValue);
// let str = `AnuragKaushik`;
// console.log(str);

// const purchase = {
//     item : "pen",
//     price : 10
// }
// console.log(`The price of ${purchase.item} is ${purchase.price} Rs.`);
// console.log("The Price of ", purchase.item ," is ", purchase.price, " Rs.");
// let str = " Anurag Kaushik ";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.slice(2,5));
// console.log(str.replace("nur","run"));
// console.log(str.charAt(5));
// let username = prompt("Enter your full name");
// console.log(username);
// let len = username.length;
// let result = "@"+username + len;
// console.log(result);
// function getMonthName(mo) {
//     mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
//     const months = [
//     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
//     ];
//     if (months[mo]) {
//     return months[mo];
//     } else {
//     throw new Error("InvalidMonthNo"); // throw keyword is used here
//     }
// }

// try {
//     // statements to try
//     monthName = getMonthName(myMonth); // function could throw exception
// } catch (e) {
//     monthName = "unknown";
//     logMyErrors(e); // pass exception object to error handler (i.e. your own function)
// }

// function doSomethingErrorProne() {
//     if (ourCodeMakesAMistake()) {
//       throw new Error("The message");
//     } else {
//       doSomethingToGetAJavaScriptError();
//     }
//   }

//   try {
//     doSomethingErrorProne();
//   } catch (e) {
//     // Now, we actually use `console.error()`
//     console.error(e.name); // 'Error'
//     console.error(e.message); // 'The message', or a JavaScript error message
//   }
// try {
//     // Code that may throw an error
//     let result = someUndefinedVariable * 2;
//     console.log(result); // This line won't be executed if an error occurs
//     } catch (error) {
//     // Catch and handle the error
//     console.error("An error occurred:", error.message);
//     } finally {
//     // Code that will always be executed, regardless of whether an error occurred or not
//     console.log("This is the 'finally' block.");
//     }
// let sum = 0;
// let marks = [85,97,44,37,76,60];
// for (let val of marks){
//     sum += val;
// }
// let avgmarks = (sum/marks.length);
// console.log(`Average Marks are ${avgmarks}`);
// let i;
// let newprice = [];
// let prices = [250, 645, 300, 900, 50];
// for (i in prices){
//     let offer = prices[i] / 10;
//     prices[i] = prices[i] - offer;
//     newprice.push(prices[i]);
// }
// console.log(`Final Price = ${newprice}`);
// console.log(newprice.pop());
// console.log(newprice.pop());
// console.log(newprice.pop());
// console.log(newprice.pop());
// console.log(newprice.pop());
// console.log(`Final Price = ${newprice}`);
// console.log(newprice.toString());
// console.log(newprice.unshift(999));
// console.log(newprice);
// console.log(newprice.shift());
// console.log(newprice);
// console.log(newprice.slice(1,4));
// console.log(newprice.splice(2,2,1000,2000));
// console.log(newprice);

// let compinies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(compinies);
// console.log(compinies.shift());
// console.log(compinies);
// console.log(compinies.splice(1,1,"OLA"));
// console.log(compinies);
// console.log(compinies.push("Amazon"));
// console.log(compinies);

// function myFunction() {
//     console.log(`Anurag Kaushik`);
// }

// myFunction();
// const mul = (a, b) => {
//     return a * b;
// }
// console.log(mul(2,17));
// let str = "Anurag";
// console.log(str[5]);
// let count = 0;
// let vowels = (str) => {
//     let newstr = str.toLowerCase();
//     for ( let i in newstr){
//         if (newstr[i] == "a" || newstr[i] == "e" || newstr[i] == "i" || newstr[i] == "o" || newstr[i] == "u"){
//             count++;
//         }
//     }
//     return count;
// }
// let counts = vowels("wrtpp");
// console.log(`Number of Vowels = ${counts}`);
// let arrayy = [1,2,3,4,5,6];
// arrayy.forEach((value, i) =>{
//     console.log(value, i);
// });
// let array = [1,2,3,4,5];
// let newArray = array.map((value) => {
//     return value * value;
// });
// console.log(newArray);
// let array = [1,2,3,4,5,6,7,8,9,10];
// let newarray = array.filter((value) =>{
//     return (value > 5);
// });
// console.log(newarray);
// let array = [1,2,3,4,5];
// let newvalue = array.reduce((sum, value) => {
//     return (sum += value) ;
// });
// console.log(newvalue);
// let userValue = prompt("Enter the limitng value");
// let array = [];
// for ( let i=1; i<=userValue; i++){
//     array.push(i);
// }
// let sumarray = array.reduce((sum, value) => {
//     return (sum += value);
// });
// console.log(`Sum = ${sumarray}`);

// let prodarray = array.reduce((product = 1 , value) =>{
//     return (product *= value);
// });
// console.log(` prodarray = ${prodarray}`);
// console.dir(document.getElementById("h11"));
// console.dir(document.getElementsByClassName("wer"));
// console.dir(document.getElementsByTagName("div"));
// console.dir(document.querySelector("#heading"));
// console.dir(document.querySelector(".wer"));
// console.dir(document.querySelector("div").children);
// let div = document.querySelector("div");
// console.dir(div);
// console.log(div.innerHTML);
// let heading = document.querySelector("h1");
// console.log(heading);
// let appendH = " from CU";
// let heading = document.querySelector("h2");
// let oldc = heading.innerText;
// let cHeading = oldc + appendH;
// console.log(cHeading);
// let newbtn = document.createElement("button");
// newbtn.innerText = "Click me";
// console.log(newbtn);

// let div = document.querySelector("div");
// div.after(newbtn);

// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";
// let bdy = document.body;
// bdy.insertBefore(newbtn, bdy.firstChild);
// let parag = document.querySelector("p");
// // parag.setAttribute("class","newclass"); this remove the properties applied in css also we will use classlsit
// parag.classList.add("newClass");
// let divs =  document.querySelector("div");

// btn.onclick = () => {
//     console.log("Button was click");
//     let a=25;
//     a++;
//     console.log(a);
// };
// btn.onclick = (e) => {
//     console.log(e);
// };
// btn.addEventListener("click", () => {
//     console.log(" Handler 1 ");
// });

// btn.addEventListener("click", () => {
//     console.log(" Handler 2 ");
// });

// btn.addEventListener("click", () => {
//     console.log(" Handler 3 ");
// });

// const handler4 = () => {
//     console.log(" Handler 4 ");
// };
// btn.addEventListener("click", handler4);

// btn.removeEventListener("click" , handler4);

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("You were inside div");
// };
// div.addEventListener("mouseover", () => {
//     console.log("adevenlistern using inside were div");
// });

// let mode = document.querySelector("#mode");
// let currMode = "light";

// mode.addEventListener("click", () => {
//     if ( currMode === "light" ){
//         currMode = "dark";
//         document.body.style.backgroundColor = "black";
//         // console.log("Light");
//     } else {
//         // console.log("Dark");
//         currMode = "light";
//         document.body.style.backgroundColor = "white";
//     }
//     console.log(currMode);
// });
// const employee = {
//     calcTax() {
//         console.log(`Tax rate is 10%`);
//     }
// };

// const karanArjun = {
//     salary : 50000,
// };
// const karanArjun2 = {
//     salary : 50000,
// };
// const karanArjun3 = {
//     salary : 50000,
// };


// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;

// class ToyotaCar {
//     start() {
//         console.log(`car is started`);
//     } 
//     stop() {
//         console.log(`car is stopped`);
//     }
// }

// let fortuner = new ToyotaCar();

// class Parent {
//     hello () {
//         console.log("this is parent class..");
//     }
// }

// class child extends Parent {
//     hello() {
//         console.log(`THis is child class....`);
//     }
// }

// let obj = new child();
// let Data = "WEbsite is loading ...loading...";

// class User{
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log(`Data is ${Data}`);
//     }
// }

// // let student1 = new User("Anurag Kaushik", "anuragooficial.wrk@gmail.com");
// class Admin extends User{
//     editData() {
//     }
// }
// const hello = () => {
//     console.log(`Anurag Kaushik here..`);
// };

// setTimeout(hello, 5000);
// function getData(dataID, getNextData) {
//     setTimeout(() =>{
//         console.log(`Data is ${dataID}`);
//         if (getNextData){
//             getNextData();
//         }
//     },3000);
// };
// //CALLBACK HELL--
// getData(1, () =>{
//     console.log(`Getting data 2....`);
//     getData(2, () => {
//         console.log(`getting Data 3.....`);
//         getData(3, () => {
//             console.log(`Getting Data 4.....`);
//             getData(4);
//         });
//     });
// });

// let promise = new Promise((resolve, reject) => {
//     console.log(`Promise is fullfilled...`);
// });
