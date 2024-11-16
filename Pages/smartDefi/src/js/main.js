document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the selected item's data
        const selectedName = this.getAttribute('data-name');
        const selectedIcon = this.getAttribute('data-icon');

        // Update the main button content
        const button = document.querySelector('.network-btn');
        button.innerHTML = `<img src="${selectedIcon}" alt="${selectedName} Icon" class="selected-icon"> ${selectedName}`;

        // Remove the active class from all items and add it to the selected item
        document.querySelectorAll('.dropdown-item').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

// Enable all tooltips on the page
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Enable all popovers on the page
document.addEventListener('DOMContentLoaded', function () {
    // Store all popovers in a variable for management
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Close popovers when clicking outside of them
    document.addEventListener('click', function (event) {
        popoverList.forEach(function (popover) {
            // If the clicked element is not inside the popover or trigger icon, hide the popover
            if (!popover._element.contains(event.target) && !event.target.closest('[data-bs-toggle="popover"]')) {
                popover.hide();
            }
        });
    });
});
