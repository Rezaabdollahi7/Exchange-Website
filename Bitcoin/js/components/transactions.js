const transactions = `<div class="chart-container">
            <div id="chart" class="p-3"></div>
        </div>

        <section class="last-transactions">
            <div class="transaction-head">
                <span>
                    last transactions
                </span>
                <a href="#" id="see-all">See all</a>
            </div>
            <div class="transactions">
                <div class="transaction">
                    <div class="transaction__type">
                        <img src="../assets/Trade.svg" alt="transaction-type">
                    </div>
                    <div class="transaction__details">
                        <span><span class="from">BTC</span> to <span class="to">ETH</span></span>
                        <span class="transaction__amount">240.023 ETH</span>
                    </div>
                    <div class="transaction__status complited">Complited</div>
                </div>
                <div class="transaction">
                    <div class="transaction__type">
                        <img src="../assets/Receive.svg" alt="transaction-type">
                    </div>
                    <div class="transaction__details">
                        <span><span class="from">BTC</span> to <span class="to">ETH</span></span>
                        <span class="transaction__amount">240.023 ETH</span>
                    </div>
                    <div class="transaction__status canceled">Canceled</div>
                </div>
            </div>
        </section>`

export default transactions