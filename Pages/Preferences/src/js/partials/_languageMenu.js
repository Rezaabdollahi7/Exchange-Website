const languageMenu = 
`
 <!-- ! Modal for Language Menu -->
        <div class="modal fade " id="languageMenu" tabindex="-1" aria-labelledby="languageMenuLabel" aria-hidden="true">
            <div class="modal-dialog mt-0 ">
                <div class="modal-content ">

                    <div class="modal-header w-100 pt-5 ">
                        <nav class="   d-flex justify-content-center align-items-center">
                            <a href="#" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <img class="back-icon" src="./assets/images/backicon.svg" alt="back-icon">
                            </a>

                            <h2 class="page-title">Language</h2>

                            <a href="#">
                                <img class="setting-icon d-none" src="./assets/images/settingicon.svg"
                                    alt="setting-icon">
                            </a>
                        </nav>
                    </div>

                    <div class="modal-body">
                        <div class="input-container">
                            <input type="text" id="langSearch" placeholder="Search language..." class="form-control">
                            <span class="search-icon">
                                <img id="langSearchIcon" src="./assets/images/search-normal.svg" alt="Search">
                            </span>
                        </div>

                        <ul id="langList" class="list-group mt-2">
                            <li class="list-group-item">
                                <input type="radio" id="enLange" name="language" value="USD">
                                <label for="enLange"> English ( united state ) </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="guamLange" name="language" value="AUD">
                                <label for="guamLange"> Chamorro (Guam) </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="colombiaLange" name="language" value="BHD">
                                <label for="colombiaLange"> Khmer (Cambodia) </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="indLang" name="language" value="CAD">
                                <label for="indLang"> Gujarati (India) </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="francLang" name="language" value="CNY">
                                <label for="francLang"> French </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="rusLang" name="language" value="JPY">
                                <label for="rusLang"> Russian </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="japanLang" name="language" value="GBP">
                                <label for="japanLang"> Japanese </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="italyLang" name="language" value="CAD">
                                <label for="italyLang"> Italian </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="arabLang" name="language" value="CHF">
                                <label for="arabLang"> Arabic </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="swedishLange" name="language" value="AUD">
                                <label for="swedishLange"> Swedish </label>
                            </li>
                            <li class="list-group-item">
                                <input type="radio" id="finishLang" name="language" value="INR">
                                <label for="finishLang"> Finnish </label>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <!-- ! end of language modal -->


`
export{languageMenu}