import { header } from "./components/header.js"
import { slogan } from "./components/slogan.js"
import { footer } from "./components/footer.js"
import { accordions } from "./components/accordions.js"
import { accordionSwiperinit } from "./components/accordions.js"
import { weekly_spaces } from "./components/weekly-spaces.js"
import { copyEvent } from "./events.js"

let main = document.getElementById('memecoin-page')

main.innerHTML += header;
main.innerHTML += slogan;
main.innerHTML += weekly_spaces;
main.innerHTML += accordions;
main.innerHTML += footer;
accordionSwiperinit();
copyEvent();