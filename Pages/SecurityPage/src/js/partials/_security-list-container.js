const securityListContainer = 
`
            <section class="security-list-container mt-4">
            <ul class="security-list p-0">

                <li class="security-item px-1">
                    <span class="d-flex align-items-center justify-content-between py-4">
                        <span class="wallet-name">Google Authentication</span>
                        <label class="switch mt-2">
                            <input type="checkbox" checked>
                            <span class="slider"></span>
                        </label>
                    </span>
                </li>

                <li class="security-item px-1">
                    <span class="d-flex align-items-center justify-content-between py-4">
                        <span class="wallet-name">Login with Touch Id</span>
                        <label class="switch mt-2">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                    </span>
                </li>

                <li class="security-item px-1">
                    <a href="#" class="d-flex align-items-center justify-content-between py-4"
                        data-target="#autolockMenu">
                        <span class="wallet-name">Auto Lock</span>
                        <div class="right-container d-flex justify-content-center align-items-center">
                            <span class="wallet-inventory me-2"> After 30 min</span>
                            <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                        </div>
                    </a>
                </li>

                <li class="security-item px-1">
                    <a href="#" class="d-flex align-items-center justify-content-between py-4" data-target="#emailMenu">
                        <span class="wallet-name">Email Verification</span>
                        <div class="right-container d-flex justify-content-center align-items-center">
                            <span class="wallet-inventory me-2">Sample@gmail.com</span>
                            <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                        </div>
                    </a>
                </li>

                <li class="security-item px-1">
                    <a href="#" class="d-flex align-items-center justify-content-between py-4" data-target="#phoneMenu">
                        <span class="wallet-name">Phone Verification</span>
                        <div class="right-container d-flex justify-content-center align-items-center">
                            <span class="wallet-inventory me-2">Not set</span>
                            <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                        </div>
                    </a>
                </li>

                <li class="security-item px-1">
                    <a href="#" class="d-flex align-items-center justify-content-between py-4 "
                        data-target="#notifMenu">
                        <span class="wallet-name">Push Notofication</span>
                        <div class="right-container d-flex justify-content-center align-items-center">
                            <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                        </div>
                    </a>
                </li>

                <li class="security-item px-1">
                    <a href="#" class="d-flex align-items-center justify-content-between py-4 " data-target="#passMenu">
                        <span class="wallet-name">Change Password</span>
                        <div class="right-container d-flex justify-content-center align-items-center">
                            <img src="./assets/wallet-icons/Arrow - Right 5.svg" alt="arrow-icon">
                        </div>
                    </a>
                </li>

            </ul>
        </section>

`

export{securityListContainer}