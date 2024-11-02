const tokenmics =
    `
    <section id="tokenomics" class="tokenomics-section text-center py-5 overflow-x-hidden bg-transparent position-relative">
          <video class="background-video position-absolute top-0  mt-5 " src="./assets/videos/Eagle-Side.mp4" autoplay loop
         muted playsinline></video>
    <div class="container ">
            <h2 class="tokenomics-title">TOKENOMICS</h2>
            <div class="supply-box my-4">
                <span class="supply-text">47,000,000 SUPPLY</span>
            </div>
            <h3 class="fee-structure-title">Fee Structure</h3>
            <p class="taxed-text ">
                <span class="taxed-bold fw-bold">
                    Taxed $TRUMP:
                </span>
                <span class="highlighted">(1%)</span> for Marketing, Donations, and Liquidity.
            </p>
            <p class="taxless-text">
                <span class="taxed-bold fw-bold">
                    Taxed $TRUMP:
                </span> <span class="highlighted">(0%)</span> on all Transactions.
            </p>
            <a href="#" class="btn convert-btn">Convert Taxed to Taxless</a>
            <div class="donation-box mx-auto ">
                <span class="donation-amount" data-target="2027303">$2,027,303</span>
                <p>Donated to U.S. Vets & Child Rescue</p>
            </div>

              <!-- swiper -->
            <div class="row swiper-conatiner my-5 px-3">
                <div class="swiper tokenmics">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="./assets/images/v4cr-01-26-2024-2.png" alt="bingx">
                        </div>
                        <div class="swiper-slide">
                            <img src="./assets/images/nvhs-01-20-2024.png" alt="bingx">
                        </div>
                        <div class="swiper-slide">
                            <img src="./assets/images/v4cr-01-26-2024-2.png" alt="bingx">
                        </div>
                        <div class="swiper-slide">
                            <img src="./assets/images/nvhs-01-20-2024.png" alt="bingx">
                        </div>
                          <div class="swiper-slide">
                            <img src="./assets/images/v4cr-01-26-2024-2.png" alt="bingx">
                        </div>
                        <div class="swiper-slide">
                            <img src="./assets/images/nvhs-01-20-2024.png" alt="bingx">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>

            <div
                class="verify-donation d-flex flex-column mx-auto mt-5 gap-4 justify-content-center align-items-center">
                <div class="d-flex gap-4 justify-content-center align-items-center">
                    <span>Verify Donations on:</span>
                    <a href="#" target="_blank" >
                        <img src="./assets/images/every.org-logo.png" alt="">
                    </a>
                </div>
                <a class="receipts-link mt-4 " href="#">8/22/2023 - 1/5/2024 Receipts</a>
            </div>
        </div>
    </section>
`
function tokenmicsSwiper() {
    var swiper = new Swiper(".tokenmics", {
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
                slidesPerView: 1,
                spaceBetween: 20,
            },
            850: {
                centeredSlides: false,
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
}





export { tokenmics, tokenmicsSwiper }