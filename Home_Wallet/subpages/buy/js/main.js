import nav from "./components/nav.js";
import walletDetails from "./components/walletDetails.js";
import navigate from "./components/navigate.js";
import buyForm from "./components/buyForm.js";
import popUp from "./components/popUp.js";

const main = document.querySelector("#main");
main.innerHTML += nav;
main.innerHTML += walletDetails;
main.innerHTML += navigate;
main.innerHTML += buyForm;
main.innerHTML += popUp;

const inputContainer = document.querySelector(".input-container");
const amountInput = document.querySelector("#walletInput");
const inputIcon = document.querySelector("#wallet-icon");
const quickSelect = document.querySelectorAll(".select-btn");
const dollarSign = document.querySelector(".dollar-sign");
const currencyBtn = document.querySelector("#navigateBtn");
const pop_up = document.querySelector("#pop-up");
const xmark = document.querySelector("#xmark");

quickSelect.forEach(btn => {
    btn.addEventListener('click', () => {
        amountInput.value = btn.dataset.value;
        dollarSign.classList.add("focus");
        inputIcon.classList.add("focus");
        inputContainer.classList.add("focus");
    })
});

document.addEventListener('DOMContentLoaded', () => {
    amountInput.value = "";
});

amountInput.addEventListener('input', () => {
    if (!amountInput.value){
        dollarSign.classList.remove("focus");
        inputIcon.classList.remove("focus");
        inputContainer.classList.remove("focus");
        
    } else{
        dollarSign.classList.add("focus");
        inputIcon.classList.add("focus");
        inputContainer.classList.add("focus");
        
    }
});

currencyBtn.addEventListener('click', () => {
    pop_up.classList.toggle('d-none');
})

xmark.addEventListener('click', () => {
    pop_up.classList.toggle('d-none');
})