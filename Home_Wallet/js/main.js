import chart from "../../Common/chartMaker/chartMaker.js"

const crypto = document.querySelector('#cryptoBtn');
const nft = document.querySelector('#nftBtn');
const chartContainers = document.querySelectorAll('.chartCont');

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

chartContainers.forEach(container => {
    chart('bitcoin', [-20,30,-290,20,50,12,56,90,90], 'auto', 2, container)
})
