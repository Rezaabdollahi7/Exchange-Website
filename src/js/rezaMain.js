// main.js
import { getFooter } from './components/footer.js';
import { getCryptoTrader } from './components/cryptoTrader.js';
import { getSupporting} from './components/supporting.js';

document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('beforeend', getSupporting());
    document.body.insertAdjacentHTML('beforeend', getCryptoTrader());
    document.body.insertAdjacentHTML('beforeend', getFooter());
});
