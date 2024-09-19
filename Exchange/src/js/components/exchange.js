const exchange = `
  <section id="exchange" class=" mt-5">
        <div class="container-fluid">
            <h3 class="section-tittle">Exchange</h3>

        </div>

        <div class="row mt-4 main-row">
            <!-- Left Section mt-3 (8 columns) -->
            <div
                class="left-container col-lg-3 mb-4 d-flex flex-column justify-content-center align-items-center position-relative">

                <div class="exchange-setting-icons-container d-flex justify-content-end align-items-center w-100">
                <a href="#"  >
                      <img src="./assets/icons/History-Icon.svg" alt="History-Icon" class="exchange-coin-icon">
                 </a>
                   <a href="#" class="ms-2" >
                      <img src="./assets/icons/Settings-Icon.svg" alt="Settings-Icon" class="exchange-coin-icon">
                 </a>
                </div>

                <div class="coins-container d-flex justify-content-around align-items-center mt-4">
                    <div class="coin-details d-flex align-items-center">
                        <img src="./assets/icons/theter.svg" alt="theter" class="exchange-coin-icon">
                        <div class="coin-name d-flex flex-column ms-3">
                            <span class="coin-symbol">USDT</span>
                            <span class="coin-amount mt-2">1000</span>
                        </div>
                    </div>
                    <div class="coin-price d-flex flex-column">
                        <span class="coin-total">12000 USDT</span>
                        <span class="coin-value mt-2">~$ 1000.97</span>
                    </div>
                </div>

                <a href="#" class="swap-container position-absolute ">
                    <img src="./assets/swap-icon.svg" alt="swap-icon">
                </a>

                <div class="coins-container d-flex justify-content-around align-items-center mt-3">
                    <div class="coin-details d-flex align-items-center">
                        <img src="./assets/icons/etherium.svg" alt="etherium" class="exchange-coin-icon">
                        <div class="coin-name d-flex flex-column ms-3">
                            <span class="coin-symbol">ETH</span>
                            <span class="coin-amount mt-2">0.4329</span>
                        </div>
                    </div>
                    <div class="coin-price d-flex flex-column">
                        <span class="coin-total">0.12000 ETH</span>
                        <span class="coin-value mt-2">~$ 994.15</span>
                    </div>
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

    </section>
`

export {exchange}