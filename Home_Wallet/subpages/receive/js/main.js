const copyAddress = document.querySelector('#dest-link');
const copyButton = document.querySelector("#copyBtn");

copyButton.addEventListener('click', () => {
    const text = copyAddress.textContent.trim();
    navigator.clipboard.writeText(text);
    alert("Copied text: " + text);
})