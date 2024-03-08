const baseURL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";
let dropdowns = document.querySelectorAll(".dropdown select");
let button = document.querySelector("form button");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let message = document.querySelector("#message");

for (let select of dropdowns){
    for (let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if ( select.name === "from" && currCode === "USD" ){
            newOption.selected = "selected";
        } else if ( select.name === "to" && currCode === "INR" ){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change" , (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (elem) => {
    let currCode = elem.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = elem.parentElement.querySelector("img");
    img.src = newSrc;
};

button.addEventListener("click" , async (event) => {
    event.preventDefault();
    let amount = document.querySelector("#amountInput");
    let amountValue = amount.value;
    if ( amountValue === "" || amountValue < 1 ){
        amountValue = 1;
        amount.value = "1";
    }
    // console.log(fromCurr.value , toCurr.value);
    const host = 'api.frankfurter.app';
    let respnose = await fetch(`http://${host}/latest?amount=${amountValue}&from=${fromCurr.value}&to=${toCurr.value}`);
    let data = await respnose.json();
    let rate = data.rates[toCurr.value];
    let finalAmout = amountValue * rate;
    message.innerText = `${amountValue} ${fromCurr.value} = ${finalAmout} ${toCurr.value}`;
})