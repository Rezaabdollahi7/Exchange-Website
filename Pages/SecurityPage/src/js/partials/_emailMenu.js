const emailMenu = 
`

        <!-- ! Modal for email Menu -->
        <div class="modal fade " id="emailMenu" tabindex="-1" aria-labelledby="languageMenuLabel" aria-hidden="true">
            <div class="modal-dialog mt-0">
                <div class="modal-content">
                    <div class="modal-header w-100 pt-5">
                        <nav class="d-flex justify-content-center align-items-center">
                            <a href="#" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <img class="back-icon" src="./assets/wallet-icons/backicon.svg" alt="back-icon">
                            </a>
                            <h2 class="page-title">Email Verification</h2>
                            <a href="#">
                                <img class="setting-icon d-none" src="./assets/wallet-icons/settingicon.svg"
                                    alt="setting-icon">
                            </a>
                        </nav>
                    </div>

                    <div class="form-container">
                        <form action="#" method="POST" id="emailVerificationForm">
                            <div class="modal-body email-modal-body">
                                <p class="email-text">Please enter a valid email and ensure that this email belongs to
                                    you and is active.
                                </p>
                                <div class="input-container mt-4">
                                    <input type="email" id="emailInput" name="email" placeholder="Enter your email"
                                        class="form-control" required>
                                    <span class="box-icon">
                                        <img id="emailMessegaIcon" src="./assets/Message.svg" alt="message">
                                    </span>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button id="emailSubmitButton" type="submit"
                                    class="border-0 w-100 btn btn-primary">Submit →</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
        <!-- ! end of email modal -->

`

export{emailMenu}