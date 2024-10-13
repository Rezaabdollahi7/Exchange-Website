const deleteWallet = `
      <!-- ! delete wallet Modal -->
        <div class="modal fade" id="deleteWalletModal" tabindex="-1" aria-labelledby="deleteWalletModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header d-flex justify-content-center align-items-center flex-column">
                        <img class="delete-icon" src="./assets/meta-wallet-icons/delete.svg" alt="delete-icon">
                        <h1 class="modal-title mt-2" id="deleteWalletModalLabel">Delete wallet</h1>
                    </div>

                    <div class="modal-body">
                        <p class="modal-text">Are you sure you want to delete “Meta wallet” from your
                            wallet list?
                        </p>
                    </div>

                    <div class="modal-footer d-flex justify-content-center align-items-center px-0">
                        <button type="button" class="btn btn-secondary cancel-btn"
                            data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary remove-btn">Yes, Remove
                            it!</button>
                    </div>

                </div>
            </div>
        </div>
        <!-- ! end of delete wallet modal -->

`

export{deleteWallet}