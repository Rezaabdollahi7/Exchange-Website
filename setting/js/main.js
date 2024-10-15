import nav from "./components/nav.js";
import walletIcon from "./components/walletIcon.js";
import navigate from "./components/navigate.js";
import settingBody from "./components/settingBody.js";

const main = document.querySelector("#main");
main.innerHTML += nav;
main.innerHTML += walletIcon;
main.innerHTML += navigate;
main.innerHTML += settingBody;