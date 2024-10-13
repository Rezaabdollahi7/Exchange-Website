import nav from "./components/nav.js";
import coinDetails from "./components/coinDetails.js";
import navigate from "./components/navigate.js";
import sendInfo from "./components/sendInfo.js";

const main = document.querySelector("#main");
main.innerHTML += nav;
main.innerHTML += coinDetails;
main.innerHTML += navigate;
main.innerHTML += sendInfo;

const amountInput = document.querySelector("#amountInput");
const amountIcon = document.querySelector("#money-icon");
const amountContainer = document.querySelector(".input-container.amount");
const walletInput = document.querySelector("#walletInput");
const walletIcon = document.querySelector("#wallet-icon");
const walletContainer = document.querySelector(".input-container.wallet");

document.addEventListener('DOMContentLoaded', () => {
    amountInput.value = "";
    walletInput.value = "";
});

amountInput.addEventListener('input', () => {
    if (!amountInput.value){
        amountIcon.classList.remove("focus");
        amountContainer.classList.remove("focus");
        
    } else{
        amountIcon.classList.add("focus");
        amountContainer.classList.add("focus");
    }
});

walletInput.addEventListener('input', () => {
    if (!walletInput.value){
        walletIcon.classList.remove("focus");
        walletContainer.classList.remove("focus");
        
    } else{
        walletIcon.classList.add("focus");
        walletContainer.classList.add("focus");
    }
});