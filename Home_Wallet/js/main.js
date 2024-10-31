import chart from "../../Common/chartMaker/chartMaker.js"

const crypto = document.querySelector('#cryptoBtn');
const nft = document.querySelector('#nftBtn');
const chartContainers = document.querySelectorAll('.chartCont');
const balance_status = document.querySelector("#balance-status");


crypto.addEventListener('click', cryptoClick);
nft.addEventListener('click', nftClick);

function cryptoClick() {
    crypto.classList.add('active');
    crypto.classList.remove('inactive');
    nft.classList.add('inactive');
    nft.classList.remove('active');
}

function nftClick() {
    crypto.classList.add('inactive');
    crypto.classList.remove('active');
    nft.classList.add('active');
    nft.classList.remove('inactive');
}

const data = [[-20, 0, 30, -134, 180], [-20, 30, -290, 140, 50, 12, 56, 90, 43], [-20, 30, 320, 230, 50, 12, 56, 90, 11], [-20, 90, 10, 45, 36, -87, 9], [-20, 90, 10, 45, -36, 87, 9], [-20, 30, -290, 20, 50, 12, 56, 90, 90], [-20, 0, 10], [25, 30, 15], [20, 30, 27], [10, 20, 45], [-20, 10, 0, -10], [10, 0, 20, 33], [17, 23, 45, 33], [10, 20, 24, 34, 40], [-20, 0, -5, 10, 17], [10, 24, 23, 20]]

chartContainers.forEach((container, index) => {
    chart('bitcoin', data[index], 'auto', 2, container)
})

if (balance_status.textContent[0] === '+') {
    balance_status.classList.add('up');
    balance_status.classList.remove('down');
    balance_status.childNodes[0].classList.add('fa-caret-up');
    balance_status.childNodes[0].classList.remove('fa-caret-down');
} else if (balance_status.textContent[0] === '-') {
    balance_status.classList.add('down');
    balance_status.classList.remove('up');
    balance_status.childNodes[0].classList.add('fa-caret-down');
    balance_status.childNodes[0].classList.remove('fa-caret-add');
}

// ! Buy

const inputContainer = document.querySelector(".input-container.buy-inp");
const amountInput = document.querySelector("#buy-walletInput");
const inputIcon = document.querySelector("#buy-wallet-icon");
const quickSelect = document.querySelectorAll(".buy-select-btn");
const dollarSign = document.querySelector(".buy-dollar-sign");
const currencyBtn = document.querySelector("#buy-navigateBtn");
const pop_up = document.querySelector("#buy-pop-up");
const xmark = document.querySelector("#buy-xmark");

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
    if (!amountInput.value) {
        dollarSign.classList.remove("focus");
        inputIcon.classList.remove("focus");
        inputContainer.classList.remove("focus");

    } else {
        dollarSign.classList.add("focus");
        inputIcon.classList.add("focus");
        inputContainer.classList.add("focus");

    }
});

currencyBtn.addEventListener('click', () => {
    console.log(pop_up.classList);
    pop_up.classList.remove('d-none');
})

xmark.addEventListener('click', () => {
    pop_up.classList.toggle('d-none');
})

// ! receive

const copyAddress = document.querySelector('#rec-dest-link');
const copyButton = document.querySelector("#rec-copyBtn");


copyButton.addEventListener('click', () => {
    const text = copyAddress.textContent.trim();
    navigator.clipboard.writeText(text);
    alert("Copied text: " + text);
})

// ! Send

const inputContainer_send = document.querySelector(".input-container.send-input-container");
const inputContainer_send2 = document.querySelector(".input-container.send-input-container-2");
const wallet_address = document.querySelector("#send-walletInput");
const wallet_address_icon = document.querySelector("#send-wallet-icon");
const amount_input = document.querySelector("#send-amountInput");
const amount_input_icon = document.querySelector("#send-money-icon");

wallet_address.addEventListener('input', () => {
    if (!wallet_address.value) {
        wallet_address_icon.classList.remove("focus");
        inputContainer_send.classList.remove("focus");

    } else {
        wallet_address_icon.classList.add("focus");
        inputContainer_send.classList.add("focus");

    }
});

amount_input.addEventListener('input', () => {
    console.log(!amount_input.value)
    if (!amount_input.value) {
        amount_input_icon.classList.remove("focus");
        inputContainer_send2.classList.remove("focus");

    } else {
        amount_input_icon.classList.add("focus");
        inputContainer_send2.classList.add("focus");

    }
});
