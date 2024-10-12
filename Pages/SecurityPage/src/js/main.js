import { navbar } from "./partials/_nav.js";
import { securityListContainer } from "./partials/_security-list-container.js";
import { autoLockMenu } from "./partials/_autoLockMenu.js";
import { emailMenu } from "./partials/_emailMenu.js";
import { phoneNumberMenu } from "./partials/_phoneNumberMenu.js";
import { notifMenu } from "./partials/_notifmenu.js";
import { passwordMenu } from "./partials/_passwordMenu.js";
import {securityEvents} from "./_events.js"

const main = document.getElementById('security-mobile-page');
main.innerHTML += navbar;
main.innerHTML += securityListContainer;
main.innerHTML += autoLockMenu;
main.innerHTML += emailMenu;
main.innerHTML += phoneNumberMenu;
main.innerHTML += notifMenu;
main.innerHTML += passwordMenu;
securityEvents();