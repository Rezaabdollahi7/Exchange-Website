import { pageHeader } from "./partials/_pageheader.js";
import { selectOptions } from "./partials/_selectOptions.js";


const main = document.getElementById('selectMode-mobile-page');
main.innerHTML += pageHeader;
main.innerHTML += selectOptions;
