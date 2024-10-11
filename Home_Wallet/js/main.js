import chart from "../../Common/chartMaker/chartMaker.js"
import nav from "./Components/nav.js"
import navigate from "./Components/navigate.js"
import walletDetails from "./Components/walletDetails.js"
import interactBtns from "./Components/interactBtns.js"
import controlSegment from "./Components/controlSegment.js"

const main = document.querySelector("#main");
main.innerHTML += nav;
main.innerHTML += navigate;
main.innerHTML += walletDetails;
main.innerHTML += interactBtns;
main.innerHTML += controlSegment;

const crypto = document.querySelector('#cryptoBtn');
const nft = document.querySelector('#nftBtn');
const chartContainers = document.querySelectorAll('.chartCont');
const balance_status = document.querySelector("#balance-status");


crypto.addEventListener('click', cryptoClick);
nft.addEventListener('click', nftClick);

function cryptoClick(){
    crypto.classList.add('active');
    crypto.classList.remove('inactive');
    nft.classList.add('inactive');
    nft.classList.remove('active');
}

function nftClick(){
    crypto.classList.add('inactive');
    crypto.classList.remove('active');
    nft.classList.add('active');
    nft.classList.remove('inactive');
}

const data = [[-20,0,30,-134,80], [-20,30,-290,140,50,12,56,90,43], [-20,30,320,230,50,12,56,90,11], [-20,90,10,45,36,-87,9], [-20,90,10,45,-36,87,9], [-20,30,-290,20,50,12,56,90,90]]

chartContainers.forEach((container, index) => {
    chart('bitcoin', data[index], 'auto', 2, container)
})

if (balance_status.textContent[0] === '+'){
    balance_status.classList.add('up');
    balance_status.classList.remove('down');
    balance_status.childNodes[0].classList.add('fa-caret-up');
    balance_status.childNodes[0].classList.remove('fa-caret-down');
} else if (balance_status.textContent[0] === '-'){
    balance_status.classList.add('down');
    balance_status.classList.remove('up');
    balance_status.childNodes[0].classList.add('fa-caret-down');
    balance_status.childNodes[0].classList.remove('fa-caret-add');
}

