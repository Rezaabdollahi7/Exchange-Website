const phoneNumberMenu = 
`

        <!-- ! Modal for Phone number Menu -->
        <div class="modal fade" id="phoneMenu" tabindex="-1" aria-labelledby="phoneMenuLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header w-100 pt-5">
                        <nav class="d-flex justify-content-center align-items-center">
                            <a href="#" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <img class="back-icon" src="./assets/wallet-icons/backicon.svg" alt="back-icon">
                            </a>
                            <h2 class="page-title">Phone Number</h2>
                            <a href="#">
                                <img class="setting-icon d-none" src="./assets/wallet-icons/settingicon.svg"
                                    alt="setting-icon">
                            </a>
                        </nav>
                    </div>
                    <div class="modal-body email-modal-body">
                        <p class="phone-text">Enter your phone number so we can send you the verification code</p>

                        <!-- Input Field with Country Code -->
                        <div class="phone-input-container mt-4">
                            <div class="input-group py-3">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button"
                                    id="countryCodeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    +62
                                </button>
                                <ul class="dropdown-menu pt-5 pb-2 px-3" aria-labelledby="countryCodeDropdown">
                                    <p class="select-dropdown-text text-center">what currency you like ?</p>
                                    <li class="dropdown-search">


                                        <div class="input-container mt-4 position-relative">
                                            <input type="text" class="form-control" id="searchCountry"
                                                placeholder="Search country...">
                                            <span class="box-icon position-absolute">
                                                <img src="./assets/search-normal.svg" alt="message">
                                            </span>
                                        </div>

                                    </li>

                                    <li class="mt-4"><a
                                            class="dropdown-item country-item w-100 d-flex justify-content-between align-items-center"
                                            href="#" data-country-code="+1">Canada
                                            (+1)
                                            <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                                        </a></li>
                                    <li><a class="dropdown-item country-item w-100 d-flex justify-content-between align-items-center"
                                            href="#" data-country-code="+44">United Kingdom
                                            (+44)
                                            <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                                        </a></li>
                                    <li><a class="dropdown-item country-item w-100 d-flex justify-content-between align-items-center"
                                            href="#" data-country-code="+61">Australia
                                            (+61)
                                            <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                                        </a></li>
                                    <li><a class="dropdown-item country-item w-100 d-flex justify-content-between align-items-center"
                                            href="#" data-country-code="+49">Germany
                                            (+49)
                                            <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                                        </a></li>
                                    <li><a class="dropdown-item country-item w-100 d-flex justify-content-between align-items-center"
                                            href="#" data-country-code="+33">France
                                            (+33)
                                            <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                                        </a></li>
                                    <li><a class="dropdown-item country-item w-100 d-flex justify-content-between align-items-center"
                                            href="#" data-country-code="+81">Japan
                                            (+81)
                                            <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                                        </a></li>
                                    <li><a class="dropdown-item country-item w-100 d-flex justify-content-between align-items-center"
                                            href="#" data-country-code="+86">China
                                            (+86)
                                            <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                                        </a></li>
                                    <li><a class="dropdown-item country-item w-100 d-flex justify-content-between align-items-center"
                                            href="#" data-country-code="+91">India
                                            (+91)
                                            <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                                        </a></li>
                                    <!-- Add more countries as needed -->
                                </ul>
                                <input type="number" class="form-control ms-1" id="phoneNumberInput"
                                    placeholder="Enter phone number">
                            </div>
                            <button href="#" class="sendcode w-100">Send Code →</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ! end of  Modal for Phone number Menu -->


`
export{phoneNumberMenu}