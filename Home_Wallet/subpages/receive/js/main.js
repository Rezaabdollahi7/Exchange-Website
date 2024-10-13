import nav from "./components/nav.js";
import coinDetails from "./components/coinDetails.js";
import navigate from "./components/navigate.js";
import receiveAddress from "./components/receiveAddress.js";

const main = document.querySelector("#main");
main.innerHTML += nav;
main.innerHTML += coinDetails;
main.innerHTML += navigate;
main.innerHTML += receiveAddress;

const copyAddress = document.querySelector('#dest-link');
const copyButton = document.querySelector("#copyBtn");


copyButton.addEventListener('click', () => {
    const text = copyAddress.textContent.trim();
    navigator.clipboard.writeText(text);
    alert("Copied text: " + text);
})