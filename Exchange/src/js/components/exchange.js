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
                        <div class="coins-container d-flex justify-content-around align-items-center"
                            data-bs-toggle="modal" data-bs-target="#usdtModal">
                            <div class="coin-details d-flex align-items-center">
                                <img id="usdtImg" src="./assets/icons/theter.svg" alt="theter"
                                    class="coin-icon exchange-coin-icon">
                                <div class="coin-name d-flex flex-column ms-3">
                                    <span id="usdtLabel" class="coin-symbol">USDT</span>
                                    <span class="coin-amount mt-2" id="usdtAmount">1000</span>
                                </div>
                            </div>
                            <div class="coin-price d-flex flex-column">
                                <span class="coin-total">12000 USDT</span>
                                <span class="coin-value mt-2">~$ 1000.97</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- second token -->

                <div class="d-flex justify-content-around align-items-center mt-4 w-100">
                    <div class="card-body">
                        <div class="coins-container d-flex justify-content-around align-items-center"
                            data-bs-toggle="modal" data-bs-target="#ethModal">
                            <div class="coin-details d-flex align-items-center">
                                <img id="ethImg" src="./assets/icons/etherium.svg" alt="etherium"
                                    class="coin-icon exchange-coin-icon">
                                <div class="coin-name d-flex flex-column ms-3">
                                    <span id="ethLabel" class="coin-symbol">ETH</span>
                                    <span class="coin-amount mt-2" id="ethAmount">0.4329</span>
                                </div>
                            </div>
                            <div class="coin-price d-flex flex-column">
                                <span class="coin-total">0.12000 ETH</span>
                                <span class="coin-value mt-2">~$ 994.15</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!--! swap -->
                <div class="col-lg-3 mb-4 d-flex align-items-center swap-container position-absolute">
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
                                data-img-src="./assets/icons/etherium.svg">
                                <div class="item-left-container d-flex align-items-center gap-2 w-100 p-2">
                                    <img class="modal-tokens-icon" width="35" src="./assets/icons/etherium.svg"
                                        alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">ETH</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/bitcoin.svg" data-symbol="BTC">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35" src="./assets/icons/bitcoin.svg"
                                        alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">BTC</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/theter.svg" data-symbol="USDT">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35" src="./assets/icons/theter.svg" alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">USDT</p>
                                    </div>
                                </div>
                            </li>




                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/modals-icons/aevo.webp" data-symbol="aevo">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35"
                                        src="./assets/icons/modals-icons/aevo.webp" alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">aevo</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/modals-icons/arcblock.png" data-symbol="arcblock">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35"
                                        src="./assets/icons/modals-icons/arcblock.png" alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">arcblock</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/modals-icons/Badge_Dai.png" data-symbol="Badge_Dai">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35"
                                        src="./assets/icons/modals-icons/Badge_Dai.png" alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">Badge_Dai</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/modals-icons/CTX.png" data-symbol="CTX">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35" src="./assets/icons/modals-icons/CTX.png"
                                        alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">CTX</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/modals-icons/usdc.png" data-symbol="usdc">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35" src="./assets/icons/modals-icons/usdc.png"
                                        alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">usdc</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/modals-icons/weth.png" data-symbol="weth">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35" src="./assets/icons/modals-icons/weth.png"
                                        alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">weth</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/modals-icons/wrapped_bitcoin_wbtc.png"
                                data-symbol="wrapped_bitcoin_wbtc">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35"
                                        src="./assets/icons/modals-icons/wrapped_bitcoin_wbtc.png" alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">wrapped_bitcoin_wbtc</p>
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

                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/etherium.svg" data-symbol="ETH">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35" src="./assets/icons/etherium.svg"
                                        alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">ETH</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/bitcoin.svg" data-symbol="BTC">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35" src="./assets/icons/bitcoin.svg"
                                        alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">BTC</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/theter.svg" data-symbol="USDT">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35" src="./assets/icons/theter.svg" alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">USDT</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/modals-icons/aevo.webp" data-symbol="aevo">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35"
                                        src="./assets/icons/modals-icons/aevo.webp" alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">aevo</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/modals-icons/arcblock.png" data-symbol="arcblock">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35"
                                        src="./assets/icons/modals-icons/arcblock.png" alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">arcblock</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/modals-icons/Badge_Dai.png" data-symbol="Badge_Dai">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35"
                                        src="./assets/icons/modals-icons/Badge_Dai.png" alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">Badge_Dai</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/modals-icons/CTX.png" data-symbol="CTX">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35" src="./assets/icons/modals-icons/CTX.png"
                                        alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">CTX</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/modals-icons/usdc.png" data-symbol="usdc">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35" src="./assets/icons/modals-icons/usdc.png"
                                        alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">usdc</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/modals-icons/weth.png" data-symbol="weth">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35" src="./assets/icons/modals-icons/weth.png"
                                        alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">weth</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item  p-0 bg-transparent border-0"
                                data-img-src="./assets/icons/modals-icons/wrapped_bitcoin_wbtc.png"
                                data-symbol="wrapped_bitcoin_wbtc">
                                <div class="item-left-container d-flex align-items-center gap-2  w-100 p-2">
                                    <img class="modal-tokens-icon" width="35"
                                        src="./assets/icons/modals-icons/wrapped_bitcoin_wbtc.png" alt="bit">
                                    <div
                                        class="token-name d-flex justify-content-center align-items-center flex-column">
                                        <p class="coin-name text-white mb-0">wrapped_bitcoin_wbtc</p>
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

export {exchange}