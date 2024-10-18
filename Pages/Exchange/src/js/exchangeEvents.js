document.addEventListener("DOMContentLoaded", function () {
    // Function to filter the list
    function filterList(searchInputId, listId) {
        const input = document.getElementById(searchInputId);
        const filter = input.value.toLowerCase(); // Convert input to lowercase
        const listItems = document.querySelectorAll(`#${listId} li`); // Select all list items

        listItems.forEach(function (item) {
            const textValue = item.querySelector('.coin-name').textContent.toLowerCase();
            console.log(item);
            // Show or hide based on match
            item.style.display = textValue.includes(filter) ? "" : "none";
        });
    }

    // Search for USDT
    document.getElementById('usdtSearch').addEventListener('keyup', function () {
        filterList('usdtSearch', 'usdtList');
    });

    // Search for ETH
    document.getElementById('ethSearch').addEventListener('keyup', function () {
        filterList('ethSearch', 'ethList');
    });

    // Currency selection
    document.querySelectorAll('#usdtList li, #ethList li').forEach(function (item) {
        item.addEventListener('click', function () {
            const selectedSymbol = this.dataset.symbol;
            const selectedImgSrc = this.dataset.imgSrc; // Get the image URL
            const modal = this.closest('.modal');
            const isUsdtModal = modal.id === "usdtModal";

            if (isUsdtModal) {
                document.getElementById('usdtLabel').textContent = selectedSymbol;
                document.getElementById('usdtAmount').textContent = `1000 ${selectedSymbol}`;
                document.getElementById('usdtImg').src = selectedImgSrc; // Change the image
            } else {
                document.getElementById('ethLabel').textContent = selectedSymbol;
                document.getElementById('ethAmount').textContent = `0.4329 ${selectedSymbol}`;
                document.getElementById('ethImg').src = selectedImgSrc; // Change the image
            }

            // Close the modal
            const bsModal = bootstrap.Modal.getInstance(modal);
            bsModal.hide();
        });
    });

    // Swap button
    document.getElementById('swapButton').addEventListener('click', function () {
        const usdtLabelElem = document.getElementById('usdtLabel');
        const ethLabelElem = document.getElementById('ethLabel');
        const usdtAmountElem = document.getElementById('usdtAmount');
        const ethAmountElem = document.getElementById('ethAmount');

        // Get the images
        const usdtImgElem = document.getElementById('usdtImg');
        const ethImgElem = document.getElementById('ethImg');

        // Store current values
        const tempLabel = usdtLabelElem.textContent;
        const tempAmount = usdtAmountElem.value;
        const tempImgSrc = usdtImgElem.src;

        // Swap the names and amounts of the currencies
        usdtLabelElem.textContent = ethLabelElem.textContent;
        ethLabelElem.textContent = tempLabel;

        usdtAmountElem.value = ethAmountElem.value;
        ethAmountElem.value = tempAmount;

        // Swap the images
        usdtImgElem.src = ethImgElem.src;
        ethImgElem.src = tempImgSrc;
    });
});