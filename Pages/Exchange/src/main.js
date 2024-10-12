
import { getNavbar } from "./js/components/navbar.js";
import { connectOverlay } from "./js/components/navbar.js";
import { trending } from "./js/components/trending.js";
import { transaction } from "./js/components/transaction.js";
import { getFooter } from "./js/components/footer.js";
import { exchange } from "./js/components/exchange.js";



const body = document.querySelector('body');

body.innerHTML += getNavbar;
connectOverlay()
body.innerHTML += trending;
body.innerHTML += exchange;
body.innerHTML += transaction;
body.innerHTML += getFooter;
