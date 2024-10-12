import { headerSwiper } from "./partials/_headerSwiper.js";
import { subTabs } from "./partials/_subTabs.js";
import { exchangeCoinsEvents } from "./_events.js";
import {swiperConfig} from "./swiperConfig.js"

const main = document.getElementById('exchangeCoins-mobile-page');
main.innerHTML += headerSwiper;
main.innerHTML += subTabs;
exchangeCoinsEvents();
swiperConfig();