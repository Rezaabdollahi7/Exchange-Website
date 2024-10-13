function stakeEvents() {
    document.querySelectorAll('.wallet-item a').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const target = this.getAttribute('data-target'); // Get the target modal ID
            const modal = new bootstrap.Modal(document.querySelector(target)); // Create a modal instance
            modal.show(); // Show the modal
        });
    });

    document.getElementById('copyButton').addEventListener('click', function () {
        // Get the wallet address text
        const walletAddress = document.getElementById('walletAddress').innerText;

        // Create a temporary textarea element
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = walletAddress;
        document.body.appendChild(tempTextarea);

        // Select the text in the textarea
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text to the clipboard
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(tempTextarea);

        // Optionally, show a message or feedback to the user
        alert('Wallet address copied to clipboard!');
    });


    document.querySelector('.remove-btn').addEventListener('click', function () {
        const modalFooter = document.querySelector('.modal-footer');
        const cancelButton = document.querySelector('.cancel-btn');
        const modal_title = document.querySelector('.modal-title');
        const modal_text = document.querySelector('.modal-text');
        const image = document.querySelector('.delete-icon');

        // Remove the cancel button
        modalFooter.removeChild(cancelButton);

        // Make the remove button take full width and change to loading state
        const removeButton = this;
        removeButton.classList.add('w-100');

        // Create loading image
        const loadingImage = document.createElement('img');
        loadingImage.src = './assets/meta-wallet-icons/icons8-preloader-96.png'; // Loading image
        loadingImage.alt = 'Loading...';
        loadingImage.style.width = '40px';
        loadingImage.style.verticalAlign = 'middle';
        loadingImage.classList.add('loading'); // Add loading class for spinning animation

        // Set inner HTML to loading image
        removeButton.innerHTML = ''; // Clear the button content
        removeButton.appendChild(loadingImage); // Append the loading image

        // After 3 seconds, update the button
        setTimeout(() => {

            modal_title.innerHTML = 'Wallet deleted';
            modal_text.innerHTML = 'Your wallet was successfully deleted. You can create a new wallet';


            const newSrc = './assets/meta-wallet-icons/tick.svg'; // New image link
            image.src = newSrc;

            // Change button text and color
            removeButton.innerHTML = 'Delete was successful';
            removeButton.style.backgroundColor = '#0caf60'; // Green color
            removeButton.style.color = '#ffffff'; // White text
            removeButton.style.border = 'none'; // Remove border
            removeButton.style.boxShadow = '0px 3.37px 15.57px 0px #0CAF6066'; // Remove border
        }, 3000);
    });



}

export { stakeEvents }