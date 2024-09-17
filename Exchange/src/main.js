
import { getNavbar } from "./js/components/navbar.js";
import { trending } from "./js/components/trending.js";
import { transaction } from "./js/components/transaction.js";
import { getFooter } from "./js/components/footer.js";



const body = document.querySelector('body');

body.innerHTML += getNavbar;
body.innerHTML += trending;
body.innerHTML += transaction;
body.innerHTML += getFooter;
