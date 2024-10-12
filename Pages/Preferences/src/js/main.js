import { navbar } from "./partials/_nav.js";
import { optionListContainer } from "./partials/_options-list-container.js";
import { colorMenu } from "./partials/_colorMenu.js";
import { currencyMenu } from "./partials/_currencyMenu.js";
import { languageMenu } from "./partials/_languageMenu.js";
import {preferencesEvents} from "./_events.js"

const main = document.getElementById('preferences-mobile-page');
main.innerHTML += navbar;
main.innerHTML += optionListContainer;
main.innerHTML += currencyMenu;
main.innerHTML += languageMenu;
main.innerHTML += colorMenu;
preferencesEvents();