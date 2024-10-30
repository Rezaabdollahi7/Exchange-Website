function copyEvent() {
    document.querySelectorAll('.address-item').forEach(item => {
        item.addEventListener('click', () => {
            const addressText = item.querySelector('.address-text').innerText;
            navigator.clipboard.writeText(addressText);

            item.classList.add('copied');

            setTimeout(() => {
                item.classList.remove('copied');
            }, 2000);
        });
    });
}

export {copyEvent}