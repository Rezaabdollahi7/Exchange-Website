import { getNavbar } from "./components/navbar.js";
import { trending } from "./components/trending.js";
import { exchange } from "./components/exchange.js";
import { transaction } from "./components/transaction.js";
import { getFooter } from "./components/footer.js";



const main = document.getElementById('exchange-page');
main.innerHTML += getNavbar;
main.innerHTML += trending;
main.innerHTML += exchange;
main.innerHTML += transaction;
main.innerHTML += getFooter;

