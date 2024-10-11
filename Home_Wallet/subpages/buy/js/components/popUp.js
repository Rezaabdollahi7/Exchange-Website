const popUp = `<section class="pop-up-background w-100 h-100 position-absolute top-0 start-0 bg-black bg-opacity-75 d-none" id="pop-up">
            <div class="pop-up w-100">
                <i class="xmark fa-solid fa-xmark fa-xl" id="xmark"></i>
                <span class="head-span">what currency you like ?</span>
                <section class="check-box-selection w-100">
                    <div class="input-container w-100 mt-4">
                        <svg id="search-svg" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0317 21C17.2146 21 21.4162 16.7467 21.4162 11.5C21.4162 6.25329 17.2146 2 12.0317 2C6.8488 2 2.64722 6.25329 2.64722 11.5C2.64722 16.7467 6.8488 21 12.0317 21Z" stroke="#006FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M22.4042 22L20.4285 20" stroke="#006FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <input type="text" placeholder="Currency name" id="currency-input">
                    </div>
                    <div class="checkboxes">
                        <div class="checkbox-container">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="USD" id="USD" checked>
                                <label class="form-check-label" for="USD">
                                    USD (US Dollar)
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="AUD" id="AUD">
                                <label class="form-check-label" for="AUD">
                                    AUD (Australian Dollar)
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="BHD" id="BHD">
                                <label class="form-check-label" for="BHD">
                                    BHD (Bahraini Dinar)
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="CAD" id="CAD">
                                <label class="form-check-label" for="CAD">
                                    CAD (Canadian Dollar)
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary w-100" id="currency-btn">Select</button>
                    </div>
                </section>
            </div>
        </section>`

export default popUp