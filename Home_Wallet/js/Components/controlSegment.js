const controlSegment = `
 <div class="control-segment p-1">
            <button type="button" id="cryptoBtn" class="btn btn-toggle active">Crypto</button>
            <button type="button" id="nftBtn" class="btn btn-toggle inactive">NFT <span class="badge rounded-pill"
                    id="badge">2</span></button>
        </div>
        

        <div class="coins-section mt-5">
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/Bitcoin.svg" alt="bitcoin" width="40px" height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">Bitcoin</span>
                        <abbr title="Bitcoin" class="">BTC</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$20,788</span>
                        <span class="coinStatus up">+0,25%</span>
                    </div>
                </div>
            </div>
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/Ethereum.svg" alt="ethereum" width="40px" height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">Ethereum</span>
                        <abbr title="Ethereum" class="">ETH</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$20,788</span>
                        <span class="coinStatus down">-0,25%</span>
                    </div>
                </div>
            </div>
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/modals-icons/bitcoin-cash-bch-logo.png" alt="bch" width="40px" height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">BCH</span>
                        <abbr title="XRP" class="">BCH</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$20,788</span>
                        <span class="coinStatus down">-0,25%</span>
                    </div>
                </div>
            </div>
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/modals-icons/bnb-bnb-logo.png" alt="BNB" width="40px" height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">Binance</span>
                        <abbr title="Binance" class="">BNB</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$20,788</span>
                        <span class="coinStatus up">-0,25%</span>
                    </div>
                </div>
            </div>
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/modals-icons/dogs-dogs-logo.png" alt="dogs" width="40px" height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">Dogs</span>
                        <abbr title="Dash" class="">DOG</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$20,788</span>
                        <span class="coinStatus down">-0,25%</span>
                    </div>
                </div>
            </div>
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/modals-icons/fantom-ftm-logo.png" alt="fantom" width="40px" height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">Fantom</span>
                        <abbr title="Litecoin" class="">FTM</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$20,788</span>
                        <span class="coinStatus down">-0,25%</span>
                    </div>
                </div>
            </div>
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/modals-icons/floki-inu-floki-logo.png" alt="floki" width="40px" height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">Floki</span>
                        <abbr title="Litecoin" class="">Floki</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$25,788</span>
                        <span class="coinStatus up">+10,45%</span>
                    </div>
                </div>
            </div>
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/modals-icons/multi-collateral-dai-dai-logo.png" alt="dai" width="40px"
                        height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">Dai</span>
                        <abbr title="Litecoin" class="">dai</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$2,788</span>
                        <span class="coinStatus down">-5,00%</span>
                    </div>
                </div>
            </div>
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/modals-icons/pepe-pepe-logo.png" alt="pepe" width="40px" height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">Pepe</span>
                        <abbr title="Litecoin" class="">pepe</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$45,788</span>
                        <span class="coinStatus down">-0,65%</span>
                    </div>
                </div>
            </div>
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/modals-icons/pol.png" alt="pol" width="40px" height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">Pol</span>
                        <abbr title="Litecoin" class="">pol</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$32,58</span>
                        <span class="coinStatus up">+17,45%</span>
                    </div>
                </div>
            </div>
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/modals-icons/shiba-inu-shib-logo.png" alt="shiba" width="40px" height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">Shiba</span>
                        <abbr title="Litecoin" class="">shib</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$20,788</span>
                        <span class="coinStatus down">-10,45%</span>
                    </div>
                </div>
            </div>
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/modals-icons/solana-sol-logo.png" alt="solana" width="40px" height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">Solana</span>
                        <abbr title="Litecoin" class="">sol</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$55,788</span>
                        <span class="coinStatus up">+20,05%</span>
                    </div>
                </div>
            </div>
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/modals-icons/tether-usdt-logo.png" alt="Tether" width="40px" height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">Tether</span>
                        <abbr title="Litecoin" class="">usdt</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$18,788</span>
                        <span class="coinStatus down">-20,45%</span>
                    </div>
                </div>
            </div>
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/modals-icons/toncoin-ton-logo.png" alt="ton" width="40px" height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">Toncoin</span>
                        <abbr title="Litecoin" class="">ton</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$13,788</span>
                        <span class="coinStatus up">+20,4%</span>
                    </div>
                </div>
            </div>
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/modals-icons/tron-trx-logo.png" alt="trx" width="40px" height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">Tron</span>
                        <abbr title="Litecoin" class="">trx</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$65,788</span>
                        <span class="coinStatus up">+21,45%</span>
                    </div>
                </div>
            </div>
            <div class="coin">
                <div class="coin_details">
                    <img src="assets/modals-icons/xrp-xrp-logo.png" alt="xrp" width="40px" height="40px">
                    <div class="coin_details_text">
                        <span class="coin-name">Xrp</span>
                        <abbr title="Litecoin" class="">xrp</abbr>
                    </div>
                </div>
                <div class="coinMarket">
                    <div class="chartCont"></div>
                    <div class="coinWorth">
                        <span class="coinPrice">$25,788</span>
                        <span class="coinStatus down">-0,45%</span>
                    </div>
                </div>
            </div>
        </div>

        
        `

export default controlSegment