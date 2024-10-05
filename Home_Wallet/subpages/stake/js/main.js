const inputContainer = document.querySelector(".input-container");
const amountInput = document.querySelector("#StakeAmount");
const coinIcon = document.querySelector("#coin-icon");
const dollarSign = document.querySelector(".dollar-sign");
const validatorBtn = document.querySelector("#validator-name");
// const pop_up = document.querySelector("#pop-up");
// const xmark = document.querySelector("#xmark");

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

// validatorBtn.addEventListener('click', () => {
//     pop_up.classList.toggle('d-none');
// })

// xmark.addEventListener('click', () => {
//     pop_up.classList.toggle('d-none');
// })