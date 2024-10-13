
import { getNavbar } from "./js/components/navbar.js";
import { walletsListContainer } from "./js/components/walletsListContainer.js";
import { metaWallet } from "./js/components/metaWallet.js";
import { deleteWallet } from "./js/components/deleteWallet.js";
import { stakeEvents } from "./js/stakeEvents.js"



const main = document.getElementById('stake-mobile-page');

main.innerHTML += getNavbar;
main.innerHTML += walletsListContainer;
main.innerHTML += metaWallet;
main.innerHTML += deleteWallet;
stakeEvents()
