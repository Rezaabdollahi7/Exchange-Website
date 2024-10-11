const buyForm = `<form method="post" id="buy-form" class="mt-4">
            <section class="countSection">
                <span class="head-span">How much you like?</span>
                <div class="input-container w-100 mt-4">
                    <svg class="wallet-svg" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="wallet-icon" fill-rule="evenodd" clip-rule="evenodd" d="M16.2246 5.3818L20.4043 5.3818C20.4043 1.98459 18.3935 0 14.9865 0L6.06523 0C2.65827 0 0.647461 1.98459 0.647461 5.33847L0.647461 12.6615C0.647461 16.0154 2.65827 18 6.06523 18L14.9865 18C18.3935 18 20.4043 16.0154 20.4043 12.6615V12.3495H16.2246C14.2848 12.3495 12.7123 10.7975 12.7123 8.883C12.7123 6.96849 14.2848 5.41647 16.2246 5.41647V5.3818ZM16.2246 6.87241L19.6667 6.87241C20.0741 6.87241 20.4043 7.19834 20.4043 7.60039V10.131C20.3996 10.5311 20.0721 10.8543 19.6667 10.8589H16.3037C15.3216 10.872 14.4629 10.2084 14.2402 9.26432C14.1286 8.67829 14.2852 8.07357 14.668 7.61222C15.0507 7.15087 15.6205 6.88008 16.2246 6.87241ZM16.3739 9.53298H16.6988C17.1159 9.53298 17.4539 9.1993 17.4539 8.78767C17.4539 8.37605 17.1159 8.04237 16.6988 8.04237H16.3739C16.1744 8.04005 15.9823 8.11664 15.8405 8.25504C15.6986 8.39344 15.6187 8.58213 15.6188 8.77901C15.6187 9.19205 15.9554 9.52823 16.3739 9.53298ZM5.32764 5.3818H10.9035C11.3205 5.3818 11.6586 5.04812 11.6586 4.6365C11.6586 4.22487 11.3205 3.89119 10.9035 3.89119L5.32764 3.89119C4.91398 3.89116 4.5773 4.2196 4.57249 4.62783C4.57246 5.04087 4.90916 5.37705 5.32764 5.3818Z" fill="#47484E"/>
                    </svg>
                    <span class="dollar-sign text-white">$</span>
                    <input type="number" id="walletInput" placeholder="$0" required/>
                </div>
                <span class="head-span mt-4 mb-3">Or Quick up With select</span>
                <div class="quick-select container p-0">
                    <div class="row gap-3 justify-content-center mb-3">
                        <button type="button" class="select-btn col-3" data-value="50">$50</button>
                        <button type="button" class="select-btn col-3" data-value="90">$90</button>
                        <button type="button" class="select-btn col-3" data-value="100">$100</button>
                    </div>
                    <div class="row gap-3 justify-content-center">
                        <button type="button" class="select-btn col-3" data-value="150">$150</button>
                        <button type="button" class="select-btn col-3" data-value="190">$190</button>
                        <button type="button" class="select-btn col-3" data-value="300">$300</button>
                    </div>
                </div>
            </section>
            <button type="submit" class="btn btn-primary w-100" id="buy-btn">Buy</button>
        </form>`

export default buyForm