// main.js
import { getHeader } from './components/header.js';
import { getFooter } from './components/footer.js';
import { getMainContent } from './components/main-content.js';

document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('afterbegin', getHeader());
    document.body.insertAdjacentHTML('beforeend', getMainContent());
    document.body.insertAdjacentHTML('beforeend', getFooter());
});
