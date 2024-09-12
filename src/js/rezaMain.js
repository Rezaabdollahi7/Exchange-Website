// main.js
import { getFooter } from './components/footer.js';
import { getCryptoTrader } from './components/cryptoTrader.js';

document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('beforeend', getCryptoTrader());
    document.body.insertAdjacentHTML('beforeend', getFooter());
});
