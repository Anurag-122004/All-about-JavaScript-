/*CALLBACK HELL------------------------------------------------------------

function getData(dataID, getNextData) {
    setTimeout(() =>{
        console.log(`Data is ${dataID}`);
        if (getNextData){
            getNextData();
        }
    },3000);
};
getData(1, () =>{
    console.log(`Getting data 2....`);
    getData(2, () => {
        console.log(`getting Data 3.....`);
        getData(3, () => {
            console.log(`Getting Data 4.....`);
            getData(4);
        });
    });
});

PROMISE CHANINING BELOW CODE-----------------------------------------------

function asynFunc1() {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            console.log(`Data 1 To be printed...`);
            resolve(`Succes...`);
        },5000);
    });
};

function asynFunc2() {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            console.log(`Data 2 To be printed...`);
            resolve(`Succes...`);
        },5000);
    });
};


console.log(`Data 1 is fetching...`);
asynFunc1().then((getV) => {
    console.log(getV);
    console.log(`data 2 is fetching.....`);
    asynFunc2().then((getV) => {
        console.log(getV);
    });
});

function getData(data) {
    return new Promise ((resolve, rejects) => {
        setTimeout(() => {
            console.log(`Data is ${data}`);
            resolve(`success`);
        }, 3000);
    });
};

getData(1)
    .then((getV) => {
        return getData(2);
    })
    .then((getV) => {
        return getData(3);
    })
    .then((getV) => {
        console.log(`success`);
    });


ASYNS AND AWAIT NOW-------------------------------------------------------

async function hello (){
    console.log(`Hello I'm async..!!`);
}


function getData(data) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data is ${data}`);
            resolve(`success`);
        }, 3000);
    });
};

async function gettingData() {
    await getData(1);
    await getData(2);
    await getData(3);
} 

CALLING AN IIFE FUNCTION ------------------------------------------------ 

function getData(data) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data is ${data}`);
            resolve(`success`);
        }, 3000);
    });
};

(async function () {
    await getData(1);
    await getData(2);
    await getData(3);
}) (); */

//FETCHING APIS-------------------------------------------------------------------
const paraFact = document.querySelector("#fact");
const getfactButton = document.querySelector("#btn");
const URL = "https://cat-fact.herokuapp.com/facts";
var data;
const getData = async () => {
    console.log(`Fetching Data...`);
    let response = await fetch(URL);
    console.log(response);
    data = await response.json();
    paraFact.innerText = data[0].text;
}

btn.addEventListener("click" , getData);