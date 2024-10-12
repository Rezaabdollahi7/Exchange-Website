function exchangeEvents() {

    document.addEventListener('DOMContentLoaded', function () {
        const textareas = document.querySelectorAll('textarea');

        textareas.forEach((textarea) => {
            textarea.value = '';
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const forms = document.querySelectorAll('form');

        forms.forEach((form, index) => {
            const textarea = form.querySelector(`textarea`);
            const importButton = form.querySelector(`button`);
            const spanText = importButton.querySelector('span');
            const loadingImg = importButton.querySelector('img');

            textarea.addEventListener('input', function () {
                const container = document.getElementById(`textarea-container-${index + 1}`);
                if (this.value.length > 0) {
                    container.classList.add('text-entered');
                } else {
                    container.classList.remove('text-entered');
                }
            });

            importButton.addEventListener('click', function (event) {
                event.preventDefault();
                spanText.classList.add('d-none');
                loadingImg.classList.remove('d-none');

                setTimeout(() => {
                    spanText.classList.remove('d-none');
                    loadingImg.classList.add('d-none');
                }, 4000);
                setTimeout(() => showAlert(), 4000);


            });
        });
        function showAlert() {
            const alertBox = document.querySelector('.alert-box');

            alertBox.classList.remove('d-none');
            alertBox.classList.add('d-flex');

            setTimeout(() => {
                alertBox.classList.remove('d-flex');
                alertBox.classList.add('d-none');
            }, 4000);
        }
    });

}

export { exchangeEvents }