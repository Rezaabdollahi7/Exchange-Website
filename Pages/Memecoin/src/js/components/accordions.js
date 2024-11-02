const accordions =
    `
    <section id="accordions-wrapper" class="mt-5 overflow-x-hidden bg-transparent position-relative">
        <video class="background-video position-absolute top-0 mt-1 " src="./assets/videos/Eagle-Loop.mp4" autoplay loop
            muted playsinline></video>

        <div class="custom-container bg-transparent">
            <!-- first row -->
            <div class="row px-2 mb-5 ">
                <div class="title d-flex flex-column justify-content-center align-items-center">
                    <div class="img-container border rounded-2 p-2">
                        <img width="60px" src="./assets/icons/Ethereum-Logo-Icon.png" alt="Ethereum">
                    </div>
                    <h2 class="mt-3 fw-bold">How to Buy using $ETH</h2>
                </div>

                <!-- first acc -->
                <div class="accordion mt-4 " id="accordionFirst">
                    <div class="accordion-item border-0 border-bottom">
                        <h2 class="accordion-header border-0" id="headingOne">
                            <button class="accordion-button " type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                1. Download and Install
                                <a href="https://metamask.io/download" target="_blank" class="border rounded-2 mx-2 px-3 py-2 text-decoration-none text-white">
                                    MetaMask
                                </a>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionFirst">
                            <div class="accordion-body py-4 ">
                                <a class="link-wall text-decoration-none" target="_blank"        href="https://metamask.io">
                                    MetaMask
                                </a>
                                is a crypto wallet app for used for storing and managing Ethereum tokens. After creating
                                a
                                wallet be sure to
                                write down your recovery phrase on a piece of paper and store it somewhere safe.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-0 border-bottom">
                        <h2 class="accordion-header border-0" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                2. Purchase Some Ethereum
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionFirst">
                            <div class="accordion-body py-4">
                                From inside the
                                   <a class="link-wall text-decoration-none" target="_blank"        href="https://metamask.io">
                                    MetaMask
                                </a> app you can purchase Ethereum using PayPal by clicking on the
                                buy
                                button.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-0 border-bottom">
                        <h2 class="accordion-header border-0" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                3. Swap Your ETH for MAGA
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionFirst">
                            <div class="accordion-body py-4">
                                Connect your wallet to
                                  <a class="link-wall text-decoration-none" target="_blank"        href="https://app.uniswap.org/#/swap?outputCurrency=0x576e2BeD8F7b46D34016198911Cdf9886f78bea7">
                                    Uniswap
                                </a> , input our contract address
                                0x576e2BeD8F7b46D34016198911Cdf9886f78bea7, set your slippage
                                to 1.5%, and click the swap button!
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-0 border-bottom">
                        <h2 class="accordion-header border-0" id="headingfour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                Video Tutorial
                            </button>
                        </h2>
                        <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingfour"
                            data-bs-parent="#accordionFirst">
                            <div class="accordion-body py-4">
                                Connect your wallet to
                                  <a class="link-wall text-decoration-none" target="_blank"        href="https://app.uniswap.org/#/swap?outputCurrency=0x576e2BeD8F7b46D34016198911Cdf9886f78bea7">
                                    Uniswap
                                </a> , input our contract address
                                0x576e2BeD8F7b46D34016198911Cdf9886f78bea7, set your slippage
                                to 1.5%, and click the swap button!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end first row -->

            <!-- swiper -->
            <div class="row swiper-conatiner mx-3">
                <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide px-2">
                            <img src="./assets/images/bingx-logo-150x44.png" alt="bingx">
                        </div>
                        <div class="swiper-slide px-2">
                            <img src="./assets/images/bingx-logo-150x44.png" alt="bingx">
                        </div>
                        <div class="swiper-slide px-2">
                            <img src="./assets/images/bingx-logo-150x44.png" alt="bingx">
                        </div>
                        <div class="swiper-slide px-2">
                            <img src="./assets/images/bingx-logo-150x44.png" alt="bingx">
                        </div>
                        <div class="swiper-slide px-2">
                            <img src="./assets/images/bingx-logo-150x44.png" alt="bingx">
                        </div>
                        <div class="swiper-slide px-2">
                            <img src="./assets/images/bingx-logo-150x44.png" alt="bingx">
                        </div>
                        <div class="swiper-slide px-2">
                            <img src="./assets/images/bingx-logo-150x44.png" alt="bingx">
                        </div>
                        <div class="swiper-slide px-2">
                            <img src="./assets/images/bingx-logo-150x44.png" alt="bingx">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>

            <!-- second row -->
            <div class="row px-2 mt-5">
                <div class="title d-flex flex-column justify-content-center align-items-center">
                    <div class="img-container border rounded-2 p-2">
                        <img width="60px" src="./assets/icons/Solana-Logo-200px.png" alt="Solana">
                    </div>
                    <h2 class="mt-3 fw-bold">How to Buy using $ETH</h2>
                </div>

                <!-- second acc -->
                <div class="accordion mt-4 " id="accordionSecond">
                    <div class="accordion-item border-0 border-bottom">
                        <h2 class="accordion-header border-0" id="headingFive">
                            <button class="accordion-button " type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
                                1. Download and Install
                                  <a href="https://phantom.app/download" target="_blank" class="border rounded-2 mx-2 px-3 py-2 text-decoration-none text-white">
                                    Phantom
                                </a>
                            </button>
                        </h2>
                        <div id="collapsefive" class="accordion-collapse collapse show" aria-labelledby="headingFive"
                            data-bs-parent="#accordionSecond">
                            <div class="accordion-body py-4 ">
                                <a class="link-wall text-decoration-none" target="_blank"        href="https://phantom.app/download">
                                    Phantom
                                </a>
                                Phantom is a crypto wallet app used for storing and managing Solana tokens. After
                                creating a wallet be sure to write
                                down your recovery phrase on a piece of paper and store it somewhere safe.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-0 border-bottom">
                        <h2 class="accordion-header border-0" id="headingsix">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                2. Purchase Some Solana
                            </button>
                        </h2>
                        <div id="collapsesix" class="accordion-collapse collapse" aria-labelledby="headingsix"
                            data-bs-parent="#accordionSecond">
                            <div class="accordion-body py-4">
                                From inside the
                                   <a class="link-wall text-decoration-none" target="_blank"        href="https://phantom.app/download">
                                    Phantom
                                </a> app you can purchase Ethereum using From app you can purchase
                                Solana using Moonpay or other providers.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-0 border-bottom">
                        <h2 class="accordion-header border-0" id="headingseven">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                3. Swap Your SOL for MAGA
                            </button>
                        </h2>
                        <div id="collapseseven" class="accordion-collapse collapse" aria-labelledby="headingseven"
                            data-bs-parent="#accordionSecond">
                            <div class="accordion-body py-4">
                                Click the exchange button inside of the
                                <a class="link-wall text-decoration-none" target="_blank"        href="https://phantom.app/download">
                                    Phantom
                                </a> app, input our contract address
                                HaP8r3ksG76PhQLTqR8FYBeNiQpejcFbQmiHbg787Ut1, tap on review order then swap!
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-0 border-bottom">
                        <h2 class="accordion-header border-0" id="headingeight">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                Video Tutorial
                            </button>
                        </h2>
                        <div id="collapseeight" class="accordion-collapse collapse" aria-labelledby="headingeight"
                            data-bs-parent="#accordionSecond">
                            <div class="accordion-body py-4">
                                Connect your wallet to
                                <a class="link-wall text-decoration-none" target="_blank"        href="https://phantom.app/download">
                                    Phantom
                                </a> , input our contract address
                                0x576e2BeD8F7b46D34016198911Cdf9886f78bea7, set your slippage
                                to 1.5%, and click the swap button!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end first row -->

        </div>
    </section>

`


function accordionSwiperinit() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        // If we need pagination
        pagination: {
            el: '.comment-pagination',
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        centeredSlides: true,
        grabCursor: true,
        loop: true,
        speed: 2200,
        autoplay: {
            delay: 0,
            reverseDirection: true,
            disableOnInteraction: false,
        },
        breakpoints: {
            350: {
                centeredSlides: true,
                slidesPerView: 2,
                spaceBetween: 50,
            },
            550: {
                centeredSlides: false,
                slidesPerView: 3,
                spaceBetween: 20,
            },
            800: {
                centeredSlides: false,
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });
}
export { accordions, accordionSwiperinit }