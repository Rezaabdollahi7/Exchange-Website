

const getNavbar = `
     <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../Home/src/assets/Home_assets/Logo.svg" alt="Logo" class="navbar-logo">
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
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Link 1</a></li>
                            <li><a class="dropdown-item" href="#">Link 2</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="btn-container d-flex justify-content-center align-items-center d-lg-none mt-4 ">
                    <button class="btn btn-primary btn-price  ">Connect Wallet</button>
                </div>

            </div>

            <button class="btn btn-primary  btn-price d-none d-lg-block ">Connect Wallet</button>
        </div>
    </nav>
   `

export { getNavbar }