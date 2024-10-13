

const metaWallet = `
    <!--! Modal for metaWallet1 -->
        <div class="modal fade" id="metaWallet1" tabindex="-1" aria-labelledby="metaWallet1Label" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered ">
                <div class="modal-content">
                    <nav class=" d-flex justify-content-between align-items-center">
                        <a href="#" class="back-icon" data-bs-dismiss="modal">
                            <img src="./assets/wallet-icons/backicon.svg" alt="back-icon">
                        </a>

                        <h2 class="page-title">Meta Wallet</h2>

                        <a href="#">
                            <img class="setting-icon" src="./assets/wallet-icons/settingicon.svg" alt="setting-icon">
                        </a>
                    </nav>

                    <section class="wallets-details mt-3 d-flex justify-content-center align-items-center flex-column">

                        <div class="img-container p-1  d-flex justify-content-center align-items-center">
                            <img src="./assets/meta-wallet-icons/Wallet.svg" alt="wallet-icon">
                        </div>

                        <h6 class="wal-text mt-3">Total Wallet Balance</h6>

                        <p class="wallet-inventory">$970,025,360,00</p>

                        <img class="mt-2" src="./assets/meta-wallet-icons/barcodeicon.svg" alt="barcodeicon">


                        <p class="wal-addres mt-4" id="walletAddress">1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71.</p>

                        <button class="copy-btn w-100" id="copyButton">
                            <img src="./assets/meta-wallet-icons/docicon.svg" alt="copy-icon">
                        </button>

                        <button class="connect-btn w-100 mt-3">Connect</button>

                        <button class="delete-btn w-100 mt-3" data-bs-toggle="modal"
                            data-bs-target="#deleteWalletModal">
                            Delete wallet
                        </button>

                    </section>
                </div>
            </div>
        </div>
    `
export { metaWallet }