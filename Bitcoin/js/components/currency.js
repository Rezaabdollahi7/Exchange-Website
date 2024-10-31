const currency = `<div class="currency-container my-4 position-relative" id="mainCoin-section">
            <div class="coinbox">
                <div class="coinbox__head d-flex align-items-center gap-4 mb-4">
                    <img src="../assets/Bitcoin.svg" alt="mainCoin-currency" width="59px" height="59px">
                    <span id="mainCoin-currency" class="currency-name">Bitcoin</span>
                </div>
                <div class="coinbox__wallet d-flex flex-column">
                    <span class="currency-wallet-amount w-100 position-relative" id="mainCoin-currency__wallet">5.211321 <span class="currency-status position-absolute top-50 end-0 translate-middle" id="mainCoin-currency__status"><i class="fa-solid fa-xl fa-caret-down"></i> -15%</span></span>
                    <span id="mainCoin-currency__total" class="head-span">$20.021</span>
                </div>
            </div>
            <img id="mainCoin-back" class="position-absolute end-0 top-0" src="../assets/btcback.svg" alt="back-icon">
        </div>`;

export default currency