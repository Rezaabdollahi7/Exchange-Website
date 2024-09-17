
import { getNavbar } from "./js/components/navbar.js";
import { trending } from "./js/components/trending.js";



const body = document.querySelector('body');

body.innerHTML += getNavbar;
body.innerHTML += trending;
