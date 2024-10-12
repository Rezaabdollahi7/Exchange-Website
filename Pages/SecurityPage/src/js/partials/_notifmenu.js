const notifMenu = 
`

  <!-- ! Modal for notif Menu -->
        <div class="modal fade " id="notifMenu" tabindex="-1" aria-labelledby="languageMenuLabel" aria-hidden="true">
            <div class="modal-dialog mt-0">
                <div class="modal-content">
                    <div class="modal-header w-100 pt-5">
                        <nav class="d-flex justify-content-center align-items-center">
                            <a href="#" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <img class="back-icon" src="./assets/wallet-icons/backicon.svg" alt="back-icon">
                            </a>
                            <h2 class="page-title">Push Notification</h2>
                            <a href="#">
                                <img class="setting-icon d-none" src="./assets/wallet-icons/settingicon.svg"
                                    alt="setting-icon">
                            </a>
                        </nav>
                    </div>

                    <div class="notif-container d-flex align-items-center justify-content-between mt-5">
                        <ul class="notif-ul">
                            <li class="d-flex justify-content-center mt-3">
                                <div class="titles-wraper d-flex flex-column w-75">
                                    <span class="notif-title">Transactional Notifications</span>
                                    <p class="notif-sub-title mt-2">Instant notifications to update you on the status of
                                        your transactions as they happen or get completed.</p>
                                </div>
                                <label class="switch mt-2">
                                    <input type="checkbox">
                                    <span class="slider"></span>
                                </label>
                            </li>

                            <li class="d-flex justify-content-center mt-3">
                                <div class="titles-wraper d-flex flex-column w-75">
                                    <span class="notif-title">Send and receive</span>
                                    <p class="notif-sub-title mt-2">Receive alerts when sending or receiving.
                                    </p>
                                </div>
                                <label class="switch mt-2">
                                    <input type="checkbox">
                                    <span class="slider"></span>
                                </label>
                            </li>

                            <li class="d-flex justify-content-center mt-3">
                                <div class="titles-wraper d-flex flex-column w-75">
                                    <span class="notif-title">Get product updates instantly</span>
                                    <p class="notif-sub-title mt-2">Get early updates on new features</p>
                                </div>
                                <label class="switch mt-2">
                                    <input type="checkbox">
                                    <span class="slider"></span>
                                </label>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>

        </div>
        <!-- ! end of notif modal -->

`

export{notifMenu}