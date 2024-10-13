const autoLockMenu = 
`

 <!--! Modal for autolock  Menu -->
        <div class="modal fade " id="autolockMenu" tabindex="-1" aria-labelledby="autolockMenuLabel" aria-hidden="true">
            <div class="modal-dialog mt-0 ">
                <div class="modal-content ">

                    <div class="modal-header w-100 pt-5 ">
                        <nav class="   d-flex justify-content-center align-items-center">
                            <a href="#" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <img class="back-icon" src="./assets/wallet-icons/backicon.svg" alt="back-icon">
                            </a>

                            <h2 class="page-title">Auto Lock</h2>

                            <a href="#">
                                <img class="setting-icon d-none" src="./assets/wallet-icons/settingicon.svg"
                                    alt="setting-icon">
                            </a>
                        </nav>
                    </div>

                    <div class="modal-body mt-2">

                        <ul class="times-container p-0">
                            <li class="item-li ">
                                <a href="#" class="d-flex justify-content-between align-items-center">
                                    <span class="time-name">Immediately</span>
                                    <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                                </a>
                            </li>

                            <li class="item-li mt-5">
                                <a href="#" class="d-flex justify-content-between align-items-center">
                                    <span class="time-name">After 30 sec</span>
                                    <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                                </a>
                            </li>

                            <li class="item-li mt-5">
                                <a href="#" class="d-flex justify-content-between align-items-center">
                                    <span class="time-name">After 50 sec</span>
                                    <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                                </a>
                            </li>

                            <li class="item-li mt-5">
                                <a href="#" class="d-flex justify-content-between align-items-center">
                                    <span class="time-name">After 1 min</span>
                                    <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                                </a>
                            </li>

                            <li class="item-li mt-5">
                                <a href="#" class="d-flex justify-content-between align-items-center">
                                    <span class="time-name">After 5 min</span>
                                    <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                                </a>
                            </li>

                            <li class="item-li mt-5">
                                <a href="#" class="d-flex justify-content-between align-items-center">
                                    <span class="time-name">After 10 min</span>
                                    <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                                </a>
                            </li>

                            <li class="item-li mt-5">
                                <a href="#" class="d-flex justify-content-between align-items-center">
                                    <span class="time-name">Never</span>
                                    <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>
            </div>
        </div>
        <!--! end Modal for autolock Menu -->

`

export {autoLockMenu}