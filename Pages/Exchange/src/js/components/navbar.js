

const getNavbar = `
  <div class="overlay"></div>
    <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="./assets/Logo.svg" alt="Logo" class="navbar-logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">SWAP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">REFERRAL</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ANALYTICS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">HELP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FAQ</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            More
                        </a>
                        <ul class="dropdown-menu more-dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Link 1</a></li>
                            <li><a class="dropdown-item" href="#">Link 2</a></li>
                        </ul>
                    </li>
                </ul>

                <!-- connect dropdown in phone menu -->
                <div
                    class="btn-container dropdown phone-connect-dropdown d-flex justify-content-center align-items-center d-lg-none mt-4 ">
                    <button class="btn btn-primary btn-connect dropdown-toggle  " type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">Connect Wallet</button>

                    <ul class="dropdown-menu wallet-drop">
                        <div class="wallet-modal">
                            <h4>Select a wallet</h4>
                            <p class="terms">
                                By Connecting your wallet you agree <a href="#">Terms of service</a> and our <a
                                    href="#">privacy policy</a>
                            </p>

                            <div class="wallet-option mt-4">
                                <img src="./assets/icons/metamask-icon.svg" alt="MetaMask">
                                <a href="#">MetaMask</a>
                                <span class="connect-link">Connect</span>
                            </div>

                            <div class="wallet-option">
                                <img src="./assets/icons/coinbase-logo 1.svg" alt="Coinbase Wallet">
                                <a href="#">Coinbase Wallet</a>
                            </div>

                            <div class="wallet-option">
                                <img src="./assets/icons/walletconnect-seeklogo.com 1.svg" alt="WalletConnect">
                                <a href="#">WalletConnect</a>
                            </div>
                        </div>

                    </ul>

                </div>

            </div>

            <!-- connect dropdown in laptop menu -->
            <div
                class="btn-container dropdown laptop-connect-dropdown  d-flex justify-content-center align-items-center d-none d-lg-block  ">
                <button class="btn btn-primary btn-connect dropdown-toggle  " type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Connect Wallet</button>

                <ul class="dropdown-menu wallet-drop">
                    <div class="wallet-modal">
                        <h4>Select a wallet</h4>
                        <p class="terms">
                            By Connecting your wallet you agree <a href="#">Terms of service</a> and our <a
                                href="#">privacy policy</a>
                        </p>

                        <div class="wallet-option mt-4">
                            <img src="./assets/icons/metamask-icon.svg" alt="MetaMask">
                            <a href="#">MetaMask</a>
                            <span class="connect-link">Connect</span>
                        </div>

                        <div class="wallet-option">
                            <img src="./assets/icons/coinbase-logo 1.svg" alt="Coinbase Wallet">
                            <a href="#">Coinbase Wallet</a>
                        </div>

                        <div class="wallet-option">
                            <img src="./assets/icons/walletconnect-seeklogo.com 1.svg" alt="WalletConnect">
                            <a href="#">WalletConnect</a>
                        </div>
                    </div>

                </ul>

            </div>
        </div>
    </nav>
   `
   function connectOverlay(){
      document.addEventListener('DOMContentLoaded', function () {
         const dropdown = document.querySelector('.laptop-connect-dropdown');
         const more_dropdown = document.querySelector('.phone-connect-dropdown');
         const overlay = document.querySelector('.overlay');

         dropdown.addEventListener('show.bs.dropdown', function () {
            overlay.style.display = 'block';
            console.log("hi");
         });

         dropdown.addEventListener('hide.bs.dropdown', function () {
            overlay.style.display = 'none';
         });

         more_dropdown.addEventListener('show.bs.dropdown', function () {
            overlay.style.display = 'block';
            console.log("hi");
         });

         more_dropdown.addEventListener('hide.bs.dropdown', function () {
            overlay.style.display = 'none';
         });
      });
   }

export { getNavbar , connectOverlay}