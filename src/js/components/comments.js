const comment_part = `<div class="comment_container overflow-hidden position-relative d-flex flex-column align-items-center">
        <div class="swiper-buttons d-flex flex-row-reverse gap-3 mb-4 align-self-end">
            <div class="swiper-next d-flex justify-content-center align-items-center rounded-pill bg-white">
                <img src="./src/assets/Home_assets/arrow-right.svg" alt="right-arrow-key" class="w-100 h-100">
            </div>
            <div class="swiper-prev d-flex justify-content-center align-items-cente rounded-pill">
                <img src="./src/assets/Home_assets/arrow-left.svg" alt="left-arrow-key" class="w-100 h-100">
            </div>
        </div>
        <div class="swiper_comment px-1 w-100">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="comment_obj d-flex overflow-hidden">
                    <div class="author_pro flex-shrink-0">
                        <img src="src/assets/Home_assets/Ellipse1.png" alt="profile_image">
                    </div>
                    <div class="comment_content d-flex flex-column">
                        <span class="author_name text-white fw-bold ">Eric Trautman</span>
                        <span class="author_spec fw-medium">CEO NEAR</span>
                        <p class="comment_text text-break fw-normal">
                            Ultimately, blockchain solutions must be well integrated with the fiat currency economy. Alchemy Pay is crucial in helping us get there.
                        </p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="comment_obj d-flex overflow-hidden">
                    <div class="author_pro flex-shrink-0">
                        <img src="src/assets/Home_assets/Ellipse2.png" alt="profile_image">
                    </div>
                    <div class="comment_content d-flex flex-column">
                        <span class="author_name text-white fw-bold ">CZ</span>
                        <span class="author_spec fw-medium">CEO Binance</span>
                        <p class="comment_text text-break fw-normal">
                            I wish everybody at Alchemy Pay good luck with the future of spreading peer to peer electronic cash around the world and thank you guys so much for integrating Bitcoin Cash onto your platform. Keep up the great work!
                        </p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="comment_obj d-flex overflow-hidden">
                    <div class="author_pro flex-shrink-0">
                        <img src="src/assets/Home_assets/Ellipse1.png" alt="profile_image">
                    </div>
                    <div class="comment_content d-flex flex-column">
                        <span class="author_name text-white fw-bold ">Eric Trautman</span>
                        <span class="author_spec fw-medium">CEO NEAR</span>
                        <p class="comment_text text-break fw-normal">
                            Ultimately, blockchain solutions must be well integrated with the fiat currency economy. Alchemy Pay is crucial in helping us get there.
                        </p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="comment_obj d-flex overflow-hidden">
                    <div class="author_pro flex-shrink-0">
                        <img src="src/assets/Home_assets/Ellipse2.png" alt="profile_image">
                    </div>
                    <div class="comment_content d-flex flex-column">
                        <span class="author_name text-white fw-bold ">CZ</span>
                        <span class="author_spec fw-medium">CEO Binance</span>
                        <p class="comment_text text-break fw-normal">
                            I wish everybody at Alchemy Pay good luck with the future of spreading peer to peer electronic cash around the world and thank you guys so much for integrating Bitcoin Cash onto your platform. Keep up the great work!
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="comment-pagination w-auto"></div>
    </div>`

function addCommentSwiper(){
    const swiper = new Swiper('.swiper_comment', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
          
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
        
            breakpoints: {
            200: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            808: {
              slidesPerView: 1.5,
              spaceBetween: 60
            },
            1038: {
                slidesPerView: 2,
                spaceBetween: 60
            }
          }
    });
}

export {comment_part, addCommentSwiper}