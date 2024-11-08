import { header } from "./components/header.js"
import { slogan } from "./components/slogan.js"
import { spinRoulette } from "./components/slogan.js"
import { footer } from "./components/footer.js"
import { accordionSwiperinit, accordions } from "./components/accordions.js"
import { weekly_spaces } from "./components/weekly-spaces.js"
import { copyEvent } from "./copy-events.js"
import { tokenmicsSwiper, tokenmics } from "./components/tokenmics.js"
import { notifAlert } from "./components/notif.js"
import { scrollCounter } from "./components/scroll-counter.js"

let main = document.getElementById('memecoin-page')

main.innerHTML += header;
notifAlert();
main.innerHTML += slogan;
copyEvent();
spinRoulette();
main.innerHTML += tokenmics;
scrollCounter();
main.innerHTML += weekly_spaces;
main.innerHTML += accordions;
main.innerHTML += footer;
tokenmicsSwiper();
accordionSwiperinit();