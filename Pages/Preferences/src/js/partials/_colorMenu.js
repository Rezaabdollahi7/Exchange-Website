const colorMenu = 
`
 <!--! Modal for Color Menu -->
        <div class="modal fade" id="colorMenu" tabindex="-1" aria-labelledby="colorMenuLabel" aria-hidden="true">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header px-4 pt-4">

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h5 class="color-header-text text-center mt-2">What would you like to do?</h5>
                        <ul class="color-options-container mt-5">
                            <li class="color-option"><a href="#"
                                    class="d-flex justify-content-between align-items-center">
                                    <div class="txt-icon">
                                        <img src="./assets/images/greenUp.svg" alt="color-status">
                                        <span class="color-text ms-3">Green up and red down</span>
                                    </div>
                                    <img src="./assets/images/Arrow - Right 5.svg" alt="arrow-icon">
                                </a></li>
                            <hr>
                            <li class="color-option mt-2"><a href="#"
                                    class="d-flex justify-content-between align-items-center">
                                    <div class="txt-icon">
                                        <img src="./assets/images/redUp.svg" alt="color-status">
                                        <span class="color-text ms-3">Red up and green down</span>
                                    </div>
                                    <img src="./assets/images/Arrow - Right 5.svg" alt="arrow-icon">
                                </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- ! end of colormenu modal -->




`

export {colorMenu}