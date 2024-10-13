const currencyMenu = 
`
  <!--! Modal for Currency Menu -->
        <div class="modal fade " id="currencyMenu" tabindex="-1" aria-labelledby="currencyMenuLabel" aria-hidden="true">
            <div class="modal-dialog mt-0 ">
                <div class="modal-content ">

                    <div class="modal-header w-100 pt-5 ">
                        <nav class="   d-flex justify-content-center align-items-center">
                            <a href="#" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <img class="back-icon" src="./assets/images/backicon.svg" alt="back-icon">
                            </a>

                            <h2 class="page-title">Currency</h2>

                            <a href="#">
                                <img class="setting-icon d-none" src="./assets/images/settingicon.svg"
                                    alt="setting-icon">
                            </a>
                        </nav>
                    </div>

                    <div class="modal-body">
                        <div class="input-container">
                            <input type="text" id="currencySearch" placeholder="Search currency..."
                                class="form-control">
                            <span class="search-icon">
                                <img id="currencySearchIcon" src="./assets/images/search-normal.svg" alt="Search">
                            </span>
                        </div>

                        <ul id="currencyList" class="list-group mt-2">
                            <li class="list-group-item">
                                <input type="radio" id="usd" name="currency" value="USD">
                                <label for="usd"> USD ( US Dollar ) </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="aud" name="currency" value="AUD">
                                <label for="aud"> AUD ( Australian Dollar ) </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="bhd" name="currency" value="BHD">
                                <label for="bhd"> BHD ( Bahraini Dinar ) </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="cad" name="currency" value="CAD">
                                <label for="cad"> CAD ( Canadian Dollar ) </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="cny" name="currency" value="CNY">
                                <label for="cny"> Chinese Yuan (CNY) </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="jpy" name="currency" value="JPY">
                                <label for="jpy"> Japanese Yen (JPY) </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="gbp" name="currency" value="GBP">
                                <label for="gbp"> British Pound Sterling (GBP) </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="cad2" name="currency" value="CAD">
                                <label for="cad2"> Canadian Dollar (CAD) </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="chf" name="currency" value="CHF">
                                <label for="chf"> Swiss Franc (CHF) </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="aud2" name="currency" value="AUD">
                                <label for="aud2"> Australian Dollar (AUD) </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="inr" name="currency" value="INR">
                                <label for="inr"> Indian Rupee (INR) </label>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <!--! end Modal for Currency Menu -->

`

export{currencyMenu}