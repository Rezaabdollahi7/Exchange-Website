function preferencesEvents() {
        // Add click event listeners to each link
        document.querySelectorAll('.option-item a').forEach(item => {
            item.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent default link behavior
                const target = this.getAttribute('data-target'); // Get the target modal ID
                const modal = new bootstrap.Modal(document.querySelector(target)); // Create a modal instance
                modal.show(); // Show the modal
            });
        });

        // Function to filter the currency list based on search input
        document.getElementById('currencySearch').addEventListener('keyup', function () {
            const searchValue = this.value.toLowerCase();
        const items = document.querySelectorAll('#currencyList .list-group-item');

            items.forEach(item => {
                const label = item.querySelector('label').textContent.toLowerCase();
        if (label.includes(searchValue)) {
            item.style.display = 'flex'; // Show item
                } else {
            item.style.display = 'none'; // Hide item
                }
            });
        });

        document.getElementById('langSearch').addEventListener('keyup', function () {
            const searchValue = this.value.toLowerCase();
        const items = document.querySelectorAll('#langList .list-group-item');

            items.forEach(item => {
                const label = item.querySelector('label').textContent.toLowerCase();
        if (label.includes(searchValue)) {
            item.style.display = 'flex'; // Show item
                } else {
            item.style.display = 'none'; // Hide item
                }
            });
        });

        // Email Input image with focus
        const langSearchInput = document.getElementById('langSearch');
        const searchIcon = document.getElementById('langSearchIcon');

        const currencySearchInput = document.getElementById('currencySearch');
        const currencySearchIcon = document.getElementById('currencySearchIcon');

        const blueSearchImg = './assets/images/search-blue.svg';
        const defaultSearchImg = './assets/images/search-normal.svg';

        langSearchInput.addEventListener('focus', () => {
            searchIcon.src = blueSearchImg;
        });

        langSearchInput.addEventListener('blur', () => {
            searchIcon.src = defaultSearchImg;
        });

        currencySearchInput.addEventListener('focus', () => {
            currencySearchIcon.src = blueSearchImg;
        });

        currencySearchInput.addEventListener('blur', () => {
            currencySearchIcon.src = defaultSearchImg;
        });



}

export{preferencesEvents}