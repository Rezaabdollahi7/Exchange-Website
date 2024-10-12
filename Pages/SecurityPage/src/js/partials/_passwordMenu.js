const passwordMenu = 
`

        <!--! Modal for password  Menu -->
        <div class="modal fade " id="passMenu" tabindex="-1" aria-labelledby="passMenuLabel" aria-hidden="true">
            <div class="modal-dialog mt-0 ">
                <div class="modal-content ">

                    <div class="modal-header w-100 pt-5">
                        <nav class="d-flex justify-content-center align-items-center">
                            <a href="#" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <img class="back-icon" src="./assets/wallet-icons/backicon.svg" alt="back-icon">
                            </a>
                            <h2 class="page-title">New Password</h2>
                            <a href="#">
                                <img class="setting-icon d-none" src="./assets/wallet-icons/settingicon.svg"
                                    alt="setting-icon">
                            </a>
                        </nav>
                    </div>

                    <div class="modal-body mt-2">
                        <form id="passwordResetForm" class="w-100">
                            <div class="mb-3 position-relative">
                                <label for="currentPassword" class="form-label ">Current Password</label>
                                <input type="password" class="form-control" id="currentPassword" required
                                    placeholder="Enter current password">
                                <img id="currentPasswordImg" class="position-absolute" src="./assets/Password.svg"
                                    alt="key-icon">
                            </div>
                            <div class="mb-3 position-relative">
                                <label for="newPassword" class="form-label ">New Password</label>
                                <input type="password" class="form-control" id="newPassword" required
                                    placeholder="Enter new password">
                                <img id="newPasswordImg" class="position-absolute" src="./assets/Password.svg"
                                    alt="key-icon">
                            </div>
                            <div class="mb-3 position-relative">
                                <label for="reNewPassword" class="form-label ">Re-New Password</label>
                                <input type="password" class="form-control" id="reNewPassword" required
                                    placeholder="Re-enter new password">
                                <img id="reNewPasswordImg" class="position-absolute" src="./assets/Password.svg"
                                    alt="key-icon">
                            </div>
                            <div class="mb-3  text-center">
                                <a href="#" class="text-primary forgot-link">Forgot Password?</a>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Set new password</button>

                        </form>
                    </div>


                </div>
            </div>
        </div>
        <!--! end Modal for password Menu -->

`

export{passwordMenu}