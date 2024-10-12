import { pageHeader } from "./partials/_pageHeader.js";
import { tabsContainer } from "./partials/_tabsContainer.js";
import { exchangeEvents } from "./_events.js";


const main = document.getElementById('exchange-mobile-page');
main.innerHTML += pageHeader;
main.innerHTML += tabsContainer;
exchangeEvents();
