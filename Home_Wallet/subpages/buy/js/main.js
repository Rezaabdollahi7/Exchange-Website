const inputContainer = document.querySelector(".input-container");
const amountInput = document.querySelector("#walletInput");
const inputIcon = document.querySelector("#wallet-icon");
const quickSelect = document.querySelectorAll(".select-btn");
const dollarSign = document.querySelector(".dollar-sign");

quickSelect.forEach(btn => {
    btn.addEventListener('click', () => {
        amountInput.value = btn.dataset.value;
        dollarSign.classList.add("focus");
        inputIcon.classList.add("focus");
        inputContainer.classList.add("focus");
    })
})

document.addEventListener('DOMContentLoaded', () => {
    amountInput.value = "";
})

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
})