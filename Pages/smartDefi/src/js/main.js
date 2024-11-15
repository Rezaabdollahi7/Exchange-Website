document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        // گرفتن اطلاعات آیتم انتخاب شده
        const selectedName = this.getAttribute('data-name');
        const selectedIcon = this.getAttribute('data-icon');

        // به‌روزرسانی محتوای دکمه اصلی
        const button = document.querySelector('.network-btn');
        button.innerHTML = `<img src="${selectedIcon}" alt="${selectedName} Icon" class="selected-icon"> ${selectedName}`;

        // حذف کلاس active از تمام آیتم‌ها و اضافه کردن آن به آیتم انتخاب‌شده
        document.querySelectorAll('.dropdown-item').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

// فعال‌سازی همه Tooltip‌ها در صفحه
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
});


// فعال‌سازی همه Popoverها در صفحه
document.addEventListener('DOMContentLoaded', function () {
    // ذخیره کردن تمام Popover ها در متغیری برای مدیریت
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // بستن Popover زمانی که خارج از آن کلیک می‌شود
    document.addEventListener('click', function (event) {
        popoverList.forEach(function (popover) {
            // اگر عنصر کلیک شده داخل Popover یا آیکون trigger نباشد، Popover را ببندید
            if (!popover._element.contains(event.target) && !event.target.closest('[data-bs-toggle="popover"]')) {
                popover.hide();
            }
        });
    });
});
