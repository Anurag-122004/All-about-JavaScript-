const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
let x = 5;
console.log(x);
if (true) {
    var y = 5;
}
console.log(y);
let mycar = "bob";
mycar = "tom";
console.log(mycar);
let vari = true;
let vari1 = 5;
let vari2 = "hello";
let dsa = [1,"bob",2,"secc"];
console.log(vari);
console.log(vari1);
console.log(vari2);
console.log(dsa);

if ( vari1 === x){
    console.log("true");
} else {
    console.log("false");
}

let ice = "chosc";
if (ice == "choc"){
    alert("yes i love choc");
} else {
    alert("baw i love choc");
}

function multiply (num1,num2){
    let result = (num1 * num2);
    return result;
}

document.querySelector("html").addEventListener("click", () => {
    alert("arrow function created")
})

let myButton = document.querySelector("button");

// myButton.addEventListener("click" , () => {
//     prompt("enter your name");
// });

myButton.onclick = () => {
    prompt("enter name");
};

let e = BigInt("5");
let f = Symbol("tommm");

const student = {
    name : "annu",
    age : 5,
    marks : 99,
};

const product = {
    productName : "Parker Jotter Standard",
    rating : 7002,
    productPrice : 270,
    discount : 1.35,
};

const profile = {
    name : "Anurag Kaushik",
    options : "Follow or Message",
    posts : 195,
    followers : "569k",
    following : 4,
    profession : "Entrepreneur",
    description : "DRDO, Ex-Microsoft, TedX Speaker",
};