import nav from "./components/nav.js";
import stakeForm from "./components/stakeForm.js";
import walletDetails from "./components/walletDetails.js";

const main = document.querySelector("#main");
main.innerHTML += nav;
main.innerHTML += walletDetails;
main.innerHTML += stakeForm;

const inputContainer = document.querySelector(".input-container");
const amountInput = document.querySelector("#StakeAmount");
const coinIcon = document.querySelector("#coin-icon");
const dollarSign = document.querySelector(".dollar-sign");

document.addEventListener('DOMContentLoaded', () => {
    amountInput.value = "";
});

amountInput.addEventListener('input', () => {
    if (!amountInput.value){
        dollarSign.classList.remove("focus");
        coinIcon.classList.remove("focus");
        inputContainer.classList.remove("focus");
        
    } else{
        dollarSign.classList.add("focus");
        coinIcon.classList.add("focus");
        inputContainer.classList.add("focus");
        
    }
});