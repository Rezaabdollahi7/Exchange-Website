import { addCommentSwiper, comment_part } from "./components/comments.js";
import { getCryptoMarketWatch } from "./components/cryptoMarketWatch.js";
import { getNavbar } from "./components/navbar.js";
import { getFooter } from './components/footer.js';
import { getHeader } from './components/header.js';
import { getCryptoTrader } from './components/cryptoTrader.js';
import { getSupporting } from './components/supporting.js';
import { getInternationalCoverege } from './components/internationalCoverage.js';


const body = document.querySelector('body');
body.innerHTML += getNavbar;
body.innerHTML += getHeader;
body.innerHTML += getCryptoMarketWatch;
body.innerHTML += comment_part;
body.innerHTML += getInternationalCoverege;
body.innerHTML += getSupporting;
body.innerHTML += getCryptoTrader;
body.innerHTML += getFooter;
addCommentSwiper()



