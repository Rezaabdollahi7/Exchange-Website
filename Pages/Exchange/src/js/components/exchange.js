const exchange = `
        <section id="exchange" class=" mt-5">
            <div class="container-fluid">
                <h3 class="section-tittle">Exchange</h3>

            </div>


            <div class="row mt-4">
                <!-- left section -->
                <div
                    class="left-container col-lg-3 mb-4 d-flex flex-column justify-content-center align-items-center position-relative">


                    <!-- icons -->
                    <div class="exchange-setting-icons-container d-flex justify-content-end align-items-center w-100">
                        <a href="#">
                            <img src="./assets/icons/History-Icon.svg" alt="History-Icon" class="exchange-coin-icon">
                        </a>
                        <a href="#" class="ms-2">
                            <img src="./assets/icons/Settings-Icon.svg" alt="Settings-Icon" class="exchange-coin-icon">
                        </a>
                    </div>

                    <!-- first -->
                    <div class="d-flex justify-content-around align-items-center mt-4 w-100">
                        <div class="card-body">
                            <!--  -->
                            <div class="coins-container d-flex justify-content-around align-items-center">
                                <div class="coin-details d-flex align-items-center">
                                    <div class="img-and-name-count p-2 rounded-3  d-flex justify-content-center align-items-center flex-column "
                                        data-bs-toggle="modal" data-bs-target="#usdtModal" data-bs-toggle="tooltip" data-bs-placement="top" title="click to change">
                                        <img id="usdtImg" src="./assets/icons/theter.svg" alt="theter"
                                            class="coin-icon exchange-coin-icon">
                                        <span id="usdtLabel" class="coin-symbol text-center mt-3 w-100">USDT</span>
                                    </div>

                                    <div class="coin-name d-flex flex-column align-items-end ">
                                        <input id="usdtAmount" class="coin-amount mt-2 w-100" placeholder="Like 300"
                                            type="number">
                                        <div class="coin-price d-flex flex-column w-100">
                                            <span id="usdtDollar" class="coin-value mt-3">~$ 994.15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--  -->

                        </div>
                    </div>

                    <!-- second token -->
                    <div class="d-flex justify-content-around align-items-center mt-4 w-100">
                        <div class="card-body">
                            <div class="coins-container d-flex justify-content-around align-items-center">
                                <div class="coin-details d-flex align-items-center">
                                    <div class="img-and-name-count p-2 rounded-3  d-flex justify-content-center align-items-center flex-column "
                                        data-bs-toggle="modal" data-bs-target="#ethModal" data-bs-toggle="tooltip" data-bs-placement="top" title="click to change">
                                        <img id="ethImg" src="./assets/icons/etherium.svg" alt="etherium"
                                            class="coin-icon exchange-coin-icon">
                                        <span id="ethLabel" class="coin-symbol text-center mt-3 w-100">ETH</span>
                                    </div>

                                    <div class="coin-name d-flex flex-column align-items-end ">
                                        <input id="ethAmount" class="coin-amount mt-2 w-100" placeholder="Like 300"
                                            type="number">
                                        <div class="coin-price d-flex flex-column w-100">
                                            <span id="ethDollar" class="coin-value mt-3">~$ 994.15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--! swap -->
                    <div
                        class="col-lg-3  d-flex align-items-center justify-content-center swap-container position-absolute">
                        <button id="swapButton" class=" ">
                            <img src="./assets/swap-icon.svg" alt="swap-icon">
                        </button>
                    </div>


                    <button class="connect-wallet-btn mt-4">
                        Connect Wallet
                    </button>

                    <div class="more-info-container d-flex flex-column w-100 mt-5">
                        <div class="more-title d-flex justify-content-between w-100">
                            <h4 class="more-text">More information</h4>
                            <img class="more-icon" src="./assets/icons/Arrow.svg" alt="Arrow-icon">
                        </div>

                        <ul class="more-items w-100 p-0 mt-2">
                            <li class="d-flex w-100 mt-3 justify-content-between align-items-center">
                                <span class="right-text">You Save</span>
                                <span class="left-precent positive-bg">~$ 994.15</span>
                            </li>

                            <hr>

                            <li class="d-flex w-100 mt-3 justify-content-between align-items-center">
                                <span class="right-text">DIFFERENCE</span>
                                <span class="left-precent">-0.8%</span>
                            </li>
                            <li class="d-flex w-100 mt-3 justify-content-between align-items-center">
                                <span class="right-text">1 ETH BUY PRICE</span>
                                <span class="left-precent">~ $2,315.39</span>
                            </li>
                            <li class="d-flex w-100 mt-3 justify-content-between align-items-center">
                                <span class="right-text">PLATFORM FEE</span>
                                <span class="left-precent">~ 0.50%</span>
                            </li>
                            <li class="d-flex w-100 mt-3 justify-content-between align-items-center">
                                <span class="right-text">FEE DISCOUNT</span>
                                <span class="left-precent">0%</span>
                            </li>
                        </ul>
                    </div>


                </div>
                <!-- Right Section (4 columns) -->
                <div class="col-lg-9 right-container">
                    <div class="top-img-container d-flex justify-content-center align-items-center">
                        <img src="./assets/Network.svg" alt="exchange-icon">
                    </div>

                    <div class="table-responsive pt-4">
                        <table class="table table-borderless table-striped text-light">
                            <thead>
                                <tr class="main-tr">
                                    <th class="d-flex align-items-center sortable">
                                        <span>
                                            Exchange
                                        </span>
                                        <img class="ms-2" src="./assets/icons/Line.svg" alt="sort-icon">
                                    </th>

                                    <th>QUOTE</th>
                                    <th class="text-center">MIN. RECEIVED</th>
                                    <th>GAS FEE</th>
                                    <th class="text-center">YOU SAVE</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr class="my-4 ">
                                    <td class="d-flex  align-items-center">
                                        <img src="./assets/icons/paraswap.svg" alt="paraswap" class="small-icon">
                                        <div class="coin-name-container d-flex flex-column ms-3">
                                            <span class="comname">Paraswap</span>
                                            <span class="nickname mt-1">DEX | INSTANT</span>
                                        </div>
                                    </td>
                                    <td>0.434 USD</td>
                                    <td class="text-center">$38,755</td>
                                    <td>-$1.01</td>
                                    <td class="text-green text-center">$559,189.41</td>
                                </tr>

                                <tr>
                                    <td class="d-flex  align-items-center">
                                        <img src="./assets/icons/btc.svg" alt="btc" class="small-icon">
                                        <div class="coin-name-container d-flex flex-column ms-3">
                                            <span class="comname">Bitcoin</span>
                                            <span class="nickname mt-1">BTC</span>
                                        </div>
                                    </td>

                                    <td>0.434 USD</td>
                                    <td class="text-center">$38,755</td>
                                    <td>-$1.01</td>
                                    <td class="text-green text-center">$559,189.41</td>
                                </tr>

                                <tr>
                                    <td class="d-flex  align-items-center">
                                        <img src="./assets/icons/tron-noborder.svg" alt="tron" class="small-icon">
                                        <div class="coin-name-container d-flex flex-column ms-3">
                                            <span class="comname">Tron</span>
                                            <span class="nickname mt-1">TRX</span>
                                        </div>
                                    </td>


                                    <td>0.434 USD</td>
                                    <td class="text-center">$38,755</td>
                                    <td>-$1.01</td>
                                    <td class="text-green text-center">$559,189.41</td>
                                </tr>

                                <tr>
                                    <td class="d-flex  align-items-center">
                                        <img src="./assets/icons/bnb.svg" alt="bnb" class="small-icon">
                                        <div class="coin-name-container d-flex flex-column ms-3">
                                            <span class="comname">Binance</span>
                                            <span class="nickname mt-1">BNB</span>
                                        </div>
                                    </td>

                                    <td>0.434 USD</td>
                                    <td class="text-center">$38,755</td>
                                    <td>-$1.01</td>
                                    <td class="text-green text-center">$559,189.41</td>
                                </tr>

                                <tr>
                                    <td class="d-flex  align-items-center">
                                        <img src="./assets/icons/polygon.svg" alt="polygon" class="small-icon">
                                        <div class="coin-name-container d-flex flex-column ms-3">
                                            <span class="comname">Polygon</span>
                                            <span class="nickname mt-1">MATIC</span>
                                        </div>
                                    </td>

                                    <td>0.434 USD</td>
                                    <td class="text-center">$38,755</td>
                                    <td>-$1.01</td>
                                    <td class="text-green text-center">$559,189.41</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <!-- first Modal -->
            <div class="modal fade firstTokenCointainer rounded-5 border-0" id="usdtModal" tabindex="-1"
                aria-labelledby="usdtModalLabel" aria-hidden="true">
                <div class="firstcoin-modal modal-dialog modal-dialog-centered rounded-5 border-0">
                    <div class="modal-content rounded-5 border-0">
                        <div class="modal-header p-4 border-0">
                            <h5 class="modal-title text-white" id="usdtModalLabel">Select a token... </h5>
                            <button type="button" class="btn-close text-secondary" data-bs-dismiss="modal"
                                aria-label="بستن"></button>
                        </div>
                        <div class="modal-body">
                            <div class="search-container">
                                <span class="search-icon"></span>
                                <input type="text" class="form-control shadow-lg" id="usdtSearch"
                                    placeholder="Find tokens by name ... ">
                            </div>
                            <ul class="list-group mt-4" id="usdtList">

                                <li class="list-group-item p-0 bg-transparent border-0" data-symbol="ETH"
                                    data-img-src="./assets/icons/modals-icons/ethereum-eth-logo.png">
                                    <div class="item-left-container d-flex align-items-center gap-2 w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/ethereum-eth-logo.png" alt="ETH">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">ETH</p>
                                        </div>
                                    </div>
                                </li>


                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/bitcoin-btc-logo.png" data-symbol="BTC">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/bitcoin-btc-logo.png" alt="BTC">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">BTC</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/solana-sol-logo.png" data-symbol="SOL">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/solana-sol-logo.png" alt="sol">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">SOL</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/tether-usdt-logo.png" data-symbol="USDT">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/tether-usdt-logo.png" alt="usdt">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">USDT</p>
                                        </div>
                                    </div>
                                </li>



                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/bitcoin-cash-bch-logo.png"
                                    data-symbol="BCH">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/bitcoin-cash-bch-logo.png" alt="BCH">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">BCH</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/toncoin-ton-logo.png" data-symbol="TON">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/toncoin-ton-logo.png" alt="ton">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">TON</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/tron-trx-logo.png" data-symbol="TRX">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/tron-trx-logo.png" alt="trx">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">TRX</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/bnb-bnb-logo.png" data-symbol="BNB">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/bnb-bnb-logo.png" alt="bnb">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">BNB</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/dogs-dogs-logo.png" data-symbol="DOGS">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/dogs-dogs-logo.png" alt="dogs">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">DOGS</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/fantom-ftm-logo.png" data-symbol="FTM">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/fantom-ftm-logo.png" alt="fantom">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">FTM</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/floki-inu-floki-logo.png"
                                    data-symbol="FLOKI">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/floki-inu-floki-logo.png" alt="floki">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">FLOKI</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/multi-collateral-dai-dai-logo.png"
                                    data-symbol="DAI">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/multi-collateral-dai-dai-logo.png"
                                            alt="dai">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">DAI</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/pepe-pepe-logo.png" data-symbol="PEPE">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/pepe-pepe-logo.png" alt="pepe">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">PEPE</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/shiba-inu-shib-logo.png"
                                    data-symbol="SHIBA">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/shiba-inu-shib-logo.png" alt="shiba">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">SHIBA</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/xrp-xrp-logo.png" data-symbol="XRP">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/xrp-xrp-logo.png" alt="xrp">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">XRP</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/pol.png" data-symbol="POL">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/pol.png" alt="pol">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">POL</p>
                                        </div>
                                    </div>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!--  second token Modal -->
            <div class="modal fade secondTokenCointainer rounded-5 border-0" id="ethModal" tabindex="-1"
                aria-labelledby="ethModalLabel" aria-hidden="true">
                <div class="secondcoin-modal modal-dialog modal-dialog-centered rounded-5 border-0">
                    <div class="modal-content rounded-5 border-0">
                        <div class="modal-header p-4 border-0">
                            <h5 class="modal-title text-white" id="ethModalLabel">Select a token... </h5>
                            <button type="button" class="btn-close text-secondary" data-bs-dismiss="modal"
                                aria-label="بستن"></button>
                        </div>
                        <div class="modal-body">
                            <div class="search-container">
                                <span class="search-icon"></span>
                                <input type="text" class="form-control shadow-lg" id="ethSearch"
                                    placeholder="Find tokens by name ... ">
                            </div>
                            <ul class="list-group mt-4" id="ethList">

                                <li class="list-group-item p-0 bg-transparent border-0" data-symbol="ETH"
                                    data-img-src="./assets/icons/modals-icons/ethereum-eth-logo.png">
                                    <div class="item-left-container d-flex align-items-center gap-2 w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/ethereum-eth-logo.png" alt="ETH">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">ETH</p>
                                        </div>
                                    </div>
                                </li>


                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/bitcoin-btc-logo.png" data-symbol="BTC">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/bitcoin-btc-logo.png" alt="BTC">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">BTC</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/solana-sol-logo.png" data-symbol="SOL">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/solana-sol-logo.png" alt="sol">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">SOL</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/tether-usdt-logo.png" data-symbol="USDT">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/tether-usdt-logo.png" alt="usdt">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">USDT</p>
                                        </div>
                                    </div>
                                </li>



                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/bitcoin-cash-bch-logo.png"
                                    data-symbol="BCH">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/bitcoin-cash-bch-logo.png" alt="BCH">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">BCH</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/toncoin-ton-logo.png" data-symbol="TON">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/toncoin-ton-logo.png" alt="ton">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">TON</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/tron-trx-logo.png" data-symbol="TRX">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/tron-trx-logo.png" alt="trx">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">TRX</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/bnb-bnb-logo.png" data-symbol="BNB">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/bnb-bnb-logo.png" alt="bnb">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">BNB</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/dogs-dogs-logo.png" data-symbol="DOGS">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/dogs-dogs-logo.png" alt="dogs">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">DOGS</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/fantom-ftm-logo.png" data-symbol="FTM">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/fantom-ftm-logo.png" alt="fantom">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">FTM</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/floki-inu-floki-logo.png"
                                    data-symbol="FLOKI">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/floki-inu-floki-logo.png" alt="floki">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">FLOKI</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/multi-collateral-dai-dai-logo.png"
                                    data-symbol="DAI">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/multi-collateral-dai-dai-logo.png"
                                            alt="dai">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">DAI</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/pepe-pepe-logo.png" data-symbol="PEPE">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/pepe-pepe-logo.png" alt="pepe">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">PEPE</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/shiba-inu-shib-logo.png"
                                    data-symbol="SHIBA">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/shiba-inu-shib-logo.png" alt="shiba">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">SHIBA</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/xrp-xrp-logo.png" data-symbol="XRP">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/xrp-xrp-logo.png" alt="xrp">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">XRP</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item  p-0 bg-transparent border-0"
                                    data-img-src="./assets/icons/modals-icons/pol.png" data-symbol="POL">
                                    <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                        <img class="modal-tokens-icon" width="35"
                                            src="./assets/icons/modals-icons/pol.png" alt="pol">
                                        <div
                                            class="token-name d-flex justify-content-center align-items-center flex-column">
                                            <p class="coin-name text-white mb-0">POL</p>
                                        </div>
                                    </div>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end of second token Modal -->


        </section>
`

export { exchange }