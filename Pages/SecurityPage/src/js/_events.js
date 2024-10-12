function securityEvents() {
    // Add click event listeners to each link
    document.querySelectorAll('.security-item a').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const target = this.getAttribute('data-target'); // Get the target modal ID
            const modal = new bootstrap.Modal(document.querySelector(target)); // Create a modal instance
            modal.show(); // Show the modal
        });
    });

    // Email verify
    document.getElementById("emailSubmitButton").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        const formContainer = document.querySelector(".form-container");
        formContainer.innerHTML = `
    <div class="text-center d-flex justify-content-center align-items-center flex-column">
        <img class="mt-4" src="./assets/email-check.svg" alt="status-image" class="img-fluid mx-auto" />
        <h3 class="mt-3 check-imail-title text-white">Check your email</h3>
        <p class="mt-2 check-email-sub-title text-white-50">We will now send an email to it. To continue, click on the
            link in your email.</p>
        <a href="#" class="w-100 " style="
                    background-color: #006FFF;
                    font-size: 16px;
                    color: white;
                    text-decoration: none;
                    border-radius: 25px;       
                    vertical-align: middle;
                    text-align: center;
                    padding: 0.75rem 0;
                    margin-top: 7.5rem;">
            Open inbox →
        </a>
    </div>
    `;
    });

    // Email Input image with focus
    const emailInput = document.getElementById('emailInput');
    const messageIcon = document.getElementById('emailMessegaIcon');

    const currentPasswordInput = document.getElementById('currentPassword');
    const newPasswordInput = document.getElementById('newPassword');
    const renewPasswordInput = document.getElementById('reNewPassword');

    const currentPasswordImg = document.getElementById('currentPasswordImg');
    const newPasswordImg = document.getElementById('newPasswordImg');
    const renewPasswordImg = document.getElementById('reNewPasswordImg');

    const blueKeyImg = './assets/Password.png';
    const defaultKeyImg = './assets/Password.svg';

    const defaultIcon = './assets/Message.svg';
    const focusedIcon = './assets/Message.png';

    emailInput.addEventListener('focus', () => {
        messageIcon.src = focusedIcon;
    });

    emailInput.addEventListener('blur', () => {
        messageIcon.src = defaultIcon;
    });

    currentPasswordInput.addEventListener('focus', () => {
        currentPasswordImg.src = blueKeyImg;
    });

    currentPasswordInput.addEventListener('blur', () => {
        currentPasswordImg.src = defaultKeyImg;
    });

    newPasswordInput.addEventListener('focus', () => {
        newPasswordImg.src = blueKeyImg;
    });

    newPasswordInput.addEventListener('blur', () => {
        newPasswordImg.src = defaultKeyImg;
    });

    renewPasswordInput.addEventListener('focus', () => {
        renewPasswordImg.src = blueKeyImg;
    });

    renewPasswordInput.addEventListener('blur', () => {
        renewPasswordImg.src = defaultKeyImg;
    });

    // Phone verify
    // Filtering country codes based on search
    document.getElementById('searchCountry').addEventListener('input', function () {
        var filter = this.value.toLowerCase();
        var items = document.querySelectorAll('.country-item');
        items.forEach(function (item) {
            var text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Setting selected country code
    var countryCodeDropdown = document.getElementById('countryCodeDropdown');
    var countryItems = document.querySelectorAll('.country-item');
    countryItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            var code = this.getAttribute('data-country-code');
            countryCodeDropdown.textContent = code;
        });
    });

    // Password reset
    document.getElementById('passwordResetForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const reNewPassword = document.getElementById('reNewPassword').value;

        if (newPassword !== reNewPassword) {
            alert('New passwords do not match!');
            return;
        }

        // Additional logic for password validation can be added here
        alert('Password has been successfully reset!');
        // Here, you can proceed to submit the form via AJAX or another method.
    });
}

export { securityEvents }