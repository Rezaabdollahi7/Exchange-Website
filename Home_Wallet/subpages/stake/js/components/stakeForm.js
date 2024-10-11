const stakeForm = `<form method="post" id="stake-form" class="mt-4">
            <section class="stakeSection">
                <span class="head-span">How much amount to stake?</span>
                <div class="input-container w-100 mt-4">
                    <svg class="icon-svg" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="coin-icon" fill-rule="evenodd" clip-rule="evenodd" d="M12.5262 5.42399L7.92179 10.085L7.92188 10.0848L5.24292 7.37279L12.5262 0L19.8118 7.375L17.1327 10.087L12.5262 5.42399ZM3.3509 9.2875L0.671743 12L3.35071 14.7115L6.02986 11.9994L3.3509 9.2875ZM7.92173 13.9153L12.5261 18.576L17.1326 13.9131L19.813 16.6237L19.8117 16.6251L12.5261 24L5.24286 16.6272L5.23907 16.6234L7.92173 13.9153ZM21.701 9.2891L19.0218 12.0012L21.7009 14.7131L24.38 12.001L21.701 9.2891Z" fill="#47484E"/>
                    </svg>
                    <span class="dollar-sign">$</span>
                    <input type="number" id="StakeAmount" placeholder="$0" required/>
                </div>
                <span class="head-span mt-4 mb-3">Validator</span>
                <div class="navigateBtn text-center position-relative w-100" id="navigateBtn">
                    <a href="#" id="navigateLinker" class="w-full h-full"><span id="navigateText">USD ( US Dollar )</span><img src="../../assets/DownArrow.svg" alt="arrow_down"></a>
                    <div class="bottom-blue-line position-absolute start-50 translate-middle-x"></div>
                </div>
                <p id="notice" class="text-center">
                    The day after staking marks the starting <br>point for generating returns.<br><br>
                    Earning starts one day after staking.
                </p>
            </section>
            <button type="submit" class="btn btn-primary w-100" id="stake-btn">Continue</button>
        </form>`

export default stakeForm