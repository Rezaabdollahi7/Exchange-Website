const slogan =
    `
    <!-- Main Content Section -->
    <section id="slogan" class="main-content text-white mt-3 lg:mt-5 position-relative   w-100 overflow-hidden">
        <video class="background-video position-absolute top-0 mt-1 " src="./assets/videos/USA-Flag-Waving.mp4" autoplay
            loop muted playsinline></video>
        <div class="container">
            <div class="row align-items-center">
                <!-- Left Column: Image -->
                <div class="left-col col-md-6 d-flex justify-content-center">
                    <div class="eagle">
                        <video src="./assets/videos/Eagle-Front.mp4" autoplay loop muted playsinline></video>
                    </div>
                </div>

                <!-- Right Column: Text -->
                <div class="right-col col-md-6 px-4">
                    <h1 class="main-title mb-4 ">
                        Welcome to our Election Day $TRUMP (MAGA) Airdrop!
                    </h1>
                    <div class="buttons mb-4 gap-3  d-flex flex-column d-sm-flex flex-sm-row  w-50 mx-auto mx-lg-0">
                        <a href="#" class="btn btn-danger  px-4 py-2 fw-bold w-100 w-md-auto">Connect Wallet</a>
                    </div>
                    <p class="description ">
                        Today, we’re celebrating the spirit of democracy by giving our community an exciting opportunity to receive free $TRUMP (MAGA) tokens. This exclusive airdrop is a tribute to those energized by the election season and the future of crypto. Join us and claim your share while supplies last! This is your chance to be part of the movement—don’t miss out! Make Crypto Great Again!
                    </p>
                </div>
            </div>

        </div>


        <div class="roulette-wrapper">
            <div class="selector"></div>
            <div class="wheel"></div>
        </div>

        <button class="mb-4 spin-btn">Spin Roulette</button>


        <div class="crypto-section ">
            <div class="container">
                <div class="header">
                    <div class="stars mx-auto">
                        <img src="./assets/images/Star.png" alt="Star-icon">
                    </div>
                    <h1 class="title mt-5">MAGA MEMECOIN</h1>
                    <p class="subtitle mt-3">MAKE CRYPTO GREAT AGAIN</p>
                </div>

                <div class="addresses">
                    <p class="address-item mx-auto"><span class="label">TAXED ETH</span> <code
                            class="address-text mt-2 mt-md-2">0X576E2BED8F7B46D34016198911CDF9886F78BEA7</code></p>

                    <p class="address-item"><span class="label">TAXLESS ETH</span> <code
                            class="address-text mt-2 mt-md-2">0X6AA56E1D98B3805921C170EB4B3FE7D4FDA6D89B</code></p>

                    <p class="address-item"><span class="label">SOL</span> <code
                            class="address-text mt-2 mt-md-2">HaP8r3ksG76PhQLTqR8FYBeNiQpejcFbQmiHbg787Ut1</code></p>

                    <p class="address-item"><span class="label">BASE</span> <code
                            class="address-text mt-2 mt-md-2">0x57f5fbd3de65dfc0bd3630f732969e5fb97e6d37</code></p>

                    <p class="address-item"><span class="label">BNB</span> <code
                            class="address-text mt-2 mt-md-2">0x4eA98c1999575aaadfb38237Dd015c5E773F75a2</code></p>

                </div>

            </div>            
        </div>

    </section>


        <!-- Modal -->
    <div class="modal fade" id="resultModal" tabindex="-1" aria-labelledby="resultModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body text-dark">
                    <div class="img-container d-flex justify-content-center align-items-center">
                        <img class="mx-auto" src="./assets/images/MAGA-Memecoin-Logo.png" width="100" height="100"
                            alt="">
                    </div>
                    <h3 class="mt-2 text-center fw-bold">
                        <span id="winningAmount"></span> $TRUMP Tokens
                    </h3>
                    <p class="mt-4 connect-text">Connect Your Wallet to Claim Tokens!</p>
                    <strong class="mt-2">
                        Please connect one of the following wallets:
                    </strong>
                    <ul>
                        <li class="mt-1">MetaMask</li>
                        <li class="mt-1">Trust Wallet</li>
                        <li class="mt-1">coinbase Wallet</li>
                    </ul>
                    <strong class="mt-2">Important:</strong>
                    <ul>
                        <li>Ensure you have the minimum required balance.</li>
                        <li>After receiving your tokens, add the following token: </li>
                    </ul>
                    <strong class="mt-2">Token Address:</strong>
                    <span class="bg-secondary px-2 py-1 ">0x576e2BeD8F7b46D34016198911Cdf9886f78bea7</span>
                    <p class="mt-4 text-center h5">Get started now and enjoy your rewards!</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger text-white px-4 py-2 mx-auto"
                        data-bs-dismiss="modal">Get Reward</button>
                </div>
            </div>
        </div>
    </div>


`


function spinRoulette() {
    document.addEventListener("DOMContentLoaded", function () {
        initWheel();

        document.querySelector(".spin-btn").addEventListener("click", function () {
            spinWheel();
        });
    });

    function initWheel() {
        var wheel = document.querySelector(".roulette-wrapper .wheel");

        // مقادیر مختلف MAGA که روی کارت‌ها نمایش داده می‌شود
        var magaValues = ["100 MAGA", "200 MAGA", "300 MAGA", "400 MAGA", "500 MAGA", "700 MAGA", "1000 MAGA", "1200 MAGA", "1400 MAGA", "1500 MAGA", "2000 MAGA", "2500 MAGA", "2700 MAGA", "3000 MAGA", "3500 MAGA", "100 MAGA", "200 MAGA", "300 MAGA", "400 MAGA", "500 MAGA", "700 MAGA", "1000 MAGA", "1200 MAGA", "1400 MAGA", "1500 MAGA", "2000 MAGA", "2500 MAGA", "2700 MAGA", "3000 MAGA", "3500 MAGA"];

        // ایجاد یک ردیف برای هر کارت، هر ردیف فقط شامل یک کارت است
        magaValues.forEach(function (value) {
            var card = `
            <div class='card'>
                <img src="./assets/images/MAGA-Memecoin-Logo.png" alt="MAGA Logo">
                <span>${value}</span>
            </div>
        `;
            wheel.innerHTML += card;
        });
    }

    function spinWheel() {
        var wheel = document.querySelector(".roulette-wrapper .wheel");

        // تعداد کارت‌ها در چرخ
        var cardCount = 5;

        // انتخاب یک موقعیت تصادفی از کارت‌های MAGA
        var randomPosition = Math.floor(Math.random() * cardCount);

        var cardWidth = 102; // عرض هر کارت به همراه حاشیه
        var landingPosition = (cardCount * cardWidth * 2) + (randomPosition * cardWidth);

        // تنظیم انیمیشن با حرکت تصادفی
        var randomize = Math.floor(Math.random() * 50) - 25;
        landingPosition = landingPosition + randomize;

        // تنظیم انیمیشن
        var object = {
            x: Math.floor(Math.random() * 50) / 100,
            y: Math.floor(Math.random() * 20) / 100
        };

        wheel.style.transitionTimingFunction = 'cubic-bezier(0,' + object.x + ',' + object.y + ',1)';
        wheel.style.transitionDuration = '4s';
        wheel.style.transform = 'translateX(-' + landingPosition + 'px)';

        // پس از پایان چرخش، مقدار برنده شده را نمایش می‌دهیم
        setTimeout(function () {
            // شناسایی موقعیت نهایی چرخش
            var wheelPosition = Math.abs(parseFloat(wheel.style.transform.replace("translateX(", "").replace("px)", "")));
            var cardWidth = 100; // عرض هر کارت

            // شناسایی کارت برنده بر اساس موقعیت چرخ
            var winningCardIndex = Math.floor(wheelPosition / cardWidth) % 5;

            // مقدار برنده شده
            var cards = document.querySelectorAll('.roulette-wrapper .wheel .card');
            var winningValue = cards[winningCardIndex].querySelector('span').innerText;

            // مقدار برنده شده را به نمایش بگذار
            document.getElementById('winningAmount').innerText = winningValue;

            // نمایش مدال
            var modal = new bootstrap.Modal(document.getElementById('resultModal'));
            modal.show();
        }, 4000); // مدت زمان انیمیشن چرخش
    }

}


export { slogan, spinRoulette }