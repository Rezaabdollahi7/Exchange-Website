const subTabs = 
`
          <p class="page-sub-title">
            Import with secret phrase
        </p>

        <section class="container mt-2   tabs-main-container ">

            <ul class="nav nav-tabs d-flex justify-content-around align-items-center" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1"
                        type="button" role="tab" aria-controls="tab1" aria-selected="true"> 12 word</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button"
                        role="tab" aria-controls="tab2" aria-selected="false">24 word</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" type="button"
                        role="tab" aria-controls="tab3" aria-selected="false">private key</button>
                </li>
            </ul>

            <!-- Tab Content -->
            <div class="tab-content " id="myTabContent">
                <!-- tab1 -->
                <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                    <form>
                        <div class="my-4">
                            <div class="textarea-container" id="textarea-container-1">
                                <textarea class="form-control" id="textareaContent1" rows="5"
                                    placeholder="enter your private key"></textarea>
                            </div>
                        </div>
                        <div class="btn-container d-flex justify-content-center">
                            <button type="submit" class="btn mx-auto" id="importButton1">
                                <span class="btn-text">import</span>
                                <img class="d-none loading-img" src="./assets/icons/icons8-loading-32.png"
                                    alt="Loading">
                            </button>
                        </div>
                    </form>
                </div>

                <!-- tab2 -->
                <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                    <form>
                        <div class="my-4">
                            <div class="textarea-container" id="textarea-container-2">
                                <textarea class="form-control" id="textareaContent2" rows="5"
                                    placeholder="enter your private key"></textarea>
                            </div>
                        </div>
                        <div class="btn-container d-flex justify-content-center">
                            <button type="submit" class="btn mx-auto" id="importButton2">
                                <span class="btn-text">import</span>
                                <img class="d-none loading-img" src="./assets/icons/icons8-loading-32.png"
                                    alt="Loading">
                            </button>
                        </div>
                    </form>
                </div>

                <!-- tab3 -->
                <div class="tab-pane fade " id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                    <form>
                        <div class="mb-4 mt-2">
                            <div class="textarea-container" id="textarea-container-3">
                                <textarea class="form-control" id="textareaContent3" rows="5"
                                    placeholder="enter your private key"></textarea>
                            </div>
                        </div>
                        <div class="btn-container d-flex justify-content-center">
                            <button type="submit" class="btn mx-auto" id="importButton3">
                                <span class="btn-text">import</span>
                                <img class="d-none loading-img" src="./assets/icons/icons8-loading-32.png"
                                    alt="Loading">
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </section>

`

export { subTabs }