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

const data = [[-20,0,30,-134,80], [-20,30,-290,140,50,12,56,90,43], [-20,30,320,230,50,12,56,90,11], [-20,90,10,45,36,-87,9], [-20,90,10,45,-36,87,9], [-20,30,-290,20,50,12,56,90,90]]

chartContainers.forEach((container, index) => {
    chart('bitcoin', data[index], 'auto', 2, container)
})
